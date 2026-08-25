'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, FileText } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette?: () => void;
  themeMode?: string;
  onToggleTheme?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'editorial-nav shadow-md'
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
              <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-blue-500/40 p-[2px] bg-slate-900 shadow-md">
                <Image
                  src="/shuja.jpg"
                  alt="Mohd Shuja Rizvi"
                  width={44}
                  height={44}
                  priority
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-base tracking-tight text-white">
                  Mohd Shuja Rizvi
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 font-bold hidden sm:inline-block">
                  CAPGEMINI
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 font-medium">
                Kuala Lumpur, Malaysia // Active
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full editorial-card shadow-sm bg-slate-950/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-blue-400 hover:bg-slate-800/70 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-3">
            {/* LinkedIn Quick Connect */}
            <a
              href="https://www.linkedin.com/in/mshuja-rizvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-blue-400 border border-slate-800 transition-all text-xs font-mono font-semibold shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            {/* Profile PDF Viewer Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all shadow-md bg-blue-600 hover:bg-blue-500 text-white"
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
        <div className="lg:hidden editorial-nav border-b border-slate-800 px-4 py-6 space-y-4 animate-in slide-in-from-top-2 bg-[#0b0f17]">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>View Profile PDF</span>
            </button>

            <a
              href="https://www.linkedin.com/in/mshuja-rizvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs font-semibold"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
