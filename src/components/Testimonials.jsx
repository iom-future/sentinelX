import React from 'react';
import dapoImg from '../assets/images/testimonials/dapo-adelegan.jpg';
import sarahImg from '../assets/images/testimonials/sarah-jenkins.jpg';
import marcusImg from '../assets/images/testimonials/marcus-vance.jpg';

export function Testimonials() {
  const testimonials = [
    {
      id: 'dapo',
      name: 'Dapo Adelegan',
      role: 'VP of Engineering',
      company: 'Kovera Technologies',
      metric: '92% Fewer False Positives',
      quote:
        'SentinelX gave our engineering organization visibility we did not think was possible without slowing down our deployment pipelines. The kernel probes integrate seamlessly into our Kubernetes clusters with zero measurable overhead.',
      image: dapoImg
    },
    {
      id: 'sarah',
      name: 'Sarah Jenkins',
      role: 'Head of Cloud Infrastructure',
      company: 'Novastack Cloud',
      metric: '< 1ms Ingestion Latency',
      quote:
        'Before SentinelX, incident investigations required manually stitching together logs across CloudTrail, APM tools, and edge gateways. Now our team sees the complete blast-radius forensic graph in milliseconds.',
      image: sarahImg
    },
    {
      id: 'marcus',
      name: 'Marcus Vance',
      role: 'Principal DevSecOps Architect',
      company: 'Cortexia Labs',
      metric: '20+ Hours Saved Weekly',
      quote:
        'The developer experience is extraordinary. We treat security signals like first-class code telemetry, and SentinelX provides actionable alerts directly to our engineering workflows without false-alarm noise.',
      image: marcusImg
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Built for Engineers. Trusted by Security Leaders.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            See how modern engineering and security teams eliminate alert fatigue and detect real threats in real time with SentinelX.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#101622] border border-[#243044] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#3978E8]/40 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Top: Highlight metric and quote */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3978E8]/10 border border-[#3978E8]/30 text-xs font-mono font-medium text-[#43D9C3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3] animate-pulse"></span>
                  {t.metric}
                </div>

                <p className="text-sm sm:text-base text-[#F4F7FC] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom: Profile info */}
              <div className="mt-8 pt-6 border-t border-[#243044]/80 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#243044] group-hover:border-[#3978E8] transition-colors shrink-0"
                />
                <div>
                  <h4 className="text-sm font-heading font-semibold text-[#F4F7FC]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#929EAE]">
                    {t.role} · <span className="text-[#3978E8]">{t.company}</span>
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

