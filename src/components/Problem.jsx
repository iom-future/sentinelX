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
  const getProblemIcon = (iconName) => {
    switch (iconName) {
      case 'BellOff':
        return <BellOff className="w-5 h-5 text-[#F4B860]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#3978E8]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#F06464]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#F06464]" />;
      default:
        return <AlertCircle className="w-5 h-5 text-[#929EAE]" />;
    }
  };

  return (
    <section id="problem" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Threats Move Faster Than Traditional Security Workflows.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            Applications, APIs and cloud environments generate constant activity. Security teams must distinguish normal behaviour from suspicious activity while working with information spread across multiple systems.
            <br />
            <span className="text-[#F4F7FC] font-medium">
              When visibility is fragmented, important warning signs can be missed.
            </span>
          </p>
        </div>

        {/* 4 Problem Cards - Clean, No Fake Numbering or Noisy Tags */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#101622] border border-[#243044] rounded-xl p-6 relative overflow-hidden group hover:border-[#3978E8]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#243044] group-hover:bg-gradient-to-r group-hover:from-[#3978E8] group-hover:to-[#43D9C3] transition-all"></div>

              <div>
                {/* Header row with Icon and Impact Metric */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#243044]/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center group-hover:border-[#3978E8]/40 transition-colors shadow-sm">
                      {getProblemIcon(card.icon)}
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#929EAE] uppercase font-medium">
                        {card.badge}
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className="text-right">
                    <div className="text-xl font-mono font-bold text-[#F4F7FC]">
                      {card.metricValue}
                    </div>
                    <div className="text-[10px] font-mono text-[#929EAE]">
                      {card.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Card Title & Description */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-heading font-semibold text-[#F4F7FC] group-hover:text-white transition-colors flex items-center gap-2.5">
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-sm text-[#929EAE] leading-relaxed">
                    {card.description}
                  </p>
                </div>
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
