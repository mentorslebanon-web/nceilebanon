import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  ShieldCheck, 
  X, 
  Lock, 
  CheckCircle2, 
  Server, 
  FileCheck, 
  ArrowRight,
  Database,
  Building
} from 'lucide-react';

interface GetAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const GetAccessModal: React.FC<GetAccessModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [sector, setSector] = useState<'FinTech' | 'Healthcare' | 'Legal Tech'>('FinTech');
  const [orgName, setOrgName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [accessTarget, setAccessTarget] = useState<'coop' | 'sandbox' | 'both'>('both');
  const [ndaAccepted, setNdaAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isVetted, setIsVetted] = useState(false);

  if (!isOpen) return null;

  const sectorSpecs = {
    FinTech: {
      framework: 'Basel III & BDL Circular 158/165 Frameworks',
      coopName: 'Levant Financial Data Cooperative',
      models: 'Jargon-Tuned Financial NLP, Forex Discrepancy & AML Anonymizers',
      badge: 'FINANCIAL COMPLIANCE'
    },
    Healthcare: {
      framework: 'HIPAA & MoPH Certified Clinical Data Standards',
      coopName: 'MedData Federated Learning Cooperative',
      models: 'Clinical Protocol Evaluators, DICOM De-Identification & Telehealth APIs',
      badge: 'CLINICAL GRADE HIPAA'
    },
    'Legal Tech': {
      framework: 'GDPR, Arab League Legal Harmonization & ISO 27001',
      coopName: 'Al-Hakam Jurisprudence Data Cooperative',
      models: 'Bilingual Lebanese Statutory Cross-Referencers & Contract Audits',
      badge: 'JURISPRUDENCE GOVERNED'
    }
  };

  const currentSpec = sectorSpecs[sector];

  const handleSubmitVetting = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsVetted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-950 px-6 py-5 border-b border-slate-800 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center">
                <Lock className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-extrabold text-white">Industry Services Guilds</h3>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 rounded border border-cyan-500/30">
                    VETTING GATEWAY
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Exclusive access for Data Cooperatives & Regulatory Sandboxes
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {!isVetted ? (
            <form onSubmit={handleSubmitVetting} className="space-y-4">
              <div className="p-3 bg-cyan-50/70 border border-cyan-200 rounded-xl text-xs text-slate-700 leading-relaxed">
                <strong className="text-cyan-950 font-bold block mb-1">Governed Environment Protocol:</strong>
                Initiate vetting to access verified peer interaction, Jargon-Tuned foundation models, federated learning nodes, and pooled compute bargaining power.
              </div>

              {/* Select Sector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Target Guild Sector
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['FinTech', 'Healthcare', 'Legal Tech'] as const).map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSector(s)}
                      className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
                        sector === s
                          ? 'bg-slate-900 text-white border-cyan-500 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sector Pre-Configured Compliance Info */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-500 uppercase">Pre-Configured Framework</span>
                  <span className="font-mono text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                    {currentSpec.badge}
                  </span>
                </div>
                <div className="font-semibold text-slate-800">{currentSpec.framework}</div>
                <div className="text-slate-600 text-[11px]">
                  <span className="text-slate-400">Cooperative:</span> {currentSpec.coopName}
                </div>
                <div className="text-slate-600 text-[11px]">
                  <span className="text-slate-400">Tuned Models:</span> {currentSpec.models}
                </div>
              </div>

              {/* Desired Entry Access Target */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Target Infrastructure Component
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'coop', label: 'Data Cooperative', desc: 'Federated ML' },
                    { id: 'sandbox', label: 'Sandbox', desc: 'Zero-PII Testing' },
                    { id: 'both', label: 'Full Access', desc: 'Coop + Sandbox' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setAccessTarget(item.id as any)}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        accessTarget === item.id
                          ? 'bg-cyan-950 text-white border-cyan-400'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{item.label}</div>
                      <div className={`text-[10px] ${accessTarget === item.id ? 'text-cyan-300' : 'text-slate-500'}`}>
                        {item.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Organization / Entity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bank of Beirut, RHUH, Legal Lab"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-cyan-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Institutional Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@institution.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-cyan-500 bg-white"
                  />
                </div>
              </div>

              {/* Mutual NDA & Security Clearance */}
              <div className="pt-1">
                <label className="flex items-start space-x-2 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={ndaAccepted}
                    onChange={(e) => setNdaAccepted(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                    required
                  />
                  <span>
                    I affirm our organization adheres to {currentSpec.framework} data protection standards and consent to federated cryptographic verification.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting || !ndaAccepted}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Server className="w-4 h-4 text-cyan-400 animate-spin" />
                      <span>Validating Institutional Credentials...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Submit Vetting Request for {sector} Guild</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 py-2 animate-in zoom-in-95 duration-200">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-emerald-900">
                  Provisional Guild Clearance Granted
                </h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Credentials for <strong>{orgName || 'Your Organization'}</strong> have been provisionally registered on the {currentSpec.coopName} node.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono space-y-1.5 text-slate-700">
                <div className="text-[10px] text-slate-400 uppercase">Sandbox Token Issued</div>
                <div className="text-cyan-700 font-bold break-all">
                  961_GUILD_{sector.toUpperCase().replace(/\s+/g, '_')}_VET_SEC_{Math.random().toString(36).substring(2, 10).toUpperCase()}
                </div>
                <div className="text-slate-500 text-[11px] pt-1">
                  Compliant with: {currentSpec.framework}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    onNavigate('guilds-dev');
                    onClose();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-cyan-300 hover:bg-cyan-200 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Enter Guilds & Developer Nexus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
