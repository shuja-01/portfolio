'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  Play,
  RotateCcw,
  Activity,
  Zap,
  Lock,
  Bot,
  Database,
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import Hero3DCanvas from '@/components/3d/Hero3DCanvas';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenCommandPalette?: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [activeLens, setActiveLens] = useState<'all' | 'frontend' | 'automation' | 'ai'>('all');
  const [rightDeckMode, setRightDeckMode] = useState<'3d-core' | 'telemetry'>('3d-core');
  
  // Interactive Pipeline Visualizer State
  const [activeNode, setActiveNode] = useState<number>(0);
  const [pipelineRunning, setPipelineRunning] = useState<boolean>(false);
  const [packetProgress, setPacketProgress] = useState<number>(0);
  const [liveLatency, setLiveLatency] = useState<number>(14);

  // Mouse Spotlight Coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleBeaconSelect = (beaconId: string) => {
    if (beaconId === 'tosca' || beaconId === 'api') {
      setActiveLens('automation');
    } else if (beaconId === 'react') {
      setActiveLens('frontend');
    } else if (beaconId === 'ai' || beaconId === 'ieee') {
      setActiveLens('ai');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const lensData = {
    all: {
      headline: 'Architecting Process Automation, Modern Frontend Systems & AI Workflows',
      lead: "Hi, I'm Mohd Shuja Rizvi. I engineer high-performance frontend architectures (React 19, Next.js 16, TypeScript), automated enterprise test suites (Tosca L2, Selenium, REST Assured), secure API frameworks (JWT), and AI-driven document intelligence at Capgemini Malaysia.",
      pills: ['React 19 & Next.js 16 (App Router)', 'Tosca Automation Specialist L2', 'REST API & Security (JWT)', 'Enterprise AI & LLM Systems'],
      highlightMetric: '99.4% Automated Pass Rate',
    },
    frontend: {
      headline: 'Crafting High-Performance React 19, Next.js & Shopify Frontend Architectures',
      lead: 'Specializing in modern component architecture, TypeScript design patterns, Tailwind CSS design tokens, Shopify Liquid storefronts, and sub-second Web Vitals performance optimization.',
      pills: ['React 19 & TypeScript', 'Next.js 16 App Router', 'Tailwind CSS Tokens', 'Shopify Liquid Architecture'],
      highlightMetric: '95+ Lighthouse Score',
    },
    automation: {
      headline: 'Zero-Defect Enterprise Test Automation & REST API Engineering',
      lead: 'Certified Tricentis Tosca Automation Specialist (L2) and Java REST Assured architect building data-driven regression pipelines, Selenium/Appium test suites, and JWT token authentication checkers.',
      pills: ['Tricentis Tosca L2 Certified', 'REST Assured & API Auth', 'Selenium & Appium Automation', 'Data-Driven Regression Suites'],
      highlightMetric: '70% QA Overhead Cut',
    },
    ai: {
      headline: 'Integrating Autonomous AI Agents, LLMs & Enterprise Business Workflows',
      lead: 'Designing end-to-end intelligent extraction pipelines that parse unstructured documents into validated schemas, authored peer-reviewed CNN deep learning research (IEEE Xplore), and automating operational workflows.',
      pills: ['Enterprise LLM Extraction', 'Claude Code & Agents', 'Deep Learning Research (IEEE)', 'Process Intelligence'],
      highlightMetric: 'IEEE Xplore Doc: 10182947',
    },
  };

  const currentLens = lensData[activeLens];

  // Pipeline Nodes
  const pipelineNodes = [
    {
      id: 0,
      title: '1. Ingestion',
      subtitle: 'Webhook / Payload',
      icon: Zap,
      status: '200 OK',
      detail: 'REST Payload: 2.4KB JSON received via HTTPS TLS 1.3',
      color: 'text-sky-400 border-sky-500/40 bg-sky-500/10',
    },
    {
      id: 1,
      title: '2. JWT Security',
      subtitle: 'Auth & Bearer Token',
      icon: Lock,
      status: 'VERIFIED',
      detail: 'RS256 Signature verified, Claims parsed & sanitized',
      color: 'text-purple-400 border-purple-500/40 bg-purple-500/10',
    },
    {
      id: 2,
      title: '3. QA Assertion',
      subtitle: 'Tosca & REST Assured',
      icon: ShieldCheck,
      status: '100% PASS',
      detail: 'Multi-tier regression executed with 0 schema regressions',
      color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
    },
    {
      id: 3,
      title: '4. AI Extraction',
      subtitle: 'Claude Code Agent',
      icon: Bot,
      status: 'PARSED',
      detail: 'Autonomous LLM agent structured key fields with 99.8% confidence',
      color: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
    },
  ];

  // Run Pipeline Animation
  const triggerPipelineRun = () => {
    if (pipelineRunning) return;
    setPipelineRunning(true);
    setPacketProgress(0);
    setActiveNode(0);

    const stepInterval = setInterval(() => {
      setActiveNode((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setPipelineRunning(false);
          setLiveLatency(Math.floor(Math.random() * 8) + 12);
          return 3;
        }
        return prev + 1;
      });
    }, 600);
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden telemetry-grid bg-[var(--bg-canvas)]">
      
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none animate-ambient-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Thesis & Narrative Cockpit (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Live Status Pill with Interactive Ping */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full editorial-card bg-slate-900/90 shadow-sm text-xs font-mono">
              <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-beacon"></span>
                <span>CAPGEMINI MALAYSIA</span>
              </span>
              <span className="text-slate-500">// CONSULTANT</span>
              <button
                onClick={triggerPipelineRun}
                className="flex items-center gap-1 text-slate-200 hover:text-emerald-400 font-medium px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] transition-colors"
                title="Click to simulate live pipeline packet"
              >
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>PING: {liveLatency}ms (CLICK TO RUN)</span>
              </button>
            </div>

            {/* Dynamic Headline with Sculptural Display Typography */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-heading font-extrabold tracking-tight text-white leading-[1.12]">
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
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {currentLens.lead}
              </p>
            </div>

            {/* Interactive Architectural Lens Selector */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Select Architectural Perspective:</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/60 font-semibold">
                  {currentLens.highlightMetric}
                </span>
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
                    className={`px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
                      activeLens === lens.key
                        ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/25 ring-1 ring-blue-400 scale-[1.02]'
                        : 'editorial-card text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800'
                    }`}
                  >
                    <span>{lens.label}</span>
                    {activeLens === lens.key && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Pill Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {currentLens.pills.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
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
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-bold transition-all shadow-lg shadow-blue-600/30 bg-blue-600 hover:bg-blue-500 text-white hover:scale-[1.02]"
              >
                <LinkedinIcon className="w-4 h-4 text-white" />
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-semibold transition-all bg-slate-900 border border-slate-700 text-slate-100 hover:bg-slate-800 shadow-sm hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Profile PDF</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-semibold transition-all bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white shadow-sm"
              >
                <Terminal className="w-4 h-4 text-slate-400" />
                <span>Run Sandbox</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Cyber Core & Engineering Telemetry Deck (Cols 8-12) */}
          <div className="lg:col-span-5 relative space-y-3" onMouseMove={handleMouseMove}>
            
            {/* View Switcher Controls */}
            <div className="flex items-center justify-between font-mono text-xs px-1">
              <div className="inline-flex p-1 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-sm">
                <button
                  onClick={() => setRightDeckMode('3d-core')}
                  className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 font-bold ${
                    rightDeckMode === '3d-core'
                      ? 'bg-blue-600 text-white shadow-md ring-1 ring-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                  <span>3D Cyber Core</span>
                </button>
                <button
                  onClick={() => setRightDeckMode('telemetry')}
                  className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 font-bold ${
                    rightDeckMode === 'telemetry'
                      ? 'bg-blue-600 text-white shadow-md ring-1 ring-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Telemetry Deck</span>
                </button>
              </div>

              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider hidden sm:inline">
                Spatial WebGL
              </span>
            </div>

            {rightDeckMode === '3d-core' ? (
              <div className="space-y-3">
                {/* 3D WebGL Interactive Core */}
                <Hero3DCanvas onSelectBeacon={handleBeaconSelect} />

                {/* Quick Profile & Metric Strips under 3D Canvas */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-500 block uppercase">EXP</span>
                    <span className="text-xs font-bold text-white">3+ Years</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-500 block uppercase">TOSCA</span>
                    <span className="text-xs font-bold text-emerald-400">Certified L2</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-500 block uppercase">FRONTEND</span>
                    <span className="text-xs font-bold text-blue-400">React 19</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-500 block uppercase">AI</span>
                    <span className="text-xs font-bold text-purple-400">Claude Agents</span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                ref={cardRef}
                className="editorial-card p-6 sm:p-8 rounded-3xl border border-slate-800 bg-[#111726] space-y-6 shadow-2xl relative overflow-hidden group"
              >
                {/* Dynamic Mouse Spotlight Glow */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                  style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 123, 255, 0.15), transparent 80%)`,
                  }}
                />

                {/* Profile Header */}
                <div className="flex items-center gap-4 border-b border-slate-800/80 pb-5 relative z-10">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500/40 p-0.5 bg-slate-900 shrink-0 shadow-md">
                    <Image
                      src="/shuja.jpg"
                      alt="Mohd Shuja Rizvi"
                      width={64}
                      height={64}
                      priority
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
                  </div>

                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-blue-400 block uppercase tracking-wider font-semibold">
                      ENGINEERING PROFILE // CONSULTANT
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white truncate">
                      Mohd Shuja Rizvi
                    </h3>
                    <p className="text-xs font-mono text-slate-400 truncate">
                      Capgemini • Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>

                {/* Interactive Pipeline Visualizer Widget */}
                <div className="p-4 rounded-2xl bg-[#0b0f17] border border-slate-800/90 space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1.5 font-semibold">
                      <Activity className="w-3.5 h-3.5 text-blue-400" />
                      <span>INTERACTIVE PIPELINE RUNNER</span>
                    </span>
                    <button
                      onClick={triggerPipelineRun}
                      disabled={pipelineRunning}
                      className="flex items-center gap-1 text-[11px] font-mono text-blue-400 hover:text-white bg-blue-950/60 hover:bg-blue-900/80 border border-blue-800 px-2.5 py-1 rounded-lg transition-all font-semibold"
                    >
                      {pipelineRunning ? (
                        <>
                          <RotateCcw className="w-3 h-3 animate-spin" />
                          <span>Streaming...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3" />
                          <span>Trigger Run</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* 4 Interactive Pipeline Node Buttons */}
                  <div className="grid grid-cols-4 gap-1.5 pt-1">
                    {pipelineNodes.map((node) => {
                      const isSelected = activeNode === node.id;
                      return (
                        <button
                          key={node.id}
                          onClick={() => setActiveNode(node.id)}
                          className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                            isSelected
                              ? `${node.color} ring-1 ring-white/20 shadow-md scale-[1.03]`
                              : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                          }`}
                        >
                          <node.icon className="w-4 h-4" />
                          <span className="text-[10px] font-mono font-bold block truncate w-full">
                            {node.title.split(' ')[1]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Node Live Telemetry Feed */}
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-1 font-mono text-xs animate-in fade-in duration-150">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">{pipelineNodes[activeNode].subtitle}</span>
                      <span className="text-emerald-400 font-bold">{pipelineNodes[activeNode].status}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-normal leading-relaxed">
                      {pipelineNodes[activeNode].detail}
                    </p>
                  </div>
                </div>

                {/* 4 Verified Metric Chips */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs relative z-10">
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase">EXPERIENCE</span>
                    <div className="text-lg font-bold text-white">3+ Yrs</div>
                    <span className="text-[10px] text-blue-400 block font-semibold">Automation &amp; Frontend</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase">ACCREDITATION</span>
                    <div className="text-lg font-bold text-emerald-400">Tosca L2</div>
                    <span className="text-[10px] text-slate-400 block">Tricentis Certified</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase">ACADEMICS</span>
                    <div className="text-lg font-bold text-white">B.Tech EE</div>
                    <span className="text-[10px] text-slate-400 block">GCET Graduate</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase">SECURITY</span>
                    <div className="text-lg font-bold text-purple-400">JWT &amp; TLS</div>
                    <span className="text-[10px] text-slate-400 block">REST Encrypted</span>
                  </div>
                </div>

                {/* IEEE Research Publication Citation Link */}
                <a
                  href="https://ieeexplore.ieee.org/document/10182947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3.5 rounded-2xl bg-blue-950/30 border border-blue-500/30 hover:border-blue-400 transition-all text-xs font-mono group relative z-10"
                >
                  <div className="flex items-center justify-between text-blue-300 mb-1 font-semibold">
                    <span>// IEEE RESEARCH PUBLICATION:</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug italic group-hover:text-white">
                    &quot;Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset&quot;
                  </p>
                </a>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
