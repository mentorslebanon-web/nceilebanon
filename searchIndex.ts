import React, { useState } from 'react';
import { PageId, UserProfile, MemberDirectoryItem, VettingSubmission } from '../types';
import { 
  UserPlus, 
  LogIn, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Mail, 
  User, 
  Building, 
  MapPin, 
  Phone, 
  Cpu, 
  Key, 
  ArrowRight, 
  AlertCircle,
  Users,
  Server,
  FileCheck,
  Building2,
  Database,
  ExternalLink,
  LogOut
} from 'lucide-react';

interface RegistrationPageProps {
  currentUser: UserProfile | null;
  onSignIn: (user: UserProfile) => void;
  onSignOut: () => void;
  onRegisterMemberListing: (member: MemberDirectoryItem) => void;
  onRegisterVettingApp?: (app: VettingSubmission) => void;
  onNavigate: (page: PageId) => void;
  initialTab?: 'signup' | 'signin' | 'sandbox';
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({
  currentUser,
  onSignIn,
  onSignOut,
  onRegisterMemberListing,
  onRegisterVettingApp,
  onNavigate,
  initialTab = 'signup'
}) => {
  const [activeTab, setActiveTab] = useState<'signup' | 'signin' | 'sandbox'>(initialTab);

  // Sign In fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Sign Up fields
  const [fullName, setFullName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState<UserProfile['role']>('scholar');
  const [roleTitle, setRoleTitle] = useState('AI Researcher & System Architect');
  const [sector, setSector] = useState<MemberDirectoryItem['sector']>('Enterprise AI');
  const [location, setLocation] = useState('Beirut, Lebanon');
  const [phone, setPhone] = useState('+961 70 000 000');
  const [skills, setSkills] = useState('Python, RAG, PyTorch, Multi-Agent Systems');
  const [bio, setBio] = useState('Researcher working on sovereign LLMs and institutional machine learning pipelines in Lebanon.');
  const [addToYellowPages, setAddToYellowPages] = useState(true);

  // Sandbox Vetting fields
  const [vOrgName, setVOrgName] = useState('');
  const [vEmail, setVEmail] = useState('');
  const [vSector, setVSector] = useState<'FinTech' | 'Healthcare' | 'Legal Tech'>('FinTech');
  const [vTierRequested, setVTierRequested] = useState<'Tier 1' | 'Tier 2' | 'Tier 3'>('Tier 2');
  const [vUseCase, setVUseCase] = useState('');
  const [vNdaAccepted, setVNdaAccepted] = useState(false);
  const [isVettingSubmitted, setIsVettingSubmitted] = useState(false);

  // Handle Demo Personas
  const handleDemoSignIn = (presetRole: 'admin' | 'scholar' | 'founder' | 'freelancer') => {
    setErrorMsg('');
    if (presetRole === 'admin') {
      const adminUser: UserProfile = {
        id: 'usr_admin_maan',
        email: 'maan@961ai.network',
        name: 'Maan El-Khatib',
        role: 'admin',
        roleTitle: 'Chief AI Architect & Ecosystem Director',
        organization: 'NCEI Lebanon / 961AI',
        location: 'Beirut, Lebanon',
        phone: '+961 70 939 779',
        badge: 'Admin & Lead Architect',
        tier: 'Admin',
        allocatedComputeCredits: 100000,
        verified: true,
        isAdmin: true
      };
      onSignIn(adminUser);
      setSuccessMsg('Signed in successfully as Administrator Maan El-Khatib.');
    } else if (presetRole === 'scholar') {
      const scholarUser: UserProfile = {
        id: 'usr_scholar_nour',
        email: 'nour.hajj@aubmc.edu.lb',
        name: 'Dr. Nour Al-Hajj',
        role: 'scholar',
        roleTitle: 'Head of Clinical AI Research',
        organization: 'AUBMC',
        location: 'Hamra, Beirut, Lebanon',
        phone: '+961 1 350 000',
        badge: 'NCEI Verified Scholar',
        tier: 'Scholar',
        allocatedComputeCredits: 25000,
        verified: true
      };
      onSignIn(scholarUser);
      setSuccessMsg('Signed in successfully as Dr. Nour Al-Hajj.');
    } else if (presetRole === 'founder') {
      const founderUser: UserProfile = {
        id: 'usr_founder_ziad',
        email: 'ziad@logisticsiq.me',
        name: 'Ziad Mouawad',
        role: 'guru',
        roleTitle: 'Founder & Head of Product',
        organization: 'LogisticsIQ Levant',
        location: 'Tripoli, Lebanon',
        phone: '+961 6 200 000',
        badge: 'Venture Founder',
        tier: 'Penthouse',
        allocatedComputeCredits: 50000,
        verified: true
      };
      onSignIn(founderUser);
      setSuccessMsg('Signed in successfully as Ziad Mouawad.');
    } else {
      const freelancerUser: UserProfile = {
        id: 'usr_free_hadi',
        email: 'hadi@solidityaudit.lb',
        name: 'Hadi Kanso',
        role: 'freelancer',
        roleTitle: 'Smart Contract & Escrow Auditor',
        organization: 'Decentralized Audit Guild',
        location: 'Saida, Lebanon',
        phone: '+961 7 720 000',
        badge: 'GovTech Fellow',
        tier: 'Public',
        allocatedComputeCredits: 15000,
        verified: true
      };
      onSignIn(freelancerUser);
      setSuccessMsg('Signed in successfully as Hadi Kanso.');
    }
  };

  const handleManualSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!email || !password) {
      setErrorMsg('Please enter both your email and password.');
      return;
    }

    const isAdminLogin = email.toLowerCase().includes('maan') || password === 'Maan70939779';

    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      email: email.trim(),
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      role: isAdminLogin ? 'admin' : 'scholar',
      roleTitle: isAdminLogin ? 'Ecosystem Director' : 'Verified Member',
      organization: 'Lebanese AI Network',
      location: 'Beirut, Lebanon',
      badge: isAdminLogin ? 'Admin & Lead Architect' : 'NCEI Verified',
      tier: isAdminLogin ? 'Admin' : 'Scholar',
      allocatedComputeCredits: isAdminLogin ? 100000 : 15000,
      verified: true,
      isAdmin: isAdminLogin
    };

    onSignIn(newUser);
    setSuccessMsg(`Welcome back, ${newUser.name}!`);
  };

  const handleManualSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!fullName.trim() || !signUpEmail.trim()) {
      setErrorMsg('Full Name and Email are required.');
      return;
    }

    const initials = fullName
      .split(' ')
      .map(part => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    const roleMapping = {
      scholar: 'AI Researcher',
      freelancer: 'Software Architect',
      guru: 'Founder',
      enterprise: 'Ecosystem Mentor',
      admin: 'Software Architect'
    } as const;

    const directoryRole = roleMapping[role] as MemberDirectoryItem['role'];

    const newProfile: UserProfile = {
      id: `usr_${Date.now()}`,
      email: signUpEmail.trim(),
      name: fullName.trim(),
      role,
      roleTitle: roleTitle.trim() || 'AI Professional',
      organization: organization.trim() || 'Independent',
      location: location.trim() || 'Beirut, Lebanon',
      phone: phone.trim(),
      badge: 'NCEI Verified',
      tier: role === 'guru' ? 'Penthouse' : role === 'scholar' ? 'Scholar' : 'Public',
      allocatedComputeCredits: 10000,
      verified: true,
      isAdmin: false
    };

    onSignIn(newProfile);

    if (addToYellowPages) {
      const newListing: MemberDirectoryItem = {
        id: `mem_${Date.now()}`,
        name: fullName.trim(),
        title: roleTitle.trim() || 'AI Specialist',
        organization: organization.trim() || 'Independent',
        initials: initials || 'AI',
        role: directoryRole,
        sector,
        location: location.trim() || 'Beirut, Lebanon',
        phone: phone.trim() || '+961 70 000 000',
        email: signUpEmail.trim(),
        skills: skills.split(',').map(s => s.trim()).filter(Boolean),
        bio: bio.trim() || 'Independent AI practitioner contributing to sovereign Lebanese intelligence infrastructure.',
        badge: 'NCEI Verified',
        tier: role === 'guru' ? 'Penthouse / VIP' : role === 'scholar' ? 'Scholar' : 'Public',
        hourlyRate: '$75/hr',
        status: 'Available',
        projectsCount: 1,
        rating: 5.0,
        dateJoined: new Date().toISOString().split('T')[0],
        featured: false,
        approved: true
      };

      onRegisterMemberListing(newListing);
    }

    setSuccessMsg('Registration completed! Your account has been provisioned with 10,000 sandbox credits and added to Yellow Pages.');
  };

  const handleVettingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!vOrgName || !vEmail || !vUseCase) {
      setErrorMsg('Please fill out all required organization, email, and use-case fields.');
      return;
    }
    if (!vNdaAccepted) {
      setErrorMsg('You must accept the Sovereign Data Processing NDA terms.');
      return;
    }

    const newApp: VettingSubmission = {
      id: `vet_${Date.now()}`,
      name: vOrgName,
      email: vEmail,
      organization: vOrgName,
      guildId: vSector.toLowerCase().replace(' ', '-'),
      guildName: `${vSector} Data Cooperative`,
      proposedUseCase: vUseCase,
      tierRequested: `${vTierRequested} Sandbox`,
      status: 'Pending Review',
      dateSubmitted: new Date().toISOString().split('T')[0],
      allocatedCompute: '15,000 Tokens (Pending)'
    };

    if (onRegisterVettingApp) {
      onRegisterVettingApp(newApp);
    }

    setIsVettingSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-cyan-600 transition-colors"
            >
              NCEI Network
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold">Registration & Access Portal</span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
              DIRECTORY OPT-IN
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 font-bold">
              10,000 TOKENS PROVISIONED
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* User Logged In Banner if active */}
        {currentUser && (
          <div className="p-5 rounded-2xl bg-white border-2 border-emerald-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-slate-950 text-cyan-400 font-mono font-bold flex items-center justify-center text-sm shrink-0">
                {currentUser.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-bold text-slate-950">{currentUser.name}</h3>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-emerald-100 text-emerald-800">
                    ACTIVE IDENTITY
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  {currentUser.roleTitle} • {currentUser.organization || 'Lebanese AI Network'} • {currentUser.allocatedComputeCredits.toLocaleString()} GPU Credits
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => onNavigate('yellow-pages')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-colors"
              >
                View in Yellow Pages
              </button>
              <button
                onClick={onSignOut}
                className="px-4 py-2 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors flex items-center space-x-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}

        {/* Header Hero */}
        <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-bold">
              <UserPlus className="w-3.5 h-3.5" />
              <span>OFFICIAL NETWORK ENROLLMENT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Sovereign Ecosystem <span className="text-amber-400">Registration Portal</span>
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Join Lebanon's sovereign AI infrastructure. Register your personal profile for the public Members Yellow Pages or apply for institutional Tier 2/3 Sandbox Vetting.
            </p>
          </div>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex border-b border-slate-200 bg-white p-1.5 rounded-2xl shadow-xs gap-1.5">
          <button
            onClick={() => { setActiveTab('signup'); setErrorMsg(''); setSuccessMsg(''); }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'signup'
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>1. New Member & Yellow Pages Registration</span>
          </button>

          <button
            onClick={() => { setActiveTab('sandbox'); setErrorMsg(''); setSuccessMsg(''); }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'sandbox'
                ? 'bg-slate-950 text-cyan-400 shadow-xs'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>2. Institutional Sandbox & Vetting</span>
          </button>

          <button
            onClick={() => { setActiveTab('signin'); setErrorMsg(''); setSuccessMsg(''); }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'signin'
                ? 'bg-cyan-500 text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>3. Sign In / Persona Login</span>
          </button>
        </div>

        {/* Alerts */}
        {errorMsg && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
            <button
              onClick={() => onNavigate('yellow-pages')}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shrink-0"
            >
              Open Yellow Pages Directory →
            </button>
          </div>
        )}

        {/* TAB 1: NEW MEMBER REGISTRATION */}
        {activeTab === 'signup' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-xl font-black text-slate-950">
                  Register Ecosystem Identity
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete this form to create your sovereign 961AI identity, receive compute credits, and optionally list yourself in the public Yellow Pages directory.
                </p>
              </div>

              <form onSubmit={handleManualSignUp} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Dr. Jad Khoury"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Official Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                        placeholder="jad@aub.edu.lb or jad@ai.me"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="password"
                        required
                        value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Phone / WhatsApp (for Direct Inquiries)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+961 70 123 456"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Organization / Affiliation
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. AUB, USJ, Berytech, or Independent"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      City / Location (Lebanon or Diaspora)
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Beirut, Tripoli, Dubai (Diaspora)"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Ecosystem Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="scholar">Scholar & AI Researcher</option>
                      <option value="freelancer">Freelance Specialist Engineer</option>
                      <option value="guru">Venture Guru & Founder</option>
                      <option value="enterprise">Enterprise Partner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Primary Sector
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Enterprise AI">Enterprise AI</option>
                      <option value="HealthTech">HealthTech</option>
                      <option value="FinTech">FinTech</option>
                      <option value="GovTech">GovTech</option>
                      <option value="Logistics">Logistics</option>
                      <option value="LegalTech">LegalTech</option>
                      <option value="EdTech">EdTech</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Professional Title
                    </label>
                    <input
                      type="text"
                      value={roleTitle}
                      onChange={(e) => setRoleTitle(e.target.value)}
                      placeholder="e.g. Head of Machine Learning"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                    Skills & Technical Stack (comma separated)
                  </label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Python, PyTorch, RAG, n8n, Smart Contracts, LLMOps"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                    Short Bio & Focus Area
                  </label>
                  <textarea
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Brief overview of your academic focus, startup thesis, or technical specialty..."
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Directory Opt-in Checkbox */}
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-300 flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="yellow-pages-optin"
                    checked={addToYellowPages}
                    onChange={(e) => setAddToYellowPages(e.target.checked)}
                    className="w-5 h-5 rounded border-amber-400 text-amber-500 focus:ring-amber-400 mt-0.5"
                  />
                  <label htmlFor="yellow-pages-optin" className="text-xs text-slate-800 leading-relaxed cursor-pointer">
                    <strong className="text-slate-950 font-bold block mb-0.5">
                      Publish my profile to the public NCEI Yellow Pages for Members
                    </strong>
                    Allow verified founders, research scholars, and enterprise partners across Lebanon and the diaspora to discover my profile, view my skills, and initiate direct consultation requests.
                  </label>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    Auto-grant: <strong className="text-slate-900">10,000 Compute Sandbox Credits</strong>
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-extrabold transition-all shadow-md flex items-center space-x-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Complete Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Side Preview Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Live Yellow Pages Preview
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-mono font-bold">
                    NCEI VERIFIED
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {fullName ? fullName.substring(0, 2).toUpperCase() : 'AI'}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-slate-950 truncate">
                        {fullName || 'Your Full Name'}
                      </h4>
                      <p className="text-xs text-slate-500 truncate">
                        {roleTitle || 'AI Specialist'}
                      </p>
                      <p className="text-[11px] text-cyan-700 font-mono truncate">
                        {organization || 'Organization'}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 italic">
                    "{bio || 'Your bio will appear here in the member directory...'}"
                  </p>

                  <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-1">
                    {skills.split(',').slice(0, 3).map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white text-[10px] font-mono text-slate-700 border border-slate-200">
                        {s.trim() || 'Skill'}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{location || 'Beirut, Lebanon'}</span>
                    <span className="text-emerald-700 font-bold">Available</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 space-y-2 pt-2">
                  <div className="flex items-center space-x-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant publication to Member Directory</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free GPU tokens on sovereign cluster nodes</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct phone/WhatsApp and message routing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INSTITUTIONAL SANDBOX & VETTING */}
        {activeTab === 'sandbox' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase bg-cyan-100 text-cyan-800 border border-cyan-200 mb-2">
                <Server className="w-3.5 h-3.5" />
                <span>Tier 2 / Tier 3 Institutional Sandboxes</span>
              </div>
              <h2 className="text-2xl font-black text-slate-950">
                Institutional Sandbox & Vetting Application
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                For commercial banks, hospitals, ministries, and enterprise conglomerates deploying private sovereign LLMs and federated data cooperatives.
              </p>
            </div>

            {isVettingSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-emerald-950">
                  Institutional Application Received
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Your application for <strong>{vOrgName}</strong> has been logged in the secure governance ledger and dispatched to Ecosystem Director Maan El-Khatib for audit.
                </p>
                <div className="pt-2 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => onNavigate('admin-maan')}
                    className="px-5 py-2.5 rounded-xl bg-slate-950 text-cyan-400 font-mono font-bold text-xs hover:bg-slate-800 transition-colors"
                  >
                    View in /Maan70939779 Console
                  </button>
                  <button
                    onClick={() => { setIsVettingSubmitted(false); }}
                    className="px-4 py-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs font-bold hover:bg-emerald-100"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleVettingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Institution / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={vOrgName}
                      onChange={(e) => setVOrgName(e.target.value)}
                      placeholder="e.g. Bank Audi, AUBMC, or Ministry of Telecom"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Official Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={vEmail}
                      onChange={(e) => setVEmail(e.target.value)}
                      placeholder="compliance@institution.lb"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Governing Sector & Regulatory Framework
                    </label>
                    <select
                      value={vSector}
                      onChange={(e) => setVSector(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="FinTech">FinTech (Basel III & BDL Circulars 158/165)</option>
                      <option value="Healthcare">Healthcare (HIPAA & MoPH Clinical Standards)</option>
                      <option value="Legal Tech">Legal Tech (GDPR & Arab League Harmonization)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Target Isolation Tier
                    </label>
                    <select
                      value={vTierRequested}
                      onChange={(e) => setVTierRequested(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Tier 1">Tier 1: Sovereign API Sandbox (Standard Gateway)</option>
                      <option value="Tier 2">Tier 2: Zero-PII Containerized Node (Dedicated VPC)</option>
                      <option value="Tier 3">Tier 3: Air-Gapped High-Security GPU Cluster</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                    Proposed Institutional AI Use-Case *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={vUseCase}
                    onChange={(e) => setVUseCase(e.target.value)}
                    placeholder="Describe your organization's compliance requirements, anticipated dataset volumes, and multi-agent deployment scope..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-cyan-50/50 border border-cyan-200 flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="nda-checkbox"
                    checked={vNdaAccepted}
                    onChange={(e) => setVNdaAccepted(e.target.checked)}
                    className="w-5 h-5 rounded border-cyan-400 text-cyan-600 focus:ring-cyan-400 mt-0.5"
                  />
                  <label htmlFor="nda-checkbox" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
                    <strong className="text-slate-900 font-bold block mb-0.5">
                      Accept Sovereign Zero-Leakage Data Processing NDA
                    </strong>
                    I certify that our institution complies with regional data privacy mandates. All data shared through the collaborative sandbox remains under zero-knowledge encryption and local residency in Lebanon.
                  </label>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono text-slate-500">
                    Vetting Period: <strong>24-48 Hours</strong>
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-cyan-400 font-bold text-sm transition-all shadow-md flex items-center space-x-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Dispatch Institutional Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 3: SIGN IN / PERSONA FAST LOGIN */}
        {activeTab === 'signin' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Left: Standard Login Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-xl font-black text-slate-950">
                  Access Your Identity
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sign in with your registered email and credential key.
                </p>
              </div>

              <form onSubmit={handleManualSignIn} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. yourname@domain.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                    Security Passcode
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-xs flex items-center justify-center space-x-2"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In to Network</span>
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('signup')}
                  className="text-xs text-amber-800 font-bold hover:underline"
                >
                  Don't have an identity yet? Register as a new member →
                </button>
              </div>
            </div>

            {/* Right: Fast 1-Click Testing Personas */}
            <div className="lg:col-span-6 bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 text-white space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <Key className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white uppercase font-mono">
                    1-Click Verified Personas
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  INSTANT PREVIEW
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Test the platform immediately with pre-configured verified credentials:
              </p>

              <div className="space-y-2.5 pt-1">
                {/* Admin Persona */}
                <button
                  type="button"
                  onClick={() => handleDemoSignIn('admin')}
                  className="w-full p-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-cyan-900/60 hover:border-cyan-500 text-left transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="text-xs font-bold text-cyan-300 group-hover:text-cyan-200">
                      Maan El-Khatib (Admin & Architect)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Full access to /Maan70939779 and compute management
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Scholar Persona */}
                <button
                  type="button"
                  onClick={() => handleDemoSignIn('scholar')}
                  className="w-full p-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500 text-left transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-200">
                      Dr. Nour Al-Hajj (Healthcare Scholar)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      AUBMC Clinical AI Head • 25,000 Compute Credits
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Founder Persona */}
                <button
                  type="button"
                  onClick={() => handleDemoSignIn('founder')}
                  className="w-full p-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-amber-400 text-left transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      Ziad Mouawad (Logistics Founder)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      LogisticsIQ Levant • 50,000 Compute Credits
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Freelancer Persona */}
                <button
                  type="button"
                  onClick={() => handleDemoSignIn('freelancer')}
                  className="w-full p-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-emerald-400 text-left transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                      Hadi Kanso (Smart Contract Auditor)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      GovTech Taskforce • 15,000 Compute Credits
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
