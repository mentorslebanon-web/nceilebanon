import React, { useState, useRef, useEffect } from 'react';
import { PageId, UserProfile } from '../types';
import { ECOSYSTEM_METADATA } from '../data/ecosystemData';
import { 
  Cpu, 
  Menu, 
  X, 
  Sparkles, 
  Radio, 
  Terminal, 
  ShieldCheck, 
  FolderKanban, 
  FileText, 
  Rocket, 
  ChevronRight,
  ChevronDown,
  Search,
  Users,
  Key,
  LogIn,
  LogOut,
  Lock,
  UserCheck,
  UserPlus,
  ArrowLeft,
  Layers,
  GraduationCap
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  currentUser: UserProfile | null;
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess: () => void;
  onOpenAuth: (mode?: 'signin' | 'signup') => void;
  onSignOut: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  currentUser,
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess,
  onOpenAuth,
  onSignOut
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [sectionsDropdownOpen, setSectionsDropdownOpen] = useState(false);
  const [mobileSectionsOpen, setMobileSectionsOpen] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or ESC key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSectionsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSectionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Primary top-level links
  const topNavLinks: { id: PageId; label: string; icon: React.ReactNode; badge?: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home', icon: <Cpu className="w-4 h-4" /> },
    { id: 'ai-courses', label: 'AI Courses', icon: <GraduationCap className="w-4 h-4 text-emerald-600" />, badge: '12 CERTS', highlight: true },
    { id: 'yellow-pages', label: 'Yellow Pages', icon: <Users className="w-4 h-4 text-amber-500" />, badge: 'MEMBERS', highlight: true },
    { id: 'policy-papers', label: 'Policy & Research', icon: <FileText className="w-4 h-4 text-cyan-600" />, badge: 'PAPERS', highlight: true },
  ];

  // Submenu items under "Our Sections"
  const ourSectionsItems: {
    id?: PageId;
    label: string;
    icon: React.ReactNode;
    badge?: string;
    badgeColor?: string;
    action?: 'navigate' | 'matcher' | 'home';
    description?: string;
  }[] = [
    { 
      id: 'ai-courses', 
      label: '12 Essential AI Courses', 
      icon: <GraduationCap className="w-4 h-4 text-emerald-500" />, 
      badge: 'ACADEMY',
      badgeColor: 'bg-emerald-500 text-slate-950 font-bold',
      action: 'navigate',
      description: 'Executive certifications & startup case studies'
    },
    { 
      id: 'neural-matcher', 
      label: 'Neural Matcher', 
      icon: <Sparkles className="w-4 h-4 text-cyan-500" />, 
      badge: 'AI ENGINE',
      badgeColor: 'bg-cyan-500 text-slate-950 font-bold',
      action: 'navigate',
      description: 'Bilateral matchmaking and vector similarity'
    },
    { 
      id: 'competencies', 
      label: 'Competencies', 
      icon: <ShieldCheck className="w-4 h-4 text-indigo-500" />, 
      action: 'navigate',
      description: 'Verified engineering credentials & frameworks'
    },
    { 
      id: 'architecture', 
      label: 'Deployments', 
      icon: <FolderKanban className="w-4 h-4 text-sky-500" />, 
      action: 'navigate',
      description: 'Production topology and technical blueprints'
    },
    { 
      id: 'livenexus', 
      label: 'Live Nexus', 
      icon: <Radio className="w-4 h-4 text-rose-500 animate-pulse" />, 
      badge: 'LIVE',
      badgeColor: 'bg-rose-500 text-white font-bold',
      action: 'navigate',
      description: 'Real-time telemetry and 466 ecosystem nodes'
    },
    { 
      id: 'guilds-dev', 
      label: 'Guilds & Dev', 
      icon: <Terminal className="w-4 h-4 text-emerald-500" />, 
      action: 'navigate',
      description: 'Builder working groups and code repositories'
    },
    { 
      id: 'leadership', 
      label: 'Values', 
      icon: <Cpu className="w-4 h-4 text-amber-500" />, 
      action: 'navigate',
      description: 'Ethical governance and institutional mandate'
    },
    { 
      id: 'national-cv', 
      label: 'National CV', 
      icon: <FileText className="w-4 h-4 text-blue-500" />, 
      action: 'navigate',
      description: 'Lebanon innovation track record and benchmarks'
    },
    { 
      id: 'startups', 
      label: 'Startups', 
      icon: <Rocket className="w-4 h-4 text-purple-500" />, 
      action: 'navigate',
      description: 'Venture directory and commercial scaling index'
    },
    { 
      label: 'Matcher', 
      icon: <Sparkles className="w-4 h-4 text-cyan-600" />, 
      badge: 'LAUNCH',
      badgeColor: 'bg-slate-900 text-cyan-300 font-bold',
      action: 'matcher',
      description: 'Instant matchmaking assistant popup'
    },
    { 
      id: 'home',
      label: 'Back to Ecosystem Overview', 
      icon: <ArrowLeft className="w-4 h-4 text-slate-500" />, 
      action: 'home',
      description: 'Return to ecosystem root dashboard'
    },
  ];

  const isOurSectionsActive = [
    'ai-courses',
    'neural-matcher',
    'competencies',
    'architecture',
    'livenexus',
    'guilds-dev',
    'leadership',
    'national-cv',
    'startups'
  ].includes(currentPage);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setSectionsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Telemetry & Byline Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs px-4 py-1.5 border-b border-cyan-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-[11px] tracking-wide">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping mr-1"></span>
              961AI OPERATIONAL
            </span>
            <span className="text-slate-300 font-medium truncate">
              {ECOSYSTEM_METADATA.byline}
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] font-mono text-slate-400">
            <span className="hidden sm:inline-flex items-center text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
              Live Nexus: 466 Active Nodes
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">MENA Innovation Grid</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Branding */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group select-none"
            id="nav-logo"
          >
            {/* High tech cybernetic crest */}
            <div className="relative w-10 h-10 rounded-lg bg-slate-950 border border-cyan-500/50 flex items-center justify-center shadow-xs group-hover:border-cyan-400 transition-all">
              <div className="absolute inset-0 bg-cyan-500/10 rounded-lg"></div>
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-white"></div>
            </div>

            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900">
                  NCEI <span className="text-cyan-600">LEBANON</span>
                </span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-cyan-50 text-cyan-700 font-semibold border border-cyan-200">
                  961AI
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-tight">
                National Council for Entrepreneurship & Innovation
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {topNavLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-1.5 rounded-md text-xs font-semibold tracking-tight transition-colors flex items-center space-x-1.5 ${
                    isActive
                      ? 'text-cyan-700 bg-cyan-50/80 border border-cyan-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className={`ml-1 px-1 py-0.2 text-[9px] font-mono font-bold rounded ${
                      link.highlight ? 'bg-amber-400 text-slate-950' : 'bg-cyan-500 text-white'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Our Sections Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="nav-dropdown-our-sections"
                onClick={() => setSectionsDropdownOpen(!sectionsDropdownOpen)}
                aria-expanded={sectionsDropdownOpen}
                aria-haspopup="true"
                className={`relative px-3 py-1.5 rounded-md text-xs font-semibold tracking-tight transition-all flex items-center space-x-1.5 border ${
                  isOurSectionsActive || sectionsDropdownOpen
                    ? 'text-cyan-800 bg-cyan-50/90 border-cyan-300 shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 border-transparent'
                }`}
              >
                <Layers className="w-4 h-4 text-cyan-600" />
                <span>Our Sections</span>
                {isOurSectionsActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 ring-2 ring-cyan-200"></span>
                )}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sectionsDropdownOpen ? 'rotate-180 text-cyan-600' : 'text-slate-400'}`} />
              </button>

              {sectionsDropdownOpen && (
                <div 
                  id="dropdown-our-sections-panel"
                  className="absolute left-0 mt-2 w-80 rounded-2xl bg-white/98 backdrop-blur-md border border-slate-200/90 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150 divide-y divide-slate-100"
                >
                  <div className="px-3.5 py-1.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      Our Sections
                    </span>
                    <span className="text-[9px] font-mono text-cyan-700 font-semibold bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">
                      961AI DIRECTORY
                    </span>
                  </div>

                  {/* Main Submenus */}
                  <div className="py-1 px-1.5 space-y-0.5 max-h-[60vh] overflow-y-auto">
                    {ourSectionsItems.filter((item) => item.action !== 'matcher' && item.action !== 'home').map((item) => {
                      const isActive = currentPage === item.id;
                      return (
                        <button
                          key={item.label}
                          id={`dropdown-item-${item.id || item.label.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => {
                            if (item.id) handleNavClick(item.id);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors ${
                            isActive
                              ? 'bg-cyan-50 text-cyan-900 font-bold border border-cyan-200/80'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                          }`}
                        >
                          <div className="flex items-center space-x-2.5 min-w-0">
                            <span className={`p-1.5 rounded-lg shrink-0 ${isActive ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-600'}`}>
                              {item.icon}
                            </span>
                            <div className="truncate">
                              <div className="text-xs font-semibold tracking-tight text-slate-900 truncate">
                                {item.label}
                              </div>
                              {item.description && (
                                <div className="text-[10px] text-slate-500 font-normal truncate">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </div>
                          {item.badge && (
                            <span className={`ml-2 px-1.5 py-0.5 text-[9px] font-mono rounded shrink-0 ${item.badgeColor || 'bg-cyan-500 text-white'}`}>
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Bottom Actions: Matcher & Back to Ecosystem Overview */}
                  <div className="pt-1.5 pb-1 px-1.5 bg-slate-50/70 space-y-0.5">
                    {ourSectionsItems.filter((item) => item.action === 'matcher' || item.action === 'home').map((item) => (
                      <button
                        key={item.label}
                        id={`dropdown-action-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => {
                          if (item.action === 'matcher') {
                            onOpenMatcher();
                            setSectionsDropdownOpen(false);
                          } else if (item.action === 'home') {
                            handleNavClick('home');
                          }
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors ${
                          item.action === 'matcher'
                            ? 'bg-cyan-50/90 hover:bg-cyan-100/80 text-cyan-950 border border-cyan-200/80 font-bold'
                            : 'hover:bg-slate-100 text-slate-700 hover:text-slate-950'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                            {item.icon}
                          </span>
                          <div>
                            <div className="text-xs font-bold tracking-tight text-slate-900">
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="text-[10px] text-slate-500 font-normal">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </div>
                        {item.badge && (
                          <span className={`px-1.5 py-0.5 text-[9px] font-mono rounded shrink-0 ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center space-x-2.5">
            {/* Quick Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-slate-100 rounded-lg px-2.5 py-1 border border-slate-300">
                  <Search className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
                  <input
                    type="text"
                    placeholder="Search systems, RAG, CV..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden w-40"
                    autoFocus
                    onBlur={() => !searchQuery && setSearchOpen(false)}
                  />
                  <button 
                    onClick={() => { setSearchQuery(''); setSearchOpen(false); }}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  title="Search Ecosystem"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Neural Matcher Primary Button */}
            <button
              id="cta-neural-matcher-nav"
              onClick={onOpenMatcher}
              className={`relative inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all shadow-xs ${
                currentPage === 'neural-matcher'
                  ? 'bg-cyan-500 text-slate-950 border border-cyan-400 ring-2 ring-cyan-400/40 shadow-xs'
                  : 'text-slate-900 bg-cyan-100/70 border border-cyan-300 hover:bg-cyan-200/80 hover:border-cyan-400'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${currentPage === 'neural-matcher' ? 'text-slate-950' : 'text-cyan-600'}`} />
              <span className="hidden 2xl:inline">Neural Matcher</span>
              <span className="2xl:hidden">Matcher</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
            </button>

            {/* User Auth or Sign In / Sign Up CTAs */}
            {currentUser ? (
              <div className="flex items-center space-x-2 pl-1 border-l border-slate-200">
                <div 
                  onClick={() => onNavigate('yellow-pages')}
                  className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 cursor-pointer transition-colors border border-slate-200"
                  title="View Profile in Yellow Pages"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-950 text-cyan-400 font-mono font-bold text-[10px] flex items-center justify-center">
                    {currentUser.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="text-left hidden xl:block">
                    <span className="text-xs font-bold text-slate-900 block leading-tight truncate max-w-[100px]">
                      {currentUser.name}
                    </span>
                    <span className="text-[9px] font-mono text-cyan-700 block uppercase">
                      {currentUser.badge}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onSignOut}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  title="Sign Out of Session"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => onOpenAuth('signin')}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1 ${
                    currentPage === 'register'
                      ? 'bg-slate-200 text-slate-950 font-bold'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors shadow-xs ${
                    currentPage === 'register'
                      ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400/50'
                      : 'text-slate-950 bg-amber-400 hover:bg-amber-300'
                  }`}
                >
                  <span>Sign Up</span>
                </button>
              </div>
            )}

            {/* Admin Protected Route /Maan70939779 Quick Entry */}
            <button
              id="cta-admin-nav"
              onClick={() => onNavigate('admin-maan')}
              className={`p-2 rounded-lg text-xs font-semibold transition-all border flex items-center space-x-1 ${
                currentPage === 'admin-maan'
                  ? 'bg-slate-950 text-cyan-400 border-cyan-500 shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-950 hover:bg-slate-100 border-slate-200'
              }`}
              title="Admin Command Console /Maan70939779"
            >
              <Lock className="w-3.5 h-3.5 text-slate-700" />
              <span className="text-[10px] font-mono hidden 2xl:inline">/Maan</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenAuth('signin')}
              className="p-2 rounded-md text-slate-700 bg-slate-100 text-xs font-bold"
            >
              <LogIn className="w-4 h-4" />
            </button>
            <button
              id="mobile-matcher-btn"
              onClick={onOpenMatcher}
              className="p-2 rounded-md text-cyan-600 bg-cyan-50 border border-cyan-200"
              title="Neural Matcher"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          {/* User Auth Info in Mobile */}
          {currentUser ? (
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">
                  {currentUser.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{currentUser.name}</div>
                  <div className="text-[10px] text-cyan-700 font-mono">{currentUser.badge}</div>
                </div>
              </div>
              <button
                onClick={onSignOut}
                className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { onOpenAuth('signin'); setMobileMenuOpen(false); }}
                className="py-2 px-3 rounded-lg text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 flex items-center justify-center space-x-1"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
              <button
                onClick={() => { onOpenAuth('signup'); setMobileMenuOpen(false); }}
                className="py-2 px-3 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 flex items-center justify-center space-x-1"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Sign Up</span>
              </button>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 py-1">
            <button
              onClick={() => { onOpenMatcher(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg text-xs font-bold text-cyan-900 bg-cyan-50 border border-cyan-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Neural Matcher</span>
            </button>
            <button
              onClick={() => { onOpenGetAccess(); setMobileMenuOpen(false); }}
              className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg text-xs font-bold text-white bg-slate-950 border border-slate-800"
            >
              <span>Get Access</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          <div className="space-y-1 pt-1">
            {/* Primary Top Links */}
            {topNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === link.id
                    ? 'text-cyan-600 bg-cyan-50/70 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className={`px-1.5 py-0.5 text-[10px] font-mono font-bold rounded ${
                    link.highlight ? 'bg-amber-400 text-slate-950' : 'bg-cyan-500 text-white'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </button>
            ))}

            {/* Expandable "Our Sections" in Mobile */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setMobileSectionsOpen(!mobileSectionsOpen)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-colors ${
                  isOurSectionsActive
                    ? 'bg-cyan-50 text-cyan-900 border border-cyan-200'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-cyan-600" />
                  <span>Our Sections</span>
                  {isOurSectionsActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                  )}
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] font-mono text-slate-500 normal-case">
                    {ourSectionsItems.length} items
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileSectionsOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {mobileSectionsOpen && (
                <div className="mt-1.5 pl-2 pr-1 space-y-1 border-l-2 border-cyan-200/80 ml-3">
                  {ourSectionsItems.map((item) => {
                    const isSubActive = item.id && currentPage === item.id;
                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          if (item.action === 'matcher') {
                            onOpenMatcher();
                            setMobileMenuOpen(false);
                          } else if (item.action === 'home') {
                            handleNavClick('home');
                          } else if (item.id) {
                            handleNavClick(item.id);
                          }
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 text-xs rounded-lg transition-colors ${
                          isSubActive
                            ? 'text-cyan-800 bg-cyan-50 font-bold'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2 truncate">
                          {item.icon}
                          <span className="truncate">{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className={`px-1.5 py-0.2 text-[9px] font-mono rounded shrink-0 ${item.badgeColor || 'bg-cyan-500 text-white'}`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Admin page link in mobile menu */}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('admin-maan')}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                <div className="flex items-center space-x-2.5">
                  <Lock className="w-4 h-4 text-slate-600" />
                  <span>Admin Portal (/Maan70939779)</span>
                </div>
                <span className="px-1.5 py-0.5 text-[9px] font-mono bg-slate-900 text-cyan-400 rounded">
                  SECURE
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
