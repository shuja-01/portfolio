'use client';

import React, { useState } from 'react';
import { Cpu, Terminal, Shield, Layout, Search, Check, Bot } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: any;
  skills: { name: string; level: number; highlight?: string; tags?: string[] }[];
}

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend Engineering',
      icon: Layout,
      skills: [
        { name: 'React 19 & Next.js 16 (App Router)', level: 94, highlight: 'Server Components & SSR Architecture', tags: ['React 19', 'Next.js', 'SSR'] },
        { name: 'TypeScript & Modern ES6+', level: 95, highlight: 'Strict Type System & Design Patterns', tags: ['TypeScript', 'ES6+'] },
        { name: 'Tailwind CSS & Design Tokens', level: 95, highlight: 'Design Tokens, CSS Variables & Layouts', tags: ['Tailwind', 'CSS3'] },
        { name: 'Web Performance & Web Vitals', level: 90, highlight: '90+ Lighthouse, Bundle Optimization & SEO', tags: ['Performance', 'Core Web Vitals'] },
        { name: 'Shopify Storefronts & Liquid Templating', level: 92, highlight: 'Tech Lead @ Torn & Stitched', tags: ['Shopify', 'Liquid'] },
        { name: 'State Management & Interactions', level: 88, highlight: 'Zustand, React Hooks & Modern UI', tags: ['Hooks', 'Micro-interactions'] },
      ],
    },
    {
      id: 'automation',
      name: 'Automation & QA Testing',
      icon: Terminal,
      skills: [
        { name: 'REST API Validation & Testing', level: 95, highlight: 'Capgemini Core Client Delivery', tags: ['REST API', 'JSON/XML'] },
        { name: 'Tosca Automation Specialist L2', level: 92, highlight: 'Tricentis Certified Specialist L2', tags: ['Tosca L2', 'Enterprise'] },
        { name: 'Selenium & Appium Automation', level: 90, highlight: 'Web & Cross-Platform Mobile Suites', tags: ['Selenium', 'Appium'] },
        { name: 'REST Assured Test Automation', level: 88, highlight: 'Java API Automated Assertion Frameworks', tags: ['Java', 'REST Assured'] },
        { name: 'Data-Driven Test Architecture', level: 92, highlight: 'Zero-Downtime Regression Testing', tags: ['Data-Driven', 'CI/CD'] },
      ],
    },
    {
      id: 'ai-dev',
      name: 'AI Agents & Modern Software',
      icon: Bot,
      skills: [
        { name: 'Claude Code & AI Coding Agents', level: 92, highlight: 'Udemy Certified: Complete Claude Code Course', tags: ['Claude Code', 'AI Agents', 'MCP'] },
        { name: 'Enterprise LLM Workflow Integration', level: 88, highlight: 'Autonomous Prompt & Extraction Workflows', tags: ['LLMs', 'Prompt Eng'] },
        { name: 'Java Enterprise Systems', level: 85, highlight: 'Newgen Digital Platforms & Core Backend', tags: ['Java', 'Enterprise'] },
        { name: 'Python Engineering & Scripting', level: 86, highlight: 'Data Pipelines & Workflow Automation', tags: ['Python', 'Automation'] },
        { name: 'Deep Learning & Neural Networks', level: 84, highlight: 'Skin Lesion Classifier IEEE Research Paper', tags: ['CNN', 'Machine Learning'] },
      ],
    },
    {
      id: 'security-data',
      name: 'Security & Analytics',
      icon: Shield,
      skills: [
        { name: 'JWT & API Security Handlers', level: 90, highlight: 'Encrypted Bearer Tokens & Auth Checks', tags: ['JWT', 'Security'] },
        { name: 'Power BI & Excel Data Analytics', level: 92, highlight: 'Data Analyst\'s Toolbox Certified', tags: ['Power BI', 'Analytics'] },
        { name: 'Financial Planning & Analysis (FP&A)', level: 86, highlight: 'Financial Forecasting & ROI Analysis', tags: ['FP&A', 'Finance'] },
        { name: 'MsSQL & Relational Databases', level: 85, highlight: 'Query Profiling & Schema Design', tags: ['MsSQL', 'Relational'] },
      ],
    },
  ];

  const allSkillsCount = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  const filteredCategories = categories
    .map((cat) => {
      const categoryMatches = activeCategory === 'all' || activeCategory === cat.id;
      if (!categoryMatches) return null;

      const filteredSkills = cat.skills.filter((skill) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          skill.name.toLowerCase().includes(q) ||
          (skill.highlight && skill.highlight.toLowerCase().includes(q)) ||
          (skill.tags && skill.tags.some((t) => t.toLowerCase().includes(q)))
        );
      });

      if (filteredSkills.length === 0) return null;
      return { ...cat, skills: filteredSkills };
    })
    .filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-blue-500/30 text-xs font-mono text-blue-700 dark:text-blue-300 shadow-sm font-semibold">
            <Layout className="w-3.5 h-3.5" />
            <span>FULL-STACK &amp; AUTOMATION MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-slate-950 dark:text-white">
            Technical Capabilities &amp; <span className="gradient-text-cobalt">Stack Matrix</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Multi-disciplinary matrix spanning modern React 19/Next.js frontend development, enterprise process automation, Claude Code AI agents, and API security.
          </p>

          {/* Search & Filter Controls */}
          <div className="w-full max-w-2xl mt-6 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g., 'React', 'TypeScript', 'Claude', 'Tosca', 'JWT', 'REST')..."
                className="w-full pl-11 pr-14 py-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-slate-950 dark:hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeCategory === 'all'
                    ? 'bg-slate-950 text-white dark:bg-blue-600 dark:text-white font-bold shadow-md'
                    : 'editorial-card text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                All Skills ({allSkillsCount})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    activeCategory === cat.id
                      ? 'bg-slate-950 text-white dark:bg-blue-600 dark:text-white font-bold shadow-md'
                      : 'editorial-card text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  <cat.icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="editorial-card p-12 rounded-3xl text-center space-y-3 max-w-md mx-auto">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-mono">No matching skills found for &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-xs font-mono text-blue-700 dark:text-blue-400 underline font-semibold"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="editorial-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between bg-white dark:bg-[#111726] shadow-xl"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                      <cat.icon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-slate-950 dark:text-white tracking-tight">{cat.name}</h3>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Industry Verified Competencies</span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="text-slate-950 dark:text-slate-100 font-sans font-medium">
                            {skill.name}
                          </span>
                          <span className="text-blue-700 dark:text-blue-400 font-mono text-xs font-bold">{skill.level}%</span>
                        </div>

                        {/* Skill Level Progress Bar */}
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 p-[1px]">
                          <div
                            className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-500 dark:from-blue-500 dark:via-sky-400 dark:to-emerald-400 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Skill Highlight & Tags */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5 font-mono">
                          {skill.highlight && (
                            <span className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1">
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span> {skill.highlight}
                            </span>
                          )}

                          {skill.tags && (
                            <div className="flex flex-wrap gap-1 ml-auto">
                              {skill.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-800/60 text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Industry &amp; Production Proven</span>
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 text-[11px]">Capgemini • Torn &amp; Stitched • Newgen</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
