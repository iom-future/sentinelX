import React from 'react';
import { TRUST_PRINCIPLES } from '../data/content';
import infraNodesImg from '../assets/images/infrastructure-nodes.jpg';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  UserCheck, 
  CheckCircle, 
  FileCheck2, 
  KeyRound, 
  Database,
  ArrowRight,
  Shield,
  Layers
} from './icons';

export function Trust() {
  const getTrustIcon = (iconName) => {
    switch (iconName) {
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#3978E8]" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-[#43D9C3]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#3978E8]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#43D9C3]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#3978E8]" />;
    }
  };

  const architecturalControls = [
    { title: 'Zero Data Retention of Raw Payloads', desc: 'Metadata only. Payloads are discarded immediately post-inference.', tag: 'PRIVACY', icon: ShieldCheck },
    { title: 'AES-256-GCM & TLS 1.3 Strict', desc: 'End-to-end cryptographic encapsulation across all ingress pipes.', tag: 'CRYPTO', icon: Lock },
    { title: 'Hardware MFA & FIDO2 WebAuthn', desc: 'Hardware security key enforcement for all administrative access.', tag: 'IDENTITY', icon: KeyRound },
    { title: 'Immutable Tamper-Proof Audit Trail', desc: 'Cryptographically hashed audit log dockets with append-only storage.', tag: 'AUDIT', icon: FileCheck2 },
  ];

  return (
    <section id="trust" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#101622] text-[#43D9C3] border border-[#43D9C3]/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3]"></span>
              SECURITY IS BUILT INTO THE FOUNDATION
            </span>
            <span className="text-[11px] font-mono text-[#929EAE] px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [VERIFIED_CONTROLS: SOC_ALIGNED]
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Protecting Your Infrastructure Starts With Trust.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            A cybersecurity platform must demonstrate strong security practices itself. SentinelX is designed with privacy, access control and operational reliability as core engineering requirements.
          </p>
        </div>

        {/* Core Trust Principles Cards Grid - Numbers Removed, Icons Added */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRUST_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className="bg-[#101622] border border-[#243044] rounded-xl p-6 flex flex-col justify-between group hover:border-[#43D9C3]/60 transition-colors"
            >
              <div>
                {/* Header with Icon and Principle ID - No Numbers */}
                <div className="flex items-center justify-between pb-3 border-b border-[#243044]/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center shadow-sm">
                      {getTrustIcon(principle.icon)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#929EAE]">
                        [{principle.id}]
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3]"></span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080B12] text-[#43D9C3] border border-[#243044] flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-[#43D9C3]" />
                    VERIFIED
                  </span>
                </div>

                {/* Title with Icon - No Numbers */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-heading font-semibold text-[#F4F7FC] flex items-center gap-2.5">
                    <span className="p-1 rounded bg-[#161F2D] border border-[#243044] text-[#43D9C3] shrink-0">
                      {getTrustIcon(principle.icon)}
                    </span>
                    <span>{principle.title}</span>
                  </h3>
                  <p className="text-sm text-[#929EAE] leading-relaxed">
                    {principle.desc}
                  </p>
                  <p className="text-xs font-mono text-[#F4F7FC]/80 pt-2 bg-[#080B12] p-2.5 rounded border border-[#243044]">
                    <span className="text-[#3978E8] font-bold">Implementation: </span>
                    {principle.technicalDetails}
                  </p>
                </div>
              </div>

              {/* Excessive Tags - No Numbers */}
              <div className="mt-6 pt-4 border-t border-[#243044]/60">
                <div className="flex flex-wrap gap-1.5">
                  {principle.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#080B12] text-[#929EAE] border border-[#243044]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Architecture Feature Showcase with Generated Image */}
        <div className="mt-14 bg-[#101622] border border-[#243044] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Image Side */}
          <div className="lg:col-span-5 relative min-h-[300px] border-b lg:border-b-0 lg:border-r border-[#243044] overflow-hidden">
            <img
              src={infraNodesImg}
              alt="SentinelX Security Architecture & Infrastructure Telemetry"
              className="w-full h-full object-cover filter contrast-110 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-transparent lg:hidden"></div>
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#080B12]/80 backdrop-blur-md border border-[#243044] text-[10px] font-mono text-[#43D9C3]">
              [ARCHITECTURE_VISUAL: LAYERED_TELEMETRY]
            </div>
          </div>

          {/* Controls Checklist Side */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3978E8]/10 text-[#3978E8] border border-[#3978E8]/30">
                  SYSTEM GUARANTEES
                </span>
                <span className="text-[10px] font-mono text-[#929EAE]">
                  [ZERO_DATA_HARVESTING]
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F4F7FC]">
                Engineered for High-Assurance Environments
              </h3>

              <p className="text-xs sm:text-sm text-[#929EAE] leading-relaxed">
                SentinelX processes security telemetry locally within your infrastructure perimeter or through dedicated isolated pipelines. Your sensitive customer records and proprietary business data never enter third-party model training loops.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {architecturalControls.map((ctrl, cIdx) => {
                  const CtrlIcon = ctrl.icon;
                  return (
                    <div key={cIdx} className="p-3 bg-[#080B12] rounded-lg border border-[#243044] space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#3978E8] font-bold flex items-center gap-1.5">
                          <CtrlIcon className="w-3.5 h-3.5" />
                          [ENFORCED]
                        </span>
                        <span className="text-[#43D9C3]">{ctrl.tag}</span>
                      </div>
                      <div className="text-xs font-semibold text-[#F4F7FC]">{ctrl.title}</div>
                      <div className="text-[11px] text-[#929EAE]">{ctrl.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#243044] flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-[#929EAE]">
              <span>COMPLIANCE STATUS: SOC2 TYPE II & ISO 27001 ALIGNED</span>
              <span className="text-[#43D9C3]">[INDEPENDENT PENTESTS ROUTINE]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
