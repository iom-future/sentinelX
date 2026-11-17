import React, { useState } from 'react';
import { CORE_CAPABILITIES } from '../data/content';
import { 
  BrainCircuit, 
  Globe, 
  ShieldAlert, 
  GitFork, 
  BellRing, 
  BarChart4, 
  CheckCircle2, 
  ArrowUpRight,
  ChevronRight,
  Terminal,
  Cpu,
  Layers,
  Sparkles
} from './icons';

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getCapabilityIcon = (iconName) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#3978E8]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#43D9C3]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#F4B860]" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-[#3978E8]" />;
      case 'BellRing':
        return <BellRing className="w-5 h-5 text-[#43D9C3]" />;
      case 'BarChart4':
        return <BarChart4 className="w-5 h-5 text-[#3978E8]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#3978E8]" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#101622] text-[#3978E8] border border-[#3978E8]/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3978E8]"></span>
              BUILT FOR MODERN SECURITY TEAMS
            </span>
            <span className="text-[11px] font-mono text-[#929EAE] px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [CAPABILITY_INDEX: CORE_MODULES]
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Everything You Need to Understand Your Security Posture.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            Engineered from the ground up for software developers, SREs, and security engineers. High-fidelity signals without drowning in false-positive fatigue.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid - Numbers Removed, Icons Added */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_CAPABILITIES.map((cap, index) => (
            <div
              key={cap.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-[#101622] border border-[#243044] rounded-xl p-6 flex flex-col justify-between group hover:border-[#3978E8]/70 hover:shadow-xl hover:shadow-black/60 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top hairline indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#243044] group-hover:bg-[#3978E8] transition-colors"></div>

              <div>
                {/* Header with Icon Badge and Module ID - No Numbers */}
                <div className="flex items-center justify-between pb-3 border-b border-[#243044]/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                      {getCapabilityIcon(cap.icon)}
                    </div>
                    <span className="font-mono text-xs text-[#929EAE]">
                      [{cap.id}]
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161F2D] text-[#43D9C3] border border-[#243044] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3] animate-pulse"></span>
                    ACTIVE
                  </span>
                </div>

                {/* Title & Tagline with Icon - No Numbers */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-[#161F2D] border border-[#243044] text-[#3978E8] shrink-0">
                      {getCapabilityIcon(cap.icon)}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-[#F4F7FC] group-hover:text-white transition-colors">
                      {cap.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-[#3978E8] font-medium pt-0.5">
                    {cap.tagline}
                  </p>

                  <p className="text-xs text-[#929EAE] leading-relaxed pt-1">
                    {cap.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="mt-5 space-y-2 pt-4 border-t border-[#243044]/50">
                  <div className="text-[10px] font-mono text-[#929EAE] uppercase">
                    Integrated Feature Set:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#F4F7FC]">
                    {cap.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#43D9C3] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#929EAE] group-hover:text-[#F4F7FC] transition-colors">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Excessive tags block - No Numbers */}
              <div className="mt-6 pt-4 border-t border-[#243044]/70 space-y-2">
                <div className="text-[9px] font-mono text-[#929EAE] uppercase tracking-wider flex items-center justify-between">
                  <span>Protocol & Architecture Badges</span>
                  <span className="text-[#3978E8]">[VERIFIED]</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#080B12] text-[#929EAE] border border-[#243044] group-hover:border-[#3978E8]/40 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
