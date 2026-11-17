import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, ShieldCheck, Heart } from './icons';

export function Footer({ onOpenEarlyAccess }) {
  const footerSections = [
    {
      title: 'Platform',
      tag: 'CORE',
      links: [
        { name: 'Overview', href: '#platform' },
        { name: 'Threat Detection', href: '#platform' },
        { name: 'Incident Investigation', href: '#intelligence' },
        { name: 'Vulnerability Intelligence', href: '#capabilities' },
      ],
    },
    {
      title: 'Developers',
      tag: 'APIS',
      links: [
        { name: 'Documentation', href: '#developers' },
        { name: 'API Reference', href: '#developers' },
        { name: 'SDKs', href: '#developers' },
        { name: 'Integrations', href: '#integrations' },
      ],
    },
    {
      title: 'Company',
      tag: 'CORP',
      links: [
        { name: 'About', href: '#platform' },
        { name: 'Early Access', href: '#early-access' },
        { name: 'Contact', href: '#early-access' },
        { name: 'Careers', href: '#early-access' },
      ],
    },
    {
      title: 'Resources',
      tag: 'DOCS',
      links: [
        { name: 'Security Insights', href: '#trust' },
        { name: 'Documentation', href: '#developers' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Privacy Policy', href: '#trust' },
      ],
    },
  ];

  return (
    <footer className="bg-[#080B12] text-[#929EAE] border-t border-[#243044] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#101622] border border-[#243044] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#3978E8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <polygon points="12 2 20 6.5 20 15.5 12 22 4 15.5 4 6.5" />
                  <circle cx="12" cy="12" r="3" className="fill-[#43D9C3]/20 stroke-[#43D9C3]" />
                </svg>
              </div>
              <span className="font-heading font-bold text-lg text-[#F4F7FC] tracking-wider">
                SENTINEL<span className="text-[#3978E8]">X</span>
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#101622] text-[#43D9C3] border border-[#243044]">
                v2.4
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#929EAE] leading-relaxed max-w-sm">
              AI-powered security intelligence helping developers and organizations understand threats, investigate suspicious activity and protect modern infrastructure.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#101622] border border-[#243044] hover:text-white hover:border-[#3978E8] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#101622] border border-[#243044] hover:text-white hover:border-[#3978E8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#101622] border border-[#243044] hover:text-white hover:border-[#3978E8] transition-colors"
                aria-label="X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((sec) => (
            <div key={sec.title} className="space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#F4F7FC] font-semibold tracking-wide uppercase">
                <span>{sec.title}</span>
                <span className="text-[10px] text-[#3978E8]">[{sec.tag}]</span>
              </div>
              <ul className="space-y-2 text-xs">
                {sec.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-[#F4F7FC] transition-colors block py-0.5"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#243044] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span>© 2026 SentinelX. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#929EAE]">Built for developers. Designed for security.</span>
          </div>

          {/* Real-time Telemetry status */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#101622] border border-[#243044] text-[10px]">
            <span className="w-2 h-2 rounded-full bg-[#43D9C3] animate-pulse"></span>
            <span className="text-[#43D9C3] font-semibold">ALL SYSTEMS OPERATIONAL</span>
            <span className="text-[#929EAE]">|</span>
            <span className="text-[#929EAE]">99.99% UPTIME</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
