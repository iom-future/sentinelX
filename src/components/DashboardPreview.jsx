import React, { useState } from 'react';
import infrastructureNodesImg from '../assets/images/infrastructure-nodes.jpg';
import { 
  ShieldAlert, 
  Flame, 
  Activity, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Server,
  Layers,
  Cpu
} from './icons';

export function DashboardPreview({ onOpenEarlyAccess }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const capabilities = [
    {
      title: 'Real-Time Anomaly Correlation',
      desc: 'Correlates suspicious events across disparate microservices, clusters, and authentication streams to cut through alert noise.',
      metric: '< 140ms',
      metricLabel: 'Inference Latency'
    },
    {
      title: 'Blast Radius & Dependency Mapping',
      desc: 'Traces the propagation path of an incident across network sockets and containers to reveal root cause immediately.',
      metric: 'Zero-Guesswork',
      metricLabel: 'Incident Triage'
    },
    {
      title: 'Kernel-Level eBPF Telemetry',
      desc: 'Observes system calls and socket events directly in the Linux kernel without requiring invasive runtime agents.',
      metric: '0.04%',
      metricLabel: 'CPU Overhead'
    }
  ];

  return (
    <section id="dashboard-section" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean, No Tags */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            See What's Happening Across Your Infrastructure.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            SentinelX connects application logs, authentication events, API gateways, and infrastructure signals into a clear architectural view that highlights genuine threats without alert fatigue.
          </p>
        </div>

        {/* High-Resolution Infrastructure Topology Display */}
        <div className="mt-14 bg-[#101622] border border-[#243044] rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Image Showcase */}
            <div className="lg:col-span-7 relative min-h-[400px] sm:min-h-[480px] bg-[#080B12] overflow-hidden flex items-center justify-center p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#243044]">
              {/* Radial backdrop */}
              <div className="absolute inset-0 bg-radial-gradient from-[#3978E8]/10 via-transparent to-transparent pointer-events-none"></div>

              <div className="relative w-full rounded-xl overflow-hidden border border-[#243044] shadow-2xl group">
                <img
                  src={infrastructureNodesImg}
                  alt="SentinelX Multi-Layer Cloud Infrastructure and Security Telemetry"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlaid architectural badges */}
                <div className="absolute top-4 left-4 bg-[#080B12]/90 backdrop-blur-md border border-[#3978E8]/40 rounded-md px-3 py-1.5 text-xs font-mono text-[#F4F7FC] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3978E8] animate-pulse"></span>
                  <span>PERIMETER & CLUSTER SURVEILLANCE</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#080B12]/90 backdrop-blur-md border border-[#43D9C3]/40 rounded-md px-3 py-1.5 text-xs font-mono text-[#43D9C3] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#43D9C3]" />
                  <span>CONTINUOUS eBPF TELEMETRY</span>
                </div>
              </div>
            </div>

            {/* Information & Feature Pillars */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-heading text-[#F4F7FC]">
                  Unified Intelligence Layer
                </h3>
                <p className="text-sm text-[#929EAE] mt-2 leading-relaxed">
                  Engineered to give security and platform teams total clarity. Move from disconnected log streams to contextual event relationships in real time.
                </p>
              </div>

              {/* Capability Cards */}
              <div className="space-y-3.5">
                {capabilities.map((cap, cIdx) => {
                  const isActive = activeFeature === cIdx;
                  return (
                    <div
                      key={cIdx}
                      onClick={() => setActiveFeature(cIdx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#161F2D] border-[#3978E8] shadow-md shadow-[#3978E8]/10'
                          : 'bg-[#0B0F18] border-[#243044] hover:border-[#3978E8]/40 hover:bg-[#121927]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-semibold font-heading ${isActive ? 'text-[#F4F7FC]' : 'text-[#929EAE]'}`}>
                          {cap.title}
                        </h4>
                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-[#3978E8]">
                            {cap.metric}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-[#929EAE] mt-1.5 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Early Access Action */}
              <div className="pt-2">
                <button
                  onClick={onOpenEarlyAccess}
                  className="w-full py-3.5 px-5 text-sm font-mono font-semibold rounded-lg bg-[#3978E8] hover:bg-[#3269d0] text-white transition-all shadow-lg shadow-[#3978E8]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Platform Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
