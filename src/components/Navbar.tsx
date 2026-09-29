'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, FileText, Volume2, VolumeX, Palette, Sparkles } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { sound } from '@/utils/soundEffects';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [activeTheme, setActiveTheme] = useState<'aurora' | 'emerald' | 'nebula'>('aurora');
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  useEffect(() => {
    setSoundActive(!sound.getIsMuted());

    // Restore saved theme
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('shuja_portfolio_theme') as 'aurora' | 'emerald' | 'nebula' | null;
      if (savedTheme) {
        setActiveTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        document.documentElement.setAttribute('data-theme', 'aurora');
      }
    }
  }, []);

  const switchTheme = (theme: 'aurora' | 'emerald' | 'nebula') => {
    setActiveTheme(theme);
    setThemeMenuOpen(false);
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('shuja_portfolio_theme', theme);
    }
    sound.playThemeChange();
  };

  const toggleSound = () => {
    const isNowActive = sound.toggleMute();
    setSoundActive(isNowActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#journey' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Test Sandbox', href: '#projects' },
    { name: 'Research & Certs', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'editorial-nav shadow-lg border-b border-[#00f5ff]/15 bg-[#040711]/90'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Identity & Current Role */}
          <a
            href="#"
            className="flex items-center gap-3.5 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-[#00f5ff]/40 p-[2px] bg-slate-900 shadow-md">
                <Image
                  src="/shuja.jpg"
                  alt="Mohd Shuja Rizvi"
                  width={44}
                  height={44}
                  priority
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#00ff9d] border-2 border-slate-950 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-[#00f5ff] transition-colors">
                  Mohd Shuja Rizvi
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00f5ff]/15 border border-[#00f5ff]/40 text-[#00f5ff] font-bold hidden sm:inline-block">
                  CAPGEMINI
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 font-medium">
                Kuala Lumpur, Malaysia // Active
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3.5 py-1.5 rounded-full editorial-card shadow-sm bg-[#040711]/85 border border-[#00f5ff]/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-[#00f5ff] hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Color Theme Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#00f5ff]/30 bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-[#00f5ff] font-semibold transition-all shadow-sm"
                title="Switch Color Theme"
              >
                <Palette className="w-3.5 h-3.5 text-[#00f5ff]" />
                <span className="hidden xl:inline capitalize">{activeTheme}</span>
              </button>

              {themeMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 p-2 rounded-2xl bg-[#040711]/95 backdrop-blur-xl border border-[#00f5ff]/30 shadow-2xl space-y-1 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-2.5 py-1 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Select Color Palette
                  </div>
                  <button
                    onClick={() => switchTheme('aurora')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                      activeTheme === 'aurora'
                        ? 'bg-[#00f5ff] text-slate-950 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00f5ff]"></span>
                      Cyber Aurora
                    </span>
                    {activeTheme === 'aurora' && <span className="text-[10px]">●</span>}
                  </button>
                  <button
                    onClick={() => switchTheme('emerald')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                      activeTheme === 'emerald'
                        ? 'bg-[#00ff9d] text-slate-950 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9d]"></span>
                      Matrix Mint
                    </span>
                    {activeTheme === 'emerald' && <span className="text-[10px]">●</span>}
                  </button>
                  <button
                    onClick={() => switchTheme('nebula')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                      activeTheme === 'nebula'
                        ? 'bg-[#f43f5e] text-white font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]"></span>
                      Sunset Nebula
                    </span>
                    {activeTheme === 'nebula' && <span className="text-[10px]">●</span>}
                  </button>
                </div>
              )}
            </div>

            {/* 3D Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-semibold transition-all ${
                soundActive
                  ? 'bg-[#00f5ff]/15 border-[#00f5ff] text-[#00f5ff] ring-1 ring-[#00f5ff]/40 shadow-sm'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={soundActive ? '3D Spatial Audio Enabled (Click to mute)' : 'Enable 3D Audio Cues'}
            >
              {soundActive ? <Volume2 className="w-3.5 h-3.5 text-[#00f5ff]" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
              <span className="hidden xl:inline">{soundActive ? 'Audio ON' : 'Audio'}</span>
            </button>

            {/* 3D Mode Active Badge */}
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-[#00ff9d] font-semibold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse"></span>
              <span>3D SPATIAL</span>
            </span>

            {/* LinkedIn Quick Connect */}
            <a
              href="https://www.linkedin.com/in/mshuja-rizvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-[#00f5ff] border border-slate-800 transition-all text-xs font-mono font-semibold shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#00f5ff]" />
              <span>LinkedIn</span>
            </a>

            {/* Profile PDF Viewer Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all shadow-md shadow-[#00f5ff]/25 bg-[#00f5ff] hover:bg-[#00e1eb] text-slate-950"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Profile PDF</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 shadow-sm"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden editorial-nav border-b border-[#00f5ff]/20 px-4 py-6 space-y-4 animate-in slide-in-from-top-2 bg-[#040711]">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-200 bg-slate-900/80 border border-slate-800/80 hover:border-[#00f5ff]/50 hover:text-[#00f5ff]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => switchTheme('aurora')}
                className={`flex-1 py-2 text-xs font-mono rounded-lg border text-center ${
                  activeTheme === 'aurora' ? 'bg-[#00f5ff] text-slate-950 font-bold border-[#00f5ff]' : 'border-slate-800 text-slate-300'
                }`}
              >
                Aurora
              </button>
              <button
                onClick={() => switchTheme('emerald')}
                className={`flex-1 py-2 text-xs font-mono rounded-lg border text-center ${
                  activeTheme === 'emerald' ? 'bg-[#00ff9d] text-slate-950 font-bold border-[#00ff9d]' : 'border-slate-800 text-slate-300'
                }`}
              >
                Emerald
              </button>
              <button
                onClick={() => switchTheme('nebula')}
                className={`flex-1 py-2 text-xs font-mono rounded-lg border text-center ${
                  activeTheme === 'nebula' ? 'bg-[#f43f5e] text-white font-bold border-[#f43f5e]' : 'border-slate-800 text-slate-300'
                }`}
              >
                Nebula
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00f5ff] text-slate-950 font-mono text-xs font-bold shadow-md shadow-[#00f5ff]/25"
            >
              <FileText className="w-4 h-4" />
              <span>Inspect Profile PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
