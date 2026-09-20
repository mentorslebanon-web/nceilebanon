/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Building2, 
  TrendingUp, 
  Award, 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  Layers, 
  Sliders, 
  Cpu, 
  Rocket, 
  Briefcase, 
  Zap, 
  DollarSign, 
  ShieldCheck, 
  BarChart3, 
  ChevronRight,
  ChevronLeft,
  X,
  Share2,
  FileCheck,
  Menu,
  ChevronDown,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { PageId, AiCourseItem } from '../types';
import { AI_ENTREPRENEUR_COURSES, COURSE_CATEGORIES, STARTUP_STAGES } from '../data/aiCoursesData';
import { AiCourseDetailView } from '../components/AiCourseDetailView';

interface AiCoursesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher?: () => void;
}

export const AiCoursesPage: React.FC<AiCoursesPageProps> = ({ onNavigate, onOpenMatcher }) => {
  // Navigation & Selection state
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'case-studies' | 'matrix' | 'advisor' | 'detail'>('overview');
  
  // Filtering & Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarFilter, setSidebarFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Domains');
  const [selectedStage, setSelectedStage] = useState<string>('All Stages');
  
  // UI toggles
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [shareFeedback, setShareFeedback] = useState(false);

  // Advisor quiz state
  const [advisorStage, setAdvisorStage] = useState<'Idea / MVP' | 'Seed Stage' | 'Growth / Scale-up' | 'Enterprise B2B'>('Idea / MVP');
  const [advisorBottleneck, setAdvisorBottleneck] = useState<'mvp_speed' | 'sales_leads' | 'fundraising' | 'operations' | 'compliance' | 'finance'>('mvp_speed');
  const [advisorTechLevel, setAdvisorTechLevel] = useState<'non-technical' | 'semi-technical' | 'technical'>('non-technical');

  // Currently active course object (if viewing a course)
  const currentCourse = useMemo(() => {
    if (!selectedCourseId) return null;
    return AI_ENTREPRENEUR_COURSES.find(c => c.id === selectedCourseId) || null;
  }, [selectedCourseId]);

  // Index of current course for previous / next navigation
  const currentCourseIndex = useMemo(() => {
    if (!currentCourse) return -1;
    return AI_ENTREPRENEUR_COURSES.findIndex(c => c.id === currentCourse.id);
  }, [currentCourse]);

  const prevCourse = useMemo(() => {
    if (currentCourseIndex <= 0) return null;
    return AI_ENTREPRENEUR_COURSES[currentCourseIndex - 1];
  }, [currentCourseIndex]);

  const nextCourse = useMemo(() => {
    if (currentCourseIndex < 0 || currentCourseIndex >= AI_ENTREPRENEUR_COURSES.length - 1) return null;
    return AI_ENTREPRENEUR_COURSES[currentCourseIndex + 1];
  }, [currentCourseIndex]);

  // Filtered courses for main grid
  const filteredCourses = useMemo(() => {
    return AI_ENTREPRENEUR_COURSES.filter((course) => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.synopsis.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.targetTools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        course.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        course.caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All Domains' || course.category === selectedCategory;

      const matchesStage = 
        selectedStage === 'All Stages' || course.recommendedForStage.includes(selectedStage as any);

      return matchesSearch && matchesCategory && matchesStage;
    });
  }, [searchQuery, selectedCategory, selectedStage]);

  // Filtered courses for sidebar list
  const sidebarCourses = useMemo(() => {
    if (!sidebarFilter.trim()) return AI_ENTREPRENEUR_COURSES;
    const query = sidebarFilter.toLowerCase();
    return AI_ENTREPRENEUR_COURSES.filter(c => 
      c.title.toLowerCase().includes(query) ||
      c.provider.toLowerCase().includes(query) ||
      c.category.toLowerCase().includes(query) ||
      c.targetTools.some(t => t.toLowerCase().includes(query)) ||
      String(c.number).includes(query)
    );
  }, [sidebarFilter]);

  // Advisor recommended courses
  const recommendedCourses = useMemo(() => {
    return AI_ENTREPRENEUR_COURSES.filter(c => {
      if (advisorBottleneck === 'mvp_speed') {
        return c.id === 'deeplearning-bubble-nocode-ai-app-dev' || c.id === 'deeplearning-ai-for-everyone' || c.id === 'applied-genai-marketing-communication';
      }
      if (advisorBottleneck === 'sales_leads') {
        return c.id === 'hubspot-ai-sales-customer-success' || c.id === 'microsoft-ai-business-professional' || c.id === 'applied-genai-marketing-communication';
      }
      if (advisorBottleneck === 'fundraising') {
        return c.id === 'harvard-storytelling-narrative-ai' || c.id === 'cfi-wallstreetprep-genai-financial-modeling' || c.id === 'wharton-data-analysis-decision-making';
      }
      if (advisorBottleneck === 'operations') {
        return c.id === 'mit-xpro-process-automation-agentic' || c.id === 'microsoft-ai-business-professional' || c.id === 'mit-sloan-ai-business-strategy';
      }
      if (advisorBottleneck === 'compliance') {
        return c.id === 'oxford-iapp-ai-governance-compliance' || c.id === 'mit-sloan-ai-business-strategy' || c.id === 'duke-ai-for-product-management';
      }
      if (advisorBottleneck === 'finance') {
        return c.id === 'cfi-wallstreetprep-genai-financial-modeling' || c.id === 'wharton-data-analysis-decision-making' || c.id === 'harvard-storytelling-narrative-ai';
      }
      return true;
    });
  }, [advisorBottleneck]);

  // Select a course and switch to detail view
  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setActiveTab('detail');
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Switch to one of the overview tabs
  const handleSelectTab = (tab: 'overview' | 'case-studies' | 'matrix' | 'advisor') => {
    setActiveTab(tab);
    setSelectedCourseId(null);
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleCopyCitation = (course: AiCourseItem) => {
    const text = `${course.title} by ${course.provider} (${course.format}). Key Tools: ${course.targetTools.join(', ')}. Case Study: ${course.caseStudy.title} (${course.caseStudy.impactMetric}).`;
    navigator.clipboard.writeText(text);
    setCopiedId(course.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShareCourse = (course: AiCourseItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 flex flex-col">
      {/* Top Banner / Hero */}
      <section className="bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.18),rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30 inline-flex items-center space-x-1">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400 mr-1" />
              NCEI ENTREPRENEUR AI ACADEMY
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
              12 ESSENTIAL CURRICULUMS // VERIFIED REAL-WORLD IMPACT
            </span>
            {currentCourse && (
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-amber-950/80 text-amber-300 border border-amber-500/30">
                ACTIVE COURSE: #{String(currentCourse.number).padStart(2, '0')}
              </span>
            )}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                12 Essential AI Courses, Certifications & Tool Frameworks
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Master the practical curriculum empowering startup founders to compress R&D, automate agentic operations, 
                and slash acquisition costs. Use the persistent sidebar to toggle between course syllabi and empirical ROI case studies.
              </p>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 min-w-[120px]">
                <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">12</div>
                <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Certifications</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 min-w-[120px]">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">-$120K</div>
                <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">R&D Saved</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 min-w-[120px]">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">-35%</div>
                <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">CAC Dropped</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 min-w-[120px]">
                <div className="text-xl sm:text-2xl font-black text-purple-400 font-mono">45m→2m</div>
                <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Workflow Triage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sidebar Toggle Strip (Sticky on Mobile) */}
      <div className="lg:hidden sticky top-16 z-30 bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between shadow-xs">
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold shadow-xs hover:bg-slate-800 transition-colors"
        >
          <Menu className="w-4 h-4" />
          <span>{mobileSidebarOpen ? 'Hide Course Menu' : 'Course Directory (12)'}</span>
        </button>

        <div className="text-xs font-mono text-slate-600 truncate max-w-[200px]">
          {currentCourse ? (
            <span className="font-bold text-slate-900">
              #{String(currentCourse.number).padStart(2, '0')}: {currentCourse.title.slice(0, 22)}...
            </span>
          ) : (
            <span>All Curriculums Overview</span>
          )}
        </div>
      </div>

      {/* Main Container with Persistent Left Sidebar and Right Content */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col lg:flex-row gap-6">
        
        {/* ========================================================================= */}
        {/* PERSISTENT SIDEBAR NAVIGATION (Desktop Sticky + Mobile Drawer) */}
        {/* ========================================================================= */}
        <aside
          id="courses-persistent-sidebar"
          className={`
            lg:w-80 lg:shrink-0 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex flex-col 
            lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] overflow-hidden transition-all duration-200 z-20
            ${mobileSidebarOpen ? 'block fixed inset-x-4 top-28 max-h-[75vh] z-50 shadow-2xl' : 'hidden lg:flex'}
          `}
        >
          {/* Sidebar Top Header */}
          <div className="p-4 border-b border-slate-100 bg-slate-50/80 shrink-0 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-md bg-slate-950 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                  12
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Course Directory
                  </h2>
                  <span className="text-[10px] font-mono text-slate-500">
                    Entrepreneur Stacks
                  </span>
                </div>
              </div>

              {/* Close button for mobile drawer */}
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="lg:hidden p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Search inside Sidebar */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={sidebarFilter}
                onChange={(e) => setSidebarFilter(e.target.value)}
                placeholder="Filter courses & tools..."
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-400 text-slate-800"
              />
              {sidebarFilter && (
                <button
                  onClick={() => setSidebarFilter('')}
                  className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Top Shortcut Button: View All 12 Overview */}
            <button
              id="sidebar-view-all-overview"
              onClick={() => handleSelectTab('overview')}
              className={`w-full py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                activeTab === 'overview' && !selectedCourseId
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Layers className="w-3.5 h-3.5 text-cyan-500" />
                <span>All Curriculums Hub</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                12 Courses
              </span>
            </button>
          </div>

          {/* Scrollable Course Items List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-100">
            {sidebarCourses.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-400">
                No courses match "{sidebarFilter}"
              </div>
            ) : (
              sidebarCourses.map((course) => {
                const isSelected = selectedCourseId === course.id && activeTab === 'detail';
                return (
                  <button
                    key={course.id}
                    id={`sidebar-course-${course.id}`}
                    onClick={() => handleSelectCourse(course.id)}
                    className={`w-full text-left p-2.5 pt-3 rounded-xl transition-all flex items-start space-x-2.5 group relative ${
                      isSelected
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'hover:bg-slate-100/90 text-slate-700'
                    }`}
                  >
                    {/* Course Number Badge */}
                    <div className={`w-6 h-6 rounded-md font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}>
                      {String(course.number).padStart(2, '0')}
                    </div>

                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className={`text-[10px] font-mono font-semibold truncate ${
                          isSelected ? 'text-cyan-300' : 'text-slate-500'
                        }`}>
                          {course.provider.split('(')[0].trim()}
                        </span>
                        <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                          isSelected 
                            ? 'bg-slate-800 text-emerald-400 border border-slate-700' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {course.level === 'Foundational' ? 'Basic' : course.level === 'Intermediate' ? 'Mid' : 'Exec'}
                        </span>
                      </div>

                      <h4 className={`text-xs font-bold leading-tight line-clamp-2 ${
                        isSelected ? 'text-white' : 'text-slate-900 group-hover:text-cyan-700'
                      }`}>
                        {course.title}
                      </h4>

                      {/* Micro Impact Pill */}
                      <div className="mt-1.5 flex items-center justify-between">
                        <span className={`text-[10px] font-mono truncate max-w-[170px] ${
                          isSelected ? 'text-emerald-300' : 'text-emerald-700 font-medium'
                        }`}>
                          ROI: {course.caseStudy.impactMetric}
                        </span>
                        {isSelected && (
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Sidebar Footer Shortcuts */}
          <div className="p-3 border-t border-slate-100 bg-slate-50/90 shrink-0 flex items-center justify-between text-xs">
            <button
              onClick={() => handleSelectTab('advisor')}
              className={`inline-flex items-center space-x-1 font-semibold text-[11px] transition-colors ${
                activeTab === 'advisor' ? 'text-amber-600 font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Founder Advisor</span>
            </button>

            <button
              onClick={() => handleSelectTab('matrix')}
              className={`inline-flex items-center space-x-1 font-semibold text-[11px] transition-colors ${
                activeTab === 'matrix' ? 'text-indigo-600 font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Matrix</span>
            </button>

            <button
              onClick={() => handleSelectTab('case-studies')}
              className={`inline-flex items-center space-x-1 font-semibold text-[11px] transition-colors ${
                activeTab === 'case-studies' ? 'text-emerald-600 font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Rocket className="w-3.5 h-3.5 text-emerald-500" />
              <span>Vault</span>
            </button>
          </div>
        </aside>

        {/* ========================================================================= */}
        {/* RIGHT MAIN CONTENT AREA */}
        {/* ========================================================================= */}
        <main className="flex-1 min-w-0">

          {/* Top Mode Navigation Tabs (When on Overview or switches) */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-2 shadow-xs mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1">
              <button
                id="tab-btn-overview"
                onClick={() => handleSelectTab('overview')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeTab === 'overview' && !selectedCourseId
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-cyan-500" />
                <span>12 Frameworks Grid</span>
              </button>

              <button
                id="tab-btn-case-studies"
                onClick={() => handleSelectTab('case-studies')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeTab === 'case-studies'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Rocket className="w-3.5 h-3.5 text-emerald-500" />
                <span>Case Studies Vault</span>
              </button>

              <button
                id="tab-btn-matrix"
                onClick={() => handleSelectTab('matrix')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeTab === 'matrix'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />
                <span>Comparison Matrix</span>
              </button>

              <button
                id="tab-btn-advisor"
                onClick={() => handleSelectTab('advisor')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeTab === 'advisor'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Founder Path Advisor</span>
              </button>

              {currentCourse && activeTab === 'detail' && (
                <div className="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-50 text-cyan-900 border border-cyan-200 flex items-center space-x-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Viewing Course #{String(currentCourse.number).padStart(2, '0')}</span>
                </div>
              )}
            </div>

            {/* Search Input for Grid / Vault */}
            {activeTab !== 'detail' && (
              <div className="relative w-full md:w-64 shrink-0">
                <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tools, topics..."
                  className="w-full pl-8 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-cyan-500 focus:bg-white text-slate-900 transition-all placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* ======================================================================= */}
          {/* VIEW: COURSE DETAIL PAGE (Triggered from Persistent Sidebar or Grid) */}
          {/* ======================================================================= */}
          {activeTab === 'detail' && currentCourse && (
            <AiCourseDetailView
              course={currentCourse}
              prevCourse={prevCourse}
              nextCourse={nextCourse}
              onBack={() => handleSelectTab('overview')}
              onSelectCourse={handleSelectCourse}
              onOpenMatcher={onOpenMatcher}
            />
          )}

          {/* ======================================================================= */}
          {/* VIEW: 12 FRAMEWORKS GRID */}
          {/* ======================================================================= */}
          {activeTab === 'overview' && !selectedCourseId && (
            <div className="space-y-6">
              {/* Domain & Stage Filtering Toolbar */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono uppercase text-slate-400 mr-1 flex items-center">
                    <Filter className="w-3 h-3 mr-1" /> Domain:
                  </span>
                  {COURSE_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                        selectedCategory === cat
                          ? 'bg-slate-900 text-white font-semibold shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-1 text-xs">
                  <span className="text-[11px] font-mono text-slate-400 mr-1">Stage:</span>
                  <select
                    value={selectedStage}
                    onChange={(e) => setSelectedStage(e.target.value)}
                    className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-cyan-500"
                  >
                    {STARTUP_STAGES.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 12 Frameworks Grid Cards */}
              {filteredCourses.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
                  <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-slate-900">No courses match your filter criteria</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Try clearing your search query or switching domain filter back to "All Domains".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All Domains');
                      setSelectedStage('All Stages');
                    }}
                    className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      id={`course-card-${course.id}`}
                      className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-cyan-400 transition-all flex flex-col justify-between overflow-hidden group"
                    >
                      {/* Top Header Card */}
                      <div className="p-5 space-y-3.5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center space-x-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-950 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                              {String(course.number).padStart(2, '0')}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 text-slate-700">
                              {course.category}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                            {course.level}
                          </span>
                        </div>

                        {/* Course Title & Provider */}
                        <div>
                          <h3 
                            onClick={() => handleSelectCourse(course.id)}
                            className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2 leading-snug cursor-pointer"
                          >
                            {course.title}
                          </h3>
                          <div className="flex items-center space-x-1.5 mt-1 text-xs text-slate-600 font-medium">
                            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="line-clamp-1">{course.provider}</span>
                          </div>
                        </div>

                        {/* Target Tools Chips */}
                        <div className="flex flex-wrap gap-1">
                          {course.targetTools.slice(0, 3).map((tool, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-cyan-50 text-cyan-800 border border-cyan-200/60"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {course.synopsis}
                        </p>
                      </div>

                      {/* Bottom Mini Case Study Ribbon & Actions */}
                      <div className="p-4 bg-slate-50 border-t border-slate-200/80 space-y-2.5">
                        <div 
                          onClick={() => handleSelectCourse(course.id)}
                          className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 cursor-pointer transition-all shadow-2xs group/case"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] font-mono font-bold uppercase text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 flex items-center">
                              <Rocket className="w-2.5 h-2.5 mr-1 text-emerald-600" />
                              Case Study
                            </span>
                            <span className="text-[10px] font-mono font-bold text-slate-900">
                              {course.caseStudy.impactMetric}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-slate-900 group-hover/case:text-emerald-700 transition-colors line-clamp-1">
                            {course.caseStudy.title}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 text-xs">
                          <button
                            onClick={() => handleSelectCourse(course.id)}
                            className="inline-flex items-center space-x-1 font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
                          >
                            <span>Open Course Page</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleCopyCitation(course)}
                            title="Copy course brief"
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                          >
                            {copiedId === course.id ? 'Copied' : 'Brief'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ======================================================================= */}
          {/* VIEW: CASE STUDIES VAULT */}
          {/* ======================================================================= */}
          {activeTab === 'case-studies' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 text-white border border-cyan-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30 mb-2">
                    <Rocket className="w-3 h-3 mr-1" />
                    EMPIRICAL ROI // 12 STARTUP EXPERIMENTS
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">
                    Startup Case Studies Vault: Quantified Capital Efficiency
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                    See exact implementation methodologies early ventures used to convert executive AI theory into 
                    automated agent pipelines, KYC automation, and accelerated fundraising rounds.
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-mono text-slate-400 uppercase">Average Velocity Gain</div>
                  <div className="text-xl font-black text-emerald-400 font-mono">+42.5%</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {AI_ENTREPRENEUR_COURSES.map((course) => (
                  <div
                    key={course.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 transition-all shadow-xs flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                          Case #{course.number} // {course.caseStudy.industry}
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          {course.caseStudy.impactMetric}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {course.caseStudy.title}
                        </h3>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">
                          Coupled with: <span className="text-slate-800 font-semibold">{course.title}</span> ({course.provider})
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                        <span className="font-bold text-slate-900 block mb-1">Executive Summary:</span>
                        {course.caseStudy.summary}
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start space-x-2 text-xs text-emerald-950 font-medium">
                        <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">Startup Outcome: </span>
                          {course.caseStudy.impactHighlight}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {course.caseStudy.toolsUsed.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleSelectCourse(course.id)}
                        className="inline-flex items-center space-x-1 text-xs font-bold text-cyan-700 hover:text-cyan-900"
                      >
                        <span>View Full Framework</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================================= */}
          {/* VIEW: COMPARISON MATRIX */}
          {/* ======================================================================= */}
          {activeTab === 'matrix' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-5 border-b border-slate-200">
                <h2 className="text-base font-bold text-slate-900">
                  12 Essential AI Certifications: Full Matrix Comparison
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Evaluate credentials, weekly commitment, tool stack, and practical startup impact side-by-side.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[11px] font-mono uppercase text-slate-600 border-b border-slate-200">
                      <th className="py-3 px-3">#</th>
                      <th className="py-3 px-4">Curriculum / Title</th>
                      <th className="py-3 px-3">Authority</th>
                      <th className="py-3 px-3">Format</th>
                      <th className="py-3 px-3">Tools Stack</th>
                      <th className="py-3 px-3">Startup ROI</th>
                      <th className="py-3 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {AI_ENTREPRENEUR_COURSES.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-3 font-mono font-bold text-slate-400">
                          {String(c.number).padStart(2, '0')}
                        </td>
                        <td className="py-3 px-4 font-bold text-slate-900 max-w-xs">
                          {c.title}
                          <div className="text-[10px] text-slate-500 font-mono font-normal mt-0.5">{c.category}</div>
                        </td>
                        <td className="py-3 px-3 text-slate-700 font-medium truncate max-w-[140px]">
                          {c.provider}
                        </td>
                        <td className="py-3 px-3 font-mono text-slate-600">
                          {c.duration}
                        </td>
                        <td className="py-3 px-3 max-w-xs">
                          <div className="flex flex-wrap gap-1">
                            {c.targetTools.slice(0, 2).map((t, idx) => (
                              <span key={idx} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-cyan-50 text-cyan-800 border border-cyan-200">
                                {t}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-emerald-600">
                          {c.caseStudy.impactMetric}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => handleSelectCourse(c.id)}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 text-white font-bold text-[11px] hover:bg-cyan-700 transition-colors"
                          >
                            Detail
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ======================================================================= */}
          {/* VIEW: FOUNDER PATH ADVISOR */}
          {/* ======================================================================= */}
          {activeTab === 'advisor' && (
            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950 text-white border border-cyan-500/30 shadow-xl space-y-6">
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30 mb-2">
                    <Sparkles className="w-3.5 h-3.5 mr-1" />
                    FOUNDER AI CURRICULUM RECOMMENDER
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    Find Your Critical AI Framework in 3 Questions
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                    Select your current stage, primary operational friction point, and team background to receive a tailored sequence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      1. Startup Stage
                    </label>
                    <div className="space-y-1.5">
                      {(['Idea / MVP', 'Seed Stage', 'Growth / Scale-up', 'Enterprise B2B'] as const).map((stage) => (
                        <button
                          key={stage}
                          onClick={() => setAdvisorStage(stage)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                            advisorStage === stage
                              ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {stage}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      2. Primary Bottleneck
                    </label>
                    <div className="space-y-1.5">
                      {[
                        { id: 'mvp_speed', label: 'Building MVP Fast & Cheap' },
                        { id: 'sales_leads', label: 'Closing Leads & Support' },
                        { id: 'fundraising', label: 'Pitch Decks & Venture Capital' },
                        { id: 'operations', label: 'Manual Ops & Admin Tasks' },
                        { id: 'compliance', label: 'Data Privacy & Enterprise RFPs' },
                        { id: 'finance', label: 'Runway & Valuation Modeling' },
                      ].map((b) => (
                        <button
                          key={b.id}
                          onClick={() => setAdvisorBottleneck(b.id as any)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                            advisorBottleneck === b.id
                              ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      3. Technical Profile
                    </label>
                    <div className="space-y-1.5">
                      {[
                        { id: 'non-technical', label: 'Non-Technical (Solo / Biz)' },
                        { id: 'semi-technical', label: 'Semi-Technical (Product / Ops)' },
                        { id: 'technical', label: 'Technical (Engineer / Tech Lead)' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setAdvisorTechLevel(t.id as any)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                            advisorTechLevel === t.id
                              ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Course Cards */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5" />
                    Recommended AI Pathways for Your Profile:
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {recommendedCourses.length} Recommended Curriculums
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendedCourses.map((c, i) => (
                    <div 
                      key={c.id} 
                      className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 transition-all shadow-xs flex flex-col justify-between space-y-4"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
                            Step 0{i + 1} Priority
                          </span>
                          <span className="text-[11px] font-mono text-slate-500">
                            {c.duration}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {c.title}
                        </h4>
                        <div className="text-xs text-slate-500 mt-1">{c.provider}</div>
                        <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                          {c.synopsis}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <div className="text-[10px] font-mono text-emerald-700 font-bold mb-2">
                          ROI Metric: {c.caseStudy.impactMetric}
                        </div>
                        <button
                          onClick={() => handleSelectCourse(c.id)}
                          className="w-full py-1.5 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-cyan-700 transition-colors"
                        >
                          Explore Course Detail
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};
