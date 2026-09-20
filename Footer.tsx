/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  Rocket, 
  Building2, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Zap,
  Layers,
  Award
} from 'lucide-react';
import { AI_ENTREPRENEUR_COURSES } from '../data/aiCoursesData';

interface AiCoursesSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher?: () => void;
}

export const AiCoursesSection: React.FC<AiCoursesSectionProps> = ({ onNavigate, onOpenMatcher }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Strategy' | 'Product' | 'Revenue' | 'Ops'>('All');

  const displayedCourses = AI_ENTREPRENEUR_COURSES.filter(c => {
    if (selectedFilter === 'Strategy') return c.category === 'Strategy & Leadership' || c.category === 'Governance & Compliance';
    if (selectedFilter === 'Product') return c.category === 'Product & Engineering';
    if (selectedFilter === 'Revenue') return c.category === 'Marketing & Revenue' || c.category === 'Finance & Valuation';
    if (selectedFilter === 'Ops') return c.category === 'Operations & Workflows';
    return true;
  }).slice(0, 6);

  return (
    <section 
      id="section-ai-courses"
      className="border border-slate-200 rounded-3xl bg-white p-6 sm:p-10 shadow-xs hover:border-cyan-400 transition-all space-y-8"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-50 text-cyan-800 border border-cyan-200">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
            <span>Section 10 // Entrepreneur Academy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            12 Essential AI Courses, Certifications & Startup Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Equipping founders with verified executive frameworks from MIT, Harvard, Oxford, Wharton, Microsoft, and DeepLearning.AI. 
            Paired with 12 real-world startup case studies illustrating measurable ROI—from saving $120k in KYC engineering to closing seed rounds in 6 weeks.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            id="view-all-courses-btn"
            onClick={() => onNavigate('ai-courses')}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs"
          >
            <span>Explore All 12 Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
          {(['All', 'Strategy', 'Product', 'Revenue', 'Ops'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === tab
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab === 'All' ? 'All 12 Frameworks' : `${tab} Focus`}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-500">
          <Award className="w-3.5 h-3.5 text-emerald-500" />
          <span>Accredited Global Certifications + Real-world Metrics</span>
        </div>
      </div>

      {/* 6-Card Teaser Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => onNavigate('ai-courses')}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-cyan-400 hover:bg-white cursor-pointer transition-all flex flex-col justify-between space-y-4 group shadow-2xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-md bg-slate-950 text-cyan-400 font-mono font-bold text-[11px] flex items-center justify-center">
                  {String(course.number).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-mono font-semibold bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                  {course.format}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <div className="text-[11px] text-slate-500 font-medium mt-1 line-clamp-1">
                  {course.provider}
                </div>
              </div>

              {/* Target Tools Tags */}
              <div className="flex flex-wrap gap-1">
                {course.targetTools.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-50 text-cyan-800 border border-cyan-200">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {course.synopsis}
              </p>
            </div>

            {/* Mini Case Study Card Highlight */}
            <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/90 text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold uppercase text-emerald-800 flex items-center">
                  <Rocket className="w-2.5 h-2.5 mr-1 text-emerald-600" />
                  Mini Case Study
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-700">
                  {course.caseStudy.impactMetric}
                </span>
              </div>
              <div className="font-bold text-slate-900 line-clamp-1 text-[11px]">
                {course.caseStudy.title}
              </div>
              <p className="text-[10px] text-slate-600 line-clamp-2">
                {course.caseStudy.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Strip */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 text-xs">
        <div className="flex items-center space-x-2 text-slate-600">
          <Sparkles className="w-4 h-4 text-cyan-600 shrink-0" />
          <span>Need a customized learning track for your team or incubator?</span>
        </div>
        <button
          onClick={() => onNavigate('ai-courses')}
          className="inline-flex items-center space-x-1.5 font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
        >
          <span>View Curriculum Comparison Matrix & Case Studies Vault</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
