/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AiCourseModule } from '../types';

export const COURSE_SYLLABI: Record<string, AiCourseModule[]> = {
  'mit-sloan-ai-business-strategy': [
    {
      moduleNumber: 1,
      title: 'Demystifying the AI Technology Landscape for Leadership',
      duration: 'Week 1 (7 hrs)',
      topics: [
        'Taxonomy of Artificial Intelligence, Machine Learning & Deep Learning',
        'Deterministic rules vs. probabilistic cognitive architectures',
        'Dispelling generative hype: separating high-ROI applications from speculative R&D',
        'Executive technology evaluation framework for board & stakeholder alignment'
      ],
      handsOnLab: 'Conduct an organizational AI Readiness Audit matrix across current software stacks.',
      founderDeliverable: 'Executive 1-Pager: Organizational AI Feasibility & Value Heatmap.'
    },
    {
      moduleNumber: 2,
      title: 'Machine Learning in Business: Prediction, Classification & Automation',
      duration: 'Week 2 (7 hrs)',
      topics: [
        'Supervised, unsupervised, and reinforcement learning paradigms in commercial operations',
        'Cost-benefit analysis of precision vs. recall in automated customer triage',
        'Data hygiene, pipeline prerequisites, and feature engineering fundamentals',
        'Recognizing data debt and avoiding toxic training distribution shifts'
      ],
      handsOnLab: 'Evaluate a customer churn dataset to calculate financial break-even on predictive retention interventions.',
      founderDeliverable: 'Unit Economics Model: Predictive Intervention ROI & Precision Curve.'
    },
    {
      moduleNumber: 3,
      title: 'Natural Language Processing & Generative Architectures in Enterprise',
      duration: 'Week 3 (8 hrs)',
      topics: [
        'Transformer architectures, attention mechanisms, and context window economics',
        'Retrieval-Augmented Generation (RAG) vs. Fine-tuning vs. In-Context Few-Shot Prompting',
        'Vector embeddings, semantic search, and enterprise knowledge repository grounding',
        'Cost estimation for token consumption, API latency budgets, and hosting'
      ],
      handsOnLab: 'Map an internal customer support workflow to an enterprise RAG architecture schema.',
      founderDeliverable: 'Technical RFP Specification for Vendor Knowledge Base Automation.'
    },
    {
      moduleNumber: 4,
      title: 'Strategic Dilemma: Build vs. Buy vs. Partner Architecture',
      duration: 'Week 4 (8 hrs)',
      topics: [
        'Total Cost of Ownership (TCO) analysis for custom model training vs. API consumption',
        'Vendor lock-in, data sovereignty, and cloud model hosting contracts',
        'API rate limits, multi-provider redundancy, and fallback failover strategies',
        'Assessing proprietary competitive moats in an era of open-weights commoditization'
      ],
      handsOnLab: 'Build a Decision Scorecard comparing in-house hosting vs. managed frontier APIs for a core product feature.',
      founderDeliverable: 'Board-Ready Build vs. Buy Decision Memorandum with 3-Year TCO.'
    },
    {
      moduleNumber: 5,
      title: 'Human-in-the-Loop Workflow Redesign & Organizational Change',
      duration: 'Week 5 (7 hrs)',
      topics: [
        'Redesigning standard operating procedures (SOPs) for human-AI symbiosis',
        'Establishing cognitive handoff triggers, exception queues, and escalation pathways',
        'Measuring employee task compression, workflow throughput, and fatigue reduction',
        'Mitigating workforce anxiety and establishing upskilling incentive structures'
      ],
      handsOnLab: 'Draft an updated Standard Operating Procedure (SOP) transforming a 5-step manual task into an AI-augmented flow.',
      founderDeliverable: 'Human-in-the-Loop Operating Protocol & Employee Training Charter.'
    },
    {
      moduleNumber: 6,
      title: 'Ethical Governance, Algorithmic Risk & Capstone AI Strategy Plan',
      duration: 'Week 6 (8 hrs)',
      topics: [
        'Algorithmic bias, regulatory disclosure compliance, and consumer trust preservation',
        'Intellectual property ownership of synthetic assets and corporate indemnification',
        'Formulating corporate AI Acceptable Use Policies (AUP) and cyber hygiene guardrails',
        'Synthesizing capstone strategic execution roadmap for startup scale'
      ],
      handsOnLab: 'Execute a red-team risk assessment scenario simulating model failure in production.',
      founderDeliverable: 'Comprehensive Capstone Strategy Blueprint: 12-Month Startup AI Execution Plan.'
    }
  ],

  'deeplearning-ai-for-everyone': [
    {
      moduleNumber: 1,
      title: 'What is AI? Core Terminology & Technical Demystification',
      duration: 'Module 1 (~2.5 hrs)',
      topics: [
        'What machine learning can and cannot practically do today',
        'Non-technical definition of training data, inference, and algorithmic prediction',
        'Understanding structured vs. unstructured datasets (tabular vs. audio/images/text)',
        'Translating intuitive business problems into crisp machine learning problem formulations'
      ],
      handsOnLab: 'Classify 10 startup operational bottlenecks into "Feasible with current AI" vs. "Requires deterministic engineering".',
      founderDeliverable: 'Feasibility Scoring Matrix for Startup Backlog Items.'
    },
    {
      moduleNumber: 2,
      title: 'Building AI Projects: The Machine Learning Lifecycle',
      duration: 'Module 2 (~2.5 hrs)',
      topics: [
        'The 6 phases of a production ML project: scoping, data, modeling, deployment, monitoring, feedback',
        'How to write clear functional requirements that bridge business vision and data science',
        'Defining proof-of-concept (POC) success metrics: accuracy vs. latency vs. financial impact',
        'Budgeting engineering sprints and setting realistic iteration milestones'
      ],
      handsOnLab: 'Draft a Technical Project Charter for an MVP feature with acceptance criteria for freelance engineers.',
      founderDeliverable: 'Developer-Ready AI Feature Specification Brief.'
    },
    {
      moduleNumber: 3,
      title: 'Building AI in Your Company: Data Strategy & First Quick Wins',
      duration: 'Module 3 (~2.5 hrs)',
      topics: [
        'Formulating an incremental data acquisition flywheel without capital expenditure',
        'The "Virtuous Circle of AI": more users -> more telemetry data -> better model -> more users',
        'Selecting quick-win pilot projects to demonstrate immediate internal ROI',
        'Building cross-functional trust between product, marketing, and engineering teams'
      ],
      handsOnLab: 'Map your startup’s current customer touchpoints to identify uncaptured, high-value proprietary telemetry data.',
      founderDeliverable: 'Startup Data Flywheel Blueprint & 30-Day Quick Win Pilot Plan.'
    },
    {
      moduleNumber: 4,
      title: 'AI and Society: Bias, Fairness, and Realistic Future Trajectories',
      duration: 'Module 4 (~2.5 hrs)',
      topics: [
        'Recognizing historical bias encoded in training datasets and customer logs',
        'Adversarial attacks, hallucinations, and critical failure modes in client-facing applications',
        'Job displacement vs. task augmentation in startup headcount planning',
        'Framework for continuous model evaluation in changing market conditions'
      ],
      handsOnLab: 'Perform a fairness and bias audit on a hypothetical automated loan or hiring screening rubric.',
      founderDeliverable: 'Startup Responsible AI Policy & Quality Assurance Checklist.'
    }
  ],

  'microsoft-ai-business-professional': [
    {
      moduleNumber: 1,
      title: 'Enterprise Copilot Architecture & Secure Tenant Governance',
      duration: 'Prep Module 1 (4 hrs)',
      topics: [
        'Microsoft 365 Copilot architecture, semantic index, and Microsoft Graph integration',
        'Tenant data boundaries, GDPR/SOC-2 compliance, and enterprise data protection guarantees',
        'Access controls, sensitivity labels, and preventing accidental internal data leakage',
        'Admin center configuration and user licensing optimization'
      ],
      handsOnLab: 'Configure Microsoft Graph privacy boundaries and audit user group prompt permissions.',
      founderDeliverable: 'Enterprise AI Security & Data Boundary Protocol.'
    },
    {
      moduleNumber: 2,
      title: 'Advanced Prompt Engineering for Knowledge Workers',
      duration: 'Prep Module 2 (5 hrs)',
      topics: [
        'Goal-Context-Expectation-Source prompt design framework for high-precision business outputs',
        'Prompt chaining across Word, Excel, PowerPoint, and Outlook for multi-document synthesis',
        'Grounding generative output in internal SharePoint documentation and ERP logs',
        'Overcoming semantic drift and refining executive tone'
      ],
      handsOnLab: 'Build a repeatable prompt sequence generating an investor update from Teams transcripts and Excel tables.',
      founderDeliverable: 'Company Master Prompt Library (15 Tested Operational Prompts).'
    },
    {
      moduleNumber: 3,
      title: 'Building Autonomous Copilot Studio Agents Without Code',
      duration: 'Prep Module 3 (6 hrs)',
      topics: [
        'Designing conversational flows and intent triggers in Microsoft Copilot Studio',
        'Connecting custom connectors and Power Automate workflows to external CRM/SQL databases',
        'Implementing conditional branching, variable persistence, and fallback escalation',
        'Testing and publishing agents across Microsoft Teams, web portals, and mobile apps'
      ],
      handsOnLab: 'Construct an autonomous internal IT & HR onboarding agent with dynamic SharePoint search grounding.',
      founderDeliverable: 'Working Copilot Studio Custom Agent Prototype & Deployment Architecture.'
    },
    {
      moduleNumber: 4,
      title: 'Operational Analytics & AB-730 Exam Certification Synthesis',
      duration: 'Prep Module 4 (5 hrs)',
      topics: [
        'Measuring time-savings and adoption metrics via Microsoft Copilot Dashboard in Viva Insights',
        'Change management frameworks to drive daily active usage across cross-functional teams',
        'Comprehensive review of AB-730 exam competencies and case question breakdowns',
        'Continuous agent lifecycle management and quarterly prompt auditing'
      ],
      handsOnLab: 'Execute simulated AB-730 certification mock exams under timed proctored conditions.',
      founderDeliverable: 'Verified Microsoft AB-730 Exam Readiness Scorecard & ROI Calculator.'
    }
  ],

  'duke-ai-for-product-management': [
    {
      moduleNumber: 1,
      title: 'AI Product Strategy & Probabilistic Thinking for Product Leaders',
      duration: 'Week 1 (5 hrs)',
      topics: [
        'Deterministic vs. probabilistic product design: managing user expectations with uncertain outputs',
        'Value proposition mapping: when machine learning is an essential differentiator vs. vanity feature',
        'Defining Key Product Indicators (KPIs) for AI: accuracy, latency, coverage, and user retention',
        'Designing graceful fallback UI/UX when confidence scores fall below thresholds'
      ],
      handsOnLab: 'Draft a Probabilistic Product Requirements Document (PRD) for an AI-powered search or recommendation feature.',
      founderDeliverable: 'AI Product Requirements Document (PRD) with Confidence Fallback Protocols.'
    },
    {
      moduleNumber: 2,
      title: 'Data Pipelines, Telemetry & User Feedback Loops',
      duration: 'Week 2 (5 hrs)',
      topics: [
        'Designing implicit and explicit user feedback mechanisms (thumbs up/down, dwell time, edits)',
        'Instrumentation of telemetry pipelines to identify prompt hallucinations and edge case failures',
        'Building proprietary evaluation datasets from user corrections (data flywheel architecture)',
        'Session recording analysis and qualitative friction mapping for generative interfaces'
      ],
      handsOnLab: 'Instrument an event tracking taxonomy in an analytics schema to monitor generative feature quality.',
      founderDeliverable: 'Product Telemetry & Model Drift Monitoring Architecture Specification.'
    },
    {
      moduleNumber: 3,
      title: 'AI UX Design: Confidence Scoring, Explainability & User Trust',
      duration: 'Week 3 (5 hrs)',
      topics: [
        'Designing transparency interfaces: showing citations, confidence ratings, and model reasoning',
        'Latency UX: progressive rendering, skeleton loaders, streaming animations, and perceived speed',
        'Guiding user prompting through in-context chips, templates, and auto-complete suggestions',
        'Mitigating user churn following occasional incorrect or nonsensical generation outputs'
      ],
      handsOnLab: 'Design a Figma wireframe flow incorporating streaming text, inline citation chips, and error recovery.',
      founderDeliverable: 'UX Design System Spec for Generative AI User Interfaces.'
    },
    {
      moduleNumber: 4,
      title: 'Model Evaluation, A/B Testing & Production Deployment',
      duration: 'Week 4 (5 hrs)',
      topics: [
        'Offline evaluation (benchmarks, golden test sets) vs. Online evaluation (A/B testing, user conversion)',
        'Building continuous automated regression testing for system prompts and fine-tuned models',
        'Shadow deployments, canary rollouts, and prompt versioning pipelines',
        'Calculating feature unit economics: inference cost per active user vs. lifetime value (LTV)'
      ],
      handsOnLab: 'Set up an automated prompt evaluation harness comparing model variants against 25 golden test cases.',
      founderDeliverable: 'Production AI Launch & Model A/B Testing Verification Framework.'
    }
  ],

  'applied-genai-marketing-communication': [
    {
      moduleNumber: 1,
      title: 'Brand Identity Vectorization & Advanced Visual Prompting',
      duration: 'Week 1 (4 hrs)',
      topics: [
        'Prompt engineering syntax in Midjourney v6, Stable Diffusion, and Adobe Firefly',
        'Controlling camera lens, aspect ratio, lighting temperature, and stylistic consistency',
        'Generating photorealistic product placements and lifestyle shots with seed locking',
        'Creating multi-asset brand design systems without expensive 3D studio rendering'
      ],
      handsOnLab: 'Create a 10-piece cohesive product hero image catalog for a new brand using Midjourney parameters.',
      founderDeliverable: 'Complete Startup Brand Visual Asset Pack & Photographic Style Bible.'
    },
    {
      moduleNumber: 2,
      title: 'Full-Funnel Copywriting & Semantic SEO Clustering',
      duration: 'Week 2 (4 hrs)',
      topics: [
        'Training Claude 3.5 Sonnet and ChatGPT on brand voice guidelines, positioning, and tone rules',
        'Automated semantic content clustering and topical authority mapping for organic SEO dominance',
        'Generating high-converting ad copy variations across Meta, Google Ads, and LinkedIn Sponsored Content',
        'Repurposing pillar content (podcasts, whitepapers) into 20+ omnichannel micro-assets'
      ],
      handsOnLab: 'Build an automated SEO content cluster matrix targeting 50 high-intent transactional buyer keywords.',
      founderDeliverable: 'Brand Voice Prompt System & 30-Day Omnichannel Marketing Campaign Calendar.'
    },
    {
      moduleNumber: 3,
      title: 'Dynamic Video, Audio Synthesis & Virtual Spokesperson Production',
      duration: 'Week 3 (4 hrs)',
      topics: [
        'AI video generation using Runway Gen-3, Kling, and HeyGen for digital video ads',
        'Voice cloning and multilingual localization using ElevenLabs for global reach',
        'Scripting high-retention hooks and storytelling patterns for short-form video (TikTok, Reels, Shorts)',
        'Automated captioning, b-roll assembly, and audio mastering pipelines'
      ],
      handsOnLab: 'Produce a 30-second localized video advertisement using a synthetic voice and AI-generated b-roll.',
      founderDeliverable: 'Multi-Language Video Ad Creative & Production Pipeline Documentation.'
    },
    {
      moduleNumber: 4,
      title: 'Marketing Automation, Dynamic Personalization & Performance Optimization',
      duration: 'Week 4 (4 hrs)',
      topics: [
        'Connecting generative models to email automation engines (Klaviyo AI, Mailchimp)',
        'Dynamic creative optimization (DCO) and automated multivariate ad testing on Meta Ads',
        'Measuring Customer Acquisition Cost (CAC) reduction and Return on Ad Spend (ROAS)',
        'Establishing copyright verification, brand safety guardrails, and asset governance'
      ],
      handsOnLab: 'Set up an automated personalized email sequence tailored dynamically to 3 distinct buyer personas.',
      founderDeliverable: 'Automated Lifecycle Email Sequence & Paid Acquisition Testing Architecture.'
    }
  ],

  'mit-xpro-process-automation-agentic': [
    {
      moduleNumber: 1,
      title: 'From Prompting to Autonomous Multi-Step Agentic Architectures',
      duration: 'Week 1 (6 hrs)',
      topics: [
        'Limitations of zero-shot single-turn prompting in complex operational workflows',
        'Agentic design patterns: Reflection, Tool Use, Planning, and Multi-Agent Collaboration',
        'Reasoning paradigms: ReAct (Reason + Act), Chain-of-Thought (CoT), and Tree-of-Thoughts',
        'Selecting the right orchestration framework: Make.com, Zapier Central, AutoGen, or CrewAI'
      ],
      handsOnLab: 'Map a multi-step manual operational process into discrete agent roles, memory stores, and tool access.',
      founderDeliverable: 'Operational Decomposition Diagram for Multi-Agent Automation.'
    },
    {
      moduleNumber: 2,
      title: 'No-Code & Low-Code Webhook Automation with Make.com & Zapier',
      duration: 'Week 2 (6 hrs)',
      topics: [
        'Building complex scenario pipelines with multi-branch routing, error handlers, and loops',
        'Connecting REST APIs, webhooks, and SaaS platforms (Slack, HubSpot, Airtable, Notion)',
        'Integrating frontier LLMs as dynamic decision nodes within deterministic workflows',
        'Managing rate limits, retries, exponential backoff, and state persistence'
      ],
      handsOnLab: 'Build an end-to-end automated customer lead enrichment and slack notification scenario in Make.com.',
      founderDeliverable: 'Production Make.com Scenario Blueprint & API Credential Configuration Guide.'
    },
    {
      moduleNumber: 3,
      title: 'Deploying Multi-Agent Teams with CrewAI & Python Tool Wrappers',
      duration: 'Week 3 (7 hrs)',
      topics: [
        'Defining specialized agents: Role, Goal, Backstory, and allowed Toolkits in CrewAI',
        'Task dependencies: sequential execution, hierarchical manager delegation, and asynchronous tasks',
        'Equipping agents with custom web search, document scraping, and database query tools',
        'Preventing infinite loops, hallucinated tool arguments, and output formatting failures'
      ],
      handsOnLab: 'Deploy a 3-agent CrewAI pipeline that researches competitors, synthesizes findings, and drafts a report.',
      founderDeliverable: 'Functional Multi-Agent System Repository & Configuration Specification.'
    },
    {
      moduleNumber: 4,
      title: 'Human-in-the-Loop Oversight, Guardrails & Production Observability',
      duration: 'Week 4 (7 hrs)',
      topics: [
        'Designing approval checkpoints: when agents require human sign-off before committing actions',
        'Logging and telemetry for autonomous agents: tracking token costs, latency, and step counts',
        'Implementing guardrail frameworks (NeMo Guardrails, Llama Guard) against prompt injection',
        'Continuous monitoring, regression testing, and scaling agentic systems for enterprise volume'
      ],
      handsOnLab: 'Build a Slack-based human approval loop for high-risk agent actions (e.g. sending emails or payments).',
      founderDeliverable: 'Production Observability & Human-in-the-Loop Security Architecture Protocol.'
    }
  ],

  'wharton-data-analysis-decision-making': [
    {
      moduleNumber: 1,
      title: 'Transforming Unstructured Business Data into Quantitative Intelligence',
      duration: 'Week 1 (5 hrs)',
      topics: [
        'Uploading and interpreting messy transaction logs, CSVs, and customer survey data using Code Interpreter',
        'Automated data cleaning: handling missing values, standardizing dates, and outlier detection',
        'Exploratory data analysis (EDA) driven by conversational natural language prompts',
        'Formulating rigorous hypotheses without cherry-picking statistical anomalies'
      ],
      handsOnLab: 'Clean a corrupted 50,000-row e-commerce transaction dataset and generate an automated statistical summary.',
      founderDeliverable: 'Automated Data Audit Report & Clean Analytical Dataset.'
    },
    {
      moduleNumber: 2,
      title: 'Predictive Modeling & Customer Behavior Segmentation',
      duration: 'Week 2 (5 hrs)',
      topics: [
        'Building customer cohort retention curves and identifying inflection churn periods',
        'Unsupervised clustering (K-Means) to identify hidden high-value customer archetypes',
        'Feature importance analysis: discovering the exact product behaviors that drive lifetime value (LTV)',
        'Translating statistical coefficients into non-technical commercial recommendations'
      ],
      handsOnLab: 'Run survival analysis on user event logs using Julius AI to calculate exact day-30 churn probability.',
      founderDeliverable: 'Customer Segmentation & Churn Risk Prediction Dashboard.'
    },
    {
      moduleNumber: 3,
      title: 'Forecasting, Scenario Modeling & Pricing Sensitivity',
      duration: 'Week 3 (6 hrs)',
      topics: [
        'Time-series forecasting for revenue, inventory requirements, and cash runway projections',
        'Running Monte Carlo sensitivity simulations to stress-test unit economics against market shocks',
        'Price elasticity modeling using historical sales volume data and competitor pricing benchmarks',
        'Building dynamic what-if simulation sandboxes for strategic leadership meetings'
      ],
      handsOnLab: 'Build a 12-month predictive revenue forecast model incorporating seasonal variance and churn rates.',
      founderDeliverable: 'Dynamic Revenue & Runway Simulation Model.'
    },
    {
      moduleNumber: 4,
      title: 'Executive Data Storytelling & Investor-Ready Dashboards',
      duration: 'Week 4 (6 hrs)',
      topics: [
        'Distilling complex econometric analysis into clear, defensible executive narratives',
        'Designing high-contrast visual charts following Stephen Few and Tufte visualization principles',
        'Automating monthly investor update reporting with auto-generated chart commentary',
        'Answering challenging data diligence questions from venture capital partners with confidence'
      ],
      handsOnLab: 'Create an executive data dashboard in Tableau AI or Julius AI summarizing key startup growth metrics.',
      founderDeliverable: 'Executive Growth Metrics Dashboard & Investor Diligence Data Memorandum.'
    }
  ],

  'harvard-storytelling-narrative-ai': [
    {
      moduleNumber: 1,
      title: 'Foundations of Strategic Narrative & Thesis Formulation',
      duration: 'Week 1 (4 hrs)',
      topics: [
        'Classic narrative arcs in venture fundraising: The Urgent Shift, The Heroic Solution, The Inevitable Moat',
        'Using Claude and Perplexity to interrogate the foundational assumptions of your startup thesis',
        'Formulating the "Category King" narrative: defining a new category vs. competing on price',
        'Aligning startup messaging with specific venture capital investment fund mandates'
      ],
      handsOnLab: 'Craft a 1-page Core Investment Thesis and Category Definition Narrative using structured prompt chains.',
      founderDeliverable: 'Core Investment Narrative & Strategic Category Manifesto.'
    },
    {
      moduleNumber: 2,
      title: 'Market Sizing, Competitive Intelligence & TAM Synthesis',
      duration: 'Week 2 (4 hrs)',
      topics: [
        'Synthesizing 200+ pages of industry research, analyst reports, and SEC filings with Perplexity Pro',
        'Calculating Top-Down and Bottom-Up Total Addressable Market (TAM) with verified data citations',
        'Building 2x2 competitive positioning maps that highlight defensible proprietary advantages',
        'Extracting competitor weakness insights from G2, Trustpilot, and customer review datasets'
      ],
      handsOnLab: 'Perform an AI-assisted deep dive on 3 competitors and build a defensible bottom-up TAM model.',
      founderDeliverable: 'Institutional-Grade Market Opportunity & Competitive Moat Dossier.'
    },
    {
      moduleNumber: 3,
      title: 'Iterative Pitch Deck Generation & Slide Visual Architecture',
      duration: 'Week 3 (4 hrs)',
      topics: [
        'Rapid slide outline generation using Gamma App and Beautiful.ai',
        'Translating complex technical architecture diagrams into clear visual metaphors for non-technical investors',
        'The 12 essential pitch deck slides: Problem, Solution, Why Now, Market, Product, Traction, Team, Financials',
        'Designing visual hierarchy, eliminating cognitive clutter, and optimizing for 3-minute investor scans'
      ],
      handsOnLab: 'Generate and refine a complete 12-slide investor pitch deck in Gamma App from a markdown outline.',
      founderDeliverable: '12-Slide Investor Pitch Deck in Presentation & PDF Formats.'
    },
    {
      moduleNumber: 4,
      title: 'Investor Diligence FAQ Repository & Live Pitch Simulation',
      duration: 'Week 4 (4 hrs)',
      topics: [
        'Generating 50 tough partner-meeting objection questions using Claude acting as a skeptical Series A partner',
        'Drafting bulletproof answers grounded in unit economics, customer interviews, and defensibility',
        'Building an investor-facing Notion AI data room and interactive FAQ bot',
        'Rehearsing verbal pitch delivery, time pacing, and emotional storytelling inflection points'
      ],
      handsOnLab: 'Run a simulated partner-meeting Q&A session against an AI persona configured as a cynical Tier-1 VC.',
      founderDeliverable: 'Investor Diligence FAQ Repository (50 Answered Questions) & Data Room Index.'
    }
  ],

  'oxford-iapp-ai-governance-compliance': [
    {
      moduleNumber: 1,
      title: 'Global AI Regulatory Landscape & The EU AI Act',
      duration: 'Week 1 (6 hrs)',
      topics: [
        'The EU AI Act risk classification: Prohibited, High-Risk, General Purpose AI (GPAI), and Minimal Risk',
        'Obligations for startup providers vs. deployers of AI systems in European and global markets',
        'Compliance timelines, enforcement mechanisms, and penalty structures (up to €35M or 7% of turnover)',
        'Extraterritorial reach: how global startups selling into the EU are impacted regardless of location'
      ],
      handsOnLab: 'Classify your startup’s AI features against the EU AI Act Risk Tier classification tree.',
      founderDeliverable: 'EU AI Act Risk Classification & Compliance Applicability Report.'
    },
    {
      moduleNumber: 2,
      title: 'NIST AI Risk Management Framework (AI RMF 1.0) Implementation',
      duration: 'Week 2 (6 hrs)',
      topics: [
        'The NIST AI RMF core functions: Govern, Map, Measure, and Manage',
        'Identifying sociotechnical risks: algorithmic bias, safety, privacy, explainability, and security',
        'Establishing internal AI risk tolerance thresholds and key risk indicators (KRIs) for product launches',
        'Integrating risk assessments into existing Agile development sprints without slowing R&D velocity'
      ],
      handsOnLab: 'Complete a NIST AI RMF Map and Measure worksheet for a production generative feature.',
      founderDeliverable: 'NIST AI RMF Startup Compliance Assessment & Risk Register.'
    },
    {
      moduleNumber: 3,
      title: 'Data Privacy, Intellectual Property & Model Ingestion Safeguards',
      duration: 'Week 3 (6 hrs)',
      topics: [
        'GDPR and CCPA implications: Right to Explanation, Automated Decision-Making, and Data Subject Access Requests (DSARs)',
        'Preventing accidental ingestion of proprietary customer data into public foundation model training runs',
        'Intellectual property ownership of AI-generated content and software code: current copyright legal precedent',
        'Negotiating enterprise vendor agreements: indemnification clauses, zero-data-retention APIs, and SLA standards'
      ],
      handsOnLab: 'Audit third-party model API terms of service (OpenAI, Anthropic, Google) for enterprise data retention terms.',
      founderDeliverable: 'Customer Data Processing Addendum (DPA) & Zero-Retention Architecture Spec.'
    },
    {
      moduleNumber: 4,
      title: 'Algorithmic Fairness, Bias Auditing & Synthetic Anonymization',
      duration: 'Week 4 (6 hrs)',
      topics: [
        'Statistical metrics for algorithmic fairness: demographic parity, equalized odds, and disparate impact',
        'Implementing automated PII scrubbing (Presidio, regex filters) before sending data to LLM inference endpoints',
        'Synthetic data generation techniques for balancing skewed training datasets without compromising privacy',
        'Documenting model cards and data provenance sheets for regulatory and client inspection'
      ],
      handsOnLab: 'Deploy a PII scrubbing gateway pipeline that strips names, emails, and identifiers from prompt payloads.',
      founderDeliverable: 'Algorithmic Bias Audit Report & PII Redaction Pipeline Architecture.'
    },
    {
      moduleNumber: 5,
      title: 'Cybersecurity, Jailbreaking & Adversarial Defenses',
      duration: 'Week 5 (6 hrs)',
      topics: [
        'OWASP Top 10 for Large Language Model Applications: prompt injection, insecure output handling, data poisoning',
        'Direct and indirect prompt injection attacks: how malicious users can manipulate agent execution',
        'Implementing dual-LLM verification architectures and input validation filters',
        'Building secure API authentication, rate limiting, and incident response playbooks'
      ],
      handsOnLab: 'Conduct penetration testing on a customer-facing chatbot using known prompt injection attack libraries.',
      founderDeliverable: 'AI System Penetration Test Report & Input Sanitation Protocols.'
    },
    {
      moduleNumber: 6,
      title: 'Enterprise Trust Dossiers & Accelerating Corporate Procurement',
      duration: 'Week 6 (6 hrs)',
      topics: [
        'How Fortune 500 security and legal teams evaluate startup AI vendors during RFP evaluations',
        'Assembling an audit-ready "Enterprise AI Trust Dossier" to eliminate security redlines and speed sales',
        'Formulating an ongoing AI Ethics Committee charter and incident disclosure policy',
        'Positioning proactive governance as a decisive competitive moat over less-compliant competitors'
      ],
      handsOnLab: 'Assemble a complete vendor security assessment questionnaire response package for enterprise buyers.',
      founderDeliverable: 'Enterprise AI Trust Dossier & Audit-Ready Security Packet.'
    }
  ],

  'hubspot-ai-sales-customer-success': [
    {
      moduleNumber: 1,
      title: 'Modern AI Revenue Engines & Prospecting Intelligence',
      duration: 'Module 1 (~2 hrs)',
      topics: [
        'The transition from manual outbound sales to AI-orchestrated intent targeting',
        'Using Apollo.ai, Clay, and ChatSpot to discover high-intent buyer accounts and trigger events',
        'Scraping job postings, funding announcements, and tech-stack signals for hyper-personalized outreach',
        'Calculating outbound conversion economics: reply rates, positive sentiment, and meetings booked'
      ],
      handsOnLab: 'Build an automated list of 100 enriched target accounts using intent signals and demographic filters.',
      founderDeliverable: 'Target Account List with Verified Intent Signals & Enriched Decision-Maker Contacts.'
    },
    {
      moduleNumber: 2,
      title: 'Hyper-Personalized Cold Outreach & Inbound Lead Scoring',
      duration: 'Module 2 (~2 hrs)',
      topics: [
        'Engineering multi-touch cold email sequences that pass spam filters and read authentically',
        'Dynamic lead scoring using predictive behavioral models to prioritize hot inbound leads for founders',
        'A/B testing subject lines, hooks, and call-to-actions (CTAs) using generative variation algorithms',
        'Complying with CAN-SPAM, GDPR, and email provider deliverability regulations'
      ],
      handsOnLab: 'Draft a 4-step personalized email sequence with dynamic merge tags driven by company news feeds.',
      founderDeliverable: 'Dynamic 4-Step Cold Outreach Campaign & Lead Scoring Rubric.'
    },
    {
      moduleNumber: 3,
      title: 'Conversational Intelligence & AI-Assisted Deal Closing',
      duration: 'Module 3 (~2 hrs)',
      topics: [
        'Leveraging Gong.ai and HubSpot AI for call transcription, deal sentiment, and objection tracking',
        'Real-time battlecards and competitive counter-objections suggested during live sales conversations',
        'Automating meeting follow-up notes, CRM deal stage updates, and personalized executive summaries',
        'Identifying pipeline risks: spotting stalled deals, ghosting signals, and competitor mentions early'
      ],
      handsOnLab: 'Analyze a recorded sales call transcript to extract competitor objections and generate follow-up proposals.',
      founderDeliverable: 'Automated Post-Call Follow-Up Workflow & Objection Handling Battlecards.'
    },
    {
      moduleNumber: 4,
      title: '24/7 Tier-1 Autonomous Support & Knowledge Base Grounding',
      duration: 'Module 4 (~2 hrs)',
      topics: [
        'Deploying customer support chatbots grounded in verified company documentation (Zendesk AI, ChatSpot)',
        'Structuring FAQ databases, API documentation, and help articles for zero-hallucination semantic search',
        'Designing seamless human escalation protocols when sentiment turns negative or billing issues arise',
        'Tracking Customer Satisfaction (CSAT), First Contact Resolution (FCR), and ticket deflection rates'
      ],
      handsOnLab: 'Index a 20-page product support knowledge base and test query resolution accuracy on 20 common tickets.',
      founderDeliverable: 'Automated 24/7 Customer Support Agent Architecture & Human Escalation Rules.'
    }
  ],

  'deeplearning-bubble-nocode-ai-app-dev': [
    {
      moduleNumber: 1,
      title: 'Rapid Generative UI Prototyping with v0.dev & Tailwind CSS',
      duration: 'Week 1 (5 hrs)',
      topics: [
        'Prompting v0.dev and Claude Artifacts to generate production-ready React/Tailwind components',
        'Iterative component refinement: tuning padding, color schemes, responsive layouts, and state toggles',
        'Exporting clean frontend code and integrating into modern web application shells',
        'Compressing design-to-prototype cycles from weeks to under 60 minutes'
      ],
      handsOnLab: 'Generate a complete responsive 4-screen SaaS application UI (dashboard, analytics, settings, profile) in v0.',
      founderDeliverable: 'Interactive Frontend UI Prototype with Polished Responsive Components.'
    },
    {
      moduleNumber: 2,
      title: 'Relational Database Design & Backend Logic in Bubble.io / Supabase',
      duration: 'Week 2 (6 hrs)',
      topics: [
        'Designing normalized relational data tables (Users, Organizations, Subscriptions, Items, Activity)',
        'Configuring Row-Level Security (RLS) and privacy rules to protect multi-tenant customer data',
        'Building backend workflows, scheduled cron triggers, and transactional database mutations',
        'Integrating Stripe Checkout and customer portal for subscription monetization'
      ],
      handsOnLab: 'Build a multi-tenant relational database schema in Bubble or Supabase with role-based access control.',
      founderDeliverable: 'Multi-Tenant Database Architecture & Stripe Billing Integration.'
    },
    {
      moduleNumber: 3,
      title: 'Connecting Frontier AI Endpoints: Streaming LLM Responses & API Proxying',
      duration: 'Week 3 (6 hrs)',
      topics: [
        'Configuring the Bubble API Connector to call OpenAI, Anthropic, or Gemini endpoints',
        'Securely managing API keys via backend proxy workflows to prevent client-side exposure',
        'Handling streaming responses, token chunking, and progressive UI rendering for snappy user experience',
        'Implementing JSON mode and function calling / tool definitions for structured database updates'
      ],
      handsOnLab: 'Connect an OpenAI structured JSON endpoint that parses user text inputs directly into database records.',
      founderDeliverable: 'Working Backend AI Integration with Secure Key Proxy & Streaming Output.'
    },
    {
      moduleNumber: 4,
      title: 'MVP Launch, Analytics Instrumentation & Domain Deployment',
      duration: 'Week 4 (5 hrs)',
      topics: [
        'Setting up custom domains, SSL certificates, SEO meta tags, and OpenGraph social cards',
        'Instrumenting product telemetry: tracking user signups, activation funnel steps, and feature usage',
        'Conducting load testing, error logging, and setting up bug alert notifications',
        'Executing a Product Hunt, Reddit, and LinkedIn launch playbook for day-1 paying users'
      ],
      handsOnLab: 'Deploy the complete no-code AI web application to a live custom URL with functional payments and authentication.',
      founderDeliverable: 'Live Production SaaS MVP on Custom Domain with Active Stripe Subscriptions.'
    }
  ],

  'cfi-wallstreetprep-genai-financial-modeling': [
    {
      moduleNumber: 1,
      title: 'AI-Enhanced Financial Statements & Formula Automation',
      duration: 'Session 1 (3 hrs)',
      topics: [
        'Accelerating 3-statement financial modeling (Income Statement, Balance Sheet, Cash Flow) using Excel Copilot',
        'Generating complex dynamic formulas (XLOOKUP, INDEX/MATCH, nested logic) with natural language prompts',
        'Automated reconciliations and balance sheet balancing error detection algorithms',
        'Structuring dynamic driver-based revenue build schedules (cohorts, ARPU, churn, expansion)'
      ],
      handsOnLab: 'Build an automated 36-month integrated 3-statement financial model from a raw historical trial balance.',
      founderDeliverable: 'Dynamic 3-Statement Startup Financial Model with Driver Assumptions.'
    },
    {
      moduleNumber: 2,
      title: 'Runway Forecasting, Burn Multiple & Working Capital Stress-Testing',
      duration: 'Session 2 (4 hrs)',
      topics: [
        'Calculating Gross Burn, Net Burn, and Burn Multiple benchmarks for venture-backed startups',
        'Forecasting cash runway under conservative, base, and aggressive hiring/spend scenarios',
        'Working capital management: optimizing Accounts Receivable (DSO) and Accounts Payable (DPO)',
        'Automating variance analysis comparing budgeted forecasts vs. actual bank statement expenditures'
      ],
      handsOnLab: 'Build an automated monthly budget-vs-actuals variance report that flags department overspending via AI.',
      founderDeliverable: 'Runway Forecast Model with Automated Monthly Variance Flagging.'
    },
    {
      moduleNumber: 3,
      title: 'Monte Carlo Simulations & Stochastic Risk Modeling',
      duration: 'Session 3 (4 hrs)',
      topics: [
        'Why point-estimate forecasts fail: introducing probabilistic financial modeling',
        'Configuring 1,000-iteration Monte Carlo simulations for price volatility, sales cycles, and churn',
        'Identifying probability of cash depletion at 6, 12, and 18-month horizons',
        'Simulating foreign exchange (FX) risk, tariff shocks, and supply chain minimum order quantity (MOQ) shifts'
      ],
      handsOnLab: 'Run a Monte Carlo simulation in Python/Excel modeling the impact of component price swings on gross margins.',
      founderDeliverable: 'Stochastic Risk Simulation & Cash Depletion Probability Distribution.'
    },
    {
      moduleNumber: 4,
      title: 'Cap Table Waterfall Dilution & Valuation Intelligence',
      duration: 'Session 4 (4 hrs)',
      topics: [
        'Modeling SAFE note conversions, valuation caps, discounts, and pre-money vs. post-money dilution',
        'Building dynamic equity waterfall distribution models for Series Seed, A, and B rounds',
        'Benchmarking startup valuation multiples against public and private comparable transactions using FinChat.io',
        'Generating investor-grade financial memorandum charts and key metrics summaries'
      ],
      handsOnLab: 'Model an institutional Series A round with multiple SAFE conversions and employee option pool expansions.',
      founderDeliverable: 'Venture Capital Dilution Waterfall & Valuation Benchmark Dossier.'
    }
  ]
};
