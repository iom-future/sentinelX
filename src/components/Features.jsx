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
  ArrowRight,
  Cpu
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
        {/* Section Header - Clean, No Tags */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Everything You Need to Understand Your Security Posture.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            Engineered from the ground up for software developers, SREs, and security engineers. High-fidelity signals without drowning in false-positive fatigue.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
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
                {/* Header with Icon Badge */}
                <div className="pb-3 border-b border-[#243044]/80">
                  <div className="w-10 h-10 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    {getCapabilityIcon(cap.icon)}
                  </div>
                </div>

                {/* Title & Tagline with Icon */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-heading font-semibold text-[#F4F7FC] group-hover:text-white transition-colors">
                    {cap.title}
                  </h3>

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
                    Core Capabilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#F4F7FC]">
                    {cap.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3978E8] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#929EAE] group-hover:text-[#F4F7FC] transition-colors">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
