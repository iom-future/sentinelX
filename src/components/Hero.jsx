import React, { useState, useEffect } from 'react';
import { HERO_DATA } from '../data/content';
import { 
  ShieldAlert, 
  Terminal, 
  ArrowRight, 
  Activity, 
  Cpu, 
  Radio, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  Lock, 
  Layers, 
  Search, 
  Eye, 
  RefreshCw,
  Clock,
  ShieldCheck
} from './icons';

export function Hero({ onOpenEarlyAccess }) {
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState(HERO_DATA.liveEvents);
  const [pulseCount, setPulseCount] = useState(14820);
  const [selectedEvent, setSelectedEvent] = useState(HERO_DATA.liveEvents[0]);

  // Simulate subtle real-time event updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getMetricIcon = (iconName) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-3.5 h-3.5 text-[#3978E8]" />;
      case 'Clock':
        return <Clock className="w-3.5 h-3.5 text-[#43D9C3]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-3.5 h-3.5 text-[#3978E8]" />;
      case 'Radio':
        return <Radio className="w-3.5 h-3.5 text-[#43D9C3]" />;
      default:
        return <Activity className="w-3.5 h-3.5 text-[#3978E8]" />;
    }
  };

  const getStatusBadge = (statusType) => {
    switch (statusType) {
      case 'critical':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#F06464]/10 text-[#F06464] border border-[#F06464]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F06464] animate-ping"></span>
            CRITICAL
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#F4B860]/10 text-[#F4B860] border border-[#F4B860]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B860]"></span>
            WARNING
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#3978E8]/10 text-[#3978E8] border border-[#3978E8]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3978E8]"></span>
            ATTENTION
          </span>
        );
    }
  };

  return (
    <section className="relative pt-12 pb-24 overflow-hidden border-b border-[#243044]/60 bg-[#080B12]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      {/* Subtle Top Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-[#3978E8]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header Area */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow with excessive tags */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#101622] text-[#43D9C3] border border-[#243044] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#43D9C3] animate-pulse"></span>
              {HERO_DATA.eyebrow}
            </span>
            <span className="hidden sm:inline-flex text-[11px] font-mono text-[#929EAE] px-2 py-0.5 rounded bg-[#080B12] border border-[#243044]">
              [SENSOR_STATUS: ARMED]
            </span>
            <span className="hidden md:inline-flex text-[11px] font-mono text-[#3978E8] px-2 py-0.5 rounded bg-[#101622] border border-[#3978E8]/30">
              [RFC-8446 // TLS 1.3]
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4F7FC] font-heading leading-[1.08]">
            Your Infrastructure. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC] to-[#3978E8]">
              Under Watch.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#929EAE] font-normal max-w-2xl mx-auto leading-relaxed">
            {HERO_DATA.subheadline}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEarlyAccess}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-mono font-semibold rounded-lg bg-[#3978E8] text-white hover:bg-[#3269d0] transition-all shadow-lg shadow-[#3978E8]/20 border border-[#3978E8] group cursor-pointer"
            >
              <span>Get Early Access</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-mono flex items-center gap-1">
                <ShieldAlert className="w-3 h-3 text-white" />
                PILOT
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="#dashboard-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono font-medium rounded-lg bg-[#101622] text-[#F4F7FC] hover:bg-[#161F2D] transition-colors border border-[#243044] hover:border-[#3978E8]/50"
            >
              <span>Explore the Platform</span>
              <Terminal className="w-4 h-4 text-[#43D9C3]" />
            </a>
          </div>

          {/* Supporting line & tags */}
          <div className="pt-2 flex flex-col items-center gap-2">
            <p className="text-xs sm:text-sm font-mono text-[#929EAE]">
              {HERO_DATA.supportingLine}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-[#929EAE]">
              <span className="px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
                [NO-AGENT-BLOAT]
              </span>
              <span className="px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
                [ZERO-TRUST-NATIVE]
              </span>
              <span className="px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
                [eBPF-ACCELERATED]
              </span>
              <span className="px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
                [OPEN-API-FIRST]
              </span>
            </div>
          </div>
        </div>

        {/* Technical Metric Indicators Bar with excessive tags */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {HERO_DATA.metrics.map((m, idx) => (
            <div
              key={m.label}
              className="bg-[#101622]/80 border border-[#243044] rounded-lg p-3.5 relative overflow-hidden group hover:border-[#3978E8]/50 transition-colors"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-[#929EAE] mb-1">
                <span className="flex items-center gap-1.5 text-[#F4F7FC]">
                  {getMetricIcon(m.icon)}
                  <span className="text-[10px] text-[#929EAE] font-mono">LIVE</span>
                </span>
                <span className="text-[#3978E8] px-1 py-0.2 bg-[#3978E8]/10 rounded border border-[#3978E8]/20">
                  {m.tag}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-[#F4F7FC] mt-0.5">
                {m.value}
              </div>
              <div className="flex items-center justify-between text-xs text-[#929EAE] mt-1">
                <span className="text-[11px] truncate">{m.label}</span>
                <span className="font-mono text-[10px] text-[#43D9C3]">{m.trend}</span>
              </div>
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3978E8]/40 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Central Live Security Operations Interface Mockup */}
        <div className="mt-8 relative rounded-xl border border-[#243044] bg-[#101622] shadow-2xl overflow-hidden">
          {/* Dashboard Window Header Bar */}
          <div className="h-11 bg-[#080B12] border-b border-[#243044] px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#243044] border border-[#243044]/60"></span>
                <span className="w-3 h-3 rounded-full bg-[#243044] border border-[#243044]/60"></span>
                <span className="w-3 h-3 rounded-full bg-[#243044] border border-[#243044]/60"></span>
              </div>
              <div className="h-4 w-[1px] bg-[#243044]"></div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#929EAE]">
                <ShieldAlert className="w-3.5 h-3.5 text-[#3978E8]" />
                <span className="text-[#F4F7FC] font-semibold">SENTINELX // CONSOLE</span>
                <span className="hidden sm:inline text-[#929EAE]">[SESSION: #SX-PROD-CLUSTER-01]</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#43D9C3]/10 text-[#43D9C3] border border-[#43D9C3]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3] animate-pulse"></span>
                LIVE STREAM
              </span>
              <span className="text-[10px] font-mono text-[#929EAE] px-2 py-0.5 bg-[#161F2D] rounded border border-[#243044]">
                EPS: {pulseCount.toLocaleString()}
              </span>
              <span className="text-[10px] font-mono text-[#F4B860] px-2 py-0.5 bg-[#F4B860]/10 rounded border border-[#F4B860]/30 hidden md:inline">
                [ILLUSTRATIVE_DATA]
              </span>
            </div>
          </div>

          {/* Sub Navigation Bar inside Dashboard */}
          <div className="bg-[#101622] border-b border-[#243044] px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('events')}
                className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  activeTab === 'events'
                    ? 'bg-[#161F2D] text-[#43D9C3] border border-[#3978E8]/40'
                    : 'text-[#929EAE] hover:text-[#F4F7FC]'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Security Events</span>
                <span className="text-[10px] px-1 bg-[#080B12] rounded text-[#3978E8]">4</span>
              </button>

              <button
                onClick={() => setActiveTab('system')}
                className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  activeTab === 'system'
                    ? 'bg-[#161F2D] text-[#43D9C3] border border-[#3978E8]/40'
                    : 'text-[#929EAE] hover:text-[#F4F7FC]'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>System Overview</span>
                <span className="text-[10px] px-1 bg-[#080B12] rounded text-[#43D9C3]">NORMAL</span>
              </button>

              <button
                onClick={() => setActiveTab('topology')}
                className={`px-3 py-1 rounded text-xs transition-colors hidden sm:flex items-center gap-1.5 ${
                  activeTab === 'topology'
                    ? 'bg-[#161F2D] text-[#43D9C3] border border-[#3978E8]/40'
                    : 'text-[#929EAE] hover:text-[#F4F7FC]'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>eBPF Telemetry</span>
                <span className="text-[10px] px-1 bg-[#080B12] rounded text-[#929EAE]">0.4ms</span>
              </button>
            </div>

            <div className="text-[11px] text-[#929EAE] flex items-center gap-2">
              <span className="text-[#3978E8]">[STATUS: 24/7 AUTO_GUARD]</span>
              <span className="hidden lg:inline text-[#929EAE]">GATEWAY_INGRESS: PASSING</span>
            </div>
          </div>

          {/* Main Dashboard Body */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0B0F18]">
            {/* Left Column: Recent Security Events Table */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-mono font-semibold text-[#F4F7FC]">
                      Recent Security Events
                    </h3>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#161F2D] text-[#929EAE] border border-[#243044]">
                      STREAM: /v1/events/feed
                    </span>
                  </div>
                  <p className="text-xs text-[#929EAE] mt-0.5">
                    Click any event to inspect correlation vectors & payload telemetry.
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-[#929EAE]">
                  <span className="w-2 h-2 rounded-full bg-[#43D9C3]"></span>
                  <span>SYNCED</span>
                </div>
              </div>

              {/* Interactive Event Table */}
              <div className="border border-[#243044] rounded-lg overflow-hidden bg-[#101622]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#161F2D]/80 border-b border-[#243044] text-[11px] font-mono text-[#929EAE]">
                        <th className="py-2.5 px-3">EVENT IDENTIFIER</th>
                        <th className="py-2.5 px-3">SECURITY EVENT</th>
                        <th className="py-2.5 px-3">LAYER / ORIGIN</th>
                        <th className="py-2.5 px-3">SEVERITY / STATUS</th>
                        <th className="py-2.5 px-3 text-right">ACTION</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#243044]/60 font-mono">
                      {events.map((evt) => {
                        const isSelected = selectedEvent.id === evt.id;
                        return (
                          <tr
                            key={evt.id}
                            onClick={() => setSelectedEvent(evt)}
                            className={`cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-[#3978E8]/10 text-white'
                                : 'hover:bg-[#161F2D]/50 text-[#F4F7FC]'
                            }`}
                          >
                            <td className="py-3 px-3 whitespace-nowrap">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-[#3978E8]">{evt.id}</span>
                                <span className="text-[9px] px-1 bg-[#080B12] rounded border border-[#243044] text-[#929EAE]">
                                  {evt.tags[0]}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-3 font-sans font-medium">
                              <div className="text-xs text-[#F4F7FC]">{evt.event}</div>
                              <div className="text-[10px] font-mono text-[#929EAE] flex items-center gap-1.5 mt-0.5">
                                <span>{evt.protocol}</span>
                                <span>•</span>
                                <span className="text-[#3978E8]">{evt.ip}</span>
                              </div>
                            </td>
                            <td className="py-3 px-3 whitespace-nowrap">
                              <span className="text-[11px] text-[#929EAE] block font-mono">
                                {evt.origin}
                              </span>
                              <span className="text-[9px] text-[#43D9C3] font-mono">
                                [{evt.layer}]
                              </span>
                            </td>
                            <td className="py-3 px-3 whitespace-nowrap">
                              <div className="flex flex-col gap-1 items-start">
                                {getStatusBadge(evt.statusType)}
                                <span className="text-[10px] text-[#929EAE]">
                                  {evt.status}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-3 text-right whitespace-nowrap">
                              <button className="text-[11px] text-[#43D9C3] hover:underline flex items-center gap-1 ml-auto">
                                <Eye className="w-3 h-3" />
                                <span>Inspect</span>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Table Footer with Illustrative Note & Tags */}
                <div className="bg-[#080B12] px-3 py-2 border-t border-[#243044] flex flex-wrap items-center justify-between text-[10px] font-mono text-[#929EAE]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#F4B860] font-semibold">* Illustrative security events</span>
                    <span>|</span>
                    <span>TOTAL ANOMALIES TODAY: 19</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.2 rounded bg-[#101622] border border-[#243044]">
                      [FILTER: ACTIVE]
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-[#101622] border border-[#243044]">
                      [PAGE: 1/1]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Event Inspector & System Health */}
            <div className="lg:col-span-4 space-y-4">
              {/* Event Inspector Card */}
              <div className="bg-[#101622] border border-[#243044] rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-[#243044] pb-2 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#3978E8]">
                    <Search className="w-3.5 h-3.5" />
                    <span className="font-semibold">INSPECTOR // CONTEXT</span>
                  </div>
                  <span className="text-[10px] text-[#929EAE]">{selectedEvent.id}</span>
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#F4F7FC]">
                    {selectedEvent.event}
                  </div>
                  <div className="text-[11px] font-mono text-[#43D9C3] mt-0.5">
                    Target: {selectedEvent.origin}
                  </div>
                </div>

                {/* Excessive Tags for Selected Event */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedEvent.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#161F2D] text-[#929EAE] border border-[#243044]"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#3978E8]/10 text-[#3978E8] border border-[#3978E8]/30">
                    CVSS: {selectedEvent.cvss}
                  </span>
                </div>

                {/* Timeline / Trace Mock */}
                <div className="pt-2 border-t border-[#243044]/60 space-y-2 text-[11px] font-mono">
                  <div className="text-[#929EAE] text-[10px] uppercase">
                    Incident Blast Radius Chain:
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[#929EAE]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3]"></span>
                      <span className="text-white">IP Ingress Vector:</span>
                      <span className="text-[#3978E8]">{selectedEvent.ip}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#929EAE]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4B860]"></span>
                      <span className="text-white">Gateway Inspection:</span>
                      <span>Anomalous Header Pattern</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#929EAE]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F06464]"></span>
                      <span className="text-white">Policy Enforcement:</span>
                      <span className="text-[#F06464]">Isolated / Quarantined</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenEarlyAccess}
                    className="w-full py-2 px-3 text-xs font-mono font-medium rounded bg-[#161F2D] hover:bg-[#3978E8] text-[#F4F7FC] transition-colors border border-[#243044] hover:border-[#3978E8] flex items-center justify-center gap-2"
                  >
                    <span>Run Full Forensic Trace</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* System Posture Health Widget */}
              <div className="bg-[#101622] border border-[#243044] rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F4F7FC] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#43D9C3]" />
                    CLUSTER HEALTH
                  </span>
                  <span className="text-[#43D9C3] text-[11px]">99.8% OPTIMAL</span>
                </div>

                {/* Progress bars */}
                <div className="space-y-2 text-[10px] font-mono">
                  <div>
                    <div className="flex justify-between text-[#929EAE] mb-1">
                      <span>eBPF KERNEL INGESTION</span>
                      <span className="text-white">100% PASS</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#080B12] rounded-full overflow-hidden">
                      <div className="w-[100%] h-full bg-[#43D9C3] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#929EAE] mb-1">
                      <span>API GATEWAY LATENCY</span>
                      <span className="text-white">1.1ms</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#080B12] rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-[#3978E8] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#929EAE] mb-1">
                      <span>ANOMALY INFERENCE HEADROOM</span>
                      <span className="text-white">84%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#080B12] rounded-full overflow-hidden">
                      <div className="w-[84%] h-full bg-[#3978E8] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[#929EAE] pt-1 flex items-center justify-between border-t border-[#243044]/60">
                  <span>REGION: us-east-1 // EKS</span>
                  <span className="text-[#43D9C3]">[ARMED]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
