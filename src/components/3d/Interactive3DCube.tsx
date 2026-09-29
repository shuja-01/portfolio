'use client';

import React, { useState, useRef, useEffect } from 'react';
import { sound } from '@/utils/soundEffects';
import {
  ShieldCheck,
  Code2,
  Lock,
  Bot,
  FileText,
  Zap,
  RotateCw,
  Sliders,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

interface CubeFace {
  id: string;
  name: string;
  category: string;
  icon: any;
  color: string;
  bgGlow: string;
  borderCol: string;
  metric: string;
  description: string;
  tags: string[];
  rotation: { x: number; y: number };
}

export default function Interactive3DCube() {
  const [activeFaceIndex, setActiveFaceIndex] = useState<number>(0);
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const [autoSpin, setAutoSpin] = useState(true);

  const lastPos = useRef({ x: 0, y: 0 });

  const faces: CubeFace[] = [
    {
      id: 'front',
      name: 'Tricentis Tosca L2 Automation',
      category: 'Enterprise QA',
      icon: ShieldCheck,
      color: '#387bff',
      bgGlow: 'from-blue-600/20 to-blue-950/80',
      borderCol: 'border-blue-500/40',
      metric: '99.4% Automated Pass Rate',
      description: 'Architected model-based regression suites covering enterprise workflows, reducing release regression time by 70%.',
      tags: ['Tosca L2', 'Model-Based', 'Regression', 'CI/CD'],
      rotation: { x: 0, y: 0 },
    },
    {
      id: 'right',
      name: 'React 19 & Next.js 16',
      category: 'Modern Web Architecture',
      icon: Code2,
      color: '#10b981',
      bgGlow: 'from-emerald-600/20 to-emerald-950/80',
      borderCol: 'border-emerald-500/40',
      metric: '95+ Lighthouse Score',
      description: 'Server Components, dynamic streaming, zero-layout-shift (CLS < 0.01), and Tailwind CSS design tokens.',
      tags: ['React 19', 'Next.js 16', 'TypeScript', 'SSR'],
      rotation: { x: 0, y: -90 },
    },
    {
      id: 'back',
      name: 'JWT & API Security Handlers',
      category: 'Security Architecture',
      icon: Lock,
      color: '#f43f5e',
      bgGlow: 'from-rose-600/20 to-rose-950/80',
      borderCol: 'border-rose-500/40',
      metric: 'RS256 Bearer Token Verification',
      description: 'Asymmetric token signature validation, claims sanitization, and automated header expiration audits.',
      tags: ['JWT', 'RS256', 'TLS 1.3', 'Auth'],
      rotation: { x: 0, y: -180 },
    },
    {
      id: 'left',
      name: 'Autonomous AI Coding Agents',
      category: 'AI & LLM Workflows',
      icon: Bot,
      color: '#c084fc',
      bgGlow: 'from-purple-600/20 to-purple-950/80',
      borderCol: 'border-purple-500/40',
      metric: 'Claude Code Certified',
      description: 'Designing end-to-end prompt extraction pipelines that transform unstructured PDFs and invoices into validated JSON.',
      tags: ['Claude Code', 'AI Agents', 'MCP', 'LLMs'],
      rotation: { x: 0, y: 90 },
    },
    {
      id: 'top',
      name: 'IEEE Research Publication',
      category: 'Deep Learning & Vision',
      icon: FileText,
      color: '#f59e0b',
      bgGlow: 'from-amber-600/20 to-amber-950/80',
      borderCol: 'border-amber-500/40',
      metric: 'IEEE Xplore Doc: 10182947',
      description: 'Published author of "Deep Learning Model For Skin Lesion Classification Using Imbalance Dataset".',
      tags: ['CNN', 'Deep Learning', 'PyTorch', 'IEEE'],
      rotation: { x: -90, y: 0 },
    },
    {
      id: 'bottom',
      name: 'Java REST Assured Framework',
      category: 'API Automation',
      icon: Zap,
      color: '#38bdf8',
      bgGlow: 'from-sky-600/20 to-sky-950/80',
      borderCol: 'border-sky-500/40',
      metric: '100% Endpoint Contract Check',
      description: 'Data-driven assertion framework verifying payloads, headers, status codes, and latency budgets.',
      tags: ['REST Assured', 'Java', 'JSON Schema', 'HTTP'],
      rotation: { x: 90, y: 0 },
    },
  ];

  // Auto rotation
  useEffect(() => {
    if (!autoSpin || isDragging) return;

    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + Math.sin(Date.now() * 0.001) * 0.1,
        y: prev.y + 0.35,
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [autoSpin, isDragging]);

  const snapToFace = (index: number) => {
    setActiveFaceIndex(index);
    setAutoSpin(false);
    sound.playClick();
    const target = faces[index].rotation;
    setRotation({ x: target.x, y: target.y });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoSpin(false);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    setRotation((prev) => ({
      x: Math.max(-90, Math.min(90, prev.x - dy * 0.5)),
      y: prev.y + dx * 0.5,
    }));

    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const cubeSize = 170; // Half size is 85px

  return (
    <div className="relative w-full rounded-3xl editorial-card border border-slate-800 bg-[#070b14]/90 p-6 sm:p-8 space-y-6 overflow-hidden select-none">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-white font-bold tracking-wider text-xs">
            3D ARCHITECTURE BENCHMARK CUBE
          </span>
          <span className="text-slate-500 hidden sm:inline">// SPATIAL VIEW</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setAutoSpin((prev) => !prev);
              sound.playClick();
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 hover:text-white transition-all font-semibold"
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoSpin ? 'animate-spin text-emerald-400' : 'text-slate-400'}`} />
            <span>{autoSpin ? 'Auto-Spin ON' : 'Interactive Mode'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* 3D Cube Viewport (Cols 1-6) */}
        <div
          className="lg:col-span-6 h-[340px] flex items-center justify-center cursor-grab active:cursor-grabbing relative"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Subtle Ambient Depth Rings */}
          <div className="absolute w-64 h-64 rounded-full border border-blue-500/10 pointer-events-none animate-pulse" />
          <div className="absolute w-80 h-80 rounded-full border border-slate-800/40 pointer-events-none" />

          {/* Perspective Viewport */}
          <div
            className="relative"
            style={{
              perspective: '1000px',
              width: `${cubeSize}px`,
              height: `${cubeSize}px`,
            }}
          >
            {/* The 3D Cube Container */}
            <div
              className="w-full h-full relative transition-transform duration-100 ease-out will-change-transform"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}
            >
              {/* Face 1: Front (Tosca) */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-blue-500/60 bg-gradient-to-br from-blue-950/90 via-slate-900/90 to-blue-950/90 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl text-left"
                style={{ transform: `translateZ(${cubeSize / 2}px)` }}
              >
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                  <span className="text-[10px] font-mono text-blue-300 font-bold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                    TOSCA L2
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-xs leading-tight">
                    Tricentis Tosca Automation
                  </h4>
                  <p className="text-[10px] font-mono text-emerald-400 font-bold mt-1">
                    99.4% Pass Rate
                  </p>
                </div>
              </div>

              {/* Face 2: Right (React 19) */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-emerald-500/60 bg-gradient-to-br from-emerald-950/90 via-slate-900/90 to-emerald-950/90 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl text-left"
                style={{ transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)` }}
              >
                <div className="flex items-center justify-between">
                  <Code2 className="w-6 h-6 text-emerald-400" />
                  <span className="text-[10px] font-mono text-emerald-300 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    REACT 19
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-xs leading-tight">
                    Next.js 16 App Router
                  </h4>
                  <p className="text-[10px] font-mono text-emerald-400 font-bold mt-1">
                    95+ Lighthouse
                  </p>
                </div>
              </div>

              {/* Face 3: Back (JWT Security) */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-rose-500/60 bg-gradient-to-br from-rose-950/90 via-slate-900/90 to-rose-950/90 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl text-left"
                style={{ transform: `rotateY(180deg) translateZ(${cubeSize / 2}px)` }}
              >
                <div className="flex items-center justify-between">
                  <Lock className="w-6 h-6 text-rose-400" />
                  <span className="text-[10px] font-mono text-rose-300 font-bold bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800">
                    JWT AUTH
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-xs leading-tight">
                    API Security Handlers
                  </h4>
                  <p className="text-[10px] font-mono text-rose-400 font-bold mt-1">
                    RS256 Encrypted
                  </p>
                </div>
              </div>

              {/* Face 4: Left (AI Agents) */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-purple-500/60 bg-gradient-to-br from-purple-950/90 via-slate-900/90 to-purple-950/90 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl text-left"
                style={{ transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)` }}
              >
                <div className="flex items-center justify-between">
                  <Bot className="w-6 h-6 text-purple-400" />
                  <span className="text-[10px] font-mono text-purple-300 font-bold bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                    CLAUDE AI
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-xs leading-tight">
                    Autonomous AI Workflows
                  </h4>
                  <p className="text-[10px] font-mono text-purple-400 font-bold mt-1">
                    Schema Ingestion
                  </p>
                </div>
              </div>

              {/* Face 5: Top (IEEE) */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-amber-500/60 bg-gradient-to-br from-amber-950/90 via-slate-900/90 to-amber-950/90 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl text-left"
                style={{ transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)` }}
              >
                <div className="flex items-center justify-between">
                  <FileText className="w-6 h-6 text-amber-400" />
                  <span className="text-[10px] font-mono text-amber-300 font-bold bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                    IEEE
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-xs leading-tight">
                    Deep Learning Research
                  </h4>
                  <p className="text-[10px] font-mono text-amber-400 font-bold mt-1">
                    Doc: 10182947
                  </p>
                </div>
              </div>

              {/* Face 6: Bottom (REST Assured) */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-sky-500/60 bg-gradient-to-br from-sky-950/90 via-slate-900/90 to-sky-950/90 backdrop-blur-xl p-4 flex flex-col justify-between shadow-2xl text-left"
                style={{ transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)` }}
              >
                <div className="flex items-center justify-between">
                  <Zap className="w-6 h-6 text-sky-400" />
                  <span className="text-[10px] font-mono text-sky-300 font-bold bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                    REST ASSURED
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-xs leading-tight">
                    Java API Framework
                  </h4>
                  <p className="text-[10px] font-mono text-sky-400 font-bold mt-1">
                    Automated Asserts
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="absolute bottom-2 text-[10px] font-mono text-slate-500 pointer-events-none">
            DRAG CUBE TO ROTATE IN 3D
          </div>
        </div>

        {/* Face Detail Inspector & Selector Buttons (Cols 7-12) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
              Select Cube Face to Inspect:
            </span>
            <span className="text-[11px] font-mono text-blue-400 bg-blue-950/60 border border-blue-800 px-2.5 py-0.5 rounded-lg font-semibold">
              Face {activeFaceIndex + 1} of 6
            </span>
          </div>

          {/* Preset Buttons to Snap to Faces */}
          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            {faces.map((face, idx) => {
              const isSelected = activeFaceIndex === idx;
              return (
                <button
                  key={face.id}
                  onClick={() => snapToFace(idx)}
                  className={`p-2.5 rounded-xl border transition-all text-left flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-600 border-blue-400 text-white font-bold shadow-md scale-[1.02]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <face.icon className="w-4 h-4 shrink-0" />
                  <span className="truncate text-[11px]">{face.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Face Deep Dive Card */}
          <div className="p-5 rounded-2xl bg-[#0b0f18] border border-slate-800/90 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 uppercase">
                {faces[activeFaceIndex].category}
              </span>
              <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded text-[11px]">
                {faces[activeFaceIndex].metric}
              </span>
            </div>

            <h3 className="text-base font-heading font-bold text-white">
              {faces[activeFaceIndex].name}
            </h3>

            <p className="text-slate-300 text-xs font-normal leading-relaxed">
              {faces[activeFaceIndex].description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {faces[activeFaceIndex].tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[10px]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
