import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Lock, 
  Cpu, 
  ArrowRight,
  Terminal,
  Sparkles
} from './icons';

export function EarlyAccess() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    role: '',
    orgSize: '11-50 employees',
    techStack: '',
    challenge: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const roleOptions = [
    'Software Engineer / Developer',
    'Security Engineer / SecOps',
    'DevOps / SRE / Platform Engineer',
    'Engineering Leader / VP / Director',
    'CISO / Head of Security',
    'Founder / CTO',
    'Other Engineering Role',
  ];

  const orgSizes = [
    '1-10 employees',
    '11-50 employees',
    '51-250 employees',
    '251-1,000 employees',
    '1,000+ employees',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please provide a valid work email address';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company or organization name is required';
    }
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }
    if (!formData.techStack.trim()) {
      newErrors.techStack = 'Please specify your primary technology stack';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3978E8', '#43D9C3', '#F4F7FC'],
        });
      } catch (err) {
        // ignore confetti errors
      }
    }, 600);
  };

  return (
    <section id="early-access" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Build With Security in Mind From Day One.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed max-w-2xl mx-auto">
            SentinelX is inviting developers, engineering teams and security professionals to participate in its early access programme.
            Help shape a security intelligence platform designed for the systems powering modern applications.
          </p>
        </div>

        {/* Form Container with Excessive Tags */}
        <div className="mt-14 max-w-3xl mx-auto bg-[#101622] border border-[#243044] rounded-2xl overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="bg-[#080B12] border-b border-[#243044] px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#3978E8]" />
              <span className="text-white font-semibold">APPLICATION INTAKE PROTOCOL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#43D9C3]">[PRIORITY: P0_DEV_ACCESS]</span>
              <span className="text-[#929EAE] hidden sm:inline">BATCH: 2026.Q4</span>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {submitted ? (
              /* Success confirmation state */
              <div className="py-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#43D9C3]/10 border border-[#43D9C3]/40 flex items-center justify-center mx-auto text-[#43D9C3]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <span className="text-xs font-mono text-[#43D9C3] px-2 py-0.5 rounded bg-[#43D9C3]/10 border border-[#43D9C3]/30">
                    APPLICATION ACCEPTED // ID: #EA-{Math.floor(1000 + Math.random() * 9000)}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#F4F7FC]">
                    You're on our early access list.
                  </h3>
                  <p className="text-sm text-[#929EAE] leading-relaxed">
                    Thanks for your interest in SentinelX. We'll be in touch with next steps.
                  </p>
                </div>

                <div className="p-4 bg-[#080B12] rounded-xl border border-[#243044] max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-[#929EAE]">
                  <div className="text-white font-semibold">Submitted Dossier:</div>
                  <div>Applicant: {formData.fullName}</div>
                  <div>Work Email: {formData.workEmail}</div>
                  <div>Organization: {formData.company} ({formData.orgSize})</div>
                  <div>Role: {formData.role}</div>
                  <div className="text-[#43D9C3] pt-1">● Notification dispatch queued to {formData.workEmail}</div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      workEmail: '',
                      company: '',
                      role: '',
                      orgSize: '11-50 employees',
                      techStack: '',
                      challenge: '',
                    });
                  }}
                  className="text-xs font-mono text-[#3978E8] hover:underline cursor-pointer"
                >
                  [Submit another organization request]
                </button>
              </div>
            ) : (
              /* Active Application Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#929EAE] uppercase">
                      Full Name <span className="text-[#F06464]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Alex Mercer"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080B12] border text-sm text-[#F4F7FC] placeholder-[#929EAE]/50 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-[#F06464]' : 'border-[#243044] focus:border-[#3978E8]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] font-mono text-[#F06464] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#929EAE] uppercase">
                      Work Email <span className="text-[#F06464]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080B12] border text-sm text-[#F4F7FC] placeholder-[#929EAE]/50 focus:outline-none transition-colors ${
                        errors.workEmail ? 'border-[#F06464]' : 'border-[#243044] focus:border-[#3978E8]'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-[11px] font-mono text-[#F06464] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.workEmail}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#929EAE] uppercase">
                      Company or Organization <span className="text-[#F06464]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Cloud Systems"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080B12] border text-sm text-[#F4F7FC] placeholder-[#929EAE]/50 focus:outline-none transition-colors ${
                        errors.company ? 'border-[#F06464]' : 'border-[#243044] focus:border-[#3978E8]'
                      }`}
                    />
                    {errors.company && (
                      <p className="text-[11px] font-mono text-[#F06464] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Role */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#929EAE] uppercase">
                      Role <span className="text-[#F06464]">*</span>
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080B12] border text-sm text-[#F4F7FC] focus:outline-none transition-colors ${
                        errors.role ? 'border-[#F06464]' : 'border-[#243044] focus:border-[#3978E8]'
                      }`}
                    >
                      <option value="">Select your role...</option>
                      {roleOptions.map((r) => (
                        <option key={r} value={r} className="bg-[#101622] text-white">
                          {r}
                        </option>
                      ))}
                    </select>
                    {errors.role && (
                      <p className="text-[11px] font-mono text-[#F06464] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.role}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Organization Size */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#929EAE] uppercase">
                      Organization Size
                    </label>
                    <select
                      value={formData.orgSize}
                      onChange={(e) => setFormData({ ...formData, orgSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B12] border border-[#243044] text-sm text-[#F4F7FC] focus:outline-none focus:border-[#3978E8]"
                    >
                      {orgSizes.map((s) => (
                        <option key={s} value={s} className="bg-[#101622] text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Primary Tech Stack */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#929EAE] uppercase">
                      Primary Technology Stack <span className="text-[#F06464]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Node.js, Go, Kubernetes, AWS, PostgreSQL"
                      value={formData.techStack}
                      onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080B12] border text-sm text-[#F4F7FC] placeholder-[#929EAE]/50 focus:outline-none transition-colors ${
                        errors.techStack ? 'border-[#F06464]' : 'border-[#243044] focus:border-[#3978E8]'
                      }`}
                    />
                    {errors.techStack && (
                      <p className="text-[11px] font-mono text-[#F06464] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.techStack}
                      </p>
                    )}
                  </div>
                </div>

                {/* Challenges Textarea */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-[#929EAE] uppercase">
                    What security challenges are you trying to solve?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Detecting suspicious API calls, reducing alert fatigue across our cloud accounts, or tracking authentication anomalies..."
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B12] border border-[#243044] text-sm text-[#F4F7FC] placeholder-[#929EAE]/50 focus:outline-none focus:border-[#3978E8]"
                  ></textarea>
                </div>

                {/* Submit button & Supporting text */}
                <div className="pt-2 space-y-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-lg text-sm font-mono font-semibold bg-[#3978E8] hover:bg-[#3269d0] text-white transition-all shadow-lg shadow-[#3978E8]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Validating and submitting dossier...</span>
                    ) : (
                      <>
                        <span>Request Early Access</span>
                        <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">
                          P0_ACCESS
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-[#929EAE] font-mono">
                    Our team will review your application and contact you about early access opportunities.
                  </p>
                </div>

                {/* Security Reassurance & Privacy Notice */}
                <div className="pt-4 border-t border-[#243044] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-[#929EAE]">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#43D9C3]" />
                    <span>SentinelX never asks for API keys, passwords or cluster credentials.</span>
                  </div>
                  <span>Privacy Notice: Data handled under strict enterprise confidentiality.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
