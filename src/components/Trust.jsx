import React from 'react';
import { TRUST_PRINCIPLES } from '../data/content';
import infraNodesImg from '../assets/images/infrastructure-nodes.jpg';
import { 
  Lock, 
  KeyRound, 
  Eye, 
  UserCheck, 
  CheckCircle, 
  ShieldCheck, 
  FileCheck2 
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
    { title: 'Zero Data Retention of Raw Payloads', desc: 'Metadata only. Payloads are discarded immediately post-inference.', icon: ShieldCheck },
    { title: 'AES-256-GCM & TLS 1.3 Strict', desc: 'End-to-end cryptographic encapsulation across all ingress pipes.', icon: Lock },
    { title: 'Hardware MFA & FIDO2 WebAuthn', desc: 'Hardware security key enforcement for all administrative access.', icon: KeyRound },
    { title: 'Immutable Tamper-Proof Audit Trail', desc: 'Cryptographically hashed audit log dockets with append-only storage.', icon: FileCheck2 },
  ];

  return (
    <section id="trust" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean, No Tags */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Protecting Your Infrastructure Starts With Trust.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            A cybersecurity platform must demonstrate strong security practices itself. SentinelX is designed with privacy, access control and operational reliability as core engineering requirements.
          </p>
        </div>

        {/* Core Trust Principles Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRUST_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className="bg-[#101622] border border-[#243044] rounded-xl p-6 flex flex-col justify-between group hover:border-[#3978E8]/60 transition-colors"
            >
              <div>
                {/* Header with Icon */}
                <div className="pb-3 border-b border-[#243044]/80">
                  <div className="w-10 h-10 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center shadow-sm">
                    {getTrustIcon(principle.icon)}
                  </div>
                </div>

                {/* Title & Details */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-heading font-semibold text-[#F4F7FC]">
                    {principle.title}
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
            </div>
          ))}
        </div>

        {/* Visual Architecture Feature Showcase */}
        <div className="mt-14 bg-[#101622] border border-[#243044] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Image Side */}
          <div className="lg:col-span-5 relative min-h-[300px] border-b lg:border-b-0 lg:border-r border-[#243044] overflow-hidden">
            <img
              src={infraNodesImg}
              alt="SentinelX Security Architecture & Infrastructure Telemetry"
              className="w-full h-full object-cover filter contrast-110 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-transparent lg:hidden"></div>
          </div>

          {/* Architectural Controls Matrix */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-heading font-bold text-[#F4F7FC]">
                Architectural Security Controls
              </h3>
              <p className="text-xs sm:text-sm text-[#929EAE] mt-1 leading-relaxed">
                SentinelX processes security signals without storing customer payload data or credentials. All telemetry pipelines are cryptographically authenticated.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {architecturalControls.map((ctrl, idx) => {
                const IconComp = ctrl.icon;
                return (
                  <div key={idx} className="bg-[#080B12] border border-[#243044] rounded-lg p-3.5 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#3978E8]">
                      <IconComp className="w-4 h-4" />
                      <span className="text-xs font-heading font-semibold text-[#F4F7FC]">
                        {ctrl.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#929EAE] leading-relaxed">
                      {ctrl.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
