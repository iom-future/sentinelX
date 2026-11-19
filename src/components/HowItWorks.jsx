import React from 'react';
import connectImg from '../assets/images/architecture-isometric.webp';
import observeImg from '../assets/images/workflow-observe.webp';
import detectImg from '../assets/images/workflow-detect.webp';
import investigateImg from '../assets/images/workflow-investigate.webp';

export function HowItWorks() {
  const workflowCards = [
    {
      title: 'Connect',
      description: 'Integrate applications, APIs, authentication systems, cloud infrastructure and relevant security data sources across your environments.',
      image: connectImg,
      alt: 'SentinelX Ingestion and API Gateway Connection'
    },
    {
      title: 'Observe',
      description: 'Collect and organize security events, system activity and infrastructure signals with zero performance overhead using lightweight kernel probes.',
      image: observeImg,
      alt: 'SentinelX Event Observation and Stream Ingestion'
    },
    {
      title: 'Detect',
      description: 'Use analytics and AI-assisted analysis to identify unusual behaviour, suspicious authentication patterns and potential infrastructure vulnerabilities.',
      image: detectImg,
      alt: 'SentinelX Anomaly Detection and Threat Classifier'
    },
    {
      title: 'Investigate',
      description: 'Bring related events together, understand their context, map incident blast radius and help security teams determine what requires action.',
      image: investigateImg,
      alt: 'SentinelX Incident Investigation and Forensic Graph'
    }
  ];

  return (
    <section id="platform" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            From Raw Security Events to Actionable Intelligence.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            SentinelX connects relevant security information, analyzes system behaviour and helps teams investigate potential threats through one centralized platform.
          </p>
        </div>

        {/* 4 Cards - 2 by 2 Grid on Desktop View, Image as Background with Bottom Text Overlay */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {workflowCards.map((wf) => (
            <div
              key={wf.title}
              className="relative min-h-[320px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-[#243044] hover:border-[#3978E8]/40 transition-colors duration-300 group flex flex-col justify-end p-6 sm:p-8 bg-[#080B12] shadow-2xl"
            >
              {/* Background Image filling the entire card */}
              <img
                src={wf.image}
                alt={wf.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Seamless dark gradient overlay at the bottom for optimal readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/80 to-transparent pointer-events-none" />

              {/* Bottom Text Overlay (Title. Description) */}
              <div className="relative z-10">
                <span className="text-base sm:text-lg font-heading font-semibold text-[#F4F7FC]">
                  {wf.title}.{' '}
                </span>
                <span className="text-xs sm:text-sm text-[#929EAE] leading-relaxed">
                  {wf.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
