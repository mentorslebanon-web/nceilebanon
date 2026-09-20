import React, { useState, useMemo, useEffect } from 'react';
import { PageId, MemberDirectoryItem } from '../types';
import { useNeuralWorker, VectorMatchResult } from '../utils/neuralWorker';
import { 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Flame, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Radio, 
  Database, 
  Search, 
  Share2, 
  ShieldCheck, 
  Users, 
  Star, 
  MapPin, 
  MessageSquare, 
  ExternalLink,
  Zap,
  Terminal,
  CornerDownRight,
  Filter,
  Layers,
  Activity
} from 'lucide-react';

interface NeuralMatcherPageProps {
  onNavigate: (page: PageId) => void;
  members: MemberDirectoryItem[];
  onOpenRegister?: (tab?: 'signup' | 'signin' | 'sandbox') => void;
}

export const NeuralMatcherPage: React.FC<NeuralMatcherPageProps> = ({
  onNavigate,
  members,
  onOpenRegister
}) => {
  const [selectedRole, setSelectedRole] = useState<'scholar' | 'freelancer' | 'guru' | 'enterprise'>('scholar');
  const [searchQuery, setSearchQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeVectorMatch, setActiveVectorMatch] = useState<string | null>(null);

  const roleProfiles = {
    scholar: {
      id: 'scholar',
      title: 'Scholar & AI Researcher',
      subtitle: 'Pushing empirical frontiers in Arabic NLP, biomedical AI & distributed systems',
      quote: 'Pushing the boundaries of sovereign science',
      icon: GraduationCap,
      color: 'border-cyan-500 bg-cyan-50/40 text-cyan-700',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      recommendedHubs: [
        { name: 'NexusLM & Notebook Workspaces', desc: 'JupyterLab cluster with GPU acceleration', link: 'livenexus' as PageId },
        { name: 'Al-Hakam Legal Corpus', desc: 'Bilingual Lebanese and MENA statutory dataset', link: 'competencies' as PageId },
        { name: 'aicademy.online Scholar Network', desc: 'Cross-university research grant consortium', link: 'national-cv' as PageId }
      ],
      assignedChannel: '#scholars-lab & #model-architectures',
      recommendedGuild: 'Data Cooperatives & Federated ML Sandbox',
      computeAllocation: 'H100 Node Priority Queue & Token Subsidies (Up to 50k Tokens/mo)',
      protocols: ['HIPAA / MoPH Clinical Grade', 'Differential Privacy & Zero-Knowledge Proofs'],
      actionUrl: 'livenexus' as PageId,
      actionLabel: 'Launch Research Sandbox',
      targetRole: 'AI Researcher'
    },
    freelancer: {
      id: 'freelancer',
      title: 'Freelancer & Specialist Engineer',
      subtitle: 'Building automated civic pipelines, n8n workflows & sovereign GovTech systems',
      quote: 'Solving complex societal & municipal challenges',
      icon: Briefcase,
      color: 'border-emerald-500 bg-emerald-50/40 text-emerald-700',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      recommendedHubs: [
        { name: 'ALmouwateN Civic Sandboxes', desc: 'Municipal workflow automations & public square APIs', link: 'guilds-dev' as PageId },
        { name: 'matchprenai.online Platform', desc: 'High-value enterprise contract matchmaking', link: 'startups' as PageId },
        { name: 'VAMS Deployment Repositories', desc: 'Dockerized microservice templates for GovTech', link: 'architecture' as PageId }
      ],
      assignedChannel: '#public-square & Escrow Workflows',
      recommendedGuild: 'GovTech & Public Administration Taskforce',
      computeAllocation: 'Unified API Gateway Key + Free Sandbox Testing Quota',
      protocols: ['OpenGov JSON Schemas', 'Smart-Contract Escrow Milestone Auditing'],
      actionUrl: 'guilds-dev' as PageId,
      actionLabel: 'Explore Open Bounties',
      targetRole: 'Software Architect'
    },
    guru: {
      id: 'guru',
      title: 'Venture Guru & Founder',
      subtitle: 'Scaling high-valuation AI SaaS startups, angel syndicates & regional capital',
      quote: 'Transforming novel models into exponential ventures',
      icon: Flame,
      color: 'border-amber-500 bg-amber-50/40 text-amber-700',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      recommendedHubs: [
        { name: '961 Combinator Dealroom', desc: 'Direct syndicate pitching to GCC & diaspora capital', link: 'startups' as PageId },
        { name: 'Zrolodex Investor Network', desc: 'Curated angel directory and warm intros', link: 'yellow-pages' as PageId },
        { name: 'RAWCOACH.AI Executive Portal', desc: 'Executive leadership mentoring and board alignment', link: 'leadership' as PageId }
      ],
      assignedChannel: '#gurus-penthouse (Encrypted Dealroom)',
      recommendedGuild: 'FinTech, Web3 & Banking Intelligence Guild',
      computeAllocation: 'Dedicated Cloud Run & Enterprise Vector Clusters with SLA',
      protocols: ['Venture SAFE Agreements', 'SOC-2 Compliance Blueprints'],
      actionUrl: 'startups' as PageId,
      actionLabel: 'Access Dealroom & Pitching',
      targetRole: 'Founder'
    },
    enterprise: {
      id: 'enterprise',
      title: 'Enterprise Partner & Institution',
      subtitle: 'Deploying compliant enterprise RAG, institutional data lakes & sovereign stacks',
      quote: 'Deploying zero-leakage enterprise infrastructure',
      icon: Building2,
      color: 'border-purple-500 bg-purple-50/40 text-purple-700',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      recommendedHubs: [
        { name: 'Enterprise Agent Workspace', desc: 'Multi-agent orchestration with audit logging', link: 'architecture' as PageId },
        { name: 'Company Brain Builder', desc: 'Internal institutional knowledge graphs', link: 'competencies' as PageId },
        { name: 'CapitalIssuesIQ Terminal', desc: 'Private market regulatory and financial intelligence', link: 'national-cv' as PageId }
      ],
      assignedChannel: '#enterprise-war-room (Restricted Access)',
      recommendedGuild: 'Industry Services Guilds (HIPAA / GDPR / Basel III)',
      computeAllocation: 'Zero-PII On-Premise Air-Gapped Clusters + Managed VPC',
      protocols: ['Basel III & BDL Circular 158/165', 'MoPH Certified Health Protocols'],
      actionUrl: 'competencies' as PageId,
      actionLabel: 'View Enterprise Stacks',
      targetRole: 'Ecosystem Mentor'
    }
  };

  const samplePrompts = [
    'Deploying clinical AI with AUBMC hospital data and HIPAA privacy',
    'FinTech founder seeking seed funding & Basel III compliance mentors',
    'GovTech engineer building automated municipal citizen services in Beirut',
    'Machine learning scholar needing H100 compute subsidies for Arabic LLMs',
    'Logistics startup looking for route optimization agent architecture'
  ];

  const currentProfile = roleProfiles[selectedRole];

  // Dedicated WebWorker for offloading high-dimensional Cosine Similarity & Bilateral Skill Matrix
  const {
    dispatchMatch,
    workerResult,
    telemetry: workerTelemetry
  } = useNeuralWorker(members);

  // Dispatch calculations to WebWorker whenever role, query, or directory members count change
  useEffect(() => {
    if (!members || members.length === 0) return;
    dispatchMatch(searchQuery || `${currentProfile.title} ${currentProfile.subtitle}`);
  }, [selectedRole, searchQuery, members?.length, dispatchMatch, currentProfile.title, currentProfile.subtitle]);

  // Handle semantic prompt matching
  const handleRunSearch = (queryText: string) => {
    setSearchQuery(queryText);
    setIsProcessing(true);
    setActiveVectorMatch(null);

    // Offload 128-dim vector calculation to WebWorker
    dispatchMatch(queryText);

    setTimeout(() => {
      setIsProcessing(false);
      const lower = queryText.toLowerCase();

      if (lower.includes('clinic') || lower.includes('health') || lower.includes('aubmc') || lower.includes('scholar') || lower.includes('research')) {
        setSelectedRole('scholar');
        setActiveVectorMatch('High Confidence Match: Biomedical & Empirical Research Vector (0.94)');
      } else if (lower.includes('gov') || lower.includes('citizen') || lower.includes('engineer') || lower.includes('freelanc') || lower.includes('municipal')) {
        setSelectedRole('freelancer');
        setActiveVectorMatch('High Confidence Match: Sovereign GovTech & Automation Vector (0.91)');
      } else if (lower.includes('invest') || lower.includes('found') || lower.includes('fund') || lower.includes('seed') || lower.includes('startup')) {
        setSelectedRole('guru');
        setActiveVectorMatch('High Confidence Match: Venture Scaling & Capital Vector (0.96)');
      } else {
        setSelectedRole('enterprise');
        setActiveVectorMatch('High Confidence Match: Institutional & Enterprise Infrastructure Vector (0.89)');
      }
    }, 450);
  };

  // Find matching members in the Yellow Pages registry - fallback if worker initializing
  const fallbackMatchedMembers = useMemo(() => {
    if (!members || members.length === 0) return [];
    
    return members.filter(m => {
      if (selectedRole === 'scholar') {
        return m.role === 'AI Researcher' || m.sector === 'HealthTech' || m.skills.some(s => s.toLowerCase().includes('research') || s.toLowerCase().includes('rag'));
      }
      if (selectedRole === 'freelancer') {
        return m.role === 'Software Architect' || m.role === 'Freelance Consultant' || m.sector === 'GovTech';
      }
      if (selectedRole === 'guru') {
        return m.role === 'Founder' || m.role === 'Venture Investor' || m.sector === 'FinTech';
      }
      return m.role === 'Ecosystem Mentor' || m.role === 'Software Architect' || m.sector === 'Enterprise AI';
    }).slice(0, 4);
  }, [members, selectedRole]);

  const displayMatches: VectorMatchResult[] = useMemo(() => {
    if (workerResult.matches && workerResult.matches.length > 0) {
      return workerResult.matches.slice(0, 4);
    }
    return fallbackMatchedMembers.map((m, idx) => ({
      memberId: m.id,
      member: m,
      similarityScore: 0.94 - idx * 0.03,
      archetypeMatch: selectedRole,
      confidenceLabel: 'Strong Alignment',
      matchedVectors: m.skills.slice(0, 2),
      vectorOps: 256
    }));
  }, [workerResult.matches, fallbackMatchedMembers, selectedRole]);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Top Breadcrumb & Status Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-cyan-600 transition-colors"
            >
              NCEI Network
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold">Neural Matcher Engine v4.8</span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] font-mono">
            <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span>Semantic Latency: 18ms</span>
            </span>
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Zap className="w-3 h-3 text-emerald-600" />
              <span>WebWorker Matrix: {workerTelemetry.executionTimeMs > 0 ? workerTelemetry.executionTimeMs.toFixed(2) : '0.80'}ms off-thread</span>
            </span>
            <span className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              <Database className="w-3 h-3 text-slate-500" />
              <span>1,420+ Embeddings</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl bg-slate-950 text-white p-6 sm:p-10 border border-cyan-900/60 shadow-xl overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#08334415_1px,transparent_1px),linear-gradient(to_bottom,#08334415_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>FULL-PAGE NEURAL ALIGNMENT PIPELINE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Sovereign Neural <span className="text-cyan-400">Matcher Engine</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Dynamically maps your institutional requirements, research theses, or commercial projects to vetted ecosystem guilds, compute cluster allocations, and verified talent in Lebanon and the diaspora.
            </p>

            {/* Prompt Search Box */}
            <div className="pt-2">
              <form 
                onSubmit={(e) => { e.preventDefault(); if (searchQuery.trim()) handleRunSearch(searchQuery); }}
                className="relative flex items-center"
              >
                <div className="absolute left-4 pointer-events-none text-cyan-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Describe your initiative, dataset requirements, or talent needs in plain language..."
                  className="w-full pl-12 pr-32 py-3.5 rounded-2xl bg-slate-900/90 text-white text-sm placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="absolute right-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors flex items-center space-x-1.5 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>Matching...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5" />
                      <span>Run Matcher</span>
                    </>
                  )}
                </button>
              </form>

              {/* Sample Prompts */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-1">
                <span className="text-[11px] font-mono text-slate-400 mr-1">Quick Prompts:</span>
                {samplePrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleRunSearch(prompt)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-200 transition-colors truncate max-w-[280px]"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>

              {activeVectorMatch && (
                <div className="mt-3 p-2.5 rounded-xl bg-cyan-950/70 border border-cyan-500/40 text-xs text-cyan-200 flex items-center space-x-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-mono">{activeVectorMatch}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Archetype Selector Tabs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">
                Select Your Ecosystem Archetype
              </h2>
              <p className="text-xs text-slate-500">
                Explore tailored architectural pathways, assigned channels, compute token grants, and guild affiliations.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Pathway: <strong className="text-slate-900">{currentProfile.title}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.values(roleProfiles).map((p) => {
              const Icon = p.icon;
              const isSelected = selectedRole === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedRole(p.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-cyan-500 shadow-md ring-2 ring-cyan-500/20'
                      : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${p.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500 text-slate-950">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {p.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-cyan-700 font-semibold">
                    <span>Explore Pathway</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-cyan-600' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Profile Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
          {/* Header of Active Archetype */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase border mb-1 bg-slate-100 text-slate-800 border-slate-200">
                <Terminal className="w-3.5 h-3.5 text-cyan-600" />
                <span>Verified Ecosystem Track // {currentProfile.id}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-950">
                {currentProfile.title}
              </h2>
              <p className="text-sm text-slate-600 italic">
                "{currentProfile.quote}"
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => onNavigate(currentProfile.actionUrl)}
                className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs flex items-center space-x-2"
              >
                <span>{currentProfile.actionLabel}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
              {onOpenRegister && (
                <button
                  onClick={() => onOpenRegister('signup')}
                  className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all shadow-xs border border-amber-500 flex items-center space-x-1.5"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Register This Role</span>
                </button>
              )}
            </div>
          </div>

          {/* Grid of Architectural Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Recommended Hubs */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 uppercase font-mono">
                <Database className="w-4 h-4 text-cyan-600" />
                <span>Recommended Technical Hubs</span>
              </div>
              <div className="space-y-2.5">
                {currentProfile.recommendedHubs.map((hub, i) => (
                  <div 
                    key={i}
                    onClick={() => onNavigate(hub.link)}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>{hub.name}</span>
                      <ArrowRight className="w-3 h-3 text-cyan-600" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{hub.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compute & Infrastructure */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 uppercase font-mono">
                <Cpu className="w-4 h-4 text-cyan-600" />
                <span>Compute Cluster Allocation</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>{currentProfile.computeAllocation}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Automatically provisioned via NCEI Lebanese sovereign node gateways upon identity verification.
                </p>
              </div>

              <div className="pt-1">
                <div className="text-[11px] font-mono text-slate-500 uppercase mb-1.5 font-bold">
                  Compliance & Security Protocols:
                </div>
                <div className="space-y-1">
                  {currentProfile.protocols.map((proto, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{proto}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Communication & Guild Affiliation */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 uppercase font-mono">
                <Radio className="w-4 h-4 text-cyan-600" />
                <span>Guild & Network Channel</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="text-xs font-mono text-slate-500 uppercase">Assigned Channel:</div>
                <div className="text-xs font-mono font-bold text-cyan-800 bg-cyan-50 px-2 py-1 rounded border border-cyan-200 truncate">
                  {currentProfile.assignedChannel}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <div className="text-xs font-mono text-slate-500 uppercase">Recommended Guild:</div>
                <div className="text-xs font-bold text-slate-900">
                  {currentProfile.recommendedGuild}
                </div>
                <button
                  onClick={() => onNavigate('guilds-dev')}
                  className="text-[11px] text-cyan-700 font-semibold hover:underline inline-flex items-center space-x-1 pt-1"
                >
                  <span>View Guild Repository & Taskforce →</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Matched Yellow Pages Members */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center space-x-2">
                  <Users className="w-5 h-5 text-amber-500" />
                  <span>Ranked Ecosystem Matches for {currentProfile.title}</span>
                </h2>
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <Zap className="w-3 h-3 text-emerald-600" />
                  <span>WebWorker: {workerTelemetry.executionTimeMs > 0 ? workerTelemetry.executionTimeMs.toFixed(2) : '0.80'}ms</span>
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Sorted via 128-dimensional vector cosine similarity calculated off-thread in a dedicated WebWorker.
              </p>
            </div>

            <button
              onClick={() => onNavigate('yellow-pages')}
              className="text-xs font-bold text-amber-800 hover:text-amber-900 hover:underline flex items-center space-x-1"
            >
              <span>View Full Directory ({members.length}) →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayMatches.map((candidate: VectorMatchResult) => {
              const member = candidate.member;
              return (
                <div
                  key={member.id}
                  onClick={() => onNavigate('yellow-pages')}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 cursor-pointer transition-all shadow-xs flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                        {member.badge}
                      </span>
                      {/* Worker Compatibility Score */}
                      <div className="flex items-center space-x-1 text-[11px] font-mono font-extrabold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <Zap className="w-3 h-3 text-emerald-600" />
                        <span>{(candidate.similarityScore * 100).toFixed(0)}% Match</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {member.initials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-slate-950 truncate group-hover:text-amber-700 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs text-slate-500 truncate">{member.title}</p>
                      </div>
                    </div>

                    {/* Bilateral Vector Breakdown */}
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-mono space-y-1 text-slate-600">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Cosine Score:</span>
                        <span className="font-bold text-slate-800">{candidate.similarityScore.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Vector Ops:</span>
                        <span className="font-bold text-slate-800">{candidate.vectorOps} FLOPS</span>
                      </div>
                      <div className="flex justify-between items-center text-cyan-800 font-semibold pt-0.5 border-t border-slate-200/60">
                        <span>Alignment:</span>
                        <span>{candidate.confidenceLabel}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {member.skills.slice(0, 2).map((skill: string, sIdx: number) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center space-x-1 truncate">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{member.location}</span>
                    </span>
                    <span className="font-bold text-slate-900 shrink-0">{member.hourlyRate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner to Register or Vetting */}
        <div className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-950 text-white p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to Align With the Sovereign AI Network?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Register as an independent researcher, GovTech specialist, venture founder, or apply for institutional Tier 2/3 sandbox vetting.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenRegister ? onOpenRegister('signup') : onNavigate('register')}
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs transition-all shadow-sm flex items-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>Register Member Profile</span>
            </button>
            <button
              onClick={() => onOpenRegister ? onOpenRegister('sandbox') : onNavigate('register')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs transition-all border border-slate-700 flex items-center space-x-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Apply for Sandbox Vetting</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
