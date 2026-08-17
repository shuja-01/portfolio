'use client';

import React from 'react';
import { ArrowRight, Bot, Cpu, ShieldCheck, FileText, Sparkles, Terminal as TerminalIcon, CheckCircle2 } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-24 flex items-center justify-center overflow-hidden ambient-grid">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center space-y-10 max-w-5xl mx-auto">
          
          {/* Glowing Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono tracking-wider text-cyan-300 shadow-xl shadow-cyan-500/10 hover:border-cyan-400 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-slate-300 font-medium">PROCESS AUTOMATION &amp; AI INTEGRATION ENGINEER</span>
            <span className="text-cyan-400 font-bold">// CAPGEMINI MALAYSIA</span>
          </div>

          {/* High Impact Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08]">
              Bridging <span className="gradient-text-edgy">Enterprise Systems</span> with <span className="gradient-text-cyan">Autonomous AI</span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Hi, I&apos;m <span className="text-white font-semibold underline decoration-cyan-400/50 underline-offset-4">Mohd Shuja Rizvi</span>. I engineer end-to-end automated business processes, REST API validation, security encryption (JWT), and custom AI/LLM integrations for global enterprise operations.
            </p>
          </div>

          {/* Capability Tags Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { icon: Bot, label: 'AI & LLM Workflows' },
              { icon: Cpu, label: 'Process Automation' },
              { icon: ShieldCheck, label: 'REST API & Security' },
              { icon: TerminalIcon, label: 'Tosca & Selenium' },
            ].map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition-all shadow-md"
              >
                <item.icon className="w-4 h-4 text-cyan-400" />
                {item.label}
              </span>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/mshuja-rizvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 rounded-2xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all"
            >
              <LinkedinIcon className="w-4 h-4 fill-slate-950" />
              <span>Connect on LinkedIn</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm text-slate-100 glass-panel hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/60 transition-all shadow-lg"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Profile PDF</span>
            </button>

            <a
              href="https://github.com/shuja-01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl text-slate-300 hover:text-white glass-panel hover:bg-slate-800/80 transition-all text-xs font-mono border border-slate-800"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>github.com/shuja-01</span>
            </a>
          </div>

          {/* Metrics Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-12">
            {[
              { label: 'Total Tech Experience', value: '3+ Yrs', detail: 'Automation & Dev' },
              { label: 'Capgemini Consultant', value: 'Present', detail: 'Kuala Lumpur, MY' },
              { label: 'Core Stack', value: 'REST & AI', detail: 'Java, TS, Tosca, Python' },
              { label: 'Engineering Degree', value: 'B.Tech EE', detail: 'GCET Graduate' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl text-left border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
                  {stat.label}
                </div>
                <div className="text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1.5 font-mono">{stat.detail}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
