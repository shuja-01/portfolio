'use client';

import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  User,
  Briefcase,
  Cpu,
  Terminal as TerminalIcon,
  BookOpen,
  Mail,
  FileText,
  Sparkles,
  Layers,
  Monitor,
  ChevronRight,
  Command,
  ExternalLink,
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsMatrix from './SkillsMatrix';
import TerminalDeck from './TerminalDeck';
import PublicationsCerts from './PublicationsCerts';
import ContactSection from './ContactSection';
import ResumeModal from './ResumeModal';

export default function TabbedWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [viewMode, setViewMode] = useState<'deck' | 'scroll'>('deck');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Keyboard shortcut listener (1 to 7)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === '1') setActiveTab('overview');
      if (e.key === '2') setActiveTab('about');
      if (e.key === '3') setActiveTab('journey');
      if (e.key === '4') setActiveTab('skills');
      if (e.key === '5') setActiveTab('terminal');
      if (e.key === '6') setActiveTab('research');
      if (e.key === '7') setActiveTab('contact');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Overview & Hero', icon: LayoutDashboard, shortcut: '1' },
    { id: 'about', label: 'About & Bio', icon: User, shortcut: '2' },
    { id: 'journey', label: 'Career Journey', icon: Briefcase, shortcut: '3' },
    { id: 'skills', label: 'Skills & Stack', icon: Cpu, shortcut: '4' },
    { id: 'terminal', label: 'Terminal CLI', icon: TerminalIcon, shortcut: '5' },
    { id: 'research', label: 'Research & Certs', icon: BookOpen, shortcut: '6' },
    { id: 'contact', label: 'Contact & Hire', icon: Mail, shortcut: '7' },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top OS Header Bar */}
      <header className="sticky top-0 z-50 glass-nav border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        
        {/* Brand Meta */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-sm">
              SR
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 text-sm tracking-wide flex items-center gap-2">
              Mohd Shuja Rizvi
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 hidden sm:inline-block">
                INTERACTIVE APP
              </span>
            </span>
            <span className="text-[11px] font-mono text-cyan-400/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
              Capgemini Process &amp; AI Automation Engineer
            </span>
          </div>
        </div>

        {/* View Mode Switcher + CTAs */}
        <div className="flex items-center gap-3">
          
          {/* View Mode Toggle: Interactive Deck vs Full Scroll */}
          <div className="hidden sm:flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setViewMode('deck')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'deck'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Interactive App Mode</span>
            </button>

            <button
              onClick={() => setViewMode('scroll')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'scroll'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Page Story</span>
            </button>
          </div>

          <a
            href="https://www.linkedin.com/in/mshuja-rizvi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-lg transition-all"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-lg transition-all shadow-md shadow-cyan-500/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>PDF Resume</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Body */}
      {viewMode === 'deck' ? (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 gap-6">
          
          {/* Left Cyber Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0 flex flex-col gap-2">
            <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-2 mb-2">
                <span>NAVIGATION DECK</span>
                <span className="text-cyan-400 font-bold">MODE: APP</span>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-mono text-xs transition-all group ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/40 text-cyan-300 font-semibold shadow-lg shadow-cyan-500/10'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/60 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <item.icon
                          className={`w-4 h-4 transition-colors ${
                            isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'
                          }`}
                        />
                        <span>{item.label}</span>
                      </div>

                      <span className="text-[10px] text-slate-600 group-hover:text-slate-400 font-mono px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                        {item.shortcut}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Direct Quick PDF Trigger */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/60 text-slate-300 text-xs font-mono transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open Profile.pdf Viewer</span>
              </button>
            </div>

            {/* Quick Contact & Status Card */}
            <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono hidden md:block">
              <span className="text-[10px] text-slate-500 block uppercase tracking-wider">
                QUICK DIRECTORY
              </span>
              <div className="space-y-1 text-slate-300 text-[11px]">
                <p className="truncate">📧 mshuja.rizvi@gmail.com</p>
                <p>📍 Kuala Lumpur, Malaysia</p>
                <p>🎓 B.Tech Electrical Eng.</p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-emerald-400">
                <span>PRESS 1-7 TO SWITCH TABS</span>
                <Command className="w-3 h-3" />
              </div>
            </div>
          </aside>

          {/* Right Active Dynamic Viewport */}
          <main className="flex-1 glass-panel rounded-3xl border border-slate-800 p-6 sm:p-8 overflow-y-auto max-h-[82vh] bg-slate-950/70 shadow-2xl relative">
            
            {/* Viewport Header Indicator */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6 text-xs font-mono">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block"></span>
                <span className="uppercase tracking-wider">
                  VIEWPORT // {navItems.find((n) => n.id === activeTab)?.label}
                </span>
              </div>
              <span className="text-slate-500 text-[11px]">INTERACTIVE DECK ACTIVE</span>
            </div>

            {/* Dynamic Tab Content Render */}
            <div className="animate-in fade-in duration-300">
              {activeTab === 'overview' && <HeroSection onOpenResume={() => setIsResumeOpen(true)} />}
              {activeTab === 'about' && <AboutSection />}
              {activeTab === 'journey' && <ExperienceTimeline />}
              {activeTab === 'skills' && <SkillsMatrix />}
              {activeTab === 'terminal' && <TerminalDeck />}
              {activeTab === 'research' && <PublicationsCerts />}
              {activeTab === 'contact' && <ContactSection />}
            </div>

          </main>

        </div>
      ) : (
        /* Full Presentation Story Mode (Scrolling View) */
        <div className="flex-1 space-y-12">
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
          <AboutSection />
          <ExperienceTimeline />
          <SkillsMatrix />
          <TerminalDeck />
          <PublicationsCerts />
          <ContactSection />
        </div>
      )}

      {/* PDF Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
