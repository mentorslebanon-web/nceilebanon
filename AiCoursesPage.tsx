/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ToolingCategory {
  category: string;
  leadingTools: string;
  coreFunctionality: string;
  primaryUseCase: string;
}

export interface CostDepreciationItem {
  costCategory: string;
  adjustedAmount: string;
  baselineAmount: string;
  change: string;
  changePercent: number;
  driver: string;
}

export interface StartupCaseStudy {
  id: string;
  name: string;
  founders: string;
  foundedYear: string;
  headline: string;
  corporateStructure: {
    title: string;
    description: string;
  }[];
  gccExpansionStrategy: {
    title: string;
    description: string;
  }[];
  financialInfrastructure: {
    title: string;
    description: string;
  }[];
  flowchart: {
    step: string;
    label: string;
    subtext: string;
  }[];
}

export interface PolicyPaper {
  id: string;
  title: string;
  subtitle: string;
  publisher: string;
  registryId: string;
  date: string;
  issue: string;
  readTime: string;
  abstract: string;
  badge: string;
  tags: string[];
  keyMetrics: { label: string; value: string; subtext?: string }[];
}

export const AI_COMPLIANCE_TOOLING: ToolingCategory[] = [
  {
    category: 'Enterprise AI Governance Platforms',
    leadingTools: 'Credo AI, IBM watsonx.governance, Holistic AI',
    coreFunctionality: 'End-to-end model inventory, risk mapping against EU AI Act/NIST, automated documentation, bias tracking.',
    primaryUseCase: 'Enterprise procurement, board oversight, risk classification.'
  },
  {
    category: 'Runtime Control & Agent Gateways',
    leadingTools: 'Speakeasy, Runlayer, Obot Enterprise MCP Gateway',
    coreFunctionality: 'Inline traffic monitoring, dynamic policy enforcement, session isolation, and Model Context Protocol (MCP) tool-access controls.',
    primaryUseCase: 'Preventing data exfiltration, controlling autonomous agents, stopping shadow AI.'
  },
  {
    category: 'AI-Powered GRC Automation',
    leadingTools: 'Centraleyes, Vanta, 4CRisk.ai',
    coreFunctionality: 'Continuous compliance monitoring, automated evidence collection, control mapping, ISO 42001 readiness.',
    primaryUseCase: 'Scaling audit readiness without adding legal/GRC headcount.'
  },
  {
    category: 'Regulatory Intelligence & Tracking',
    leadingTools: 'Saidot, Trail, Compliance.ai',
    coreFunctionality: 'Horizon scanning, deterministic risk classification, mapping codebases to evolving international laws.',
    primaryUseCase: 'Keeping continuous delivery pipelines compliant with shifting legal texts.'
  }
];

export const RUNWAY_DEPRECIATION_DATA: CostDepreciationItem[] = [
  {
    costCategory: 'Logistics & War Risk Freight',
    baselineAmount: '$200,000',
    adjustedAmount: '$300,000',
    change: '+50.0%',
    changePercent: 50.0,
    driver: 'Red Sea supply bottlenecks, war-risk marine insurance, flight rerouting surcharges.'
  },
  {
    costCategory: 'Energy & Power Tariffs',
    baselineAmount: '$120,000',
    adjustedAmount: '$160,000',
    change: '+33.3%',
    changePercent: 33.3,
    driver: 'Grid blackouts, heavy reliance on diesel fuel generators, solar battery maintenance.'
  },
  {
    costCategory: 'Raw Materials & Hardware',
    baselineAmount: '$250,000',
    adjustedAmount: '$325,000',
    change: '+30.0%',
    changePercent: 30.0,
    driver: 'Customs delays, border import clearance surcharges, electronic component rationing.'
  },
  {
    costCategory: 'Cloud & Cybersecurity',
    baselineAmount: '$80,000',
    adjustedAmount: '$95,000',
    change: '+18.8%',
    changePercent: 18.8,
    driver: 'State-sponsored DDoS defense, multi-region failover, sovereign cloud data replicas.'
  },
  {
    costCategory: 'Engineering Payroll',
    baselineAmount: '$350,000',
    adjustedAmount: '$350,000',
    change: '0.0%',
    changePercent: 0.0,
    driver: 'Maintained via fresh USD pegging, Employer of Record (EoR) contracts, offshore talent arbitrage.'
  }
];

export const POLICY_PAPERS_CATALOG: PolicyPaper[] = [
  {
    id: 'ai-compliance-middle-east',
    title: "Navigating the Algorithmic Frontier: The Imperative for AI Compliance in the Middle East and Lebanon's Ecosystem",
    subtitle: 'Strategic Analysis of Global AI Mandates (EU AI Act, NIST RMF, ISO 42001, Law 81/2018) & The "Trust Arbitrage" Moat for Lebanese Founders',
    publisher: 'NCEI Lebanon & z961AI Regulatory Intelligence Unit',
    registryId: 'NCEI-REG-2026-POL-01',
    date: 'September 2026',
    issue: 'Strategic Dossier // Vol. IV',
    readTime: '12 min read',
    badge: 'AI REGULATORY GOVERNANCE',
    tags: ['EU AI Act', 'Law 81/2018', 'NIST AI RMF', 'ISO/IEC 42001', 'Trust Arbitrage', 'Model Context Protocol (MCP)'],
    abstract: 'The explosion of enterprise Artificial Intelligence (AI)—spanning Large Language Models (LLMs), agentic workflows, and predictive analytics—has altered the corporate risk landscape. Operating without systematic oversight introduces grave threats: algorithmic bias, severe data privacy leaks, shadow AI deployment, and existential regulatory non-compliance. This paper presents how Lebanese startups can transform compliance from an administrative burden into a competitive "Trust Arbitrage" moat to rapidly win GCC and Western enterprise contracts.',
    keyMetrics: [
      { label: 'Core Legal Mandate', value: 'Law 81/2018', subtext: 'Electronic Transactions & Data Privacy' },
      { label: 'Target Market Standards', value: 'EU AI Act & ISO 42001', subtext: 'Prerequisite for GCC / Global Sales' },
      { label: 'Strategic Play', value: 'Trust Arbitrage', subtext: 'Compliance-by-Design as a Sales Weapon' },
      { label: 'Audit Velocity', value: '4x Faster', subtext: 'Accelerated Enterprise Vendor Procurement' }
    ]
  },
  {
    id: 'lebanon-ecosystem-investment-risk',
    title: 'Lebanon Ecosystem INVESTMENT RISK HIGHLIGHTS',
    subtitle: 'Impacts from the Ongoing Middle East Conflict, on MENA Startups: Lebanon Ecosystem Case Study (2026)',
    publisher: 'NceiLebanon reg2220 Beirut Lebanon - z961AI Network Intelligence Service',
    registryId: 'NCEI-REG-2220-RISK-05',
    date: 'September 18th, 2026',
    issue: 'Issue 5/2026',
    readTime: '16 min read',
    badge: 'VENTURE INTELLIGENCE SERVICE',
    tags: ['Venture Capital', 'Macroeconomic Risk', 'Runway Depreciation', 'Beirut StartupBlink #341', 'Offshore Playbook', 'Anghami', 'Toters'],
    abstract: 'A standard $1.0M annual baseline budget experiences a 23.0% post-escalation cost expansion, reducing overall startup runway by approximately 2.8 months. Despite regional conflict and banking insolvency, Beirut climbed 36 places to 341st globally in the 2026 StartupBlink Index (+46.3% YoY). This paper details the structural operating playbooks of Lebanese founders, complete offshore dollarization stacks, diaspora angel syndicates, and detailed comparative case studies of Anghami and Toters.',
    keyMetrics: [
      { label: 'Baseline Budget Drag', value: '+23.0%', subtext: 'Post-escalation operational cost surge' },
      { label: 'Runway Reduction', value: '-2.8 mo', subtext: 'Average contraction on $1.0M budget' },
      { label: 'Beirut Global Rank', value: '#341', subtext: 'Climbed +36 places in 2026 (+46.3% YoY)' },
      { label: 'Active Tech Sector', value: '$486.7M', subtext: 'Across ~125 resilient operating firms' }
    ]
  }
];

export const SWOT_DATA = {
  strengths: [
    { title: 'Hyper-Resilient, Multilingual Talent', desc: 'Highly skilled software engineering and product talent fluent in Arabic, English, and French, accustomed to operating under extreme uncertainty.' },
    { title: 'Cost Arbitrage', desc: 'Developing products in Lebanon using local remote teams provides a massive engineering cost advantage compared to Riyadh, Dubai, or Western hubs.' },
    { title: 'Global Diaspora Backing', desc: 'Over 90% of venture capital flowing into Lebanese-founded startups originates from the global diaspora, generating over $7 billion annually in remittances and informal angel checks.' }
  ],
  weaknesses: [
    { title: 'Infrastructure Deficits', desc: 'Startups must allocate significant operational budgets (~15-25%) strictly for redundant internet, generator fuel, and solar infrastructure.' },
    { title: 'Bankrupt Domestic Banking System', desc: 'Local bank lending is nonexistent; central bank funding programs (like historical Circular 331) are dead.' },
    { title: 'Accelerated Brain Drain', desc: 'Over 300,000 skilled workers have emigrated since 2019, making mid-to-senior talent retention a constant battle.' }
  ],
  opportunities: [
    { title: 'FinTech & Remittance Surge', desc: 'Only 23% of adults hold formal bank accounts; BDL Basic Circular No. 1 (2026) formalized e-payment service providers and Web3 rails.' },
    { title: 'GCC Nearshoring Tech Hub', desc: 'Position Lebanon as the primary back-office, design, and software R&D engine for capital-rich Saudi and UAE tech scaleups.' },
    { title: 'Crisis-Tested IP Export', desc: 'Exporting specialized software, logistics operating systems, and remote labor platforms built under harsh conditions.' }
  ],
  threats: [
    { title: 'Regional Conflict Escalation', desc: 'Kinetic airstrikes risking physical telecom landing stations, power grids, and airport logistics.' },
    { title: 'International Isolation', desc: 'Total paralysis of sovereign political reforms blocking international aid (IMF) and institutional foreign capital.' },
    { title: 'De-risking by Foreign Partners', desc: 'Global enterprise clients canceling B2B software contracts due to country risk and business continuity concerns.' }
  ]
};

export const VC_DISLOCATION_PHASES = [
  {
    phase: '1. FREEZE',
    period: 'Q1-Q2 2026',
    description: 'Deal flow drops 41%; LPs pause allocations; international investors withdraw to home markets.'
  },
  {
    phase: '2. VALUATION RESET',
    period: 'Q2-Q3 2026',
    description: 'International VCs mark down NAVs; distressed deal windows emerge for secondary buyers (9-12 month window).'
  },
  {
    phase: '3. RESTRUCTURING',
    period: 'Q3-Q4 2026',
    description: 'Flight to Gulf hubs; mandatory corporate re-domiciling to KSA (Riyadh) and UAE (ADGM/DIFC) forced on founders.'
  },
  {
    phase: '4. DIVERGENCE',
    period: '2027+',
    description: 'GCC markets recover rapidly; Levant & North Africa rely on localized micro-funds, angel syndicates, and fresh-USD cash flow.'
  }
];

export const STARTUP_CASE_STUDIES: StartupCaseStudy[] = [
  {
    id: 'anghami',
    name: 'Anghami',
    founders: 'Eddy Maroun & Elie Habib',
    foundedYear: '2012 (Beirut)',
    headline: 'The Corporate Re-Domiciling & SPAC Capital Model',
    corporateStructure: [
      {
        title: 'Headquarters Migration to ADGM (2021)',
        description: 'Shifted ultimate legal parent entity and global headquarters from Lebanon to the Abu Dhabi Global Market (ADGM) in the UAE. Allowed the company to operate under English Common Law, issue multi-class equity, and protect IP under international standards.'
      },
      {
        title: 'SPAC Merger & NASDAQ Listing (2022)',
        description: 'Completed merger with Vistas Media Acquisition Company (VMAC), becoming the first Arab technology company to list on NASDAQ (NASDAQ: ANGH).'
      },
      {
        title: 'Public-to-Private / Strategic Consolidation',
        description: 'OSN Group (backed by Kuwait’s KIPCO) acquired a controlling majority stake in Anghami, combining OSN+ streaming assets with Anghami audio platform to tap regional strategic capital.'
      }
    ],
    gccExpansionStrategy: [
      {
        title: 'Incentive Alignment with ADIO',
        description: 'Leveraged the Abu Dhabi Investment Office (ADIO) Innovation Programme, securing financial subsidies, office subsidies, and payroll incentives to establish core tech & data operations in Hub71.'
      },
      {
        title: 'Saudi Localization',
        description: 'Targeted Saudi Arabia as largest consumer market: established dedicated offices in Riyadh and direct carrier billing (DCB) partnerships with STC, Mobily, and MBC Group.'
      }
    ],
    financialInfrastructure: [
      {
        title: 'Decoupled R&D in Beirut',
        description: 'Retained substantial engineering, music curation, and administrative teams in Beirut to benefit from low-cost R&D talent, paying salaries in "Fresh USD" through offshore accounts in Dubai and Europe.'
      },
      {
        title: 'Currency Hedging',
        description: 'Subscription revenues collected directly in hard-currency GCC pegs (SAR, AED, QAR) via direct telecom integration, shielding the core P&L from Lebanese Pound hyperinflation.'
      }
    ],
    flowchart: [
      { step: '01', label: 'BEIRUT, LEBANON', subtext: 'Operational R&D Hub & Talent Engine' },
      { step: '02', label: 'ABU DHABI (ADGM, UAE)', subtext: 'Corporate Pivot & Global HQ via ADIO Hub71' },
      { step: '03', label: 'NASDAQ: ANGH', subtext: 'SPAC Public Capital Access' },
      { step: '04', label: 'OSN GROUP / MBC', subtext: 'Strategic Saudi/GCC Hub & Buyout' }
    ]
  },
  {
    id: 'toters',
    name: 'Toters',
    founders: 'Tamim Khalfa & Nabil Zakka',
    foundedYear: '2017 (Beirut)',
    headline: 'Hyper-Local Operations & Dual-Entity Expansion',
    corporateStructure: [
      {
        title: 'Offshore Holding Structure',
        description: 'Ring-fenced venture investments via offshore holding company registered in Cayman Islands / ADGM. All equity rounds from regional funds (MEVP, Berytech, Cedar Mundi) processed into offshore banking accounts.'
      },
      {
        title: 'Foreign Subsidiary Licensing (MISA)',
        description: 'Operating local delivery entities across Saudi Arabia and Iraq: secured foreign investment licenses (MISA in Saudi Arabia) to operate direct logistics, dark stores, and merchant settlement services.'
      }
    ],
    gccExpansionStrategy: [
      {
        title: 'High-Margin Niche Segments in KSA',
        description: 'Avoided front-on price wars with heavily capitalized incumbents (Jahez, Hungerstation, Keeta). Focused on premium merchant partnerships, dark-store fulfillment (Toters Fresh), and retail media.'
      },
      {
        title: 'Expansion into Iraq (Baghdad & Erbil)',
        description: 'Scaled into Iraq’s cash-heavy economy using operational playbooks perfected under complex Lebanese conditions, achieving high margins with low competition.'
      }
    ],
    financialInfrastructure: [
      {
        title: 'Local R&D Cost Arbitrage',
        description: 'Retained primary engineering, product management, and customer support in Beirut. Earned revenues in SAR and IQD while keeping tech costs low, achieving exceptional capital efficiency.'
      },
      {
        title: 'Cash-Flow Isolation',
        description: 'Domestic Lebanese revenues maintained strictly to cover local operational expenses, while GCC and Iraqi revenues were recycled directly into regional expansion without touching Lebanese banks.'
      }
    ],
    flowchart: [
      { step: '01', label: 'CAYMAN / ADGM HOLDING', subtext: 'Venture Capital & Equity Ownership (MEVP, Cedar Mundi)' },
      { step: '02', label: 'BEIRUT R&D ENGINE', subtext: 'Operational Hub & Local Fresh-USD Payroll' },
      { step: '03', label: 'GCC / SAUDI ARABIA', subtext: 'MISA Licensed Units & Premium Dark Stores' },
      { step: '04', label: 'IRAQ EXPANSION', subtext: 'Baghdad & Erbil High-Margin Delivery Operations' }
    ]
  }
];

export const COMPARATIVE_ANALYSIS = [
  {
    dimension: 'Expansion Driver',
    anghami: 'Content scaling, media partnerships, and public capital markets.',
    toters: 'Unit-economics arbitrage, logistics management, and geographic scale.'
  },
  {
    dimension: 'Holding Location',
    anghami: 'ADGM (Abu Dhabi, UAE).',
    toters: 'Cayman Islands / ADGM Holding.'
  },
  {
    dimension: 'GCC Anchor Market',
    anghami: 'UAE (Abu Dhabi) & Saudi Arabia.',
    toters: 'Saudi Arabia & Iraq.'
  },
  {
    dimension: 'Lebanon Role',
    anghami: 'Talent back-office, music curation, engineering hub.',
    toters: 'Engineering, product development, back-office operations.'
  },
  {
    dimension: 'Capital Mechanism',
    anghami: 'Venture capital → NASDAQ SPAC → Strategic Buyout (OSN).',
    toters: 'Venture capital rounds (MEVP, Cedar Mundi) → Regional growth rounds.'
  }
];
