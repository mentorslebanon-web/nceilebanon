import React from 'react';
import { PageId } from '../types';
import { NATIONAL_CV } from '../data/ecosystemData';
import { 
  FileText, 
  ArrowLeft, 
  ShieldCheck, 
  Building, 
  CheckCircle2, 
  QrCode, 
  Landmark, 
  Activity, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface NationalCvPageProps {
  onNavigate: (page: PageId) => void;
  onOpenMatcher: () => void;
  onOpenGetAccess: () => void;
}

export const NationalCvPage: React.FC<NationalCvPageProps> = ({
  onNavigate,
  onOpenMatcher,
  onOpenGetAccess
}) => {
  const milestoneIcons: Record<string, React.ReactNode> = {
    'vams-system': <QrCode className="w-5 h-5 text-cyan-600" />,
    'digitization-blueprints': <Landmark className="w-5 h-5 text-cyan-600" />,
    'economic-recovery': <Activity className="w-5 h-5 text-cyan-600" />
  };

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
            SECTION 08 // INSTITUTIONAL TRACK RECORD
          </div>
        </div>

        {/* Page Header */}
        <div className="pt-8 pb-10 space-y-3 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            <span>INSTITUTIONAL CV & NATIONAL IMPACT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Our CV So Far
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From battlefield-tested emergency healthcare systems to national digitization blueprints and macro-economic restructuring frameworks delivered for ministries and international organizations.
          </p>
        </div>

        {/* Timeline of Major National Milestones */}
        <div className="space-y-8">
          {NATIONAL_CV.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-cyan-300 shadow-xs transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-start space-x-3">
                  <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 shrink-0">
                    {milestoneIcons[item.id]}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-cyan-700 uppercase">
                        {item.scope}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-mono text-slate-500">{item.date}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-1">
                      {item.title}
                    </h2>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      Institution: <strong className="text-slate-700">{item.entity}</strong>
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 shrink-0 text-right sm:text-left">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Verified Output Scale</span>
                  <span className="text-xs font-bold text-cyan-800 font-mono">{item.impactMetric}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {item.description}
              </p>

              {/* Key Deliverables & System Architectures */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Architectural Deliverables & Policy Artifacts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.keyOutputs.map((out, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800 font-medium leading-relaxed">{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Inquiries Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg font-bold">Collaborate on National Digital Public Goods</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Are you a government ministry, development bank, or healthcare network looking to deploy zero-downtime, sovereign RAG architectures?
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={onOpenGetAccess}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors"
            >
              Request Institutional Vetting
            </button>
            <button
              onClick={onOpenMatcher}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              Route through Matcher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
