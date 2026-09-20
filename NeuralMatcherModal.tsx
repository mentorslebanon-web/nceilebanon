import React from 'react';
import { PageId } from '../types';
import { ECOSYSTEM_METADATA } from '../data/ecosystemData';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Radio, 
  ShieldCheck, 
  Cpu, 
  ChevronRight,
  Database,
  Activity,
  CheckCircle,
  Network
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess
}) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 border-b border-slate-200">
      {/* Subtle tech grid background and ambient cyber glow */}
      <div className="absolute inset-0 tech-grid-bg opacity-70 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Operational Pill & Byline */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900 text-white border border-slate-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-cyan-400 font-bold">NCEI LEBANON</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">961AI NETWORK</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200">
            <span className="font-bold">Byline:</span>
            <span>{ECOSYSTEM_METADATA.byline}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Title, Statement of Value, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                Empowering Founders, Scholars & Builders with <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-cyan-500 to-slate-900">Frontier AI Infrastructure</span>
              </h1>
              
              {/* Highlighted Main Statement of Value */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs relative">
                <div className="absolute -top-2.5 left-4 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-600 text-white shadow-xs">
                  Main Statement of Value
                </div>
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed italic pt-1">
                  "{ECOSYSTEM_METADATA.mainStatementOfValue}"
                </p>
              </div>
            </div>

            {/* Quick Interactive Archetype Triggers */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Direct Neural Match Routing:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button
                  onClick={onOpenMatcher}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-cyan-400 hover:bg-cyan-50/40 text-left transition-all group"
                >
                  <div className="text-[11px] font-bold text-slate-900 group-hover:text-cyan-700 flex items-center justify-between">
                    <span>🔬 Scholars</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">Science boundaries</div>
                </button>

                <button
                  onClick={onOpenMatcher}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-cyan-400 hover:bg-cyan-50/40 text-left transition-all group"
                >
                  <div className="text-[11px] font-bold text-slate-900 group-hover:text-cyan-700 flex items-center justify-between">
                    <span>⚡ Freelancers</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">Gov challenges</div>
                </button>

                <button
                  onClick={onOpenMatcher}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-cyan-400 hover:bg-cyan-50/40 text-left transition-all group"
                >
                  <div className="text-[11px] font-bold text-slate-900 group-hover:text-cyan-700 flex items-center justify-between">
                    <span>🚀 Venture Gurus</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">Monetize genius</div>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-launch-matcher"
                onClick={onOpenMatcher}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 border border-cyan-400 transition-all shadow-sm hover:shadow-md"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Launch Neural Matcher</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-enter-livenexus"
                onClick={() => onNavigate('livenexus')}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-all"
              >
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Enter Live Nexus HQ</span>
              </button>

              <button
                id="hero-get-access"
                onClick={onOpenGetAccess}
                className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                <span>Get Access to Guilds</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Tech Cybernetic Terminal & Live Telemetry */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 text-white p-5 shadow-xl glow-cyan overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="font-mono text-cyan-400 text-[11px] font-bold">
                    NCEI.961AI // KERNEL_MONITOR
                  </span>
                </div>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  ONLINE 24/7
                </span>
              </div>

              {/* Terminal Readout inspired by attached image style */}
              <div className="py-4 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span>&gt; CLUSTER_STATUS</span>
                  <span className="text-emerald-400 font-bold">SYNCHRONOUS</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-cyan-400 font-bold flex items-center space-x-1.5">
                      <Network className="w-3.5 h-3.5" />
                      <span>Multi-Agent Fabrics</span>
                    </span>
                    <span className="text-slate-300 font-mono">Ballish • Company Brain</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-4/5"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Supervisor Latency: 420ms</span>
                    <span className="text-cyan-300">RAG Grounded</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-amber-400 font-bold flex items-center space-x-1.5">
                      <Database className="w-3.5 h-3.5" />
                      <span>Civic Sandboxes (ALmouwateN)</span>
                    </span>
                    <span className="text-emerald-400 text-[10px] font-bold">PII Masked</span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Containerized execution for Rafic Hariri Hospital VAMS & ministry blueprints
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-cyan-300">Native AI Chatbot: @961Brain</div>
                    <div className="text-[10px] text-slate-400">Summon instant RAG answers in Live Nexus</div>
                  </div>
                  <button
                    onClick={() => onNavigate('livenexus')}
                    className="px-2.5 py-1 rounded text-[11px] font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors"
                  >
                    Summon
                  </button>
                </div>
              </div>

              {/* Bottom Quick Metric strip */}
              <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <div className="text-slate-400 text-[10px]">Startups Under Mgmt</div>
                  <div className="text-base font-bold text-white font-mono">85+ Active</div>
                </div>
                <div className="p-2 bg-slate-900 rounded-lg">
                  <div className="text-slate-400 text-[10px]">VAMS Vaccines/Tests</div>
                  <div className="text-base font-bold text-cyan-400 font-mono">1.8M+ Processed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Major Metric Blocks */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ECOSYSTEM_METADATA.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-cyan-700 mt-0.5">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
