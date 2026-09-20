import React, { useState, useMemo } from 'react';
import { PageId, LiveChannel, LiveMessage } from '../types';
import { LIVE_CHANNELS, INITIAL_MESSAGES } from '../data/ecosystemData';
import { ECOSYSTEM_TELEMETRY_NODES, EcosystemTelemetryNode } from '../data/telemetryNodesData';
import { useVirtualList } from '../utils/virtualizer';
import { useInvertedSearch } from '../utils/searchIndex';
import { 
  Radio, 
  ArrowLeft, 
  Send, 
  Bot, 
  Lock, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Users, 
  Flame, 
  Hash, 
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Server,
  Activity,
  Cpu,
  Layers,
  Zap,
  Search,
  RefreshCw,
  SlidersHorizontal,
  Wifi,
  X
} from 'lucide-react';

interface LiveNexusPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess: () => void;
}

export const LiveNexusPage: React.FC<LiveNexusPageProps> = ({
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess
}) => {
  const [viewMode, setViewMode] = useState<'chat' | 'telemetry'>('chat');
  const [selectedChannelId, setSelectedChannelId] = useState<string>('public-square');
  const [messages, setMessages] = useState<Record<string, LiveMessage[]>>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isBotResponding, setIsBotResponding] = useState(false);
  const [activeProtocolPanel, setActiveProtocolPanel] = useState<'none' | 'escrow' | 'redteam'>('none');

  // Telemetry Filters & State
  const [telemetryRegion, setTelemetryRegion] = useState<string>('all');
  const [telemetryStatus, setTelemetryStatus] = useState<string>('all');
  const [pingedNodeId, setPingedNodeId] = useState<string | null>(null);

  // Inverted Search for 466 Telemetry Nodes
  const {
    query: nodeSearchQuery,
    setQuery: setNodeSearchQuery,
    searchResults: searchedNodes,
    searchTelemetry: nodeSearchTelemetry
  } = useInvertedSearch<EcosystemTelemetryNode>({
    items: ECOSYSTEM_TELEMETRY_NODES,
    fieldsToExtract: (n) => [n.id, n.name, n.region, n.type, n.status, n.protocol],
    debounceMs: 50
  });

  const filteredNodes = useMemo(() => {
    return searchedNodes.filter((node) => {
      const matchRegion = telemetryRegion === 'all' || node.region.toLowerCase().includes(telemetryRegion.toLowerCase());
      const matchStatus = telemetryStatus === 'all' || node.status === telemetryStatus;
      return matchRegion && matchStatus;
    });
  }, [searchedNodes, telemetryRegion, telemetryStatus]);

  // Virtualized List for the 466 Nodes
  const {
    scrollContainerRef: telemetryScrollRef,
    onScroll: handleTelemetryScroll,
    totalHeight: telemetryTotalHeight,
    offsetY: telemetryOffsetY,
    startIndex: telemetryStartIndex,
    endIndex: telemetryEndIndex,
    visibleCount: telemetryVisibleCount
  } = useVirtualList({
    itemCount: filteredNodes.length,
    itemHeight: 74,
    overscan: 4
  });

  const visibleNodes = filteredNodes.slice(telemetryStartIndex, telemetryEndIndex);

  const activeChannel = LIVE_CHANNELS.find((c) => c.id === selectedChannelId) || LIVE_CHANNELS[0];
  const channelMessages = messages[selectedChannelId] || [];

  const handlePingNode = (nodeId: string) => {
    setPingedNodeId(nodeId);
    setTimeout(() => setPingedNodeId(null), 1200);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: LiveMessage = {
      id: 'usr_' + Date.now(),
      channelId: selectedChannelId,
      sender: 'You (Visiting Member)',
      role: 'Ecosystem Member',
      avatar: 'ME',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: inputText,
      badge: 'Active Node'
    };

    const currentText = inputText;
    setInputText('');

    // Update messages
    setMessages((prev) => ({
      ...prev,
      [selectedChannelId]: [...(prev[selectedChannelId] || []), userMsg]
    }));

    // If message mentions @961Brain or asks a technical question, bot answers
    const lower = currentText.toLowerCase();
    if (lower.includes('@961brain') || lower.includes('rag') || lower.includes('vams') || lower.includes('help') || lower.includes('matcher') || lower.includes('arabic')) {
      setIsBotResponding(true);
      setTimeout(() => {
        let botReply = "@You: Query parsed against 961AI vector index. Al-Hakam, NexusLM, and ALmouwateN pipelines are verified operational with sub-second hybrid retrieval.";
        
        if (lower.includes('vams') || lower.includes('hospital')) {
          botReply = "@You: Rafic Hariri University Hospital VAMS archive confirmed: 1.8M+ verified QR vaccine and PCR telemetry records processed under national zero-downtime protocols.";
        } else if (lower.includes('arabic') || lower.includes('nlp')) {
          botReply = "@You: For Arabic dialects and legal statutory grounding, Al-Hakam pairs custom root stemmers with dense cross-encoders for 99.4% factual precision.";
        } else if (lower.includes('matcher')) {
          botReply = "@You: The Neural Matcher vectorizes your capability profile across 4 regional archetypes: Scholar, Freelancer, Venture Guru, and Enterprise.";
        }

        const botMsg: LiveMessage = {
          id: 'bot_' + Date.now(),
          channelId: selectedChannelId,
          sender: '@961Brain',
          role: 'Autonomous RAG Bot',
          avatar: '9B',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          content: botReply,
          badge: 'RAG Oracle',
          isAiBot: true
        };

        setMessages((prev) => ({
          ...prev,
          [selectedChannelId]: [...(prev[selectedChannelId] || []), botMsg]
        }));
        setIsBotResponding(false);
      }, 700);
    }
  };

  const handleTriggerQuickBot = (prompt: string) => {
    setInputText(`@961Brain ${prompt}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors mr-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white font-mono">
                NCEILEBANON // LIVE NEXUS OS
              </span>
            </div>
            <span className="hidden lg:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              "Discord-on-Steroids" 24/7 Digital City
            </span>
          </div>

          {/* Primary View Switcher: Channels vs 466 Virtualized Nodes */}
          <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('chat')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 transition-colors ${
                viewMode === 'chat'
                  ? 'bg-cyan-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Chat Stream</span>
            </button>
            <button
              onClick={() => setViewMode('telemetry')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 transition-colors ${
                viewMode === 'telemetry'
                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>466 Nodes Telemetry</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveProtocolPanel(activeProtocolPanel === 'redteam' ? 'none' : 'redteam')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold border transition-colors flex items-center space-x-1.5 ${
                activeProtocolPanel === 'redteam'
                  ? 'bg-rose-500 text-white border-rose-400'
                  : 'bg-rose-950/70 text-rose-300 border-rose-500/30 hover:bg-rose-900/60'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden sm:inline">Red Teaming Schedule</span>
            </button>
            <button
              onClick={() => setActiveProtocolPanel(activeProtocolPanel === 'escrow' ? 'none' : 'escrow')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold border transition-colors flex items-center space-x-1.5 ${
                activeProtocolPanel === 'escrow'
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-amber-950/70 text-amber-300 border-amber-500/30 hover:bg-amber-900/60'
              }`}
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Freelance Escrow</span>
            </button>
            <button
              onClick={onOpenMatcher}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors flex items-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Neural Concierge</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main OS Interface Layout: 466 Nodes Telemetry vs Chat Channels */}
      {viewMode === 'telemetry' ? (
        <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-4 overflow-y-auto">
          {/* Top Status & Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Sovereign Federated Nodes</div>
              <div className="text-xl font-mono font-bold text-white mt-0.5">466 Nodes</div>
              <div className="text-[11px] text-emerald-400 font-mono mt-0.5">412 Online • 38 Syncing</div>
            </div>
            <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Aggregated Compute</div>
              <div className="text-xl font-mono font-bold text-amber-400 mt-0.5">38.4 TFLOPS</div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">FP16 Matrix Tensor Engine</div>
            </div>
            <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Network Latency (National)</div>
              <div className="text-xl font-mono font-bold text-cyan-400 mt-0.5">14.2 ms</div>
              <div className="text-[11px] text-cyan-500/80 font-mono mt-0.5">P95 Domestic Mesh Peer</div>
            </div>
            <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-2xl">
              <div className="text-[10px] font-mono text-slate-400 uppercase">DOM Virtual Windowing</div>
              <div className="text-xl font-mono font-bold text-emerald-400 mt-0.5">60 FPS</div>
              <div className="text-[11px] text-emerald-500/80 font-mono mt-0.5">70%+ DOM Nodes Trimmed</div>
            </div>
          </div>

          {/* Search and Filters Bar */}
          <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search nodes by ID (e.g., NODE-042), operator, region, hardware, protocol..."
                  value={nodeSearchQuery}
                  onChange={(e) => setNodeSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400 font-mono"
                />
                {nodeSearchQuery && (
                  <button
                    onClick={() => setNodeSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Inverted Index & Virtualizer Telemetry Badges */}
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 bg-amber-950/60 border border-amber-500/30 rounded-xl text-xs font-mono text-amber-300 flex items-center space-x-1.5 shrink-0">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Trie: {nodeSearchTelemetry.timeMs}ms</span>
                </div>
                <div className="px-3 py-1.5 bg-cyan-950/60 border border-cyan-500/30 rounded-xl text-xs font-mono text-cyan-300 flex items-center space-x-1.5 shrink-0">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DOM: {telemetryVisibleCount} / {filteredNodes.length}</span>
                </div>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-500 text-[11px] mr-1">Region:</span>
                {['all', 'Beirut', 'Mount Lebanon', 'Tripoli', 'South', 'Bekaa', 'Diaspora'].map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setTelemetryRegion(reg)}
                    className={`px-2 py-0.5 rounded-md text-[11px] transition-colors ${
                      telemetryRegion === reg
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {reg === 'all' ? 'All Regions' : reg}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 text-[11px] mr-1">Status:</span>
                {['all', 'operational', 'syncing', 'verifying'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setTelemetryStatus(st)}
                    className={`px-2 py-0.5 rounded-md text-[11px] uppercase transition-colors ${
                      telemetryStatus === st
                        ? 'bg-cyan-400 text-slate-950 font-bold'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Virtualized Node List Table */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 grid grid-cols-12 text-[10px] font-mono uppercase text-slate-400 tracking-wider">
              <div className="col-span-4 sm:col-span-3">Node ID & Cluster</div>
              <div className="col-span-3 sm:col-span-2">Region & Operator</div>
              <div className="hidden sm:block sm:col-span-3">Hardware Spec</div>
              <div className="col-span-3 sm:col-span-2 text-right sm:text-left">Latency / Uptime</div>
              <div className="col-span-2 text-right">Telemetry Ping</div>
            </div>

            {/* Scrollable Virtual Viewport */}
            <div 
              ref={telemetryScrollRef}
              onScroll={handleTelemetryScroll}
              className="h-[520px] overflow-y-auto relative font-mono text-xs divide-y divide-slate-800/50"
            >
              <div style={{ height: `${telemetryTotalHeight}px`, position: 'relative', width: '100%' }}>
                <div style={{ transform: `translateY(${telemetryOffsetY}px)`, position: 'absolute', left: 0, right: 0, top: 0 }}>
                  {visibleNodes.map((node) => {
                    const isPinged = pingedNodeId === node.id;
                    return (
                      <div
                        key={node.id}
                        className="px-4 py-3 hover:bg-slate-800/50 transition-colors grid grid-cols-12 items-center text-xs h-[74px] border-b border-slate-800/40"
                      >
                        {/* Node ID & Name */}
                        <div className="col-span-4 sm:col-span-3 flex items-center space-x-2.5 min-w-0 pr-2">
                          <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                            node.status === 'operational' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' :
                            node.status === 'syncing' ? 'bg-amber-400 animate-pulse' : 'bg-cyan-400'
                          }`}></span>
                          <div className="min-w-0">
                            <div className="font-bold text-white truncate flex items-center space-x-1">
                              <span>{node.name}</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono flex items-center space-x-1">
                              <span className="text-amber-400">{node.id}</span>
                              <span>•</span>
                              <span className="truncate">{node.protocol}</span>
                            </div>
                          </div>
                        </div>

                        {/* Region & Type */}
                        <div className="col-span-3 sm:col-span-2 min-w-0 pr-2">
                          <div className="text-slate-200 truncate">{node.region}</div>
                          <div className="text-[10px] text-slate-400 truncate">{node.type}</div>
                        </div>

                        {/* Throughput & Peers */}
                        <div className="hidden sm:block sm:col-span-3 text-slate-300 text-[11px] truncate pr-2">
                          <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 mr-2">
                            {node.throughputKbs} Kb/s
                          </span>
                          <span className="text-slate-500 text-[10px]">
                            {node.peersConnected} peers
                          </span>
                        </div>

                        {/* Latency & Uptime */}
                        <div className="col-span-3 sm:col-span-2 text-right sm:text-left font-mono">
                          <div className="text-emerald-400 text-xs font-bold flex items-center sm:justify-start justify-end space-x-1">
                            <Wifi className="w-3 h-3 text-emerald-400" />
                            <span>{node.latencyMs}ms</span>
                          </div>
                          <div className="text-[10px] text-slate-400">{node.uptime} uptime</div>
                        </div>

                        {/* Ping Action */}
                        <div className="col-span-2 text-right">
                          <button
                            onClick={() => handlePingNode(node.id)}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors border ${
                              isPinged
                                ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold'
                                : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border-slate-700'
                            }`}
                          >
                            {isPinged ? 'ACK 0ms' : 'Ping'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
      <div className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 overflow-hidden">
        {/* Left Channel Sidebar (3 Tiers of Access) */}
        <div className="md:col-span-4 lg:col-span-3 bg-slate-900/80 border-r border-slate-800 p-4 space-y-5 overflow-y-auto">
          {/* Neural Concierge Banner */}
          <div className="p-3 bg-cyan-950/60 rounded-xl border border-cyan-500/30 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-400">
              <span className="flex items-center space-x-1.5">
                <Bot className="w-3.5 h-3.5" />
                <span>Neural Concierge</span>
              </span>
              <span className="text-[10px] text-emerald-400">ACTIVE</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Automated member routing based on skill sets, compute allocation, and vetting tier.
            </p>
          </div>

          {/* Tiers Channels List */}
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold px-1">
              Synchronous Access Tiers
            </div>

            <div className="space-y-1.5">
              {LIVE_CHANNELS.map((ch) => {
                const isSelected = selectedChannelId === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChannelId(ch.id)}
                    className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-950 border border-cyan-500 text-white shadow-xs'
                        : 'bg-slate-900/50 hover:bg-slate-800/70 border border-transparent text-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      {ch.isEncrypted ? (
                        <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      ) : (
                        <Hash className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      )}
                      <div className="truncate">
                        <div className="text-xs font-bold leading-tight truncate">{ch.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{ch.tierLabel}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 shrink-0 ml-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span className="text-[10px] font-mono text-slate-400">{ch.activeUsers}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick RAG Summon Prompts */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold px-1">
              Summon @961Brain Bot:
            </span>
            <div className="space-y-1 text-xs">
              <button
                onClick={() => handleTriggerQuickBot('explain Arabic legal RAG precision')}
                className="w-full text-left p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-[11px] text-cyan-300 border border-slate-700/60 truncate"
              >
                &gt; Query Al-Hakam Legal RAG
              </button>
              <button
                onClick={() => handleTriggerQuickBot('show VAMS emergency hospital stats')}
                className="w-full text-left p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-[11px] text-cyan-300 border border-slate-700/60 truncate"
              >
                &gt; Query RHUH VAMS Telemetry
              </button>
              <button
                onClick={() => handleTriggerQuickBot('how does Neural Matcher score founders?')}
                className="w-full text-left p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-[11px] text-cyan-300 border border-slate-700/60 truncate"
              >
                &gt; Query Neural Matcher Vectors
              </button>
            </div>
          </div>
        </div>

        {/* Right Active Chat Stream */}
        <div className="md:col-span-8 lg:col-span-9 bg-slate-950 flex flex-col h-[78vh] md:h-[82vh]">
          {/* Channel Header */}
          <div className="p-4 border-b border-slate-800 bg-slate-900/40 flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-base font-extrabold text-white font-mono">{activeChannel.name}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  {activeChannel.tierLabel}
                </span>
                {activeChannel.isEncrypted && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-400 border border-amber-500/30 flex items-center space-x-1">
                    <Lock className="w-3 h-3" />
                    <span>ENCRYPTED ALPHA</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{activeChannel.description}</p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-slate-400">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>{activeChannel.activeUsers} Live Peers</span>
            </div>
          </div>

          {/* INLINE ESCROW PROTOCOL PANEL (NO POP-UP) */}
          {activeProtocolPanel === 'escrow' && (
            <div className="p-4 bg-amber-950/40 border-b border-amber-500/30 text-white space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Lock className="w-4 h-4" />
                  <h3 className="font-bold text-xs font-mono uppercase tracking-wider">
                    Ticket-Based Freelance Escrow Hub // Live Protocol
                  </h3>
                </div>
                <button 
                  onClick={() => setActiveProtocolPanel('none')} 
                  className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
                >
                  ✕ Close Panel
                </button>
              </div>
              <p className="text-xs text-slate-300 max-w-3xl">
                Securing high-ticket government bounties and private consultation contracts with automated milestone disbursements upon automated GitHub & integration test validation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Active Vault Balance:</span>
                  <span className="text-cyan-400 font-bold">$142,500 USD</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Open GovTech Bounties:</span>
                  <span className="text-emerald-400 font-bold">14 Verified Tasks</span>
                </div>
              </div>
            </div>
          )}

          {/* INLINE RED TEAMING PANEL (NO POP-UP) */}
          {activeProtocolPanel === 'redteam' && (
            <div className="p-4 bg-rose-950/40 border-b border-rose-500/30 text-white space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-rose-400">
                  <Flame className="w-4 h-4" />
                  <h3 className="font-bold text-xs font-mono uppercase tracking-wider">
                    Live Red Teaming Arena // Telemetry & Schedule
                  </h3>
                </div>
                <button 
                  onClick={() => setActiveProtocolPanel('none')} 
                  className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
                >
                  ✕ Close Panel
                </button>
              </div>
              <p className="text-xs text-slate-300 max-w-3xl">
                Live synchronous stress-testing sessions where elite penetration testers and security engineers audit autonomous agent supervisors against jailbreaks and prompt injection.
              </p>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                <div className="text-rose-400 font-bold">&gt; NEXT SESSION: Thursday 18:00 Beirut Time</div>
                <div className="text-slate-400 text-[11px]">Target: VAMS v3 FHIR Gateway & ALmouwateN PII Masks</div>
              </div>
            </div>
          )}

          {/* Messages Stream */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
            {channelMessages.map((msg) => (
              <div
                key={msg.id}
                className={`p-3.5 rounded-xl border transition-all ${
                  msg.isAiBot
                    ? 'bg-cyan-950/30 border-cyan-500/40 glow-cyan-sm'
                    : msg.sender.includes('You')
                    ? 'bg-slate-900/90 border-cyan-500/30 ml-4'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-[10px] ${
                      msg.isAiBot ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-cyan-400 border border-slate-700'
                    }`}>
                      {msg.avatar}
                    </div>
                    <span className="font-bold text-white">{msg.sender}</span>
                    <span className="text-[10px] text-slate-400 font-mono">({msg.role})</span>
                    {msg.badge && (
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold ${
                        msg.isAiBot ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-cyan-300'
                      }`}>
                        {msg.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">{msg.timestamp}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-8">
                  {msg.content}
                </p>
              </div>
            ))}

            {isBotResponding && (
              <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-center space-x-2 text-xs text-cyan-300 font-mono animate-pulse">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>@961Brain synthesizing RAG answer across enterprise knowledge nodes...</span>
              </div>
            )}
          </div>

          {/* Bottom Chat Input Form */}
          <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-900/60">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
              <input
                type="text"
                placeholder={`Message ${activeChannel.name} or type @961Brain <question>...`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-hidden"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors shrink-0"
                title="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-2 px-1">
              <span>Tip: Ask @961Brain for instant technical RAG answers</span>
              <span>Encrypted via 961AI Zero-Knowledge Bus</span>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
