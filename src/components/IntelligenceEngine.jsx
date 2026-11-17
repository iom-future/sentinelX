import React, { useState } from 'react';
import { INTELLIGENCE_LAYERS, NETWORK_NODES } from '../data/content';
import threatTopologyImg from '../assets/images/threat-topology.jpg';
import { 
  Network, 
  Share2, 
  Activity, 
  Layers, 
  ShieldCheck, 
  AlertOctagon, 
  ArrowRight, 
  Info, 
  Server, 
  Zap, 
  Eye, 
  Radio,
  BrainCircuit,
  UserCheck
} from './icons';

export function IntelligenceEngine() {
  const [selectedNode, setSelectedNode] = useState(NETWORK_NODES[1]); // Default to API Gateway

  const getLayerIcon = (iconName) => {
    switch (iconName) {
      case 'Radio':
        return <Radio className="w-5 h-5 text-[#43D9C3]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#3978E8]" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-[#F4B860]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#43D9C3]" />;
      default:
        return <Activity className="w-5 h-5 text-[#43D9C3]" />;
    }
  };

  return (
    <section id="intelligence" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#101622] text-[#43D9C3] border border-[#43D9C3]/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3]"></span>
              SECURITY INTELLIGENCE
            </span>
            <span className="text-[11px] font-mono text-[#929EAE] px-2 py-0.5 rounded bg-[#101622] border border-[#243044]">
              [DAG_TOPOLOGY: VECTOR_GRAPH]
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Don't Just Detect Events. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F7FC] to-[#43D9C3]">
              Understand Their Connections.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            SentinelX moves beyond isolated security alerts by helping teams understand relationships between events, systems and user activity.
          </p>
        </div>

        {/* 4 Interconnected Layers Cards - Numbers Removed, Icons Added */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INTELLIGENCE_LAYERS.map((layer) => (
            <div
              key={layer.id}
              className="bg-[#101622] border border-[#243044] rounded-xl p-5 flex flex-col justify-between group hover:border-[#43D9C3]/50 transition-colors"
            >
              <div>
                {/* Header with Icon and Short Code - No Numbers */}
                <div className="flex items-center justify-between pb-3 border-b border-[#243044]/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center shadow-sm">
                      {getLayerIcon(layer.icon)}
                    </div>
                    <span className="font-mono text-xs text-[#929EAE]">
                      [{layer.short}]
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#080B12] text-[#43D9C3] border border-[#243044]">
                    LAYER
                  </span>
                </div>

                {/* Title with Icon - No Numbers */}
                <div className="mt-3.5 space-y-1.5">
                  <h3 className="text-base font-heading font-semibold text-[#F4F7FC] flex items-center gap-2">
                    <span className="p-1 rounded bg-[#161F2D] border border-[#243044]/80 text-[#43D9C3] shrink-0">
                      {getLayerIcon(layer.icon)}
                    </span>
                    <span>{layer.name}</span>
                  </h3>
                  <p className="text-xs text-[#929EAE] leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>

              {/* Excessive Tags - No Numbers */}
              <div className="mt-4 pt-3 border-t border-[#243044]/60">
                <div className="flex flex-wrap gap-1">
                  {layer.tags.map((tag, tIdx) => (
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

        {/* Interactive Network Topology Visualizer */}
        <div className="mt-14 bg-[#101622] border border-[#243044] rounded-xl overflow-hidden shadow-2xl">
          {/* Visualizer Top Bar */}
          <div className="bg-[#080B12] border-b border-[#243044] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-[#3978E8]" />
              <span className="text-[#F4F7FC] font-semibold">
                INFRASTRUCTURE ENTITY GRAPH // TOPOLOGY MATRIX
              </span>
              <span className="text-[10px] text-[#929EAE] hidden md:inline">
                [CLICK A NODE TO MAP RELATIONSHIPS]
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] bg-[#43D9C3]/10 text-[#43D9C3] border border-[#43D9C3]/30">
                ● ACTIVE NODES
              </span>
              <span className="text-[10px] text-[#F4B860] px-2 py-0.5 rounded bg-[#F4B860]/10 border border-[#F4B860]/30 hidden sm:inline">
                * Illustrative Graph Relationships
              </span>
            </div>
          </div>

          {/* Interactive Topology Canvas + Inspector Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0B0F18]">
            {/* Visual Graph View with Generated Threat-Topology Image Background */}
            <div className="lg:col-span-8 p-6 sm:p-8 relative min-h-[440px] flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-[#243044]">
              {/* Background threat-topology graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img
                  src={threatTopologyImg}
                  alt="SentinelX Threat Topology"
                  className="w-full h-full object-cover filter contrast-125"
                />
              </div>

              {/* Subtle Animated SVG Vector Network Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#3978E8]/30 stroke-dasharray-[4_4]">
                <line x1="20%" y1="30%" x2="50%" y2="25%" strokeWidth="1.5" className="animate-pulse" />
                <line x1="50%" y1="25%" x2="80%" y2="35%" strokeWidth="1.5" />
                <line x1="50%" y1="25%" x2="50%" y2="70%" strokeWidth="1.5" />
                <line x1="20%" y1="30%" x2="35%" y2="75%" strokeWidth="1.5" />
                <line x1="50%" y1="70%" x2="80%" y2="75%" strokeWidth="1.5" />
              </svg>

              <div className="relative text-[11px] font-mono text-[#929EAE] flex items-center justify-between">
                <span>VPC_ROUTER: US-EAST-EKS // SUB-NET: 10.0.0.0/16</span>
                <span className="text-[#3978E8]">[eBPF KERNEL TRACE: ON]</span>
              </div>

              {/* Node Chips interactive Layout */}
              <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3 my-auto py-4">
                {NETWORK_NODES.map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`text-left p-3.5 rounded-lg border transition-all relative group cursor-pointer ${
                        isSelected
                          ? 'bg-[#161F2D] border-[#3978E8] shadow-lg shadow-[#3978E8]/20 scale-[1.02]'
                          : 'bg-[#101622]/90 border-[#243044] hover:border-[#3978E8]/60 hover:bg-[#161F2D]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#929EAE] mb-1">
                        <span className="text-[#3978E8]">[{node.type}]</span>
                        <span className={`font-semibold ${node.riskColor}`}>
                          {node.risk}
                        </span>
                      </div>
                      <div className="font-heading font-semibold text-xs sm:text-sm text-[#F4F7FC] truncate">
                        {node.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#929EAE] mt-1 flex items-center justify-between">
                        <span>{node.type}</span>
                        <span className="text-[#43D9C3]">{node.latency}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="relative text-[10px] font-mono text-[#929EAE] flex items-center justify-between pt-2">
                <span>GRAPH ENGINE: DIRECTED_ACYCLIC_GRAPH</span>
                <span className="text-[#43D9C3]">STATUS: CONVERGED</span>
              </div>
            </div>

            {/* Right Side: Selected Node Inspector Panel */}
            <div className="lg:col-span-4 p-5 sm:p-6 bg-[#101622] flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="pb-3 border-b border-[#243044] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#43D9C3]">
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="font-bold">ENTITY DETAILS</span>
                  </div>
                  <span className="text-[10px] text-[#929EAE]">ID: {selectedNode.id}</span>
                </div>

                <div>
                  <div className="text-xs font-mono text-[#929EAE] uppercase">Selected Resource</div>
                  <h4 className="text-lg font-heading font-bold text-[#F4F7FC] mt-0.5">
                    {selectedNode.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${selectedNode.bg}`}>
                      {selectedNode.risk}
                    </span>
                    <span className="text-[11px] font-mono text-[#929EAE]">
                      Type: {selectedNode.type}
                    </span>
                  </div>
                </div>

                {/* Behavioral Details */}
                <div className="p-3 bg-[#080B12] border border-[#243044] rounded text-xs space-y-2">
                  <div className="text-[10px] font-mono text-[#929EAE] uppercase">
                    Observed Anomaly / Baseline:
                  </div>
                  <p className="text-xs text-[#929EAE] leading-relaxed font-sans">
                    {selectedNode.details}
                  </p>
                </div>

                {/* Connected Edges */}
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="text-[10px] text-[#929EAE] uppercase">
                    Connected Graph Relatives:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedNode.connectedTo.map((cId) => (
                      <span
                        key={cId}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#161F2D] text-[#3978E8] border border-[#3978E8]/30"
                      >
                        → {cId}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Excessive Tags for Selected Node */}
                <div className="space-y-1.5 pt-2 border-t border-[#243044]">
                  <div className="text-[10px] font-mono text-[#929EAE] uppercase">
                    Entity Telemetry Tags:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedNode.tags.map((tag, tIdx) => (
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

              {/* Bottom Clarification note */}
              <div className="pt-3 border-t border-[#243044] text-[10px] font-mono text-[#929EAE] flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#3978E8] shrink-0 mt-0.5" />
                <span>
                  Notice: Graph connections indicate communication topology and telemetry correlation. Suspicious relationships are segregated from confirmed incidents.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
