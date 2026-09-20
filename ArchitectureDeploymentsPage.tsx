import React, { useState } from 'react';
import { PageId } from '../types';
import { CORE_COMPETENCIES, ECOSYSTEM_METADATA } from '../data/ecosystemData';
import { 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Globe2, 
  Users2, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  Workflow,
  Target
} from 'lucide-react';

interface CoreCompetenciesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess: () => void;
}

export const CoreCompetenciesPage: React.FC<CoreCompetenciesPageProps> = ({
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess
}) => {
  const [activeTab, setActiveTab] = useState<string>(CORE_COMPETENCIES[0].id);

  const activeComp = CORE_COMPETENCIES.find((c) => c.id === activeTab) || CORE_COMPETENCIES[0];

  const competencyIcons: Record<string, React.ReactNode> = {
    'ai-bizdev': <TrendingUp className="w-5 h-5 text-cyan-600" />,
    'multi-agent-rag': <Cpu className="w-5 h-5 text-cyan-600" />,
    'ecosystem-partnerships': <Globe2 className="w-5 h-5 text-cyan-600" />,
    'gtm-brand-authority': <Target className="w-5 h-5 text-cyan-600" />,
    'coaching-talent': <Users2 className="w-5 h-5 text-cyan-600" />
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-cyan-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Ecosystem Overview</span>
          </button>

          <div className="text-xs font-mono text-slate-400">
            SECTION 01 // FOUNDER VALUE PROPOSITIONS
          </div>
        </div>

        {/* Page Header */}
        <div className="pt-8 pb-10 space-y-4 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
            <span>INSTITUTIONAL FOUNDER PILLARS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Core Competencies & Founder Value Propositions
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Transitioning regional founders from simple LLM wrappers to defensible, high-value, outcome-based AI models and custom agentic workflows backed by institutional capital and enterprise contracts.
          </p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 5 Pillars Selector */}
          <div className="lg:col-span-4 space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block px-1">
              Select Strategic Pillar:
            </span>
            {CORE_COMPETENCIES.map((comp, idx) => {
              const isSelected = activeTab === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setActiveTab(comp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-950 text-white border-cyan-500 shadow-sm'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                      0{idx + 1} // PILLAR
                    </span>
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-cyan-300' : 'text-cyan-700'}`}>
                      {comp.impactMetric}
                    </span>
                  </div>
                  <div className="font-bold text-sm leading-snug">{comp.title}</div>
                  <div className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                    {comp.subtitle}
                  </div>
                </button>
              );
            })}

            {/* Matcher Box */}
            <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-slate-800 text-xs space-y-3 mt-4">
              <div className="font-bold flex items-center space-x-1.5 text-cyan-900">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>Need Personalized Alignment?</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Our Neural Matcher routes founders directly to the specific technical leads and capital pods aligned with their venture stage.
              </p>
              <button
                onClick={onOpenMatcher}
                className="w-full py-2 px-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-colors shadow-xs"
              >
                Launch Neural Matcher
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Breakdown of Selected Competency */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-6">
              {/* Header */}
              <div className="border-b border-slate-100 pb-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-200">
                    {competencyIcons[activeComp.id]}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-700 uppercase">
                      {activeComp.subtitle}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {activeComp.title}
                    </h2>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 pt-2 leading-relaxed font-medium">
                  {activeComp.description}
                </p>
              </div>

              {/* Impact Metric & Tags */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Validated Impact Metric</span>
                  <span className="text-base font-extrabold text-cyan-700 font-mono">{activeComp.impactMetric}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeComp.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-white text-slate-700 border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Deliverables Matrix */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                  Institutional Deliverables & Technical Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeComp.deliverables.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200 flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow integration box */}
              <div className="p-4 rounded-xl bg-slate-950 text-white space-y-2 border border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 font-bold flex items-center space-x-1.5">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>Active 961AI Production Integration</span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">Enterprise Ready</span>
                </div>
                <p className="text-xs text-slate-300">
                  Founders utilizing this pillar receive direct deployment slots in the <strong>Live Nexus</strong> and can dry-run workflows via the <strong>Developer Nexus API Playground</strong>.
                </p>
                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() => onNavigate('livenexus')}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                  >
                    Enter Live Nexus
                  </button>
                  <button
                    onClick={() => onNavigate('guilds-dev')}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
                  >
                    Explore Developer Nexus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
