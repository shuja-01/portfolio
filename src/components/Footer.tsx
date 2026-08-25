'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

interface FooterProps {
  onOpenCommandPalette?: () => void;
  themeMode?: string;
  onToggleTheme?: () => void;
}

export default function Footer({}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a10] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Credentials */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-white text-sm">Mohd Shuja Rizvi</span>
              <span className="text-blue-400 text-xs font-semibold">// Process Automation &amp; Frontend Architect</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Capgemini Malaysia • Electrical Engineering (GCET Graduate) • IEEE Published Author
            </p>
          </div>

          {/* Social Links & Controls */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/in/mshuja-rizvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-blue-400 border border-slate-800 transition-all text-xs font-semibold shadow-sm"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/shuja-01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 transition-all text-xs font-semibold shadow-sm"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 transition-all shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* System Telemetry & Copyright Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon"></span>
            <span>KL_NODE: LIVE • TLS 1.3 ENCRYPTED • ALL SYSTEMS OPERATIONAL</span>
          </div>

          <div>
            © {new Date().getFullYear()} Mohd Shuja Rizvi. Engineered with React 19, Next.js 16 &amp; Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
}
