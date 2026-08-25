'use client';

import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[88vh] glass-panel rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#04070d] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-sm">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-display font-bold text-slate-900 dark:text-white">Mohd Shuja Rizvi — Profile.pdf</h3>
              <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold">Process Automation Engineer @ Capgemini</span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono">
            <a
              href="/Profile.pdf"
              download="Mohd_Shuja_Rizvi_Profile.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 dark:from-cyan-400 dark:to-emerald-400 hover:opacity-95 text-white dark:text-slate-950 text-xs font-bold transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href="/Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs transition-all border border-slate-200 dark:border-slate-800 shadow-sm"
              title="Open in new tab"
              aria-label="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all border border-slate-200 dark:border-slate-800 ml-1 shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content - PDF iFrame & Fallback */}
        <div className="flex-1 bg-slate-100 dark:bg-[#070c14] relative">
          <iframe
            src="/Profile.pdf#toolbar=0"
            className="w-full h-full border-none"
            title="Mohd Shuja Rizvi Profile PDF"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-2.5 bg-slate-50 dark:bg-slate-950/90 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Tricentis Tosca L2 • REST Assured • React 19 • B.Tech EE</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
