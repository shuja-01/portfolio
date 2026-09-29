'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { sound } from '@/utils/soundEffects';
import { Sparkles, Layers, Sliders, RotateCw, Pause, Compass, Zap } from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'automation' | 'ai' | 'security';
  level: number;
  highlight: string;
  color: string;
  borderCol: string;
  bgCol: string;
}

interface TechSphere3DProps {
  selectedCategory?: string;
  onSelectSkill?: (skillId: string) => void;
  className?: string;
}

export default function TechSphere3D({
  selectedCategory = 'all',
  onSelectSkill,
  className = '',
}: TechSphere3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ rx: 0.2, ry: 0.3 });
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState<TechItem | null>(null);

  // Velocity for smooth drag inertia
  const velocityRef = useRef({ vx: 0.003, vy: 0.005 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  const skills: TechItem[] = useMemo(
    () => [
      { id: 'react', name: 'React 19', category: 'frontend', level: 94, highlight: 'Server Components & SSR', color: '#38bdf8', borderCol: 'border-sky-500/50', bgCol: 'bg-sky-950/80' },
      { id: 'nextjs', name: 'Next.js 16', category: 'frontend', level: 94, highlight: 'App Router & Dynamic Streaming', color: '#60a5fa', borderCol: 'border-blue-500/50', bgCol: 'bg-blue-950/80' },
      { id: 'typescript', name: 'TypeScript', category: 'frontend', level: 95, highlight: 'Strict Typing & Generics', color: '#93c5fd', borderCol: 'border-blue-400/50', bgCol: 'bg-blue-900/60' },
      { id: 'tosca-l2', name: 'Tosca L2', category: 'automation', level: 92, highlight: 'Tricentis Certified Specialist', color: '#10b981', borderCol: 'border-emerald-500/60', bgCol: 'bg-emerald-950/80' },
      { id: 'rest-assured', name: 'REST Assured', category: 'automation', level: 88, highlight: 'Java API Regression Framework', color: '#34d399', borderCol: 'border-emerald-400/50', bgCol: 'bg-emerald-900/60' },
      { id: 'selenium', name: 'Selenium & Appium', category: 'automation', level: 90, highlight: 'Web & Mobile Multi-Platform', color: '#059669', borderCol: 'border-emerald-600/50', bgCol: 'bg-emerald-950/70' },
      { id: 'claude-code', name: 'Claude Code', category: 'ai', level: 92, highlight: 'Autonomous Coding Agents & MCP', color: '#c084fc', borderCol: 'border-purple-500/60', bgCol: 'bg-purple-950/80' },
      { id: 'llm-extraction', name: 'Enterprise LLMs', category: 'ai', level: 88, highlight: 'Document Parsing & Structured JSON', color: '#a855f7', borderCol: 'border-purple-400/50', bgCol: 'bg-purple-900/60' },
      { id: 'deep-learning', name: 'CNN Deep Learning', category: 'ai', level: 84, highlight: 'IEEE Published Author (10182947)', color: '#e879f9', borderCol: 'border-fuchsia-500/50', bgCol: 'bg-fuchsia-950/80' },
      { id: 'jwt', name: 'JWT & API Security', category: 'security', level: 90, highlight: 'RS256 Bearer Token Verification', color: '#f43f5e', borderCol: 'border-rose-500/50', bgCol: 'bg-rose-950/80' },
      { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', level: 95, highlight: 'Design Tokens & Glassmorphism', color: '#38bdf8', borderCol: 'border-sky-400/40', bgCol: 'bg-sky-950/70' },
      { id: 'shopify', name: 'Shopify Liquid', category: 'frontend', level: 92, highlight: 'Lead Architect @ Torn & Stitched', color: '#86efac', borderCol: 'border-green-400/40', bgCol: 'bg-green-950/70' },
      { id: 'python', name: 'Python Scripts', category: 'ai', level: 86, highlight: 'Data Pipelines & Automation', color: '#fcd34d', borderCol: 'border-amber-400/40', bgCol: 'bg-amber-950/70' },
      { id: 'power-bi', name: 'Power BI', category: 'security', level: 92, highlight: 'Data Analyst\'s Toolbox Certified', color: '#fbbf24', borderCol: 'border-amber-500/50', bgCol: 'bg-amber-950/80' },
      { id: 'fpa', name: 'FP&A Analytics', category: 'security', level: 86, highlight: 'Automation ROI & Financial Models', color: '#f87171', borderCol: 'border-red-400/40', bgCol: 'bg-red-950/70' },
      { id: 'mssql', name: 'MsSQL & Schemas', category: 'security', level: 85, highlight: 'Query Optimization & Relational DB', color: '#94a3b8', borderCol: 'border-slate-500/40', bgCol: 'bg-slate-900/80' },
      { id: 'java', name: 'Java Enterprise', category: 'automation', level: 85, highlight: 'Newgen Digital Platforms Logic', color: '#fb923c', borderCol: 'border-orange-500/40', bgCol: 'bg-orange-950/70' },
      { id: 'web-vitals', name: 'Core Web Vitals', category: 'frontend', level: 90, highlight: 'Sub-second LCP & CLS Optimization', color: '#2dd4bf', borderCol: 'border-teal-400/40', bgCol: 'bg-teal-950/70' },
    ],
    []
  );

  // Calculate Fibonacci Sphere Coordinates
  const sphereNodes = useMemo(() => {
    const N = skills.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

    return skills.map((skill, i) => {
      const y = 1 - (i / (N - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...skill,
        baseX: x,
        baseY: y,
        baseZ: z,
      };
    });
  }, [skills]);

  // Animation Loop with Inertia
  useEffect(() => {
    let animId: number;

    const tick = () => {
      if (!isDragging) {
        if (autoRotate) {
          setRotation((prev) => ({
            rx: prev.rx + velocityRef.current.vx * 0.4,
            ry: prev.ry + velocityRef.current.vy * 0.4,
          }));
        } else {
          // Dampen velocity if user released drag
          velocityRef.current.vx *= 0.94;
          velocityRef.current.vy *= 0.94;
          if (Math.abs(velocityRef.current.vx) > 0.0001 || Math.abs(velocityRef.current.vy) > 0.0001) {
            setRotation((prev) => ({
              rx: prev.rx + velocityRef.current.vx,
              ry: prev.ry + velocityRef.current.vy,
            }));
          }
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, autoRotate]);

  // Mouse / Touch Drag Handlers
  const handlePointerDown = (clientX: number, clientY: number) => {
    setIsDragging(true);
    lastMousePos.current = { x: clientX, y: clientY };
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    const dx = clientX - lastMousePos.current.x;
    const dy = clientY - lastMousePos.current.y;

    const sensitivity = 0.006;
    velocityRef.current = { vx: -dy * sensitivity, vy: dx * sensitivity };

    setRotation((prev) => ({
      rx: prev.rx - dy * sensitivity,
      ry: prev.ry + dx * sensitivity,
    }));

    lastMousePos.current = { x: clientX, y: clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // 3D Sphere Radius in CSS pixels
  const SPHERE_RADIUS = 190;

  // Project 3D nodes onto 2D viewport
  const projectedNodes = useMemo(() => {
    const cosX = Math.cos(rotation.rx);
    const sinX = Math.sin(rotation.rx);
    const cosY = Math.cos(rotation.ry);
    const sinY = Math.sin(rotation.ry);

    return sphereNodes.map((node) => {
      // 1. Rotate around Y axis
      const x1 = node.baseX * cosY + node.baseZ * sinY;
      const y1 = node.baseY;
      const z1 = -node.baseX * sinY + node.baseZ * cosY;

      // 2. Rotate around X axis
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      // Calculate depth scale & opacity
      // z2 goes from -1 (far back) to +1 (front)
      const depthRatio = (z2 + 1) / 2; // 0 to 1
      const scale = 0.65 + depthRatio * 0.55; // 0.65 to 1.2
      const opacity = Math.max(0.2, 0.35 + depthRatio * 0.65);
      const zIndex = Math.round(depthRatio * 100);

      const isCategoryMatch = selectedCategory === 'all' || node.category === selectedCategory;

      return {
        ...node,
        screenX: x2 * SPHERE_RADIUS,
        screenY: y2 * SPHERE_RADIUS,
        depth: z2,
        scale,
        opacity: isCategoryMatch ? opacity : opacity * 0.25,
        zIndex,
        isCategoryMatch,
      };
    });
  }, [sphereNodes, rotation, selectedCategory]);

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
      onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => {
        if (e.touches.length === 1) handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }}
      onTouchMove={(e) => {
        if (e.touches.length === 1) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }}
      onTouchEnd={handlePointerUp}
      className={`relative w-full h-[520px] rounded-3xl overflow-hidden editorial-card border border-slate-800 bg-[#070b14]/90 flex items-center justify-center select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      {/* 3D Atmospheric Radial Glows */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
        <div className="w-64 h-64 rounded-full border border-blue-500/15 animate-spin duration-[30s]" />
        <div className="w-96 h-96 rounded-full border border-slate-800/40" />
      </div>

      {/* Top Telemetry Header */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 py-3.5 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 font-mono text-xs">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-blue-400 animate-spin" />
          <span className="text-white font-bold tracking-wider text-[11px]">
            HOLOGRAPHIC 3D TECH SPHERE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setAutoRotate((prev) => !prev);
              sound.playClick();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 transition-all font-semibold"
            title={autoRotate ? 'Pause Auto-Spin' : 'Resume Auto-Spin'}
          >
            {autoRotate ? <Pause className="w-3 h-3 text-emerald-400" /> : <RotateCw className="w-3 h-3 text-blue-400" />}
            <span>{autoRotate ? 'Auto-Spin ON' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* 3D Nodes Projected onto 2D Canvas Plane */}
      <div className="relative w-0 h-0 flex items-center justify-center pointer-events-none">
        {projectedNodes.map((node) => {
          const isHovered = hoveredSkill?.id === node.id;
          return (
            <div
              key={node.id}
              style={{
                transform: `translate3d(${node.screenX}px, ${node.screenY}px, 0) scale(${node.scale * (isHovered ? 1.25 : 1)})`,
                opacity: isHovered ? 1 : node.opacity,
                zIndex: isHovered ? 999 : node.zIndex,
              }}
              onMouseEnter={() => {
                setHoveredSkill(node);
                sound.playHover();
              }}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={(e) => {
                e.stopPropagation();
                sound.playClick();
                if (onSelectSkill) onSelectSkill(node.id);
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-transform duration-75 cursor-pointer group`}
            >
              <div
                className={`px-3 py-1.5 rounded-xl border backdrop-blur-md font-mono text-xs font-bold whitespace-nowrap shadow-lg flex items-center gap-2 transition-all ${
                  node.bgCol
                } ${node.borderCol} ${
                  node.isCategoryMatch
                    ? 'ring-1 ring-white/20'
                    : 'grayscale opacity-40'
                } ${
                  isHovered
                    ? 'ring-2 ring-blue-400 shadow-blue-500/50 scale-110'
                    : ''
                }`}
                style={{ color: node.color }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                <span>{node.name}</span>
                <span className="text-[10px] opacity-75 font-normal">
                  {node.level}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected / Hovered Skill Holographic Card */}
      {hoveredSkill && (
        <div className="absolute bottom-5 inset-x-5 sm:inset-x-auto sm:left-6 z-20 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-blue-500/50 shadow-2xl space-y-1 font-mono text-xs max-w-sm animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white flex items-center gap-1.5 text-sm" style={{ color: hoveredSkill.color }}>
              <Zap className="w-4 h-4" />
              <span>{hoveredSkill.name}</span>
            </span>
            <span className="text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 text-[11px]">
              Mastery: {hoveredSkill.level}%
            </span>
          </div>
          <p className="text-slate-300 text-[11px] font-normal pt-1">
            {hoveredSkill.highlight}
          </p>
          <div className="text-[10px] text-slate-500 uppercase tracking-wider pt-1 flex items-center justify-between">
            <span>Category: {hoveredSkill.category.toUpperCase()}</span>
            <span className="text-blue-400">Click to filter</span>
          </div>
        </div>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-3 right-5 pointer-events-none text-[11px] font-mono text-slate-500 hidden sm:block">
        DRAG SPHERE IN 3D SPACE TO EXPLORE
      </div>

    </div>
  );
}
