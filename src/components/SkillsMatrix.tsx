'use client';

import React, { useState } from 'react';
import { Cpu, Terminal, Shield, Layout, Search, Check, Bot, Sparkles, Sliders, Layers, ArrowRight, Zap, RefreshCw, CheckCircle2, Compass } from 'lucide-react';
import TechSphere3D from '@/components/3d/TechSphere3D';

interface Skill {
  id: string;
  name: string;
  level: number;
  highlight: string;
  tags: string[];
  category: string;
  architectureRole: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: any;
  skills: Skill[];
}

export default function SkillsMatrix() {
  const [viewMode, setViewMode] = useState<'3d-sphere' | 'matrix'>('3d-sphere');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [minMastery, setMinMastery] = useState<number>(0);
  
  // Interactive Stack Mixer State
  const [selectedMixerTechs, setSelectedMixerTechs] = useState<string[]>([
    'React 19 & Next.js 16',
    'Tosca Automation L2',
    'Claude Code AI',
  ]);

  const categories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend Engineering',
      icon: Layout,
      skills: [
        { id: 'react-next', name: 'React 19 & Next.js 16 (App Router)', level: 94, highlight: 'Server Components & SSR Architecture', tags: ['React 19', 'Next.js', 'SSR'], category: 'Frontend', architectureRole: 'UI Component Architecture & SSR Hydration' },
        { id: 'typescript', name: 'TypeScript & Strict Types', level: 95, highlight: 'Strict Type System & Design Patterns', tags: ['TypeScript', 'ES6+'], category: 'Frontend', architectureRole: 'End-to-End Type Safety & Data Contracts' },
        { id: 'tailwind', name: 'Tailwind CSS & Design Tokens', level: 95, highlight: 'Design Tokens, CSS Variables & Layouts', tags: ['Tailwind', 'CSS3'], category: 'Frontend', architectureRole: 'Design Token System & Responsive Grid' },
        { id: 'web-vitals', name: 'Web Performance & Web Vitals', level: 90, highlight: '90+ Lighthouse, Bundle Optimization & SEO', tags: ['Performance', 'Core Web Vitals'], category: 'Frontend', architectureRole: 'Sub-second LCP & Critical Path Optimization' },
        { id: 'shopify', name: 'Shopify Storefronts & Liquid Templating', level: 92, highlight: 'Tech Lead @ Torn & Stitched', tags: ['Shopify', 'Liquid'], category: 'Frontend', architectureRole: 'E-commerce Conversion & Liquid Theme Architecture' },
        { id: 'state-mgmt', name: 'State Management & Interactions', level: 88, highlight: 'Zustand, React Hooks & Modern UI', tags: ['Hooks', 'Micro-interactions'], category: 'Frontend', architectureRole: 'Predictable State Graphs & Tactile UI' },
      ],
    },
    {
      id: 'automation',
      name: 'Automation & QA Testing',
      icon: Terminal,
      skills: [
        { id: 'rest-api', name: 'REST API Validation & Testing', level: 95, highlight: 'Capgemini Core Client Delivery', tags: ['REST API', 'JSON/XML'], category: 'Automation', architectureRole: 'Payload Assertion & HTTP Response Verification' },
        { id: 'tosca-l2', name: 'Tosca Automation Specialist L2', level: 92, highlight: 'Tricentis Certified Specialist L2', tags: ['Tosca L2', 'Enterprise'], category: 'Automation', architectureRole: 'Model-Based Enterprise Test Suite Orchestration' },
        { id: 'selenium', name: 'Selenium & Appium Automation', level: 90, highlight: 'Web & Cross-Platform Mobile Suites', tags: ['Selenium', 'Appium'], category: 'Automation', architectureRole: 'Headless Browser & Native App Regression' },
        { id: 'rest-assured', name: 'REST Assured Test Automation', level: 88, highlight: 'Java API Automated Assertion Frameworks', tags: ['Java', 'REST Assured'], category: 'Automation', architectureRole: 'Automated Backend API Testing in Java' },
        { id: 'ci-cd-qa', name: 'Data-Driven Test Architecture', level: 92, highlight: 'Zero-Downtime Regression Testing', tags: ['Data-Driven', 'CI/CD'], category: 'Automation', architectureRole: 'Continuous Automated Pipeline Validation' },
      ],
    },
    {
      id: 'ai-dev',
      name: 'AI Agents & Modern Software',
      icon: Bot,
      skills: [
        { id: 'claude-code', name: 'Claude Code & AI Coding Agents', level: 92, highlight: 'Udemy Certified: Complete Claude Code Course', tags: ['Claude Code', 'AI Agents', 'MCP'], category: 'AI', architectureRole: 'Autonomous Agent Tool Calling & Extraction' },
        { id: 'llm-workflow', name: 'Enterprise LLM Workflow Integration', level: 88, highlight: 'Autonomous Prompt & Extraction Workflows', tags: ['LLMs', 'Prompt Eng'], category: 'AI', architectureRole: 'Unstructured Document Transformation to JSON' },
        { id: 'java-ent', name: 'Java Enterprise Systems', level: 85, highlight: 'Newgen Digital Platforms & Core Backend', tags: ['Java', 'Enterprise'], category: 'AI', architectureRole: 'Enterprise Business Logic & Legacy Bridge' },
        { id: 'python', name: 'Python Engineering & Scripting', level: 86, highlight: 'Data Pipelines & Workflow Automation', tags: ['Python', 'Automation'], category: 'AI', architectureRole: 'Scripting & Telemetry Data Wrangling' },
        { id: 'deep-learning', name: 'Deep Learning & Neural Networks', level: 84, highlight: 'Skin Lesion Classifier IEEE Research Paper', tags: ['CNN', 'Machine Learning'], category: 'AI', architectureRole: 'Convolutional Vision & Imbalance Handling' },
      ],
    },
    {
      id: 'security-data',
      name: 'Security & Analytics',
      icon: Shield,
      skills: [
        { id: 'jwt-sec', name: 'JWT & API Security Handlers', level: 90, highlight: 'Encrypted Bearer Tokens & Auth Checks', tags: ['JWT', 'Security'], category: 'Security', architectureRole: 'Encrypted Authorization & Bearer Validation' },
        { id: 'power-bi', name: 'Power BI & Excel Data Analytics', level: 92, highlight: 'Data Analyst\'s Toolbox Certified', tags: ['Power BI', 'Analytics'], category: 'Security', architectureRole: 'Executive Telemetry & KPI Visualization' },
        { id: 'fpa', name: 'Financial Planning & Analysis (FP&A)', level: 86, highlight: 'Financial Forecasting & ROI Analysis', tags: ['FP&A', 'Finance'], category: 'Security', architectureRole: 'Operational ROI & Automation Cost Optimization' },
        { id: 'mssql', name: 'MsSQL & Relational Databases', level: 85, highlight: 'Query Profiling & Schema Design', tags: ['MsSQL', 'Relational'], category: 'Security', architectureRole: 'Relational Schema Normalization & Query Tuning' },
      ],
    },
  ];

  const mixerPool = [
    'React 19 & Next.js 16',
    'TypeScript',
    'Tosca Automation L2',
    'REST Assured',
    'Claude Code AI',
    'JWT Security Auth',
    'Tailwind CSS',
    'Shopify Liquid',
    'Selenium & Appium',
    'Power BI Analytics',
  ];

  const toggleMixerTech = (tech: string) => {
    if (selectedMixerTechs.includes(tech)) {
      if (selectedMixerTechs.length > 1) {
        setSelectedMixerTechs(selectedMixerTechs.filter((t) => t !== tech));
      }
    } else {
      if (selectedMixerTechs.length < 5) {
        setSelectedMixerTechs([...selectedMixerTechs, tech]);
      }
    }
  };

  const getRecipeInsights = () => {
    const hasFrontend = selectedMixerTechs.some((t) => t.includes('React') || t.includes('Tailwind') || t.includes('TypeScript') || t.includes('Shopify'));
    const hasAutomation = selectedMixerTechs.some((t) => t.includes('Tosca') || t.includes('REST Assured') || t.includes('Selenium'));
    const hasAI = selectedMixerTechs.some((t) => t.includes('Claude') || t.includes('AI'));
    const hasSecurity = selectedMixerTechs.some((t) => t.includes('JWT') || t.includes('Security'));

    let title = 'Integrated Full-Stack Architecture';
    let summary = 'A highly coordinated pipeline combining clean presentation layers with robust backend assertions.';
    let impactBadge = 'High Throughput & Resilient';

    if (hasFrontend && hasAutomation && hasAI) {
      title = 'AI-Augmented Autonomous Frontend & Automated QA Pipeline';
      summary = 'Next.js 16 SSR interface paired with automated Tosca regression suites and Claude Code AI agents for real-time unstructured data extraction and continuous verification.';
      impactBadge = '70% QA Reduction + 95+ Web Vitals';
    } else if (hasAutomation && hasSecurity) {
      title = 'Zero-Trust Enterprise Automated Security & API Suite';
      summary = 'Java REST Assured and Tosca L2 suites continuously verifying JWT token lifetimes, RS256 signature authenticity, and encrypted payload delivery.';
      impactBadge = '100% Security Compliance';
    } else if (hasFrontend && hasAI) {
      title = 'Intelligent Agentic UI & Dynamic Data Workspace';
      summary = 'React 19 component trees consuming streaming responses from Claude Code autonomous agents with strict TypeScript schema validation.';
      impactBadge = 'Sub-Second Agentic UI';
    }

    return { title, summary, impactBadge };
  };

  const recipe = getRecipeInsights();

  const allSkillsCount = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  const filteredCategories = categories
    .map((cat) => {
      const categoryMatches = activeCategory === 'all' || activeCategory === cat.id;
      if (!categoryMatches) return null;

      const filteredSkills = cat.skills.filter((skill) => {
        const matchesSearch = !searchQuery.trim() ||
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesMastery = skill.level >= minMastery;

        return matchesSearch && matchesMastery;
      });

      if (filteredSkills.length === 0) return null;
      return { ...cat, skills: filteredSkills };
    })
    .filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--bg-canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#00f5ff]/30 text-xs font-mono text-[#00f5ff] shadow-sm font-semibold">
            <Layout className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>FULL-STACK &amp; AUTOMATION MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            Technical Capabilities &amp; <span className="gradient-text-cyber">3D Stack Sphere</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Explore Shuja&apos;s competencies across modern React 19/Next.js frontend development, enterprise process automation, Claude Code AI agents, and API security.
          </p>

          {/* 3D vs Grid View Switcher */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg font-mono text-xs">
              <button
                onClick={() => setViewMode('3d-sphere')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 font-bold ${
                  viewMode === '3d-sphere'
                    ? 'bg-[#00f5ff] text-slate-950 shadow-md shadow-[#00f5ff]/25 scale-[1.02]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Compass className="w-4 h-4 text-slate-950 animate-spin" />
                <span>3D Holographic Sphere</span>
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 font-bold ${
                  viewMode === 'matrix'
                    ? 'bg-[#00f5ff] text-slate-950 shadow-md shadow-[#00f5ff]/25 scale-[1.02]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4 text-slate-950" />
                <span>Capabilities Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3D Holographic Sphere Section */}
        {viewMode === '3d-sphere' && (
          <div className="mb-14 space-y-4">
            {/* Category Quick Filter Pills for 3D Sphere */}
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
              {[
                { id: 'all', label: 'All Disciplines' },
                { id: 'frontend', label: 'Frontend & UI' },
                { id: 'automation', label: 'Automation & QA' },
                { id: 'ai', label: 'AI & Vision' },
                { id: 'security', label: 'Security & Analytics' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#00f5ff] border-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Interactive 3D Sphere */}
            <TechSphere3D
              selectedCategory={activeCategory}
              onSelectSkill={(id) => {
                setActiveCategory('all');
                setSearchQuery(id);
              }}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* INTERACTIVE STACK MIXER & ARCHITECTURE GENERATOR WIDGET */}
        {/* ========================================================================= */}
        <div className="editorial-card p-6 sm:p-8 rounded-3xl border border-[#00f5ff]/20 bg-[#080e1c]/85 shadow-2xl mb-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#00f5ff]/15 border border-[#00f5ff]/40 flex items-center justify-center text-[#00f5ff]">
                <Sparkles className="w-5 h-5 text-[#00f5ff]" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white leading-snug">
                  Interactive Technology Stack Mixer
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Select technologies below to see Shuja&apos;s real-world production integration recipe
                </span>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30 font-bold self-start sm:self-auto">
              {recipe.impactBadge}
            </span>
          </div>

          {/* Technology Selector Chips */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Click to select 2 to 5 technologies:</span>
              <span>{selectedMixerTechs.length}/5 Selected</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {mixerPool.map((tech) => {
                const isSelected = selectedMixerTechs.includes(tech);
                return (
                  <button
                    key={tech}
                    onClick={() => toggleMixerTech(tech)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25 scale-[1.02]'
                        : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>{tech}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-slate-950" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generated Recipe Blueprint */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#00f5ff] font-bold">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="uppercase text-sm font-heading">{recipe.title}</span>
            </div>
            <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
              {recipe.summary}
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-900">
              {selectedMixerTechs.map((t, idx) => (
                <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  <span className="text-[#00f5ff] font-bold">{idx + 1}.</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="w-full max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., 'React', 'TypeScript', 'Claude', 'Tosca', 'JWT', 'REST')..."
              className="w-full pl-11 pr-14 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills & Mastery Slider */}
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl transition-all ${
                  activeCategory === 'all'
                    ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                    : 'editorial-card text-slate-300 hover:text-white bg-slate-900/60'
                }`}
              >
                All ({allSkillsCount})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                      : 'editorial-card text-slate-300 hover:text-white bg-slate-900/60'
                  }`}
                >
                  <cat.icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Mastery Threshold Pill */}
            <button
              onClick={() => setMinMastery(minMastery === 0 ? 90 : 0)}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 text-xs ${
                minMastery > 0
                  ? 'bg-[#00ff9d] text-slate-950 font-bold shadow-md shadow-[#00ff9d]/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{minMastery > 0 ? 'Mastery ≥ 90% Active' : 'Filter ≥ 90% Mastery'}</span>
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="editorial-card p-12 rounded-3xl text-center space-y-3 max-w-md mx-auto bg-[#080e1c]/85 border border-[#00f5ff]/20">
            <p className="text-slate-400 text-sm font-mono">No matching skills found for &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); setMinMastery(0); }}
              className="text-xs font-mono text-[#00f5ff] underline font-semibold"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="editorial-card p-6 sm:p-8 rounded-3xl border border-[#00f5ff]/20 space-y-6 flex flex-col justify-between bg-[#080e1c]/85 shadow-xl"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 border-b border-slate-800 pb-4">
                    <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00f5ff] shadow-sm">
                      <cat.icon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white tracking-tight">{cat.name}</h3>
                      <span className="text-xs font-mono text-slate-400">Industry Verified Competencies</span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2 group">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="text-slate-100 font-sans font-medium group-hover:text-[#00f5ff] transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[#00f5ff] font-mono text-xs font-bold">{skill.level}%</span>
                        </div>

                        {/* Skill Level Progress Bar */}
                        <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-[1px]">
                          <div
                            className="h-full bg-gradient-to-r from-[#00f5ff] via-[#38bdf8] to-[#00ff9d] rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Skill Highlight & Tags */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5 font-mono">
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <span className="text-[#00ff9d] font-bold">✓</span> {skill.highlight}
                          </span>

                          <div className="flex flex-wrap gap-1 ml-auto">
                            {skill.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-800/60 text-xs font-mono text-[#00ff9d] flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Industry &amp; Production Proven</span>
                  </span>
                  <span className="text-slate-500 text-[11px]">Capgemini • Torn &amp; Stitched • Newgen</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
