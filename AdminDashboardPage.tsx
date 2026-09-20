/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  FileCheck, 
  Compass, 
  Search, 
  BarChart3, 
  Table, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Users, 
  AlertTriangle, 
  ArrowUpRight, 
  ChevronRight, 
  Info,
  Building,
  Lock,
  Globe,
  SlidersHorizontal,
  Zap,
  Check
} from 'lucide-react';

export interface AIComplianceCategory {
  id: string;
  category: string;
  shortName: string;
  layerNumber: number;
  layerName: string;
  tagline: string;
  leadingTools: string[];
  coreFunctionality: string;
  primaryUseCase: string;
  primaryRiskMitigated: string;
  targetStakeholders: string[];
  deploymentTimeline: string;
  integrationVector: string;
  lebanonTrustArbitrageRole: string;
  menaMarketDriver: string;
  supportedStandards: string[];
  keyCapabilities: string[];
  metrics: {
    realTimeEnforcement: number; // 0-100
    regulatoryCoverage: number;  // 0-100
    auditAutomation: number;     // 0-100
    deploymentVelocity: number;  // 0-100
    trustArbitrageMoat: number;  // 0-100
  };
  accentColor: {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    barFill: string;
    glow: string;
    activeBorder: string;
  };
}

export const AI_COMPLIANCE_CATEGORIES_DATA: AIComplianceCategory[] = [
  {
    id: 'enterprise-governance',
    category: 'Enterprise AI Governance Platforms',
    shortName: 'Enterprise Governance',
    layerNumber: 1,
    layerName: 'Model & Artifact Registry',
    tagline: 'End-to-end model inventory, risk mapping against EU AI Act / NIST, automated documentation, bias tracking',
    leadingTools: ['Credo AI', 'IBM watsonx.governance', 'Holistic AI', 'Arthur Bench'],
    coreFunctionality: 'Centralized model inventory cataloging, risk tiering, fairness & bias evaluations, model card automation, lifecycle approval gates.',
    primaryUseCase: 'Enterprise procurement validation, Board of Directors oversight, institutional risk classification, and high-risk system certification.',
    primaryRiskMitigated: 'Algorithmic bias, model drift, undocumented black-box pipelines, and executive board non-compliance liability.',
    targetStakeholders: ['Chief AI Officer (CAIO)', 'Data Science Directors', 'AI Ethics Committees', 'Board Audit Committees'],
    deploymentTimeline: '4 – 8 Weeks (Comprehensive model cataloging)',
    integrationVector: 'MLOps pipelines (MLflow, Kubeflow), Python SDK, CI/CD model packaging hooks.',
    lebanonTrustArbitrageRole: 'Allows Lebanese AI agencies and software exporters to produce verifiable EU AI Act & NIST technical documentation packages during foreign enterprise tender RFPs.',
    menaMarketDriver: 'UAE AI Ethics Guidelines & Saudi Arabia SDAIA National AI Principles requiring algorithmic provenance verification.',
    supportedStandards: ['EU AI Act (Annex IV/VII)', 'NIST AI RMF 1.0', 'ISO/IEC 42001', 'IEEE 7000'],
    keyCapabilities: [
      'Automated Model Card & System Dossier Generation',
      'Continuous Drift & Bias Disparity Metrics',
      'Enterprise Model Registry & Version Tracking',
      'Role-based Approval Gates & Sign-off Audits'
    ],
    metrics: {
      realTimeEnforcement: 42,
      regulatoryCoverage: 96,
      auditAutomation: 90,
      deploymentVelocity: 58,
      trustArbitrageMoat: 88
    },
    accentColor: {
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-800',
      badgeBorder: 'border-blue-300',
      barFill: 'bg-blue-600',
      glow: 'shadow-blue-500/20',
      activeBorder: 'border-blue-500'
    }
  },
  {
    id: 'runtime-control',
    category: 'Runtime Control & Agent Gateways',
    shortName: 'Runtime Control & Gateways',
    layerNumber: 2,
    layerName: 'Network & MCP Gateway Layer',
    tagline: 'Inline traffic monitoring, dynamic policy enforcement, session isolation, and MCP tool-access controls',
    leadingTools: ['Speakeasy', 'Runlayer', 'Obot Enterprise MCP Gateway', 'Portkey AI Gateway', 'Llama Guard'],
    coreFunctionality: 'Inline token inspection, real-time PII de-identification, agent tool permissions, latency monitoring, prompt injection interception, Model Context Protocol (MCP) authentication.',
    primaryUseCase: 'Preventing sensitive customer data exfiltration to 3rd-party LLMs, containing autonomous agent loops, blocking shadow AI usage, and enforcing granular token budgets.',
    primaryRiskMitigated: 'Data leakage, prompt injection attacks, unvetted agent API calls, cross-border PII transfer violations, and runaway API expenses.',
    targetStakeholders: ['DevOps / SecOps Engineers', 'Enterprise Software Architects', 'Chief Information Security Officers (CISOs)', 'Lead Developers'],
    deploymentTimeline: '1 – 2 Weeks (Reverse-proxy or SDK wrapper drop-in)',
    integrationVector: 'Reverse proxy, Envoy filter, LangChain/LlamaIndex middleware, Model Context Protocol (MCP) server bridge.',
    lebanonTrustArbitrageRole: 'Enables Lebanese engineering teams to deploy bleeding-edge autonomous agents for GCC banks and healthcare systems with guaranteed zero data-leakage SLA warranties.',
    menaMarketDriver: 'Strict Gulf banking secrecy statutes and Lebanon Law 81/2018 personal data transfer restrictions requiring localized or anonymized outbound prompts.',
    supportedStandards: ['OWASP Top 10 for LLMs', 'SOC 2 Type II (Transit Encryption)', 'PCI-DSS', 'ISO 27001'],
    keyCapabilities: [
      'Sub-millisecond Inline Prompt & Payload Inspection',
      'Dynamic PII Masking & Sovereign Token Anonymization',
      'Autonomous Agent Tool-Call Whitelisting via MCP',
      'Zero-Trust Session Isolation & Shadow AI Interception'
    ],
    metrics: {
      realTimeEnforcement: 98,
      regulatoryCoverage: 72,
      auditAutomation: 76,
      deploymentVelocity: 94,
      trustArbitrageMoat: 96
    },
    accentColor: {
      badgeBg: 'bg-cyan-50',
      badgeText: 'text-cyan-800',
      badgeBorder: 'border-cyan-300',
      barFill: 'bg-cyan-600',
      glow: 'shadow-cyan-500/20',
      activeBorder: 'border-cyan-500'
    }
  },
  {
    id: 'grc-automation',
    category: 'AI-Powered GRC Automation',
    shortName: 'GRC Automation',
    layerNumber: 3,
    layerName: 'Continuous Assurance & Audit Layer',
    tagline: 'Continuous compliance monitoring, automated evidence collection, control mapping, ISO 42001 readiness',
    leadingTools: ['Centraleyes', 'Vanta', '4CRisk.ai', 'Drata AI Governance', 'Sprinto'],
    coreFunctionality: 'Continuous telemetry collection, automated evidence aggregation across cloud environments, unified mapping of overlapping regulatory frameworks (ISO 42001, SOC 2, HIPAA, GDPR).',
    primaryUseCase: 'Scaling institutional audit readiness without expanding legal or compliance headcount; automated auditor portal access and vendor risk review.',
    primaryRiskMitigated: 'Failed external audits, loss of enterprise security accreditations, manual documentation fatigue, and regulatory penalty fines.',
    targetStakeholders: ['GRC Officers', 'Internal Audit Teams', 'Head of Compliance', 'Chief Operating Officers (COOs)'],
    deploymentTimeline: '2 – 4 Weeks (SaaS connector integration)',
    integrationVector: 'Cloud infrastructure API connectors (AWS, GCP, Azure), GitHub/GitLab integrations, HR & IdP directory sync.',
    lebanonTrustArbitrageRole: 'Allows lean Lebanese startups to present enterprise-grade ISO 42001 and SOC 2 credentials to North American and European procurement teams at 1/10th the traditional compliance cost.',
    menaMarketDriver: 'GCC public sector tenders demanding internationally accredited continuous assurance and rigorous third-party vendor risk attestations.',
    supportedStandards: ['ISO/IEC 42001:2023', 'SOC 2 (Trust Services Criteria)', 'ISO/IEC 27001:2022', 'NIST CSF 2.0'],
    keyCapabilities: [
      'Continuous Cloud & Code Repository Telemetry Ingestion',
      'Cross-Framework Control Harmonization (ISO + NIST + EU)',
      'Self-Generating Auditor Evidence Lockers',
      'Automated Third-Party Vendor Risk Questionnaires'
    ],
    metrics: {
      realTimeEnforcement: 54,
      regulatoryCoverage: 90,
      auditAutomation: 98,
      deploymentVelocity: 82,
      trustArbitrageMoat: 92
    },
    accentColor: {
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-800',
      badgeBorder: 'border-emerald-300',
      barFill: 'bg-emerald-600',
      glow: 'shadow-emerald-500/20',
      activeBorder: 'border-emerald-500'
    }
  },
  {
    id: 'regulatory-intelligence',
    category: 'Regulatory Intelligence & Tracking',
    shortName: 'Regulatory Intelligence',
    layerNumber: 4,
    layerName: 'Global Law & Horizon Scanning',
    tagline: 'Horizon scanning, deterministic risk classification, mapping codebases to evolving international laws',
    leadingTools: ['Saidot', 'Trail', 'Compliance.ai', 'OneTrust AI Governance', 'RegCheck by Credo'],
    coreFunctionality: 'Continuous monitoring of global legislative changes, natural language parsing of bills and gazettes, automated impact assessments on production software architecture.',
    primaryUseCase: 'Keeping agile continuous delivery (CI/CD) pipelines aligned with diverging regional legal mandates; early alert system for geopolitical tech restrictions.',
    primaryRiskMitigated: 'Surprise regulatory obsolescence, deploying non-compliant algorithms into newly regulated jurisdictions, and costly post-launch software re-architectures.',
    targetStakeholders: ['General Counsel', 'Government Affairs Officers', 'VP of Product', 'International Strategy Leads'],
    deploymentTimeline: '1 – 2 Weeks (SaaS alert engine & policy rules ingestion)',
    integrationVector: 'Jira / GitHub PR rule check webhooks, LegalOps dashboard sync, Slack/Teams automated advisory channels.',
    lebanonTrustArbitrageRole: 'Positions Lebanese founders as preemptive compliance pioneers who foresee regulatory divergence between Europe, the US, and GCC before their global competitors.',
    menaMarketDriver: 'Rapidly evolving legislative landscape in Saudi Arabia (SDAIA regulations), UAE (DIFC / ADGM data protection revisions), and Lebanon Law 81 modernization.',
    supportedStandards: ['EU AI Act Updates', 'Saudi PDPL & AI Decrees', 'UAE AI Guidelines', 'US Executive Orders on AI'],
    keyCapabilities: [
      'Multi-Jurisdictional Legal Gazette Horizon Scanning',
      'Rule-Based Pull Request & System Classification',
      'Impact Diffing Between Shifting Legislative Drafts',
      'Automated Geopolitical Jurisdiction Alert Dispatch'
    ],
    metrics: {
      realTimeEnforcement: 38,
      regulatoryCoverage: 98,
      auditAutomation: 84,
      deploymentVelocity: 78,
      trustArbitrageMoat: 86
    },
    accentColor: {
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-800',
      badgeBorder: 'border-amber-300',
      barFill: 'bg-amber-600',
      glow: 'shadow-amber-500/20',
      activeBorder: 'border-amber-500'
    }
  }
];

export const METRIC_DIMENSIONS = [
  { 
    id: 'all', 
    label: 'Composite Index', 
    description: 'Blended average score across all 5 operational compliance criteria' 
  },
  { 
    id: 'realTimeEnforcement', 
    label: 'Real-Time Runtime Enforcement', 
    description: 'Sub-millisecond inline packet inspection, prompt interception, and active guardrails' 
  },
  { 
    id: 'regulatoryCoverage', 
    label: 'Regulatory Scope & Legal Breadth', 
    description: 'Direct mapping to EU AI Act, ISO 42001, NIST AI RMF, and GCC regional mandates' 
  },
  { 
    id: 'auditAutomation', 
    label: 'Audit & Evidence Automation', 
    description: 'Elimination of manual compliance burden via continuous automated telemetry' 
  },
  { 
    id: 'deploymentVelocity', 
    label: 'Implementation Velocity', 
    description: 'Speed from procurement approval to live operational protection in production' 
  },
  { 
    id: 'trustArbitrageMoat', 
    label: 'Lebanon "Trust Arbitrage" Moat', 
    description: 'Competitive power to bypass enterprise security reviews in foreign export markets' 
  },
];

export const AIComplianceToolsVisualizer: React.FC = () => {
  const [activeView, setActiveView] = useState<'matrix' | 'chart' | 'architecture'>('matrix');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('runtime-control');
  const [selectedMetric, setSelectedMetric] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const selectedCategory = useMemo(() => {
    return AI_COMPLIANCE_CATEGORIES_DATA.find(c => c.id === selectedCategoryId) || AI_COMPLIANCE_CATEGORIES_DATA[0];
  }, [selectedCategoryId]);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return AI_COMPLIANCE_CATEGORIES_DATA;
    const q = searchQuery.toLowerCase();
    return AI_COMPLIANCE_CATEGORIES_DATA.filter(item => 
      item.category.toLowerCase().includes(q) ||
      item.leadingTools.some(t => t.toLowerCase().includes(q)) ||
      item.coreFunctionality.toLowerCase().includes(q) ||
      item.primaryUseCase.toLowerCase().includes(q) ||
      item.supportedStandards.some(s => s.toLowerCase().includes(q)) ||
      item.layerName.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Helper to get score for a given metric
  const getMetricScore = (cat: AIComplianceCategory, metricId: string): number => {
    if (metricId === 'all') {
      const { realTimeEnforcement, regulatoryCoverage, auditAutomation, deploymentVelocity, trustArbitrageMoat } = cat.metrics;
      return Math.round((realTimeEnforcement + regulatoryCoverage + auditAutomation + deploymentVelocity + trustArbitrageMoat) / 5);
    }
    return (cat.metrics as Record<string, number>)[metricId] || 0;
  };

  return (
    <div 
      id="ai-compliance-tooling-visualizer" 
      className="space-y-6 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs"
    >
      {/* Visualizer Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="space-y-1.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-cyan-50 text-cyan-900 border border-cyan-200">
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span>INTERACTIVE TOOLING INTELLIGENCE MATRIX</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
            The 4 Categories of AI Compliance Tooling
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Comparative analysis of the modern AI compliance stack. Learn how <strong>Enterprise Governance</strong>, <strong>Runtime Control</strong>, <strong>GRC Automation</strong>, and <strong>Regulatory Intelligence</strong> protect production systems and establish the Lebanese "Trust Arbitrage" advantage.
          </p>
        </div>

        {/* View Mode Switcher Controls */}
        <div 
          id="visualizer-view-tabs" 
          className="flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-start lg:self-center shrink-0"
        >
          <button
            id="tab-btn-matrix"
            onClick={() => setActiveView('matrix')}
            className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeView === 'matrix'
                ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Table className="w-3.5 h-3.5 text-cyan-700" />
            <span>Comparison Matrix</span>
          </button>

          <button
            id="tab-btn-chart"
            onClick={() => setActiveView('chart')}
            className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeView === 'chart'
                ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-cyan-700" />
            <span>Capability Chart</span>
          </button>

          <button
            id="tab-btn-architecture"
            onClick={() => setActiveView('architecture')}
            className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeView === 'architecture'
                ? 'bg-white text-slate-950 shadow-sm border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-700" />
            <span>Architecture Stack</span>
          </button>
        </div>
      </div>

      {/* Quick Interactive Category Pill Bar */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mr-1 flex items-center space-x-1">
          <SlidersHorizontal className="w-3 h-3" />
          <span>Category Focus:</span>
        </span>
        {AI_COMPLIANCE_CATEGORIES_DATA.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              id={`cat-select-${cat.id}`}
              onClick={() => setSelectedCategoryId(cat.id)}
              className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                isSelected
                  ? 'bg-slate-950 text-white border-slate-950 shadow-sm ring-2 ring-cyan-500/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-slate-400'}`} />
              <span>{cat.shortName}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${isSelected ? 'bg-slate-800 text-cyan-300' : 'bg-slate-100 text-slate-500'}`}>
                L{cat.layerNumber}
              </span>
            </button>
          );
        })}
      </div>

      {/* VIEW 1: COMPARISON TABLE / MATRIX */}
      {activeView === 'matrix' && (
        <div id="view-matrix-container" className="space-y-5">
          {/* Table Controls (Search & Counter) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="tooling-matrix-search"
                type="text"
                placeholder="Search tools, capabilities, standards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9.5 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div className="text-xs font-mono text-slate-500 self-end sm:self-center">
              Displaying {filteredCategories.length} of 4 compliance sectors
            </div>
          </div>

          {/* Master Responsive Comparison Table */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table id="ai-compliance-matrix-table" className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-slate-100 font-mono text-[11px] uppercase tracking-wider">
                    <th className="p-4 font-bold min-w-[200px]">Category & Layer</th>
                    <th className="p-4 font-bold min-w-[220px]">Market Leaders & Tools</th>
                    <th className="p-4 font-bold min-w-[260px]">Core Functionality</th>
                    <th className="p-4 font-bold min-w-[220px]">Primary Use Case</th>
                    <th className="p-4 font-bold min-w-[130px] text-center">Velocity</th>
                    <th className="p-4 font-bold min-w-[140px] text-center">Trust Moat</th>
                    <th className="p-4 font-bold min-w-[90px] text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredCategories.map((row) => {
                    const isSelected = selectedCategoryId === row.id;
                    return (
                      <tr
                        key={row.id}
                        id={`matrix-row-${row.id}`}
                        onClick={() => setSelectedCategoryId(row.id)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-cyan-50/50 hover:bg-cyan-50/80'
                            : 'hover:bg-slate-50/70'
                        }`}
                      >
                        {/* Category & Layer */}
                        <td className="p-4 align-top">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-1.5">
                              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 text-cyan-300">
                                L{row.layerNumber}
                              </span>
                              <span className="font-extrabold text-slate-950 text-xs sm:text-sm">
                                {row.shortName}
                              </span>
                            </div>
                            <div className="text-[11px] font-mono text-slate-500">
                              {row.layerName}
                            </div>
                            <div className="pt-1 flex flex-wrap gap-1">
                              {row.supportedStandards.slice(0, 2).map((std, i) => (
                                <span key={i} className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                  {std}
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>

                        {/* Leading Tools */}
                        <td className="p-4 align-top">
                          <div className="space-y-1.5">
                            <div className="flex flex-wrap gap-1.5">
                              {row.leadingTools.map((tool, i) => (
                                <span
                                  key={i}
                                  className="font-mono text-xs font-bold px-2 py-0.5 rounded-lg bg-slate-100 text-cyan-900 border border-slate-200/80"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                            <div className="text-[11px] text-slate-500 italic">
                              Vectors: {row.integrationVector}
                            </div>
                          </div>
                        </td>

                        {/* Core Functionality */}
                        <td className="p-4 align-top">
                          <p className="text-slate-700 text-xs leading-relaxed font-normal">
                            {row.coreFunctionality}
                          </p>
                          <div className="mt-2 text-[11px] font-medium text-slate-500">
                            <strong>Mitigates:</strong> {row.primaryRiskMitigated}
                          </div>
                        </td>

                        {/* Primary Use Case */}
                        <td className="p-4 align-top">
                          <p className="text-slate-800 font-medium text-xs leading-relaxed">
                            {row.primaryUseCase}
                          </p>
                          <div className="mt-2 text-[10px] font-mono text-slate-500">
                            Stakeholders: {row.targetStakeholders.slice(0, 2).join(', ')}
                          </div>
                        </td>

                        {/* Deployment Velocity */}
                        <td className="p-4 align-top text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className="text-xs font-mono font-bold text-slate-900">
                              {row.deploymentTimeline.split(' ')[0]} {row.deploymentTimeline.split(' ')[1]}
                            </span>
                            <div className="w-16 h-1.5 rounded-full bg-slate-200 mt-1.5 overflow-hidden">
                              <div 
                                className={`h-full ${row.accentColor.barFill}`}
                                style={{ width: `${row.metrics.deploymentVelocity}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                              {row.metrics.deploymentVelocity}/100
                            </span>
                          </div>
                        </td>

                        {/* Trust Arbitrage Moat Rating */}
                        <td className="p-4 align-top text-center">
                          <div className="inline-flex flex-col items-center">
                            <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-mono font-extrabold text-xs border border-emerald-200">
                              <Zap className="w-3 h-3 text-emerald-600" />
                              <span>{row.metrics.trustArbitrageMoat}%</span>
                            </div>
                            <span className="text-[10px] text-slate-500 font-medium mt-1">
                              High Export Power
                            </span>
                          </div>
                        </td>

                        {/* Row Detail Button */}
                        <td className="p-4 align-top text-center">
                          <button
                            id={`inspect-btn-${row.id}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCategoryId(row.id);
                            }}
                            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                              isSelected
                                ? 'bg-cyan-600 text-white border-cyan-700 shadow-xs'
                                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                            }`}
                          >
                            {isSelected ? 'Focused' : 'Inspect'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: MULTI-METRIC COMPARATIVE CHART */}
      {activeView === 'chart' && (
        <div id="view-chart-container" className="space-y-6">
          {/* Dimension Selector Pills */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              Select Comparison Dimension:
            </span>
            <div className="flex flex-wrap gap-2">
              {METRIC_DIMENSIONS.map((dim) => {
                const isActive = selectedMetric === dim.id;
                return (
                  <button
                    key={dim.id}
                    id={`metric-btn-${dim.id}`}
                    onClick={() => setSelectedMetric(dim.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                      isActive
                        ? 'bg-slate-900 text-cyan-300 border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {dim.label}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-slate-500 italic mt-1">
              {METRIC_DIMENSIONS.find(d => d.id === selectedMetric)?.description}
            </p>
          </div>

          {/* Visual Comparative Bar Chart Card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 sm:p-8 text-white space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h4 className="text-base font-extrabold text-white flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <span>Cross-Category Benchmark: {METRIC_DIMENSIONS.find(d => d.id === selectedMetric)?.label}</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Normalized relative performance index (0 - 100 benchmark)
                </p>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-xs font-mono text-cyan-400 font-bold">NCEI 2026 BENCHMARK</span>
                <div className="text-[10px] text-slate-500">ISO 42001 & EU AI ACT DATASET</div>
              </div>
            </div>

            {/* Bars List */}
            <div className="space-y-6">
              {AI_COMPLIANCE_CATEGORIES_DATA.map((cat) => {
                const score = getMetricScore(cat, selectedMetric);
                const isSelected = selectedCategoryId === cat.id;

                return (
                  <div 
                    key={cat.id} 
                    id={`chart-row-${cat.id}`}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`p-4 rounded-xl transition-all cursor-pointer border ${
                      isSelected 
                        ? 'bg-slate-900 border-cyan-500/70 ring-1 ring-cyan-500/30' 
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center space-x-2.5">
                        <span className="w-6 h-6 rounded-lg bg-slate-800 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center">
                          L{cat.layerNumber}
                        </span>
                        <div>
                          <span className="font-extrabold text-sm text-slate-100">
                            {cat.category}
                          </span>
                          <span className="text-xs text-slate-400 ml-2 hidden md:inline">
                            ({cat.leadingTools.slice(0, 2).join(', ')})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 self-end sm:self-auto">
                        <span className="text-xs font-mono text-slate-400">Score:</span>
                        <span className="text-base font-mono font-black text-cyan-300">
                          {score}
                          <span className="text-xs text-slate-500 font-normal">/100</span>
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden relative">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${cat.accentColor.barFill}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>

                    {/* Capability breakdown mini-chips */}
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
                      <span>Layer: {cat.layerName}</span>
                      <span className="text-cyan-400/80">Primary: {cat.primaryUseCase.split(',')[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Radar / Multi-Dimension Summary Grid */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">HIGHEST REAL-TIME SPEED</div>
                <div className="text-xs font-bold text-cyan-400 mt-1">Runtime Control Gateways</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">98/100 Interception</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">HIGHEST AUDIT AUTOMATION</div>
                <div className="text-xs font-bold text-emerald-400 mt-1">GRC Automation</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">98/100 Evidence Collection</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">BROADEST LEGAL COVERAGE</div>
                <div className="text-xs font-bold text-amber-400 mt-1">Regulatory Intelligence</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">98/100 Horizon Scanning</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400">ENTERPRISE GOVERNANCE</div>
                <div className="text-xs font-bold text-blue-400 mt-1">Model & Bias Oversight</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">96/100 Model Inventory</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: ARCHITECTURE STACK VIEW */}
      {activeView === 'architecture' && (
        <div id="view-architecture-container" className="space-y-6">
          <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200 text-xs text-slate-700 leading-relaxed flex items-start space-x-3">
            <Info className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
            <div>
              <strong>The 4-Layer Interlocking Defense Shield:</strong> Modern AI compliance cannot rely on policy manuals alone. 
              The four tool categories form a layered defense stack spanning from real-time network packets up to sovereign international law. 
              Click any layer to inspect its role.
            </div>
          </div>

          {/* Visual Vertical Stack */}
          <div className="space-y-3 max-w-4xl mx-auto">
            {AI_COMPLIANCE_CATEGORIES_DATA.slice().reverse().map((layer) => {
              const isSelected = selectedCategoryId === layer.id;
              return (
                <div
                  key={layer.id}
                  id={`arch-layer-${layer.id}`}
                  onClick={() => setSelectedCategoryId(layer.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-950 text-white border-cyan-500 shadow-md ring-2 ring-cyan-500/20'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                        isSelected ? 'bg-cyan-900 text-cyan-300' : 'bg-slate-100 text-slate-700'
                      }`}>
                        L{layer.layerNumber}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-extrabold text-sm sm:text-base">
                            {layer.category}
                          </h4>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            isSelected ? 'bg-slate-800 text-cyan-300' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {layer.layerName}
                          </span>
                        </div>
                        <p className={`text-xs mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                          {layer.coreFunctionality}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 self-end sm:self-auto shrink-0">
                      <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-700'}`}>
                        {layer.leadingTools.slice(0, 2).join(' • ')}
                      </span>
                      <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* DETAILED CATEGORY DOSSIER & LEBANESE PLAYBOOK PANEL */}
      <div 
        id="category-dossier-panel" 
        className="pt-6 border-t border-slate-200"
      >
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-cyan-300 font-mono font-bold text-xs">
                  LAYER 0{selectedCategory.layerNumber} DOSSIER
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {selectedCategory.layerName}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-950">
                {selectedCategory.category}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                {selectedCategory.tagline}
              </p>
            </div>

            {/* Trust Arbitrage Badge */}
            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs self-start sm:self-center shrink-0">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Trust Arbitrage Power</div>
              <div className="text-lg font-mono font-black text-emerald-600 flex items-center space-x-1 mt-0.5">
                <Zap className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <span>{selectedCategory.metrics.trustArbitrageMoat}% Index</span>
              </div>
            </div>
          </div>

          {/* Grid of Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Box 1: Leading Tools */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
                <Building className="w-3.5 h-3.5 text-cyan-700" />
                <span>Leading Tools</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedCategory.leadingTools.map((tool, i) => (
                  <span key={i} className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-900 border border-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                <strong>Integration:</strong> {selectedCategory.integrationVector}
              </div>
            </div>

            {/* Box 2: Time & Velocity */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
                <Clock className="w-3.5 h-3.5 text-cyan-700" />
                <span>Deployment Velocity</span>
              </div>
              <div className="text-sm font-extrabold text-slate-950 font-mono">
                {selectedCategory.deploymentTimeline}
              </div>
              <p className="text-[11px] text-slate-600">
                {selectedCategory.metrics.deploymentVelocity >= 80 
                  ? 'Rapid plug-and-play capability without altering core models.' 
                  : 'Requires structured cataloging of training datasets and artifacts.'}
              </p>
            </div>

            {/* Box 3: Target Stakeholders */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
                <Users className="w-3.5 h-3.5 text-cyan-700" />
                <span>Key Stakeholders</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-700">
                {selectedCategory.targetStakeholders.map((s, i) => (
                  <li key={i} className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                    <span className="truncate">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 4: Supported Standards */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
                <Globe className="w-3.5 h-3.5 text-cyan-700" />
                <span>Key Regulatory Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedCategory.supportedStandards.map((std, i) => (
                  <span key={i} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-50 text-cyan-900 border border-cyan-200">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Lebanese Ecosystem Insight Callout */}
          <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  Lebanese Startup Strategic Advantage // Trust Arbitrage
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">NCEI LEBANON POLICY DIRECTIVE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-mono block mb-1">Export Playbook Application:</span>
                <p className="text-slate-200 leading-relaxed">
                  {selectedCategory.lebanonTrustArbitrageRole}
                </p>
              </div>

              <div>
                <span className="text-slate-400 font-mono block mb-1">Gulf / GCC Regional Alignment:</span>
                <p className="text-slate-200 leading-relaxed">
                  {selectedCategory.menaMarketDriver}
                </p>
              </div>
            </div>
          </div>

          {/* Key Capabilities List */}
          <div className="space-y-2">
            <h5 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              Core Technical Capabilities:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedCategory.keyCapabilities.map((cap, i) => (
                <div key={i} className="flex items-start space-x-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
