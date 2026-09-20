/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, DeploymentProject } from '../types';
import { DEPLOYMENT_PROJECTS } from '../data/ecosystemData';
import { 
  ArrowLeft, 
  Cpu, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Layers,
  ArrowRight,
  Terminal,
  Radio
} from 'lucide-react';

interface ArchitectureDeploymentsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
}

export const ArchitectureDeploymentsPage: React.FC<ArchitectureDeploymentsPageProps> = ({
  onNavigate,
  onOpenMatcher
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tech-ai' | 'biz-dev' | 'marketplaces'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<DeploymentProject | null>(null);

  const filteredProjects = DEPLOYMENT_PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // IF A PROJECT IS SELECTED, DISPLAY AS FULL-PAGE ARCHITECTURE DOSSIER (NO POP-UP)
  if (selectedProject) {
    return (
      <div className="min-h-screen bg-slate-50/60 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb back */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedProject(null)}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shadow-xs"
            >
              <ArrowLeft className="w-4 h-4 text-slate-600" />
              <span>Back to All Deployments</span>
            </button>

            <div className="text-xs font-mono text-slate-500">
              DEPLOYMENT SPECIFICATION // {selectedProject.categoryLabel.toUpperCase()}
            </div>
          </div>

          {/* Full Page Project Dossier */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-cyan-100 text-cyan-900 border border-cyan-300">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-800 bg-emerald-100 border border-emerald-300">
                    STATUS: {selectedProject.status}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase block">
                  {selectedProject.subcategory}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  {selectedProject.title}
                </h1>
              </div>

              {selectedProject.metrics && (
                <div className="p-4 rounded-2xl bg-slate-950 text-white font-mono shrink-0 text-left sm:text-right border border-slate-800">
                  <span className="text-[10px] text-cyan-400 uppercase font-bold block">Production Benchmark</span>
                  <span className="text-lg font-bold text-white block mt-1">{selectedProject.metrics}</span>
                </div>
              )}
            </div>

            {/* Architecture Overview */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                Systemic Architecture & Functional Scope
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Engineered Stacks & Technologies */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                Engineered Stacks, Protocols & Frameworks
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Integration Actions */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold">Interactive Telemetry & Ecosystem Synergy</span>
                </div>
                <span className="text-xs font-mono text-slate-400">961AI Grid Integration</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                This architecture is registered in the NCEI national registry. You can match with the engineers who built this system or discuss its deployment in the Live Nexus operations room.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onNavigate('livenexus')}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>Discuss in Live Nexus Room</span>
                </button>

                <button
                  onClick={onOpenMatcher}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Find Matching Talent in Neural Matcher</span>
                </button>
              </div>
            </div>

            {/* Return Navigation */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                ← Return to Deployments Grid
              </button>
              <button
                onClick={() => onNavigate('competencies')}
                className="text-xs font-bold text-cyan-700 hover:underline inline-flex items-center space-x-1"
              >
                <span>Explore Core Competencies →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT VIEW: DEPLOYMENTS GRID
  return (
    <div className="min-h-screen bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-cyan-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Ecosystem Overview</span>
          </button>

          <div className="text-xs font-mono text-slate-400">
            SECTIONS 02-04 // DEPLOYMENT ACHIEVEMENTS
          </div>
        </div>

        {/* Header */}
        <div className="pt-8 pb-8 space-y-3 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
            <Cpu className="w-3.5 h-3.5 text-cyan-600" />
            <span>ANNUAL DEPLOYMENT DOSSIER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Technical AI Architecture & Ecosystem Deployments
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A comprehensive catalog of product deployments, multi-agent frameworks, macroeconomic terminals, and vertical marketplaces executed over the past year across Lebanon and the MENA region.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Deployments', count: DEPLOYMENT_PROJECTS.length },
              { id: 'tech-ai', label: '1. Technical AI & Knowledge', count: DEPLOYMENT_PROJECTS.filter(p => p.category === 'tech-ai').length },
              { id: 'biz-dev', label: '2. Commercialization & Dealrooms', count: DEPLOYMENT_PROJECTS.filter(p => p.category === 'biz-dev').length },
              { id: 'marketplaces', label: '3. Vertical Marketplaces', count: DEPLOYMENT_PROJECTS.filter(p => p.category === 'marketplaces').length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 px-1.5 py-0.2 rounded text-[10px] font-mono ${
                  selectedCategory === tab.id ? 'bg-cyan-500 text-slate-950' : 'bg-slate-100 text-slate-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by system, RAG, tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Projects Grid (Clicking any card opens full page dossier, no popup) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-cyan-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                    {project.status}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-cyan-700 font-bold uppercase block">
                    {project.subcategory}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-cyan-700 transition-colors mt-0.5">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 text-slate-600 border border-slate-200">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Metric and Action */}
                <div className="flex items-center justify-between pt-1">
                  {project.metrics ? (
                    <div className="text-[11px] font-mono font-bold text-slate-800">
                      <span className="text-slate-400 text-[10px] block">BENCHMARK</span>
                      <span className="text-cyan-700 truncate max-w-[150px] block">{project.metrics}</span>
                    </div>
                  ) : <div></div>}

                  <span className="inline-flex items-center space-x-1 text-xs font-bold text-slate-700 group-hover:text-cyan-700 transition-colors">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
