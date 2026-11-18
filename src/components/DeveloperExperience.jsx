import React, { useState } from 'react';
import { CODE_EXAMPLES, DEV_FEATURES } from '../data/content';
import { 
  Terminal, 
  Copy, 
  Check, 
  Code2, 
  Layers, 
  Cpu, 
  Zap, 
  FileCode, 
  Lock, 
  ArrowRight 
} from './icons';

export function DeveloperExperience({ onOpenEarlyAccess }) {
  const [selectedLang, setSelectedLang] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const activeCode = CODE_EXAMPLES[selectedLang] || CODE_EXAMPLES.javascript;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDevIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#3978E8]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#43D9C3]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#3978E8]" />;
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
        {/* Section Header - Clean, No Tags */}
        <div className="max-w-3xl space-y-4">
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
                    className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#161F2D] text-[#3978E8] font-semibold border border-[#3978E8]/40'
                        : 'text-[#929EAE] hover:text-[#F4F7FC]'
                    }`}
                  >
                    {ex.label}
                  </button>
                );
              })}

              <button
                onClick={handleCopy}
                className="ml-2 px-2.5 py-1 rounded bg-[#161F2D] hover:bg-[#3978E8] hover:text-white text-[#929EAE] border border-[#243044] transition-colors flex items-center gap-1 text-xs cursor-pointer"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-6 bg-[#080B12] overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-[#F4F7FC]">
            <pre className="text-[#F4F7FC]">
              <code>{activeCode.code}</code>
            </pre>
          </div>

          {/* Code Footer */}
          <div className="bg-[#101622] border-t border-[#243044] px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[11px] text-[#929EAE]">
              <span className="text-[#3978E8] font-semibold">API Preview:</span>
              <span>
                Standard REST & WebSocket interfaces. Integrate alerts directly into CI/CD pipelines and Slack.
              </span>
            </div>

            <button
              onClick={onOpenEarlyAccess}
              className="text-xs font-mono font-medium text-[#3978E8] hover:underline flex items-center gap-1 group shrink-0 cursor-pointer"
            >
              <span>Explore Developer Documentation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 6 Developer Features Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEV_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#101622] border border-[#243044] rounded-xl p-5 flex flex-col justify-between group hover:border-[#3978E8]/50 transition-colors"
            >
              <div>
                {/* Header with Icon */}
                <div className="pb-3 border-b border-[#243044]/80">
                  <div className="w-9 h-9 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center shadow-sm">
                    {getDevIcon(feat.icon)}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-4 space-y-1.5">
                  <h3 className="text-base font-heading font-semibold text-[#F4F7FC]">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#929EAE] leading-relaxed">
                    {feat.desc}
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
