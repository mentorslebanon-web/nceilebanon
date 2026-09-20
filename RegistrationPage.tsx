/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { MemberDirectoryItem, UserProfile, PageId } from '../types';
import { useInvertedSearch } from '../utils/searchIndex';
import { useVirtualGrid } from '../utils/virtualizer';
import { 
  Users, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Building,
  Briefcase,
  UserPlus,
  Sparkles,
  Lock,
  X,
  Zap,
  Layers
} from 'lucide-react';

interface MembersDirectoryPageProps {
  members: MemberDirectoryItem[];
  currentUser: UserProfile | null;
  onOpenAuth: (mode?: 'signin' | 'signup') => void;
  onNavigate: (page: PageId) => void;
}

export const MembersDirectoryPage: React.FC<MembersDirectoryPageProps> = ({
  members,
  currentUser,
  onOpenAuth,
  onNavigate
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedMember, setSelectedMember] = useState<MemberDirectoryItem | null>(null);
  const [contactSuccessMessage, setContactSuccessMessage] = useState<string | null>(null);
  const [inquiryText, setInquiryText] = useState('');
  const [isVirtualized, setIsVirtualized] = useState(true);

  // Responsive column detection for dynamic virtual grid layout
  const [columns, setColumns] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectors = ['all', 'Enterprise AI', 'FinTech', 'HealthTech', 'GovTech', 'Logistics', 'LegalTech', 'EdTech'];
  const roles = ['all', 'Founder', 'AI Researcher', 'Software Architect', 'Ecosystem Mentor', 'Venture Investor', 'Freelance Consultant'];
  const locations = ['all', 'Beirut', 'Tripoli', 'Mount Lebanon', 'Saida', 'Diaspora / GCC'];

  // 1. Client-Side Inverted Search Index with sub-millisecond query execution
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    searchResults: searchMatchedMembers,
    searchTelemetry
  } = useInvertedSearch<MemberDirectoryItem>({
    items: members,
    fieldsToExtract: (m) => [
      m.name,
      m.organization,
      m.title,
      m.role,
      m.sector,
      m.location,
      ...(m.skills || []),
      m.bio,
      m.badge
    ],
    debounceMs: 75
  });

  // 2. Filter indexed results by category
  const filteredMembers = useMemo(() => {
    return searchMatchedMembers.filter((member) => {
      if (!member.approved) return false;

      const matchesSector = selectedSector === 'all' || member.sector === selectedSector;
      const matchesRole = selectedRole === 'all' || member.role === selectedRole;
      const matchesLocation = selectedLocation === 'all' || member.location === selectedLocation;

      return matchesSector && matchesRole && matchesLocation;
    });
  }, [searchMatchedMembers, selectedSector, selectedRole, selectedLocation]);

  // 3. Virtualization for high-density directory scrolling (prevents DOM bloat)
  const {
    containerRef,
    totalHeight,
    offsetY,
    startIndex,
    endIndex,
    visibleCount
  } = useVirtualGrid({
    itemCount: filteredMembers.length,
    estimatedItemHeight: 390,
    columns,
    overscan: 2,
    gap: 24
  });

  const visibleMembers = isVirtualized 
    ? filteredMembers.slice(startIndex, endIndex)
    : filteredMembers;

  const handleConnect = (member: MemberDirectoryItem) => {
    setContactSuccessMessage(`Inquiry dispatched to ${member.name} via Live Nexus secure channel.`);
    setInquiryText('');
    setTimeout(() => {
      setContactSuccessMessage(null);
    }, 4500);
  };

  // IF A MEMBER IS SELECTED, DISPLAY THE DEDICATED FULL-PAGE DOSSIER (NO POP-UP)
  if (selectedMember) {
    return (
      <div className="min-h-screen bg-slate-50/60 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedMember(null)}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shadow-xs"
            >
              <ArrowLeft className="w-4 h-4 text-slate-600" />
              <span>Back to Yellow Pages Directory</span>
            </button>

            <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>VERIFIED NCEI PROFILE #{selectedMember.id.toUpperCase()}</span>
            </div>
          </div>

          {/* Success Notification */}
          {contactSuccessMessage && (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-xs text-emerald-900 font-semibold flex items-center justify-between shadow-xs">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{contactSuccessMessage}</span>
              </div>
              <button 
                onClick={() => setContactSuccessMessage(null)}
                className="text-emerald-700 hover:text-emerald-950"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Full Profile Header Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-start space-x-5">
                <div className="w-20 h-20 rounded-2xl bg-slate-950 text-amber-400 font-mono font-bold text-2xl flex items-center justify-center border-2 border-slate-800 shadow-md shrink-0">
                  {selectedMember.initials}
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                      {selectedMember.name}
                    </h1>
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-950 border border-amber-300 inline-flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                      <span>{selectedMember.badge}</span>
                    </span>
                  </div>
                  <p className="text-base font-semibold text-slate-700">
                    {selectedMember.title}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedMember.organization}</span>
                    <span>•</span>
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedMember.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Consultation Rate</span>
                  <span className="text-lg font-mono font-extrabold text-slate-950">
                    {selectedMember.hourlyRate || 'Custom Retainer'}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs font-mono text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="font-bold">{selectedMember.rating.toFixed(2)}</span>
                  <span className="text-slate-500">({selectedMember.projectsCount} verified deployments)</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Sector</span>
                <span className="font-bold text-slate-900 text-sm">{selectedMember.sector}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Ecosystem Role</span>
                <span className="font-bold text-slate-900 text-sm">{selectedMember.role}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Ecosystem Tier</span>
                <span className="font-bold text-amber-700 text-sm">{selectedMember.tier}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Escrow Protected</span>
                <span className="font-bold text-emerald-700 text-sm">Yes (Zero-Knowledge)</span>
              </div>
            </div>

            {/* Professional Background Dossier */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                Professional Background & Value Proposition
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {selectedMember.bio}
              </p>
            </div>

            {/* Verified Capabilities & Technical Stack */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                Verified Technical Capabilities & Vector Specializations
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedMember.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-50 text-cyan-900 border border-cyan-200 font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Telemetry & Communication Channels */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                Direct Contact & Verified Dispatch Channels
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {selectedMember.phone && (
                  <a 
                    href={`tel:${selectedMember.phone.replace(/\s+/g, '')}`}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center space-x-3 text-slate-900 transition-colors shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Direct Telephone</span>
                      <span className="font-bold text-sm">{selectedMember.phone}</span>
                    </div>
                  </a>
                )}

                <a 
                  href={`mailto:${selectedMember.email}`}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center space-x-3 text-slate-900 transition-colors shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 block">Encrypted Email</span>
                    <span className="font-bold text-sm truncate block">{selectedMember.email}</span>
                  </div>
                </a>
              </div>

              {/* Direct Inquiry Form */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase text-slate-200">
                      Live Nexus Direct Inquiry
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">961AI Encrypted Protocol</span>
                </div>

                <textarea
                  rows={3}
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  placeholder={`Send a confidential project brief, advisory request, or venture query directly to ${selectedMember.name}...`}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-cyan-400"
                />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] font-mono text-slate-400">
                    Dispatches via zero-knowledge escrow routing
                  </span>
                  <button
                    onClick={() => handleConnect(selectedMember)}
                    className="px-5 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors shadow-sm"
                  >
                    Send Direct Inquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <button
                onClick={() => setSelectedMember(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                ← Return to Member Directory Grid
              </button>

              <button
                onClick={() => onNavigate('neural-matcher')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Check Algorithmic Synergy in Neural Matcher</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT VIEW: DIRECTORY GRID (CLICKING ANY CARD EXPANDS TO FULL PROFILE, NO MODAL)
  return (
    <div className="min-h-screen bg-slate-50/50 py-8 sm:py-12">
      {/* Top Banner / Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <Users className="w-3.5 h-3.5 text-amber-700" />
                <span>NATIONAL ECOSYSTEM REGISTRY</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                961AI Yellow Pages for Members
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The definitive national directory connecting verified entrepreneurs, deep AI researchers, sovereign engineers, and mentor guilds across Lebanon and the diaspora.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => onOpenAuth('signup')}
                className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shadow-xs"
              >
                <UserPlus className="w-4 h-4 text-slate-950" />
                <span>Join & List in Yellow Pages</span>
              </button>

              <button
                onClick={() => onNavigate('livenexus')}
                className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Live Nexus Chat</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-6 border-t border-slate-100">
            <div>
              <div className="text-2xl font-mono font-extrabold text-slate-950">{members.length}+</div>
              <div className="text-xs text-slate-500 font-medium">Verified Profiles</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-extrabold text-amber-600">100%</div>
              <div className="text-xs text-slate-500 font-medium">NCEI Vetted</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-extrabold text-slate-950">7 Sectors</div>
              <div className="text-xs text-slate-500 font-medium">From GovTech to Deep AI</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-extrabold text-cyan-600">Direct</div>
              <div className="text-xs text-slate-500 font-medium">Full Dossiers (No Pop-ups)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast Notification */}
      {contactSuccessMessage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-xs text-emerald-900 font-semibold flex items-center justify-between shadow-xs">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{contactSuccessMessage}</span>
            </div>
            <button 
              onClick={() => setContactSuccessMessage(null)}
              className="text-emerald-700 hover:text-emerald-950"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Filters and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search input */}
            <div className="relative grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, organization, skills (e.g., RAG, Arabic NLP, BDL, Escrow)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-hidden focus:border-amber-400 text-slate-900 placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Count & Inverted Search Telemetry */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center space-x-1.5 px-3 py-2 bg-amber-50 border border-amber-200/80 rounded-xl text-xs font-mono text-amber-900 shrink-0">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <span>Inverted Trie: <strong>{searchTelemetry.timeMs}ms</strong></span>
              </div>

              <div className="flex items-center justify-between md:justify-end px-3 py-2 bg-slate-100 rounded-xl text-xs font-mono text-slate-700 shrink-0">
                <span>Showing: <strong>{filteredMembers.length}</strong> of {members.length}</span>
              </div>

              {/* Virtualization Mode Toggle */}
              <button
                onClick={() => setIsVirtualized(!isVirtualized)}
                className={`px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center space-x-1.5 transition-colors border ${
                  isVirtualized
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
                title="Toggle Virtualized Dynamic Windowing"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isVirtualized ? 'Virtualization: ON (60fps)' : 'Virtualization: OFF'}</span>
              </button>
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs">
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Filter by Sector</label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full py-1.5 px-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-amber-400"
              >
                {sectors.map(s => (
                  <option key={s} value={s}>{s === 'all' ? 'All Sectors' : s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Filter by Role</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full py-1.5 px-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-amber-400"
              >
                {roles.map(r => (
                  <option key={r} value={r}>{r === 'all' ? 'All Roles' : r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Filter by Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full py-1.5 px-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-amber-400"
              >
                {locations.map(l => (
                  <option key={l} value={l}>{l === 'all' ? 'All Locations' : l}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Virtualization Active Telemetry Strip */}
          {isVirtualized && filteredMembers.length > 0 && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active Dynamic Windowing: <strong>{visibleMembers.length} DOM elements mounted</strong> (of {filteredMembers.length} filtered items)</span>
              </span>
              <span className="text-slate-400 hidden sm:inline">Calculated container height: {Math.round(totalHeight)}px</span>
            </div>
          )}
        </div>
      </div>

      {/* Members Grid Cards (Virtualized Container) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredMembers.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <Users className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No Verified Members Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No listings match your search criteria. Try clearing some filters or register a new profile.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedSector('all'); setSelectedRole('all'); setSelectedLocation('all'); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div 
            ref={containerRef}
            style={{ 
              minHeight: isVirtualized ? `${Math.max(400, totalHeight)}px` : 'auto', 
              position: 'relative' 
            }}
          >
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={isVirtualized ? { transform: `translateY(${offsetY}px)` } : undefined}
            >
              {visibleMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className={`bg-white rounded-2xl border transition-all hover:shadow-md flex flex-col justify-between cursor-pointer group ${
                    member.featured ? 'border-amber-300 ring-1 ring-amber-200' : 'border-slate-200 hover:border-amber-400'
                  }`}
                >
                  <div className="p-5 space-y-4">
                    {/* Top Bar: Badges & Tier */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                        <ShieldCheck className="w-3 h-3 text-amber-700" />
                        <span>{member.badge}</span>
                      </span>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                        {member.sector}
                      </span>
                    </div>

                    {/* Identity Header */}
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-mono font-bold text-base border border-slate-800 shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        {member.initials}
                      </div>

                      <div className="min-w-0 grow">
                        <h2 
                          className="text-base font-bold text-slate-950 truncate group-hover:text-amber-600 transition-colors"
                        >
                          {member.name}
                        </h2>
                        <p className="text-xs text-slate-600 font-medium truncate">
                          {member.title}
                        </p>
                        <div className="flex items-center space-x-1.5 text-[11px] text-slate-500 mt-0.5 truncate">
                          <Building className="w-3 h-3 shrink-0 text-slate-400" />
                          <span className="truncate">{member.organization}</span>
                        </div>
                      </div>
                    </div>

                    {/* Location & Status */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                      <div className="flex items-center space-x-1 truncate">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{member.location}</span>
                      </div>

                      <div className="flex items-center space-x-1 shrink-0">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="font-mono font-bold text-slate-800">{member.rating.toFixed(2)}</span>
                        <span className="text-slate-400">({member.projectsCount} builds)</span>
                      </div>
                    </div>

                    {/* Bio Excerpt */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skill Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {member.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                          +{member.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Contact & Booking Bar */}
                  <div 
                    className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 rounded-b-2xl flex items-center justify-between"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">Consultation Rate</span>
                      <span className="text-xs font-mono font-bold text-slate-900">{member.hourlyRate || 'Inquire'}</span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      {member.phone && (
                        <a
                          href={`tel:${member.phone.replace(/\s+/g, '')}`}
                          className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          title={`Call ${member.phone}`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        title={`Email ${member.email}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => setSelectedMember(member)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center space-x-1 shadow-xs"
                      >
                        <span>View Dossier</span>
                        <ArrowRight className="w-3 h-3 text-cyan-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
