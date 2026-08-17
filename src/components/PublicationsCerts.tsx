'use client';

import React from 'react';
import { BookOpen, Award, CheckCircle2, FileCheck2, ExternalLink } from 'lucide-react';

export default function PublicationsCerts() {
  const certifications = [
    {
      title: 'Automation Specialist Level 2',
      issuer: 'Tricentis Tosca',
      category: 'Enterprise Automation',
      desc: 'Advanced automated test engineering, API integration, and enterprise regression suite creation.',
    },
    {
      title: 'REST API Automation Using REST Assured',
      issuer: 'Java API Testing Architecture',
      category: 'API & Security Testing',
      desc: 'HTTP request/response validation, status code verification, and security token handling in Java.',
    },
    {
      title: 'Data Analysts Toolbox',
      issuer: 'Excel, Python, Power BI & PivotTables',
      category: 'Data Science & BI',
      desc: 'Statistical data analysis, business intelligence dashboarding, and dataset manipulation.',
    },
    {
      title: 'Excel for Financial Planning and Analysis (FP&A)',
      issuer: 'Financial Modeling',
      category: 'Finance & Analytics',
      desc: 'Financial forecasting, model creation, capital allocation, and business ROI analysis.',
    },
    {
      title: 'Programming for Everybody (Python)',
      issuer: 'Python Software Foundation',
      category: 'Core Programming',
      desc: 'Algorithmic logic, data structures, and script automation fundamentals.',
    },
  ];

  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>RESEARCH & ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Publications & <span className="gradient-text-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Demonstrated commitment to continuous learning, deep learning research, and industry-recognized automation benchmarks.
          </p>
        </div>

        {/* Highlighted Research Paper Feature */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-950 to-cyan-950/30 mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-cyan-500/5 blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>PEER RESEARCH PUBLICATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                &quot;A Review On: Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Investigated machine learning and convolutional neural network architectures for early skin cancer detection. Focused specifically on mitigating severe class imbalance in dermatological image datasets to optimize classification accuracy and recall.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-cyan-400 pt-2">
                <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800">#DeepLearning</span>
                <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800">#ComputerVision</span>
                <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800">#ImbalancedDatasets</span>
                <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800">#MedicalAI</span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2 text-center lg:text-left">
                <span className="text-[11px] font-mono text-slate-400 block">FIELD OF STUDY</span>
                <span className="text-white font-bold text-sm block">Artificial Intelligence &amp; Healthcare</span>
                <span className="text-xs text-emerald-400 font-mono block">Electrical Eng. &amp; ML Synthesis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {cert.category}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-cyan-400">{cert.issuer}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{cert.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Certified Competency
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
