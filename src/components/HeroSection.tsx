'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FileText,
  Sparkles,
  Layers,
  Terminal,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

interface HeroSectionProps {
  onOpenResume: () => void;
  themeMode?: 'light' | 'dark';
  onOpenCommandPalette?: () => void;
}

export default function HeroSection({ onOpenResume, themeMode }: HeroSectionProps) {
  const [activeLens, setActiveLens] = useState<'all' | 'frontend' | 'automation' | 'ai'>('all');

  const lensData = {
    all: {
      headline: 'Architecting Process Automation, Modern Frontend Systems & AI Workflows',
      lead: "Hi, I'm Mohd Shuja Rizvi. I engineer high-performance frontend architectures (React 19, Next.js 16, TypeScript), automated enterprise test suites (Tosca L2, Selenium, REST Assured), secure API frameworks (JWT), and AI-driven document intelligence at Capgemini Malaysia.",
      pills: ['React 19 & Next.js 16 (App Router)', 'Tosca Automation Specialist L2', 'REST API & Security (JWT)', 'Enterprise AI & LLM Systems'],
    },
    frontend: {
      headline: 'Crafting High-Performance React 19, Next.js & Shopify Frontend Architectures',
      lead: 'Specializing in modern component architecture, TypeScript design patterns, Tailwind CSS design tokens, Shopify Liquid storefronts, and sub-second Web Vitals performance optimization.',
      pills: ['React 19 & TypeScript', 'Next.js 16 App Router', 'Tailwind CSS Tokens', 'Shopify Liquid Architecture'],
    },
    automation: {
      headline: 'Zero-Defect Enterprise Test Automation & REST API Engineering',
      lead: 'Certified Tricentis Tosca Automation Specialist (L2) and Java REST Assured architect building data-driven regression pipelines, Selenium/Appium test suites, and JWT token authentication checkers.',
      pills: ['Tricentis Tosca L2 Certified', 'REST Assured & API Auth', 'Selenium & Appium Automation', 'Data-Driven Regression Suites'],
    },
    ai: {
      headline: 'Integrating Autonomous AI Agents, LLMs & Enterprise Business Workflows',
      lead: 'Designing end-to-end intelligent extraction pipelines that parse unstructured documents into validated schemas, authored peer-reviewed CNN deep learning research (IEEE Xplore), and automating operational workflows.',
      pills: ['Enterprise LLM Extraction', 'Claude Code & Agents', 'Deep Learning Research (IEEE)', 'Process Intelligence'],
    },
  };

  const currentLens = lensData[activeLens];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden telemetry-grid bg-[var(--bg-canvas)]">
      
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Thesis & Narrative Cockpit (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Live Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full editorial-card bg-white/95 dark:bg-slate-900/90 shadow-sm text-xs font-mono">
              <span className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon"></span>
                <span>CAPGEMINI MALAYSIA</span>
              </span>
              <span className="text-slate-400">// CONSULTANT</span>
              <span className="text-slate-800 dark:text-slate-200 font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px]">
                SYSTEM STATUS: OPTIMAL
              </span>
            </div>

            {/* Dynamic Headline with Sculptural Display Typography */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.12]">
                {activeLens === 'all' && (
                  <>
                    Architecting <span className="gradient-text-cobalt">Process Automation</span>, Modern <span className="gradient-text-emerald">Frontend Systems</span> &amp; <span className="gradient-text-purple">AI Workflows</span>
                  </>
                )}
                {activeLens === 'frontend' && (
                  <>
                    Crafting <span className="gradient-text-cobalt">High-Performance</span> React 19 &amp; <span className="gradient-text-emerald">Modern Web Architecture</span>
                  </>
                )}
                {activeLens === 'automation' && (
                  <>
                    Zero-Defect <span className="gradient-text-cobalt">Enterprise Test Automation</span> &amp; <span className="gradient-text-emerald">REST API Engineering</span>
                  </>
                )}
                {activeLens === 'ai' && (
                  <>
                    Integrating <span className="gradient-text-purple">Autonomous AI Agents</span> &amp; <span className="gradient-text-cobalt">Intelligent Pipelines</span>
                  </>
                )}
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
                {currentLens.lead}
              </p>
            </div>

            {/* Architectural Lens Selector */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Select Architectural Lens:</span>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {[
                  { key: 'all', label: 'All Disciplines' },
                  { key: 'frontend', label: 'Frontend Architecture' },
                  { key: 'automation', label: 'Process Automation' },
                  { key: 'ai', label: 'AI & LLMs' },
                ].map((lens) => (
                  <button
                    key={lens.key}
                    onClick={() => setActiveLens(lens.key as any)}
                    className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${
                      activeLens === lens.key
                        ? 'bg-slate-950 text-white dark:bg-blue-600 dark:text-white font-bold shadow-md'
                        : 'editorial-card text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white/90 dark:bg-slate-900/60'
                    }`}
                  >
                    {lens.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Pill Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {currentLens.pills.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  <span className="font-medium text-[11px]">{pill}</span>
                </div>
              ))}
            </div>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="https://www.linkedin.com/in/mshuja-rizvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all shadow-md bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950"
              >
                <LinkedinIcon className="w-4 h-4 text-white dark:text-slate-950" />
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-semibold transition-all bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View Profile PDF</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-semibold transition-all bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white shadow-sm"
              >
                <Terminal className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Run Sandbox</span>
              </a>
            </div>

          </div>

          {/* Right Column: Engineering Telemetry Dossier (Cols 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="editorial-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#111726] space-y-6 shadow-xl relative">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-5">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-300 dark:border-blue-500/40 p-0.5 bg-white dark:bg-slate-900 shrink-0 shadow-md">
                  <Image
                    src="/shuja.jpg"
                    alt="Mohd Shuja Rizvi"
                    width={64}
                    height={64}
                    priority
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950"></span>
                </div>

                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-blue-700 dark:text-blue-400 block uppercase tracking-wider font-semibold">
                    ENGINEERING PROFILE // CONSULTANT
                  </span>
                  <h3 className="text-xl font-heading font-bold text-slate-950 dark:text-white truncate">
                    Mohd Shuja Rizvi
                  </h3>
                  <p className="text-xs font-mono text-slate-600 dark:text-slate-400 truncate">
                    Capgemini • Kuala Lumpur
                  </p>
                </div>
              </div>

              {/* 4 Verified Metric Chips */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 block uppercase">EXPERIENCE</span>
                  <div className="text-lg font-bold text-slate-950 dark:text-white">3+ Yrs</div>
                  <span className="text-[10px] text-blue-700 dark:text-blue-400 block font-semibold">Automation &amp; Frontend</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 block uppercase">ACCREDITATION</span>
                  <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">Tosca L2</div>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 block">Tricentis Certified</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 block uppercase">ACADEMICS</span>
                  <div className="text-lg font-bold text-slate-950 dark:text-white">B.Tech EE</div>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 block">GCET Graduate</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 block uppercase">SECURITY</span>
                  <div className="text-lg font-bold text-purple-700 dark:text-purple-400">JWT &amp; TLS</div>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 block">REST Encrypted</span>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon"></span>
                  <span className="text-slate-800 dark:text-slate-300 font-medium">Active Client Operations: Capgemini MY</span>
                </div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[10px]">VERIFIED</span>
              </div>

              {/* IEEE Research Publication Citation Link */}
              <a
                href="https://ieeexplore.ieee.org/document/10182947"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 hover:border-blue-500 transition-all text-xs font-mono group"
              >
                <div className="flex items-center justify-between text-blue-800 dark:text-blue-300 mb-1 font-semibold">
                  <span>// IEEE RESEARCH PUBLICATION:</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-800 dark:text-slate-300 leading-snug italic group-hover:text-blue-900 dark:group-hover:text-white">
                  &quot;Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;
                </p>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
