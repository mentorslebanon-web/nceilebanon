import { MemberDirectoryItem, VettingSubmission } from '../types';

export const SEED_YELLOW_PAGES_MEMBERS: MemberDirectoryItem[] = [
  {
    id: "mem_maan_01",
    name: "Maan El-Khatib",
    title: "Chief AI Architect & Ecosystem Lead",
    organization: "NCEI Lebanon / AlKhawarizmi Solutions",
    initials: "MK",
    role: "AI Researcher",
    sector: "Enterprise AI",
    location: "Beirut Central District, Lebanon",
    phone: "+961 70 939 779",
    email: "maan@961ai.network",
    website: "https://961ai.network",
    linkedin: "linkedin.com/in/maan-elkhatib",
    skills: ["Multi-Agent Architecture", "RAG Pipelines", "Arabic NLP", "Sovereign AI", "Vector DBs"],
    bio: "Pioneering sovereign multi-agent RAG fabrics, Arabic jurisprudence LLMs, and emergency public health systems across Lebanon and the Levant.",
    badge: "Guild Lead",
    tier: "Penthouse / VIP",
    hourlyRate: "$175/hr",
    status: "Available",
    projectsCount: 38,
    rating: 4.98,
    dateJoined: "January 2024",
    featured: true,
    approved: true
  },
  {
    id: "mem_nour_02",
    name: "Dr. Nour Al-Hajj",
    title: "Head of Computational Genomics & Healthcare AI",
    organization: "American University of Beirut Medical Center (AUBMC)",
    initials: "NH",
    role: "AI Researcher",
    sector: "HealthTech",
    location: "Hamra, Beirut, Lebanon",
    phone: "+961 1 350 000",
    email: "nour.hajj@aubmc.edu.lb",
    website: "https://aubmc.edu.lb",
    skills: ["Clinical NLP", "HIPAA Data Cooperatives", "FHIR Standards", "Bio-Informatics"],
    bio: "Specializing in zero-PII medical knowledge indexing and federated learning protocols for Lebanese healthcare providers.",
    badge: "NCEI Verified",
    tier: "Scholar",
    hourlyRate: "$140/hr",
    status: "Available",
    projectsCount: 19,
    rating: 4.95,
    dateJoined: "March 2024",
    featured: true,
    approved: true
  },
  {
    id: "mem_karim_03",
    name: "Karim Boulos",
    title: "Venture Partner & FinTech Strategist",
    organization: "Levant Capital Syndicate",
    initials: "KB",
    role: "Venture Investor",
    sector: "FinTech",
    location: "Achrafieh, Beirut, Lebanon",
    phone: "+961 71 228 901",
    email: "karim@levantcapital.vc",
    website: "https://levantcapital.vc",
    skills: ["BDL Circular 158/165 Compliance", "Cross-Border Escrows", "DeFi Bridges", "Angel Syndication"],
    bio: "Advising regional high-growth fintechs on monetary sovereignty, BDL compliance, and private credit structuring for local exporters.",
    badge: "Angel Syndicate",
    tier: "Penthouse / VIP",
    hourlyRate: "$220/hr",
    status: "In Consultation",
    projectsCount: 44,
    rating: 4.92,
    dateJoined: "February 2024",
    featured: true,
    approved: true
  },
  {
    id: "mem_sarah_04",
    name: "Sarah Tabbara",
    title: "Lead Multi-Agent Systems Engineer",
    organization: "Ballish Workspace / 961AI",
    initials: "ST",
    role: "Software Architect",
    sector: "Enterprise AI",
    location: "Tripoli, North Lebanon",
    phone: "+961 76 450 119",
    email: "sarah.tabbara@ballish.ai",
    skills: ["LangGraph", "LlamaIndex", "Distributed Inference", "vLLM", "Docker Swarm"],
    bio: "Architect of high-concurrency tool-calling supervisor meshes and sub-millisecond Milvus hybrid vector index caches.",
    badge: "NCEI Verified",
    tier: "Scholar",
    hourlyRate: "$95/hr",
    status: "Available",
    projectsCount: 26,
    rating: 4.97,
    dateJoined: "April 2024",
    featured: false,
    approved: true
  },
  {
    id: "mem_ziad_05",
    name: "Ziad Mouawad",
    title: "Founder & CEO",
    organization: "LogisticsIQ Levant",
    initials: "ZM",
    role: "Founder",
    sector: "Logistics",
    location: "Dbayeh, Mount Lebanon",
    phone: "+961 4 542 800",
    email: "ziad@logisticsiq.me",
    website: "https://logisticsiq.me",
    skills: ["Dynamic Route AI", "Cold-Chain Telemetry", "Supply Chain Optimization", "Border Clearing APIs"],
    bio: "Modernizing freight routing and micro-warehousing across Beirut Port, Tripoli SEZ, and regional Levantine overland lanes.",
    badge: "Founding Member",
    tier: "Penthouse / VIP",
    hourlyRate: "$150/hr",
    status: "Available",
    projectsCount: 15,
    rating: 4.88,
    dateJoined: "January 2024",
    featured: true,
    approved: true
  },
  {
    id: "mem_layla_06",
    name: "Layla Choucair, Esq.",
    title: "Managing Partner & Legal Tech Architect",
    organization: "Choucair & Associates / Al-Hakam",
    initials: "LC",
    role: "Ecosystem Mentor",
    sector: "LegalTech",
    location: "Badaro, Beirut, Lebanon",
    phone: "+961 1 385 410",
    email: "layla@choucairlaw.com",
    skills: ["Lebanese Commercial Code", "AI Intellectual Property", "Arabic Statute RAG", "Data Sovereignty"],
    bio: "Lead legal researcher for the Al-Hakam bilingual jurisprudence database, guiding founders through sovereign IP patents.",
    badge: "GovTech Fellow",
    tier: "Scholar",
    hourlyRate: "$180/hr",
    status: "Available",
    projectsCount: 31,
    rating: 4.99,
    dateJoined: "May 2024",
    featured: false,
    approved: true
  },
  {
    id: "mem_hadi_07",
    name: "Hadi Kanso",
    title: "Senior Full-Stack & Smart Contract Auditor",
    organization: "Freelance / 961 Escrow Hub",
    initials: "HK",
    role: "Freelance Consultant",
    sector: "GovTech",
    location: "Saida, South Lebanon",
    phone: "+961 7 724 339",
    email: "hadi.kanso@security-audit.me",
    skills: ["Red Teaming", "Rust", "Zero-Knowledge Proofs", "TypeScript", "Penetration Testing"],
    bio: "Top-ranked security auditor in the 961AI Red Teaming roster, specializing in adversarial prompt defense and Escrow smart vaults.",
    badge: "NCEI Verified",
    tier: "Public",
    hourlyRate: "$85/hr",
    status: "Available",
    projectsCount: 22,
    rating: 4.91,
    dateJoined: "June 2024",
    featured: false,
    approved: true
  },
  {
    id: "mem_maya_08",
    name: "Maya Geagea",
    title: "Director of EdTech & Workforce Transformation",
    organization: "zappcademy.xyz",
    initials: "MG",
    role: "Ecosystem Mentor",
    sector: "EdTech",
    location: "Jounieh, Keserwan, Lebanon",
    phone: "+961 9 931 205",
    email: "maya@zappcademy.xyz",
    website: "https://zappcademy.xyz",
    skills: ["AI Upskilling", "Youth Mentorship", "Curriculum Architecture", "Grant Syndication"],
    bio: "Spearheading national workforce upskilling for 3,000+ university graduates across Lebanese universities in prompt engineering and autonomous agents.",
    badge: "Guild Lead",
    tier: "Scholar",
    hourlyRate: "$110/hr",
    status: "Available",
    projectsCount: 28,
    rating: 4.96,
    dateJoined: "February 2024",
    featured: true,
    approved: true
  },
  // Additional 96 verified national directory members to support 100+ entities directory virtualization
  ...Array.from({ length: 96 }, (_, i) => {
    const idx = i + 9;
    const names = [
      "Dr. Ziad Khoury", "Nadine Chammas", "Elie Nassar", "Samira Gemayel", "Tarek Mansour", 
      "Layla Kassir", "Georges Abi Rached", "Hiba Sfeir", "Walid Haddad", "Rania Aoun",
      "Fadi Tannous", "Dima Barakat", "Charbel Salameh", "Sarah Daher", "Marwan Sleiman",
      "Nour Traboulsi", "Rami Ghosn", "Celine Atallah", "Jad Maalouf", "Christelle Eid",
      "Bassam Chahine", "Zeina Hajj", "Karim Cortas", "Yasmina Azar", "Marc Matar",
      "Lara Boustany", "Wassim Fayad", "Rima Kanaan", "Sami Mouawad", "Nour Farhat",
      "Zahi Abou-Jaoude", "Mirna Touma", "Rabih Rahme", "Nathalie Najjar", "Ibrahim Zeidan",
      "Carla Safi", "Fouad Merhi", "Dalia Chidiac", "Tony Boueri", "Maya Alamuddin",
      "Kamal Sfeir", "Joelle Sawaya", "Ghassan Rizk", "Tala Oueida", "Pierre Choueiri",
      "Nour Houri", "Patrick Khairallah", "Soraya Helou", "Elias Tabbal", "Rita Keyrouz"
    ];
    const name = names[i % names.length] + (i >= names.length ? ` (Team ${Math.floor(i / names.length) + 1})` : '');
    const initials = name.split(' ').filter(w => !w.startsWith('(') && !w.startsWith('Dr.')).slice(0, 2).map(w => w[0]).join('');
    
    const roles: MemberDirectoryItem['role'][] = ['Founder', 'AI Researcher', 'Software Architect', 'Ecosystem Mentor', 'Venture Investor', 'Freelance Consultant'];
    const sectors: MemberDirectoryItem['sector'][] = ['Enterprise AI', 'FinTech', 'HealthTech', 'GovTech', 'Logistics', 'LegalTech', 'EdTech'];
    const locations = ['Beirut', 'Tripoli', 'Mount Lebanon', 'Saida', 'Diaspora / GCC'];
    
    const role = roles[i % roles.length];
    const sector = sectors[(i * 3) % sectors.length];
    const location = locations[(i * 2) % locations.length];

    const orgs = [
      'CedarsAI Labs', 'Beirut Vector Hub', 'AUB Computational Lab', 'LAU High Performance Group',
      'USJ Data Ethics Unit', 'Berytech Scale', 'Levant Sovereign AI', 'Almouwaten Core',
      'Phoenicia FinTech', 'Tripoli Mina Hub', 'Byblos RAG Technologies', 'Diaspora Venture Angels',
      'Digital Levant Consult', 'Saida Maritime Logistics AI', 'AUBMC Health Informatics', 'SmartGov Lebanon'
    ];
    const org = orgs[i % orgs.length];

    const skillsBank = [
      ['RAG Architectures', 'Vector Search', 'Python', 'FastAPI'],
      ['LLM Fine-Tuning', 'Arabic NLP', 'PyTorch', 'Transformers'],
      ['HIPAA Compliance', 'Clinical NLP', 'FHIR Protocols', 'Zero-PII'],
      ['FinTech', 'Smart Contracts', 'BDL Circular 165', 'Escrow Systems'],
      ['Civic Pipelines', 'n8n Automations', 'PostgreSQL', 'Docker'],
      ['Computer Vision', 'Edge Computing', 'YOLOv10', 'Robotics'],
      ['Venture Modeling', 'SAFE Notes', 'Angel Syndicates', 'M&A'],
      ['Red Teaming', 'Prompt Defense', 'Penetration Testing', 'Cybersecurity']
    ];
    const skills = skillsBank[i % skillsBank.length];

    const badges: MemberDirectoryItem['badge'][] = ['NCEI Verified', 'Guild Lead', 'Founding Member', 'Angel Syndicate', 'GovTech Fellow'];
    const badge = badges[i % badges.length];

    const rates = ['$95/hr', '$120/hr', '$150/hr', '$180/hr', '$220/hr', '$80/hr', 'Inquire'];
    const hourlyRate = rates[i % rates.length];

    return {
      id: `mem_dynamic_${String(idx).padStart(3, '0')}`,
      name,
      title: `${role === 'Founder' ? 'Co-Founder & CEO' : role === 'AI Researcher' ? 'Principal Scientist' : role === 'Software Architect' ? 'Lead Systems Architect' : role === 'Venture Investor' ? 'General Partner' : 'Senior Specialist'}`,
      organization: org,
      initials: initials || 'LB',
      role,
      sector,
      location,
      phone: `+961 ${70 + (i % 8)} ${(100000 + i * 8321).toString().slice(0, 6)}`,
      email: `${name.toLowerCase().replace(/[^a-z]/g, '.')}@${org.toLowerCase().replace(/[^a-z]/g, '')}.lb`,
      website: `https://${org.toLowerCase().replace(/[^a-z]/g, '')}.lb`,
      skills,
      bio: `Building sovereign Lebanese ${sector} solutions with a focus on verified ${skills[0]} and scalable regional enterprise architectures.`,
      badge,
      tier: (i % 3 === 0 ? 'Penthouse / VIP' : i % 2 === 0 ? 'Scholar' : 'Public') as MemberDirectoryItem['tier'],
      hourlyRate,
      status: (i % 7 === 0 ? 'Busy' : 'Available') as MemberDirectoryItem['status'],
      projectsCount: 8 + (i * 3) % 45,
      rating: Math.round((4.80 + (i % 20) * 0.01) * 100) / 100,
      dateJoined: `2024-0${1 + (i % 9)}`,
      featured: i % 11 === 0,
      approved: true
    };
  })
];

export const SEED_VETTING_APPLICATIONS: VettingSubmission[] = [
  {
    id: "vet_101",
    name: "Rami Haddad",
    email: "rami.h@cedarhealth.io",
    organization: "Cedar Health Analytics",
    guildId: "health-guild",
    guildName: "Healthcare & Life Sciences Guild",
    proposedUseCase: "Integrating oncology clinical trial synthetic datasets into private HIPAA sandbox.",
    tierRequested: "Tier 2: Governed Regulatory Sandbox",
    status: "Pending Review",
    dateSubmitted: "2026-09-17",
    allocatedCompute: "10,000 GPU-Tokens"
  },
  {
    id: "vet_102",
    name: "Yara Zein",
    email: "yara@byblosfin.com",
    organization: "Byblos Pay & Liquidity",
    guildId: "fintech-guild",
    guildName: "FinTech & Financial Services Guild",
    proposedUseCase: "Testing micro-settlements under BDL Circular 165 with Levant Data Cooperative.",
    tierRequested: "Tier 3: Exclusive Data Cooperative",
    status: "Pending Review",
    dateSubmitted: "2026-09-16",
    allocatedCompute: "25,000 GPU-Tokens"
  },
  {
    id: "vet_103",
    name: "Antoine Saliba",
    email: "antoine@jurislevant.ai",
    organization: "JurisLevant AI",
    guildId: "legal-guild",
    guildName: "Legal Tech & Governance Guild",
    proposedUseCase: "Arabic cross-encoder validation for commercial arbitration contracts in Lebanon.",
    tierRequested: "Tier 2: Governed Regulatory Sandbox",
    status: "Approved",
    dateSubmitted: "2026-09-14",
    allocatedCompute: "15,000 GPU-Tokens"
  }
];
