/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AiCourseItem } from '../types';
import { COURSE_SYLLABI } from './courseSyllabi';
import { COURSE_RESOURCES } from './courseResources';
import { COURSE_DEEP_CASE_STUDIES } from './courseDeepCaseStudies';

const RAW_AI_ENTREPRENEUR_COURSES: AiCourseItem[] = [
  {
    id: 'mit-sloan-ai-business-strategy',
    number: 1,
    title: 'Artificial Intelligence: Implications for Business Strategy',
    provider: 'MIT Sloan & MIT CSAIL',
    providerType: 'University',
    format: 'Executive Certificate (6 Weeks Online)',
    category: 'Strategy & Leadership',
    level: 'Executive / Advanced',
    targetTools: ['Machine Learning Frameworks', 'Process Automation Architectures', 'Computer Vision APIs', 'Algorithmic Risk Models'],
    skills: ['Organizational strategy', 'Machine learning integration', 'Process automation', 'Algorithmic risk management'],
    synopsis: 'Focuses on demystifying AI technology from a non-technical management perspective. It provides entrepreneurs with frameworks to evaluate emerging tech, identify high-impact organizational use cases, and make data-backed resource allocation decisions.',
    duration: '6 Weeks (6-8 hrs/week)',
    accreditationBadge: 'MIT Sloan Executive Education',
    keyTakeaways: [
      'Strategic evaluation frameworks to separate viable AI applications from hype',
      'Organizational design principles for human-in-the-loop autonomous processes',
      'Build vs. buy vs. API-partner decision matrices for non-technical leadership'
    ],
    recommendedForStage: ['Seed Stage', 'Growth / Scale-up', 'Enterprise B2B'],
    caseStudy: {
      title: 'Fintech Onboarding KYC Automation',
      industry: 'FinTech / Digital Banking',
      summary: 'A fintech startup used this framework to map out customer verification workflows. Instead of building custom ML models from scratch, they integrated pre-built computer vision APIs to automate KYC (Know Your Customer) compliance.',
      impactMetric: '60% Reduction in Onboarding Friction',
      impactHighlight: '$120,000 saved in initial software R&D spend',
      methodology: 'Replaced a planned 9-month in-house computer vision engineering effort with commercial off-the-shelf OCR and liveness detection APIs connected through standard webhooks.',
      toolsUsed: ['Computer Vision APIs', 'OCR Pipelines', 'Automated Verification Webhooks']
    }
  },
  {
    id: 'deeplearning-ai-for-everyone',
    number: 2,
    title: 'AI for Everyone',
    provider: 'DeepLearning.AI (Instructor: Andrew Ng via Coursera)',
    providerType: 'EdTech Platform',
    format: 'Professional Certification (Self-paced, ~10 hours)',
    category: 'Strategy & Leadership',
    level: 'Foundational',
    targetTools: ['Data Pipelines', 'SQL Analytics Tables', 'Open-source Model Repositories', 'Feasible Problem Worksheets'],
    skills: ['AI terminology', 'Data strategy', 'Technical team communication', 'Feasible problem definition'],
    synopsis: 'A non-technical foundational course that teaches founders how to speak the language of engineers and data scientists. It helps entrepreneurs spot opportunities to apply AI within their business while avoiding unrealistic marketing hype.',
    duration: '~10 hours (Self-paced)',
    accreditationBadge: 'DeepLearning.AI Verified',
    keyTakeaways: [
      'Mastering precision vocabulary to write clear engineering requirements',
      'Evaluating data readiness, pipeline hygiene, and realistic model capabilities',
      'Identifying high-ROI small wins before committing large capital to data science'
    ],
    recommendedForStage: ['Idea / MVP', 'Seed Stage'],
    caseStudy: {
      title: 'E-Commerce Personalization Engine',
      industry: 'E-Commerce / Consumer Retail',
      summary: 'A non-technical e-commerce founder learned how data pipelines feed recommendation engines. Armed with this knowledge, she hired a freelance engineer to build an automated cross-selling recommendation tool using simple SQL tables and open-source models.',
      impactMetric: '+22% Average Order Value (AOV)',
      impactHighlight: 'Delivered in 2 weeks using open-source models & existing SQL',
      methodology: 'Structured catalog and cart event streams into normalized relational tables, enabling an off-the-shelf collaborative filtering model to recommend dynamic bundles at checkout.',
      toolsUsed: ['PostgreSQL', 'Scikit-learn', 'Open-Source Recommenders', 'Shopify Webhooks']
    }
  },
  {
    id: 'microsoft-ai-business-professional',
    number: 3,
    title: 'Microsoft Certified: AI Business Professional (Exam AB-730)',
    provider: 'Microsoft',
    providerType: 'BigTech',
    format: 'Industry Certification (Proctored Exam)',
    category: 'Operations & Workflows',
    level: 'Intermediate',
    targetTools: ['Microsoft 365 Copilot', 'Copilot Studio Agents', 'Power Automate', 'Prompt Architecture Suites'],
    skills: ['Microsoft 365 Copilot', 'Copilot agents', 'Data analysis', 'Prompt architecture'],
    synopsis: "Validates a leader's ability to use generative AI productivity tools and agents to improve operational efficiency and decision-making without writing code.",
    duration: 'Exam AB-730 (~15-20 hrs prep)',
    accreditationBadge: 'Microsoft Certified Professional',
    keyTakeaways: [
      'Configuring autonomous Copilot Studio agents with enterprise security boundary controls',
      'Prompt chaining architectures inside daily knowledge worker workflows',
      'Executive dashboard synthesis and cross-tenant compliance governance'
    ],
    recommendedForStage: ['Seed Stage', 'Growth / Scale-up', 'Enterprise B2B'],
    caseStudy: {
      title: 'B2B Sales Acceleration & Deal Velocity',
      industry: 'Enterprise SaaS',
      summary: 'An enterprise SaaS startup trained its sales team using Copilot in Teams and Word. The sales reps automated client meeting summaries, customized follow-up decks on the fly, and trimmed sales cycle lengths significantly.',
      impactMetric: 'Sales Cycle: 45 Days → 28 Days',
      impactHighlight: '38% reduction in deal velocity latency',
      methodology: 'Connected Teams transcripts directly into Copilot prompt templates that generated personalized executive proposals and CRM action updates within 5 minutes of call completion.',
      toolsUsed: ['Microsoft 365 Copilot', 'Teams Transcripts', 'Word Template Engine', 'Dynamics/HubSpot CRM']
    }
  },
  {
    id: 'duke-ai-for-product-management',
    number: 4,
    title: 'AI for Product Management',
    provider: 'Duke University (via Coursera)',
    providerType: 'University',
    format: 'Course Certificate (4 Modules)',
    category: 'Product & Engineering',
    level: 'Intermediate',
    targetTools: ['Product Telemetry SDKs', 'Probabilistic PRD Frameworks', 'A/B Testing Suites', 'Prompt Routing Gateways'],
    skills: ['User behavior modeling', 'AI product specification (PRDs)', 'A/B testing', 'Product telemetry'],
    synopsis: 'Teaches founders how to build AI-first products. It covers how to define user metrics, design feedback loops, and manage product management pipelines when machine learning outputs are probabilistic rather than deterministic.',
    duration: '4 Modules (~20 hours)',
    accreditationBadge: 'Duke Pratt School of Engineering',
    keyTakeaways: [
      'Drafting probabilistic PRDs with explicit confidence thresholds and graceful fallbacks',
      'Telemetry instrumentation to track hallucination rates and user dissatisfaction loops',
      'Designing active human feedback mechanisms (RLHF-style UX signals) in consumer apps'
    ],
    recommendedForStage: ['Idea / MVP', 'Seed Stage', 'Growth / Scale-up'],
    caseStudy: {
      title: 'EdTech Adaptive Learning & Dynamic Problem Routing',
      industry: 'EdTech / K-12 Education',
      summary: 'An EdTech founder used AI product management principles to build an adaptive testing system. By tracking real-time user failure modes and sending data into a dynamic prompt routing layer, the platform tailored math problem sets to student skill levels.',
      impactMetric: '+40% Platform Engagement',
      impactHighlight: 'Student session completion rose from 54% to 88%',
      methodology: 'Built probabilistic confidence intervals into user question response times, automatically branching struggling students into conversational diagnostic hints before serving next problems.',
      toolsUsed: ['Dynamic Prompt Router', 'User Telemetry Logs', 'Adaptive Branching Engine']
    }
  },
  {
    id: 'applied-genai-marketing-communication',
    number: 5,
    title: 'Generative AI Applied to Marketing and Communication',
    provider: 'Applied AI Industry Certification / Business Institute Programs',
    providerType: 'Specialized Institute',
    format: 'Practical Certificate (4–6 Weeks)',
    category: 'Marketing & Revenue',
    level: 'Intermediate',
    targetTools: ['Midjourney v6', 'Claude 3.5 Sonnet / ChatGPT', 'Jasper AI', 'Canva AI', 'Copy.ai'],
    skills: ['Midjourney', 'Advanced Prompt Engineering', 'Jasper', 'Canva AI', 'Copy.ai'],
    synopsis: 'Focuses on leveraging generative AI to build full-funnel marketing campaigns, generate ad creatives, run SEO analysis, and automate social media production at a fraction of the cost of traditional agencies.',
    duration: '4-6 Weeks (4 hrs/week)',
    accreditationBadge: 'Applied AI Institute Credential',
    keyTakeaways: [
      'Multi-modal prompt scripting for hyper-realistic brand asset creation',
      'Automated semantic content clustering and competitor keyword gap analysis',
      'Cost-efficient creative testing loops eliminating expensive external marketing agency retainers'
    ],
    recommendedForStage: ['Idea / MVP', 'Seed Stage'],
    caseStudy: {
      title: 'Bootstrapped D2C Brand Omnichannel Launch',
      industry: 'D2C Consumer Brands / FMCG',
      summary: 'A bootstrapped direct-to-consumer beverage brand generated 30 unique ad variations, lifestyle photography, and email marketing sequences in 3 days using Midjourney and Claude.',
      impactMetric: '35% Customer Acquisition Cost (CAC) Drop',
      impactHighlight: 'Completed in 3 days with $0 agency retainer fees',
      methodology: 'Prompt-engineered lifestyle product placements in varied regional settings and piped copy variations into Meta Ads dynamic creative testing, identifying top-converting hooks within 48 hours.',
      toolsUsed: ['Midjourney', 'Claude 3.5', 'Meta Ads Dynamic Creative', 'Klaviyo AI']
    }
  },
  {
    id: 'mit-xpro-process-automation-agentic',
    number: 6,
    title: 'Process Automation with AI & Agentic Workflows',
    provider: 'MIT xPRO / Harvard Online (Agentic AI Foundations)',
    providerType: 'University',
    format: 'Specialized Certificate (3–4 Weeks)',
    category: 'Operations & Workflows',
    level: 'Intermediate',
    targetTools: ['Make.com', 'Zapier AI Central', 'AutoGen', 'CrewAI', 'LangChain Wrappers', 'Custom GPTs'],
    skills: ['Make.com', 'Zapier AI', 'AutoGen', 'CrewAI', 'LangChain (No-Code wrappers)', 'Custom GPTs'],
    synopsis: 'Explores the shift from simple prompt-response interactions to autonomous multi-step AI agents. Founders learn how to connect APIs and build self-executing workflows for internal operations.',
    duration: '3-4 Weeks (5-8 hrs/week)',
    accreditationBadge: 'MIT xPRO Verified',
    keyTakeaways: [
      'Deconstructing complex operational SOPs into discrete autonomous agent tasks',
      'Orchestrating agent-to-agent verification protocols and deterministic fallback rules',
      'Connecting webhook triggers with multi-model validation pipelines'
    ],
    recommendedForStage: ['Seed Stage', 'Growth / Scale-up', 'Enterprise B2B'],
    caseStudy: {
      title: 'Logistics Fleet Order & Bill-of-Lading Dispatch',
      industry: 'Freight & Supply Chain Logistics',
      summary: 'A freight startup built a multi-agent workflow where Agent A parsed incoming PDF bill-of-lading documents, Agent B checked route availability against a database, and Agent C drafted invoice quotes.',
      impactMetric: 'Processing Time: 45 Minutes → < 2 Minutes',
      impactHighlight: 'Over 95% reduction in manual order triage overhead',
      methodology: 'Integrated vision OCR to ingest raw customs PDFs, queried fleet dispatch API via CrewAI agent wrapper, and automatically populated approved pricing tables into ERP.',
      toolsUsed: ['CrewAI', 'Make.com', 'PDF Extraction Agents', 'Postgres Fleet DB']
    }
  },
  {
    id: 'wharton-data-analysis-decision-making',
    number: 7,
    title: 'Data Analysis and Decision Making with AI',
    provider: 'Wharton School (University of Pennsylvania) / Executive Programs',
    providerType: 'University',
    format: 'Executive Certificate',
    category: 'Strategy & Leadership',
    level: 'Executive / Advanced',
    targetTools: ['Advanced Data Analysis (Code Interpreter)', 'Julius AI', 'Tableau AI', 'Predictive Forecasting Models'],
    skills: ['Advanced Data Analysis', 'Julius AI', 'Tableau AI', 'Predictive forecasting models'],
    synopsis: 'Teaches business leaders how to transform raw unstructured data into actionable strategic insights. It covers predictive analytics, customer churn forecasting, and automated quantitative modeling without needing advanced Python knowledge.',
    duration: '4-6 Weeks Executive Pace',
    accreditationBadge: 'Wharton Executive Education',
    keyTakeaways: [
      'Translating messy transactional logs into cohort retention curves and behavioral clusters',
      'Statistical validation techniques to prevent spurious correlation in AI findings',
      'Executive narrative dashboards demonstrating unit economics to institutional investors'
    ],
    recommendedForStage: ['Seed Stage', 'Growth / Scale-up', 'Enterprise B2B'],
    caseStudy: {
      title: 'SaaS Churn Attribution & Onboarding Intervention',
      industry: 'B2B Software as a Service',
      summary: 'A SaaS founder uploaded user event logs into an AI data analysis workspace. The AI detected a pattern: users who did not set up custom integrations within 72 hours had an 80% higher churn rate.',
      impactMetric: '18% Reduction in 90-Day Churn',
      impactHighlight: 'Pinpointed single inflection event across 500,000 log entries in 4 hours',
      methodology: 'Ran survival analysis and feature importance regressions using Julius AI, subsequently deploying automated concierge onboarding sequences triggered at hour 24 for unintegrated accounts.',
      toolsUsed: ['Julius AI', 'Python Code Interpreter', 'Mixpanel Event Logs', 'Customer.io']
    }
  },
  {
    id: 'harvard-storytelling-narrative-ai',
    number: 8,
    title: 'Storytelling as Strategy: Narrative and AI',
    provider: 'Harvard Online (AI Leadership Series)',
    providerType: 'University',
    format: 'Professional Certificate (4 Weeks)',
    category: 'Strategy & Leadership',
    level: 'Intermediate',
    targetTools: ['Beautiful.ai', 'Gamma App', 'Claude 3.5 Sonnet', 'Perplexity Pro', 'Pitch Deck Generation Frameworks'],
    skills: ['Pitch deck generation', 'Beautiful.ai', 'Gamma', 'AI-assisted market research', 'Narrative structuring'],
    synopsis: 'Combines classic narrative pitching frameworks with AI tools to help founders craft persuasive pitches for investors, talent, and partners. It teaches founders how to turn complex analytics into compelling pitch materials.',
    duration: '4 Weeks (~15 hours)',
    accreditationBadge: 'Harvard Online Verified',
    keyTakeaways: [
      'Distilling technical deep-tech defensibility into clear commercial value arguments',
      'Rapid prototype slide deck iteration matching venture capital thesis criteria',
      'Conducting competitive market landscape deep dives using synthesis engines'
    ],
    recommendedForStage: ['Idea / MVP', 'Seed Stage'],
    caseStudy: {
      title: 'HealthTech Seed Syndicate Fundraising Round',
      industry: 'Clinical HealthTech / Medical AI',
      summary: 'A health-tech startup synthesized 200 pages of medical journals and TAM (Total Addressable Market) studies into a clear pitch deck storyline using Gamma and Claude. The polished deck helped them secure institutional capital.',
      impactMetric: '$1.5M Seed Round Closed in 6 Weeks',
      impactHighlight: 'Synthesized 200+ medical research pages into 12 executive slides',
      methodology: 'Input clinical trial trial metrics and reimbursement regulatory filings into Claude to build an institutional-grade investment memorandum and investor FAQ repository.',
      toolsUsed: ['Gamma App', 'Claude 3.5 Sonnet', 'Perplexity Pro', 'Notion AI']
    }
  },
  {
    id: 'oxford-iapp-ai-governance-compliance',
    number: 9,
    title: 'AI Governance, Trust, and Legal Compliance',
    provider: 'Oxford Artificial Intelligence Programme / IAPP (International Association of Privacy Professionals)',
    providerType: 'University',
    format: 'Professional Certification (6 Weeks)',
    category: 'Governance & Compliance',
    level: 'Executive / Advanced',
    targetTools: ['EU AI Act Conformity Checklists', 'NIST AI RMF Framework', 'PII Scrubbing Gateways', 'Audit Logging Pipelines'],
    skills: ['Risk assessment frameworks', 'Copyright compliance', 'EU AI Act compliance', 'Data privacy guardrails'],
    synopsis: 'Essential for founders operating in regulated markets or building enterprise B2B applications. It covers data privacy, IP ownership of AI outputs, bias mitigation, and regulatory frameworks.',
    duration: '6 Weeks (6 hrs/week)',
    accreditationBadge: 'Oxford Saïd / IAPP Certified',
    keyTakeaways: [
      'Navigating EU AI Act High-Risk system compliance mandates and technical documentation',
      'Protecting proprietary client training data and IP from third-party model ingestion',
      'Building defensible algorithmic bias mitigation and audit trail frameworks for enterprise RFPs'
    ],
    recommendedForStage: ['Seed Stage', 'Growth / Scale-up', 'Enterprise B2B'],
    caseStudy: {
      title: 'Enterprise HR Tech Procurement & Audit Acceleration',
      industry: 'HR Tech / Automated Talent Evaluation',
      summary: 'An AI-driven recruiting startup preemptively designed their algorithms to follow transparent governance standards. When pitching to Fortune 500 clients, their audit-ready compliance framework gave them a major edge.',
      impactMetric: 'Closed Enterprise Deals 2x Faster',
      impactHighlight: 'Zero redlines on corporate security and ethical AI compliance assessments',
      methodology: 'Integrated algorithmic explainability scorecards and synthetic anonymization filters into candidate evaluations, providing clients with immediate EEOC and EU AI Act conformity dossiers.',
      toolsUsed: ['NIST AI RMF Audit Checklist', 'Synthetic Anonymizers', 'Conformity Dossier Generator']
    }
  },
  {
    id: 'hubspot-ai-sales-customer-success',
    number: 10,
    title: 'AI-Powered Sales and Customer Success',
    provider: 'HubSpot Academy / Sales Enablement Institutes',
    providerType: 'Specialized Institute',
    format: 'Certification (~6–8 hours)',
    category: 'Marketing & Revenue',
    level: 'Foundational',
    targetTools: ['Gong.ai', 'HubSpot AI Engine', 'Apollo.ai', 'ChatSpot', 'Zendesk AI'],
    skills: ['Gong.ai', 'HubSpot AI', 'Apollo.ai', 'ChatSpot', 'Zendesk AI'],
    synopsis: 'Focuses on integrating AI into the revenue engine. Founders learn how to deploy AI sales development reps (SDRs), automate lead scoring, personalize cold outreach, and deploy 24/7 intelligent customer support agents.',
    duration: '~6-8 Hours (Self-paced)',
    accreditationBadge: 'HubSpot Academy Certified',
    keyTakeaways: [
      'Configuring dynamic intent scoring to prioritize high-value inbound enterprise leads',
      'Deploying continuous knowledge-base sync for zero-hallucination tier-1 customer resolutions',
      'Automating call coaching and objection handling transcription for early sales reps'
    ],
    recommendedForStage: ['Idea / MVP', 'Seed Stage', 'Growth / Scale-up'],
    caseStudy: {
      title: 'Lean 24/7 Global B2B Marketplace Support',
      industry: 'B2B Wholesale Marketplace',
      summary: 'An online B2B supplier deployed an AI-driven support agent backed by their internal product knowledge base. The AI resolved 70% of inbound customer queries instantly, allowing the lean startup to maintain 24/7 global customer support.',
      impactMetric: '70% Instant Resolution Rate',
      impactHighlight: 'Maintained 24/7 support across 14 timezones with only 2 support staff',
      methodology: 'Indexed 1,200 product specification sheets into a vector-grounded support agent integrated into Zendesk, escalating only edge billing exceptions to human agents.',
      toolsUsed: ['Zendesk AI', 'HubSpot Knowledge Base', 'ChatSpot', 'Apollo.ai']
    }
  },
  {
    id: 'deeplearning-bubble-nocode-ai-app-dev',
    number: 11,
    title: 'No-Code AI Web & App Development',
    provider: 'DeepLearning.AI & Bubble / Webflow Academies',
    providerType: 'EdTech Platform',
    format: 'Practical Applied Certificate (Self-Paced)',
    category: 'Product & Engineering',
    level: 'Foundational',
    targetTools: ['Bubble.io', 'Webflow', 'v0.dev', 'Replit Agent', 'Supabase', 'OpenAI API'],
    skills: ['Bubble.io', 'Webflow', 'v0.dev', 'Replit Agent', 'Supabase', 'OpenAI API'],
    synopsis: 'Designed for non-technical founders to rapidly prototype and launch functional Minimum Viable Products (MVPs) without hiring expensive dev agencies. It covers building front-end interfaces, connecting database backends, and integrating AI endpoints.',
    duration: '2-3 Weeks (15-20 hours hands-on)',
    accreditationBadge: 'No-Code Applied Builder Credential',
    keyTakeaways: [
      'Building responsive component layouts in minutes using generative UI (v0.dev)',
      'Designing relational schemas and authenticated role permissions in Supabase / Bubble',
      'Securely proxying API keys and streaming LLM responses without writing custom backend servers'
    ],
    recommendedForStage: ['Idea / MVP'],
    caseStudy: {
      title: 'Solo Founder Property Management SaaS Launch',
      industry: 'PropTech / Real Estate Management',
      summary: 'A solo non-technical founder used v0.dev and Bubble to build an automated tenant messaging and maintenance scheduling portal in one weekend. She acquired paying customers before hiring developers.',
      impactMetric: 'First 5 Paying Clients in 1 Weekend',
      impactHighlight: '$0 spent on external software development agencies',
      methodology: 'Generated front-end designs via v0.dev, bound them to Bubble logic workflows, and connected the OpenAI API to categorize and dispatch maintenance requests to local contractors.',
      toolsUsed: ['v0.dev', 'Bubble.io', 'OpenAI API', 'Stripe Connect']
    }
  },
  {
    id: 'cfi-wallstreetprep-genai-financial-modeling',
    number: 12,
    title: 'Generative AI for Financial Modeling & Valuation',
    provider: 'Corporate Finance Institute (CFI) / Wall Street Prep AI Modules',
    providerType: 'Specialized Institute',
    format: 'Specialized Credential (10–15 hours)',
    category: 'Finance & Valuation',
    level: 'Intermediate',
    targetTools: ['Microsoft Excel Copilot', 'Formula Bot', 'ChatBA', 'FinChat.io', 'Monte-Carlo Scenario Engines'],
    skills: ['Microsoft Excel AI', 'Copilot/Formula Bot', 'ChatBA', 'FinChat.io', 'Scenario analysis engines'],
    synopsis: 'Teaches entrepreneurs how to build dynamic 3-statement financial models, forecast runway, model cap tables, and simulate risk scenarios using AI-assisted spreadsheets and natural language formulas.',
    duration: '10–15 Hours',
    accreditationBadge: 'CFI Financial Modeling AI Credential',
    keyTakeaways: [
      'Prompting natural-language formulas to build dynamic multi-scenario financial statements',
      'Automating Monte Carlo simulations to model supply chain price volatility and foreign exchange risks',
      'Generating investor-ready capitalization table waterfall distributions and dilution models'
    ],
    recommendedForStage: ['Seed Stage', 'Growth / Scale-up'],
    caseStudy: {
      title: 'Hardware Startup Runway & Supply-Chain Shock Modeling',
      industry: 'Hardware IoT / Consumer Electronics',
      summary: 'A hardware startup used financial modeling AI tools to build dynamic supply-chain cost models. By running Monte Carlo simulations on component cost fluctuations, they identified a potential cash-flow bottleneck 6 months in advance.',
      impactMetric: 'Identified Cash Bottleneck 6 Months Early',
      impactHighlight: 'Saved the company from $240,000 in emergency capital dilution',
      methodology: 'Integrated Excel Copilot with historical component price variance datasets to run 1,000 stochastic simulation runs, allowing founders to renegotiate minimum order quantities with suppliers.',
      toolsUsed: ['Excel Copilot', 'Formula Bot', 'FinChat.io', 'Monte-Carlo Simulator']
    }
  }
];

export const AI_ENTREPRENEUR_COURSES: AiCourseItem[] = RAW_AI_ENTREPRENEUR_COURSES.map(course => ({
  ...course,
  syllabus: COURSE_SYLLABI[course.id] || [],
  resources: COURSE_RESOURCES[course.id] || {
    starterPrompts: [],
    recommendedTools: [],
    actionChecklist: [],
    officialGuides: []
  },
  caseStudy: {
    ...course.caseStudy,
    ...(COURSE_DEEP_CASE_STUDIES[course.id] || {})
  }
}));

export const COURSE_CATEGORIES = [
  'All Domains',
  'Strategy & Leadership',
  'Product & Engineering',
  'Marketing & Revenue',
  'Operations & Workflows',
  'Governance & Compliance',
  'Finance & Valuation'
] as const;

export const STARTUP_STAGES = [
  'All Stages',
  'Idea / MVP',
  'Seed Stage',
  'Growth / Scale-up',
  'Enterprise B2B'
] as const;
