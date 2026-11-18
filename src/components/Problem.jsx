import React from 'react';
import { PROBLEM_CARDS } from '../data/content';
import { 
  BellOff, 
  Layers, 
  Clock, 
  Flame, 
  AlertCircle, 
  ArrowRight 
} from './icons';

export function Problem() {
  const getLargeProblemIcon = (iconName) => {
    switch (iconName) {
      case 'BellOff':
        return <BellOff className="w-full h-full stroke-[1]" />;
      case 'Layers':
        return <Layers className="w-full h-full stroke-[1]" />;
      case 'Clock':
        return <Clock className="w-full h-full stroke-[1]" />;
      case 'Flame':
        return <Flame className="w-full h-full stroke-[1]" />;
      default:
        return <AlertCircle className="w-full h-full stroke-[1]" />;
    }
  };

  return (
    <section id="problem" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with Shortened Supporting Text */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Threats Move Faster Than Traditional Security Workflows.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            Fragmented visibility hides critical warning signs. Teams need clear signals before suspicious activity turns into a breach.
          </p>
        </div>

        {/* 4 Problem Cards - Side by Side on Desktop View (lg:grid-cols-4), Big Background Icon, Zero Tag Clutter */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#101622] border border-[#243044] hover:border-[#3978E8]/40 rounded-xl p-6 sm:p-7 relative overflow-hidden group transition-colors duration-300 flex flex-col justify-center min-h-[220px]"
            >
              {/* Big background icon watermark behind the text */}
              <div className="absolute -right-3 -bottom-3 w-32 h-32 sm:w-36 sm:h-36 text-white/[0.035] group-hover:text-[#3978E8]/[0.10] transition-all duration-500 pointer-events-none select-none group-hover:scale-105">
                {getLargeProblemIcon(card.icon)}
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-base sm:text-lg font-heading font-semibold text-[#F4F7FC] group-hover:text-white transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#929EAE] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement Banner */}
        <div className="mt-12 bg-[#101622] border border-[#243044] rounded-xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full bg-[#3978E8]/5 blur-3xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
            <div className="space-y-2 max-w-3xl">
              <p className="text-base sm:text-lg text-[#F4F7FC] font-medium leading-relaxed">
                "Security is not just about collecting more alerts. It is about understanding which signals matter and acting on them effectively."
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#platform"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium bg-[#161F2D] hover:bg-[#3978E8] text-[#F4F7FC] transition-colors border border-[#243044] hover:border-[#3978E8]"
              >
                <span>See the Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
