import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { DeveloperExperience } from './components/DeveloperExperience';
import { IntelligenceEngine } from './components/IntelligenceEngine';
import { Audience } from './components/Audience';
import { Testimonials } from './components/Testimonials';
import { Integrations } from './components/Integrations';
import { Team } from './components/Team';
import { EarlyAccess } from './components/EarlyAccess';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EarlyAccessModal } from './components/EarlyAccessModal';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('early-access'); // 'early-access' | 'sign-in'

  const handleOpenEarlyAccess = () => {
    // Scroll directly to the full in-page form if visible, or open modal
    const el = document.getElementById('early-access');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalMode('early-access');
      setModalOpen(true);
    }
  };

  const handleOpenSignIn = () => {
    setModalMode('sign-in');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F4F7FC] selection:bg-[#3978E8]/30 selection:text-[#43D9C3] flex flex-col">
      {/* Navigation */}
      <Navbar
        onOpenEarlyAccess={handleOpenEarlyAccess}
        onOpenSignIn={handleOpenSignIn}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 03. Hero Section */}
        <Hero onOpenEarlyAccess={handleOpenEarlyAccess} />

        {/* 04. The Problem */}
        <Problem />

        {/* 05. How SentinelX Works & Interactive Product Demo */}
        <HowItWorks />

        {/* 06. Core Platform Capabilities */}
        <Features />

        {/* 07. Developer Experience & Code Demo */}
        <DeveloperExperience onOpenEarlyAccess={handleOpenEarlyAccess} />

        {/* 08. The Intelligence Engine & Interactive Graph Topology */}
        <ErrorBoundary>
          <IntelligenceEngine />
        </ErrorBoundary>

        {/* 09. Who SentinelX Is For */}
        <Audience onOpenEarlyAccess={handleOpenEarlyAccess} />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Integrations & Ecosystem */}
        <Integrations />

        {/* 12. Team Section - Meet the Minds Behind SentinelX */}
        <Team />

        {/* 14. Early Access Application Form */}
        <EarlyAccess />

        {/* 15. Frequently Asked Questions */}
        <FAQ />

        {/* 16. Final CTA */}
        <FinalCTA onOpenEarlyAccess={handleOpenEarlyAccess} />
      </main>

      {/* 17. Footer */}
      <Footer onOpenEarlyAccess={handleOpenEarlyAccess} />

      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
      />
    </div>
  );
}
