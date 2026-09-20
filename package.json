/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Clock, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ChevronsUpDown,
  Copy, 
  Check, 
  Share2, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Rocket, 
  Zap, 
  CheckCircle2, 
  Compass, 
  Wrench, 
  Code2, 
  FileText, 
  ExternalLink, 
  ShieldAlert, 
  TrendingUp, 
  DollarSign,
  ArrowRight,
  ListChecks,
  FileCheck,
  Quote,
  Terminal,
  HelpCircle
} from 'lucide-react';
import { AiCourseItem, AiCourseModule } from '../types';

interface AiCourseDetailViewProps {
  course: AiCourseItem;
  prevCourse: AiCourseItem | null;
  nextCourse: AiCourseItem | null;
  onBack: () => void;
  onSelectCourse: (courseId: string) => void;
  onOpenMatcher?: () => void;
}

export const AiCourseDetailView: React.FC<AiCourseDetailViewProps> = ({
  course,
  prevCourse,
  nextCourse,
  onBack,
  onSelectCourse,
  onOpenMatcher
}) => {
  const [activeSection, setActiveSection] = useState<'all' | 'syllabus' | 'case-study' | 'resources' | 'checklist'>('all');
  const [copiedPromptIndex, setCopiedPromptIndex] = useState<number | null>(null);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  // Accordion state: by default, Module 1 is expanded for quick scanning
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({ 1: true });

  // Reset expanded state to Module 1 when switching between courses
  useEffect(() => {
    setExpandedModules({ 1: true });
  }, [course.id]);

  const toggleModule = (moduleNumber: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleNumber]: !prev[moduleNumber]
    }));
  };

  const handleToggleAllModules = () => {
    if (!course.syllabus || course.syllabus.length === 0) return;
    const allExpanded = course.syllabus.every(m => expandedModules[m.moduleNumber]);
    if (allExpanded) {
      setExpandedModules({});
    } else {
      const all: Record<number, boolean> = {};
      course.syllabus.forEach(m => {
        all[m.moduleNumber] = true;
      });
      setExpandedModules(all);
    }
  };

  const handleCopyPrompt = (promptText: string, index: number) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptIndex(index);
    setTimeout(() => setCopiedPromptIndex(null), 2500);
  };

  const handleCopyCourseBrief = () => {
    const text = `Course #${course.number}: ${course.title}\nProvider: ${course.provider} (${course.format})\nLevel: ${course.level} | Domain: ${course.category}\n\nSynopsis:\n${course.synopsis}\n\nCase Study: ${course.caseStudy.title} (${course.caseStudy.impactMetric})\n${course.caseStudy.summary}`;
    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleShareCourse = () => {
    const url = `${window.location.origin}${window.location.pathname}#course-${course.id}`;
    navigator.clipboard.writeText(url);
    setShareFeedback(true);
    setTimeout(() => setShareFeedback(false), 2500);
  };

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-200" id={`course-detail-${course.id}`}>
      {/* Top Breadcrumbs & Course Stepper */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex items-center space-x-2 text-xs text-slate-600">
          <button
            onClick={onBack}
            className="hover:text-cyan-700 font-semibold flex items-center space-x-1 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>All 12 Curriculums</span>
          </button>
          <span className="text-slate-400">/</span>
          <span className="text-slate-500 font-mono">{course.category}</span>
          <span className="text-slate-400">/</span>
          <span className="font-bold text-slate-900">
            Course #{String(course.number).padStart(2, '0')}
          </span>
        </div>

        {/* Prev / Next Navigation */}
        <div className="flex items-center space-x-2">
          {prevCourse && (
            <button
              id="course-prev-btn"
              onClick={() => onSelectCourse(prevCourse.id)}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors"
              title={`Previous: #${prevCourse.number} ${prevCourse.title}`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>#{String(prevCourse.number).padStart(2, '0')} Prev</span>
            </button>
          )}
          {nextCourse && (
            <button
              id="course-next-btn"
              onClick={() => onSelectCourse(nextCourse.id)}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors"
              title={`Next: #${nextCourse.number} ${nextCourse.title}`}
            >
              <span>Next #{String(nextCourse.number).padStart(2, '0')}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-slate-950 text-cyan-400 font-mono font-bold text-sm flex items-center justify-center border border-cyan-500/30 shadow-2xs">
                {String(course.number).padStart(2, '0')}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase bg-slate-100 text-slate-800">
                {course.category}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-50 text-cyan-800 border border-cyan-200">
                {course.level}
              </span>
              {course.accreditationBadge && (
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center space-x-1">
                  <Award className="w-3 h-3 mr-1 text-amber-600" />
                  <span>{course.accreditationBadge}</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {course.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center space-x-1.5 font-semibold text-slate-900">
                <Building2 className="w-4 h-4 text-cyan-600" />
                <span>{course.provider}</span>
              </div>
              <div className="flex items-center space-x-1.5 font-mono text-slate-600">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{course.format}</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-slate-100 font-mono text-slate-700 text-xs">
                Duration: {course.duration}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap lg:flex-col items-end gap-2 shrink-0">
            <button
              id="btn-copy-brief"
              onClick={handleCopyCourseBrief}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-mono bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              {copiedBrief ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Brief Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Course Brief</span>
                </>
              )}
            </button>

            <button
              id="btn-share-course"
              onClick={handleShareCourse}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-mono bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{shareFeedback ? 'Deep-Link Copied' : 'Share Course'}</span>
            </button>

            {onOpenMatcher && (
              <button
                id="btn-match-mentors"
                onClick={onOpenMatcher}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Match AI Mentors</span>
              </button>
            )}
          </div>
        </div>

        {/* Synopsis & Strategic Purpose */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Executive Synopsis & Strategic Founder Intent
          </h2>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            {course.synopsis}
          </p>
        </div>

        {/* Quick Tags: Tech Stack & Skills */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Target Frameworks, SDKs & Concrete Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {course.targetTools.map((tool, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-cyan-50 text-cyan-900 border border-cyan-200 flex items-center space-x-1"
              >
                <Code2 className="w-3 h-3 text-cyan-600" />
                <span>{tool}</span>
              </span>
            ))}
            {course.skills.map((skill, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Internal In-Page Navigation Bar */}
      <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-md p-2 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-1.5">
        <button
          onClick={() => setActiveSection('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeSection === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          All Sections
        </button>
        <button
          onClick={() => setActiveSection('syllabus')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
            activeSection === 'syllabus'
              ? 'bg-cyan-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Syllabus & Modules ({course.syllabus?.length || 4})</span>
        </button>
        <button
          onClick={() => setActiveSection('case-study')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
            activeSection === 'case-study'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Rocket className="w-3.5 h-3.5" />
          <span>Case Study Deep-Dive</span>
        </button>
        <button
          onClick={() => setActiveSection('resources')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
            activeSection === 'resources'
              ? 'bg-violet-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Founder Prompts & Tool Guide</span>
        </button>
        <button
          onClick={() => setActiveSection('checklist')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
            activeSection === 'checklist'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <ListChecks className="w-3.5 h-3.5" />
          <span>Action Checklist</span>
        </button>
      </div>

      {/* ======================================================================= */}
      {/* SECTION 1: DETAILED SYLLABUS & MODULES (ACCORDION STYLE) */}
      {/* ======================================================================= */}
      {(activeSection === 'all' || activeSection === 'syllabus') && (
        <section id="section-course-syllabus" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Curriculum Syllabus & Founder Milestones
                </h2>
                <p className="text-xs text-slate-500 font-mono">
                  {course.syllabus?.length || 0} Instructional Modules • Total Pace: {course.duration}
                </p>
              </div>
            </div>

            {course.syllabus && course.syllabus.length > 0 && (
              <div className="flex items-center space-x-2 self-start sm:self-auto">
                <button
                  type="button"
                  id="btn-toggle-all-modules"
                  onClick={handleToggleAllModules}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200 cursor-pointer shadow-2xs"
                  title="Toggle all modules expanded or collapsed"
                >
                  <ChevronsUpDown className="w-3.5 h-3.5 text-slate-500" />
                  <span>
                    {course.syllabus.every(m => expandedModules[m.moduleNumber])
                      ? 'Collapse All'
                      : 'Expand All'}
                  </span>
                  <span className="ml-1 px-1.5 py-0.2 rounded text-[10px] font-mono bg-white text-slate-600 border border-slate-200">
                    {course.syllabus.filter(m => expandedModules[m.moduleNumber]).length}/{course.syllabus.length} Open
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {course.syllabus && course.syllabus.length > 0 ? (
              course.syllabus.map((mod: AiCourseModule) => {
                const isExpanded = !!expandedModules[mod.moduleNumber];
                return (
                  <div 
                    key={mod.moduleNumber}
                    id={`syllabus-module-accordion-${course.id}-${mod.moduleNumber}`}
                    className={`bg-white rounded-2xl border transition-all shadow-2xs overflow-hidden ${
                      isExpanded 
                        ? 'border-cyan-300 ring-1 ring-cyan-100 shadow-xs' 
                        : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      type="button"
                      id={`accordion-trigger-module-${mod.moduleNumber}`}
                      onClick={() => toggleModule(mod.moduleNumber)}
                      aria-expanded={isExpanded}
                      aria-controls={`accordion-body-module-${mod.moduleNumber}`}
                      className="w-full text-left p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none transition-colors hover:bg-slate-50/70"
                    >
                      <div className="flex items-start sm:items-center space-x-3 min-w-0">
                        <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold shrink-0 transition-colors ${
                          isExpanded 
                            ? 'bg-cyan-600 text-white shadow-2xs' 
                            : 'bg-cyan-50 text-cyan-900 border border-cyan-200'
                        }`}>
                          Module {String(mod.moduleNumber).padStart(2, '0')}
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {mod.title}
                          </h3>
                          {!isExpanded && (
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 pt-1 font-mono">
                              <span className="font-semibold text-cyan-800 bg-cyan-50/70 px-1.5 py-0.5 rounded border border-cyan-100">
                                {mod.topics.length} Core Topics
                              </span>
                              <span className="text-slate-300">•</span>
                              <span className="truncate max-w-[280px] sm:max-w-[420px] text-slate-600">
                                Lab: {mod.handsOnLab}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2.5 shrink-0 self-end sm:self-auto">
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200/60">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{mod.duration}</span>
                        </span>
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                          isExpanded ? 'bg-cyan-100 text-cyan-800' : 'bg-slate-100 text-slate-500 hover:text-slate-700'
                        }`}>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </button>

                    {/* Accordion Collapsible Body */}
                    <div
                      id={`accordion-body-module-${mod.moduleNumber}`}
                      className={`grid transition-all duration-200 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-slate-100 space-y-4">
                          {/* Core Topics Covered */}
                          <div className="space-y-2">
                            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                              Core Topics & Frameworks Covered:
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                              {mod.topics.map((topic, tIdx) => (
                                <div key={tIdx} className="flex items-start space-x-2 bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                                  <span className="leading-snug">{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Hands-On Lab and Deliverable Cards */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-1">
                            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1">
                              <div className="flex items-center space-x-1.5 font-bold font-mono text-[11px] uppercase tracking-wider text-amber-900">
                                <Wrench className="w-3.5 h-3.5 text-amber-700" />
                                <span>Hands-On Lab & Practical Exercise:</span>
                              </div>
                              <p className="leading-relaxed pl-5 text-amber-900/90">{mod.handsOnLab}</p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                              <div className="flex items-center space-x-1.5 font-bold font-mono text-[11px] uppercase tracking-wider text-emerald-900">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                                <span>Founder Deliverable:</span>
                              </div>
                              <p className="leading-relaxed pl-5 font-semibold text-emerald-900">{mod.founderDeliverable}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                Syllabus modules for this course are currently being synthesized.
              </div>
            )}
          </div>
        </section>
      )}

      {/* ======================================================================= */}
      {/* SECTION 2: INTEGRATED DEEP-DIVE CASE STUDY */}
      {/* ======================================================================= */}
      {(activeSection === 'all' || activeSection === 'case-study') && (
        <section id="section-course-case-study" className="space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Rocket className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Real-World Startup Case Study: Deep-Dive Analysis
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-br from-emerald-50/90 via-teal-50/40 to-white border border-emerald-300 space-y-6 shadow-xs">
            {/* Header Badge & Metric */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-900 bg-emerald-200/90 px-2.5 py-1 rounded-md border border-emerald-300 inline-flex items-center space-x-1">
                  <Rocket className="w-3.5 h-3.5 mr-1 text-emerald-700" />
                  <span>Case Study #{course.number} // {course.caseStudy.industry}</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {course.caseStudy.title}
                </h3>
              </div>

              <div className="text-right sm:text-right shrink-0">
                <div className="inline-block px-4 py-2 rounded-2xl bg-white border border-emerald-300 shadow-2xs">
                  <div className="text-xs font-mono text-slate-500 uppercase">Primary KPI Lift</div>
                  <div className="text-base sm:text-lg font-black text-emerald-700 font-mono">
                    {course.caseStudy.impactMetric}
                  </div>
                </div>
              </div>
            </div>

            {/* Context Summary */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white/80 p-5 rounded-2xl border border-emerald-200/70">
              {course.caseStudy.summary}
            </p>

            {/* Two-Column Problem vs Architecture Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-rose-200/80 shadow-2xs space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-bold uppercase text-rose-700">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span>Pre-AI Operational Bottleneck (Baseline):</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {course.caseStudy.baselineProblem || course.caseStudy.summary}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-emerald-200/80 shadow-2xs space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-bold uppercase text-emerald-800">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  <span>Engineered AI Architecture:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {course.caseStudy.solutionArchitecture || course.caseStudy.methodology}
                </p>
              </div>
            </div>

            {/* Step-by-Step Implementation Timeline */}
            {course.caseStudy.stepByStepImplementation && course.caseStudy.stepByStepImplementation.length > 0 && (
              <div className="p-5 rounded-2xl bg-white border border-emerald-200/80 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-cyan-600" />
                  <span>Step-by-Step Implementation Roadmap:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.caseStudy.stepByStepImplementation.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-800">
                      <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-800 font-mono font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantified Before vs After ROI Table */}
            {course.caseStudy.quantifiedResults && course.caseStudy.quantifiedResults.length > 0 && (
              <div className="p-5 rounded-2xl bg-white border border-emerald-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>Quantified Before vs. After ROI Matrix:</span>
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">
                    Bottom Line: {course.caseStudy.impactHighlight}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-mono uppercase text-slate-500">
                        <th className="py-2.5 px-3">Performance Metric</th>
                        <th className="py-2.5 px-3">Before AI Integration</th>
                        <th className="py-2.5 px-3">After AI Integration</th>
                        <th className="py-2.5 px-3 text-right">Net Operational ROI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {course.caseStudy.quantifiedResults.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-emerald-50/30 transition-colors">
                          <td className="py-2.5 px-3 font-semibold text-slate-900">{row.metric}</td>
                          <td className="py-2.5 px-3 text-rose-700 font-mono">{row.before}</td>
                          <td className="py-2.5 px-3 text-emerald-700 font-mono font-semibold">{row.after}</td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-900">
                              {row.impact}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Founder Quote & Key Insight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {course.caseStudy.founderQuote && (
                <div className="p-5 rounded-2xl bg-white border border-emerald-200 text-xs sm:text-sm text-slate-700 space-y-2 relative shadow-2xs">
                  <Quote className="w-6 h-6 text-emerald-200 absolute top-3 right-3" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Founder Perspective:
                  </span>
                  <p className="italic leading-relaxed text-slate-800">
                    {course.caseStudy.founderQuote}
                  </p>
                </div>
              )}

              {course.caseStudy.keyInsight && (
                <div className="p-5 rounded-2xl bg-cyan-950 text-cyan-100 space-y-2 relative shadow-2xs">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                    Strategic Entrepreneur Takeaway:
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed text-cyan-50 font-medium">
                    {course.caseStudy.keyInsight}
                  </p>
                </div>
              )}
            </div>

            {/* Tools Used Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-emerald-200 text-xs">
              <span className="font-mono text-slate-600 font-semibold">
                Tech Stack Deployed in Case Study:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {course.caseStudy.toolsUsed.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white text-emerald-950 border border-emerald-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ======================================================================= */}
      {/* SECTION 3: FOUNDER RESOURCES & STARTER PROMPTS */}
      {/* ======================================================================= */}
      {(activeSection === 'all' || activeSection === 'resources') && (
        <section id="section-course-resources" className="space-y-6">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
            <div className="w-7 h-7 rounded-lg bg-violet-100 text-violet-800 flex items-center justify-center font-bold">
              <Terminal className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Founder Resource Suite & Starter Prompts
            </h2>
          </div>

          {/* Starter Prompts (Ready to Run) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                <Code2 className="w-4 h-4 text-violet-600" />
                <span>Ready-to-Deploy Strategic Prompts</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">
                Click prompt card to copy directly into your LLM
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {course.resources?.starterPrompts && course.resources.starterPrompts.length > 0 ? (
                course.resources.starterPrompts.map((p, pIdx) => (
                  <div 
                    key={pIdx}
                    className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-violet-300 transition-all p-5 sm:p-6 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-violet-50 text-violet-800 border border-violet-200">
                          {p.targetTool}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          {p.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => handleCopyPrompt(p.prompt, pIdx)}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-violet-600 hover:bg-violet-700 text-white transition-colors self-start sm:self-auto"
                      >
                        {copiedPromptIndex === pIdx ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Prompt</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-700">Purpose: </span>
                      {p.purpose}
                    </p>

                    <div className="p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800 relative group">
                      <pre className="whitespace-pre-wrap font-mono">{p.prompt}</pre>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  Custom prompt templates for this curriculum are being curated.
                </div>
              )}
            </div>
          </div>

          {/* Curated Tool Catalog & Recommended Stack */}
          {course.resources?.recommendedTools && course.resources.recommendedTools.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                <Wrench className="w-4 h-4 text-cyan-600" />
                <span>Recommended Tool Stacks & Commercial Pricing Tiers</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.resources.recommendedTools.map((tool, tIdx) => (
                  <div key={tIdx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900">{tool.name}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-50 text-cyan-800 border border-cyan-200">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="text-[11px] font-mono font-medium text-slate-500 pt-1 border-t border-slate-100">
                      Tier: {tool.pricingTier}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official Reading & Reference Guides */}
          {course.resources?.officialGuides && course.resources.officialGuides.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Authoritative Standards, Whitepapers & Regulatory Blueprints</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.resources.officialGuides.map((guide, gIdx) => (
                  <div key={gIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{guide.title}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-700 border border-slate-200">
                        {guide.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guide.description}
                    </p>
                    {guide.linkNote && (
                      <span className="text-[10px] font-mono text-cyan-700 font-semibold block">
                        Source: {guide.linkNote}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ======================================================================= */}
      {/* SECTION 4: 3-PHASE FOUNDER ACTION CHECKLIST */}
      {/* ======================================================================= */}
      {(activeSection === 'all' || activeSection === 'checklist') && (
        <section id="section-course-checklist" className="space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
            <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <ListChecks className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              3-Phase Founder Action & Implementation Checklist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {course.resources?.actionChecklist && course.resources.actionChecklist.length > 0 ? (
              course.resources.actionChecklist.map((phase, pIdx) => (
                <div 
                  key={pIdx}
                  className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 font-mono font-bold text-xs flex items-center justify-center">
                        0{pIdx + 1}
                      </span>
                      <h3 className="text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                        {phase.phase}
                      </h3>
                    </div>

                    <div className="space-y-2 pt-1">
                      {phase.tasks.map((task, tIdx) => {
                        const taskId = `${course.id}-phase-${pIdx}-task-${tIdx}`;
                        const isDone = !!completedTasks[taskId];
                        return (
                          <div 
                            key={tIdx}
                            onClick={() => toggleTask(taskId)}
                            className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start space-x-2.5 ${
                              isDone 
                                ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                                : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => {}} // handled by parent div
                              className="mt-0.5 rounded text-cyan-600 focus:ring-cyan-500"
                            />
                            <span className={`leading-snug ${isDone ? 'line-through opacity-70' : ''}`}>
                              {task}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-slate-400 text-right">
                    Interactive Progress Tracker
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 p-6 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                Action checklist is being prepared for this curriculum.
              </div>
            )}
          </div>
        </section>
      )}

      {/* Bottom Sticky-Ready Navigation Ribbon */}
      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-700 hover:text-slate-900"
        >
          <Layers className="w-4 h-4 text-cyan-600" />
          <span>Return to All 12 Curriculums Hub</span>
        </button>

        <div className="flex items-center space-x-3">
          {prevCourse && (
            <button
              onClick={() => onSelectCourse(prevCourse.id)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors flex items-center space-x-1.5 shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>#{prevCourse.number} {prevCourse.title.slice(0, 20)}...</span>
            </button>
          )}
          {nextCourse && (
            <button
              onClick={() => onSelectCourse(nextCourse.id)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center space-x-1.5 shadow-2xs"
            >
              <span>#{nextCourse.number} {nextCourse.title.slice(0, 20)}...</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
