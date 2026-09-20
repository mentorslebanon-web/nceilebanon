import React from 'react';
import { PageId } from '../types';
import { ECOSYSTEM_METADATA } from '../data/ecosystemData';
import { Cpu, ShieldCheck, Terminal, Radio, FileText, Rocket, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenMatcher, onOpenGetAccess }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative cyber grid background lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none tech-grid-bg"></div>

      {/* Value Statement Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 py-10 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>CORE ARCHITECTURAL MANDATE</span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed italic">
              "{ECOSYSTEM_METADATA.mainStatementOfValue}"
            </p>
          </div>
          <div className="flex sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenMatcher}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Launch Neural Matcher</span>
            </button>
            <button
              onClick={onOpenGetAccess}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <span>Guild Vetting Gateway</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Byline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white">
                  NCEI <span className="text-cyan-400">LEBANON</span>
                </span>
                <span className="block text-xs text-slate-400">
                  961AI Network Infrastructure
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-slate-200">{ECOSYSTEM_METADATA.byline}</strong>
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500 space-y-1">
              <div>System Node: Beirut Central Telemetry #961</div>
              <div>Status: Live Distributed Agent Fabric</div>
              <div>Governed by: National Council for Entrepreneurship & Innovation</div>
            </div>
          </div>

          {/* Col 2: Core Platform Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
              Platform Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('yellow-pages')} className="text-amber-400 hover:text-amber-300 transition-colors font-semibold flex items-center space-x-1">
                  <span>Yellow Pages Directory</span>
                  <span className="px-1 py-0.2 text-[8px] bg-amber-400 text-slate-950 rounded font-bold">NEW</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('policy-papers')} className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center space-x-1">
                  <span>Policy & Research Papers</span>
                  <span className="px-1 py-0.2 text-[8px] bg-cyan-950 text-cyan-300 border border-cyan-500/40 rounded font-bold">2026</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-courses')} className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold flex items-center space-x-1">
                  <span>12 Essential AI Courses</span>
                  <span className="px-1 py-0.2 text-[8px] bg-emerald-950 text-emerald-300 border border-emerald-500/40 rounded font-bold">12 CERTS</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('neural-matcher')} className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Neural Matcher Engine</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('register')} className="text-slate-300 hover:text-white transition-colors flex items-center space-x-1">
                  <span>Join Network / Register</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('competencies')} className="hover:text-cyan-400 transition-colors">
                  Core Competencies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('architecture')} className="hover:text-cyan-400 transition-colors">
                  Deployments & Arch
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('livenexus')} className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5">
                  <span>Live Nexus OS</span>
                  <span className="px-1 py-0.2 text-[9px] bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded">LIVE</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guilds-dev')} className="hover:text-cyan-400 transition-colors">
                  Guilds & Dev Nexus
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin-maan')} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center space-x-1 font-mono text-[11px]">
                  <span>/Maan70939779 Admin</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional & Track Record */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
              Track Record
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('national-cv')} className="hover:text-cyan-400 transition-colors">
                  Our CV So Far (VAMS / OMSAR)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('leadership')} className="hover:text-cyan-400 transition-colors">
                  z961aiNetwork Values
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('leadership')} className="hover:text-cyan-400 transition-colors">
                  AlKhawarizmi Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('startups')} className="hover:text-cyan-400 transition-colors">
                  Startups Under Management
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Portfolios & Ventures */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
              Venture Network
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('startups')} className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
                  <span>zrolodex.live</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('startups')} className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
                  <span>zappcademy.xyz</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <span className="text-slate-400">LogisticsIQ Supply</span>
              </li>
              <li>
                <span className="text-slate-400">Al-Hakam Legal Knowledge Base</span>
              </li>
              <li>
                <span className="text-slate-400">961 Combinator</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} National Council for Entrepreneurship & Innovation (NCEI Lebanon) & 961AI Network. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400 cursor-pointer">Security & PII Masking</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Regulatory Sandboxes</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">HIPAA & GDPR Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
