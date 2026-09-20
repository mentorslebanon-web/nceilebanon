/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AiCourseCaseStudy } from '../types';

export const COURSE_DEEP_CASE_STUDIES: Record<string, Partial<AiCourseCaseStudy>> = {
  'mit-sloan-ai-business-strategy': {
    baselineProblem: 'A fast-growing FinTech digital bank was experiencing severe user onboarding drop-off. Over 42% of applicants abandoned the registration flow due to manual 3-day verification delays, while compliance backlogs were forcing the company to hire 8 full-time verification officers at an annual cost of $320,000.',
    solutionArchitecture: 'Instead of investing $120,000 in custom computer vision models, leadership applied MIT Sloan evaluation frameworks to adopt commercial off-the-shelf OCR and biometric liveness verification APIs connected via event webhooks, backed by an automated human-in-the-loop exception queue.',
    stepByStepImplementation: [
      'Week 1: Conducted workflow audit, identifying document parsing and facial match as the 80/20 bottleneck.',
      'Week 2: Evaluated 4 managed biometric vendors against SOC-2, latency, and false-rejection rate benchmarks.',
      'Week 3: Implemented webhook event architecture routing high-confidence passes (>94%) directly to database activation.',
      'Week 4: Built internal supervisor dashboard routing ambiguous edge cases to a single human compliance officer.'
    ],
    quantifiedResults: [
      { metric: 'Onboarding Latency', before: '72 Hours (Manual Review)', after: '45 Seconds (Instant Automated Pass)', impact: '99% faster' },
      { metric: 'Applicant Drop-off Rate', before: '42% Abandonment', after: '14% Abandonment', impact: '66% reduction' },
      { metric: 'Annual Compliance Payroll', before: '$320,000 (8 FTEs)', after: '$65,000 (1 FTE Supervisor)', impact: '$255k saved/year' },
      { metric: 'Upfront R&D Saved', before: '$120,000 budget', after: '$0 custom model training', impact: '$120,000 capital preserved' }
    ],
    founderQuote: '"The MIT framework saved us from building an expensive proprietary machine learning science division when a reliable managed API gateway delivered superior accuracy in 1/10th the time."',
    keyInsight: 'In non-differentiating compliance infrastructure, managed API integration combined with strict exception thresholds will beat custom model development in speed, accuracy, and capital efficiency every time.'
  },

  'deeplearning-ai-for-everyone': {
    baselineProblem: 'An e-commerce store with 20,000 SKUs relied on static, hardcoded category banners on checkout pages. Cross-selling was purely manual, conversion rates on recommendations hovered at a dismal 0.8%, and the founder could not justify a $150k data science hire.',
    solutionArchitecture: 'Following Andrew Ng’s AI For Everyone methodology, the founder mapped checkout event streams into a clean PostgreSQL relational schema and hired a freelance engineer for 2 weeks to deploy an open-source collaborative filtering model on AWS Lambda.',
    stepByStepImplementation: [
      'Days 1–3: Mapped raw Shopify order logs into normalized item-to-item co-occurrence tables.',
      'Days 4–7: Deployed an open-source collaborative filtering script trained on 18 months of historical cart data.',
      'Days 8–11: Built an automated checkout webhook delivering 3 personalized cross-sell recommendations.',
      'Days 12–14: Ran an A/B test across 5,000 incoming customer sessions to measure basket size lift.'
    ],
    quantifiedResults: [
      { metric: 'Average Order Value (AOV)', before: '$44.50 per order', after: '$54.30 per order', impact: '+22% higher' },
      { metric: 'Recommendation CTR', before: '0.8% click-through', after: '5.4% click-through', impact: '6.75x increase' },
      { metric: 'Engineering Spend', before: '$150k estimated quote', after: '$3,800 contractor build', impact: '97% cost avoidance' },
      { metric: 'Deployment Timeline', before: '6-month planned project', after: '14 days to production', impact: '10x faster launch' }
    ],
    founderQuote: '"Learning how machine learning models actually process tabular inputs demystified the whole discipline. I went from feeling intimidated to giving our contractor an airtight 2-page specification that paid for itself in 72 hours."',
    keyInsight: 'You do not need a PhD or deep neural networks to extract massive financial value from your business data; simple normalized SQL tables and proven open-source recommenders deliver 80% of the ROI.'
  },

  'microsoft-ai-business-professional': {
    baselineProblem: 'A B2B enterprise software startup was experiencing sluggish 45-day sales cycles. Sales representatives spent 18 hours per week manually writing call summaries, hunting for product specs across SharePoint, and tailoring proposal slides, causing deals to stall and lose momentum.',
    solutionArchitecture: 'Trained the 6-person sales force on Microsoft 365 Copilot prompt architecture. Implemented Copilot Studio agents connected to internal pricing tables and CRM data, enabling instant post-call proposal generation within 5 minutes of meeting termination.',
    stepByStepImplementation: [
      'Week 1: Configured Microsoft Graph security boundaries and deployed Microsoft Copilot licenses to sales reps.',
      'Week 2: Standardized 4 multi-prompt sequences converting recorded Teams meeting transcripts into executive proposals.',
      'Week 3: Created an internal Copilot Studio sales-assistant agent answering technical RFPs from verified security docs.',
      'Week 4: Instrumented deal progression speed and response times inside HubSpot CRM.'
    ],
    quantifiedResults: [
      { metric: 'Average Sales Cycle Length', before: '45 Days', after: '28 Days', impact: '38% latency reduction' },
      { metric: 'Weekly Admin Time per Rep', before: '18 Hours / week', after: '4 Hours / week', impact: '14 hrs freed for active selling' },
      { metric: 'Post-Call Proposal Turnaround', before: '48–72 Hours delay', after: '< 15 Minutes', impact: 'Real-time client momentum' },
      { metric: 'Quarterly Win Rate', before: '21% closed-won', after: '31% closed-won', impact: '+10% absolute gain' }
    ],
    founderQuote: '"By automating the administrative drag of RFP responses and proposal synthesis, our reps doubled their active prospect calls while sending out more personalized, error-free proposals than ever before."',
    keyInsight: 'Deal velocity is the single largest lever in B2B sales; eliminating proposal latency turns meeting enthusiasm into signed agreements before buyer urgency evaporates.'
  },

  'duke-ai-for-product-management': {
    baselineProblem: 'An EdTech adaptive learning startup was struggling with user retention. Students dropped off when automated math exercises became either too easy or frustratingly difficult. Because the team lacked probabilistic feedback loops, the algorithm could not detect user struggle until session abandonment.',
    solutionArchitecture: 'Applied Duke AI Product Management principles to establish probabilistic confidence bands and user telemetry loops. Built an adaptive prompt routing layer that dynamically diagnosed student frustration and served contextual hint micro-prompts before escalating difficulty.',
    stepByStepImplementation: [
      'Sprint 1: Drafted a probabilistic PRD defining explicit latency, difficulty confidence, and fallback hint triggers.',
      'Sprint 2: Instrumented telemetry tracking response latency, mouse dwell times, and repeated question edits.',
      'Sprint 3: Connected an LLM hint generator that provided Socratic clues rather than giving away direct answers.',
      'Sprint 4: Rolled out feature via an A/B test against 2,000 active students and analyzed completion curves.'
    ],
    quantifiedResults: [
      { metric: 'Student Session Completion', before: '54% completion', after: '88% completion', impact: '+34% improvement' },
      { metric: 'Weekly Active Engagement', before: '18 minutes / day', after: '31 minutes / day', impact: '+72% time on platform' },
      { metric: 'Frustration Churn Rate', before: '28% 30-day drop-off', after: '11% 30-day drop-off', impact: '60% churn reduction' },
      { metric: 'User NPS Rating', before: '+24 NPS', after: '+58 NPS', impact: 'Massive organic advocacy' }
    ],
    founderQuote: '"Duke taught us how to design products for probabilistic outcomes. Instead of treating AI as a magical black box, we designed confidence thresholds and fallback UI that made the platform feel empathetic and responsive."',
    keyInsight: 'When building AI products, how you handle low-confidence edge cases defines the entire user experience; great fallback UX creates user trust where brittle outputs destroy it.'
  },

  'applied-genai-marketing-communication': {
    baselineProblem: 'A bootstrapped direct-to-consumer beverage startup had only $5,000 remaining in cash reserves for launch marketing. Digital creative agencies quoted $12,000 upfront plus a $3,500 monthly retainer for a standard 10-shot product photoshoot and ad creative suite.',
    solutionArchitecture: 'The founder used Midjourney v6 with seed-locked parameters to generate 30 high-end studio lifestyle photographs in varied regional settings. Claude 3.5 Sonnet generated 50 tailored ad copy variations, which were deployed directly into Meta Dynamic Creative ad sets.',
    stepByStepImplementation: [
      'Day 1: Formulated the brand photography style bible in Midjourney using specific lens, f-stop, and lighting prompts.',
      'Day 2: Generated 30 photorealistic lifestyle scene variations placing the product in urban, fitness, and office settings.',
      'Day 3: Prompt-engineered 50 hook variations in Claude targeting 3 distinct buyer personas (professionals, students, athletes).',
      'Days 4–7: Launched Meta Dynamic Creative campaigns testing 5 images x 5 copies x 2 headlines per ad set.'
    ],
    quantifiedResults: [
      { metric: 'Customer Acquisition Cost (CAC)', before: '$42.00 (industry benchmark)', after: '$27.30 (actual)', impact: '35% cheaper acquisition' },
      { metric: 'Agency Retainer Spend', before: '$15,500 quoted cost', after: '$0 agency fees ($90 AI tools)', impact: '$15,400 cash preserved' },
      { metric: 'Creative Production Time', before: '4–6 Weeks agency turnaround', after: '72 Hours from idea to live ads', impact: '10x agility' },
      { metric: 'First-Month ROAS', before: '1.2x estimated return', after: '3.4x verified ROAS', impact: 'Immediately profitable' }
    ],
    founderQuote: '"As a bootstrapped founder with no budget, AI leveled the playing field. In three days, our creative output matched the visual polish of venture-backed competitors spending $50k on agency retainers."',
    keyInsight: 'The combination of high-fidelity visual generation and automated copy variations enables micro-budget startups to discover winning ad creatives faster than legacy agency cycles.'
  },

  'mit-xpro-process-automation-agentic': {
    baselineProblem: 'A freight brokerage startup processed hundreds of incoming bill-of-lading and customs declaration PDFs daily. Dispatchers manually transcribed shipment data into ERP tables, verified route availability across driver spreadsheets, and emailed quote proposals, averaging 45 minutes per order.',
    solutionArchitecture: 'Architected a 3-tier autonomous agent workflow using CrewAI and Make.com. Agent A extracts OCR shipment data from PDF attachments; Agent B checks capacity in PostgreSQL and calculates pricing; Agent C drafts invoice emails and alerts dispatchers via Slack for single-click approval.',
    stepByStepImplementation: [
      'Week 1: Documented order processing SOP and established JSON schemas for bill-of-lading data extraction.',
      'Week 2: Built Make.com scenario intercepting incoming dispatch emails and passing PDFs to a vision LLM extractor.',
      'Week 3: Deployed CrewAI agent container calculating route margins and checking live driver GPS availability.',
      'Week 4: Implemented a Slack interactive button interface where human dispatchers approve quotes with one click.'
    ],
    quantifiedResults: [
      { metric: 'Per-Order Processing Time', before: '45 Minutes manual labor', after: '1.8 Minutes total duration', impact: '96% time compression' },
      { metric: 'Order Entry Error Rate', before: '6.2% data entry errors', after: '0.3% error rate', impact: '20x accuracy increase' },
      { metric: 'Daily Orders Processed per FTE', before: '12 orders / day', after: '95 orders / day', impact: '近8x throughput multiplier' },
      { metric: 'Dispatcher Overtime Cost', before: '$4,800 / month', after: '$0 / month', impact: '100% overtime eliminated' }
    ],
    founderQuote: '"Moving from single prompt interactions to multi-agent orchestrated workflows transformed our logistics operation from a chaotic manual bottleneck into an autonomous freight engine."',
    keyInsight: 'Do not automate everything at once; design your agents to perform 90% of the cognitive heavy lifting while leaving the final 10% confirmation decision to an empowered human dispatcher.'
  },

  'wharton-data-analysis-decision-making': {
    baselineProblem: 'A B2B SaaS startup with 4,000 accounts had an alarming 90-day churn rate of 28%. The executive team debated conflicting hypotheses: the marketing team blamed poor lead quality, while product blamed missing features. Neither had empirical data proof.',
    solutionArchitecture: 'Using Wharton quantitative methodologies, the founder uploaded 500,000 raw customer event logs into Julius AI and Code Interpreter. The AI executed survival analysis and feature importance regressions, discovering that users who failed to integrate custom Slack webhooks within 72 hours churned at an 80% higher rate.',
    stepByStepImplementation: [
      'Day 1: Consolidated Mixpanel clickstream logs and Stripe billing histories into normalized CSV files.',
      'Day 2: Ran multi-variable survival curves in Julius AI, isolating the onboarding window as the critical pivot point.',
      'Day 3: Discovered the "Slack integration" feature was the single highest predictor of 12-month account retention.',
      'Days 4–14: Redesigned the onboarding wizard to mandate Slack setup on day 1, deploying automated concierge email triggers.'
    ],
    quantifiedResults: [
      { metric: '90-Day Account Churn', before: '28% customer loss', after: '10% customer loss', impact: '18% absolute churn reduction' },
      { metric: 'Net Revenue Retention (NRR)', before: '88% contraction', after: '114% expansion', impact: '+26% NRR turnaround' },
      { metric: 'Annual Recurring Revenue (ARR) Saved', before: '$180,000 projected loss', after: '$180k retained + expansion', impact: '$240k total value created' },
      { metric: 'Time to Identify Root Cause', before: '4 Months executive debate', after: '4 Hours conversational analysis', impact: 'Instant strategic clarity' }
    ],
    founderQuote: '"The Wharton framework ended months of internal finger-pointing in an afternoon. Seeing statistical proof of our churn bottleneck allowed us to focus all our engineering horsepower on the single feature that truly mattered."',
    keyInsight: 'Customer churn is rarely caused by missing features; it is almost always caused by onboarding failure to reach the core inflection moment where product value becomes indispensable.'
  },

  'harvard-storytelling-narrative-ai': {
    baselineProblem: 'A clinical AI HealthTech startup had compelling diagnostic accuracy metrics but was struggling to raise institutional capital. Founders gave dense 45-slide technical presentations laden with medical jargon, leaving venture capitalists confused about commercial defensibility and market sizing.',
    solutionArchitecture: 'Applied Harvard storytelling strategy frameworks using Claude 3.5 Sonnet and Gamma App. Synthesized 200 pages of clinical trials and Medicare reimbursement filings into a crisp 12-slide Category-King narrative showcasing urgency, defensibility, and immediate monetization.',
    stepByStepImplementation: [
      'Week 1: Interrogated the core startup thesis using Claude, stripping academic jargon and reframing around hospital ROI.',
      'Week 2: Sized bottom-up Total Addressable Market (TAM) with Perplexity Pro, citing Medicare CPT billing codes.',
      'Week 3: Designed a 12-slide high-contrast visual deck in Gamma App emphasizing unit economics and clinical validation.',
      'Week 4: Built an AI-simulated partner interrogation bot to rehearse answers to the 50 toughest venture diligence questions.'
    ],
    quantifiedResults: [
      { metric: 'Time to Close Seed Round', before: '6 Months without commitments', after: '6 Weeks to full subscription', impact: 'Closed $1.5M syndicate' },
      { metric: 'Deck Length & Scan Time', before: '45 slides (25 min presentation)', after: '12 slides (6 min crisp delivery)', impact: '75% cognitive decluttering' },
      { metric: 'Partner Meeting Conversion', before: '1 in 14 partners interested', after: '1 in 3 partners proceeding to term sheet', impact: '4.6x higher conversion' },
      { metric: 'Term Sheets Received', before: '0 term sheets', after: '3 competing venture term sheets', impact: 'Founder valuation leverage' }
    ],
    founderQuote: '"Investors don\'t fund confusing technologies; they fund clear, inevitable commercial stories. Learning how to translate deep medicine into a compelling investment narrative changed our trajectory overnight."',
    keyInsight: 'Clarity is the ultimate venture funding weapon; when you can explain complex proprietary technology in simple terms that prove commercial inevitability, capital flows effortlessly.'
  },

  'oxford-iapp-ai-governance-compliance': {
    baselineProblem: 'An AI-powered automated talent evaluation startup saw its enterprise sales pipeline stall. Fortune 500 corporate prospects loved the product demo but procurement security teams blocked every contract with 90-day compliance reviews regarding algorithmic bias, the EU AI Act, and data privacy.',
    solutionArchitecture: 'Completed the Oxford AI Governance program to build an audit-ready "Enterprise AI Trust Dossier". Preemptively implemented the NIST AI RMF framework, synthetic anonymization pipelines, and automated EEOC/EU conformity scorecards.',
    stepByStepImplementation: [
      'Weeks 1–2: Audited all scoring models against the EU AI Act High-Risk Annex and NIST AI RMF governance matrices.',
      'Weeks 3–4: Deployed automated PII redaction and synthetic demographic balancing to eliminate statistical disparate impact.',
      'Weeks 5–6: Packaged security architecture, model cards, and external bias audit reports into an online compliance portal.'
    ],
    quantifiedResults: [
      { metric: 'Enterprise Procurement Cycle', before: '90–120 Days in security legal', after: '14 Days average turnaround', impact: 'Closed deals 2x to 4x faster' },
      { metric: 'Security Redline Rate', before: '100% of contracts redlined', after: 'Zero redlines on AI ethics', impact: 'Frictionless legal review' },
      { metric: 'Average Contract Value (ACV)', before: '$35,000 SMB average', after: '$120,000 Enterprise tier', impact: '3.4x higher deal sizes' },
      { metric: 'Enterprise RFP Win Rate', before: '18% won against competitors', after: '64% won against incumbents', impact: 'Governance as key moat' }
    ],
    founderQuote: '"Proactive compliance was our biggest competitive differentiator. While legacy competitors dragged their feet on AI regulation, our audit-ready Oxford-aligned trust dossier made enterprise procurement an absolute breeze."',
    keyInsight: 'In enterprise B2B sales, compliance is not a bureaucratic overhead cost—it is the ultimate sales accelerant that unlocks multi-million dollar institutional budgets.'
  },

  'hubspot-ai-sales-customer-success': {
    baselineProblem: 'A fast-growing B2B wholesale marketplace served buyers across 14 time zones with only 2 support staff. Inbound buyer inquiries outside of standard operating hours suffered 14-hour response delays, resulting in lost $10,000+ purchase orders to regional competitors.',
    solutionArchitecture: 'Following HubSpot Academy frameworks, the startup indexed 1,200 product technical spec sheets and shipping policies into a vector-grounded support agent integrated into Zendesk and ChatSpot, backed by automated buyer intent scoring.',
    stepByStepImplementation: [
      'Week 1: Standardized 1,200 product PDF catalog specs into clean markdown knowledge base articles.',
      'Week 2: Configured Zendesk AI agent with semantic vector search and strict boundary guardrails against hallucinated prices.',
      'Week 3: Created an automated VIP routing rule connecting orders >$5,000 directly to on-call founder phone notifications.',
      'Week 4: Monitored real-time resolution accuracy across 500 live customer conversations.'
    ],
    quantifiedResults: [
      { metric: 'Tier-1 Ticket Instant Resolution', before: '0% (all required humans)', after: '70% resolved autonomously in <30s', impact: 'Instant 24/7 global support' },
      { metric: 'Average Response Time', before: '14 Hours overnight delay', after: '22 Seconds global average', impact: '99.9% faster response' },
      { metric: 'After-Hours Order Conversion', before: '12% conversion', after: '38% conversion', impact: '+26% after-hours revenue' },
      { metric: 'Support Headcount Needed', before: '6 planned hires ($240k/yr)', after: '0 additional hires needed', impact: '$240,000 payroll avoidance' }
    ],
    founderQuote: '"Our 2-person team now supports global enterprise buyers round-the-clock with higher customer satisfaction scores than when we attempted to handle every ticket manually."',
    keyInsight: 'Grounding customer service AI strictly in verified product documentation eliminates hallucination fears and turns customer support from a cost center into a 24/7 revenue engine.'
  },

  'deeplearning-bubble-nocode-ai-app-dev': {
    baselineProblem: 'A solo non-technical entrepreneur identified a lucrative opportunity in automated property management. However, software development agencies quoted $45,000 to $80,000 and 4 months of development just to deliver an initial web MVP, far exceeding her personal savings.',
    solutionArchitecture: 'Used v0.dev to generate clean React/Tailwind frontend layouts in minutes and integrated them into Bubble.io with a Supabase relational backend. Connected the OpenAI API to parse and categorize tenant repair tickets, deploying the live SaaS in 48 hours for under $50 in domain and hosting fees.',
    stepByStepImplementation: [
      'Day 1 (Morning): Generated the tenant portal, landlord dashboard, and dispatch views using natural language in v0.dev.',
      'Day 1 (Afternoon): Built the database schema in Bubble with users, properties, maintenance tickets, and contractor contacts.',
      'Day 2 (Morning): Connected OpenAI API to extract urgency, appliance model, and issue category from tenant photos and text.',
      'Day 2 (Evening): Integrated Stripe billing and launched on LinkedIn and local real estate investor groups.'
    ],
    quantifiedResults: [
      { metric: 'MVP Development Cost', before: '$60,000 agency estimate', after: '$48 (hosting & domain)', impact: '99.9% capital saved' },
      { metric: 'Time to Market', before: '16 Weeks planned agency wait', after: '48 Hours from concept to live', impact: '56x faster launch' },
      { metric: 'First Paying Customers', before: '0 customers', after: '5 Landlords signed in 48 hours', impact: 'Instant revenue validation' },
      { metric: 'Monthly Software Overhead', before: '$1,500 dedicated servers', after: '$32/mo scalable no-code tier', impact: 'Near-zero ongoing burn' }
    ],
    founderQuote: '"I proved my product had real paying customers before spending a single dollar on software engineers. The combination of v0 and Bubble gives solo founders superpower speed."',
    keyInsight: 'In modern startup creation, speed of customer feedback beats engineering perfection; launch a functional no-code AI MVP in days rather than waiting months for custom software.'
  },

  'cfi-wallstreetprep-genai-financial-modeling': {
    baselineProblem: 'A hardware IoT startup was ramping production for a major retail launch. The founders were using a static Excel sheet with single-point cost estimates, blind to foreign exchange shifts and raw component price volatility. When shipping rates spiked, the company faced sudden emergency cash insolvency.',
    solutionArchitecture: 'Applied CFI financial modeling techniques using Excel Copilot and Python Monte Carlo simulation engines. Built an integrated 3-statement financial model simulating 1,000 stochastic price fluctuation runs across raw materials, supplier minimum orders, and shipping timelines.',
    stepByStepImplementation: [
      'Week 1: Unified historical trial balances and bill-of-materials into an automated 3-statement model using Excel Copilot.',
      'Week 2: Configured a Monte Carlo simulation engine modeling 15% swings in component costs and shipping delays.',
      'Week 3: Identified an invisible cash-flow depletion cliff occurring at month 7 under 68% of simulated market scenarios.',
      'Week 4: Used simulation findings to renegotiate supplier payment terms from Net 30 to Net 60 and secured a non-dilutive credit facility.'
    ],
    quantifiedResults: [
      { metric: 'Insolvency Risk Detection', before: 'Blind until 2 weeks before cashout', after: 'Identified bottleneck 6 months early', impact: 'Prevented emergency collapse' },
      { metric: 'Emergency Dilution Avoided', before: '$240k dilutive down-round', after: '$0 equity given away', impact: 'Preserved founder equity' },
      { metric: 'Working Capital Extension', before: '3.5 Months runway buffer', after: '9.2 Months stabilized runway', impact: '+5.7 months cash extension' },
      { metric: 'Supplier Payment Terms', before: 'Net 30 with upfront deposits', after: 'Net 60 without prepayments', impact: 'Doubled operational liquidity' }
    ],
    founderQuote: '"Financial AI modeling saved our company from catastrophic emergency dilution. The Monte Carlo simulation showed us our cash cliff when our bank balance still looked comfortable, giving us time to negotiate with suppliers from a position of strength."',
    keyInsight: 'Point-estimate financial forecasts lie because startup realities are volatile; running probabilistic AI simulations reveals the invisible cash traps that kill growing companies.'
  }
};
