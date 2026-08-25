'use client';

import React from 'react';
import { BookOpen, Award, CheckCircle2, FileCheck2, Sparkles, ExternalLink, Bot } from 'lucide-react';

export default function PublicationsCerts() {
  const certifications = [
    {
      title: 'AI Coder: Complete Claude Code & Coding Agents Course',
      issuer: 'Udemy',
      category: 'AI Agents & Modern LLM Tooling',
      desc: 'Mastery of agentic workflows, Claude Code CLI orchestration, automated tool invocation, MCP architecture, and full-stack software development with autonomous coding agents.',
      badge: 'UDEMY CERTIFIED',
      highlight: true,
    },
    {
      title: 'Automation Specialist Level 2',
      issuer: 'Tricentis Tosca',
      category: 'Enterprise Automation',
      desc: 'Advanced automated test engineering, API integration, and enterprise regression suite creation.',
      badge: 'L2 SPECIALIST',
    },
    {
      title: 'REST API Automation Using REST Assured',
      issuer: 'Java API Testing Architecture',
      category: 'API & Security Testing',
      desc: 'HTTP request/response validation, status code verification, and security token handling in Java.',
      badge: 'REST ASSURED',
    },
    {
      title: 'Data Analysts Toolbox',
      issuer: 'Excel, Python, Power BI & PivotTables',
      category: 'Data Science & Analytics',
      desc: 'Statistical data analysis, business intelligence dashboarding, and dataset manipulation.',
      badge: 'ANALYTICS',
    },
    {
      title: 'Excel for Financial Planning and Analysis (FP&A)',
      issuer: 'Financial Modeling',
      category: 'Finance & Analytics',
      desc: 'Financial forecasting, model creation, capital allocation, and business ROI analysis.',
      badge: 'FP&A MODELING',
    },
    {
      title: 'Programming for Everybody (Python)',
      issuer: 'Python Software Foundation',
      category: 'Core Programming',
      desc: 'Algorithmic logic, data structures, and script automation fundamentals.',
      badge: 'PYTHON PSF',
    },
  ];

  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-700 dark:text-blue-300 shadow-sm font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>PEER RESEARCH &amp; ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-slate-950 dark:text-white">
            Publications &amp; <span className="gradient-text-cobalt">Certifications</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Demonstrated track record of academic research published on IEEE Xplore, agentic AI workflows, and industry-recognized enterprise accreditations.
          </p>
        </div>

        {/* Featured Research Paper Card */}
        <div className="editorial-card p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:via-[#111726] dark:to-blue-950/20 mb-16 relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-500/5 blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-700 dark:text-blue-300 font-semibold">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>IEEE XPLORE RESEARCH PUBLICATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950 dark:text-white leading-snug">
                <a
                  href="https://ieeexplore.ieee.org/document/10182947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-2 group"
                >
                  <span>&quot;A Review On: Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;</span>
                  <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </a>
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Investigated machine learning and convolutional neural network (CNN) architectures for early dermatological lesion classification. Explored data augmentation, synthetic sampling, and loss-function reweighting techniques to overcome severe class imbalances in clinical image datasets.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-blue-700 dark:text-blue-300 pt-1">
                <span className="bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 font-medium">#IEEE_Xplore</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 font-medium">#DeepLearning</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 font-medium">#ComputerVision</span>
                <span className="bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 font-medium">#CNN</span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto flex flex-col gap-3">
              <a
                href="https://ieeexplore.ieee.org/document/10182947"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all shadow-md bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950 text-center"
              >
                <span>Read on IEEE Xplore</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="editorial-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1 text-center bg-slate-50 dark:bg-slate-900/60">
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider font-semibold">AFFILIATION &amp; DOI</span>
                <span className="text-slate-950 dark:text-white font-heading font-bold text-xs block">GCET Research Publication</span>
                <span className="text-[11px] text-blue-700 dark:text-blue-400 font-mono block">IEEE Doc: 10182947</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`editorial-card p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between space-y-4 group shadow-md ${
                cert.highlight
                  ? 'border-blue-500/50 bg-white dark:bg-[#161e31] ring-1 ring-blue-500/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-blue-500/40 bg-white dark:bg-[#111726]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:border-blue-400/60 transition-all shadow-sm">
                    {cert.highlight ? <Bot className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                    cert.highlight
                      ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/40'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                  }`}>
                    {cert.badge}
                  </span>
                </div>

                <h4 className="text-base font-heading font-bold text-slate-950 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-blue-700 dark:text-blue-400 font-semibold">{cert.issuer}</p>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">{cert.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Accreditation
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
