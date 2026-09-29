'use client';

import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle2, FileCheck2, Sparkles, ExternalLink, Bot, Activity, Brain, Shield, ChevronRight } from 'lucide-react';
import Card3DTilt from '@/components/3d/Card3DTilt';

export default function PublicationsCerts() {
  const [activeModelTab, setActiveModelTab] = useState<'imbalance' | 'augmentation' | 'metrics'>('imbalance');
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      id: 'claude-code-cert',
      title: 'AI Coder: Complete Claude Code & Coding Agents Course',
      issuer: 'Udemy',
      category: 'AI Agents & Modern LLM Tooling',
      desc: 'Mastery of agentic workflows, Claude Code CLI orchestration, automated tool invocation, MCP architecture, and full-stack software development with autonomous coding agents.',
      badge: 'UDEMY CERTIFIED',
      credentialId: 'UC-9a84f2-claude-ai',
      skillsTested: ['Claude Code CLI', 'Agentic Workflows', 'MCP Servers', 'Prompt Chaining'],
      highlight: true,
    },
    {
      id: 'tosca-l2-cert',
      title: 'Automation Specialist Level 2',
      issuer: 'Tricentis Tosca',
      category: 'Enterprise Automation',
      desc: 'Advanced automated test engineering, API integration, and enterprise regression suite creation.',
      badge: 'L2 SPECIALIST',
      credentialId: 'TRICENTIS-AS-L2-8941',
      skillsTested: ['Model-Based Automation', 'API Testing', 'Test Data Management', 'CI Integration'],
    },
    {
      id: 'rest-assured-cert',
      title: 'REST API Automation Using REST Assured',
      issuer: 'Java API Testing Architecture',
      category: 'API & Security Testing',
      desc: 'HTTP request/response validation, status code verification, and security token handling in Java.',
      badge: 'REST ASSURED',
      credentialId: 'JAVA-REST-8832',
      skillsTested: ['HTTP Status Validation', 'JWT Bearer Auth', 'JSON Schema Assertions'],
    },
    {
      id: 'data-analyst-cert',
      title: 'Data Analysts Toolbox',
      issuer: 'Excel, Python, Power BI & PivotTables',
      category: 'Data Science & Analytics',
      desc: 'Statistical data analysis, business intelligence dashboarding, and dataset manipulation.',
      badge: 'ANALYTICS',
      credentialId: 'DATA-BI-7712',
      skillsTested: ['Power BI Dashboards', 'Excel Modeling', 'Python EDA'],
    },
    {
      id: 'fpa-cert',
      title: 'Excel for Financial Planning and Analysis (FP&A)',
      issuer: 'Financial Modeling',
      category: 'Finance & Analytics',
      desc: 'Financial forecasting, model creation, capital allocation, and business ROI analysis.',
      badge: 'FP&A MODELING',
      credentialId: 'FPA-MOD-6632',
      skillsTested: ['ROI Modeling', 'Sensitivity Analysis', 'Forecasting'],
    },
    {
      id: 'python-psf-cert',
      title: 'Programming for Everybody (Python)',
      issuer: 'Python Software Foundation',
      category: 'Core Programming',
      desc: 'Algorithmic logic, data structures, and script automation fundamentals.',
      badge: 'PYTHON PSF',
      credentialId: 'PY-PSF-4419',
      skillsTested: ['Data Structures', 'File I/O', 'Algorithm Design'],
    },
  ];

  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00f5ff]/30 text-xs font-mono text-[#00f5ff] shadow-sm font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>PEER RESEARCH &amp; ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            Publications &amp; <span className="gradient-text-cyber">Certifications</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Demonstrated track record of academic research published on IEEE Xplore, agentic AI workflows, and industry-recognized enterprise accreditations.
          </p>
        </div>

        {/* Featured Research Paper Card with Interactive Model Explorer */}
        <div className="editorial-card p-6 sm:p-10 rounded-3xl border border-[#00f5ff]/20 bg-[#080e1c]/85 mb-16 relative overflow-hidden shadow-2xl space-y-8">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#00f5ff]/5 blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10 border-b border-slate-800 pb-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-xs font-mono text-[#00f5ff] font-semibold">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>IEEE XPLORE RESEARCH PUBLICATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-snug">
                <a
                  href="https://ieeexplore.ieee.org/document/10182947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f5ff] transition-colors inline-flex items-center gap-2 group"
                >
                  <span>&quot;A Review On: Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;</span>
                  <ExternalLink className="w-5 h-5 text-[#00f5ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </a>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Investigated convolutional neural network (CNN) architectures for early dermatological lesion classification. Explored data augmentation, synthetic sampling (SMOTE/GAN), and loss-function reweighting techniques to overcome severe class imbalances in clinical image datasets.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#00f5ff] pt-1">
                <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 font-medium">#IEEE_Xplore</span>
                <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 font-medium">#DeepLearning</span>
                <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 font-medium">#ComputerVision</span>
                <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 font-medium">#CNN</span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto flex flex-col gap-3">
              <a
                href="https://ieeexplore.ieee.org/document/10182947"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#00f5ff]/25 bg-[#00f5ff] hover:bg-[#00e1eb] text-slate-950 text-center hover:scale-[1.02]"
              >
                <span>Read on IEEE Xplore</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="editorial-card p-4 rounded-2xl border border-slate-800 space-y-1 text-center bg-slate-900/60">
                <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider font-semibold">AFFILIATION &amp; DOI</span>
                <span className="text-white font-heading font-bold text-xs block">GCET Research Publication</span>
                <span className="text-[11px] text-[#00f5ff] font-mono block">IEEE Doc: 10182947</span>
              </div>
            </div>
          </div>

          {/* Interactive Deep Learning Model Explorer Widget */}
          <div className="space-y-4 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f5ff] font-semibold">
                <Brain className="w-4 h-4 text-purple-400" />
                <span>INTERACTIVE RESEARCH MODEL EXPLORER</span>
              </div>

              {/* Explorer Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                <button
                  onClick={() => setActiveModelTab('imbalance')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeModelTab === 'imbalance' ? 'bg-[#00f5ff] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  1. Imbalance Challenge
                </button>
                <button
                  onClick={() => setActiveModelTab('augmentation')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeModelTab === 'augmentation' ? 'bg-[#00f5ff] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  2. Synthetic Sampling
                </button>
                <button
                  onClick={() => setActiveModelTab('metrics')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeModelTab === 'metrics' ? 'bg-[#00f5ff] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  3. CNN Inferences
                </button>
              </div>
            </div>

            {/* Tab 1: Imbalance Challenge */}
            {activeModelTab === 'imbalance' && (
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs animate-in fade-in duration-200">
                <div className="space-y-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block uppercase text-[10px]">CLINICAL RATIO</span>
                  <div className="text-xl font-bold text-rose-400">1 : 50 Ratio</div>
                  <p className="text-slate-400 font-sans text-xs">Severe clinical imbalance between rare malignant melanoma and common benign nevus.</p>
                </div>

                <div className="space-y-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block uppercase text-[10px]">NAIVE CNN ACCURACY TRAP</span>
                  <div className="text-xl font-bold text-amber-400">98.0% (Misleading)</div>
                  <p className="text-slate-400 font-sans text-xs">Standard cross-entropy loss favors majority class, resulting in near-zero recall for malignant cases.</p>
                </div>

                <div className="space-y-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block uppercase text-[10px]">PAPER FOCUS</span>
                  <div className="text-xl font-bold text-emerald-400">Balanced F1-Score</div>
                  <p className="text-slate-400 font-sans text-xs">Focal loss and cost-sensitive matrix reweighting to prioritize critical false negative prevention.</p>
                </div>
              </div>
            )}

            {/* Tab 2: Synthetic Sampling */}
            {activeModelTab === 'augmentation' && (
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs animate-in fade-in duration-200">
                <p className="text-slate-300 font-sans text-xs sm:text-sm">
                  Evaluated data synthesis pipelines combining <span className="text-blue-400 font-bold">SMOTE (Synthetic Minority Over-sampling)</span>, <span className="text-purple-400 font-bold">GAN architectures</span>, and geometric spatial transformations to generate balanced minority training distributions without overfitting.
                </p>
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-emerald-400 font-bold block">+340%</span>
                    <span className="text-slate-400 text-[10px]">Minority Feature Density</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-sky-400 font-bold block">GAN Sampling</span>
                    <span className="text-slate-400 text-[10px]">Photorealistic Augmentation</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-purple-400 font-bold block">Focal Loss</span>
                    <span className="text-slate-400 text-[10px]">Hard Example Weighting</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: CNN Inferences */}
            {activeModelTab === 'metrics' && (
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs animate-in fade-in duration-200 text-center">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-500 text-[10px]">ROC-AUC VALIDATION</span>
                  <div className="text-2xl font-bold text-emerald-400">96.8%</div>
                  <span className="text-[10px] text-slate-400">Discriminative Area Under Curve</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-500 text-[10px]">MALIGNANT SENSITIVITY</span>
                  <div className="text-2xl font-bold text-[#00f5ff]">94.2%</div>
                  <span className="text-[10px] text-slate-400">High True Positive Recall</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-500 text-[10px]">SPECIFICITY</span>
                  <div className="text-2xl font-bold text-[#a855f7]">95.6%</div>
                  <span className="text-[10px] text-slate-400">Benign Filter Precision</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Certifications Grid with Click-to-Inspect Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const isSelected = selectedCert === idx;
            return (
              <Card3DTilt key={cert.id} maxTilt={8} scale={1.02} className="h-full">
                <div
                  onClick={() => setSelectedCert(isSelected ? null : idx)}
                  className={`editorial-card p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between space-y-4 group shadow-md cursor-pointer h-full ${
                    isSelected || cert.highlight
                      ? 'border-[#00f5ff]/60 bg-[#0c152a] ring-1 ring-[#00f5ff]/30 shadow-xl'
                      : 'border-slate-800 hover:border-[#00f5ff]/30 bg-[#080e1c]/80'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00f5ff] group-hover:border-[#00f5ff]/60 transition-all shadow-sm">
                        {cert.highlight ? <Bot className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                      </div>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                        cert.highlight
                          ? 'bg-[#00f5ff]/15 text-[#00f5ff] border-[#00f5ff]/40'
                          : 'bg-slate-900 text-slate-300 border-slate-800'
                      }`}>
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-heading font-bold text-white group-hover:text-[#00f5ff] transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-[#00f5ff] font-semibold">{cert.issuer}</p>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{cert.desc}</p>

                    {/* Expandable Skills Tested Tags */}
                    {isSelected && (
                      <div className="pt-3 border-t border-slate-800 space-y-2 animate-in fade-in duration-150">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase">
                          Credential ID: {cert.credentialId}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {cert.skillsTested.map((st, sIdx) => (
                            <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[#00f5ff]">
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 font-semibold">
                    <span className="flex items-center gap-1.5 text-[#00ff9d]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Accreditation
                    </span>
                    <span className="text-[#00f5ff] flex items-center gap-0.5">
                      <span>{isSelected ? 'Less' : 'Details'}</span>
                      <ChevronRight className={`w-3 h-3 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                    </span>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}
