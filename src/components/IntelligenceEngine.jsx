import React, { useState } from 'react';
import { INTELLIGENCE_LAYERS, NETWORK_NODES } from '../data/content';
import threatTopologyImg from '../assets/images/threat-topology.webp';
import { 
  Network, 
  Share2, 
  Activity, 
  Layers, 
  ShieldCheck, 
  AlertOctagon, 
  ArrowRight, 
  Server, 
  Zap, 
  Eye, 
  Radio,
  BrainCircuit,
  UserCheck
} from './icons';

export function IntelligenceEngine() {
  const [selectedNode, setSelectedNode] = useState(NETWORK_NODES[1] || NETWORK_NODES[0]); // Default to API Gateway
  const activeNode = selectedNode || NETWORK_NODES[0] || {};

  const getLayerIcon = (iconName) => {
    switch (iconName) {
      case 'Radio':
        return <Radio className="w-5 h-5 text-[#3978E8]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-[#3978E8]" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-[#43D9C3]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#3978E8]" />;
      default:
        return <Activity className="w-5 h-5 text-[#3978E8]" />;
    }
  };

  return (
    <section id="intelligence" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean, No Tags */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Don't Just Detect Events. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F7FC] to-[#3978E8]">
              Understand Their Connections.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            SentinelX moves beyond isolated security alerts by helping teams understand relationships between events, systems and user activity.
          </p>
        </div>

        {/* 4 Interconnected Layers Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INTELLIGENCE_LAYERS.map((layer) => (
            <div
              key={layer.id}
              className="bg-[#101622] border border-[#243044] rounded-xl p-5 flex flex-col justify-between group hover:border-[#3978E8]/50 transition-colors"
            >
              <div>
                {/* Header with Icon */}
                <div className="pb-3 border-b border-[#243044]/80">
                  <div className="w-9 h-9 rounded-lg bg-[#161F2D] border border-[#243044] flex items-center justify-center shadow-sm">
                    {getLayerIcon(layer.icon)}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-4 space-y-1.5">
                  <h3 className="text-base font-heading font-semibold text-[#F4F7FC]">
                    {layer.name}
                  </h3>
                  <p className="text-xs text-[#929EAE] leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Correlation Mesh & Topology Inspector */}
        <div className="mt-14 bg-[#101622] border border-[#243044] rounded-2xl overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="bg-[#080B12] border-b border-[#243044] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3978E8] animate-pulse"></span>
              <span className="text-[#F4F7FC] font-semibold">
                CROSS-SYSTEM EVENT CORRELATION MESH
              </span>
            </div>

            <div className="flex items-center gap-2 text-[#929EAE]">
              <span>Click a node to inspect relationships</span>
            </div>
          </div>

          {/* Interactive Topology Canvas + Inspector Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0B0F18]">
            {/* Visual Graph View with Generated Threat-Topology Image Background */}
            <div className="lg:col-span-8 p-6 sm:p-8 relative min-h-[420px] flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-[#243044]">
              {/* Background threat-topology graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img
                  src={threatTopologyImg}
                  alt="SentinelX Threat Topology"
                  loading="lazy"
                  decoding="async"
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

              {/* Node Chips Interactive Layout */}
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
                        <span className="text-[#3978E8]">{node.type}</span>
                        <span className={`font-semibold ${node.riskColor}`}>
                          {node.risk}
                        </span>
                      </div>
                      <div className="font-heading font-semibold text-xs sm:text-sm text-[#F4F7FC] truncate">
                        {node.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#929EAE] mt-1 flex items-center justify-between">
                        <span>Latency</span>
                        <span className="text-[#3978E8] font-semibold">{node.latency}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="relative text-xs font-mono text-[#929EAE] flex items-center justify-between pt-2">
                <span>GRAPH STATUS: CONVERGED</span>
                <span className="text-[#3978E8]">ALL SYSTEM RELATIONS MAPPED</span>
              </div>
            </div>

            {/* Right Side: Selected Node Inspector Panel */}
            <div className="lg:col-span-4 p-5 sm:p-6 bg-[#101622] flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="pb-3 border-b border-[#243044] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#3978E8]">
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="font-bold">ENTITY DETAILS</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-[#929EAE] uppercase">Selected Node</div>
                  <h4 className="text-lg font-heading font-bold text-[#F4F7FC] mt-0.5">
                    {activeNode.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${activeNode.bg || ''}`}>
                      {activeNode.risk}
                    </span>
                    <span className="text-[11px] font-mono text-[#929EAE]">
                      Type: {activeNode.type}
                    </span>
                  </div>
                </div>

                {/* Behavioral Details */}
                <div className="p-3.5 bg-[#080B12] border border-[#243044] rounded-lg text-xs space-y-2">
                  <div className="text-[10px] font-mono text-[#929EAE] uppercase">
                    Behavioral Anomaly Context:
                  </div>
                  <p className="text-xs text-[#929EAE] leading-relaxed font-sans">
                    {activeNode.details}
                  </p>
                </div>

                {/* Connected Edges */}
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="text-[10px] text-[#929EAE] uppercase">
                    Connected Relations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {((activeNode.connectedTo) || (activeNode.connections) || []).map((conn, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#161F2D] text-[#F4F7FC] border border-[#243044]"
                      >
                        → {conn}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#243044]/60">
                <span className="text-xs font-mono text-[#3978E8] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Real-time graph analysis active</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
