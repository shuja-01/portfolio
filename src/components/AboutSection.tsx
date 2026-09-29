'use client';

import React, { useState } from 'react';
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
  ArrowRight,
  Zap,
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import Card3DTilt from '@/components/3d/Card3DTilt';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export default function AboutSection({ onOpenResume }: AboutSectionProps) {
  const [selectedDomain, setSelectedDomain] = useState<number>(0);

  const domains = [
    {
      title: 'Process Automation & QA Engineering',
      desc: 'Architecting scalable data-driven regression pipelines, Tricentis Tosca L2 automation, and Selenium/Appium test suites.',
      icon: Terminal,
      skills: ['Tosca Specialist L2', 'Selenium', 'Appium', 'Data-Driven QA'],
      architectureHighlight: 'Tricentis Tosca model-based execution reducing manual release testing from 14h to 25m.',
      metric: '70% QA Cut',
    },
    {
      title: 'Modern Frontend Architecture',
      desc: 'Building responsive, accessible web applications with React 19, Next.js 16 App Router, TypeScript, and Tailwind CSS design tokens.',
      icon: Code2,
      skills: ['React 19', 'Next.js 16', 'TypeScript', 'Shopify Liquid'],
      architectureHighlight: 'Server Components, dynamic route streaming, zero-layout-shift (CLS < 0.01), and sub-second LCP.',
      metric: '95+ Lighthouse',
    },
    {
      title: 'API Engineering & Security',
      desc: 'Validating REST microservices, verifying JWT token encryption expirations, and automating Java REST Assured test suites.',
      icon: ShieldCheck,
      skills: ['REST Assured', 'Java Enterprise', 'JWT Encryption', 'Postman'],
      architectureHighlight: 'Automated 256-bit RS256 token assertion and HTTP status code contract testing.',
      metric: '100% Secure',
    },
    {
      title: 'AI Workflows & LLM Extraction',
      desc: 'Integrating autonomous prompt extraction workflows to ingest unstructured documents into validated schemas.',
      icon: Bot,
      skills: ['Claude Code & Agents', 'Prompt Pipelines', 'Deep Learning (CNN)', 'Python'],
      architectureHighlight: 'Autonomous tool-calling agents converting raw invoices to normalized database models.',
      metric: '75% Speedup',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-400 shadow-sm font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>EXECUTIVE DOSSIER &amp; FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            Engineering Background &amp; <span className="gradient-text-cobalt">Core Profile</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Bridging rigorous electrical engineering problem-solving with enterprise process automation, modern frontend development, and AI agent architectures.
          </p>
        </div>

        {/* 2-Column Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Narrative Column (Cols 1-7) */}
          <div className="lg:col-span-7 editorial-card p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6 bg-[#111726] shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ENGINEERING PHILOSOPHY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
              Precision-driven software development with a focus on reliability, performance, and automation.
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <p>
                Based in <strong className="text-white">Kuala Lumpur, Malaysia</strong>, I serve as a Process Automation Engineer consultant at <strong className="text-blue-400 font-semibold">Capgemini</strong>. My work focuses on building robust automated regression testing frameworks, REST API validation suites, and AI-driven document intelligence systems for enterprise operations.
              </p>
              <p>
                Prior to Capgemini, I served as <strong className="text-white">Technology Lead at Torn &amp; Stitched</strong>, where I directed Shopify Liquid frontend architecture and optimized web performance. Earlier in my career at <strong className="text-white">Newgen Software</strong>, I developed Java enterprise applications and integrated complex relational database schemas for Middle East banking and enterprise clients.
              </p>
              <p>
                I hold a <strong className="text-white">B.Tech in Electrical Engineering</strong> from Galgotias College of Engineering and Technology (GCET), where I authored and published peer-reviewed deep learning research on convolutional neural network architectures for imbalanced medical image datasets.
              </p>
            </div>

            {/* Academic & Professional Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 font-mono text-xs">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">GCET Engineering</span>
                  <span className="text-slate-400 text-[11px]">B.Tech in Electrical Engineering</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <Briefcase className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">Capgemini Malaysia</span>
                  <span className="text-slate-400 text-[11px]">Process Automation Consultant</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all shadow-md bg-blue-600 hover:bg-blue-500 text-white hover:scale-[1.02]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Full Profile PDF</span>
                </button>
              )}

              <a
                href="https://www.linkedin.com/in/mshuja-rizvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-semibold transition-all bg-slate-900 border border-slate-800 text-slate-200 hover:text-blue-400 hover:bg-slate-800 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Connect</span>
              </a>
            </div>
          </div>

          {/* Right Highlights & Interactive Value Proposition Deck (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Peer-Reviewed Publication Spotlight Card */}
            <div className="editorial-card p-6 sm:p-7 rounded-3xl border border-slate-800 bg-[#111726] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>IEEE RESEARCH PUBLICATION</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                  PEER REVIEWED
                </span>
              </div>

              <h4 className="text-base font-heading font-bold text-white leading-snug">
                <a
                  href="https://ieeexplore.ieee.org/document/10182947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>&quot;A Review On: Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;</span>
                  <ExternalLink className="w-4 h-4 text-blue-400 shrink-0" />
                </a>
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Academic research addressing critical class-imbalance challenges in dermatological diagnostic datasets using convolutional neural networks, data synthesis, and loss reweighting.
              </p>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">IEEE Xplore Doc: 10182947</span>
                <a
                  href="https://ieeexplore.ieee.org/document/10182947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>View on IEEE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Core Value Propositions with Interactive Focus */}
            <div className="editorial-card p-6 rounded-3xl border border-slate-800 bg-[#111726] space-y-4 shadow-xl">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                // PROVEN VALUE DELIVERED
              </span>

              <div className="space-y-3 font-mono text-xs">
                {[
                  { label: 'Regression Overhead Reduction', value: '70%+', metric: 'Tosca & Selenium Suites' },
                  { label: 'Storefront Lighthouse Score', value: '95+', metric: 'Next.js & Shopify Liquid' },
                  { label: 'API Security Token Compliance', value: '100%', metric: 'JWT & REST Assured' },
                  { label: 'AI Document Extraction Speed', value: '75%', metric: 'Claude Code Agentic Pipeline' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-colors">
                    <div>
                      <span className="text-slate-200 text-xs font-medium block">{item.label}</span>
                      <span className="text-slate-500 text-[10px] block">{item.metric}</span>
                    </div>
                    <span className="text-emerald-400 font-bold text-sm font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Interactive Domain Cards Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-blue-400 uppercase tracking-wider font-semibold">
              // CORE DOMAIN SPECIALTIES (CLICK TO EXPLORE ARCHITECTURE HIGHLIGHT)
            </span>
            <span className="text-slate-500 text-[11px]">Active Focus: {domains[selectedDomain].title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((dom, idx) => {
              const isSelected = selectedDomain === idx;
              return (
                <Card3DTilt key={idx} maxTilt={8} scale={1.02} className="h-full">
                  <div
                    onClick={() => setSelectedDomain(idx)}
                    className={`editorial-card p-6 rounded-3xl border transition-all flex flex-col justify-between space-y-4 group cursor-pointer shadow-md h-full ${
                      isSelected
                        ? 'border-blue-500/60 bg-[#161e31] ring-1 ring-blue-500/30 shadow-xl scale-[1.01]'
                        : 'border-slate-800 hover:border-slate-700 bg-[#111726]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          isSelected ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-900 border border-slate-800 text-blue-400'
                        }`}>
                          <dom.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
                          {dom.metric}
                        </span>
                      </div>

                      <h4 className="text-base font-heading font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                        {dom.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">{dom.desc}</p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-slate-800/60">
                      <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                        {dom.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {isSelected && (
                        <p className="text-[11px] font-mono text-blue-300 pt-1 leading-snug animate-in fade-in duration-150">
                          ⚡ {dom.architectureHighlight}
                        </p>
                      )}
                    </div>
                  </div>
                </Card3DTilt>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
