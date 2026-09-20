import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Sparkles, 
  X, 
  GraduationCap, 
  Briefcase, 
  Flame, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Radio, 
  Database,
  ExternalLink
} from 'lucide-react';

interface NeuralMatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const NeuralMatcherModal: React.FC<NeuralMatcherModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [selectedRole, setSelectedRole] = useState<'scholar' | 'freelancer' | 'guru' | 'enterprise'>('scholar');
  const [submitting, setSubmitting] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  if (!isOpen) return null;

  const roleProfiles = {
    scholar: {
      title: "Scholar & AI Researcher",
      quote: "Pushing the boundaries of science",
      description: "You develop novel machine learning models, publish empirical research, or work with Arabic NLP, biomedical AI, and distributed multi-agent systems.",
      recommendedHubs: ["NexusLM & Notebook Workspaces", "Al-Hakam Legal Corpus", "aicademy.online Scholar Network"],
      assignedChannel: "#scholars-lab",
      recommendedGuild: "Data Cooperatives & Federated ML Sandbox",
      computeAllocation: "H100 Node Priority Queue & Token Subsidies",
      actionUrl: "livenexus" as PageId
    },
    freelancer: {
      title: "Freelancer & Specialist Engineer",
      quote: "Solving complex government challenges",
      description: "You execute high-impact GovTech bounties, build secure civic pipelines, and develop automated n8n workflows and RAG systems for institutions.",
      recommendedHubs: ["ALmouwateN Civic Sandboxes", "matchprenai.online Platform", "VAMS Deployment Repositories"],
      assignedChannel: "#public-square & Escrow Workflows",
      recommendedGuild: "GovTech & Public Administration Taskforce",
      computeAllocation: "Unified API Key + Sandbox Test Credits",
      actionUrl: "guilds-dev" as PageId
    },
    guru: {
      title: "Venture Guru & Founder",
      quote: "Looking to monetize your genius",
      description: "You turn bleeding-edge agent workflows into high-valuation commercial SaaS platforms, scaling through 961 Combinator and regional MENA capital syndicates.",
      recommendedHubs: ["961 Combinator Dealroom", "Zrolodex Investor Network", "RAWCOACH.AI Executive Portal"],
      assignedChannel: "#gurus-penthouse (Encrypted)",
      recommendedGuild: "FinTech & Banking Intelligence Guild",
      computeAllocation: "Dedicated Cloud Run & Enterprise Vector Clusters",
      actionUrl: "architecture" as PageId
    },
    enterprise: {
      title: "Enterprise Partner & Institution",
      quote: "Deploying sovereign AI infrastructure",
      description: "You represent ministries, private hospitals, commercial banks, or holding companies seeking compliant RAG architectures and multi-agent operations.",
      recommendedHubs: ["Enterprise Agent Workspace", "Company Brain Builder", "CapitalIssuesIQ Terminal"],
      assignedChannel: "#enterprise-war-room (Restricted)",
      recommendedGuild: "Industry Services Guilds (HIPAA / GDPR)",
      computeAllocation: "Zero-PII On-Premise & Containerized Sandboxes",
      actionUrl: "competencies" as PageId
    }
  };

  const currentProfile = roleProfiles[selectedRole];

  const handleRunMatcher = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setHasRun(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-cyan-500/30 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with High-Tech Cyan Accent */}
        <div className="bg-slate-900 px-6 py-5 border-b border-cyan-900/50 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center glow-cyan-sm">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-extrabold text-white">Neural Matcher Engine</h3>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 rounded border border-cyan-500/30">
                    v3.4 MENA
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Algorithmic ecosystem routing for scholars, freelancers, founders & enterprises
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Statement Quote */}
          <div className="p-3.5 bg-cyan-50/70 border border-cyan-200 rounded-xl text-xs text-slate-700 leading-relaxed font-medium">
            <strong className="text-cyan-950 font-bold block mb-1">Ecosystem Dispatch:</strong>
            "Whether you are a scholar pushing the boundaries of science, a freelancer solving complex government challenges, or a guru looking to monetize your genius, 961AI Network is the engine for your success."
          </div>

          {/* Archetype Selector */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
              Step 1: Select Your Innovation Archetype
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { key: 'scholar', label: 'Scholar', sub: 'Science & NLP', icon: <GraduationCap className="w-4 h-4" /> },
                { key: 'freelancer', label: 'Freelancer', sub: 'GovTech & Apps', icon: <Briefcase className="w-4 h-4" /> },
                { key: 'guru', label: 'Venture Guru', sub: 'Monetize Genius', icon: <Flame className="w-4 h-4" /> },
                { key: 'enterprise', label: 'Enterprise', sub: 'Infrastructure', icon: <Building2 className="w-4 h-4" /> },
              ].map((role) => (
                <button
                  key={role.key}
                  onClick={() => {
                    setSelectedRole(role.key as any);
                    setHasRun(false);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedRole === role.key
                      ? 'bg-cyan-950 text-white border-cyan-400 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${
                    selectedRole === role.key ? 'bg-cyan-500 text-slate-950' : 'bg-white text-slate-700 border border-slate-200'
                  }`}>
                    {role.icon}
                  </div>
                  <div className="font-bold text-xs leading-tight">{role.label}</div>
                  <div className={`text-[10px] mt-0.5 ${selectedRole === role.key ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {role.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Archetype Details & Matcher Calculation */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-600 font-bold">
                  {currentProfile.quote}
                </span>
                <h4 className="text-base font-bold text-slate-900">{currentProfile.title}</h4>
                <p className="text-xs text-slate-600 mt-1">{currentProfile.description}</p>
              </div>
            </div>

            {!hasRun ? (
              <div className="pt-2">
                <button
                  onClick={handleRunMatcher}
                  disabled={submitting}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center space-x-2 shadow-xs disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
                      <span>Synthesizing Vector Coordinates & Compute Allocations...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Compute Neural Match for {currentProfile.title}</span>
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-2 border-t border-slate-200 animate-in fade-in duration-300">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Optimal Ecosystem Vector Synthesized (98.7% Affinity)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Recommended Platforms</span>
                    <ul className="space-y-1 font-semibold text-slate-800">
                      {currentProfile.recommendedHubs.map((hub, i) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                          <span>{hub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Assigned Live Channel</span>
                    <div className="font-bold text-cyan-700 flex items-center space-x-1.5">
                      <Radio className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                      <span>{currentProfile.assignedChannel}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block mt-2 mb-0.5">Compute Allocation</span>
                    <span className="text-[11px] font-medium text-slate-700">{currentProfile.computeAllocation}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => {
                      onNavigate(currentProfile.actionUrl);
                      onClose();
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-cyan-300 hover:bg-cyan-200 transition-colors flex items-center justify-center space-x-2 shadow-xs"
                  >
                    <span>Proceed to Matched Workspace</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      onNavigate('livenexus');
                      onClose();
                    }}
                    className="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                  >
                    Enter Live Nexus Directly
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
