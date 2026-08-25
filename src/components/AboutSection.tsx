'use client';

import React from 'react';
import {
  FileText,
  Sparkles,
  Layers,
  GraduationCap,
  Briefcase,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Code2,
  Cpu,
  Bot,
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export default function AboutSection({ onOpenResume }: AboutSectionProps) {
  const domains = [
    {
      title: 'Process Automation & QA Engineering',
      desc: 'Architecting scalable data-driven regression pipelines, Tricentis Tosca L2 automation, and Selenium/Appium test suites.',
      icon: Terminal,
      skills: ['Tosca Specialist L2', 'Selenium', 'Appium', 'Data-Driven QA'],
    },
    {
      title: 'Modern Frontend Architecture',
      desc: 'Building responsive, accessible web applications with React 19, Next.js 16 App Router, TypeScript, and Tailwind CSS design tokens.',
      icon: Code2,
      skills: ['React 19', 'Next.js 16', 'TypeScript', 'Shopify Liquid'],
    },
    {
      title: 'API Engineering & Security',
      desc: 'Validating REST microservices, verifying JWT token encryption expirations, and automating Java REST Assured test suites.',
      icon: ShieldCheck,
      skills: ['REST Assured', 'Java Enterprise', 'JWT Encryption', 'Postman'],
    },
    {
      title: 'AI Workflows & LLM Extraction',
      desc: 'Integrating autonomous prompt extraction workflows to ingest unstructured documents into validated schemas.',
      icon: Bot,
      skills: ['Claude Code & Agents', 'Prompt Pipelines', 'Deep Learning (CNN)', 'Python'],
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-700 dark:text-blue-300 shadow-sm font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>EXECUTIVE DOSSIER &amp; FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-slate-950 dark:text-white">
            Engineering Background &amp; <span className="gradient-text-cobalt">Core Profile</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Bridging rigorous electrical engineering problem-solving with enterprise process automation, modern frontend development, and AI agent architectures.
          </p>
        </div>

        {/* 2-Column Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Narrative Column (Cols 1-7) */}
          <div className="lg:col-span-7 editorial-card p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 bg-white dark:bg-[#111726] shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ENGINEERING PHILOSOPHY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-950 dark:text-white leading-snug">
              Precision-driven software development with a focus on reliability, performance, and automation.
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              <p>
                Based in <strong className="text-slate-950 dark:text-white">Kuala Lumpur, Malaysia</strong>, I serve as a Process Automation Engineer consultant at <strong className="text-blue-700 dark:text-blue-300 font-semibold">Capgemini</strong>. My work focuses on building robust automated regression testing frameworks, REST API validation suites, and AI-driven document intelligence systems for enterprise operations.
              </p>
              <p>
                Prior to Capgemini, I served as <strong className="text-slate-950 dark:text-white">Technology Lead at Torn &amp; Stitched</strong>, where I directed Shopify Liquid frontend architecture and optimized web performance. Earlier in my career at <strong className="text-slate-950 dark:text-white">Newgen Software</strong>, I developed Java enterprise applications and integrated complex relational database schemas for Middle East banking and enterprise clients.
              </p>
              <p>
                I hold a <strong className="text-slate-950 dark:text-white">B.Tech in Electrical Engineering</strong> from Galgotias College of Engineering and Technology (GCET), where I authored and published peer-reviewed deep learning research on convolutional neural network architectures for imbalanced medical image datasets.
              </p>
            </div>

            {/* Academic & Professional Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 font-mono text-xs">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-950 dark:text-white font-bold block">GCET Engineering</span>
                  <span className="text-slate-600 dark:text-slate-400 text-[11px]">B.Tech in Electrical Engineering</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-950 dark:text-white font-bold block">Capgemini Malaysia</span>
                  <span className="text-slate-600 dark:text-slate-400 text-[11px]">Process Automation Consultant</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all shadow-md bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Full Profile PDF</span>
                </button>
              )}

              <a
                href="https://www.linkedin.com/in/mshuja-rizvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-semibold transition-all bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn Connect</span>
              </a>
            </div>
          </div>

          {/* Right Highlights & Research Spotlight Column (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Peer-Reviewed Publication Spotlight Card */}
            <div className="editorial-card p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111726] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-700 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>IEEE RESEARCH PUBLICATION</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-bold">
                  PEER REVIEWED
                </span>
              </div>

              <h4 className="text-base font-heading font-bold text-slate-950 dark:text-white leading-snug">
                <a
                  href="https://ieeexplore.ieee.org/document/10182947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>&quot;A Review On: Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;</span>
                  <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                </a>
              </h4>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Academic research addressing critical class-imbalance challenges in dermatological diagnostic datasets using convolutional neural networks, data synthesis, and loss reweighting.
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-600 dark:text-slate-400">IEEE Xplore Doc: 10182947</span>
                <a
                  href="https://ieeexplore.ieee.org/document/10182947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>View on IEEE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Core Value Propositions */}
            <div className="editorial-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111726] space-y-4 shadow-xl">
              <span className="text-xs font-mono text-blue-700 dark:text-blue-400 uppercase tracking-wider block font-semibold">
                // CORE VALUE PROPOSITIONS
              </span>

              <div className="space-y-3 font-mono text-xs">
                {[
                  { label: 'Regression Overhead Reduction', value: '70%+' },
                  { label: 'Storefront Lighthouse Score', value: '90+' },
                  { label: 'API Security Token Compliance', value: '100%' },
                  { label: 'AI Extraction Turnaround Lift', value: '75%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-700 dark:text-slate-300 text-[11px] font-medium">{item.label}</span>
                    <span className="text-blue-700 dark:text-blue-400 font-bold text-xs">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((dom, idx) => (
            <div
              key={idx}
              className="editorial-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-4 group bg-white dark:bg-[#111726] shadow-md"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:border-blue-400/60 transition-all shadow-sm">
                  <dom.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-bold text-slate-950 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors leading-snug">
                  {dom.title}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">{dom.desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60 font-mono text-[10px]">
                {dom.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
