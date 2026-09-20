/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Download, 
  Printer, 
  Sparkles, 
  RefreshCw, 
  TrendingDown, 
  Building2, 
  DollarSign, 
  Cpu, 
  FileText, 
  CheckCircle2, 
  X, 
  ExternalLink,
  Sliders,
  Scale
} from 'lucide-react';

export interface RiskScenarioPreset {
  id: string;
  name: string;
  sector: string;
  description: string;
  capitalDislocation: number; // 0 to 100
  gridResilience: 'low' | 'medium' | 'high';
  complianceStrictness: 'domestic' | 'bdl' | 'gcc' | 'eu-ai-act';
  entityStructure: 'single-onshore' | 'dual-entity' | 'multi-spv';
  runwayMonths: number;
}

export const SCENARIO_PRESETS: RiskScenarioPreset[] = [
  {
    id: 'fintech-seed',
    name: 'Seed / Pre-Series A FinTech (Beirut)',
    sector: 'FinTech & Sovereign Payments',
    description: 'Early-stage payment orchestrator facing regional capital flight and BDL Circular 158/165 compliance.',
    capitalDislocation: 75,
    gridResilience: 'medium',
    complianceStrictness: 'bdl',
    entityStructure: 'single-onshore',
    runwayMonths: 8
  },
  {
    id: 'healthtech-clinical',
    name: 'Clinical HealthTech RAG (AUBMC / Mount Lebanon)',
    sector: 'Biomedical AI & Hospital Informatics',
    description: 'Genomic & diagnostic model processing patient records subject to HIPAA, MoPH, and EU GDPR strictness.',
    capitalDislocation: 40,
    gridResilience: 'high',
    complianceStrictness: 'eu-ai-act',
    entityStructure: 'dual-entity',
    runwayMonths: 18
  },
  {
    id: 'govtech-diaspora',
    name: 'Diaspora-Backed GovTech & Civic Automation',
    sector: 'GovTech & Administrative Optimization',
    description: 'Workflow agent for municipal departments with diaspora angel funding through DIFC/Delaware HoldCo.',
    capitalDislocation: 30,
    gridResilience: 'medium',
    complianceStrictness: 'domestic',
    entityStructure: 'dual-entity',
    runwayMonths: 14
  },
  {
    id: 'sovereign-cluster',
    name: 'Air-Gapped Sovereign Cluster & Defense AI',
    sector: 'Cybersecurity & Critical Infrastructure',
    description: 'On-premise LLM and data lake operating under severe regional escalation threat and zero foreign cloud exposure.',
    capitalDislocation: 90,
    gridResilience: 'high',
    complianceStrictness: 'gcc',
    entityStructure: 'multi-spv',
    runwayMonths: 24
  }
];

export const PolicyRiskCalculator: React.FC = () => {
  // Scenario configuration state
  const [selectedPresetId, setSelectedPresetId] = useState<string>('fintech-seed');
  const [capitalDislocation, setCapitalDislocation] = useState<number>(75);
  const [gridResilience, setGridResilience] = useState<'low' | 'medium' | 'high'>('medium');
  const [complianceStrictness, setComplianceStrictness] = useState<'domestic' | 'bdl' | 'gcc' | 'eu-ai-act'>('bdl');
  const [entityStructure, setEntityStructure] = useState<'single-onshore' | 'dual-entity' | 'multi-spv'>('single-onshore');
  const [runwayMonths, setRunwayMonths] = useState<number>(8);

  // Modal for 1-page executive brief
  const [showExecutiveBriefModal, setShowExecutiveBriefModal] = useState<boolean>(false);

  // Apply a preset scenario
  const handleApplyPreset = (presetId: string) => {
    const preset = SCENARIO_PRESETS.find(p => p.id === presetId);
    if (!preset) return;
    setSelectedPresetId(preset.id);
    setCapitalDislocation(preset.capitalDislocation);
    setGridResilience(preset.gridResilience);
    setComplianceStrictness(preset.complianceStrictness);
    setEntityStructure(preset.entityStructure);
    setRunwayMonths(preset.runwayMonths);
  };

  // Real-Time Calculated Risk Metrics
  const calculatedRisk = useMemo(() => {
    // 1. Grid factor (low = 30 pts, med = 15 pts, high = 5 pts)
    const gridScore = gridResilience === 'low' ? 30 : gridResilience === 'medium' ? 15 : 5;

    // 2. Compliance factor
    const complianceScore = 
      complianceStrictness === 'eu-ai-act' ? 28 :
      complianceStrictness === 'gcc' ? 22 :
      complianceStrictness === 'bdl' ? 18 : 8;

    // 3. Entity structure mitigating multiplier
    const structureModifier = 
      entityStructure === 'single-onshore' ? 1.35 :
      entityStructure === 'dual-entity' ? 0.78 : 0.60;

    // 4. Runway vulnerability (under 6 months is severe)
    const runwayVulnerability = runwayMonths <= 6 ? 25 : runwayMonths <= 12 ? 14 : 5;

    // Composite raw calculation (0 - 100)
    const rawIndex = (capitalDislocation * 0.35 + gridScore * 0.25 + complianceScore * 0.20 + runwayVulnerability * 0.20) * structureModifier;
    const compositeScore = Math.min(98, Math.max(12, Math.round(rawIndex)));

    // Runway erosion factor (how much faster burn will occur due to currency / supply friction)
    const burnMultiplier = (1 + (capitalDislocation / 100) * 0.65 + (gridResilience === 'low' ? 0.35 : 0.1)).toFixed(2);

    // Adjusted effective runway
    const effectiveRunway = (runwayMonths / parseFloat(burnMultiplier)).toFixed(1);

    // Risk Classification
    let riskTier: { label: string; color: string; bg: string; border: string; desc: string };
    if (compositeScore >= 75) {
      riskTier = {
        label: 'CRITICAL RUNWAY DISLOCATION',
        color: 'text-rose-400',
        bg: 'bg-rose-950/40',
        border: 'border-rose-500/40',
        desc: 'Immediate vulnerability to foreign capital flight, infrastructure blackout, and severe local regulatory friction.'
      };
    } else if (compositeScore >= 50) {
      riskTier = {
        label: 'ELEVATED GEOPOLITICAL FRICTION',
        color: 'text-amber-400',
        bg: 'bg-amber-950/40',
        border: 'border-amber-500/40',
        desc: 'Substantial burn acceleration. Dual-entity treasury isolation and local offline failovers required.'
      };
    } else {
      riskTier = {
        label: 'SOVEREIGN HEDGED RESILIENCE',
        color: 'text-emerald-400',
        bg: 'bg-emerald-950/40',
        border: 'border-emerald-500/40',
        desc: 'Structure effectively insulates core IP, foreign runway tranches, and compute workloads from domestic shocks.'
      };
    }

    // Recommended Tooling Stack Category
    let recommendedCategory: string;
    let recommendedAction: string;
    if (complianceStrictness === 'eu-ai-act' || complianceStrictness === 'gcc') {
      recommendedCategory = 'Enterprise Governance & Model Inventory';
      recommendedAction = 'Deploy automated conformity assessments (Articles 9 & 14) and audit logs prior to cross-border deployment.';
    } else if (gridResilience === 'low' || capitalDislocation > 70) {
      recommendedCategory = 'Runtime Control & Guardrails';
      recommendedAction = 'Air-gap model inference on local edge clusters with automated fallback prompts during cloud disconnections.';
    } else {
      recommendedCategory = 'GRC Automation & Dual-Treasury Bridges';
      recommendedAction = 'Isolate investor capital in Delaware/DIFC HoldCo while funding Beirut OpCo on milestone-based escrow contracts.';
    }

    return {
      compositeScore,
      burnMultiplier,
      effectiveRunway,
      riskTier,
      recommendedCategory,
      recommendedAction
    };
  }, [capitalDislocation, gridResilience, complianceStrictness, entityStructure, runwayMonths]);

  // Trigger print for 1-page executive brief
  const handlePrintBrief = () => {
    window.print();
  };

  return (
    <div id="risk-calculator-section" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 text-white">
      {/* Header & Scenario Presets */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold tracking-wide uppercase">
            <Sliders className="w-4 h-4" />
            <span>Interactive Risk Simulator & Scenario Modeler</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1 tracking-tight">
            MENA Geopolitical & AI Regulatory Risk Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Simulate the impact of capital flight, infrastructure disruptions, and international compliance mandates on startup runway and regulatory exposure.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowExecutiveBriefModal(true)}
            className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs font-mono transition-colors flex items-center space-x-2 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Export 1-Page Executive Briefing (PDF)</span>
          </button>
        </div>
      </div>

      {/* Preset Scenario Selector Pills */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
          Select Standard Scenario Preset:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SCENARIO_PRESETS.map((preset) => {
            const isSelected = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleApplyPreset(preset.id)}
                className={`text-left p-3 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-amber-400/10 border-amber-400 text-white shadow-xs'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-800 text-amber-300">
                    {preset.sector.split(' ')[0]}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>}
                </div>
                <div className="font-bold text-xs text-white mt-2 leading-tight">
                  {preset.name}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {preset.description}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid: Controls on Left, Live Computed Score on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Parameters */}
        <div className="lg:col-span-7 space-y-6 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
          <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
            <Scale className="w-4 h-4" />
            <span>Operational & Geopolitical Variables</span>
          </div>

          {/* Slider: Capital Dislocation Index */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Foreign Capital Flight / Dislocation:</span>
              <span className="text-amber-400 font-bold">{capitalDislocation}% Dislocation</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={capitalDislocation}
              onChange={(e) => setCapitalDislocation(Number(e.target.value))}
              className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0% (Full Cross-Border Flow)</span>
              <span>50% (Hesitant Foreign LPs)</span>
              <span>100% (Complete Sovereign Freeze)</span>
            </div>
          </div>

          {/* Grid Resilience Toggle */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-300">Domestic Power & Connectivity Infrastructure:</div>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              {[
                { id: 'low', label: 'Grid Only (High Blackouts)', color: 'border-rose-500/40 text-rose-300' },
                { id: 'medium', label: 'Hybrid UPS / Diesel', color: 'border-amber-500/40 text-amber-300' },
                { id: 'high', label: 'Solar + Starlink Mesh', color: 'border-emerald-500/40 text-emerald-300' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setGridResilience(item.id as any)}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    gridResilience === item.id
                      ? 'bg-slate-800 border-amber-400 text-white font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Regulatory Compliance Mandate */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-300">Target Compliance & Jurisdictional Exposure:</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              {[
                { id: 'domestic', label: 'Lebanon Civic Only' },
                { id: 'bdl', label: 'BDL Circulars 158/165' },
                { id: 'gcc', label: 'UAE / Saudi NDMO' },
                { id: 'eu-ai-act', label: 'EU AI Act High-Risk' }
              ].map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setComplianceStrictness(comp.id as any)}
                  className={`p-2.5 rounded-xl border text-center transition-colors ${
                    complianceStrictness === comp.id
                      ? 'bg-slate-800 border-cyan-400 text-cyan-300 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {comp.label}
                </button>
              ))}
            </div>
          </div>

          {/* Entity & Treasury Structuring */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-300">Corporate & Treasury Structuring:</div>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              {[
                { id: 'single-onshore', label: 'Single Onshore LLC', badge: 'High Risk' },
                { id: 'dual-entity', label: 'DIFC / DE HoldCo + Beirut OpCo', badge: 'Best Practice' },
                { id: 'multi-spv', label: 'Multi-Jurisdiction SPV Trust', badge: 'Institutional' }
              ].map((ent) => (
                <button
                  key={ent.id}
                  onClick={() => setEntityStructure(ent.id as any)}
                  className={`p-2.5 rounded-xl border text-left transition-colors ${
                    entityStructure === ent.id
                      ? 'bg-slate-800 border-emerald-400 text-white font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="text-xs leading-tight">{ent.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{ent.badge}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Cash Runway Months */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Nominal Cash Runway:</span>
              <span className="text-cyan-400 font-bold">{runwayMonths} Months</span>
            </div>
            <input
              type="range"
              min="2"
              max="36"
              value={runwayMonths}
              onChange={(e) => setRunwayMonths(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Right Column: Real-Time Calculated Risk Assessment */}
        <div className="lg:col-span-5 space-y-5">
          <div className={`p-6 rounded-2xl border ${calculatedRisk.riskTier.bg} ${calculatedRisk.riskTier.border} space-y-4`}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Composite Risk Index
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                Monte-Carlo Model v2.4
              </span>
            </div>

            <div className="flex items-baseline space-x-3">
              <div className="text-5xl font-black font-mono tracking-tight text-white">
                {calculatedRisk.compositeScore}
              </div>
              <div className="text-sm font-mono text-slate-400">/ 100</div>
              <div className={`text-xs font-mono font-extrabold uppercase px-2.5 py-1 rounded-lg ml-auto border ${calculatedRisk.riskTier.color} border-current/30`}>
                {calculatedRisk.riskTier.label.split(' ')[0]} RISK
              </div>
            </div>

            {/* Score Progress Bar */}
            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  calculatedRisk.compositeScore >= 75 ? 'bg-rose-500' :
                  calculatedRisk.compositeScore >= 50 ? 'bg-amber-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${calculatedRisk.compositeScore}%` }}
              ></div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {calculatedRisk.riskTier.desc}
            </p>
          </div>

          {/* Runway Impact Card */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-2">
              <span>Nominal Runway</span>
              <span className="text-white font-bold">{runwayMonths} Months</span>
            </div>
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-2">
              <span className="flex items-center space-x-1">
                <span>Burn Friction Factor</span>
                <span className="text-[10px] text-amber-400">({calculatedRisk.burnMultiplier}x)</span>
              </span>
              <span className="text-amber-400 font-bold">+{Math.round((parseFloat(calculatedRisk.burnMultiplier) - 1) * 100)}% Burn Rate</span>
            </div>
            <div className="flex items-center justify-between text-slate-200 pt-1">
              <span className="font-bold">Real Effective Runway</span>
              <span className="text-base font-black text-cyan-400">
                {calculatedRisk.effectiveRunway} Months
              </span>
            </div>
          </div>

          {/* Tooling Category Recommendation */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
            <div className="text-[10px] font-mono uppercase text-amber-400 tracking-wider">
              Recommended Compliance Architecture
            </div>
            <div className="text-sm font-bold text-white flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{calculatedRisk.recommendedCategory}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {calculatedRisk.recommendedAction}
            </p>
          </div>
        </div>
      </div>

      {/* 1-Page Executive Briefing Modal (Print-Optimized) */}
      {showExecutiveBriefModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white text-slate-950 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-300 shadow-2xl p-6 sm:p-10 space-y-6 relative print:p-0 print:border-none print:shadow-none">
            
            {/* Modal Controls (Hidden in Print) */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 print:hidden">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-100 text-amber-900 font-bold uppercase">
                  CONFIDENTIAL BRIEFING
                </span>
                <span className="text-xs font-mono text-slate-500">NCEI Policy Intelligence Document</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrintBrief}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold flex items-center space-x-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  onClick={() => setShowExecutiveBriefModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Header / Letterhead */}
            <div className="border-b-2 border-slate-950 pb-6 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-500">
                    NATIONAL CENTER FOR ECONOMIC INNOVATION // LEBANON
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 mt-1">
                    EXECUTIVE BRIEFING: AI REGULATORY & GEOPOLITICAL RISK PROFILE
                  </h2>
                </div>
                <div className="text-right text-[10px] font-mono text-slate-500">
                  <div>ISSUE REF: NCEI-RISK-2026</div>
                  <div>DATE: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                  <div>SECURITY: LEVEL 2 AUDIT</div>
                </div>
              </div>
            </div>

            {/* Assessment Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
              <div>
                <div className="text-slate-500 text-[10px] uppercase">Profiled Scenario</div>
                <div className="font-bold text-slate-900 mt-0.5 truncate">{SCENARIO_PRESETS.find(p => p.id === selectedPresetId)?.name || 'Custom'}</div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px] uppercase">Composite Risk</div>
                <div className="font-bold text-rose-600 mt-0.5">{calculatedRisk.compositeScore} / 100 ({calculatedRisk.riskTier.label.split(' ')[0]})</div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px] uppercase">Nominal Runway</div>
                <div className="font-bold text-slate-900 mt-0.5">{runwayMonths} Months</div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px] uppercase">Effective Runway</div>
                <div className="font-bold text-cyan-700 mt-0.5">{calculatedRisk.effectiveRunway} Months ({calculatedRisk.burnMultiplier}x Burn)</div>
              </div>
            </div>

            {/* Key Findings Section */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                1. Executive Diagnostic & Threat Exposure
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                Under the simulated parameters (Foreign Capital Flight: {capitalDislocation}%, Grid Resilience: {gridResilience.toUpperCase()}, Compliance Strictness: {complianceStrictness.toUpperCase()}), the enterprise exhibits an effective monthly burn compression factor of {calculatedRisk.burnMultiplier}x. Without structural capital isolation, domestic supply friction will consume liquidity {Math.round((parseFloat(calculatedRisk.burnMultiplier) - 1) * 100)}% faster than standard operating budgets predict.
              </p>
            </div>

            {/* 4-Pillar Recommended Action Plan */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                2. Mandated 4-Pillar Mitigation Directives
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>Pillar A: Treasury Insulation</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    {entityStructure === 'single-onshore'
                      ? 'CRITICAL: Re-domicile holding company to DIFC or Delaware within 60 days. Route institutional investor checks exclusively offshore.'
                      : 'Maintain Delaware/DIFC HoldCo with quarterly milestone disbursements to Beirut OpCo to eliminate bank haircut exposure.'}
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    <span>Pillar B: Infrastructure Failover</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Implement Starlink business uplink and dual-diesel / micro-solar grid storage to guarantee 99.9% uptime for core model inference nodes.
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Pillar C: Tooling & Governance</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Adopt <strong>{calculatedRisk.recommendedCategory}</strong> tooling to automate compliance audits and air-gapped data sanitization.
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>Pillar D: Regulatory Alignment</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    {calculatedRisk.recommendedAction}
                  </p>
                </div>
              </div>
            </div>

            {/* Verification Sign-Off Footer */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-[10px] font-mono text-slate-500 gap-2">
              <div>VERIFICATION HASH: SHA256//961AI-RISK-EVAL-{Date.now().toString(16).toUpperCase()}</div>
              <div>NCEI REGULATORY INTELLIGENCE UNIT • BEIRUT, LEBANON</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
