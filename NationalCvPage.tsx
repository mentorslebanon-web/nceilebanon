import React, { useState } from 'react';
import { PageId, Guild } from '../types';
import { INDUSTRY_GUILDS } from '../data/ecosystemData';
import { 
  Terminal, 
  ShieldCheck, 
  Lock, 
  Key, 
  Code2, 
  Play, 
  ArrowLeft, 
  Copy, 
  Check, 
  Server, 
  Sparkles, 
  Cpu, 
  CheckCircle2,
  ExternalLink,
  Layers,
  Database
} from 'lucide-react';

interface GuildsDeveloperPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess: () => void;
}

export const GuildsDeveloperPage: React.FC<GuildsDeveloperPageProps> = ({
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess
}) => {
  const [activeTab, setActiveTab] = useState<'guilds' | 'developer'>('guilds');
  const [selectedSdk, setSelectedSdk] = useState<'python' | 'javascript'>('python');
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  
  // Playground State
  const [playgroundPrompt, setPlaygroundPrompt] = useState('Analyze loan default risk against BDL Circular 158 parameters for micro-retailer');
  const [playgroundModel, setPlaygroundModel] = useState('961-agent-supervisor-v2');
  const [isRunningPlayground, setIsRunningPlayground] = useState(false);
  const [playgroundResult, setPlaygroundResult] = useState<string | null>(null);

  const unifiedApiKey = "961_live_sk_846487332453_mena_fintech_secure_node";

  const handleCopyKey = () => {
    navigator.clipboard?.writeText(unifiedApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const pythonSnippet = `from z961ai import NetworkClient, AgentSupervisor

# Initialize unified client across multi-agent fabric
client = NetworkClient(api_key="${unifiedApiKey}")

# Connect to the FinTech Jargon-Tuned model
agent = client.agents.load(
    agent_id="mena-financial-risk-v2",
    sandbox_mode=True # Dry-run without draining production credits
)

response = agent.run(
    prompt="${playgroundPrompt}",
    temperature=0.2,
    grounding=["al-hakam-statutes", "marketpulse-index"]
)

print(response.output)
print(f"PII Status: {response.pii_masked} | Citations: {len(response.citations)}")`;

  const jsSnippet = `import { NetworkClient } from '@961ai/sdk';

// Unified API initialization for Node.js / Browser
const client = new NetworkClient({
  apiKey: "${unifiedApiKey}",
  cluster: "beirut-central"
});

async function executeAgent() {
  const response = await client.agents.run({
    agentId: "mena-financial-risk-v2",
    prompt: "${playgroundPrompt}",
    sandbox: true, // Dry-run mode
    stream: false
  });

  console.log("Supervisor Response:", response.output);
  console.log("Tokens consumed (Dry-Run): 0 credits");
}

executeAgent();`;

  const currentSnippet = selectedSdk === 'python' ? pythonSnippet : jsSnippet;

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(currentSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunPlayground = () => {
    setIsRunningPlayground(true);
    setPlaygroundResult(null);

    setTimeout(() => {
      setIsRunningPlayground(false);
      setPlaygroundResult(
        JSON.stringify({
          status: "SUCCESS (SANDBOX DRY-RUN)",
          supervisor: playgroundModel,
          groundingNodes: ["Al-Hakam Legal Database", "CapitalIssuesIQ Forex Feed", "Levant Data Cooperative"],
          complianceVerification: "PASSED: Basel III & BDL Circular 158/165 (Zero-PII Applied)",
          executionTrace: [
            { step: 1, agent: "TokenGatekeeper", latencyMs: 24, piiMasked: true },
            { step: 2, agent: "RAGHybridRetriever", latencyMs: 142, matches: 8 },
            { step: 3, agent: "SynthesizerNode", latencyMs: 280, factualScore: "99.2%" }
          ],
          inferenceCreditsBilled: 0.00,
          output: "Borrower risk categorized as MODERATE (Score: 68/100). Micro-retailer exhibits resilient local cash flow with export receivables. Recommended collateral structure aligns with Circular 158 reserve protections."
        }, null, 2)
      );
    }, 850);
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
            SECTIONS 04 & 05 // SPECIALIZED ACCESS & DEVELOPER POWER
          </div>
        </div>

        {/* Page Header */}
        <div className="pt-8 pb-6 space-y-3 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
            <Terminal className="w-3.5 h-3.5 text-cyan-600" />
            <span>SPECIALIZED ACCESS & BUILDER INFRASTRUCTURE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Industry Services Guilds & The Developer Nexus
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Governed micro-consortiums with pre-configured regulatory frameworks and federated learning, alongside low-level API keys and drop-in SDKs built for high-velocity software architects.
          </p>
        </div>

        {/* Module Switcher Tabs */}
        <div className="flex border-b border-slate-200 gap-6 mb-8 text-sm font-bold">
          <button
            onClick={() => setActiveTab('guilds')}
            className={`pb-3 flex items-center space-x-2 transition-all border-b-2 ${
              activeTab === 'guilds'
                ? 'border-cyan-600 text-cyan-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>4. Industry Services Guilds ("Get Access" Gateway)</span>
          </button>

          <button
            onClick={() => setActiveTab('developer')}
            className={`pb-3 flex items-center space-x-2 transition-all border-b-2 ${
              activeTab === 'developer'
                ? 'border-cyan-600 text-cyan-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>5. The Developer Nexus (APIs, SDKs & Playground)</span>
          </button>
        </div>

        {/* TAB 1: INDUSTRY SERVICES GUILDS */}
        {activeTab === 'guilds' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            {/* Value explainer banner */}
            <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  <Lock className="w-3 h-3" />
                  <span>GOVERNED DATA COOPERATIVES</span>
                </div>
                <h3 className="text-lg font-bold">
                  Moving Beyond General Networking into Governed Vertical Sandboxes
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Click the dedicated <strong>"Get Access"</strong> button on any Guild to initiate the institutional vetting process for exclusive Data Cooperatives (for secure federated learning) and pre-configured Regulatory Sandboxes (HIPAA, GDPR).
                </p>
              </div>

              <button
                id="guilds-page-get-access-hero"
                onClick={onOpenGetAccess}
                className="px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0 shadow-sm flex items-center space-x-2"
              >
                <Lock className="w-4 h-4 text-slate-950" />
                <span>Initiate "Get Access" Vetting</span>
              </button>
            </div>

            {/* Guilds Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {INDUSTRY_GUILDS.map((guild) => (
                <div
                  key={guild.id}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-cyan-400 transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-slate-100 text-slate-800 border border-slate-200">
                        {guild.sector}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200 font-bold">
                        {guild.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-slate-950">{guild.name}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {guild.description}
                      </p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                      <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Regulatory Framework</div>
                      <div className="font-semibold text-slate-800">{guild.regulatoryStandard}</div>
                      <div className="text-slate-500 text-[11px] pt-1">
                        <strong>Cooperative:</strong> {guild.dataCooperativeName}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">Sandbox Features & Tooling</div>
                      <div className="space-y-1">
                        {guild.sandboxFeatures.map((feat, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] font-mono text-slate-500">
                      <strong>{guild.membersCount}</strong> Verified Peers
                    </div>

                    <button
                      onClick={onOpenGetAccess}
                      className="px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-colors flex items-center space-x-1"
                    >
                      <span>Get Access</span>
                      <Lock className="w-3 h-3 text-cyan-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: THE DEVELOPER NEXUS */}
        {activeTab === 'developer' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            {/* Unified API Key Generator Strip */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <Key className="w-4 h-4 text-cyan-600" />
                    <h3 className="text-sm font-bold text-slate-900 uppercase font-mono">
                      Unified API Key (Single Token Multi-Model)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Access foundation models, RAG pipelines, and supervisor agent fabrics through a single unified bearer key.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-xl bg-white border border-slate-300 font-mono text-xs text-slate-800 truncate max-w-xs">
                    {unifiedApiKey}
                  </div>
                  <button
                    onClick={handleCopyKey}
                    className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-colors shrink-0 flex items-center space-x-1"
                  >
                    {copiedKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey ? 'Copied' : 'Copy Key'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* SDK Code Snippets & Drop-in Libraries */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Code Viewer */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedSdk('python')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-colors ${
                        selectedSdk === 'python' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Python SDK (pip install z961ai)
                    </button>
                    <button
                      onClick={() => setSelectedSdk('javascript')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-colors ${
                        selectedSdk === 'javascript' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      JavaScript / TS (npm i @961ai/sdk)
                    </button>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="text-xs text-slate-500 hover:text-slate-800 flex items-center space-x-1"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 font-mono text-xs overflow-x-auto leading-relaxed max-h-[380px]">
                  <pre>{currentSnippet}</pre>
                </div>
              </div>

              {/* Right: The Playground Environment */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center space-x-2">
                      <Play className="w-4 h-4 text-cyan-600 fill-cyan-600" />
                      <h3 className="text-sm font-bold text-slate-900">The "Playground" Sandbox</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      0 Credits Consumed (Dry-Run)
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Target Supervisor Agent Model:
                    </label>
                    <select
                      value={playgroundModel}
                      onChange={(e) => setPlaygroundModel(e.target.value)}
                      className="w-full text-xs font-mono px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 focus:outline-hidden"
                    >
                      <option value="961-agent-supervisor-v2">961-agent-supervisor-v2 (Multi-Agent Multi-RAG)</option>
                      <option value="al-hakam-legal-arabic-v1">al-hakam-legal-arabic-v1 (Jurisprudence Cross-Encoder)</option>
                      <option value="almouwaten-civic-pii-v3">almouwaten-civic-pii-v3 (Government Masked Sandbox)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Input Dry-Run Prompt:
                    </label>
                    <textarea
                      rows={3}
                      value={playgroundPrompt}
                      onChange={(e) => setPlaygroundPrompt(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-cyan-500 bg-white"
                    />
                  </div>

                  <button
                    onClick={handleRunPlayground}
                    disabled={isRunningPlayground}
                    className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-xs disabled:opacity-50"
                  >
                    {isRunningPlayground ? (
                      <>
                        <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
                        <span>Dry-running through sandboxed agent pipeline...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                        <span>Run Dry-Run Sandbox Call</span>
                      </>
                    )}
                  </button>

                  {playgroundResult && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Execution Telemetry Output:</span>
                      <div className="p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-[11px] overflow-x-auto max-h-48">
                        <pre>{playgroundResult}</pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
