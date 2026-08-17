'use client';

import React, { useState } from 'react';
import { Cpu, Terminal, Shield, Database, Code, Award, Check } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: any;
  skills: { name: string; level: number; highlight?: string }[];
}

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      id: 'automation',
      name: 'Automation & Testing',
      icon: Terminal,
      skills: [
        { name: 'REST API Validation', level: 95, highlight: 'Capgemini Core' },
        { name: 'Tosca Automation', level: 90, highlight: 'Automation Specialist L2' },
        { name: 'Selenium & Appium', level: 90, highlight: 'UI & Mobile Automation' },
        { name: 'REST Assured Framework', level: 88, highlight: 'Java Test Automation' },
        { name: 'Data-Driven Test Design', level: 92, highlight: 'Enterprise Scale' },
      ],
    },
    {
      id: 'ai-dev',
      name: 'AI & Software Dev',
      icon: Cpu,
      skills: [
        { name: 'AI & LLM Integration', level: 88, highlight: 'Enterprise AI Workflows' },
        { name: 'TypeScript & JavaScript', level: 90, highlight: 'Web & Automation' },
        { name: 'Java Enterprise', level: 85, highlight: 'Newgen & REST Assured' },
        { name: 'Shopify & Liquid', level: 92, highlight: 'Tech Lead @ Torn & Stitched' },
        { name: 'Deep Learning & ML', level: 80, highlight: 'Lesion Research Paper' },
      ],
    },
    {
      id: 'security-data',
      name: 'Security & Analytics',
      icon: Shield,
      skills: [
        { name: 'JWT & Security Encryption', level: 88, highlight: 'API Security' },
        { name: 'Financial Analysis (FP&A)', level: 85, highlight: 'Financial Planning' },
        { name: 'Power BI & Excel Analytics', level: 92, highlight: 'Data Analysts Toolbox' },
        { name: 'MsSQL & Relational DBs', level: 85, highlight: 'Newgen Systems' },
      ],
    },
  ];

  const allSkills = categories.flatMap((c) => c.skills);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Code className="w-3.5 h-3.5" />
            <span>CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Technical Stack & <span className="gradient-text-cyan">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of process automation tools, AI integration models, API security protocols, and development frameworks.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'glass-panel text-slate-300 hover:text-white'
                }`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeCategory === 'all'
            ? categories
            : categories.filter((c) => c.id === activeCategory)
          ).map((cat) => (
            <div
              key={cat.id}
              className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cat.name}</h3>
                    <span className="text-[11px] font-mono text-slate-400">Domain Proficiency</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-cyan-400 font-mono text-[11px]">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {skill.highlight && (
                        <span className="text-[10px] font-mono text-slate-400 block pt-0.5">
                          ✓ {skill.highlight}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Verified Enterprise Experience</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
