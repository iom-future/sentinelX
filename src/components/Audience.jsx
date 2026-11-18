import React from 'react';
import { AUDIENCE_CARDS } from '../data/content';
import { 
  Code, 
  Cloud, 
  ShieldCheck, 
  Server, 
  Rocket, 
  Building2, 
  Cpu 
} from './icons';

export function Audience({ onOpenEarlyAccess }) {
  const getAudienceIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-[#3978E8]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#43D9C3]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#3978E8]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#43D9C3]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#F4B860]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#3978E8]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#3978E8]" />;
    }
  };

  return (
    <section className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean, No Tags */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Security Intelligence for Every Layer of Your Stack.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            Whether you are shipping code to staging, scaling multi-tenant databases, or protecting enterprise workloads, SentinelX provides native security intelligence tailored to your operational layer.
          </p>
        </div>

        {/* 6 Audience Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE_CARDS.map((aud) => (
            <div
              key={aud.id}
              className="bg-[#101622] border border-[#243044] rounded-xl p-6 flex flex-col justify-between group hover:border-[#3978E8]/70 hover:shadow-xl hover:shadow-black/60 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top border hairline */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#243044] group-hover:bg-[#3978E8] transition-all"></div>

              <div>
                {/* Header with Icon Badge */}
                <div className="pb-3 border-b border-[#243044]/80">
                  <div className="w-10 h-10 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center shadow-sm">
                    {getAudienceIcon(aud.icon)}
                  </div>
                </div>

                {/* Role and Description */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-heading font-semibold text-[#F4F7FC] group-hover:text-white transition-colors">
                    {aud.role}
                  </h3>

                  <div className="text-xs font-mono text-[#3978E8] font-medium pt-0.5">
                    {aud.focus}
                  </div>

                  <p className="text-xs text-[#929EAE] leading-relaxed pt-1">
                    {aud.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
