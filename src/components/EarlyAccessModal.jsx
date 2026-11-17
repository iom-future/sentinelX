import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Lock, Terminal, ArrowRight, CheckCircle2, AlertCircle, Shield } from './icons';

export function EarlyAccessModal({ isOpen, onClose, mode = 'early-access' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: 'Software Engineer / Developer',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.email.includes('@')) {
      setError('Please provide a valid corporate email');
      return;
    }
    setError('');
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#3978E8', '#43D9C3', '#F4F7FC'],
      });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#101622] border border-[#243044] rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="bg-[#080B12] border-b border-[#243044] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F4F7FC]">
            <Shield className="w-4 h-4 text-[#3978E8]" />
            <span className="font-semibold">
              {mode === 'sign-in' ? 'SENTINELX // CONSOLE AUTHENTICATION' : 'SENTINELX // EARLY ACCESS DISPATCH'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded bg-[#161F2D] text-[#929EAE] hover:text-white border border-[#243044] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {mode === 'sign-in' ? (
            /* Sign In Mockup */
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3978E8]/10 text-[#3978E8] border border-[#3978E8]/30">
                  DEVELOPER SSO / RBAC
                </span>
                <h3 className="text-xl font-heading font-bold text-[#F4F7FC] pt-1">
                  Sign In to Security Operations Console
                </h3>
                <p className="text-xs text-[#929EAE]">
                  Choose your organization's identity provider or enter your hardware token.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => alert('Authentication simulation: SSO connector will authenticate via your enterprise IdP.')}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#161F2D] hover:bg-[#243044] text-xs font-mono text-white border border-[#243044] flex items-center justify-between transition-colors"
                >
                  <span>Continue with GitHub Enterprise</span>
                  <span className="text-[10px] text-[#43D9C3]">[OAUTH2]</span>
                </button>
                <button
                  onClick={() => alert('Authentication simulation: SAML 2.0 connector active.')}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#161F2D] hover:bg-[#243044] text-xs font-mono text-white border border-[#243044] flex items-center justify-between transition-colors"
                >
                  <span>Continue with Okta / SAML 2.0</span>
                  <span className="text-[10px] text-[#3978E8]">[SAML]</span>
                </button>
                <button
                  onClick={() => alert('Authentication simulation: WebAuthn / FIDO2 security key active.')}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#161F2D] hover:bg-[#243044] text-xs font-mono text-white border border-[#243044] flex items-center justify-between transition-colors"
                >
                  <span>Use FIDO2 / YubiKey Hardware Token</span>
                  <span className="text-[10px] text-[#F4B860]">[WEBAUTHN]</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <p className="text-xs text-[#929EAE]">
                  Need an organization account?{' '}
                  <button
                    onClick={() => {
                      onClose();
                      const el = document.getElementById('early-access');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#43D9C3] hover:underline"
                  >
                    Request early access
                  </button>
                </p>
              </div>
            </div>
          ) : submitted ? (
            /* Early Access Success */
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#43D9C3]/10 border border-[#43D9C3]/40 flex items-center justify-center mx-auto text-[#43D9C3]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#F4F7FC]">
                You're on our early access list.
              </h3>
              <p className="text-xs text-[#929EAE] leading-relaxed max-w-sm mx-auto">
                Thanks for your interest in SentinelX. We'll be in touch with next steps as pilot cohorts open.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-lg bg-[#3978E8] text-white text-xs font-mono font-medium"
              >
                Close Window
              </button>
            </div>
          ) : (
            /* Quick Early Access Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#43D9C3]/10 text-[#43D9C3] border border-[#43D9C3]/30">
                  DEVELOPER PILOT PROGRAMME
                </span>
                <h3 className="text-xl font-heading font-bold text-[#F4F7FC] pt-1">
                  Request Priority Early Access
                </h3>
                <p className="text-xs text-[#929EAE]">
                  Join engineering teams using SentinelX to detect and investigate threats.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-[11px] font-mono text-[#929EAE] mb-1">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#080B12] border border-[#243044] text-xs text-white placeholder-[#929EAE]/50 focus:outline-none focus:border-[#3978E8]"
                  />
                  {error && <p className="text-[10px] font-mono text-[#F06464] mt-1">{error}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#929EAE] mb-1">
                    COMPANY / TEAM *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#080B12] border border-[#243044] text-xs text-white placeholder-[#929EAE]/50 focus:outline-none focus:border-[#3978E8]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#929EAE] mb-1">
                    ENGINEERING ROLE
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#080B12] border border-[#243044] text-xs text-white focus:outline-none focus:border-[#3978E8]"
                  >
                    <option value="Software Engineer / Developer">Software Engineer / Developer</option>
                    <option value="Security Engineer / SecOps">Security Engineer / SecOps</option>
                    <option value="DevOps / SRE / Platform">DevOps / SRE / Platform</option>
                    <option value="CTO / Founder / VP">CTO / Founder / VP</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 px-4 rounded-lg bg-[#3978E8] hover:bg-[#3269d0] text-xs font-mono font-semibold text-white transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Early Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="pt-2 text-center text-[10px] font-mono text-[#929EAE]">
                Protected under enterprise confidentiality. Never asks for secrets.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
