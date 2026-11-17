import React, { useState } from 'react';
import { WORKFLOW_STEPS, DEMO_TABS } from '../data/content';
import { 
  Plug, 
  Eye, 
  Search, 
  GitPullRequest, 
  Activity, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight,
  Database,
  Server,
  Network,
  Cpu,
  Layers,
  FileCode,
  AlertTriangle,
  Clock,
  Sparkles
} from './icons';

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState('overview');

  const getWorkflowIcon = (iconName) => {
    switch (iconName) {
      case 'Plug':
        return <Plug className="w-5 h-5 text-[#3978E8]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#43D9C3]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#F4B860]" />;
      case 'GitPullRequest':
        return <GitPullRequest className="w-5 h-5 text-[#F06464]" />;
      default:
        return <Activity className="w-5 h-5 text-[#3978E8]" />;
    }
  };

  return (
    <section id="platform" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#101622] text-[#43D9C3] border border-[#43D9C3]/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3]"></span>
              THE SENTINELX PLATFORM
            </span>
            <span className="text-[11px] font-mono text-[#929EAE] px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [PIPELINE: MULTI-STAGE_EXECUTION]
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            From Raw Security Events to Actionable Intelligence.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            SentinelX connects relevant security information, analyzes system behaviour and helps teams investigate potential threats through one centralized platform.
          </p>
        </div>

        {/* 4-Step Workflow Grid - Numbers Removed, Icons Added */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORKFLOW_STEPS.map((wf) => (
            <div
              key={wf.id}
              className="bg-[#101622] border border-[#243044] rounded-xl p-5 flex flex-col justify-between group hover:border-[#3978E8]/70 transition-all hover:bg-[#121927]"
            >
              <div>
                {/* Step header with Icon Badge - No Numbers */}
                <div className="flex items-center justify-between pb-3 border-b border-[#243044]/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center shadow-sm">
                      {getWorkflowIcon(wf.icon)}
                    </div>
                    <span className="text-xs font-mono text-[#43D9C3] uppercase tracking-wider font-semibold">
                      [{wf.phase}]
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#929EAE] px-1.5 py-0.5 rounded bg-[#080B12] border border-[#243044]">
                    {wf.id}
                  </span>
                </div>

                {/* Title with Icon - No Numbers */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-heading font-semibold text-[#F4F7FC] flex items-center gap-2">
                    <span className="p-1 rounded bg-[#161F2D] border border-[#243044]/80 text-[#3978E8]">
                      {getWorkflowIcon(wf.icon)}
                    </span>
                    <span>{wf.title}</span>
                  </h3>
                  <p className="text-xs text-[#929EAE] leading-relaxed">
                    {wf.description}
                  </p>
                </div>

                {/* Protocols List */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-[#243044]/50">
                  <div className="text-[10px] font-mono text-[#929EAE] uppercase">
                    Supported Connectors:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {wf.protocols.map((proto, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#161F2D] text-[#F4F7FC] border border-[#243044]"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Excessive tags block - No Numbers */}
              <div className="mt-5 pt-3 border-t border-[#243044]/60">
                <div className="flex flex-wrap gap-1">
                  {wf.tags.map((tag, tIdx) => (
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

        {/* Interactive Product Demonstration */}
        <div className="mt-16 bg-[#101622] border border-[#243044] rounded-xl overflow-hidden shadow-2xl">
          {/* Demonstration Header Bar */}
          <div className="bg-[#080B12] border-b border-[#243044] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#43D9C3] animate-pulse"></span>
              <span className="text-xs font-mono font-semibold text-[#F4F7FC]">
                INTERACTIVE PRODUCT WORKSPACE
              </span>
              <span className="text-[10px] font-mono text-[#929EAE] hidden sm:inline px-2 py-0.5 rounded bg-[#161F2D] border border-[#243044]">
                [SELECT A TAB TO SIMULATE THE CONTROL VIEW]
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#929EAE]">
              <span className="text-[#3978E8]">[MODE: EMULATION]</span>
              <span>FEED: SYNCHRONIZED</span>
            </div>
          </div>

          {/* Demonstration Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#243044] bg-[#161F2D]/50 text-xs font-mono">
            {DEMO_TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-4 text-left transition-all border-r border-[#243044] last:border-r-0 relative cursor-pointer ${
                    isSelected
                      ? 'bg-[#101622] text-[#F4F7FC] font-semibold border-b-2 border-b-[#3978E8]'
                      : 'text-[#929EAE] hover:text-[#F4F7FC] hover:bg-[#101622]/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] text-[#3978E8] mb-1">
                    <span>{tab.label}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3]"></span>}
                  </div>
                  <div className="truncate text-xs sm:text-sm">{tab.name}</div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area */}
          <div className="p-5 sm:p-8 bg-[#0B0F18]">
            {/* Tab Description & Tags Header */}
            {DEMO_TABS.map((tab) => {
              if (tab.id !== activeTab) return null;
              return (
                <div key={tab.id} className="mb-6 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#243044]/80">
                  <div>
                    <h4 className="text-base font-semibold text-[#F4F7FC] font-heading">
                      {tab.name}
                    </h4>
                    <p className="text-xs text-[#929EAE] mt-0.5">{tab.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tab.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161F2D] text-[#43D9C3] border border-[#243044]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* View 1: Security Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#101622] border border-[#243044] rounded-lg p-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#929EAE]">
                      <span>MONITORED CLUSTERS</span>
                      <span className="text-[#43D9C3]">[ONLINE]</span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-white mt-1">14 Clusters</div>
                    <div className="text-[10px] font-mono text-[#929EAE] mt-1">EKS (8) • GKE (4) • BareMetal (2)</div>
                  </div>

                  <div className="bg-[#101622] border border-[#243044] rounded-lg p-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#929EAE]">
                      <span>ACTIVE eBPF PROBES</span>
                      <span className="text-[#3978E8]">[ARMED]</span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-white mt-1">2,840 Probes</div>
                    <div className="text-[10px] font-mono text-[#929EAE] mt-1">Kernel Socket / Syscall L7 / TLS</div>
                  </div>

                  <div className="bg-[#101622] border border-[#243044] rounded-lg p-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#929EAE]">
                      <span>THREAT POSTURE SCORE</span>
                      <span className="text-[#43D9C3]">[A+]</span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-[#43D9C3] mt-1">98.4 / 100</div>
                    <div className="text-[10px] font-mono text-[#929EAE] mt-1">0 Critical Exposures • 2 Warnings</div>
                  </div>
                </div>

                {/* Multi-Service Mesh Mock Visual */}
                <div className="bg-[#101622] border border-[#243044] rounded-lg p-5">
                  <div className="text-xs font-mono text-[#929EAE] uppercase flex items-center justify-between mb-4">
                    <span>Connected Application Services Mesh</span>
                    <span className="text-[#3978E8]">[TOPOLOGY_VIEW: REALTIME]</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                    <div className="p-3 bg-[#161F2D] border border-[#243044] rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">api-gateway</span>
                        <span className="w-2 h-2 rounded-full bg-[#43D9C3]"></span>
                      </div>
                      <div className="text-[10px] text-[#929EAE] mt-1">RPS: 12.4k | 0.8ms</div>
                      <div className="text-[9px] text-[#3978E8] mt-1">[PORTS: 443, 8443]</div>
                    </div>

                    <div className="p-3 bg-[#161F2D] border border-[#243044] rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">auth-service</span>
                        <span className="w-2 h-2 rounded-full bg-[#F4B860]"></span>
                      </div>
                      <div className="text-[10px] text-[#929EAE] mt-1">RPS: 2.1k | 4.2ms</div>
                      <div className="text-[9px] text-[#F4B860] mt-1">[ANOMALY_RATE: 0.08%]</div>
                    </div>

                    <div className="p-3 bg-[#161F2D] border border-[#243044] rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">payments-core</span>
                        <span className="w-2 h-2 rounded-full bg-[#43D9C3]"></span>
                      </div>
                      <div className="text-[10px] text-[#929EAE] mt-1">RPS: 480 | 12.1ms</div>
                      <div className="text-[9px] text-[#43D9C3] mt-1">[PCI_DSS_ENFORCED]</div>
                    </div>

                    <div className="p-3 bg-[#161F2D] border border-[#243044] rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">customer-db</span>
                        <span className="w-2 h-2 rounded-full bg-[#43D9C3]"></span>
                      </div>
                      <div className="text-[10px] text-[#929EAE] mt-1">QPS: 3.8k | 1.4ms</div>
                      <div className="text-[9px] text-[#3978E8] mt-1">[KMS_ENCRYPTION_OK]</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 2: Threat Detection */}
            {activeTab === 'detection' && (
              <div className="space-y-4">
                <div className="bg-[#101622] border border-[#243044] rounded-lg p-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#929EAE] pb-2 border-b border-[#243044]">
                    <span>INCIDENT PIPELINE STREAM</span>
                    <span className="text-[#F06464]">[FLAGGED ANOMALIES]</span>
                  </div>

                  <div className="p-3 bg-[#F06464]/5 border border-[#F06464]/30 rounded space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#F06464]/20 text-[#F06464] font-bold text-[10px]">
                          CRITICAL // P0
                        </span>
                        <span className="text-white font-semibold">JWT Credential Reuse Across Unlinked ASNs</span>
                      </div>
                      <span className="text-[10px] text-[#929EAE]">Timestamp: 18:04:12 UTC</span>
                    </div>
                    <p className="text-xs text-[#929EAE] font-sans">
                      Token <span className="font-mono text-[#3978E8]">sub_94827f8a</span> was issued to IP 198.51.100.12 (Berlin) and simultaneously attempted administrative query from IP 203.0.113.88 (Tokyo) within 400ms.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#080B12] text-[#929EAE] border border-[#243044]">
                        VECTOR: IMPOSSIBLE_TRAVEL
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#080B12] text-[#F06464] border border-[#F06464]/30">
                        CONFIDENCE: 99.4%
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#080B12] text-[#43D9C3] border border-[#243044]">
                        ACTION: SESSION_REVOKED
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F4B860]/5 border border-[#F4B860]/30 rounded space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#F4B860]/20 text-[#F4B860] font-bold text-[10px]">
                          WARNING // P2
                        </span>
                        <span className="text-white font-semibold">API Burst Rate Limit Deviation</span>
                      </div>
                      <span className="text-[10px] text-[#929EAE]">Timestamp: 18:02:44 UTC</span>
                    </div>
                    <p className="text-xs text-[#929EAE] font-sans">
                      Endpoint <span className="font-mono text-[#43D9C3]">POST /v1/organizations/:id/export</span> triggered 340 requests in a 10s sliding window without API key rotation.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#080B12] text-[#929EAE] border border-[#243044]">
                        RATE: 34 req/sec
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#080B12] text-[#F4B860] border border-[#F4B860]/30">
                        SUSPECTED: SCRAPER
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 3: Investigation Workspace */}
            {activeTab === 'investigation' && (
              <div className="space-y-4">
                <div className="bg-[#101622] border border-[#243044] rounded-lg p-5">
                  <div className="flex items-center justify-between text-xs font-mono text-[#929EAE] mb-4">
                    <span className="text-[#3978E8] font-semibold">[INCIDENT TIMELINE DOCKET: #INC-7049]</span>
                    <span>CORRELATION SCORE: 96%</span>
                  </div>

                  {/* Visual timeline graph */}
                  <div className="relative border-l-2 border-[#243044] pl-6 ml-3 space-y-6 text-xs font-mono">
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#3978E8] ring-4 ring-[#080B12]"></span>
                      <div className="text-[11px] text-[#929EAE]">Ingress Edge</div>
                      <div className="text-white font-medium mt-0.5">TLS Handshake established from ASN 13335 (Cloudflare)</div>
                      <div className="text-[10px] text-[#43D9C3] mt-1">[CIPHER: TLS_AES_256_GCM_SHA384]</div>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#F4B860] ring-4 ring-[#080B12]"></span>
                      <div className="text-[11px] text-[#929EAE]">Auth Microservice</div>
                      <div className="text-white font-medium mt-0.5">Bearer Token exchanged with elevated scope claim 'org:admin'</div>
                      <div className="text-[10px] text-[#F4B860] mt-1">[ANOMALY: CLAIM_NOT_IN_BASE_ROLE]</div>
                    </div>

                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#F06464] ring-4 ring-[#080B12]"></span>
                      <div className="text-[11px] text-[#929EAE]">Database Query Gateway</div>
                      <div className="text-white font-medium mt-0.5">Attempted bulk extraction of customer secrets table</div>
                      <div className="text-[10px] text-[#F06464] mt-1">[SENTINELX ACTION: AUTO-QUARANTINED AT PROBE]</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Infrastructure Health */}
            {activeTab === 'infrastructure' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#101622] border border-[#243044] rounded-lg p-4 space-y-3 font-mono text-xs">
                    <div className="text-[#3978E8] font-semibold pb-1 border-b border-[#243044]">
                      CLOUD CONFIGURATION AUDIT
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[#F4F7FC]">
                        <span>AWS IAM Role Over-privileging</span>
                        <span className="text-[#F4B860]">[Found]</span>
                      </div>
                      <div className="flex items-center justify-between text-[#F4F7FC]">
                        <span>S3 Bucket Public ACL Drift</span>
                        <span className="text-[#43D9C3]">[Clean]</span>
                      </div>
                      <div className="flex items-center justify-between text-[#F4F7FC]">
                        <span>Security Group 0.0.0.0/0 SSH Exposure</span>
                        <span className="text-[#43D9C3]">[Clean]</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#101622] border border-[#243044] rounded-lg p-4 space-y-3 font-mono text-xs">
                    <div className="text-[#43D9C3] font-semibold pb-1 border-b border-[#243044]">
                      CONTAINER RUNTIME POSTURE
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[#F4F7FC]">
                        <span>Kubernetes Pod Security Standards</span>
                        <span className="text-[#43D9C3]">[Restricted]</span>
                      </div>
                      <div className="flex items-center justify-between text-[#F4F7FC]">
                        <span>Read-Only Root Filesystem Enforced</span>
                        <span className="text-[#43D9C3]">[100%]</span>
                      </div>
                      <div className="flex items-center justify-between text-[#F4F7FC]">
                        <span>Kernel eBPF Cap-Sys-Admin Isolated</span>
                        <span className="text-[#43D9C3]">[Enforced]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
