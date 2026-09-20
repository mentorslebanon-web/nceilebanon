/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import { 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Store, 
  Radio, 
  Terminal, 
  FileText, 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  Code2, 
  CheckCircle2, 
  Layers, 
  BarChart3, 
  Bot,
  Users,
  Star,
  MapPin,
  BookOpen,
  Scale,
  AlertTriangle
} from 'lucide-react';
import { 
  CORE_COMPETENCIES, 
  DEPLOYMENT_PROJECTS, 
  LIVE_CHANNELS, 
  INDUSTRY_GUILDS, 
  TECHNICAL_VALUES, 
  NATIONAL_CV, 
  STARTUPS_MANAGED 
} from '../data/ecosystemData';
import { SEED_YELLOW_PAGES_MEMBERS } from '../data/yellowPagesData';
import { POLICY_PAPERS_CATALOG } from '../data/policyPapersData';
import { AiCoursesSection } from './AiCoursesSection';

interface SectionExcerptsProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess: () => void;
}

export const SectionExcerpts: React.FC<SectionExcerptsProps> = ({
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess
}) => {
  return (
    <div className="space-y-16 py-12">
      {/* SECTION 1: CORE COMPETENCIES & FOUNDER VALUE PROPOSITIONS */}
      <section className="border border-slate-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs hover:border-cyan-300 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
              <ShieldCheck className="w-3 h-3 text-cyan-600" />
              <span>Section 01 // Strategic Foundation</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Core Competencies & Founder Value Propositions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Equipping frontier entrepreneurs with institutional backing, agentic scaling, RAG architectures, and venture authority.
            </p>
          </div>
          <button
            id="excerpt-btn-competencies"
            onClick={() => onNavigate('competencies')}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-cyan-100 hover:bg-cyan-200 transition-colors shrink-0"
          >
            <span>Explore Full Competencies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {CORE_COMPETENCIES.slice(0, 3).map((comp) => (
            <div 
              key={comp.id} 
              onClick={() => onNavigate('competencies')}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:bg-slate-50/80 cursor-pointer transition-all flex flex-col justify-between space-y-3 group"
            >
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors">{comp.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-3">{comp.description}</p>
              </div>
              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                <span className="font-mono text-cyan-700 font-semibold">{comp.impactMetric}</span>
                <span className="text-slate-400 font-mono text-[10px] group-hover:text-slate-700">{comp.tags[0]} →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-500">
          <span>Covers: AI BizDev, Multi-Agent RAG, Strategic Partnerships, GTM & Brand Authority, and Coaching.</span>
          <button 
            onClick={() => onNavigate('competencies')}
            className="text-cyan-700 font-bold hover:underline inline-flex items-center space-x-1"
          >
            <span>View All 5 Pillars →</span>
          </button>
        </div>
      </section>

      {/* FEATURED: NCEI YELLOW PAGES FOR MEMBERS */}
      <section className="border-2 border-amber-300 rounded-2xl bg-amber-50/20 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-amber-200">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 mb-2">
              <Users className="w-3 h-3 text-amber-700" />
              <span>Ecosystem Member Registry // Yellow Pages</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
              961AI Yellow Pages for Members
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Discover verified founders, deep AI researchers, sovereign systems architects, and mentor guilds across Lebanon and the diaspora. Connect directly via WhatsApp, phone, or Live Nexus.
            </p>
          </div>
          <button
            id="excerpt-btn-yellow-pages"
            onClick={() => onNavigate('yellow-pages')}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shrink-0 shadow-sm border border-amber-500"
          >
            <Users className="w-3.5 h-3.5" />
            <span>Open Yellow Pages Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {SEED_YELLOW_PAGES_MEMBERS.slice(0, 3).map((member) => (
            <div 
              key={member.id} 
              onClick={() => onNavigate('yellow-pages')}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 cursor-pointer transition-all flex flex-col justify-between space-y-3 shadow-xs group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                    {member.badge}
                  </span>
                  <div className="flex items-center space-x-1 text-[11px] text-amber-600 font-mono font-bold">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{member.rating.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-950 text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-950 truncate group-hover:text-amber-600 transition-colors">{member.name}</h3>
                    <p className="text-xs text-slate-500 truncate">{member.title}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2">{member.bio}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center space-x-1 truncate">
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="truncate">{member.location}</span>
                </span>
                <span className="font-bold text-slate-900 shrink-0 group-hover:text-amber-600">{member.hourlyRate} →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-500">
          <span>Official Yellow Pages Directory: Direct contact, verified credentials, and escrow services.</span>
          <button 
            onClick={() => onNavigate('yellow-pages')}
            className="text-amber-800 font-bold hover:underline inline-flex items-center space-x-1"
          >
            <span>Browse All {SEED_YELLOW_PAGES_MEMBERS.length}+ Members →</span>
          </button>
        </div>
      </section>

      {/* POLICY AND RESEARCH PAPERS SECTION */}
      <section className="border-2 border-cyan-200 rounded-2xl bg-gradient-to-b from-cyan-50/30 to-white p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-cyan-100">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-100 text-cyan-900 border border-cyan-300 mb-2">
              <FileText className="w-3 h-3 text-cyan-700" />
              <span>Institutional Research // Policy & Macro Intelligence</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
              Policy and Research Papers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Published by the National Council for Entrepreneurship & Innovation (NCEI Lebanon) and the z961AI Regulatory Intelligence Unit. Groundbreaking frameworks for sovereign AI compliance and macroeconomic venture survival.
            </p>
          </div>
          <button
            id="excerpt-btn-policy-papers"
            onClick={() => onNavigate('policy-papers')}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-extrabold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shrink-0 shadow-sm border border-cyan-500"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Policy & Research Library</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2 Featured Policy & Research Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
          {POLICY_PAPERS_CATALOG.map((paper) => (
            <div
              key={paper.id}
              onClick={() => onNavigate('policy-papers')}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all flex flex-col justify-between space-y-4 shadow-xs group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200">
                    {paper.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {paper.issue}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-950 group-hover:text-cyan-700 transition-colors leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {paper.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {paper.abstract}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {paper.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 text-slate-700 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics & Read Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-4">
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block uppercase">{paper.keyMetrics[0].label}</span>
                    <span className="text-xs font-mono font-bold text-slate-900">{paper.keyMetrics[0].value}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block uppercase">{paper.keyMetrics[1].label}</span>
                    <span className="text-xs font-mono font-bold text-cyan-700">{paper.keyMetrics[1].value}</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-cyan-700 group-hover:text-cyan-900 inline-flex items-center space-x-1">
                  <span>Read Full Paper</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-500">
          <span>Peer-reviewed intelligence: AI safety tools, SWOT matrix, StartupBlink rankings, and Anghami/Toters case studies.</span>
          <button 
            onClick={() => onNavigate('policy-papers')}
            className="text-cyan-800 font-bold hover:underline inline-flex items-center space-x-1"
          >
            <span>Read Both Research Papers Online →</span>
          </button>
        </div>
      </section>

      {/* SECTION 2, 3, 4: TECHNICAL AI ARCHITECTURE, BIZ DEV & VERTICAL MARKETPLACES */}
      <section className="border border-slate-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs hover:border-cyan-300 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
              <Cpu className="w-3 h-3 text-cyan-600" />
              <span>Section 02-04 // Past Year Accomplishments</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Technical AI Architecture & Venture Deployments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Product deployments, multi-agent frameworks, macroeconomic terminals, and vertical marketplaces scaled across the MENA region.
            </p>
          </div>
          <button
            id="excerpt-btn-architecture"
            onClick={() => onNavigate('architecture')}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-colors shrink-0"
          >
            <span>View Complete Deployment Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
          {/* Sub-excerpt 1: Technical AI Architecture & App Dev */}
          <div 
            onClick={() => onNavigate('architecture')}
            className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all space-y-3 group"
          >
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">Technical AI & Knowledge</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deep multi-agent supervisor networks (<strong>Ballish, Company Brain</strong>), legal RAG (<strong>Al-Hakam, NexusLM</strong>), automated SaaS deployment hubs, and telemetry portals.
            </p>
            <div className="pt-2 flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">Ballish Agent OS</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">Al-Hakam RAG</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">NexusLM OCR</span>
            </div>
            <div className="pt-1 text-xs font-bold text-cyan-700 inline-flex items-center space-x-1">
              <span>Inspect Deployments</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Sub-excerpt 2: Business Dev, Commercialization & Dealrooms */}
          <div 
            onClick={() => onNavigate('architecture')}
            className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 cursor-pointer transition-all space-y-3 group"
          >
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Commercialization & Dealrooms</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Financial intelligence terminals (<strong>CapitalIssuesIQ, MarketPulse</strong>), incubator dealrooms (<strong>961 Combinator, Zrolodex</strong>), and coaching portals (<strong>RAWCOACH.AI</strong>).
            </p>
            <div className="pt-2 flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">CapitalIssuesIQ</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">961 Combinator</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">RAWCOACH.AI</span>
            </div>
            <div className="pt-1 text-xs font-bold text-amber-700 inline-flex items-center space-x-1">
              <span>Inspect Dealrooms</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Sub-excerpt 3: Vertical Marketplaces & Consumer Tech */}
          <div 
            onClick={() => onNavigate('architecture')}
            className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all space-y-3 group"
          >
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">Vertical Marketplaces</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Artisan e-commerce platforms (<strong>Pickle & Pepper Market</strong>), virtual direct-pay clinic networks (<strong>961Med, FC Pulse</strong>), and B2B growth lead engines.
            </p>
            <div className="pt-2 flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">Pickle & Pepper</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">961Med Telehealth</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">B2B Leads</span>
            </div>
            <div className="pt-1 text-xs font-bold text-cyan-700 inline-flex items-center space-x-1">
              <span>Inspect Marketplaces</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: NCEILEBANON LIVE NEXUS: A LIVING DIGITAL HEADQUARTERS */}
      <section className="border border-cyan-500/30 rounded-2xl bg-slate-950 text-white p-6 sm:p-8 shadow-xl glow-cyan">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-950 text-cyan-400 border border-cyan-500/40 mb-2">
              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>Section 05 // Real-Time Operating System</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              NCEILEBANON Live Nexus: A "Living" Digital Headquarters
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Replacing isolated dashboards with a high-frequency trading-floor and elite developer Discord-on-Steroids architecture.
            </p>
          </div>
          <button
            id="excerpt-btn-livenexus"
            onClick={() => onNavigate('livenexus')}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0"
          >
            <span>Enter Live Nexus Channel OS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Tiers Excerpt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          <div 
            onClick={() => onNavigate('livenexus')}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 cursor-pointer transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">The Public Square</span>
              <span className="text-[10px] font-mono text-cyan-400">Tier 1</span>
            </div>
            <p className="text-xs text-slate-400">
              Open forum for casual networking, news aggregation, and community support with the automated Neural Concierge greeting incoming members.
            </p>
            <div className="text-[11px] font-bold text-cyan-400 pt-1 flex items-center space-x-1">
              <span>Join Channel</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div 
            onClick={() => onNavigate('livenexus')}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 cursor-pointer transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">The Scholar's Lab</span>
              <span className="text-[10px] font-mono text-cyan-400">Tier 2</span>
            </div>
            <p className="text-xs text-slate-400">
              Mid-tier collaborative zone: researchers sharing clean datasets, reviewing daily ArXiv papers, and co-developing open-source prompt libraries.
            </p>
            <div className="text-[11px] font-bold text-cyan-400 pt-1 flex items-center space-x-1">
              <span>Join Channel</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div 
            onClick={() => onNavigate('livenexus')}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 cursor-pointer transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200 group-hover:text-amber-300">Guru's Penthouse & War Rooms</span>
              <span className="text-[10px] font-mono text-amber-400">Tier 3 Encrypted</span>
            </div>
            <p className="text-xs text-slate-400">
              Exclusive channels accessing "Alpha" market signals, high-ticket bounties, and private consultation suites with ticket-based escrow channels.
            </p>
            <div className="text-[11px] font-bold text-amber-400 pt-1 flex items-center space-x-1">
              <span>Enter Suite</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Native AI Bot Highlight */}
        <div className="mt-4 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-cyan-300">
            <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              <strong>Native AI Utilities:</strong> Summon <code className="bg-slate-900 px-1 py-0.5 rounded text-cyan-300">@961Brain</code> directly in any channel for real-time RAG groundings.
            </span>
          </div>
          <button
            onClick={() => onNavigate('livenexus')}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-bold hover:underline shrink-0"
          >
            Test Live Chat Stream →
          </button>
        </div>
      </section>

      {/* SECTION 6: INDUSTRY SERVICES GUILDS & DEVELOPER NEXUS */}
      <section className="border border-slate-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs hover:border-cyan-300 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
              <Terminal className="w-3 h-3 text-cyan-600" />
              <span>Section 06 // Specialized Access & Developer Power</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industry Services Guilds & The Developer Nexus
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Micro-consortiums for FinTech, Healthcare, and Legal Tech with governed Data Cooperatives + unified APIs and SDKs for builders.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onOpenGetAccess}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>"Get Access" Gateway</span>
            </button>
            <button
              id="excerpt-btn-guilds-dev"
              onClick={() => onNavigate('guilds-dev')}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-900 bg-cyan-100 hover:bg-cyan-200 transition-colors"
            >
              <span>Developer Nexus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {/* Guilds Box */}
          <div 
            onClick={() => onNavigate('guilds-dev')}
            className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">Industry Services Guilds</h3>
              <span className="text-[10px] font-mono text-cyan-700 font-bold">HIPAA & GDPR</span>
            </div>
            <p className="text-xs text-slate-600">
              Vetted environments for verified peers: <strong>Data Cooperatives</strong> for secure federated learning, <strong>Regulatory Sandboxes</strong>, and Jargon-Tuned foundation models.
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex items-center space-x-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>FinTech Guild: Basel III & BDL Circular 158/165 compliance</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>Healthcare Guild: HIPAA & MoPH hospital telemetry</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>Legal Tech Guild: Al-Hakam bilingual jurisprudence database</span>
              </div>
            </div>
            <div className="pt-2 text-xs font-bold text-cyan-700 flex items-center space-x-1">
              <span>View Guild Consortiums</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Dev Nexus Box */}
          <div 
            onClick={() => onNavigate('guilds-dev')}
            className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">The Developer Nexus</h3>
              <span className="text-[10px] font-mono text-slate-500 font-bold">Built for Builders</span>
            </div>
            <p className="text-xs text-slate-600">
              Low-level access to the 961AI infrastructure with Unified API keys, drop-in Python and JS SDKs, and sandboxed test playgrounds.
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex items-center space-x-2 text-slate-700">
                <Code2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>Unified API Keys across frontier foundation models</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Code2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>Drop-in Python & JavaScript SDKs + Webhook listeners</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Code2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>Playground environment to dry-run calls with zero credit drain</span>
              </div>
            </div>
            <div className="pt-2 text-xs font-bold text-cyan-700 flex items-center space-x-1">
              <span>Launch Playground & SDK</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TECHNICAL VALUES & LEADERSHIP */}
      <section className="border border-slate-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs hover:border-cyan-300 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
              <Layers className="w-3 h-3 text-cyan-600" />
              <span>Section 07 // Leadership & Engineering Dossier</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Technical Values of z961aiNetwork & AlKhawarizmi Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              AI Integrations, PII Masked Sandboxes (ALmouwateN), Autonomous Agent Networks (aicademy.online, matchprenai.online), and Fintech automations.
            </p>
          </div>
          <button
            id="excerpt-btn-leadership"
            onClick={() => onNavigate('leadership')}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-cyan-100 hover:bg-cyan-200 transition-colors shrink-0"
          >
            <span>View Technical Dossier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {TECHNICAL_VALUES.coreValues.map((v, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate('leadership')}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all space-y-2 group"
            >
              <h3 className="text-xs font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">{v.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-xl bg-cyan-50/60 border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            <strong className="text-cyan-950 font-bold">AlKhawarizmi Solutions | AI Development Lead (Sep 2025 – Present):</strong>
            <span className="text-slate-700 ml-1">Enterprise RAG, Secure AI Sandboxes (ALmouwateN) with PII masking, aicademy.online & matchprenai.online.</span>
          </div>
          <button
            onClick={() => onNavigate('leadership')}
            className="text-cyan-700 font-bold hover:underline shrink-0"
          >
            Explore AlKhawarizmi Profile →
          </button>
        </div>
      </section>

      {/* SECTION 8: OUR CV SO FAR (NATIONAL IMPACT) */}
      <section className="border border-slate-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs hover:border-cyan-300 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
              <FileText className="w-3 h-3 text-cyan-600" />
              <span>Section 08 // Institutional Milestones</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Our CV So Far
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Proven national scale: National COVID-19 VAMS System at Rafic Hariri Hospital, digitization policy blueprints for OMSAR & World Bank, and the SME Revival Strategy.
            </p>
          </div>
          <button
            id="excerpt-btn-national-cv"
            onClick={() => onNavigate('national-cv')}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-cyan-100 hover:bg-cyan-200 transition-colors shrink-0"
          >
            <span>Inspect Full Institutional CV</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {NATIONAL_CV.map((cv) => (
            <div 
              key={cv.id} 
              onClick={() => onNavigate('national-cv')}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-cyan-700 font-semibold">
                <span>{cv.date}</span>
                <span className="text-slate-400">{cv.scope}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">{cv.title}</h3>
              <p className="text-xs text-slate-600 line-clamp-3">{cv.description}</p>
              <div className="pt-2 text-[11px] font-mono font-bold text-slate-800 border-t border-slate-200">
                {cv.impactMetric}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: STARTUPS UNDER MANAGEMENT */}
      <section className="border border-slate-200 rounded-2xl bg-white p-6 sm:p-8 shadow-xs hover:border-cyan-300 transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
              <Rocket className="w-3 h-3 text-cyan-600" />
              <span>Section 09 // Venture Portfolio</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Startups Under Management
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              The 961aiNetwork accelerator, zrolodex.live, zappcademy.xyz, and LogisticsIQ Supply delivering tangible market value.
            </p>
          </div>
          <button
            id="excerpt-btn-startups"
            onClick={() => onNavigate('startups')}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-cyan-100 hover:bg-cyan-200 transition-colors shrink-0"
          >
            <span>View All Startups</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {STARTUPS_MANAGED.map((startup) => (
            <div 
              key={startup.id} 
              onClick={() => onNavigate('startups')}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all flex flex-col justify-between space-y-3 group"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">{startup.name}</h3>
                  <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">
                    {startup.timeline}
                  </span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-3">{startup.description}</p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-700 font-medium">
                {startup.metrics}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: 12 ESSENTIAL AI COURSES & CERTIFICATIONS */}
      <AiCoursesSection onNavigate={onNavigate} onOpenMatcher={onOpenMatcher} />
    </div>
  );
};
