'use client';

import React from 'react';
import { Cpu, Zap, ShieldAlert, Binary, Layers, Brain, CheckCircle2, Building2 } from 'lucide-react';

export default function AboutSection() {
  const domains = [
    {
      icon: Cpu,
      title: 'Enterprise Process Automation',
      description: 'Designing end-to-end automated business process workflows at Capgemini, replacing manual overhead with structured automation tools like Tosca, Selenium, and Appium.',
      badge: 'Capgemini / Tosca / Selenium',
    },
    {
      icon: Brain,
      title: 'AI & LLM Integration',
      description: 'Embedding Artificial Intelligence and LLM-driven automation into enterprise testing and operational workflows to enable smarter decision-making and data extraction.',
      badge: 'AI Systems / Prompt Workflows',
    },
    {
      icon: ShieldAlert,
      title: 'REST API & Security Engineering',
      description: 'Rigorous REST service validation, status code checks, payload structure assertions, JWT security verification, and encryption protocol implementations.',
      badge: 'REST Assured / JWT / Java',
    },
    {
      icon: Layers,
      title: 'E-Commerce & Liquid Infrastructure',
      description: 'Built Shopify storefronts as Technology Lead at Torn & Stitched, managing custom Liquid templates, front-end UX, analytics, and automated testing pipelines.',
      badge: 'Shopify / Liquid / JavaScript',
    },
    {
      icon: Binary,
      title: 'Enterprise Software & SQL',
      description: 'Developed scalable solutions for Middle East enterprise clients at Newgen Software using Newgen platforms, Java, MsSQL, JSP, and XML.',
      badge: 'Newgen Suite / MsSQL / Java',
    },
    {
      icon: Zap,
      title: 'Financial Analysis & Data Modeling',
      description: 'Bridging technical engineering with financial acumen (FP&A, Power BI, Excel pivot tables, and statistical modeling) to maximize ROI across automated systems.',
      badge: 'FP&A / Power BI / Financial Analytics',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Building2 className="w-3.5 h-3.5" />
            <span>BACKGROUND & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineering Precision Meets <span className="gradient-text-cyan">AI Intelligence</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            With a foundational degree in Electrical Engineering from Galgotias College of Engineering &amp; Technology, my career trajectory has been deliberately hands-on—evolving across software development, store infrastructure, enterprise process automation, and LLM-driven systems.
          </p>
        </div>

        {/* Bio Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                // EXECUTIVE SUMMARY
              </div>
              <h3 className="text-2xl font-bold text-slate-100">
                Architecting Automated Workflows for Global Enterprises
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Currently working as a Process Automation Engineer at <strong className="text-cyan-300">Capgemini</strong> (Consultant - Sancy Solutions) in Kuala Lumpur, Malaysia. My role spans both engineering and delivery: designing automated workflows, validating REST APIs, enforcing encryption standards, and integrating AI capabilities into existing enterprise infrastructure.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Previously, as Technology Lead at Torn &amp; Stitched, I managed end-to-end Shopify architecture and custom Liquid templates. Earlier at Newgen Software, I built enterprise solutions for Middle East client ecosystems.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Electrical Eng. Background (GCET)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>API Automation & REST Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>JWT & Encryption Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>LLM & AI Workflow Engineering</span>
              </div>
            </div>
          </div>

          {/* Quick Info Deck Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-mono text-cyan-400">STATUS // CURRENT LOCATION</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-slate-500 font-mono block">CURRENT ROLE</span>
                  <span className="text-slate-200 font-semibold text-base">Process Automation Engineer</span>
                  <span className="text-xs text-cyan-400 block mt-0.5">Capgemini (Sancy Solutions)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-mono block">LOCATION</span>
                  <span className="text-slate-200 font-medium">Kuala Lumpur, Malaysia</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-mono block">EDUCATION</span>
                  <span className="text-slate-200 font-medium">B.Tech Electrical Engineering</span>
                  <span className="text-xs text-slate-400 block">Galgotias College of Eng. &amp; Tech (2019-2023)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-mono block">RESEARCH PUBLICATION</span>
                  <span className="text-slate-300 text-xs italic block mt-1">
                    &quot;A Review On: Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;
                  </span>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/mshuja-rizvi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-medium transition-all"
            >
              <span>CONNECT VIA LINKEDIN</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 group-hover:text-cyan-300 transition-all shadow-inner">
                  <d.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {d.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {d.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <span className="text-[11px] font-mono text-cyan-400/90 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                  {d.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
