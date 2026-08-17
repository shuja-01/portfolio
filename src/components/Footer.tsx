'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#05070a] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Meta */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-100 text-sm">Mohd Shuja Rizvi</span>
            <span className="text-cyan-400 text-xs">// Process Automation Engineer</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Capgemini Malaysia • Electrical Eng. (GCET) • AI &amp; Process Automation
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/mshuja-rizvi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-all"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/shuja-01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900/80 text-center text-[10px] text-slate-400">
        © {new Date().getFullYear()} Mohd Shuja Rizvi. All rights reserved. Enterprise meets Edgy portfolio built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
