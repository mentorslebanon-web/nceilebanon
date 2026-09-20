/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AiCourseResources } from '../types';

export const COURSE_RESOURCES: Record<string, AiCourseResources> = {
  'mit-sloan-ai-business-strategy': {
    starterPrompts: [
      {
        title: 'Build vs. Buy Evaluation Matrix',
        targetTool: 'Claude 3.5 Sonnet / ChatGPT',
        purpose: 'Evaluate whether a proposed AI capability should be built in-house, acquired via commercial SaaS, or integrated via managed API.',
        prompt: `Act as a seasoned MIT Sloan Enterprise Technology Strategist. 
Analyze the following proposed AI capability for my startup:
[INSERT CAPABILITY & STARTUP PROFILE]

Generate a comprehensive Build vs. Buy vs. Partner decision matrix evaluating:
1. Total Cost of Ownership (3-year horizon: infra, engineering, maintenance).
2. Time-to-Market latency and opportunity cost.
3. Proprietary defensibility / data moat potential.
4. Strategic vendor lock-in risks and data sovereignty.
5. Recommendation with concrete milestone gates.`
      },
      {
        title: 'Algorithmic Risk & Triage Protocol',
        targetTool: 'ChatGPT / Claude 3.5 Sonnet',
        purpose: 'Establish human-in-the-loop escalation thresholds for probabilistic automated workflows.',
        prompt: `Act as a Chief Operations Officer specializing in AI-human symbiosis.
Review this operational workflow: [INSERT CURRENT WORKFLOW].
Identify:
1. Every failure mode where model error or hallucination causes business or legal damage.
2. The exact confidence score threshold where autonomous execution should yield to human approval.
3. The design of an exception queue and SLA timeline for human supervisors.`
      }
    ],
    recommendedTools: [
      {
        name: 'AWS Bedrock / Google Vertex AI',
        category: 'Enterprise Model Gateways',
        description: 'Multi-model enterprise hosting environments with strict private data isolation and SOC-2 compliance.',
        pricingTier: 'Usage-based per token / compute hour'
      },
      {
        name: 'Langfuse / Arize Phoenix',
        category: 'LLM Observability & Tracing',
        description: 'Open-source platform to trace model latency, token economics, and qualitative output drifts in production.',
        pricingTier: 'Free open-source self-host / Cloud tier available'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Strategic Audit (Days 1–14)',
        tasks: [
          'Inventory current repetitive business operations consuming >15 hours/week of knowledge worker time',
          'Benchmark clean data availability for top 3 high-impact target workflows',
          'Calculate current manual cost baseline to establish minimum acceptable ROI threshold'
        ]
      },
      {
        phase: 'Phase 2: Pilot & Governance (Days 15–45)',
        tasks: [
          'Deploy off-the-shelf commercial API proof-of-concept rather than training custom models',
          'Establish company Acceptable AI Use Policy forbidding confidential data paste into unvetted models',
          'Draft human-in-the-loop exception review queue with designated operational owners'
        ]
      },
      {
        phase: 'Phase 3: Scale & Moat Defense (Days 46–90)',
        tasks: [
          'Measure actual task compression time and compute cost per transaction against manual baseline',
          'Store anonymized edge-case user interactions into proprietary evaluation datasets',
          'Present validated ROI business case to executive team and board for permanent rollout'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'MIT Sloan Executive Review: AI Strategy Playbook',
        type: 'Executive Whitepaper',
        description: 'Foundational framework for separating transformative artificial intelligence applications from ephemeral market trends.',
        linkNote: 'Sloan Management Review Resource'
      },
      {
        title: 'MIT CSAIL Autonomous Systems Briefing',
        type: 'Research Report',
        description: 'Architectural blueprints for structuring resilient automated decision engines in high-stakes environments.'
      }
    ]
  },

  'deeplearning-ai-for-everyone': {
    starterPrompts: [
      {
        title: 'Feasible Problem Formulation Prompt',
        targetTool: 'ChatGPT / Claude 3.5',
        purpose: 'Deconstruct a vague startup business challenge into a crisp, feasible machine learning specification.',
        prompt: `Act as Andrew Ng, founder of DeepLearning.AI.
I am a non-technical startup founder with the following operational challenge:
[DESCRIBE BUSINESS GOAL / PAIN POINT]

Help me structure this into an AI project specification:
1. What is the explicit Input (A) and Output (B) relationship?
2. Is this feasible with supervised learning, a generative LLM, or standard deterministic code?
3. What raw data do I need to collect before hiring a developer?
4. What is a realistic metric for minimum viable accuracy?`
      }
    ],
    recommendedTools: [
      {
        name: 'Hugging Face Spaces',
        category: 'Model Repositories & Demos',
        description: 'Discover and test thousands of pre-trained open-source models for computer vision, audio, and language without coding.',
        pricingTier: 'Free community tier / Paid hardware compute'
      },
      {
        name: 'Kaggle Datasets & Kernels',
        category: 'Benchmarking & Datasets',
        description: 'Explore verified open datasets in your startup vertical to test data distribution hypotheses.',
        pricingTier: 'Free'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Vocabulary & Requirements (Week 1)',
        tasks: [
          'Map business problems into standard A-to-B mappings (e.g. Email text -> Intent classification)',
          'Identify what historical logs or database tables your startup currently retains',
          'Eliminate "AI magic" expectations: confirm where simple heuristics outperform models'
        ]
      },
      {
        phase: 'Phase 2: 2-Week Prototype (Weeks 2–3)',
        tasks: [
          'Hire or assign a technical contractor with a concrete 1-page spec focused on existing open-source models',
          'Test on 100 real customer examples to establish baseline accuracy and edge cases',
          'Integrate results into an existing spreadsheet or database before building custom UI'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'AI Transformation Playbook by Andrew Ng',
        type: 'Strategic Guidebook',
        description: 'The definitive 5-step roadmap for building AI capabilities in any modern commercial organization.'
      }
    ]
  },

  'microsoft-ai-business-professional': {
    starterPrompts: [
      {
        title: 'Executive Meeting & Action Synthesis Chain',
        targetTool: 'Microsoft 365 Copilot / Word / Teams',
        purpose: 'Convert messy multi-speaker meeting transcripts into customer-facing proposals and CRM tasks in 2 minutes.',
        prompt: `Using the meeting transcript from our discovery call with [CLIENT NAME]:
1. Extract the 3 core business pains expressed by the client using their exact terminology.
2. Draft an executive summary suitable for sending directly to the client's Chief Technology Officer.
3. Formulate a bulleted action checklist with assigned owners and deadline dates.
4. Create a draft proposal outline matching our standard 3-tier SaaS pricing packages.`
      }
    ],
    recommendedTools: [
      {
        name: 'Microsoft Copilot Studio',
        category: 'Low-Code Autonomous Agents',
        description: 'Visual designer for creating custom Copilot agents connected to internal enterprise data sources.',
        pricingTier: 'Microsoft 365 add-on subscription'
      },
      {
        name: 'Power Automate',
        category: 'Robotic Process Automation',
        description: 'Connect hundreds of cloud services with AI-driven document processing and approval chains.',
        pricingTier: 'Per user / per flow plans'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Tenant Security & Grounding (Days 1–7)',
        tasks: [
          'Audit SharePoint folder permissions to prevent Copilot indexing sensitive HR/salary folders',
          'Deploy Microsoft 365 Copilot licenses to highest-leverage knowledge workers (sales, ops)',
          'Set company-wide data protection toggles ensuring commercial data privacy'
        ]
      },
      {
        phase: 'Phase 2: Workflow Automation (Days 8–30)',
        tasks: [
          'Standardize 5 reusable prompt templates for sales follow-ups and meeting briefs',
          'Build a custom Copilot Studio agent grounded on company SOP documentation',
          'Measure daily time saved per representative using Viva Insights telemetry'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'Microsoft AB-730 Exam Official Study Guide',
        type: 'Certification Blueprint',
        description: 'Comprehensive technical review guide covering generative AI productivity tools and enterprise agent design.'
      }
    ]
  },

  'duke-ai-for-product-management': {
    starterPrompts: [
      {
        title: 'Probabilistic PRD Template Generator',
        targetTool: 'Claude 3.5 Sonnet / ChatGPT',
        purpose: 'Draft an AI-first Product Requirements Document that explicitly accounts for probabilistic output variations.',
        prompt: `Act as a Principal AI Product Manager from Duke University.
I am designing the following AI-first product feature: [DESCRIBE FEATURE].

Draft an exhaustive Product Requirements Document (PRD) with:
1. User Problem Statement & Success Metric (both business KPI and model evaluation metric).
2. Data Flow Architecture & Telemetry Requirements.
3. Fallback UX Rules: Exactly what the user sees when model confidence is <70%, 70-85%, and >85%.
4. Feedback Loop Design: How we passively capture user corrections to improve future models.
5. Hallucination Risk Assessment & Safety Guardrails.`
      }
    ],
    recommendedTools: [
      {
        name: 'PostHog / Mixpanel',
        category: 'Product Analytics & Telemetry',
        description: 'Capture user behavioral funnels, feature flags, and custom event telemetry tied to AI output interactions.',
        pricingTier: 'Generous free tier / scalable cloud pricing'
      },
      {
        name: 'Promptfoo / Braintrust',
        category: 'Automated Model & Prompt Evaluation',
        description: 'CLI and web platform to run automated regression tests against system prompts before deploying to production.',
        pricingTier: 'Open-source CLI / Enterprise SaaS'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Feature Scoping & Telemetry (Sprint 1)',
        tasks: [
          'Define non-functional latency budgets (e.g. streaming time-to-first-token < 600ms)',
          'Instrument implicit user interaction events (copying output, editing text, regenerating)',
          'Establish baseline benchmark dataset with 50 golden test queries and ideal responses'
        ]
      },
      {
        phase: 'Phase 2: Launch & Feedback Optimization (Sprint 2–3)',
        tasks: [
          'Deploy behind a feature flag to 10% of active users to observe real-world failure modes',
          'Add inline confidence explanations or source citation badges to reinforce user trust',
          'Continuously append user-corrected samples into prompt evaluation test suites'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'Duke Pratt School of Engineering AI PRD Guidelines',
        type: 'Product Architecture Paper',
        description: 'Best practices for managing product roadmaps when feature behavior is governed by probabilistic weights.'
      }
    ]
  },

  'applied-genai-marketing-communication': {
    starterPrompts: [
      {
        title: 'Midjourney Photorealistic Product Style Bible',
        targetTool: 'Midjourney v6',
        purpose: 'Generate consistent studio-quality product lifestyle photography without physical photoshoot costs.',
        prompt: `/imagine prompt: high-end modern packaging of [PRODUCT NAME], minimalist luxury branding, placed on a sun-drenched travertine stone surface, subtle morning shadows, architectural interior background, editorial commercial photograph, shot on Hasselblad H6D-100c, 80mm lens, f/2.8, soft diffused natural daylight, hyper-detailed texture, 8k resolution --ar 16:9 --v 6.0 --style raw`
      },
      {
        title: 'Semantic Content Cluster & Pillar Generator',
        targetTool: 'Claude 3.5 Sonnet',
        purpose: 'Generate an SEO content cluster that establishes immediate topical authority for startup search rankings.',
        prompt: `Act as an elite Growth Marketer and SEO Director.
My startup offers [PRODUCT / VALUE PROPOSITION] to [TARGET AUDIENCE].

Generate a high-converting SEO Content Strategy:
1. Identify 1 Core Pillar Topic and 8 supporting Sub-Pillar topics with high buyer intent.
2. Outline the exact search intent, target keywords, and emotional hook for each article.
3. Provide a structured outline for the cornerstone pillar article including FAQs designed to win Google Featured Snippets.`
      }
    ],
    recommendedTools: [
      {
        name: 'Midjourney v6 & Leonardo.ai',
        category: 'Generative Visual Creation',
        description: 'State-of-the-art image generation tools for high-fidelity ad creatives, product mockups, and social assets.',
        pricingTier: 'Monthly subscription from $10/mo'
      },
      {
        name: 'Klaviyo AI & Jasper',
        category: 'Automated Copywriting & Email Campaigns',
        description: 'AI-assisted copywriting engines specialized in customer lifecycle retention, subject line optimization, and ad hooks.',
        pricingTier: 'Tiered by subscriber list / word volume'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Asset Creation & Brand Bible (Days 1–7)',
        tasks: [
          'Codify brand voice, vocabulary, forbidden terms, and tone parameters into a reusable Claude system prompt',
          'Generate 25 high-resolution lifestyle product ad creatives in Midjourney using locked parameter seeds',
          'Create 5 distinct video ad scripts with attention-grabbing 3-second opening hooks'
        ]
      },
      {
        phase: 'Phase 2: Multivariate Ad Testing (Days 8–21)',
        tasks: [
          'Launch Meta Dynamic Creative ads testing 5 visual assets, 5 copy variations, and 3 headlines',
          'Measure Cost Per Click (CPC) and Customer Acquisition Cost (CAC) to isolate top-performing creative combinations',
          'Scale ad spend exclusively on combinations yielding >2.5x Return on Ad Spend (ROAS)'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'Applied AI Institute: The Generative Growth Engine',
        type: 'Marketing Whitepaper',
        description: 'Step-by-step methodologies for replacing traditional $10k/month creative agency retainers with internal AI pipelines.'
      }
    ]
  },

  'mit-xpro-process-automation-agentic': {
    starterPrompts: [
      {
        title: 'CrewAI Autonomous Team Architecture Spec',
        targetTool: 'Claude 3.5 / ChatGPT',
        purpose: 'Deconstruct a complex manual workflow into an orchestrated multi-agent team with explicit roles and tools.',
        prompt: `Act as an MIT xPRO Autonomous Agent Architect.
I want to automate the following multi-step business workflow: [DESCRIBE WORKFLOW].

Design a complete CrewAI multi-agent orchestration architecture:
1. Define each Agent: Role, Goal, Backstory, and allowed Tools (e.g. WebSearchTool, DatabaseTool).
2. Define sequential Tasks with explicit expected output formats (e.g. JSON schema).
3. Specify the Manager Agent's delegation rules and hallucination validation checkpoints.
4. Provide the Python boilerplate code using CrewAI syntax.`
      }
    ],
    recommendedTools: [
      {
        name: 'Make.com & Zapier',
        category: 'Visual Workflow Orchestration',
        description: 'Connect hundreds of cloud APIs with conditional logic, data manipulation, and LLM reasoning steps.',
        pricingTier: 'Free tier available / Scalable monthly plans'
      },
      {
        name: 'CrewAI & LangGraph',
        category: 'Multi-Agent Frameworks',
        description: 'Open-source Python frameworks for building role-playing, autonomous AI agents that collaborate on complex tasks.',
        pricingTier: 'Free open-source / Enterprise cloud'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Workflow Mapping & Triggers (Week 1)',
        tasks: [
          'Record standard operating procedure (SOP) with step-by-step inputs, transformations, and outputs',
          'Identify webhook trigger events (e.g. new invoice received, customer form submitted)',
          'Select between no-code (Make.com) or code-first (CrewAI) depending on data transformation complexity'
        ]
      },
      {
        phase: 'Phase 2: Error Handling & Human-in-the-Loop (Week 2)',
        tasks: [
          'Implement automated fallback branches when API calls timeout or return anomalous responses',
          'Configure a Slack notification channel where agents post draft actions for human emoji approvals',
          'Deploy to production and monitor execution logs across 50 consecutive test cases'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'MIT xPRO Agentic Architecture Design Principles',
        type: 'Technical Specification',
        description: 'Reference architecture for deploying autonomous multi-agent software pipelines in enterprise environments.'
      }
    ]
  },

  'wharton-data-analysis-decision-making': {
    starterPrompts: [
      {
        title: 'Cohort Churn & Behavioral Attribution Prompt',
        targetTool: 'Julius AI / ChatGPT Advanced Data Analysis',
        purpose: 'Identify the exact customer behaviors that trigger churn or expansion from raw event logs.',
        prompt: `Act as a Wharton Professor of Econometrics and Analytics.
I have uploaded our raw user event log CSV containing user IDs, timestamps, session actions, and churn flags:

1. Perform survival analysis and generate customer retention cohort curves by signup month.
2. Run a logistic regression or random forest feature importance model to find which product actions in the first 72 hours correlate most strongly with 90-day retention.
3. Quantify the exact churn risk reduction if a user completes our onboarding checklist.
4. Output 3 data-backed commercial recommendations to reduce churn.`
      }
    ],
    recommendedTools: [
      {
        name: 'Julius AI & ChatGPT Code Interpreter',
        category: 'Conversational Data Science',
        description: 'Upload spreadsheets, SQL dumps, or CSVs to generate Python regressions, time-series forecasts, and clean visualizations.',
        pricingTier: 'Freemium / Monthly subscription'
      },
      {
        name: 'Tableau AI / Metabase',
        category: 'Business Intelligence & Dashboards',
        description: 'Connect live production databases to generate automated executive dashboards and natural language query summaries.',
        pricingTier: 'Open source self-host / Cloud subscriptions'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Data Hygiene & Ingestion (Days 1–7)',
        tasks: [
          'Export raw user activity logs and remove personally identifiable information (PII) before analysis',
          'Verify data integrity: check for missing timestamps, duplicate records, and anomalous outliers',
          'Establish standard definitions for Monthly Recurring Revenue (MRR), Churn, and Active Users'
        ]
      },
      {
        phase: 'Phase 2: Insight Generation & Action (Days 8–21)',
        tasks: [
          'Execute customer segmentation analysis to identify your top 10% high-margin buyer personas',
          'Re-allocate product roadmap priorities to strengthen the features with highest retention correlation',
          'Build an executive dashboard that automatically highlights weekly performance anomalies'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'Wharton Executive Education: Strategic Decision Making with Data',
        type: 'Course Framework Document',
        description: 'Statistical decision trees for leaders making capital allocation bets under uncertainty.'
      }
    ]
  },

  'harvard-storytelling-narrative-ai': {
    starterPrompts: [
      {
        title: 'Venture Capital Category-King Pitch Synthesis',
        targetTool: 'Claude 3.5 Sonnet / Perplexity Pro',
        purpose: 'Transform a confusing technical architecture into an irresistible venture capital investment narrative.',
        prompt: `Act as a Harvard Business School Professor of Entrepreneurship and a veteran Sequoia Capital partner.
Review my startup's business model and traction: [INSERT STARTUP SUMMARY].

Help me articulate our Category-King investment narrative:
1. The Seismic Shift: What fundamental technological or regulatory shift makes our startup inevitable today?
2. The Enemy: What legacy, broken paradigm are we replacing?
3. The Promised Land: What does the customer's world look like with our platform?
4. The Magic: How does our proprietary technology solve this 10x better and cheaper?
5. The Defensible Moat: Why will competitors fail to replicate our flywheel in 24 months?`
      }
    ],
    recommendedTools: [
      {
        name: 'Gamma App & Beautiful.ai',
        category: 'Generative Slide Decks & Presentations',
        description: 'Transform markdown narratives into beautifully styled, visually engaging slide decks and web presentations in seconds.',
        pricingTier: 'Freemium / Pro subscription'
      },
      {
        name: 'Perplexity Pro',
        category: 'Market Research & Citation Synthesis',
        description: 'Synthesize verified research reports, SEC filings, and competitor metrics with footnote citations for pitch decks.',
        pricingTier: 'Monthly subscription'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Narrative Formulation & Research (Week 1)',
        tasks: [
          'Synthesize market size and growth drivers using Perplexity Pro with verified research citations',
          'Conduct 5 AI-simulated partner-meeting cross-examinations to identify narrative weak points',
          'Condense the startup thesis into an unforgettable 10-word hook for email intros'
        ]
      },
      {
        phase: 'Phase 2: Visual Deck & Data Room Assembly (Week 2)',
        tasks: [
          'Generate 12 slide draft outlines in Gamma App and refine typography, contrast, and spacing',
          'Build an investor data room in Notion AI containing founder bios, cap table, and FAQ repository',
          'Rehearse pitch timing to guarantee complete delivery in under 8 minutes leaving time for Q&A'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'Harvard Online: Storytelling as Strategy Course Guide',
        type: 'Executive Syllabus Resource',
        description: 'Techniques for mobilizing capital, recruiting leadership talent, and winning customer evangelists through narrative.'
      }
    ]
  },

  'oxford-iapp-ai-governance-compliance': {
    starterPrompts: [
      {
        title: 'EU AI Act Risk Classification & Conformity Audit',
        targetTool: 'Claude 3.5 Sonnet / ChatGPT',
        purpose: 'Audit startup features against the EU AI Act High-Risk criteria and generate immediate compliance remedies.',
        prompt: `Act as a specialized EU AI Regulatory Attorney and Oxford AI Governance Fellow.
My startup deploys the following AI system: [DESCRIBE PRODUCT & END USERS].

Evaluate this system against the EU AI Act:
1. Classify the system tier (Prohibited, High-Risk, GPAI, or Minimal Risk) with legal statutory references.
2. List all mandatory technical documentation requirements under Annex IV.
3. Identify required human oversight mechanisms and risk management measures.
4. Draft an audit-ready executive compliance roadmap to ensure lawful market deployment.`
      }
    ],
    recommendedTools: [
      {
        name: 'NIST AI Risk Management Framework (RMF 1.0)',
        category: 'Risk Assessment Standard',
        description: 'The premier federal standard for mapping, measuring, and managing AI system risks and trustworthiness.',
        pricingTier: 'Public open standard (Free)'
      },
      {
        name: 'Microsoft Presidio / Guardrails AI',
        category: 'PII Scrubbing & Input Sanitization',
        description: 'Open-source SDK to detect and anonymize sensitive PII (names, credit cards, health records) before model processing.',
        pricingTier: 'Open source (Free)'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Risk Mapping & Data Audit (Days 1–14)',
        tasks: [
          'Classify all current and planned AI features against the EU AI Act and NIST AI RMF risk matrices',
          'Verify that zero customer data is utilized for third-party foundation model training without explicit consent',
          'Deploy automated PII scrubbing on all API gateway endpoints processing user text'
        ]
      },
      {
        phase: 'Phase 2: Enterprise Trust Dossier (Days 15–45)',
        tasks: [
          'Create transparent Model Cards documenting training data sources, known limitations, and bias metrics',
          'Establish a formal AI Acceptable Use Policy signed by all employees and contractors',
          'Package technical compliance documentation into an audit-ready enterprise procurement packet'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'Oxford Artificial Intelligence Programme Governance Handbook',
        type: 'Regulatory Framework',
        description: 'Comprehensive guide to building ethical, auditable, and commercially defensible AI applications.'
      }
    ]
  },

  'hubspot-ai-sales-customer-success': {
    starterPrompts: [
      {
        title: 'B2B Objection Handling Battlecard Generator',
        targetTool: 'ChatSpot / Claude 3.5 Sonnet',
        purpose: 'Create real-time objection counter-arguments tailored to specific buyer personas for sales reps.',
        prompt: `Act as an enterprise sales director trained by HubSpot Academy.
Our startup sells [PRODUCT DESCRIPTION] to [BUYER PERSONA: e.g. Chief Information Security Officer].
The buyer raised the following objection during a sales call: "[INSERT OBJECTION: e.g. We don't have budget until next fiscal year / We already use Competitor X]".

Generate a 3-part response battlecard:
1. Empathy & Validation statement that acknowledges their concern without conceding ground.
2. Reframing Question that exposes the hidden ongoing cost or risk of doing nothing.
3. Proof Point with a concrete metric demonstrating 30-day positive payback period.`
      }
    ],
    recommendedTools: [
      {
        name: 'Gong.ai & Chorus',
        category: 'Revenue Intelligence & Call Coaching',
        description: 'Record, transcribe, and analyze customer sales calls to identify deal risks, competitor mentions, and coaching opportunities.',
        pricingTier: 'Enterprise subscription'
      },
      {
        name: 'Apollo.ai & Clay',
        category: 'Sales Prospecting & Data Enrichment',
        description: 'Find verified decision-maker emails, track company hiring surges, and automate multi-channel outbound sequences.',
        pricingTier: 'Freemium / Monthly plans'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Lead Scoring & Pipeline Hygiene (Week 1)',
        tasks: [
          'Connect Apollo.ai or Clay to discover accounts searching for keywords related to your product category',
          'Implement dynamic lead scoring in CRM: score leads based on company size, job title, and website visits',
          'Set up automated Slack alerts whenever a Tier-1 enterprise account opens an email or visits pricing'
        ]
      },
      {
        phase: 'Phase 2: Autonomous Tier-1 Support (Week 2)',
        tasks: [
          'Ingest all product documentation and help articles into a vector-grounded support bot in Zendesk or Intercom',
          'Test bot responses against 50 real past customer tickets to confirm zero hallucination rate',
          'Configure routing rules that instantly route high-value sales inquiries directly to the founder’s calendar'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'HubSpot Academy: The Inbound AI Sales Certification Guide',
        type: 'Sales Enablement Guide',
        description: 'Modern playbooks for blending human sales charisma with algorithmic lead targeting and deal acceleration.'
      }
    ]
  },

  'deeplearning-bubble-nocode-ai-app-dev': {
    starterPrompts: [
      {
        title: 'Full-Stack No-Code Relational Schema & v0 UI Prompt',
        targetTool: 'v0.dev & Claude 3.5',
        purpose: 'Generate both the frontend React UI and the relational database schema for a functional AI SaaS product in one pass.',
        prompt: `Act as a senior full-stack product engineer and no-code architect.
I am building a SaaS application called [APP NAME] that helps [TARGET USER] to [CORE VALUE PROPOSITION].

Generate:
1. The complete relational database schema (Tables: Users, Organizations, Projects, Activities, Subscriptions) including field types and relationships.
2. A comprehensive prompt to feed into v0.dev that will generate the responsive web dashboard with sidebar navigation, metric cards, active task table, and status badges.
3. The exact webhook API payload structure to call OpenAI and stream results back to the user.`
      }
    ],
    recommendedTools: [
      {
        name: 'v0.dev & Replit Agent',
        category: 'Generative UI & Full-Stack Prototyping',
        description: 'Describe user interfaces and backend scripts in plain English and instantly get working React/Tailwind code.',
        pricingTier: 'Freemium / Developer tier'
      },
      {
        name: 'Bubble.io & Supabase',
        category: 'Visual Database & App Platform',
        description: 'Build full-featured web applications with visual logic, database security rules, and third-party API connectors without coding.',
        pricingTier: 'Free development tier / Production hosting plans'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Database & Frontend Prototype (Weekend 1)',
        tasks: [
          'Generate initial interactive layout in v0.dev and test responsiveness across mobile and desktop',
          'Create data tables in Bubble or Supabase with foreign keys linking user accounts to created items',
          'Configure Stripe Connect or Checkout to accept live credit card payments in sandbox mode'
        ]
      },
      {
        phase: 'Phase 2: API Integration & Launch (Weekend 2)',
        tasks: [
          'Connect the OpenAI or Anthropic API via Bubble API Connector using private backend proxy workflows',
          'Implement loading spinners or streaming text to provide immediate visual feedback to users',
          'Deploy to custom domain, launch on Product Hunt, and invite 20 target users for beta onboarding'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'No-Code AI Builder Playbook by DeepLearning.AI & Bubble',
        type: 'Developer Handbook',
        description: 'Architectural blueprints for launching production SaaS applications without capital expenditure on dev agencies.'
      }
    ]
  },

  'cfi-wallstreetprep-genai-financial-modeling': {
    starterPrompts: [
      {
        title: 'Monte Carlo Supply-Chain & Runway Stress-Test',
        targetTool: 'Excel Copilot / Python Code Interpreter',
        purpose: 'Run a 1,000-iteration stochastic simulation to test cash runway against unexpected pricing and volume shocks.',
        prompt: `Act as a Chief Financial Officer and venture capital quantitative analyst.
Here is my startup's current financial profile:
- Monthly Gross Burn: [AMOUNT]
- Cash in Bank: [AMOUNT]
- Average Monthly Revenue Growth: [PERCENT]%
- Gross Margin: [PERCENT]%

1. Run a 1,000-iteration Monte Carlo simulation varying monthly revenue growth between [-10% and +25%] and component costs by [+/- 15%].
2. Calculate the exact probability that our cash runway will drop below 6 months within the next 12 months.
3. Identify the single largest financial leverage point to extend our runway without raising emergency dilutive capital.`
      }
    ],
    recommendedTools: [
      {
        name: 'Microsoft Excel Copilot & Formula Bot',
        category: 'AI-Assisted Financial Spreadsheets',
        description: 'Generate complex Excel formulas, automate financial statement reconciliations, and model financial scenarios using plain English.',
        pricingTier: 'Microsoft 365 add-on / Subscription'
      },
      {
        name: 'FinChat.io',
        category: 'Financial Research & Valuation Comps',
        description: 'AI platform providing institutional financial data, public SaaS valuation multiples, and earnings transcripts for benchmarking.',
        pricingTier: 'Freemium / Professional tier'
      }
    ],
    actionChecklist: [
      {
        phase: 'Phase 1: Integrated 3-Statement Model (Days 1–7)',
        tasks: [
          'Link Income Statement, Balance Sheet, and Cash Flow Statement dynamically to eliminate manual updates',
          'Standardize driver assumptions (headcount ramp, customer acquisition cost, gross margin percentage)',
          'Create dynamic toggles for Conservative, Base, and Aggressive growth scenarios'
        ]
      },
      {
        phase: 'Phase 2: Dilution & Valuation Benchmarking (Days 8–14)',
        tasks: [
          'Build an equity cap table waterfall modeling SAFE note conversions and Series A dilution',
          'Benchmark your startup’s revenue multiples against comparable recent venture transactions using FinChat.io',
          'Prepare an executive financial summary slide for upcoming investor and board meetings'
        ]
      }
    ],
    officialGuides: [
      {
        title: 'Corporate Finance Institute (CFI): Generative AI in Financial Modeling',
        type: 'Professional Certification Guide',
        description: 'Techniques for building defensible financial models that stand up to institutional venture diligence.'
      }
    ]
  }
};
