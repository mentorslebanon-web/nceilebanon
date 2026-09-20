import React, { useState } from 'react';
import { UserProfile, MemberDirectoryItem } from '../types';
import { 
  X, 
  LogIn, 
  UserPlus, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Mail, 
  User, 
  Building, 
  MapPin, 
  Phone, 
  CheckCircle2,
  Cpu,
  Key,
  ArrowRight
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onSignIn: (user: UserProfile) => void;
  onSignOut: () => void;
  onRegisterMemberListing?: (member: MemberDirectoryItem) => void;
  initialMode?: 'signin' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSignIn,
  onSignOut,
  onRegisterMemberListing,
  initialMode = 'signin'
}) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Sign Up fields
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState<UserProfile['role']>('scholar');
  const [roleTitle, setRoleTitle] = useState('AI Researcher');
  const [sector, setSector] = useState<MemberDirectoryItem['sector']>('Enterprise AI');
  const [location, setLocation] = useState('Beirut, Lebanon');
  const [phone, setPhone] = useState('+961 70 000 000');
  const [skills, setSkills] = useState('Python, RAG, Multi-Agent Systems');
  const [bio, setBio] = useState('');
  const [addToYellowPages, setAddToYellowPages] = useState(true);

  if (!isOpen) return null;

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
      onClose();
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
      onClose();
    } else if (presetRole === 'founder') {
      const founderUser: UserProfile = {
        id: 'usr_founder_ziad',
        email: 'ziad@logisticsiq.me',
        name: 'Ziad Mouawad',
        role: 'guru',
        roleTitle: 'Founder & CEO',
        organization: 'LogisticsIQ Levant',
        location: 'Dbayeh, Mount Lebanon',
        phone: '+961 4 542 800',
        badge: 'Founding Member',
        tier: 'Penthouse',
        allocatedComputeCredits: 50000,
        verified: true
      };
      onSignIn(founderUser);
      onClose();
    } else {
      const freelancerUser: UserProfile = {
        id: 'usr_free_hadi',
        email: 'hadi.kanso@security-audit.me',
        name: 'Hadi Kanso',
        role: 'freelancer',
        roleTitle: 'Senior Smart Contract Auditor',
        organization: 'Independent Consultant',
        location: 'Saida, South Lebanon',
        phone: '+961 7 724 339',
        badge: 'Red Team Auditor',
        tier: 'Public',
        allocatedComputeCredits: 10000,
        verified: true
      };
      onSignIn(freelancerUser);
      onClose();
    }
  };

  const handleStandardSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMsg('Please enter both your email and password.');
      return;
    }

    const isAdminLogin = email.toLowerCase().includes('admin') || email.toLowerCase().includes('maan');
    const user: UserProfile = {
      id: 'usr_' + Date.now(),
      email: email.trim(),
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      role: isAdminLogin ? 'admin' : 'scholar',
      roleTitle: isAdminLogin ? 'Platform Administrator' : 'Ecosystem Member',
      organization: '961AI Network Peer',
      location: 'Beirut, Lebanon',
      badge: isAdminLogin ? 'Admin' : 'Verified Member',
      tier: isAdminLogin ? 'Admin' : 'Scholar',
      allocatedComputeCredits: isAdminLogin ? 100000 : 15000,
      verified: true,
      isAdmin: isAdminLogin
    };

    onSignIn(user);
    onClose();
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setErrorMsg('Please provide your full name and email address.');
      return;
    }

    const newId = 'mem_' + Date.now();
    const newUser: UserProfile = {
      id: newId,
      email: email.trim(),
      name: fullName.trim(),
      role: role,
      roleTitle: roleTitle.trim() || 'Ecosystem Member',
      organization: organization.trim() || 'Independent',
      location: location.trim(),
      phone: phone.trim(),
      badge: 'NCEI Verified',
      tier: role === 'enterprise' ? 'Penthouse' : role === 'scholar' ? 'Scholar' : 'Public',
      allocatedComputeCredits: 10000,
      verified: true
    };

    // If opted into Yellow Pages, add to directory
    if (addToYellowPages && onRegisterMemberListing) {
      const initials = fullName
        .split(' ')
        .map(n => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

      const memberListing: MemberDirectoryItem = {
        id: newId,
        name: fullName.trim(),
        title: roleTitle.trim() || 'Specialist',
        organization: organization.trim() || '961AI Network Peer',
        initials: initials || 'MB',
        role: role === 'scholar' ? 'AI Researcher' : role === 'freelancer' ? 'Freelance Consultant' : role === 'guru' ? 'Founder' : 'Software Architect',
        sector: sector,
        location: location.trim(),
        phone: phone.trim(),
        email: email.trim(),
        skills: skills.split(',').map(s => s.trim()).filter(Boolean),
        bio: bio.trim() || `Active member specializing in ${sector} within the 961AI Lebanese innovation ecosystem.`,
        badge: 'NCEI Verified',
        tier: role === 'enterprise' ? 'Penthouse / VIP' : role === 'scholar' ? 'Scholar' : 'Public',
        hourlyRate: '$100/hr',
        status: 'Available',
        projectsCount: 1,
        rating: 5.0,
        dateJoined: 'September 2026',
        featured: false,
        approved: true
      };

      onRegisterMemberListing(memberListing);
    }

    onSignIn(newUser);
    setSuccessMsg('Account created successfully and profile activated!');
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-slate-950 text-white p-6 pb-5 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/50 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold tracking-tight">
                  NCEI Lebanon Identity Gateway
                </h2>
                <p className="text-[11px] font-mono text-cyan-400">
                  961AI Network Member & Yellow Pages Access
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center space-x-2 mt-5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => { setActiveTab('signin'); setErrorMsg(''); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center space-x-1.5 ${
                activeTab === 'signin'
                  ? 'bg-cyan-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In to Node</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('signup'); setErrorMsg(''); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center space-x-1.5 ${
                activeTab === 'signup'
                  ? 'bg-cyan-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Sign Up & Join Yellow Pages</span>
            </button>
          </div>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-medium">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* TAB 1: SIGN IN */}
          {activeTab === 'signin' && (
            <div className="space-y-5">
              {/* 1-Click Demo Profiles for Seamless Testing */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                  Quick Access Demo Accounts (1-Click Authentication):
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleDemoSignIn('admin')}
                    className="p-2.5 rounded-xl border border-cyan-200 bg-cyan-50/70 hover:bg-cyan-100/80 text-left transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>Maan El-Khatib</span>
                      <Key className="w-3 h-3 text-cyan-600" />
                    </div>
                    <div className="text-[10px] text-cyan-800 font-mono">Admin / Lead Architect</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDemoSignIn('scholar')}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-left transition-all"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>Dr. Nour Al-Hajj</span>
                      <Cpu className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">Healthcare AI Scholar</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDemoSignIn('founder')}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-left transition-all"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>Ziad Mouawad</span>
                      <Sparkles className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">Logistics Founder</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDemoSignIn('freelancer')}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-left transition-all"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                      <span>Hadi Kanso</span>
                      <ShieldCheck className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">Freelance Auditor</div>
                  </button>
                </div>
              </div>

              <div className="relative flex py-1 items-center">
                <div className="grow border-t border-slate-200"></div>
                <span className="shrink mx-4 text-[10px] font-mono text-slate-400 uppercase">Or Sign In with Credentials</span>
                <div className="grow border-t border-slate-200"></div>
              </div>

              {/* Standard Email/Password Form */}
              <form onSubmit={handleStandardSignIn} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address or Handle:
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. founder@961ai.network"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      Password:
                    </label>
                    <span className="text-[10px] text-cyan-700 cursor-pointer hover:underline">
                      Forgot Access Key?
                    </span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <span>Authorize & Sign In</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: SIGN UP */}
          {activeTab === 'signup' && (
            <form onSubmit={handleSignUpSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name: *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Walid Mansour"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address: *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="walid@venture.lb"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / Startup:
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Cedar Labs / Freelance"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Role / Professional Title:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senior RAG Engineer"
                    value={roleTitle}
                    onChange={(e) => setRoleTitle(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ecosystem Archetype:
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as any)}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-hidden"
                  >
                    <option value="scholar">Scholar / Academic</option>
                    <option value="freelancer">Freelance Builder</option>
                    <option value="guru">Founder / Guru</option>
                    <option value="enterprise">Enterprise Executive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Sector:
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value as any)}
                    className="w-full px-2.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-hidden"
                  >
                    <option value="Enterprise AI">Enterprise AI</option>
                    <option value="FinTech">FinTech</option>
                    <option value="HealthTech">HealthTech</option>
                    <option value="GovTech">GovTech</option>
                    <option value="Logistics">Logistics</option>
                    <option value="LegalTech">LegalTech</option>
                    <option value="EdTech">EdTech</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Lebanon / MENA City:
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Beirut, Lebanon"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-7 pr-2 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Direct Phone / WhatsApp:
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="+961 70 123 456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Key Skills (comma separated):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. LangChain, Python, Next.js"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Professional Bio / Value Proposition:
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your technical capabilities, past deployments, or what you bring to the NCEI ecosystem..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden bg-slate-50/50"
                />
              </div>

              {/* Yellow Pages Opt-in Checkbox */}
              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 flex items-start space-x-2.5">
                <input
                  type="checkbox"
                  id="yellow-pages-optin"
                  checked={addToYellowPages}
                  onChange={(e) => setAddToYellowPages(e.target.checked)}
                  className="mt-0.5 rounded text-cyan-600 focus:ring-cyan-500"
                />
                <label htmlFor="yellow-pages-optin" className="text-xs text-amber-950 font-medium cursor-pointer">
                  <span className="font-bold block">List me in the NCEI Members Yellow Pages</span>
                  <span>Allow regional founders, government bodies, and investors to discover and contact you directly.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <UserPlus className="w-4 h-4" />
                <span>Complete Registration & Activate Node</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
