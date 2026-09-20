import React from 'react';
import { PageId } from '../types';
import { HeroSection } from '../components/HeroSection';
import { SectionExcerpts } from '../components/SectionExcerpts';
import { Sparkles, Radio, ShieldCheck, Terminal, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Byline & Main Statement of Value */}
      <HeroSection 
        onNavigate={onNavigate}
        onOpenMatcher={onOpenMatcher}
        onOpenGetAccess={onOpenGetAccess}
      />

      {/* Main Container for Section Excerpts leading to full pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Jump Ribbon */}
        <div className="py-4 border-b border-slate-100 flex items-center justify-between text-xs overflow-x-auto gap-3 text-slate-500 font-mono">
          <span className="font-bold text-slate-800 shrink-0 uppercase tracking-wider text-[11px]">
            Section Navigation Index:
          </span>
          <div className="flex items-center space-x-3 shrink-0">
            <button onClick={() => onNavigate('competencies')} className="hover:text-cyan-700 transition-colors">01. Competencies</button>
            <span>/</span>
            <button onClick={() => onNavigate('architecture')} className="hover:text-cyan-700 transition-colors">02. Architecture & Deployments</button>
            <span>/</span>
            <button onClick={() => onNavigate('livenexus')} className="hover:text-cyan-700 text-cyan-700 font-bold transition-colors">03. Live Nexus OS</button>
            <span>/</span>
            <button onClick={() => onNavigate('guilds-dev')} className="hover:text-cyan-700 transition-colors">04. Guilds & Dev Nexus</button>
            <span>/</span>
            <button onClick={() => onNavigate('leadership')} className="hover:text-cyan-700 transition-colors">05. Tech Leadership</button>
            <span>/</span>
            <button onClick={() => onNavigate('national-cv')} className="hover:text-cyan-700 transition-colors">06. National CV</button>
            <span>/</span>
            <button onClick={() => onNavigate('startups')} className="hover:text-cyan-700 transition-colors">07. Startups</button>
            <span>/</span>
            <button onClick={() => onNavigate('ai-courses')} className="hover:text-cyan-700 text-amber-600 font-bold transition-colors">08. AI Courses & Certs</button>
          </div>
        </div>

        {/* Every section excerpt leading to full pages */}
        <SectionExcerpts 
          onNavigate={onNavigate}
          onOpenMatcher={onOpenMatcher}
          onOpenGetAccess={onOpenGetAccess}
        />

        {/* Bottom Banner for Ecosystem Activation */}
        <div className="my-16 p-8 sm:p-10 rounded-3xl bg-linear-to-r from-slate-950 via-slate-900 to-cyan-950 text-white border border-cyan-500/40 relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              ECOSYSTEM CATALYST
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to plug into the 961AI Innovation Network?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you are scaling an enterprise agent workspace, deploying civic sandboxes, or joining an industry data cooperative, our team and autonomous supervisors are ready.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenMatcher}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Run Neural Matcher</span>
              </button>
              <button
                onClick={onOpenGetAccess}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Apply for Guild Vetting</span>
              </button>
              <button
                onClick={() => onNavigate('livenexus')}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white transition-colors"
              >
                Explore Live Nexus →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
