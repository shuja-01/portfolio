'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsMatrix from '@/components/SkillsMatrix';
import TerminalDeck from '@/components/TerminalDeck';
import PublicationsCerts from '@/components/PublicationsCerts';
import ContactSection from '@/components/ContactSection';
import ResumeModal from '@/components/ResumeModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Floating Translucent Glass Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full-Bleed Hero Banner */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* Executive Background & Architecture */}
      <AboutSection />

      {/* Interactive Career Chronology */}
      <ExperienceTimeline />

      {/* Technical Stack & Capabilities Matrix */}
      <SkillsMatrix />

      {/* Full-Width Developer Terminal CLI Deck */}
      <TerminalDeck />

      {/* Peer Research & Certifications */}
      <PublicationsCerts />

      {/* Direct Contact & Social Links */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* PDF Document Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
