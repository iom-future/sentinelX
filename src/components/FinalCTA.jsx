import React from 'react';
import { ArrowRight, ShieldCheck, Terminal, Cpu } from './icons';

export function FinalCTA({ onOpenEarlyAccess }) {
  return (
    <section className="py-24 bg-[#080B12] relative overflow-hidden border-b border-[#243044]/60">
      {/* Background glow and subtle cyber grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#3978E8]/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        {/* Eyebrow with excessive tags */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#101622] text-[#43D9C3] border border-[#243044]">
            <span className="w-2 h-2 rounded-full bg-[#43D9C3] animate-pulse"></span>
            NEXT-GEN THREAT DEFENSE
          </span>
          <span className="text-[11px] font-mono text-[#929EAE] px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
            [DISPATCH: PRIORITY_BATCH]
          </span>
          <span className="text-[11px] font-mono text-[#3978E8] px-2 py-0.5 rounded bg-[#101622] border border-[#3978E8]/30">
            [eBPF + OPENAPI]
          </span>
        </div>

        {/* Big confident headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#F4F7FC] tracking-tight max-w-4xl mx-auto leading-tight">
          Your Next Security Incident Shouldn't Be Your First Warning.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#929EAE] max-w-2xl mx-auto leading-relaxed">
          Get better visibility into your infrastructure and make security a more informed part of your development workflow.
        </p>

        {/* CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenEarlyAccess}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-mono font-semibold rounded-lg bg-[#3978E8] text-white hover:bg-[#3269d0] transition-all shadow-xl shadow-[#3978E8]/25 border border-[#3978E8] group cursor-pointer"
          >
            <span>Get Early Access</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-mono">
              [P0]
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-mono font-medium rounded-lg bg-[#101622] text-[#F4F7FC] hover:bg-[#161F2D] transition-colors border border-[#243044] hover:border-[#3978E8]/50"
          >
            <span>Explore the Platform</span>
            <Terminal className="w-4 h-4 text-[#43D9C3]" />
          </a>
        </div>

        {/* Supporting line */}
        <div className="pt-4 flex flex-col items-center gap-2 text-xs sm:text-sm font-mono text-[#929EAE]">
          <p>SentinelX — Security intelligence for the systems that matter.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [UPTIME_GUARANTEE: 99.99%]
            </span>
            <span className="px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [LATENCY: &lt;1ms]
            </span>
            <span className="px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [ZERO-CONFIG-FALLBACK]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
