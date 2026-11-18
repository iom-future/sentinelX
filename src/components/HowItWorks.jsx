import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/content';
import architectureIsometric from '../assets/images/architecture-isometric.jpg';
import { 
  Plug, 
  Eye, 
  Search, 
  GitPullRequest, 
  Activity, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles
} from './icons';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const getWorkflowIcon = (iconName) => {
    switch (iconName) {
      case 'Plug':
        return <Plug className="w-5 h-5 text-[#3978E8]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#43D9C3]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#F4B860]" />;
      case 'GitPullRequest':
        return <GitPullRequest className="w-5 h-5 text-[#3978E8]" />;
      default:
        return <Activity className="w-5 h-5 text-[#3978E8]" />;
    }
  };

  const architectureLayers = [
    {
      title: '01. Ingress & Edge Connectors',
      highlight: 'API Gateways & Ingress Controllers',
      desc: 'Seamlessly links into API gateways, reverse proxies, and auth providers with zero configuration changes.',
      badge: 'Zero-Copy Ingestion'
    },
    {
      title: '02. eBPF Kernel Observability',
      highlight: 'Node-Level Signal Collection',
      desc: 'Hooks directly into the Linux kernel ring-buffer to monitor network sockets, execution traces, and system calls without overhead.',
      badge: 'Sub-Millisecond Tracking'
    },
    {
      title: '03. Anomaly Inference Engine',
      highlight: 'Distributed Microservice Analysis',
      desc: 'Correlates activity across independent database clusters, worker nodes, and user sessions to isolate anomalies instantly.',
      badge: 'Real-Time Correlation'
    },
    {
      title: '04. Incident Investigation Graph',
      highlight: 'Contextual Blast-Radius Dossier',
      desc: 'Synthesizes related security signals into a unified timeline so engineering teams can remediate threats before damage occurs.',
      badge: 'Actionable Intelligence'
    }
  ];

  return (
    <section id="platform" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean, No Tags */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            From Raw Security Events to Actionable Intelligence.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            SentinelX connects relevant security information, analyzes system behaviour and helps teams investigate potential threats through one centralized platform.
          </p>
        </div>

        {/* 4-Step Workflow Grid - Clean Cards without Noisy Pseudo-Tags */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORKFLOW_STEPS.map((wf, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={wf.id}
                onClick={() => setActiveStep(idx)}
                className={`bg-[#101622] border rounded-xl p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-[#3978E8] shadow-lg shadow-[#3978E8]/15 bg-[#121927]'
                    : 'border-[#243044] hover:border-[#3978E8]/50 hover:bg-[#121927]/60'
                }`}
              >
                <div>
                  {/* Step header with Icon Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#243044]/80">
                    <div className="w-9 h-9 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center shadow-sm">
                      {getWorkflowIcon(wf.icon)}
                    </div>
                    <span className="text-xs font-mono text-[#3978E8] font-semibold">
                      {wf.phase}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-heading font-semibold text-[#F4F7FC]">
                      {wf.title}
                    </h3>
                    <p className="text-xs text-[#929EAE] leading-relaxed">
                      {wf.description}
                    </p>
                  </div>

                  {/* Clean Protocols / Connectors List */}
                  <div className="mt-5 space-y-2 pt-3 border-t border-[#243044]/50">
                    <div className="text-[10px] font-mono text-[#929EAE] uppercase">
                      Supported Connectors:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {wf.protocols.map((proto, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161F2D] text-[#F4F7FC] border border-[#243044]"
                        >
                          {proto}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#243044]/40 flex items-center justify-between text-xs font-mono text-[#3978E8]">
                  <span>Explore Architecture</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Architecture Showcase (Denotes Platform Infrastructure instead of Mock Dashboards) */}
        <div className="mt-16 bg-[#101622] border border-[#243044] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Image Side: Clean Isometric Infrastructure Illustration */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] bg-[#080B12] overflow-hidden flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-[#243044]">
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3978E8]/10 blur-3xl rounded-full pointer-events-none"></div>

              {/* The high-res isometric architecture image provided by the user */}
              <div className="relative w-full rounded-xl overflow-hidden border border-[#243044] shadow-2xl group">
                <img
                  src={architectureIsometric}
                  alt="SentinelX Connected Infrastructure and Distributed Cluster Architecture"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Architectural Callout Pins */}
                <div className="absolute top-6 left-6 bg-[#080B12]/85 backdrop-blur-md border border-[#3978E8]/40 rounded-lg px-3 py-1.5 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#3978E8] animate-pulse"></span>
                  <span>SURVEILLED INFRASTRUCTURE NODES</span>
                </div>

                <div className="absolute bottom-6 right-6 bg-[#080B12]/85 backdrop-blur-md border border-[#43D9C3]/40 rounded-lg px-3 py-1.5 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#43D9C3]"></span>
                  <span>AUTONOMOUS CORRELATION PIPELINE</span>
                </div>
              </div>
            </div>

            {/* Interactive Layer Breakdown & Explanations */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#3978E8] uppercase tracking-wider font-semibold">
                  INFRASTRUCTURE TOPOLOGY
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#F4F7FC] mt-1">
                  How SentinelX Observes Your Systems
                </h3>
                <p className="text-sm text-[#929EAE] mt-2 leading-relaxed">
                  Rather than burying engineers under endless alerts, SentinelX models your architecture as an interconnected mesh to spot abnormal behavior across nodes in real time.
                </p>
              </div>

              {/* Interactive Layer Cards */}
              <div className="space-y-3">
                {architectureLayers.map((layer, lIdx) => {
                  const isActive = activeStep === lIdx;
                  return (
                    <div
                      key={lIdx}
                      onClick={() => setActiveStep(lIdx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#161F2D] border-[#3978E8] shadow-md shadow-[#3978E8]/10'
                          : 'bg-[#0B0F18] border-[#243044] hover:border-[#3978E8]/40 hover:bg-[#121927]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-semibold font-heading ${isActive ? 'text-[#F4F7FC]' : 'text-[#929EAE]'}`}>
                          {layer.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101622] text-[#43D9C3] border border-[#243044]">
                          {layer.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#929EAE] mt-1.5 leading-relaxed">
                        {layer.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
