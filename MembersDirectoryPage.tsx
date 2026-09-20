import React from 'react';
import { PageId } from '../types';
import { TECHNICAL_VALUES } from '../data/ecosystemData';
import { 
  Cpu, 
  ArrowLeft, 
  Share2, 
  Users, 
  ShieldCheck, 
  Layers, 
  Database, 
  Lock, 
  Workflow, 
  Building2, 
  CheckCircle2,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface TechnicalLeadershipPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
}

export const TechnicalLeadershipPage: React.FC<TechnicalLeadershipPageProps> = ({
  onNavigate,
  onOpenMatcher
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-cyan-600" />,
    Share2: <Share2 className="w-5 h-5 text-cyan-600" />,
    Users: <Users className="w-5 h-5 text-cyan-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-600" />
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-cyan-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Ecosystem Overview</span>
          </button>

          <div className="text-xs font-mono text-slate-400">
            SECTION 07 // TECHNICAL VALUES & ENGINEERING DOSSIER
          </div>
        </div>

        {/* Page Header */}
        <div className="pt-8 pb-10 space-y-3 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
            <Layers className="w-3.5 h-3.5 text-cyan-600" />
            <span>CORE ARCHITECTURAL DOCTRINE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Technical Values of {TECHNICAL_VALUES.organization}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The engineering principles, multi-agent frameworks, and operational governance powering our autonomous supervisor fabrics and enterprise solutions.
          </p>
        </div>

        {/* 4 Core Technical Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TECHNICAL_VALUES.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-cyan-300 shadow-xs transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200">
                  {iconMap[val.icon]}
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                  Value 0{idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* AlKhawarizmi Solutions Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  {TECHNICAL_VALUES.alkhawarizmiLead.timeline}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {TECHNICAL_VALUES.alkhawarizmiLead.company}
                </h2>
                <p className="text-sm font-mono text-cyan-300">
                  {TECHNICAL_VALUES.alkhawarizmiLead.role}
                </p>
              </div>

              <button
                onClick={onOpenMatcher}
                className="px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Connect via Neural Matcher</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TECHNICAL_VALUES.alkhawarizmiLead.highlights.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Highlight for ALmouwateN & Multi-Agent Platforms */}
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-mono text-cyan-300 font-bold">Featured Civic & Scholar Portals:</span>
                <div className="text-slate-300">
                  <strong>aicademy.online</strong> (AI scholar research community) • <strong>matchprenai.online</strong> (freelancer matchmaking) • <strong>ALmouwateN</strong> (PII Masking Sandbox).
                </div>
              </div>
              <button
                onClick={() => onNavigate('livenexus')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs shrink-0 border border-slate-700"
              >
                Inspect Live Nexus OS →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
