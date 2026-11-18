import React from 'react';
import { HERO_DATA } from '../data/content';
import GradientASCII from './GradientASCII';
import { 
  ShieldAlert, 
  Terminal, 
  ArrowRight 
} from './icons';

export function Hero({ onOpenEarlyAccess }) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center pt-20 pb-24 sm:pt-28 sm:pb-32 overflow-hidden border-b border-[#243044]/60 bg-[#080B12]">
      {/* Dynamic React Bits GradientASCII WebGL Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <GradientASCII
          colors={['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.78}
          glyphOpacity={0.8}
          glow={0.25}
          softness={0.55}
          speed={0.85}
          mouseInteraction={true}
          scrambleRadius={0.12}
          clickEffect="wave"
          fontFamily='"JetBrains Mono", monospace'
        />

        {/* Contrast Overlay Gradients for Optimal Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B12]/85 via-[#080B12]/55 to-[#080B12] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080B12]/40 to-[#080B12]/95 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#080B12] to-transparent pointer-events-none" />
      </div>

      {/* Foreground Hero Content: Pure Typography and CTAs */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F4F7FC] font-heading leading-[1.05]">
            Your Infrastructure. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F7FC] via-[#A5D8FF] to-[#3978E8] drop-shadow-[0_0_40px_rgba(57,120,232,0.4)]">
              Under Watch.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#929EAE] font-normal max-w-3xl mx-auto leading-relaxed">
            {HERO_DATA.subheadline}
          </p>

          {/* Call-to-Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEarlyAccess}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-mono font-semibold rounded-lg bg-[#3978E8] text-white hover:bg-[#3269d0] transition-all shadow-xl shadow-[#3978E8]/25 border border-[#3978E8] group cursor-pointer hover:shadow-[#3978E8]/40 hover:-translate-y-0.5"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-mono font-medium rounded-lg bg-[#101622]/90 backdrop-blur-md text-[#F4F7FC] hover:bg-[#161F2D] transition-colors border border-[#243044] hover:border-[#3978E8]/50 cursor-pointer shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore the Platform</span>
              <Terminal className="w-4 h-4 text-[#43D9C3]" />
            </a>
          </div>

          {/* Supporting line */}
          <div className="pt-4 flex flex-col items-center">
            <p className="text-xs sm:text-sm font-mono text-[#929EAE]">
              {HERO_DATA.supportingLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
