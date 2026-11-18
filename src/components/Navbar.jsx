import React, { useState, useEffect, useRef } from 'react';
import { ANNOUNCEMENT } from '../data/content';
import { ArrowRight, Menu, X, ChevronRight } from './icons';

export function Navbar({ onOpenEarlyAccess }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef(null);

  const navLinks = [
    { name: 'Platform', href: '#platform', id: 'platform' },
    { name: 'Solutions', href: '#capabilities', id: 'capabilities' },
    { name: 'Developers', href: '#developers', id: 'developers' },
    { name: 'Architecture', href: '#intelligence', id: 'intelligence' },
    { name: 'Integrations', href: '#integrations', id: 'integrations' },
    { name: 'Trust', href: '#trust', id: 'trust' },
  ];

  const handleLinkClick = (href) => {
    // Immediately place active indicator directly on the target clicked link
    setActiveSection(href);
    isNavigatingRef.current = true;

    // Lock scrollspy updates while browser smooth-scrolls to the target
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    navTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 900);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Skip intermediate updates if user intentionally clicked a link
      if (isNavigatingRef.current) return;

      // Detect which section is currently in view
      const scrollPosition = window.scrollY + 160;
      let current = '';

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = link.href;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Top Technical Announcement Bar */}
      <div className="bg-[#101622] border-b border-[#243044] text-xs text-[#929EAE] py-1.5 px-4 sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-[#3978E8]/10 text-[#3978E8] border border-[#3978E8]/30 font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#43D9C3] animate-pulse"></span>
              {ANNOUNCEMENT.tag}
            </span>
            <span className="text-[#F4F7FC] font-medium hidden sm:inline">{ANNOUNCEMENT.title}</span>
            <span className="text-[#929EAE] hidden md:inline">| Latency: <span className="text-[#43D9C3]">{ANNOUNCEMENT.latency}</span></span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-[#080B12] text-[#929EAE] border border-[#243044]">
              [SHA: 9f4b1a]
            </span>
            <a
              href="#early-access"
              className="text-[#43D9C3] hover:text-white flex items-center gap-1 transition-colors group cursor-pointer"
            >
              Request Access
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-[31px] z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080B12]/90 backdrop-blur-md border-b border-[#243044] shadow-lg shadow-black/40'
            : 'bg-[#080B12]/40 backdrop-blur-sm border-b border-[#243044]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Custom Geometric Security Symbol */}
            <div className="w-9 h-9 rounded-lg bg-[#101622] border border-[#243044] flex items-center justify-center group-hover:border-[#3978E8] transition-colors shadow-sm">
              <svg
                className="w-5 h-5 text-[#3978E8] transition-transform duration-300 group-hover:scale-105"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Minimal geometric shield with connected radar node */}
                <polygon points="12 2 20 6.5 20 15.5 12 22 4 15.5 4 6.5" />
                <circle cx="12" cy="12" r="3" className="fill-[#43D9C3]/20 stroke-[#43D9C3]" />
                <line x1="12" y1="5" x2="12" y2="8" stroke="#43D9C3" strokeWidth="1.5" />
                <line x1="12" y1="16" x2="12" y2="19" stroke="#43D9C3" strokeWidth="1.5" />
              </svg>
            </div>

            <span className="font-heading font-bold text-lg tracking-wider text-[#F4F7FC]">
              SENTINEL<span className="text-[#3978E8]">X</span>
            </span>
          </a>

          {/* Desktop Links with Instant Blue Active Indicator Dot */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`group relative px-3 py-1.5 text-sm transition-colors rounded-md flex items-center ${
                    isActive
                      ? 'text-[#F4F7FC] font-medium bg-[#101622]'
                      : 'text-[#929EAE] hover:text-[#F4F7FC] hover:bg-[#101622]/60'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3978E8] shadow-[0_0_8px_#3978E8] mr-2" />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEarlyAccess}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-md bg-[#3978E8] text-white hover:bg-[#3269d0] transition-all shadow-md hover:shadow-[#3978E8]/20 border border-[#3978E8]/80 cursor-pointer group"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-[#101622] border border-[#243044] text-[#929EAE] hover:text-[#F4F7FC]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#080B12] border-b border-[#243044] px-4 pt-3 pb-6 space-y-3">
            <div className="text-[11px] font-mono text-[#929EAE] px-2 uppercase tracking-wider flex items-center justify-between">
              <span>Navigation Directory</span>
              <span className="text-[#43D9C3]">[ONLINE]</span>
            </div>
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      handleLinkClick(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors border ${
                      isActive
                        ? 'text-[#F4F7FC] bg-[#101622] border-[#3978E8]/40'
                        : 'text-[#929EAE] hover:text-[#F4F7FC] hover:bg-[#101622] border-transparent hover:border-[#243044]'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3978E8] shadow-[0_0_8px_#3978E8]"></span>
                      )}
                      <span className={isActive ? 'font-medium text-white' : ''}>{link.name}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#929EAE]" />
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#243044] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEarlyAccess();
                }}
                className="w-full text-center py-2.5 text-xs font-mono font-semibold text-white bg-[#3978E8] rounded-md shadow"
              >
                Request Early Access
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
