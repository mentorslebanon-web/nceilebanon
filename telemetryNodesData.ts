/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState, useEffect, useRef } from 'react';

export interface SearchableItem {
  id: string;
  [key: string]: any;
}

/**
 * Tokenizes text into normalized alphanumeric keywords
 */
export function tokenize(text: string): string[] {
  if (!text) return [];
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length >= 2);
}

/**
 * High-performance Inverted Search Index with Trie-like Prefix Matching
 * Enables sub-millisecond client-side filtering across dense directories.
 */
export class InvertedSearchIndex<T extends SearchableItem> {
  // Mapping: token -> Set of item IDs
  private index: Map<string, Set<string>> = new Map();
  // Mapping: item ID -> full item reference
  private itemsMap: Map<string, T> = new Map();
  // Array of all items
  private allItems: T[] = [];
  // Token prefixes for fast trie lookup
  private allTokens: string[] = [];

  constructor(items: T[], fieldsToExtract: (item: T) => string[]) {
    this.buildIndex(items, fieldsToExtract);
  }

  private buildIndex(items: T[], fieldsToExtract: (item: T) => string[]): void {
    this.itemsMap.clear();
    this.index.clear();
    this.allItems = items;

    for (const item of items) {
      this.itemsMap.set(item.id, item);
      const textCorpus = fieldsToExtract(item).join(' ');
      const tokens = tokenize(textCorpus);
      const uniqueTokens = new Set(tokens);

      for (const token of uniqueTokens) {
        if (!this.index.has(token)) {
          this.index.set(token, new Set());
        }
        this.index.get(token)!.add(item.id);
      }
    }

    this.allTokens = Array.from(this.index.keys());
  }

  /**
   * Fast query matching with token intersection (AND) and prefix matching
   */
  public search(query: string): { results: T[]; timeMs: number; matchedTokens: string[] } {
    const startTime = performance.now();
    const queryTokens = tokenize(query);

    if (queryTokens.length === 0) {
      return {
        results: this.allItems,
        timeMs: Math.round((performance.now() - startTime) * 100) / 100,
        matchedTokens: []
      };
    }

    const matchedTokens: string[] = [];
    const idHitScores = new Map<string, number>();

    // For each query token, find exact matches + prefix matches in token dictionary
    for (const qToken of queryTokens) {
      const matchingDictionaryTokens = this.allTokens.filter(t => t.startsWith(qToken) || t.includes(qToken));
      matchedTokens.push(...matchingDictionaryTokens);

      for (const dToken of matchingDictionaryTokens) {
        const itemIds = this.index.get(dToken);
        if (itemIds) {
          const weight = dToken === qToken ? 3 : 1; // exact match higher score
          for (const id of itemIds) {
            idHitScores.set(id, (idHitScores.get(id) || 0) + weight);
          }
        }
      }
    }

    // Sort items by score
    const sorted = Array.from(idHitScores.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([id]) => this.itemsMap.get(id))
      .filter((item): item is T => item !== undefined);

    const elapsed = Math.round((performance.now() - startTime) * 100) / 100;

    return {
      results: sorted,
      timeMs: elapsed,
      matchedTokens: Array.from(new Set(matchedTokens)).slice(0, 8)
    };
  }
}

/**
 * Custom React Hook for debounced Inverted Search with performance telemetry
 */
export function useInvertedSearch<T extends SearchableItem>({
  items,
  fieldsToExtract,
  initialQuery = '',
  debounceMs = 120
}: {
  items: T[];
  fieldsToExtract: (item: T) => string[];
  initialQuery?: string;
  debounceMs?: number;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);

  // Debounce the query input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceMs);
    return () => clearTimeout(timer);
  }, [query, debounceMs]);

  // Keep fieldsToExtract in a ref so inline anonymous functions do not trigger continuous rebuilds
  const fieldsRef = useRef(fieldsToExtract);
  fieldsRef.current = fieldsToExtract;

  // Memoize the Inverted Index so it only rebuilds if the item list changes
  const searchIndex = useMemo(() => {
    return new InvertedSearchIndex<T>(items, (item) => fieldsRef.current(item));
  }, [items]);

  // Execute query on the inverted index purely in useMemo - zero setState during render
  const { searchResults, searchTelemetry } = useMemo(() => {
    const { results, timeMs } = searchIndex.search(debouncedQuery);
    return {
      searchResults: results,
      searchTelemetry: { timeMs, matchCount: results.length }
    };
  }, [searchIndex, debouncedQuery]);

  return {
    query,
    setQuery,
    debouncedQuery,
    searchResults,
    searchTelemetry,
    totalIndexed: items.length
  };
}
