import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Flame, 
  Activity, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Sliders, 
  Layers, 
  Terminal, 
  Bell, 
  User, 
  Filter, 
  FileText, 
  Lock,
  ChevronRight,
  RefreshCw,
  ExternalLink,
  Zap,
  BarChart2,
  Database
} from './icons';

export function DashboardPreview({ onOpenEarlyAccess }) {
  const [activeNav, setActiveNav] = useState('Overview');
  const [selectedIncident, setSelectedIncident] = useState('INC-9042');

  const sidebarItems = [
    { name: 'Overview', icon: BarChart2, count: null, tag: '01' },
    { name: 'Threats', icon: Flame, count: '3', tag: '02' },
    { name: 'Events', icon: Activity, count: '142', tag: '03' },
    { name: 'Investigations', icon: Search, count: '1', tag: '04' },
    { name: 'Vulnerabilities', icon: AlertTriangle, count: '6', tag: '05' },
    { name: 'Integrations', icon: Layers, count: '12', tag: '06' },
    { name: 'Settings', icon: Sliders, count: null, tag: '07' },
  ];

  const investigationDockets = [
    {
      id: 'INC-9042',
      title: 'Suspicious Administrative Impersonation',
      source: 'auth-gateway-primary',
      timestamp: '2026-11-17 18:02:11 UTC',
      classification: 'Privilege Escalation / Token Drift',
      status: 'Active Investigation',
      severity: 'Critical',
      sevColor: 'text-[#F06464] bg-[#F06464]/10 border-[#F06464]/30',
      cvss: '9.1',
      tags: ['AUTH_BYPASS', 'CVSS: 9.1', 'AS13335', 'AWS_STS', 'TIER_1'],
      evidence: [
        'Anomalous JWT payload with forged claim [role: super_admin]',
        'Origin IP unmapped in corporate IP whitelist (203.0.113.44)',
        'Triggered 4 subsequent calls to /v1/system/backup/export within 120ms',
      ],
    },
    {
      id: 'INC-9041',
      title: 'Unusual Outbound Database Egress',
      source: 'worker-cluster-analytics',
      timestamp: '2026-11-17 17:48:32 UTC',
      classification: 'Data Exfiltration Anomaly',
      status: 'Pending Review',
      severity: 'Warning',
      sevColor: 'text-[#F4B860] bg-[#F4B860]/10 border-[#F4B860]/30',
      cvss: '7.4',
      tags: ['EGRESS_BURST', 'CVSS: 7.4', 'S3_SYNC', 'POD_ISOLATED'],
      evidence: [
        'Worker container initiated outbound connection to unknown DNS domain',
        'Data volume exceeded rolling baseline by 430%',
        'eBPF Socket probe automatically throttled flow rate',
      ],
    },
  ];

  const currentDocket = investigationDockets.find(d => d.id === selectedIncident) || investigationDockets[0];

  return (
    <section id="dashboard-section" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#101622] text-[#3978E8] border border-[#3978E8]/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3978E8]"></span>
              YOUR SECURITY CONTROL CENTER
            </span>
            <span className="text-[11px] font-mono text-[#929EAE] px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [CONSOLE_VERSION: v2.4.8-ENTERPRISE]
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            See What's Happening Across Your Infrastructure.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            A unified operations surface that bridges the gap between infrastructure metrics and deep security forensics. Inspect incidents in real-time with zero signal ambiguity.
          </p>
        </div>

        {/* Large Enterprise Dashboard Mockup Container */}
        <div className="mt-14 bg-[#101622] border border-[#243044] rounded-2xl overflow-hidden shadow-2xl relative">
          {/* Top Browser / Window Frame */}
          <div className="bg-[#080B12] border-b border-[#243044] px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#243044]"></span>
                <span className="w-3 h-3 rounded-full bg-[#243044]"></span>
                <span className="w-3 h-3 rounded-full bg-[#243044]"></span>
              </div>
              <div className="h-4 w-[1px] bg-[#243044]"></div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#929EAE]">
                <span className="text-white font-semibold">https://console.sentinelx.security/live-workspace</span>
                <span className="text-[10px] text-[#43D9C3] px-1.5 py-0.2 rounded bg-[#101622] border border-[#243044]">
                  [TLS 1.3 / STRICT-HSTS]
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded text-[10px] bg-[#F4B860]/10 text-[#F4B860] border border-[#F4B860]/30 font-medium">
                * All metrics and security events shown are illustrative
              </span>
              <span className="text-[10px] text-[#43D9C3] px-2 py-0.5 rounded bg-[#43D9C3]/10 border border-[#43D9C3]/30 hidden sm:inline">
                ● REALTIME TELEMETRY
              </span>
            </div>
          </div>

          {/* Sub Navigation Search Bar inside the console */}
          <div className="bg-[#101622] border-b border-[#243044] px-4 py-2.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3 w-full max-w-md">
              <Search className="w-3.5 h-3.5 text-[#929EAE]" />
              <input
                type="text"
                readOnly
                value="query: event.severity in ('critical', 'high') AND cluster == 'us-east-prod'"
                className="bg-transparent text-[#F4F7FC] text-xs focus:outline-none w-full font-mono placeholder-[#929EAE]"
              />
            </div>
            <div className="flex items-center gap-3 text-[#929EAE]">
              <span className="hidden md:inline text-[11px]">[PRESS CMD+K TO QUERY]</span>
              <div className="flex items-center gap-1.5 pl-3 border-l border-[#243044]">
                <div className="w-6 h-6 rounded-full bg-[#3978E8]/20 border border-[#3978E8] flex items-center justify-center text-[10px] text-[#3978E8] font-bold">
                  SX
                </div>
                <span className="text-white text-[11px] hidden sm:inline">admin@corp.io</span>
              </div>
            </div>
          </div>

          {/* Main Console Workspace Layout (Sidebar + Center Content + Right Panel) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] bg-[#0B0F18]">
            {/* 1. Left Sidebar */}
            <div className="lg:col-span-2 bg-[#101622] border-r border-[#243044] p-3 space-y-1">
              <div className="px-3 py-2 text-[10px] font-mono text-[#929EAE] uppercase tracking-wider flex items-center justify-between">
                <span>Modules</span>
                <span>[7]</span>
              </div>

              {sidebarItems.map((item) => {
                const isSelected = activeNav === item.name;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveNav(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono transition-colors text-left cursor-pointer ${
                      isSelected
                        ? 'bg-[#161F2D] text-[#43D9C3] font-semibold border border-[#3978E8]/30'
                        : 'text-[#929EAE] hover:text-[#F4F7FC] hover:bg-[#161F2D]/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{item.name}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {item.count && (
                        <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                          item.name === 'Threats' 
                            ? 'bg-[#F06464]/20 text-[#F06464]' 
                            : 'bg-[#080B12] text-[#929EAE] border border-[#243044]'
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}

              <div className="pt-6 px-3 border-t border-[#243044]/60 space-y-2 mt-4 text-[10px] font-mono text-[#929EAE]">
                <div>ENVIRONMENT:</div>
                <div className="text-white font-semibold">aws-us-east-1</div>
                <div className="text-[9px] text-[#43D9C3]">[eBPF KERNEL ACTIVE]</div>
              </div>
            </div>

            {/* 2. Center Main Overview */}
            <div className="lg:col-span-6 p-4 sm:p-6 space-y-6 border-b lg:border-b-0 lg:border-r border-[#243044]">
              {/* Top Overview Cards with Excessive Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-[#101622] border border-[#243044] rounded-lg p-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#929EAE]">
                    <span className="flex items-center gap-1.5 text-[#F06464] font-semibold">
                      <Flame className="w-3.5 h-3.5" />
                      ANOMALIES
                    </span>
                    <span className="text-[#F06464]">[CRIT]</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-[#F4F7FC] mt-1">3 Alerts</div>
                  <div className="text-[10px] text-[#929EAE] mt-0.5">High / Critical</div>
                </div>

                <div className="bg-[#101622] border border-[#243044] rounded-lg p-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#929EAE]">
                    <span className="flex items-center gap-1.5 text-[#3978E8] font-semibold">
                      <Layers className="w-3.5 h-3.5" />
                      SURFACE
                    </span>
                    <span className="text-[#3978E8]">[ACTIVE]</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-[#F4F7FC] mt-1">18 Apps</div>
                  <div className="text-[10px] text-[#929EAE] mt-0.5">Monitored Services</div>
                </div>

                <div className="bg-[#101622] border border-[#243044] rounded-lg p-3 col-span-2 sm:col-span-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#929EAE]">
                    <span className="flex items-center gap-1.5 text-[#43D9C3] font-semibold">
                      <Activity className="w-3.5 h-3.5" />
                      INGESTION
                    </span>
                    <span className="text-[#43D9C3]">[ONLINE]</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-[#43D9C3] mt-1">48.2k/s</div>
                  <div className="text-[10px] text-[#929EAE] mt-0.5">Events Flowing</div>
                </div>
              </div>

              {/* Security Activity Over Time Mock Waveform / Chart */}
              <div className="bg-[#101622] border border-[#243044] rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-semibold">SECURITY ACTIVITY TREND (LAST 24 HOURS)</span>
                  <span className="text-[10px] text-[#929EAE]">[RESOLUTION: 1-MIN SLICES]</span>
                </div>

                {/* Simulated visual histogram */}
                <div className="h-24 flex items-end gap-1.5 pt-4">
                  {[24, 32, 18, 45, 60, 38, 22, 15, 28, 40, 75, 95, 60, 45, 30, 20, 35, 42, 50, 68, 85, 40, 28, 32].map((height, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-[#161F2D] hover:bg-[#3978E8] transition-colors rounded-t relative group cursor-pointer"
                      style={{ height: `${height}%` }}
                    >
                      {/* Tooltip on hover */}
                      <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-1.5 py-0.5 bg-[#080B12] border border-[#243044] text-[9px] font-mono text-white rounded whitespace-nowrap z-10">
                        {height * 12} events
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#929EAE] pt-2 border-t border-[#243044]/60">
                  <span>00:00 UTC</span>
                  <span>12:00 UTC</span>
                  <span className="text-[#3978E8]">PEAK: 14:20 UTC</span>
                  <span>NOW</span>
                </div>
              </div>

              {/* Investigation Queue Selector */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-semibold">ACTIVE INVESTIGATION QUEUE</span>
                  <span className="text-[10px] text-[#43D9C3]">[P0 ESCALATED]</span>
                </div>

                <div className="space-y-2">
                  {investigationDockets.map((docket) => {
                    const isSelected = selectedIncident === docket.id;
                    return (
                      <div
                        key={docket.id}
                        onClick={() => setSelectedIncident(docket.id)}
                        className={`p-3 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#161F2D] border-[#3978E8]'
                            : 'bg-[#101622] border-[#243044] hover:border-[#3978E8]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#3978E8] font-bold">{docket.id}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded border ${docket.sevColor}`}>
                            {docket.severity}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-white mt-1">
                          {docket.title}
                        </div>
                        <div className="text-[10px] font-mono text-[#929EAE] mt-1 flex items-center justify-between">
                          <span>Source: {docket.source}</span>
                          <span className="text-[#43D9C3]">CVSS: {docket.cvss}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Right Investigation Panel */}
            <div className="lg:col-span-4 p-4 sm:p-6 bg-[#101622] flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="pb-3 border-b border-[#243044] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F4F7FC] font-bold flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#F06464]" />
                    INCIDENT DOSSIER
                  </span>
                  <span className="text-[10px] text-[#929EAE]">{currentDocket.id}</span>
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#F4F7FC]">
                    {currentDocket.title}
                  </div>
                  <div className="text-[10px] font-mono text-[#929EAE] mt-0.5">
                    Detected: {currentDocket.timestamp}
                  </div>
                </div>

                {/* Excessive Tags on Docket */}
                <div className="flex flex-wrap gap-1">
                  {currentDocket.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#080B12] text-[#929EAE] border border-[#243044]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Classification and Source */}
                <div className="p-3 bg-[#080B12] rounded border border-[#243044] text-xs font-mono space-y-1.5">
                  <div className="text-[10px] text-[#929EAE]">CLASSIFICATION:</div>
                  <div className="text-[#3978E8]">{currentDocket.classification}</div>
                  <div className="text-[10px] text-[#929EAE] pt-1">SOURCE WORKLOAD:</div>
                  <div className="text-[#43D9C3]">{currentDocket.source}</div>
                </div>

                {/* Forensic Evidence Logs */}
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="text-[10px] text-[#929EAE] uppercase">Forensic Evidence Chain:</div>
                  <div className="space-y-1 text-[11px] text-[#929EAE]">
                    {currentDocket.evidence.map((ev, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-1.5">
                        <span className="text-[#3978E8] mt-0.5">→</span>
                        <span>{ev}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#243044] space-y-2">
                <button
                  onClick={onOpenEarlyAccess}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-mono font-semibold bg-[#3978E8] hover:bg-[#3269d0] text-white transition-all shadow border border-[#3978E8]"
                >
                  Request Early Access to Try Console
                </button>
                <div className="text-center text-[10px] font-mono text-[#929EAE]">
                  SOC2 Type II in Roadmap // Immutable Audit Log
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
