import React, { useState } from 'react';
import { INTEGRATIONS } from '../data/content';
import { 
  Cloud, 
  Server, 
  Cpu, 
  GitBranch, 
  GitPullRequest, 
  Code, 
  Activity, 
  BarChart3, 
  Radio, 
  MessageSquare, 
  Bell, 
  Share2, 
  Zap, 
  Layers, 
  Workflow,
  Search,
  Filter
} from './icons';

const iconMap = {
  Cloud,
  Server,
  Cpu,
  GitBranch,
  GitPullRequest,
  Code,
  Activity,
  BarChart3,
  Radio,
  MessageSquare,
  Bell,
  Share2,
  Zap,
  Layers,
  Workflow,
};

export function Integrations() {
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = [
    { id: 'all', label: 'All Connectors' },
    { id: 'cloud', label: 'Cloud Infrastructure' },
    { id: 'dev', label: 'Development & CI' },
    { id: 'observability', label: 'Observability' },
    { id: 'incident', label: 'Incident Ops' },
    { id: 'data', label: 'Event Pipelines' },
  ];

  const filteredIntegrations = selectedCat === 'all'
    ? INTEGRATIONS
    : INTEGRATIONS.filter(c => c.catId === selectedCat);

  return (
    <section id="integrations" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#101622] text-[#3978E8] border border-[#3978E8]/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3978E8]"></span>
              CONNECT YOUR STACK
            </span>
            <span className="text-[11px] font-mono text-[#929EAE] px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [CONNECTORS: 15_VERIFIED]
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Works With the Tools Your Team Already Uses.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            SentinelX complements existing developer and security infrastructure rather than forcing organizations to replace their entire technology stack.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="mt-10 flex flex-wrap gap-2 text-xs font-mono">
          {categories.map((cat) => {
            const isSelected = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#161F2D] text-[#43D9C3] font-semibold border border-[#3978E8]'
                    : 'bg-[#101622] text-[#929EAE] hover:text-[#F4F7FC] border border-[#243044]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Integration Categories and Cards */}
        <div className="mt-8 space-y-10">
          {filteredIntegrations.map((catGroup) => (
            <div key={catGroup.category} className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#243044] pb-2">
                <h3 className="text-sm font-mono font-semibold text-[#F4F7FC] uppercase tracking-wide">
                  {catGroup.category}
                </h3>
                <span className="text-[11px] font-mono text-[#929EAE]">
                  [{catGroup.items.length} Integrations]
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catGroup.items.map((item) => {
                  const IconComp = iconMap[item.icon] || Cloud;
                  const isAvailable = item.status === 'Available';

                  return (
                    <div
                      key={item.name}
                      className="bg-[#101622] border border-[#243044] rounded-xl p-4 flex flex-col justify-between group hover:border-[#3978E8]/70 hover:bg-[#121927] transition-all"
                    >
                      <div>
                        {/* Top info row */}
                        <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#243044]/60">
                          <span className="text-[#3978E8]">{item.tags[0]}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-medium border ${
                              isAvailable
                                ? 'bg-[#43D9C3]/10 text-[#43D9C3] border-[#43D9C3]/30'
                                : 'bg-[#161F2D] text-[#929EAE] border-[#243044]'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>

                        {/* Name and icon */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="w-9 h-9 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center text-[#929EAE] group-hover:text-[#3978E8] group-hover:border-[#3978E8]/40 transition-colors shrink-0">
                            <IconComp className="w-5 h-5" />
                          </div>

                          <div>
                            <h4 className="text-sm font-heading font-semibold text-[#F4F7FC] group-hover:text-white transition-colors">
                              {item.name}
                            </h4>
                            <div className="text-[10px] font-mono text-[#929EAE]">
                              Native Integration Layer
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Excessive Tags */}
                      <div className="mt-4 pt-3 border-t border-[#243044]/60">
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#080B12] text-[#929EAE] border border-[#243044]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
