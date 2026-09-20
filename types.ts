/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  POLICY_PAPERS_CATALOG, 
  RUNWAY_DEPRECIATION_DATA,
  SWOT_DATA,
  VC_DISLOCATION_PHASES,
  STARTUP_CASE_STUDIES,
  COMPARATIVE_ANALYSIS
} from '../data/policyPapersData';
import { AIComplianceToolsVisualizer } from '../components/AIComplianceToolsVisualizer';
import { PolicyRiskCalculator } from '../components/PolicyRiskCalculator';
import { 
  ArrowLeft, 
  FileText, 
  ShieldCheck, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ExternalLink, 
  Scale, 
  Globe2, 
  Building2, 
  Briefcase, 
  Copy, 
  Check, 
  Download, 
  Layers, 
  Cpu, 
  DollarSign, 
  ShieldAlert, 
  Info,
  ChevronRight,
  TrendingDown,
  Lock,
  Compass,
  FileCheck,
  Sliders
} from 'lucide-react';

interface PolicyResearchPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess?: () => void;
}

export const PolicyResearchPage: React.FC<PolicyResearchPageProps> = ({
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess
}) => {
  const [activePaperId, setActivePaperId] = useState<string>('ai-compliance-middle-east');
  const [copiedCitation, setCopiedCitation] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string>('anghami');

  const currentPaper = POLICY_PAPERS_CATALOG.find(p => p.id === activePaperId) || POLICY_PAPERS_CATALOG[0];

  const handleCopyCitation = () => {
    const citation = activePaperId === 'ai-compliance-middle-east'
      ? `NCEI Lebanon & z961AI Regulatory Intelligence Unit. (2026). "Navigating the Algorithmic Frontier: The Imperative for AI Compliance in the Middle East and Lebanon's Ecosystem." NCEI Policy & Research Papers, Vol. IV.`
      : `NceiLebanon & z961AI Network Intelligence Service. (2026). "Lebanon Ecosystem INVESTMENT RISK HIGHLIGHTS: Impacts from the Ongoing Middle East Conflict, on MENA Startups." Issue 5/2026, Reg 2220 Beirut.`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-cyan-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Ecosystem Overview</span>
          </button>

          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>NCEI LEBANON REG2220 // STRATEGIC INTELLIGENCE</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="pt-8 pb-8 max-w-4xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300">
            <FileText className="w-3.5 h-3.5 text-cyan-700" />
            <span>INSTITUTIONAL POLICY & RESEARCH PAPERS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Policy and Research Papers
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Frontier strategic dossiers, macroeconomic risk models, and regulatory compliance blueprints published by the National Council for Entrepreneurship & Innovation (NCEI) and the z961AI Intelligence Service.
          </p>
        </div>

        {/* Paper Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {POLICY_PAPERS_CATALOG.map((paper) => {
            const isSelected = paper.id === activePaperId;
            return (
              <div
                key={paper.id}
                onClick={() => setActivePaperId(paper.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-white border-cyan-500 shadow-md ring-2 ring-cyan-200'
                    : 'bg-white/80 border-slate-200 hover:border-cyan-300 hover:bg-white shadow-xs'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                      isSelected ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {paper.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {paper.issue}
                    </span>
                  </div>
                  <h3 className={`text-base font-extrabold leading-snug ${isSelected ? 'text-slate-950' : 'text-slate-800'}`}>
                    {paper.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {paper.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{paper.date} • {paper.readTime}</span>
                  <span className={`font-bold flex items-center space-x-1 ${isSelected ? 'text-cyan-700' : 'text-slate-600'}`}>
                    <span>{isSelected ? 'Active Paper' : 'Read Paper'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Paper Document Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          {/* Document Header Banner */}
          <div className="bg-slate-950 text-white p-6 sm:p-10 border-b border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-4 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/40 font-bold">
                  {currentPaper.registryId}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-300">{currentPaper.publisher}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-400">{currentPaper.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {currentPaper.title}
              </h2>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentPaper.subtitle}
              </p>

              {/* Action Toolbar */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyCitation}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 hover:text-white hover:border-slate-500 transition-colors"
                >
                  {copiedCitation ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{copiedCitation ? 'Citation Copied' : 'Copy Citation'}</span>
                </button>
                <button
                  onClick={() => {
                    setActivePaperId('lebanon-ecosystem-investment-risk');
                    setTimeout(() => {
                      const el = document.getElementById('risk-calculator-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs font-mono hover:bg-amber-300 transition-colors shadow-xs"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Runway Risk Calculator & PDF</span>
                </button>
                <div className="flex flex-wrap gap-1.5">
                  {currentPaper.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 text-cyan-300 border border-cyan-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Paper Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800">
              {currentPaper.keyMetrics.map((km, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">{km.label}</span>
                  <span className="text-lg sm:text-xl font-extrabold text-cyan-400 font-mono block">{km.value}</span>
                  {km.subtext && <span className="text-[11px] text-slate-400 block leading-tight">{km.subtext}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Abstract / Executive Synopsis Callout */}
          <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
            <div className="max-w-4xl space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                <Info className="w-3.5 h-3.5 text-cyan-600" />
                <span>Executive Abstract</span>
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                "{currentPaper.abstract}"
              </p>
            </div>
          </div>

          {/* DOCUMENT BODY CONTENT */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-12 max-w-5xl">

            {/* =======================================================
                PAPER 1: AI COMPLIANCE IN THE MIDDLE EAST & LEBANON
               ======================================================= */}
            {activePaperId === 'ai-compliance-middle-east' && (
              <div className="space-y-12">
                
                {/* Introduction & Global Shift */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 text-xs font-mono font-bold flex items-center justify-center">00</span>
                    <span>The Regulatory Paradigm Shift</span>
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Globally, regulatory bodies have shifted from soft guidelines to strict legal enforcement, anchored by frameworks such as the <strong>EU AI Act</strong>, <strong>NIST AI Risk Management Framework (RMF)</strong>, and <strong>ISO/IEC 42001</strong>. Compliance is no longer an afterthought; it is an operational prerequisite.
                  </p>
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start space-x-3 text-xs text-amber-900 leading-relaxed">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>The Enterprise Threat Matrix:</strong> Operating without systematic oversight introduces grave threats: algorithmic bias, severe data privacy leaks, shadow AI deployment, and existential regulatory non-compliance across cross-border procurement pipelines.
                    </div>
                  </div>
                </div>

                {/* Section 1: The Core Need for AI Compliance */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 text-xs font-mono font-bold flex items-center justify-center">01</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                      The Core Need for AI Compliance
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    AI systems present distinct risks that standard IT governance cannot manage. Traditional infrastructure audits assume deterministic software behavior; modern multi-agent systems and stochastic LLMs require continuous runtime control:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center space-x-2 text-rose-700 font-bold text-sm">
                        <ShieldAlert className="w-4 h-4" />
                        <h4>Algorithmic Bias & Discrimination</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Autonomous decision-making tools (e.g., in hiring, credit scoring, healthcare) can systematically discriminate against protected demographics, creating immense legal liability and brand degradation.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center space-x-2 text-amber-700 font-bold text-sm">
                        <Lock className="w-4 h-4" />
                        <h4>Data Privacy & Exfiltration</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Generative models risk ingesting and leaking sensitive personal data, patient medical records, or proprietary trade secrets into public training corpora or unencrypted third-party cache layers.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center space-x-2 text-cyan-700 font-bold text-sm">
                        <Cpu className="w-4 h-4" />
                        <h4>Shadow AI & Tool Sprawl</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Employees routinely paste company confidential data into unauthorized AI interfaces or spawn autonomous agents without central IT visibility, identity verification, or runtime controls.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center space-x-2 text-indigo-700 font-bold text-sm">
                        <Scale className="w-4 h-4" />
                        <h4>Legal Liability & Board Accountability</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Modern statutes enforce strict transparency obligations, mandate technical documentation, and hold executive boards directly accountable for unmonitored AI systems operating within commercial workflows.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: Unmasking the AI Compliance Tooling Landscape */}
                <div className="space-y-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 text-xs font-mono font-bold flex items-center justify-center">02</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                      Unmasking the AI Compliance Tooling Landscape
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The AI compliance market has matured into four distinct architectural categories: <strong>Enterprise AI Governance Platforms</strong>, <strong>Runtime Control & Agent Gateways</strong>, <strong>AI-Powered GRC Automation</strong>, and <strong>Regulatory Intelligence & Tracking</strong>. Explore their operational mechanics, comparative performance indexes, and deployment strategies below:
                  </p>

                  {/* Interactive Data Visualization Component: Table, Capability Chart, and Architecture Stack */}
                  <AIComplianceToolsVisualizer />
                </div>

                {/* Section 3: Why AI Compliance is Vital for Lebanon */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 text-xs font-mono font-bold flex items-center justify-center">03</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                      Why AI Compliance is Vital for Lebanon
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    For Lebanese enterprises, banks, tech providers, and public bodies, AI compliance serves three strategic objectives:
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                      <h4 className="text-sm font-bold text-slate-950 flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                        <span>Local Legal Alignment (Law 81/2018)</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Lebanon’s Law 81/2018 on Electronic Transactions and Personal Data strictly regulates how organizations process, store, and cross-border transfer personal data. Deploying cloud-hosted LLMs that process Lebanese citizen data creates immediate compliance friction regarding data residency, consent, and user deletion rights. AI compliance protocols enable local institutions to adopt on-premise or sovereign regional Arabic models with proper de-identification layers.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                      <h4 className="text-sm font-bold text-slate-950 flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        <span>Cross-Border Trade & GCC Integration</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Lebanese service exports depend heavily on the GCC (UAE, Saudi Arabia) and Europe. As both regions enforce strict AI and data governance regimes, Lebanese tech firms must prove algorithmic transparency and compliance to secure cross-border enterprise contracts.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                      <h4 className="text-sm font-bold text-slate-950 flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                        <span>Financial Sector Integrity</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Lebanon’s banking and fintech sectors face continuous international scrutiny. Implementing compliant, explainable AI for Anti-Money Laundering (AML), fraud detection, and credit scoring is mandatory to prevent algorithmic sanctions risk and maintain global banking relationships.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4: The Lebanese Entrepreneurship Ecosystem: The Strategic Twist */}
                <div className="space-y-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 text-xs font-mono font-bold flex items-center justify-center">04</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                      The Lebanese Entrepreneurship Ecosystem: The Strategic Twist
                    </h3>
                  </div>
                  
                  <div className="p-5 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-2">
                    <h4 className="text-sm font-bold text-cyan-950">The "Trust Arbitrage" Play</h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The traditional narrative frames compliance as a costly administrative burden—a luxury that startups in crisis-struck developing economies cannot afford. In Lebanon’s ecosystem, the opposite is true: <strong>compliance is a distinct competitive moat</strong>.
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Lebanon’s entrepreneurship ecosystem is characterized by hyper-agile, highly educated engineering talent operating in a high-volatility home market. Most Lebanese tech startups build locally with the immediate intent to expand into Saudi Arabia, the UAE, Europe, or North America.
                    </p>
                  </div>

                  {/* Visual Flowchart Diagram */}
                  <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-mono font-bold text-cyan-400">THE TRUST ARBITRAGE ARCHITECTURE</span>
                      <span className="text-[10px] font-mono text-slate-400">NCEI STRATEGIC FLOW</span>
                    </div>

                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-full max-w-lg p-4 rounded-xl bg-slate-900 border border-slate-700 text-center">
                        <div className="text-xs font-mono font-bold text-cyan-300">LEBANESE TECH TALENT</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">(High technical velocity, lean operations)</div>
                      </div>

                      <div className="flex flex-col items-center text-cyan-400">
                        <div className="w-0.5 h-6 bg-cyan-500"></div>
                        <div className="w-2 h-2 rotate-45 border-b-2 border-r-2 border-cyan-400"></div>
                      </div>

                      <div className="w-full max-w-lg p-4 rounded-xl bg-cyan-950/80 border border-cyan-500/60 text-center">
                        <div className="text-xs font-mono font-bold text-cyan-300">EMBEDDED COMPLIANCE BY DESIGN</div>
                        <div className="text-[11px] text-cyan-400/80 mt-0.5">(EU AI Act / ISO 42001 / GCC sovereign alignment)</div>
                      </div>

                      <div className="flex flex-col items-center text-amber-400">
                        <div className="w-0.5 h-6 bg-amber-500"></div>
                        <div className="w-2 h-2 rotate-45 border-b-2 border-r-2 border-amber-400"></div>
                      </div>

                      <div className="w-full max-w-lg p-4 rounded-xl bg-amber-950/80 border border-amber-500/60 text-center">
                        <div className="text-xs font-mono font-bold text-amber-300">THE "TRUST ARBITRAGE" MOAT</div>
                        <div className="text-[11px] text-amber-200/80 mt-0.5">(Bypasses vendor security reviews faster than non-compliant Western competitors)</div>
                      </div>

                      <div className="flex flex-col items-center text-emerald-400">
                        <div className="w-0.5 h-6 bg-emerald-500"></div>
                        <div className="w-2 h-2 rotate-45 border-b-2 border-r-2 border-emerald-400"></div>
                      </div>

                      <div className="w-full max-w-lg p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-center">
                        <div className="text-xs font-mono font-bold text-emerald-300">RAPID ENTERPRISE CROSS-BORDER CONTRACTS</div>
                        <div className="text-[11px] text-emerald-300/80 mt-0.5">(Unlocks Riyadh, Abu Dhabi, London, and Munich procurement)</div>
                      </div>
                    </div>
                  </div>

                  {/* How the Twist Works */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-base font-bold text-slate-950">How the Twist Works in Practice</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wide">01 // Unlocking Enterprise Procurement</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Western and GCC enterprise buyers routinely reject startup vendors during procurement because the startups lack verifiable AI safety controls, data maps, and audit logs.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wide">02 // Lean Regulatory Engineering</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Lebanese founders who build "Compliance-by-Design"—integrating open-weight local deployment patterns, automated guardrails, and continuous evidence mapping—turn regulatory friction into a sales feature.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wide">03 // The Outsourced Governance Hub</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Lebanon can position itself not just as an outsourced software development hub, but as an AI Safety & Regulatory Tech Hub for the MENA region. By developing local expertise in AI auditing, runtime agent governance, and ethical AI tuning for Arabic-centric systems, Lebanese startups can export high-value governance services across the globe.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Callout action for founders */}
                  <div className="mt-6 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">Need AI Compliance Architecture for your Venture?</h4>
                      <p className="text-xs text-slate-400">
                        Run our Neural Matcher to pair with verified AI Safety Engineers and ISO 42001 auditors in the Yellow Pages.
                      </p>
                    </div>
                    <button
                      onClick={onOpenMatcher}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0"
                    >
                      Run Neural Matcher Assessment
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* =======================================================
                PAPER 2: LEBANON ECOSYSTEM INVESTMENT RISK HIGHLIGHTS
               ======================================================= */}
            {activePaperId === 'lebanon-ecosystem-investment-risk' && (
              <div className="space-y-12">
                
                {/* Issue Header & Core Callout */}
                <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-rose-800">
                    <span>ISSUE 5/2026 // CASE STUDY (2026)</span>
                    <span>REG2220 BEIRUT LEBANON</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-rose-950">
                    Impacts from the Ongoing Middle East Conflict on MENA Startups: Lebanon Case Study
                  </h3>
                  <div className="p-4 rounded-xl bg-white border border-rose-200 font-mono text-xs sm:text-sm text-slate-900 font-bold leading-relaxed">
                    "A standard $1.0M annual baseline budget experiences a <span className="text-rose-600">+23.0%</span> post-escalation cost expansion, reducing overall startup runway by approximately <span className="text-rose-600">2.8 months</span>."
                  </div>
                </div>

                {/* Executive Summary */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-slate-950 uppercase tracking-wide font-mono">
                    Executive Summary
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The escalating geopolitics across the Middle East and North Africa (MENA) have redefined the venture capital landscape, shifting it from aggressive growth to risk mitigation, capital preservation, and geographic diversification. Venture funding across the MENA region fell <strong>22% year-on-year to $1.35 billion in H1 2026</strong>, while total deal counts plummeted <strong>41% to 214 transactions</strong>—the lowest half-year volume since at least 2022. International investor participation dropped from 55% to 39%, leaving regional sovereign wealth funds (SWFs) and domestic VCs to supply over 80% of active capital.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Against this backdrop, Lebanon presents an extreme case study. Facing systemic banking insolvency, hyperinflation, and active regional military escalation, the country’s startup ecosystem (<strong>#83 globally</strong>) operates not in spite of perpetual crisis, but as a direct response to it.
                  </p>
                </div>

                {/* SWOT Analysis Matrix */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <h4 className="text-base font-bold text-slate-950 uppercase tracking-wide font-mono">
                    SWOT Analysis: Lebanon Startup Ecosystem (2026)
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Strengths */}
                    <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                      <div className="flex items-center space-x-2 text-emerald-900 font-bold text-xs font-mono uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Strengths</span>
                      </div>
                      <div className="space-y-2">
                        {SWOT_DATA.strengths.map((item, i) => (
                          <div key={i} className="text-xs">
                            <strong className="text-slate-900 block">• {item.title}:</strong>
                            <span className="text-slate-600">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Weaknesses */}
                    <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                      <div className="flex items-center space-x-2 text-amber-900 font-bold text-xs font-mono uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Weaknesses</span>
                      </div>
                      <div className="space-y-2">
                        {SWOT_DATA.weaknesses.map((item, i) => (
                          <div key={i} className="text-xs">
                            <strong className="text-slate-900 block">• {item.title}:</strong>
                            <span className="text-slate-600">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Opportunities */}
                    <div className="p-5 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-3">
                      <div className="flex items-center space-x-2 text-cyan-900 font-bold text-xs font-mono uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4 text-cyan-600" />
                        <span>Opportunities</span>
                      </div>
                      <div className="space-y-2">
                        {SWOT_DATA.opportunities.map((item, i) => (
                          <div key={i} className="text-xs">
                            <strong className="text-slate-900 block">• {item.title}:</strong>
                            <span className="text-slate-600">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Threats */}
                    <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
                      <div className="flex items-center space-x-2 text-rose-900 font-bold text-xs font-mono uppercase tracking-wider">
                        <ShieldAlert className="w-4 h-4 text-rose-600" />
                        <span>Threats</span>
                      </div>
                      <div className="space-y-2">
                        {SWOT_DATA.threats.map((item, i) => (
                          <div key={i} className="text-xs">
                            <strong className="text-slate-900 block">• {item.title}:</strong>
                            <span className="text-slate-600">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Overview: 4-Phase VC Dislocation Arc */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <h4 className="text-base font-bold text-slate-950 uppercase tracking-wide font-mono">
                    Regional Overview: MENA VC Dislocation Arc (2026)
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The ongoing conflicts have triggered a four-phase market dislocation across the broader region:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {VC_DISLOCATION_PHASES.map((p, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">{p.phase}</span>
                          <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">
                            {p.period}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono space-y-2">
                    <div className="text-cyan-400 font-bold">KEY REGIONAL MACRO REALITIES:</div>
                    <ul className="space-y-1 text-slate-300">
                      <li>• <strong>Capital Flight & Tiered Allocation:</strong> UAE attracted $895 million (66%) of all MENA venture capital in H1 2026, followed by Saudi Arabia at $219 million. Non-GCC hubs face acute capital drought.</li>
                      <li>• <strong>Drying Up of Early-Stage:</strong> Investors prioritizing late-stage "mega-rounds" in capital-efficient sectors like FinTech ($617M raised) and Logistics ($273M).</li>
                      <li>• <strong>Secondaries Deal Window:</strong> Valuation resets opened a 9-to-12-month deal window for secondary buyers seeking discounted assets from forced sellers.</li>
                    </ul>
                  </div>
                </div>

                {/* Startup Cost Impact & Runway Depreciation Model */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-950 uppercase tracking-wide font-mono">
                      Startup Cost Impact & Runway Depreciation Model
                    </h4>
                    <span className="text-xs font-mono text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      $1.0M Baseline → $1.23M (+23.0% Expansion)
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Standard $1.0M annual baseline budget across Lebanese tech startups experiencing post-escalation expansion:
                  </p>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-950 text-white font-mono text-[11px] uppercase">
                          <th className="p-3.5">Cost Category</th>
                          <th className="p-3.5">Baseline</th>
                          <th className="p-3.5">Adjusted Amount</th>
                          <th className="p-3.5">Inflation Change</th>
                          <th className="p-3.5">Macroeconomic Driver</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {RUNWAY_DEPRECIATION_DATA.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 font-bold text-slate-950">{row.costCategory}</td>
                            <td className="p-3.5 font-mono text-slate-500">{row.baselineAmount}</td>
                            <td className="p-3.5 font-mono font-bold text-slate-900">{row.adjustedAmount}</td>
                            <td className="p-3.5 font-mono font-bold text-rose-600">{row.change}</td>
                            <td className="p-3.5 text-slate-600">{row.driver}</td>
                          </tr>
                        ))}
                        <tr className="bg-slate-900 text-white font-bold font-mono">
                          <td className="p-3.5">Total Adjusted Budget</td>
                          <td className="p-3.5 text-slate-400">$1,000,000</td>
                          <td className="p-3.5 text-cyan-400">$1,230,000</td>
                          <td className="p-3.5 text-rose-400">+23.0%</td>
                          <td className="p-3.5 text-slate-300">-2.8 months runway contraction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Interactive MENA Geopolitical & Regulatory AI Risk Calculator + 1-Page Briefing PDF Export */}
                <PolicyRiskCalculator />

                {/* Case Study: Lebanon Startup Ecosystem (2026) */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <h4 className="text-base font-bold text-slate-950 uppercase tracking-wide font-mono">
                    Case Study: Lebanon Startup Ecosystem & The Operating Playbook
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Lebanon’s tech sector operates under conditions that would break traditional startup markets: a 98%+ currency devaluation, over $100 billion in frozen bank deposits, near-total reliance on private generators/solar, and active border conflict.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Yet, the local ecosystem holds an estimated value of <strong>$486.7M across ~125 active tech companies</strong>, surviving through radical adaptations:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <h5 className="text-xs font-bold text-slate-950">1. Complete Dollarization & Offshore Structure</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        100% of tech revenues and investments are processed in "Fresh USD" via holding entities registered in Delaware, ADGM (Abu Dhabi), or the UK.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <h5 className="text-xs font-bold text-slate-950">2. Day-One Export Focus</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Domestic B2C/B2B purchasing power is essentially zero. Startups like Toters (logistics/delivery) or Sohati (HealthTech) build locally to export software, content, and services to GCC markets.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <h5 className="text-xs font-bold text-slate-950">3. FinTech as Survival Infrastructure</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        With formal banking broken (only 23% of adults hold formal accounts), BDL Basic Circular No. 1 (2026) formalized e-payment service providers. E-wallets, cross-border remittance apps, and crypto-fiat gateways are vital economic infrastructure.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <h5 className="text-xs font-bold text-slate-950">4. Diaspora Capital Superpower</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Over 90% of venture capital flowing into Lebanese-founded startups originates from the global diaspora, generating over $7 billion annually in remittances and informal angel checks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Beirut Climbing StartupBlink Performance */}
                <div className="p-5 rounded-2xl bg-cyan-950 text-white border border-cyan-500/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-bold">STARTUPBLINK GLOBAL INDEX (2026)</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">+46.3% YoY GROWTH</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Beirut Climbed 36 Places to 341st Globally
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Despite severe macroeconomic headwinds, Beirut climbed to rank 341st globally, making it one of the fastest-rising startup hubs in the MENA region. The ecosystem relies on the <strong>Beiruter Resilience Framework</strong>:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-cyan-400 block mb-1">Offshore Financial Stacks</strong>
                      <span className="text-slate-400 text-[11px]">Decoupled from local banking using Delaware, UAE, or Cayman entities with fresh USD/USDT liquidity.</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-cyan-400 block mb-1">Diaspora VC Mobilization</strong>
                      <span className="text-slate-400 text-[11px]">Networks like LIFE, MEVP, BY Venture Partners, Cedar Mundi, and Phoenician VC bridging to GCC markets.</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <strong className="text-cyan-400 block mb-1">Operations Security</strong>
                      <span className="text-slate-400 text-[11px]">Engineers retained via USD payroll, Employer of Record (EoR), Starlink, and solar power backups.</span>
                    </div>
                  </div>
                </div>

                {/* Case Studies of Top Startups: Anghami & Toters */}
                <div className="space-y-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-slate-950 uppercase tracking-wide font-mono">
                      Deep Dive Case Studies: Anghami & Toters
                    </h4>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedCaseStudy('anghami')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          selectedCaseStudy === 'anghami'
                            ? 'bg-slate-950 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        Anghami Case Study
                      </button>
                      <button
                        onClick={() => setSelectedCaseStudy('toters')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          selectedCaseStudy === 'toters'
                            ? 'bg-slate-950 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        Toters Case Study
                      </button>
                    </div>
                  </div>

                  {/* Selected Case Study Presentation */}
                  {STARTUP_CASE_STUDIES.filter(s => s.id === selectedCaseStudy).map((study) => (
                    <div key={study.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h5 className="text-xl font-extrabold text-slate-950">{study.name}</h5>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                              {study.foundedYear}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 font-medium">Founders: {study.founders}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-800 bg-cyan-50 px-3 py-1 rounded-lg border border-cyan-200">
                          {study.headline}
                        </span>
                      </div>

                      {/* Visual Flowchart */}
                      <div className="p-4 rounded-xl bg-slate-950 text-white space-y-3">
                        <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider">
                          Corporate & Capital Flowchart
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                          {study.flowchart.map((step, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-2">
                              <span className="text-[10px] font-mono text-cyan-400 font-bold">{step.step}</span>
                              <div>
                                <div className="text-xs font-bold text-slate-200">{step.label}</div>
                                <div className="text-[10px] text-slate-400 mt-0.5">{step.subtext}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 3 Pillars */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                        <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <strong className="text-slate-900 block font-mono uppercase">Corporate Structure & Legal</strong>
                          {study.corporateStructure.map((c, i) => (
                            <div key={i} className="space-y-0.5">
                              <span className="font-bold text-slate-800 block">• {c.title}</span>
                              <p className="text-slate-600 text-[11px] leading-relaxed">{c.description}</p>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <strong className="text-slate-900 block font-mono uppercase">GCC Expansion Strategy</strong>
                          {study.gccExpansionStrategy.map((c, i) => (
                            <div key={i} className="space-y-0.5">
                              <span className="font-bold text-slate-800 block">• {c.title}</span>
                              <p className="text-slate-600 text-[11px] leading-relaxed">{c.description}</p>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <strong className="text-slate-900 block font-mono uppercase">Financial & Capital Protection</strong>
                          {study.financialInfrastructure.map((c, i) => (
                            <div key={i} className="space-y-0.5">
                              <span className="font-bold text-slate-800 block">• {c.title}</span>
                              <p className="text-slate-600 text-[11px] leading-relaxed">{c.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Comparative Table */}
                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs font-bold text-slate-950 uppercase tracking-wide font-mono">
                      Key Comparative Takeaways: Anghami vs. Toters
                    </h5>
                    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-slate-200 font-mono text-[11px] uppercase">
                            <th className="p-3.5">Strategic Dimension</th>
                            <th className="p-3.5">Anghami</th>
                            <th className="p-3.5">Toters</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {COMPARATIVE_ANALYSIS.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                              <td className="p-3.5 font-bold text-slate-950">{row.dimension}</td>
                              <td className="p-3.5 text-slate-600">{row.anghami}</td>
                              <td className="p-3.5 text-slate-600">{row.toters}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Comprehensive AI Disclaimer for Intelligence Reports */}
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <div className="p-6 rounded-2xl bg-slate-100 border border-slate-300 space-y-4 text-xs text-slate-700">
                    <div className="flex items-center space-x-2 text-slate-950 font-bold uppercase font-mono">
                      <Info className="w-4 h-4 text-slate-700" />
                      <span>Comprehensive AI Disclaimer for Intelligence Reports</span>
                    </div>
                    
                    <div className="space-y-2 leading-relaxed">
                      <p>
                        <strong>1. AI Involvement & Human Oversight:</strong> This report was prepared with the assistance of Artificial Intelligence (AI) and Machine Learning (ML) tools. AI models were utilized solely for administrative, processing, and supportive functions, including data synthesis, pattern recognition, draft formatting, cross-source summarization, and language translation. Final analytical conclusions, confidence assessments, threat evaluations, and editorial decisions were conducted and validated by human intelligence analysts.
                      </p>
                      <p>
                        <strong>2. Potential for Analytical Errors, Bias, and Hallucinations:</strong> AI models operate probabilistically and are inherently subject to limitations, including algorithmic bias, factual errors ("hallucinations"), data gaps, and misinterpretations of nuanced geopolitical, technical, or cultural contexts. While rigorous verification protocols were applied, AI-assisted content may contain unforeseen inaccuracies.
                      </p>
                      <p>
                        <strong>3. Data Cutoff & Information Currency:</strong> AI models operate within specific data parameters and training cutoffs. Real-time events, fast-moving tactical developments, and classified updates may not be reflected in automated models unless explicitly verified against real-time operational feeds.
                      </p>
                      <p>
                        <strong>4. No Legal or Decision-Making Guarantee:</strong> This document is provided strictly for strategic informational, situational awareness, and analytical planning purposes. Outputs derived from AI assistance should not be relied upon as sole-source grounds for high-stakes operational, policy, legal, or financial decisions. Independent verification against primary source data and corroborating intelligence is strongly required prior to taking official action.
                      </p>
                      <p>
                        <strong>5. Limitation of Liability:</strong> To the maximum extent permitted by applicable policy and governing law, the authors, publishing organization, and platform operators expressly disclaim all liability or responsibility for direct, indirect, or consequential actions taken, or losses incurred, in reliance on AI-generated or AI-assisted content in this report.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-300 text-[11px] font-mono text-slate-500">
                      <strong>Standard Footnote:</strong> Disclaimer: This report was prepared with the assistance of AI tools for data analysis and drafting. All content and analytical conclusions were independently reviewed, fact-checked, and validated by human intelligence analysts.
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

        {/* Bottom Callout & Cross Navigation */}
        <div className="p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-extrabold">Ready to implement sovereign compliance or stress-test your startup?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Access the Developer Nexus for MCP compliance gateways or summon our Neural Matcher to pair with specialized Lebanese regulatory auditors and offshore corporate structuring counsel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onNavigate('guilds-dev')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
            >
              Access Developer Nexus
            </button>
            <button
              onClick={onOpenMatcher}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Launch Neural Matcher
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
