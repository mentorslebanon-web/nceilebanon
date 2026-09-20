/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

export interface VirtualGridConfig {
  itemCount: number;
  estimatedItemHeight: number; // e.g. 380px for a directory card
  columns: number; // responsive column count (1, 2, or 3)
  overscan?: number; // extra rows to render above and below
  gap?: number; // row gap in px
}

/**
 * Hook for virtualizing multi-column grids (like Yellow Pages directory cards)
 * Calculates which rows are currently intersecting the viewport and mounts ONLY those DOM elements.
 */
export function useVirtualGrid({
  itemCount,
  estimatedItemHeight,
  columns = 1,
  overscan = 2,
  gap = 24
}: VirtualGridConfig) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);

  const totalRows = Math.ceil(itemCount / columns);
  const rowHeightWithGap = estimatedItemHeight + gap;
  const totalHeight = Math.max(0, totalRows * rowHeightWithGap - gap);

  // Monitor container scroll and window resizing
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate offset relative to window viewport
        const offset = Math.max(0, -rect.top);
        setScrollTop(offset);
      } else {
        setScrollTop(window.scrollY);
      }
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Compute visible row range
  const { startRow, endRow, startIndex, endIndex, visibleCount } = useMemo(() => {
    const startRowIdx = Math.max(0, Math.floor(scrollTop / rowHeightWithGap) - overscan);
    const visibleRowCount = Math.ceil(viewportHeight / rowHeightWithGap) + overscan * 2;
    const endRowIdx = Math.min(totalRows, startRowIdx + visibleRowCount);

    const sIdx = startRowIdx * columns;
    const eIdx = Math.min(itemCount, endRowIdx * columns);

    return {
      startRow: startRowIdx,
      endRow: endRowIdx,
      startIndex: sIdx,
      endIndex: eIdx,
      visibleCount: Math.max(0, eIdx - sIdx)
    };
  }, [scrollTop, rowHeightWithGap, overscan, viewportHeight, totalRows, columns, itemCount]);

  const offsetY = startRow * rowHeightWithGap;

  return {
    containerRef,
    totalHeight,
    offsetY,
    startIndex,
    endIndex,
    visibleCount,
    totalCount: itemCount,
    startRow,
    endRow
  };
}

export interface VirtualListConfig {
  itemCount: number;
  itemHeight: number; // e.g. 56px per telemetry row
  overscan?: number;
}

/**
 * Hook for virtualizing high-density linear lists (e.g. 466 nodes telemetry table)
 */
export function useVirtualList({
  itemCount,
  itemHeight,
  overscan = 5
}: VirtualListConfig) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(480);

  const totalHeight = itemCount * itemHeight;

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      setContainerHeight(scrollContainerRef.current.clientHeight || 480);
    }
  }, []);

  const { startIndex, endIndex, offsetY, visibleCount } = useMemo(() => {
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const visible = Math.ceil(containerHeight / itemHeight) + overscan * 2;
    const end = Math.min(itemCount, start + visible);

    return {
      startIndex: start,
      endIndex: end,
      offsetY: start * itemHeight,
      visibleCount: Math.max(0, end - start)
    };
  }, [scrollTop, itemHeight, overscan, containerHeight, itemCount]);

  return {
    scrollContainerRef,
    onScroll,
    totalHeight,
    offsetY,
    startIndex,
    endIndex,
    visibleCount,
    totalCount: itemCount
  };
}
