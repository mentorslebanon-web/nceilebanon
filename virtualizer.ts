/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { STARTUPS_MANAGED } from '../data/ecosystemData';
import { 
  ArrowLeft, 
  Rocket, 
  ExternalLink, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Database,
  Building,
  GraduationCap,
  Truck,
  CheckCircle2,
  X
} from 'lucide-react';

interface StartupsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess?: () => void;
}

export const StartupsPage: React.FC<StartupsPageProps> = ({
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess
}) => {
  const [selectedStartupId, setSelectedStartupId] = useState<string | null>(null);

  const startupIcons: Record<string, React.ReactNode> = {
    'z961-accelerator': <Rocket className="w-5 h-5 text-cyan-600" />,
    'zrolodex': <Database className="w-5 h-5 text-amber-600" />,
    'zappcademy': <GraduationCap className="w-5 h-5 text-indigo-600" />,
    'logisticsiq': <Truck className="w-5 h-5 text-emerald-600" />
  };

  const selectedStartup = STARTUPS_MANAGED.find(s => s.id === selectedStartupId);

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
            SECTION 09 // PORTFOLIO ENTERPRISES
          </div>
        </div>

        {/* Page Header */}
        <div className="pt-8 pb-8 space-y-3 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
            <Rocket className="w-3.5 h-3.5 text-cyan-600" />
            <span>ACCELERATOR & SCALE PORTFOLIO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Startups Under Management
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            High-velocity software enterprises, vertical directories, autonomous educational sandboxes, and supply chain aggregators nurtured within the 961AI network.
          </p>
        </div>

        {/* Selected Startup Full Dossier (Inline, No Pop-up) */}
        {selectedStartup && (
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-6 shadow-xl animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/40">
                  {startupIcons[selectedStartup.id] || <Rocket className="w-6 h-6 text-cyan-400" />}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-extrabold text-white">{selectedStartup.name}</h2>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                      {selectedStartup.timeline}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">{selectedStartup.domain}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedStartupId(null)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Close Details</span>
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Venture Mission</span>
              <p className="text-sm text-slate-200 leading-relaxed max-w-3xl">
                {selectedStartup.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono">
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Verified Scale & Market Traction</span>
                <span className="text-cyan-400 font-bold text-sm block mt-1">{selectedStartup.metrics}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Ecosystem Synergy</span>
                <span className="text-emerald-400 font-bold text-sm block mt-1">Accelerated under NCEI Mandate</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Focus Vectors</span>
              <div className="flex flex-wrap gap-2">
                {selectedStartup.focusAreas.map((f, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-200 border border-slate-700">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('architecture')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-xs"
              >
                Inspect Full Architectural Stack →
              </button>
              <button
                onClick={onOpenMatcher}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                Match with Venture Engineers
              </button>
            </div>
          </div>
        )}

        {/* Startups Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STARTUPS_MANAGED.map((st) => (
            <div
              key={st.id}
              onClick={() => setSelectedStartupId(st.id === selectedStartupId ? null : st.id)}
              className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-6 group ${
                selectedStartupId === st.id 
                  ? 'border-cyan-500 ring-2 ring-cyan-200 bg-cyan-50/10' 
                  : 'border-slate-200 bg-white hover:border-cyan-400 hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 group-hover:bg-cyan-100 transition-colors">
                      {startupIcons[st.id] || <Rocket className="w-5 h-5 text-cyan-600" />}
                    </div>
                    <div>
                      <h2 className="text-xl font-extrabold text-slate-950 group-hover:text-cyan-700 transition-colors">{st.name}</h2>
                      <span className="text-xs font-mono text-cyan-700 font-semibold">{st.domain}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-bold">
                    {st.timeline}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {st.description}
                </p>

                {/* Focus Areas */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Key Vectors</span>
                  <div className="flex flex-wrap gap-1.5">
                    {st.focusAreas.map((f, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metrics and Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs font-mono font-bold text-slate-800">
                  <span className="text-slate-400 font-normal block text-[10px]">VERIFIED SCALE</span>
                  <span className="text-cyan-800">{st.metrics}</span>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 bg-cyan-100 group-hover:bg-cyan-200 transition-colors shrink-0">
                  <span>{selectedStartupId === st.id ? 'Hide Details' : 'Inspect Venture'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Incubation Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-extrabold">Have an AI Venture or Early MVP in the MENA Region?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We provide direct compute allocations, token subsidies, high-frequency RAG architecture reviews, and syndication to regional venture investors through 961 Combinator.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={onOpenMatcher}
              className="px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
            >
              Run Neural Matcher Assessment
            </button>
            <button
              onClick={() => onNavigate('livenexus')}
              className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Pitch in Live Nexus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
