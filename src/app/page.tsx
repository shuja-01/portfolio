'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsMatrix from '@/components/SkillsMatrix';
import TerminalDeck from '@/components/TerminalDeck';
import PublicationsCerts from '@/components/PublicationsCerts';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import CommandPalette from '@/components/CommandPalette';

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global ⌘K Keyboard Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] relative overflow-x-hidden">
      
      {/* Precision Navigation Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Structural Flow */}
      <main>
        <HeroSection
          onOpenResume={() => setResumeOpen(true)}
        />

        <AboutSection onOpenResume={() => setResumeOpen(true)} />

        <ExperienceTimeline />

        <SkillsMatrix />

        <TerminalDeck />

        <PublicationsCerts />

        <ContactSection />
      </main>

      {/* Global Footer & Diagnostics */}
      <Footer />

      {/* Interactive Resume Modal Viewer */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Universal ⌘K Command Palette (Available via ⌘K shortcut) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />

    </div>
  );
}
