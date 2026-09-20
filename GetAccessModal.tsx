import { Competency, DeploymentProject, LiveChannel, LiveMessage, Guild, StartupItem, NationalMilestone } from '../types';

export const ECOSYSTEM_METADATA = {
  orgName: "NCEI Lebanon",
  orgFullTitle: "National Council for Entrepreneurship & Innovation",
  networkName: "961AI Network",
  networkAlt: "z961aiNetwork",
  byline: "Home Business startups and entrepreneurs catalysts of the innovation ecosystem.",
  mainStatementOfValue: "With the introduction of the Neural Matcher, we have engineered one of the most sophisticated platforms in the MENA region to invigorate this ecosystem. Whether you are a scholar pushing the boundaries of science, a freelancer solving complex government challenges, or a guru looking to monetize your genius, 961AI Network is the engine for your success.",
  heroBadge: "NATIONAL INNOVATION INFRASTRUCTURE • MENA REGION",
  stats: [
    { label: "Active Startups & Ventures", value: "85+", change: "+34% YoY" },
    { label: "RAG & Multi-Agent Deployments", value: "24+", change: "Production Tier" },
    { label: "Vetted Guild Members", value: "1,420+", change: "Across 3 Tiers" },
    { label: "National Policy & CV Blueprints", value: "6 Major", change: "Gov & World Bank" },
  ]
};

export const CORE_COMPETENCIES: Competency[] = [
  {
    id: "ai-bizdev",
    title: "AI Business Development & Venture Scaling",
    subtitle: "Venture Architecture & Commercial Product Strategy",
    description: "Aligning early-stage AI products with enterprise market needs, transitioning founders from simple LLM wrappers to high-value, outcome-based AI models and custom agentic workflows.",
    tags: ["LLM Transition", "Enterprise GTM", "Agentic Workflows", "Monetization"],
    deliverables: [
      "Product-Market Fit validation for frontier AI models",
      "Unit-economics optimization for token consumption and GPU workloads",
      "Conversion of wrapper MVPs into defensible multi-tier IP architectures",
      "Enterprise procurement compliance and security readiness"
    ],
    impactMetric: "4.8x average ARR expansion post-transition"
  },
  {
    id: "multi-agent-rag",
    title: "Enterprise AI & Multi-Agent Architecture",
    subtitle: "Distributed Inference & Autonomous Supervisor Networks",
    description: "Expert design of Retrieval-Augmented Generation (RAG) pipelines, n8n workflow automations, vector database implementations, and function-calling multi-agent networks.",
    tags: ["Multi-Agent", "RAG Pipelines", "n8n Workflows", "Vector DBs", "Function Calling"],
    deliverables: [
      "Custom LangChain, LlamaIndex, and native agent supervisors",
      "Low-latency Milvus, Pinecone, and pgvector clustering",
      "Autonomous tool-calling frameworks with validation gates",
      "Enterprise fallback topologies and semantic cache layers"
    ],
    impactMetric: "99.4% factual precision across enterprise corpora"
  },
  {
    id: "ecosystem-partnerships",
    title: "Ecosystem Building & Strategic Partnerships",
    subtitle: "Institutional Alliances & Capital syndication",
    description: "Direct access to regional entrepreneurship networks, government institutions, cross-border investment channels, and tech incubation programs.",
    tags: ["GovTech Alliances", "Cross-Border VC", "MENA Dealflow", "Incubators"],
    deliverables: [
      "Bilateral bridges to GCC and European sovereign tech funds",
      "Institutional tech sandbox integration with regulatory bodies",
      "Syndicated angel dealrooms and co-investment frameworks",
      "Regional accelerator curricula and demo-day staging"
    ],
    impactMetric: "$18M+ leveraged ecosystem co-investment pool"
  },
  {
    id: "gtm-brand-authority",
    title: "Go-To-Market (GTM) & Brand Authority",
    subtitle: "High-Converting Growth Infrastructure & Digital Dominance",
    description: "Architecting digital presence, SEO infrastructure, news CMS deployments, and high-converting growth funnels for emerging tech startups.",
    tags: ["Search Authority", "Growth Funnels", "Dynamic CMS", "Technical PR"],
    deliverables: [
      "High-velocity programatic SEO architectures for deep-tech niches",
      "Automated news engine and editorial publication hubs",
      "WhatsApp Business API funnel automation for MENA customer capture",
      "Thought leadership positioning and international tier-1 coverage"
    ],
    impactMetric: "320% organic inbound reach expansion"
  },
  {
    id: "coaching-talent",
    title: "Coaching & Talent Development",
    subtitle: "Executive Transformation & Engineering Leadership",
    description: "Executive coaching, mindset alignment, performance optimization, and mentoring engineering leads into strategic startup CEOs.",
    tags: ["Founder Mindset", "Engineering to CEO", "Performance Ops", "Talent Upskilling"],
    deliverables: [
      "1-on-1 executive performance and capital negotiation mastery",
      "Engineering-to-CEO psychological alignment & delegation systems",
      "Publication-as-authority curriculum for founder personal brands",
      "Talent sourcing pods for AI researchers and ML engineers"
    ],
    impactMetric: "120+ senior technical leaders coached"
  }
];

export const DEPLOYMENT_PROJECTS: DeploymentProject[] = [
  // 1. Technical AI Architecture & App Development
  {
    id: "ballish-agents",
    category: "tech-ai",
    categoryLabel: "Technical AI Architecture",
    subcategory: "Deep Multi-Agent Orchestration & Knowledge Systems",
    title: "Ballish & Enterprise Agent Workspace",
    description: "Complex supervisor networks, executable intelligence layers, and unified workspace environments coordinating autonomous multi-agent task resolution.",
    technologies: ["Supervisor Networks", "Executable Layers", "Agent Workspaces", "Context Bus"],
    metrics: "Sub-500ms multi-agent coordination loop",
    status: "Enterprise Active",
    badgeColor: "cyan"
  },
  {
    id: "company-brain",
    category: "tech-ai",
    categoryLabel: "Technical AI Architecture",
    subcategory: "Deep Multi-Agent Orchestration & Knowledge Systems",
    title: "Company Brain & Brain Builder",
    description: "Institutional memory synthesis platform extracting unstructured operational data, emails, and documentation into unified queryable organizational cognition.",
    technologies: ["GraphRAG", "Knowledge Graphs", "Incremental Vectorization", "Semantic Routing"],
    metrics: "100k+ enterprise records indexed per node",
    status: "Enterprise Active",
    badgeColor: "cyan"
  },
  {
    id: "al-hakam-legal",
    category: "tech-ai",
    categoryLabel: "Technical AI Architecture",
    subcategory: "AI-Native RAG & Domain-Specific Search Engines",
    title: "Al-Hakam Legal Knowledge Base",
    description: "Specialized Retrieval-Augmented Generation engine and hybrid search model for MENA civil and commercial legal codes with bilingual Arabic/English citations.",
    technologies: ["Hybrid Sparse/Dense Search", "Arabic Legal NLP", "Citation Grounding", "Cross-Encoder"],
    metrics: "100% verifiable statutory references",
    status: "Live & Scaled",
    badgeColor: "cyan"
  },
  {
    id: "nexuslm",
    category: "tech-ai",
    categoryLabel: "Technical AI Architecture",
    subcategory: "AI-Native RAG & Domain-Specific Search Engines",
    title: "NexusLM & Research Notebook Workspaces",
    description: "Domain-specific search engine with optical OCR processing tools for legal dossiers, academic manuscripts, and macroeconomic telemetry.",
    technologies: ["OCR Processing", "Domain Embeddings", "Notebook Workspaces", "Dynamic Re-ranking"],
    metrics: "50+ pages/sec OCR processing throughput",
    status: "Live & Scaled",
    badgeColor: "cyan"
  },
  {
    id: "risk-economic-intel",
    category: "tech-ai",
    categoryLabel: "Technical AI Architecture",
    subcategory: "AI-Native RAG & Domain-Specific Search Engines",
    title: "Risk & Economic Intelligence Workspace",
    description: "Real-time macroeconomic risk indexation with multi-vector scenario generation for Lebanese and MENA banking and commerce stability assessments.",
    technologies: ["Time-Series Vectors", "Predictive Risk Modeling", "Financial Data Pipelines"],
    metrics: "Daily macro stress testing indices",
    status: "Regional Deployment",
    badgeColor: "cyan"
  },
  {
    id: "saas-deployment-hub",
    category: "tech-ai",
    categoryLabel: "Technical AI Architecture",
    subcategory: "Automated Deployment & Workflow Orchestration",
    title: "SaaS Deployment Hub & Studio Launchpad",
    description: "Automated low-code SaaS provisioning tools, code generation hubs, and cross-platform publishing suites enabling rapid concept-to-production launches.",
    technologies: ["Container Automation", "Low-Code Generators", "CI/CD Micro-Orchestrators"],
    metrics: "48-hour typical MVP deployment cycle",
    status: "Live & Scaled",
    badgeColor: "cyan"
  },
  {
    id: "social-content-suite",
    category: "tech-ai",
    categoryLabel: "Technical AI Architecture",
    subcategory: "Automated Deployment & Workflow Orchestration",
    title: "Automated Social Content & Digital Identity Suite",
    description: "Cross-platform publishing engine and workflow orchestrator aligning brand voices across channels with automated compliance verification.",
    technologies: ["Multi-Channel API", "Content Generation Engine", "Digital Identity Vault"],
    metrics: "10x throughput in branded assets",
    status: "Live & Scaled",
    badgeColor: "cyan"
  },
  {
    id: "startup-portal",
    category: "tech-ai",
    categoryLabel: "Technical AI Architecture",
    subcategory: "Developers & Startup Portals",
    title: "Startup Portal & Telemetry Hub",
    description: "Frontier-model powered developer workspaces, telemetry dashboards, and research indexing portals for high-velocity venture engineering teams.",
    technologies: ["Telemetry Dashboards", "Frontier LLM Routing", "Research Indexing API"],
    metrics: "Unified dev telemetry for 80+ builders",
    status: "Enterprise Active",
    badgeColor: "cyan"
  },

  // 2. Business Development, Commercialization & Venture Ecosystems
  {
    id: "capitalissues-iq",
    category: "biz-dev",
    categoryLabel: "Business Development & Ventures",
    subcategory: "Macroeconomic & Financial Intelligence Terminals",
    title: "CapitalIssuesIQ & MarketPulse",
    description: "Commercialized real-time financial tracking, market index feeds, and risk analysis platforms deployed for commercial banks and corporate treasuries.",
    technologies: ["Streaming Market Feeds", "Forex Discrepancy Monitors", "Treasury Risk Analytics"],
    metrics: "$240M+ simulated transaction analytics",
    status: "Commercialized",
    badgeColor: "amber"
  },
  {
    id: "combinator-961",
    category: "biz-dev",
    categoryLabel: "Business Development & Ventures",
    subcategory: "Venture Incubation & Dealroom Platforms",
    title: "961 Combinator & z961combinator",
    description: "Ecosystem incubation hubs featuring high-density community dealrooms, curated hacker news clones, and gamified founder pitch accelerators.",
    technologies: ["Dealroom Engine", "Interactive Pitch Scoring", "Hacker News Clone CMS"],
    metrics: "350+ startup pitches evaluated",
    status: "Live & Scaled",
    badgeColor: "amber"
  },
  {
    id: "zrolodex-dealroom",
    category: "biz-dev",
    categoryLabel: "Business Development & Ventures",
    subcategory: "Venture Incubation & Dealroom Platforms",
    title: "Zrolodex & MENA Investment Directory",
    description: "Global startup and investor indexation infrastructure connecting angel syndicates, sovereign capital, and MENA founders with deep algorithmic matchmaking.",
    technologies: ["CRM Graph Database", "Investor Syndication Pipelines", "Entity Resolution"],
    metrics: "1,200+ verified regional investor profiles",
    status: "Live & Scaled",
    badgeColor: "amber"
  },
  {
    id: "rawcoach-ai",
    category: "biz-dev",
    categoryLabel: "Business Development & Ventures",
    subcategory: "Specialized AI Coaching & Talent Upskilling",
    title: "RAWCOACH.AI & Resume Builder",
    description: "Gen Z-inspired executive coaching, leadership growth portals, and automated resume optimization tools engineered for the Arab digital economy.",
    technologies: ["Voice & Text Coaching Bots", "Automated ATS Resume Parsing", "Skill Gap Mapping"],
    metrics: "14,000+ optimized profiles & resumes",
    status: "Commercialized",
    badgeColor: "amber"
  },
  {
    id: "alwarraq-webfx",
    category: "biz-dev",
    categoryLabel: "Business Development & Ventures",
    subcategory: "Digital Publishing & Media Authority",
    title: "Alwarraq News & WebFX Agency Toolkit",
    description: "High-fidelity, dynamic news generation engines and digital agency toolkits powering high-volume authoritative publications across technology and culture.",
    technologies: ["Dynamic News Pipeline", "Media Generation Workflow", "Digital Agency Engine"],
    metrics: "1.2M+ monthly pageviews generated",
    status: "Commercialized",
    badgeColor: "amber"
  },

  // 3. Vertical Marketplaces & Consumer Tech Advisories
  {
    id: "artisan-ecommerce",
    category: "marketplaces",
    categoryLabel: "Vertical Marketplaces",
    subcategory: "Artisan E-Commerce & Cyberpunk Platforms",
    title: "Pickle & Pepper Market & Avant-Garde Commerce",
    description: "End-to-end B2C and B2B artisanal marketplaces with bespoke administrative workflows, dynamic inventory syncing, and automated dropshipping logic.",
    technologies: ["Custom Headless Checkout", "Cross-Border Settlement", "Dropship Dispatch Logic"],
    metrics: "50+ artisan vendors integrated",
    status: "Live & Scaled",
    badgeColor: "cyan"
  },
  {
    id: "gaming-healthcare",
    category: "marketplaces",
    categoryLabel: "Vertical Marketplaces",
    subcategory: "Gaming, Esports & Healthcare Solutions",
    title: "961Med, FC Pulse & Leban Esports",
    description: "Virtual direct-pay clinic networks paired with high-performance gaming loyalty hubs featuring AI talent scouting and esports tournament management.",
    technologies: ["Direct-Pay Telehealth", "AI Esports Scouting", "Gamified Loyalty Smart Ledger"],
    metrics: "4,500+ active gamers & patient consultations",
    status: "Live & Scaled",
    badgeColor: "cyan"
  },
  {
    id: "b2b-lead-intel",
    category: "marketplaces",
    categoryLabel: "Vertical Marketplaces",
    subcategory: "B2B Growth & Lead Intelligence Services",
    title: "Point to Business Services & Lebanon Airbnb Platform",
    description: "Structured B2B email lead intelligence databases and curated regional hospitality showcases accelerating commercial acquisition.",
    technologies: ["B2B Data Scraping & Verification", "Hospitality Booking Showcases", "Email Enrichment"],
    metrics: "250k+ verified commercial leads",
    status: "Commercialized",
    badgeColor: "cyan"
  }
];

export const LIVE_CHANNELS: LiveChannel[] = [
  {
    id: "public-square",
    name: "#public-square",
    tier: "public",
    tierLabel: "Tier 1: Public Square",
    description: "Open forum for casual networking, MENA tech news aggregation, ecosystem questions, and public community support.",
    activeUsers: 342,
    unreadCount: 4,
    isEncrypted: false
  },
  {
    id: "scholars-lab",
    name: "#scholars-lab",
    tier: "scholar",
    tierLabel: "Tier 2: The Scholar's Lab",
    description: "Collaborative research zone: clean dataset exchanges, daily ArXiv ML paper breakdowns, and co-developed open-source prompt libraries.",
    activeUsers: 88,
    unreadCount: 2,
    isEncrypted: false
  },
  {
    id: "gurus-penthouse",
    name: "#gurus-penthouse",
    tier: "penthouse",
    tierLabel: "Tier 3: The Guru's Penthouse",
    description: "Exclusive encrypted channel where premium members access high-frequency 'Alpha' market signals, 5-figure bounties, and elite consultation suites.",
    activeUsers: 24,
    unreadCount: 0,
    isEncrypted: true
  },
  {
    id: "enterprise-war-room",
    name: "#enterprise-war-room",
    tier: "penthouse",
    tierLabel: "Tier 3: Enterprise War Rooms",
    description: "High-security strategic chambers for government task force leaders, institutional bank heads, and venture partners executing live Red Teaming and private deals.",
    activeUsers: 12,
    unreadCount: 0,
    isEncrypted: true
  }
];

export const INITIAL_MESSAGES: Record<string, LiveMessage[]> = {
  "public-square": [
    {
      id: "m1",
      channelId: "public-square",
      sender: "Neural Concierge",
      role: "System AI Bot",
      avatar: "NC",
      timestamp: "10:41 AM",
      content: "Welcome to NCEILEBANON Live Nexus! I am your Neural Concierge. State your objective (Scholar, Freelancer, Founder, Enterprise) to receive instant channel routing and compute access.",
      badge: "Native AI",
      isAiBot: true
    },
    {
      id: "m2",
      channelId: "public-square",
      sender: "Tarek Mansour",
      role: "Hardware Founder",
      avatar: "TM",
      timestamp: "10:44 AM",
      content: "Has anyone benchmarked the local low-latency RAG pipeline for Arabic legal codices compared to standard OpenAI models?",
      badge: "Founder"
    },
    {
      id: "m3",
      channelId: "public-square",
      sender: "@961Brain",
      role: "Autonomous RAG Bot",
      avatar: "9B",
      timestamp: "10:45 AM",
      content: "@Tarek: Al-Hakam Legal Knowledge Base achieves 99.4% citation accuracy by pairing custom Arabic stemmers with hybrid dense/sparse vector search, outperforming generic LLMs on Lebanese commerce laws by 41%.",
      badge: "RAG Oracle",
      isAiBot: true
    }
  ],
  "scholars-lab": [
    {
      id: "m4",
      channelId: "scholars-lab",
      sender: "Dr. Maya Khoury",
      role: "NLP Research Fellow",
      avatar: "MK",
      timestamp: "09:30 AM",
      content: "Just uploaded the cleaned Levantine Arabic dialect dataset (142k verified prompt-response pairs). Check the pinned Data Cooperative link.",
      badge: "Scholar"
    },
    {
      id: "m5",
      channelId: "scholars-lab",
      sender: "@961Brain",
      role: "Autonomous RAG Bot",
      avatar: "9B",
      timestamp: "09:32 AM",
      content: "Dataset ingested into sandbox cache. PII scan complete: 0 leaks detected. Available for federated fine-tuning in Guilds sandbox.",
      badge: "RAG Oracle",
      isAiBot: true
    }
  ],
  "gurus-penthouse": [
    {
      id: "m6",
      channelId: "gurus-penthouse",
      sender: "Ziad Haddad",
      role: "Ecosystem Partner",
      avatar: "ZH",
      timestamp: "08:15 AM",
      content: "[ALPHA SIGNAL] Regional sovereign wealth fund just opened a $15M fast-track allocation for multi-agent supply chain optimization. Reviewing RFP in private escrow suite.",
      badge: "Tier 3 Vetted"
    },
    {
      id: "m7",
      channelId: "gurus-penthouse",
      sender: "Karim B.",
      role: "Enterprise Architect",
      avatar: "KB",
      timestamp: "08:22 AM",
      content: "Deploying the Red Teaming audit for the VAMS v3 architecture now. Target throughput: 15,000 QR scans/minute without latency degradation.",
      badge: "Tier 3 Vetted"
    }
  ],
  "enterprise-war-room": [
    {
      id: "m8",
      channelId: "enterprise-war-room",
      sender: "Institutional Lead",
      role: "GovTech Director",
      avatar: "IL",
      timestamp: "07:50 AM",
      content: "Reviewing the National SME Revival Strategy models. The automated inventory forecasting metrics have been approved for Ministry presentation.",
      badge: "GovTech Special"
    }
  ]
};

export const INDUSTRY_GUILDS: Guild[] = [
  {
    id: "fintech-guild",
    name: "FinTech & Banking Intelligence Guild",
    sector: "FinTech",
    description: "Exclusive micro-consortium sharing macroeconomic index feeds, risk engines, and banking automation tools with strict banking compliance.",
    regulatoryStandard: "Basel III & BDL Circular 158/165 Frameworks",
    dataCooperativeName: "Levant Financial Data Cooperative",
    sandboxFeatures: ["Synthetic Transaction Generator", "Anti-Money Laundering Anonymizer", "n8n Banking Webhooks", "Zero-PII Gateway"],
    membersCount: 420,
    status: "Active Gated Sandbox"
  },
  {
    id: "healthcare-guild",
    name: "Digital Health & Clinical AI Guild",
    sector: "Healthcare",
    description: "Governed clinical innovation sandbox linking virtual clinic networks, diagnostic assistants, and emergency dispatch systems.",
    regulatoryStandard: "HIPAA Compliant & MoPH Hospital Standards",
    dataCooperativeName: "MedData Federated Cooperative",
    sandboxFeatures: ["Synthetic Patient Records (FHIR)", "DICOM Image Masking Pipeline", "Direct-Pay Telehealth Ledger", "Clinical Protocol Validator"],
    membersCount: 310,
    status: "Active Gated Sandbox"
  },
  {
    id: "legaltech-guild",
    name: "LegalTech & Regulatory Policy Guild",
    sector: "Legal Tech",
    description: "High-level consortium connecting law firms, ministries, and enterprise legal departments with verified bilingual statutory databases.",
    regulatoryStandard: "GDPR, Arab League Legal Harmonization & ISO 27001",
    dataCooperativeName: "Al-Hakam Jurisprudence Cooperative",
    sandboxFeatures: ["Bilingual Contract Synthesizer", "Court Judgment Semantic Search", "Redline Risk Classifier", "Statute Cross-Referencer"],
    membersCount: 285,
    status: "Active Gated Sandbox"
  }
];

export const TECHNICAL_VALUES = {
  organization: "z961aiNetwork",
  coreValues: [
    {
      title: "AI Integrations & Automation",
      description: "Spearheading custom AI agent deployment, RAG pipelines, n8n automated workflows, LangChain integrations, and GPT-powered business tools.",
      icon: "Cpu"
    },
    {
      title: "Social Media & Growth Architecture",
      description: "Directing end-to-end social media strategy, brand monitoring, paid campaigns, and WhatsApp Business developer deployments.",
      icon: "Share2"
    },
    {
      title: "Founder & Executive Coaching",
      description: "Delivering structured 1-on-1 and group coaching focused on startup monetization, founder performance, leadership identity, and publication-as-authority strategies.",
      icon: "Users"
    },
    {
      title: "Operational Leadership",
      description: "Architecting enterprise AI capacity models, managing distributed AI engineering pods, and executing advanced technical masterclasses.",
      icon: "ShieldCheck"
    }
  ],
  alkhawarizmiLead: {
    role: "AI Development Lead",
    company: "AlKhawarizmi Solutions",
    timeline: "Sep 2025 – Present",
    highlights: [
      {
        title: "Enterprise RAG Systems",
        detail: "Architected dynamic, real-time vector databases and knowledge bases grounding AI capabilities inside company-specific unstructured data."
      },
      {
        title: "Secure AI Sandboxes (ALmouwateN)",
        detail: "Engineered isolated, containerized AI environments featuring PII masking and controlled execution for civic/government data interactions."
      },
      {
        title: "Autonomous Agent Networks",
        detail: "Built specialized multi-agent systems including aicademy.online (AI scholar community) and matchprenai.online (freelancer matchmaking platform)."
      },
      {
        title: "Fintech & Banking Automation",
        detail: "Deployed n8n and LangChain API workflows for data analysis and financial simulations across the regional fintech and banking sectors."
      }
    ]
  }
};

export const NATIONAL_CV: NationalMilestone[] = [
  {
    id: "vams-system",
    title: "National COVID-19 Emergency Task Force",
    entity: "Rafic Hariri University Hospital & Ministry of Public Health",
    date: "2020 – 2022",
    scope: "National Critical Infrastructure",
    description: "Built the Vaccination Management Information System (VAMS) for Rafic Hariri University Hospital, incorporating QR patient tracking and PCR data systems.",
    keyOutputs: [
      "End-to-end Vaccination Management Information System (VAMS)",
      "High-throughput QR patient verification at national triage centers",
      "Automated PCR lab result syndication and digital vaccination certificate issuance",
      "Zero-downtime server scaling during emergency national surges"
    ],
    impactMetric: "Over 1.8M verified QR vaccinations and tests processed"
  },
  {
    id: "digitization-blueprints",
    title: "Digitization & Policy Blueprints",
    entity: "Ministry of State for Administrative Development (OMSAR) & World Bank",
    date: "2022 – 2024",
    scope: "Public Sector Modernization",
    description: "Submitted national digitization proposals to the Ministry of State for Administrative Development and the World Bank.",
    keyOutputs: [
      "National Digital Identity & One-Stop Civic Service Blueprint",
      "Open Government Data interoperability standards across Lebanese ministries",
      "World Bank technical framework for judicial and civil registry digitization",
      "Cloud sovereignty and public sector cryptographic security recommendations"
    ],
    impactMetric: "Formally submitted to OMSAR & World Bank taskforces"
  },
  {
    id: "economic-recovery",
    title: "National Economic Recovery & SME Revival Strategy",
    entity: "Lebanese Industrial & Commercial Taskforces",
    date: "2023 – Present",
    scope: "Macroeconomic Restructuring",
    description: "Drafted the Lebanon SME Revival Strategy and post-COVID industrial restructuring models.",
    keyOutputs: [
      "Lebanon SME Revival Strategy with export-focused digital acceleration corridors",
      "Post-COVID industrial restructuring models for local agro-food and manufacturing",
      "Digital remittance and cross-border payment integration guidelines",
      "Alternative credit-scoring framework for micro-enterprises leveraging AI telemetry"
    ],
    impactMetric: "Adopted in regional SME rehabilitation pilot zones"
  }
];

export const STARTUPS_MANAGED: StartupItem[] = [
  {
    id: "the-961ai-network",
    name: "The 961aiNetwork",
    domain: "961ai.network",
    role: "Founder",
    timeline: "Oct 2024 – Present",
    description: "Established Lebanon's premier AI startup hub and accelerator ecosystem. Directing the AI Academy (offering hands-on instruction in ML, NLP, computer vision, and AI ethics), active founder mentorship programs, and a regional network for AI researchers and entrepreneurs.",
    focusAreas: ["AI Accelerator", "Founder Mentorship", "AI Academy", "Research Hub"],
    metrics: "85+ mentored founders • 1,200+ trained in AI Academy",
    url: "#"
  },
  {
    id: "zrolodex",
    name: "zrolodex.live",
    domain: "zrolodex.live",
    role: "Proprietary Platform",
    timeline: "2024 – Present",
    description: "Smart networking and relationship-management platform combining CRM capabilities with digital rolodex tracking for founders and business executives.",
    focusAreas: ["Smart CRM", "Executive Rolodex", "AI Relationship Intelligence", "Deal Sourcing"],
    metrics: "2,400+ active executive relationship graphs",
    url: "https://zrolodex.live"
  },
  {
    id: "zappcademy",
    name: "zappcademy.xyz",
    domain: "zappcademy.xyz",
    role: "Educational Venture",
    timeline: "2024 – Present",
    description: "Gamified digital academy delivering micro-courses in AI integration, social media growth, and tech entrepreneurship tailored for the Arab digital economy.",
    focusAreas: ["Gamified Learning", "Micro-Credentials", "Arab Digital Economy", "No-Code AI"],
    metrics: "8,500+ completed micro-lessons",
    url: "https://zappcademy.xyz"
  },
  {
    id: "logistics-iq",
    name: "LogisticsIQ Supply",
    domain: "logisticsiq.supply",
    role: "B2B Enterprise Venture",
    timeline: "2024 – Present",
    description: "AI-driven supply chain intelligence platform providing demand forecasting, vendor analytics, and inventory optimization for regional SMEs.",
    focusAreas: ["Demand Forecasting", "Vendor Analytics", "Inventory Optimization", "SME Logistics"],
    metrics: "$12M+ managed inventory tracked via predictive models",
    url: "#"
  }
];
