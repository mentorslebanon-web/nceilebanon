export type PageId = 
  | 'home'
  | 'competencies'
  | 'architecture'
  | 'livenexus'
  | 'guilds-dev'
  | 'leadership'
  | 'national-cv'
  | 'startups'
  | 'neural-matcher'
  | 'yellow-pages'
  | 'policy-papers'
  | 'ai-courses'
  | 'admin-maan'
  | 'register';

export interface AiCourseModule {
  moduleNumber: number;
  title: string;
  duration: string;
  topics: string[];
  handsOnLab: string;
  founderDeliverable: string;
}

export interface AiCourseCaseStudy {
  title: string;
  industry: string;
  summary: string;
  impactMetric: string;
  impactHighlight: string;
  methodology: string;
  toolsUsed: string[];
  baselineProblem?: string;
  solutionArchitecture?: string;
  stepByStepImplementation?: string[];
  quantifiedResults?: {
    metric: string;
    before: string;
    after: string;
    impact: string;
  }[];
  founderQuote?: string;
  keyInsight?: string;
}

export interface AiCourseResourcePrompt {
  title: string;
  prompt: string;
  targetTool: string;
  purpose: string;
}

export interface AiCourseResourceTool {
  name: string;
  category: string;
  description: string;
  pricingTier: string;
}

export interface AiCourseResourceChecklist {
  phase: string;
  tasks: string[];
}

export interface AiCourseOfficialGuide {
  title: string;
  type: string;
  description: string;
  linkNote?: string;
}

export interface AiCourseResources {
  starterPrompts: AiCourseResourcePrompt[];
  recommendedTools: AiCourseResourceTool[];
  actionChecklist: AiCourseResourceChecklist[];
  officialGuides: AiCourseOfficialGuide[];
}

export interface AiCourseItem {
  id: string;
  number: number;
  title: string;
  provider: string;
  providerType: 'University' | 'BigTech' | 'Specialized Institute' | 'EdTech Platform';
  format: string;
  category: 'Strategy & Leadership' | 'Product & Engineering' | 'Marketing & Revenue' | 'Operations & Workflows' | 'Governance & Compliance' | 'Finance & Valuation';
  level: 'Foundational' | 'Intermediate' | 'Executive / Advanced';
  targetTools: string[];
  skills: string[];
  synopsis: string;
  caseStudy: AiCourseCaseStudy;
  duration: string;
  keyTakeaways: string[];
  recommendedForStage: ('Idea / MVP' | 'Seed Stage' | 'Growth / Scale-up' | 'Enterprise B2B')[];
  accreditationBadge?: string;
  syllabus?: AiCourseModule[];
  resources?: AiCourseResources;
}

export interface MemberDirectoryItem {
  id: string;
  name: string;
  title: string;
  organization: string;
  avatarUrl?: string;
  initials: string;
  role: 'Founder' | 'AI Researcher' | 'Software Architect' | 'Ecosystem Mentor' | 'Venture Investor' | 'Freelance Consultant';
  sector: 'FinTech' | 'HealthTech' | 'GovTech' | 'Enterprise AI' | 'Logistics' | 'LegalTech' | 'EdTech';
  location: string;
  phone?: string;
  email: string;
  website?: string;
  linkedin?: string;
  skills: string[];
  bio: string;
  badge: 'NCEI Verified' | 'Guild Lead' | 'GovTech Fellow' | 'Angel Syndicate' | 'Founding Member';
  tier: 'Public' | 'Scholar' | 'Penthouse / VIP';
  hourlyRate?: string;
  status: 'Available' | 'In Consultation' | 'Sabbatical';
  projectsCount: number;
  rating: number;
  dateJoined: string;
  featured?: boolean;
  approved: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'scholar' | 'freelancer' | 'guru' | 'enterprise' | 'admin';
  roleTitle: string;
  organization?: string;
  location?: string;
  phone?: string;
  avatar?: string;
  badge: string;
  tier: 'Public' | 'Scholar' | 'Penthouse' | 'Admin';
  allocatedComputeCredits: number;
  verified: boolean;
  isAdmin?: boolean;
}

export interface VettingSubmission {
  id: string;
  name: string;
  email: string;
  organization: string;
  guildId: string;
  guildName: string;
  proposedUseCase: string;
  tierRequested: string;
  status: 'Pending Review' | 'Approved' | 'Rejected';
  dateSubmitted: string;
  allocatedCompute: string;
}

export interface Competency {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  deliverables: string[];
  impactMetric: string;
}

export interface DeploymentProject {
  id: string;
  category: 'tech-ai' | 'biz-dev' | 'marketplaces';
  categoryLabel: string;
  subcategory: string;
  title: string;
  description: string;
  technologies: string[];
  metrics?: string;
  status: 'Live & Scaled' | 'Enterprise Active' | 'Commercialized' | 'Regional Deployment';
  badgeColor?: string;
}

export interface LiveChannel {
  id: string;
  name: string;
  tier: 'public' | 'scholar' | 'penthouse';
  tierLabel: string;
  description: string;
  activeUsers: number;
  unreadCount?: number;
  isEncrypted?: boolean;
}

export interface LiveMessage {
  id: string;
  channelId: string;
  sender: string;
  role: string;
  avatar: string;
  timestamp: string;
  content: string;
  badge?: string;
  isAiBot?: boolean;
}

export interface Guild {
  id: string;
  name: string;
  sector: 'FinTech' | 'Healthcare' | 'Legal Tech' | 'GovTech';
  description: string;
  regulatoryStandard: string;
  dataCooperativeName: string;
  sandboxFeatures: string[];
  membersCount: number;
  status: string;
}

export interface StartupItem {
  id: string;
  name: string;
  domain: string;
  role: string;
  timeline: string;
  description: string;
  focusAreas: string[];
  metrics: string;
  url?: string;
}

export interface NationalMilestone {
  id: string;
  title: string;
  entity: string;
  date: string;
  scope: string;
  description: string;
  keyOutputs: string[];
  impactMetric: string;
}

export interface MatcherProfile {
  type: 'scholar' | 'freelancer' | 'guru' | 'enterprise';
  title: string;
  subtitle: string;
  recommendedPrograms: string[];
  suggestedGuilds: string[];
  suggestedNexusChannel: string;
  allocatedCompute: string;
  nextSteps: string[];
}
