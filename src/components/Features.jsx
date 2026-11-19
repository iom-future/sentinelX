import React from 'react';
import threatTopologyImg from '../assets/images/threat-topology.webp';
import apiPipelineImg from '../assets/images/solutions-api-pipeline.webp';
import vulnInfrastructureImg from '../assets/images/infrastructure-nodes.webp';
import incidentGraphImg from '../assets/images/solutions-incident-graph.webp';
import alertsAutomationImg from '../assets/images/solutions-alerts-automation.webp';
import analyticsImg from '../assets/images/solutions-analytics.webp';

export function Features() {
  const solutionsCards = [
    {
      id: 'ai-threat',
      title: 'AI-Assisted Threat Detection',
      description: 'Continuous behavioral baseline learning that catches zero-day access anomalies and subtle lateral movements without brittle signature sets.',
      image: threatTopologyImg,
      alt: 'AI-Assisted Threat Detection Topology',
      bentoSpan: 'md:col-span-2 lg:col-span-2'
    },
    {
      id: 'api-monitor',
      title: 'Application & API Monitoring',
      description: 'Deep introspection into HTTP/REST, gRPC, and GraphQL requests with automatic token credential validation and payload scanning.',
      image: apiPipelineImg,
      alt: 'Application and API Monitoring Pipeline',
      bentoSpan: 'md:col-span-1 lg:col-span-1'
    },
    {
      id: 'vuln-intel',
      title: 'Vulnerability Intelligence',
      description: 'Context-aware vulnerability scoring that evaluates actual reachability and runtime exploitability rather than theoretical CVE databases.',
      image: vulnInfrastructureImg,
      alt: 'Vulnerability Intelligence and Asset Reachability',
      bentoSpan: 'md:col-span-1 lg:col-span-1'
    },
    {
      id: 'incident-investigate',
      title: 'Intelligent Incident Investigation',
      description: 'Automatic event graph correlation reconstructs the blast radius from ingress point to database write within milliseconds.',
      image: incidentGraphImg,
      alt: 'Incident Investigation and Blast Radius Graph',
      bentoSpan: 'md:col-span-2 lg:col-span-2'
    },
    {
      id: 'alerts-automation',
      title: 'Security Alerts & Automation',
      description: 'Deterministic webhook pipelines and bidirectional incident syncing directly into Slack, PagerDuty, or security orchestration runbooks.',
      image: alertsAutomationImg,
      alt: 'Security Alerts and Automation Engine',
      bentoSpan: 'md:col-span-2 lg:col-span-2'
    },
    {
      id: 'analytics-dashboard',
      title: 'Security Analytics Dashboard',
      description: 'High-density telemetry views for engineers with drill-down capabilities from multi-region clusters down to individual pod system calls.',
      image: analyticsImg,
      alt: 'Security Analytics Dashboard and Telemetry Metrics',
      bentoSpan: 'md:col-span-1 lg:col-span-1'
    }
  ];

  return (
    <section id="capabilities" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Clean, No Tags */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Everything You Need to Understand Your Security Posture.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            Engineered from the ground up for software developers, SREs, and security engineers. High-fidelity signals without drowning in false-positive fatigue.
          </p>
        </div>

        {/* Solutions Bento Grid - Cards designed like the Platform section */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutionsCards.map((card) => (
            <div
              key={card.id}
              className={`relative min-h-[320px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-[#243044] hover:border-[#3978E8]/40 transition-colors duration-300 group flex flex-col justify-end p-6 sm:p-8 bg-[#080B12] shadow-2xl ${card.bentoSpan}`}
            >
              {/* Background Image filling the entire card */}
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Seamless dark gradient overlay at the bottom for optimal readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/80 to-transparent pointer-events-none" />

              {/* Bottom Text Overlay (Title. Description) */}
              <div className="relative z-10">
                <span className="text-base sm:text-lg font-heading font-semibold text-[#F4F7FC]">
                  {card.title}.{' '}
                </span>
                <span className="text-xs sm:text-sm text-[#929EAE] leading-relaxed">
                  {card.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
