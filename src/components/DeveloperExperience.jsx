import React, { useState } from 'react';
import { DEV_FEATURES, CODE_EXAMPLES } from '../data/content';
import { 
  Terminal, 
  Code2, 
  Copy, 
  Check, 
  ArrowRight, 
  Key, 
  FileCode, 
  Layers, 
  GitBranch, 
  Cpu, 
  Lock,
  ExternalLink,
  Zap
} from './icons';

export function DeveloperExperience({ onOpenEarlyAccess }) {
  const [selectedLang, setSelectedLang] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const activeCode = CODE_EXAMPLES[selectedLang];

  const handleCopy = () => {
    if (activeCode) {
      navigator.clipboard.writeText(activeCode.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getDevIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#3978E8]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#43D9C3]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#F4B860]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#3978E8]" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-[#43D9C3]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#3978E8]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#3978E8]" />;
    }
  };

  return (
    <section id="developers" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#101622] text-[#3978E8] border border-[#3978E8]/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3978E8]"></span>
              SECURITY THAT FITS YOUR WORKFLOW
            </span>
            <span className="text-[11px] font-mono text-[#929EAE] px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [API_SPEC: OPENAPI_3.1]
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Built to Integrate. Designed to Scale.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            Security tools should work with the systems developers already use. SentinelX is designed around an API-first architecture that allows engineering teams to integrate security intelligence into their applications and workflows.
          </p>
        </div>

        {/* Interactive Code Editor Demonstration */}
        <div className="mt-14 bg-[#101622] border border-[#243044] rounded-xl overflow-hidden shadow-2xl">
          {/* Editor Window Header */}
          <div className="bg-[#080B12] border-b border-[#243044] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#243044]"></span>
                <span className="w-3 h-3 rounded-full bg-[#243044]"></span>
                <span className="w-3 h-3 rounded-full bg-[#243044]"></span>
              </div>
              <div className="h-4 w-[1px] bg-[#243044]"></div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#929EAE]">
                <Terminal className="w-3.5 h-3.5 text-[#3978E8]" />
                <span className="text-white font-medium">{activeCode.ext}</span>
                <span className="text-[10px] text-[#43D9C3] hidden sm:inline">[{activeCode.runtime}]</span>
              </div>
            </div>

            {/* Language Switcher Tabs */}
            <div className="flex items-center gap-1 text-xs font-mono">
              {Object.keys(CODE_EXAMPLES).map((key) => {
                const ex = CODE_EXAMPLES[key];
                const isSelected = selectedLang === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedLang(key)}
                    className={`px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#161F2D] text-[#3978E8] font-semibold border border-[#3978E8]/40'
                        : 'text-[#929EAE] hover:text-[#F4F7FC]'
                    }`}
                  >
                    {ex.tab}
                  </button>
                );
              })}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-[#161F2D] hover:bg-[#3978E8] text-[#F4F7FC] transition-colors border border-[#243044] hover:border-[#3978E8]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#43D9C3]" />
                  <span className="text-[#43D9C3]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Subheader with Excessive Tags */}
          <div className="bg-[#101622] px-4 py-2 border-b border-[#243044]/60 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#929EAE]">ACTIVE PACKAGE:</span>
              <span className="text-[#43D9C3]">{activeCode.tags[0]}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeCode.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.2 rounded bg-[#080B12] text-[#929EAE] border border-[#243044]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-6 bg-[#080B12] overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-[#F4F7FC]">
            <pre className="text-[#F4F7FC]">
              <code>{activeCode.code}</code>
            </pre>
          </div>

          {/* Code Footer with Required Disclaimer */}
          <div className="bg-[#101622] border-t border-[#243044] px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[11px] text-[#929EAE]">
              <span className="text-[#F4B860] font-semibold">* Notice:</span>
              <span>
                Illustrative API design. Endpoint contracts and SDK signatures are part of early access preview.
              </span>
            </div>

            <button
              onClick={onOpenEarlyAccess}
              className="text-xs font-mono font-medium text-[#43D9C3] hover:underline flex items-center gap-1 group shrink-0"
            >
              <span>Explore Developer Documentation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 6 Developer Features Grid - Numbers Removed, Icons Added */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEV_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#101622] border border-[#243044] rounded-xl p-5 flex flex-col justify-between group hover:border-[#3978E8]/50 transition-colors"
            >
              <div>
                {/* Header with Icon and Dev ID - No Numbers */}
                <div className="flex items-center justify-between pb-3 border-b border-[#243044]/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center shadow-sm">
                      {getDevIcon(feat.icon)}
                    </div>
                    <span className="font-mono text-xs text-[#929EAE]">
                      [{feat.id}]
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080B12] text-[#43D9C3] border border-[#243044] flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#43D9C3]" />
                    READY
                  </span>
                </div>

                {/* Title with Icon - No Numbers */}
                <div className="mt-3.5 space-y-1.5">
                  <h3 className="text-base font-heading font-semibold text-[#F4F7FC] flex items-center gap-2">
                    <span className="p-1 rounded bg-[#161F2D] border border-[#243044]/80 text-[#3978E8] shrink-0">
                      {getDevIcon(feat.icon)}
                    </span>
                    <span>{feat.title}</span>
                  </h3>
                  <p className="text-xs text-[#929EAE] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>

              {/* Excessive Tags - No Numbers */}
              <div className="mt-4 pt-3 border-t border-[#243044]/60">
                <div className="flex flex-wrap gap-1">
                  {feat.tags.map((tag, tIdx) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
