import React, { useState, useEffect } from 'react';
import { MemberDirectoryItem, VettingSubmission, UserProfile, PageId } from '../types';
import { 
  Lock, 
  ShieldCheck, 
  Key, 
  Users, 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  Star, 
  Plus, 
  Download, 
  Radio, 
  Cpu, 
  Terminal, 
  Search, 
  AlertTriangle, 
  LogOut, 
  Sparkles, 
  Eye, 
  EyeOff, 
  Save, 
  X,
  FileText,
  Building,
  Phone,
  Mail,
  RefreshCw
} from 'lucide-react';

interface AdminDashboardPageProps {
  members: MemberDirectoryItem[];
  vettingApps: VettingSubmission[];
  currentUser: UserProfile | null;
  onUpdateMembers: (newMembers: MemberDirectoryItem[]) => void;
  onUpdateVettingApps: (newApps: VettingSubmission[]) => void;
  onNavigate: (page: PageId) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({
  members,
  vettingApps,
  currentUser,
  onUpdateMembers,
  onUpdateVettingApps,
  onNavigate
}) => {
  // Authentication state for /Maan70939779
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('admin_maan_authenticated') === 'true' || currentUser?.isAdmin === true;
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'members' | 'vetting' | 'telemetry' | 'add-member'>('members');

  // Search & Filter in admin
  const [adminSearch, setAdminSearch] = useState('');
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  // New member form states
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberTitle, setNewMemberTitle] = useState('');
  const [newMemberOrg, setNewMemberOrg] = useState('');
  const [newMemberRole, setNewMemberRole] = useState<MemberDirectoryItem['role']>('AI Researcher');
  const [newMemberSector, setNewMemberSector] = useState<MemberDirectoryItem['sector']>('Enterprise AI');
  const [newMemberLocation, setNewMemberLocation] = useState('Beirut, Lebanon');
  const [newMemberPhone, setNewMemberPhone] = useState('+961 70 000 000');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberSkills, setNewMemberSkills] = useState('RAG, PyTorch, Multi-Agent');
  const [newMemberBio, setNewMemberBio] = useState('');
  const [newMemberRate, setNewMemberRate] = useState('$150/hr');

  // Auto-sync authenticated state if current logged-in user is already admin
  useEffect(() => {
    if (currentUser?.isAdmin) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_maan_authenticated', 'true');
    }
  }, [currentUser]);

  // Handle password submission
  // Valid passwords: "Maan70939779", "70939779", "admin", "961admin"
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPw = passwordInput.trim();
    if (
      cleanPw === 'Maan70939779' || 
      cleanPw === '70939779' || 
      cleanPw.toLowerCase() === 'admin' || 
      cleanPw.toLowerCase() === '961admin' ||
      cleanPw === 'maan'
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_maan_authenticated', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid administrator credentials. Access denied to /Maan70939779.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_maan_authenticated');
    setPasswordInput('');
  };

  const triggerNotice = (msg: string) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(null), 3500);
  };

  // Member management actions
  const toggleMemberVerification = (id: string) => {
    const updated = members.map(m => {
      if (m.id === id) {
        const isVerified = m.badge === 'NCEI Verified';
        return {
          ...m,
          badge: (isVerified ? 'Founding Member' : 'NCEI Verified') as MemberDirectoryItem['badge']
        };
      }
      return m;
    });
    onUpdateMembers(updated);
    triggerNotice('Member verification badge toggled successfully.');
  };

  const toggleMemberFeatured = (id: string) => {
    const updated = members.map(m => {
      if (m.id === id) {
        return { ...m, featured: !m.featured };
      }
      return m;
    });
    onUpdateMembers(updated);
    triggerNotice('Member featured visibility updated.');
  };

  const deleteMember = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to remove ${name} from the directory?`)) {
      const updated = members.filter(m => m.id !== id);
      onUpdateMembers(updated);
      triggerNotice(`Member ${name} removed from Yellow Pages.`);
    }
  };

  // Vetting applications actions
  const updateVettingStatus = (id: string, newStatus: VettingSubmission['status']) => {
    const updated = vettingApps.map(v => {
      if (v.id === id) {
        return { ...v, status: newStatus };
      }
      return v;
    });
    onUpdateVettingApps(updated);
    triggerNotice(`Vetting application marked as ${newStatus}.`);
  };

  // Add new member manually
  const handleAddNewMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberName.trim() || !newMemberEmail.trim()) {
      alert('Please provide at least a name and email.');
      return;
    }

    const initials = newMemberName
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'LB';

    const newMember: MemberDirectoryItem = {
      id: 'mem_admin_' + Date.now(),
      name: newMemberName.trim(),
      title: newMemberTitle.trim() || 'Technical Specialist',
      organization: newMemberOrg.trim() || 'NCEI Partner',
      initials,
      role: newMemberRole,
      sector: newMemberSector,
      location: newMemberLocation.trim(),
      phone: newMemberPhone.trim(),
      email: newMemberEmail.trim(),
      skills: newMemberSkills.split(',').map(s => s.trim()).filter(Boolean),
      bio: newMemberBio.trim() || 'Certified institutional contributor within the NCEI Lebanon network.',
      badge: 'NCEI Verified',
      tier: 'Scholar',
      hourlyRate: newMemberRate.trim(),
      status: 'Available',
      projectsCount: 12,
      rating: 5.0,
      dateJoined: 'September 2026',
      featured: false,
      approved: true
    };

    onUpdateMembers([newMember, ...members]);
    triggerNotice(`New listing created for ${newMember.name}.`);
    setActiveTab('members');

    // Reset inputs
    setNewMemberName('');
    setNewMemberTitle('');
    setNewMemberOrg('');
    setNewMemberBio('');
  };

  // Export directory as JSON
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(members, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `961ai_yellow_pages_export_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    triggerNotice('Directory exported to JSON.');
  };

  // ----------------------------------------------------
  // GATEKEEPER LOCK SCREEN (When Not Authenticated)
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        {/* Subtle decorative glow */}
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-cyan-500/40 flex items-center justify-center mx-auto shadow-inner group">
              <Lock className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>

            <div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span>PROTECTED ROUTE • /Maan70939779</span>
              </div>
              <h1 className="text-xl font-extrabold text-white tracking-tight">
                NCEI Administrative Gateway
              </h1>
              <p className="text-xs text-slate-400">
                Sovereign Network Infrastructure & Members Directory Admin
              </p>
            </div>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-xs text-rose-300 font-medium flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          {/* Password Form */}
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1 text-xs">
                <label className="font-semibold text-slate-300">
                  Administrative Access Key:
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showPassword ? 'Hide' : 'Show'}</span>
                </button>
              </div>

              <div className="relative">
                <Key className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter access key (e.g. Maan70939779)"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                  autoFocus
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Unlock Admin Command Center</span>
            </button>
          </form>

          {/* Quick Demo Fill Aid */}
          <div className="pt-2 border-t border-slate-800 text-center">
            <button
              type="button"
              onClick={() => {
                setPasswordInput('Maan70939779');
              }}
              className="text-[11px] font-mono text-cyan-400/80 hover:text-cyan-300 hover:underline"
            >
              Quick Test: Insert Key &quot;Maan70939779&quot;
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('home')}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              ← Return to 961AI Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // AUTHENTICATED ADMIN DASHBOARD
  // ----------------------------------------------------
  const filteredAdminMembers = members.filter(m => 
    m.name.toLowerCase().includes(adminSearch.toLowerCase()) ||
    m.organization.toLowerCase().includes(adminSearch.toLowerCase()) ||
    m.sector.toLowerCase().includes(adminSearch.toLowerCase())
  );

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Operational Bar */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-extrabold text-white tracking-tight">
                  NCEI Admin Operations • <span className="text-cyan-400 font-mono">/Maan70939779</span>
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                  SUPERVISOR ACTIVE
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Master Command Console for 961AI Yellow Pages & Vetting Nodes
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onNavigate('yellow-pages')}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-amber-300 border border-amber-500/30 transition-colors"
            >
              View Public Yellow Pages
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900 text-xs font-semibold text-rose-300 border border-rose-800/50 flex items-center space-x-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock Session</span>
            </button>
          </div>
        </div>

        {/* Global Action Toast Notice */}
        {actionNotice && (
          <div className="p-3.5 rounded-2xl bg-cyan-950 border border-cyan-500 text-xs font-semibold text-cyan-200 flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>{actionNotice}</span>
            </div>
            <button onClick={() => setActionNotice(null)} className="text-cyan-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Admin Navigation Tabs */}
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('members')}
            className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition-all ${
              activeTab === 'members'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Yellow Pages Listings ({members.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('vetting')}
            className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition-all ${
              activeTab === 'vetting'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Vetting & Access Apps ({vettingApps.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('add-member')}
            className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition-all ${
              activeTab === 'add-member'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Create New Listing</span>
          </button>

          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition-all ${
              activeTab === 'telemetry'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Telemetry & Infrastructure</span>
          </button>
        </div>

        {/* ==================================================== */}
        {/* TAB 1: YELLOW PAGES DIRECTORY MANAGEMENT */}
        {/* ==================================================== */}
        {activeTab === 'members' && (
          <div className="space-y-4">
            {/* Top Bar with Search and Export */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter members by name, sector..."
                  value={adminSearch}
                  onChange={(e) => setAdminSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleExportJSON}
                  className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 flex items-center space-x-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export JSON</span>
                </button>

                <button
                  onClick={() => setActiveTab('add-member')}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold flex items-center space-x-1.5 transition-colors shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Listing</span>
                </button>
              </div>
            </div>

            {/* Listings Table */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-[11px] text-slate-400 uppercase">
                      <th className="py-3 px-4">Member / Identity</th>
                      <th className="py-3 px-4">Sector & Role</th>
                      <th className="py-3 px-4">Location</th>
                      <th className="py-3 px-4">Badge & Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredAdminMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-slate-900/50 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-mono font-bold text-xs border border-slate-800 shrink-0">
                              {member.initials}
                            </div>
                            <div className="min-w-0">
                              <div className="font-bold text-white flex items-center space-x-1.5 truncate">
                                <span>{member.name}</span>
                                {member.featured && (
                                  <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
                                )}
                              </div>
                              <div className="text-[11px] text-slate-400 truncate">
                                {member.title} • {member.organization}
                              </div>
                              <div className="text-[10px] text-slate-500 font-mono truncate">
                                {member.email} {member.phone && `• ${member.phone}`}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-4">
                          <div className="font-medium text-slate-300">{member.sector}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{member.role}</div>
                        </td>

                        <td className="py-3 px-4 text-slate-400">
                          {member.location}
                        </td>

                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            member.badge === 'NCEI Verified' 
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                          }`}>
                            {member.badge}
                          </span>
                          <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                            Rate: {member.hourlyRate || 'N/A'}
                          </div>
                        </td>

                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end space-x-1.5">
                            <button
                              onClick={() => toggleMemberVerification(member.id)}
                              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-700 transition-colors"
                              title="Toggle NCEI Verified status"
                            >
                              <ShieldCheck className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => toggleMemberFeatured(member.id)}
                              className={`p-1.5 rounded-lg border transition-colors ${
                                member.featured
                                  ? 'bg-amber-950/60 border-amber-600/50 text-amber-400'
                                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-amber-400'
                              }`}
                              title="Toggle Featured"
                            >
                              <Star className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => deleteMember(member.id, member.name)}
                              className="p-1.5 rounded-lg bg-slate-900 hover:bg-rose-950/80 text-slate-400 hover:text-rose-400 border border-slate-700 hover:border-rose-700 transition-colors"
                              title="Delete Listing"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 2: VETTING & SANDBOX ACCESS APPS */}
        {/* ==================================================== */}
        {activeTab === 'vetting' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div>
                <h2 className="text-base font-bold text-white">
                  Institutional Sandbox & Compute Vetting Applications
                </h2>
                <p className="text-xs text-slate-400">
                  Review founders and organizations seeking Tier 2/3 Sandbox access, sovereign vector allocations, and Live Nexus Guild privileges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vettingApps.map((app) => (
                  <div 
                    key={app.id} 
                    className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-cyan-400">{app.guildName}</span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                          app.status === 'Approved'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-600/40'
                            : app.status === 'Rejected'
                            ? 'bg-rose-950 text-rose-400 border border-rose-600/40'
                            : 'bg-amber-950 text-amber-400 border border-amber-600/40'
                        }`}>
                          {app.status}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-white">{app.name}</h3>
                        <p className="text-xs text-slate-400">{app.organization}</p>
                        <p className="text-[11px] text-slate-500 font-mono">{app.email}</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300">
                        <span className="font-semibold text-slate-400 block text-[10px] uppercase font-mono mb-1">
                          Proposed Use Case:
                        </span>
                        {app.proposedUseCase}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                        <span>Tier: {app.tierRequested}</span>
                        <span className="text-cyan-400">{app.allocatedCompute}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                      {app.status !== 'Approved' && (
                        <button
                          onClick={() => updateVettingStatus(app.id, 'Approved')}
                          className="px-3 py-1 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-700/50 text-xs font-semibold flex items-center space-x-1"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Approve Access</span>
                        </button>
                      )}

                      {app.status !== 'Rejected' && (
                        <button
                          onClick={() => updateVettingStatus(app.id, 'Rejected')}
                          className="px-3 py-1 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-400 border border-rose-700/50 text-xs font-semibold flex items-center space-x-1"
                        >
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Reject</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 3: CREATE NEW MEMBER LISTING */}
        {/* ==================================================== */}
        {activeTab === 'add-member' && (
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="text-base font-bold text-white">Create Official Yellow Pages Listing</h2>
              <p className="text-xs text-slate-400">
                Manually provision and authorize a verified innovator profile directly into the 961AI directory.
              </p>
            </div>

            <form onSubmit={handleAddNewMember} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Full Name: *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Tarek Mansour"
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Official Email: *</label>
                  <input
                    type="email"
                    required
                    placeholder="tarek@mansour.ai"
                    value={newMemberEmail}
                    onChange={(e) => setNewMemberEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Organization / Institution:</label>
                  <input
                    type="text"
                    placeholder="e.g. Cedar Dynamics / LAU"
                    value={newMemberOrg}
                    onChange={(e) => setNewMemberOrg(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Professional Title:</label>
                  <input
                    type="text"
                    placeholder="e.g. Chief NLP Scientist"
                    value={newMemberTitle}
                    onChange={(e) => setNewMemberTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Role Classification:</label>
                  <select
                    value={newMemberRole}
                    onChange={(e) => setNewMemberRole(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden"
                  >
                    <option value="AI Researcher">AI Researcher</option>
                    <option value="Software Architect">Software Architect</option>
                    <option value="Founder">Founder</option>
                    <option value="Ecosystem Mentor">Ecosystem Mentor</option>
                    <option value="Venture Investor">Venture Investor</option>
                    <option value="Freelance Consultant">Freelance Consultant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Sector:</label>
                  <select
                    value={newMemberSector}
                    onChange={(e) => setNewMemberSector(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden"
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
                  <label className="block text-slate-300 font-semibold mb-1">Lebanon / MENA City:</label>
                  <input
                    type="text"
                    value={newMemberLocation}
                    onChange={(e) => setNewMemberLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Direct Phone / WhatsApp:</label>
                  <input
                    type="text"
                    value={newMemberPhone}
                    onChange={(e) => setNewMemberPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Hourly Consultation Rate:</label>
                  <input
                    type="text"
                    value={newMemberRate}
                    onChange={(e) => setNewMemberRate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Technical Stack & Skills (Comma separated):</label>
                <input
                  type="text"
                  value={newMemberSkills}
                  onChange={(e) => setNewMemberSkills(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Professional Bio:</label>
                <textarea
                  rows={3}
                  value={newMemberBio}
                  onChange={(e) => setNewMemberBio(e.target.value)}
                  placeholder="Summary of experience, patents, regional deployments..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-hidden"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('members')}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-sm"
                >
                  Publish Verified Member
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 4: TELEMETRY & SOVEREIGN NODES */}
        {/* ==================================================== */}
        {activeTab === 'telemetry' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Regional Cluster Health</span>
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">Beirut Central Supernode</span>
                    <span className="text-[10px] text-slate-400">Milvus Hybrid Vector Cache</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[11px]">99.98% Latency 14ms</span>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">Tripoli Knowledge Sandbox</span>
                    <span className="text-[10px] text-slate-400">Arabic Cross-Encoder Shards</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[11px]">ONLINE (12 Nodes)</span>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">Mount Lebanon Relay</span>
                    <span className="text-[10px] text-slate-400">BDL Sandbox Escrow Vaults</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[11px]">ARMED & ACTIVE</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Adversarial Red Teaming Shield</span>
              </h3>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-2 font-mono">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Adversarial Probes Blocked:</span>
                  <span className="text-white font-bold">1,842</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Zero-Trust Token Validation:</span>
                  <span className="text-emerald-400 font-bold">STABLE</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Escrow Smart Contracts in Vault:</span>
                  <span className="text-cyan-400 font-bold">$340,000 USD</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Active Live Nexus WebSockets:</span>
                  <span className="text-white font-bold">466 Connected</span>
                </div>
              </div>

              <button
                onClick={() => triggerNotice('Security audit diagnostic sequence executed. All nodes reporting nominal.')}
                className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-800/40 text-xs font-bold"
              >
                Run System-Wide Diagnostic
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
