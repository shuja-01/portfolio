'use client';

import React, { useEffect, useState, useRef } from 'react';
import { sound } from '@/utils/soundEffects';
import { Compass, ChevronUp, Activity } from 'lucide-react';

interface Sector {
  id: string;
  name: string;
  short: string;
  targetId: string;
}

const SECTORS: Sector[] = [
  { id: '01', name: 'CORE ARCHITECTURE', short: 'HERO', targetId: 'hero' },
  { id: '02', name: 'INTELLIGENCE PROFILE', short: 'ABOUT', targetId: 'about' },
  { id: '03', name: 'MISSION TIMELINE', short: 'EXP', targetId: 'journey' },
  { id: '04', name: 'QUANTUM MATRIX', short: 'SKILLS', targetId: 'skills' },
  { id: '05', name: 'SANDBOX KERNEL', short: 'TESTS', targetId: 'projects' },
  { id: '06', name: 'IEEE RESEARCH', short: 'PAPERS', targetId: 'publications' },
  { id: '07', name: 'SECURE UPLINK', short: 'COMMS', targetId: 'contact' },
];

export default function ScrollTelemetryHUD() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [currentSector, setCurrentSector] = useState<Sector>(SECTORS[0]);
  const [scrollVelocity, setScrollVelocity] = useState<number>(0);
  const [isWarping, setIsWarping] = useState<boolean>(false);

  const lastScrollY = useRef(0);
  const lastTime = useRef(performance.now());
  const warpSoundCooldown = useRef(0);
  const ticking = useRef(false);
  const lastSectorId = useRef(SECTORS[0].id);
  const lastProgress = useRef(0);

  useEffect(() => {
    const checkScroll = () => {
      ticking.current = false;
      const currentY = window.scrollY;
      const now = performance.now();
      const dt = Math.max(now - lastTime.current, 16);
      const dy = Math.abs(currentY - lastScrollY.current);

      // Velocity in px/sec
      const velocity = Math.round((dy / dt) * 1000);
      setScrollVelocity((prev) => (Math.abs(prev - velocity) > 100 ? velocity : prev));

      // Trigger warp effect when scrolling aggressively
      if (velocity > 1200) {
        setIsWarping(true);
        if (now - warpSoundCooldown.current > 1800) {
          sound.playWarp();
          warpSoundCooldown.current = now;
        }
      } else if (velocity < 400) {
        setIsWarping(false);
      }

      lastScrollY.current = currentY;
      lastTime.current = now;

      // Calculate total scroll percentage
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalDocHeight > 0 ? Math.min(Math.max(Math.round((currentY / totalDocHeight) * 100), 0), 100) : 0;
      if (Math.abs(progress - lastProgress.current) >= 1) {
        lastProgress.current = progress;
        setScrollProgress(progress);
      }

      // Determine active sector based on section scroll offsets (lightweight check)
      const viewportMid = currentY + window.innerHeight * 0.45;
      for (let i = SECTORS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTORS[i].targetId);
        if (el) {
          if (el.offsetTop <= viewportMid) {
            if (lastSectorId.current !== SECTORS[i].id) {
              lastSectorId.current = SECTORS[i].id;
              setCurrentSector(SECTORS[i]);
            }
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(checkScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    sound.playClick();
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SVG Ring Progress calculations
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <aside
      aria-label="3D Orbital Scroll Telemetry"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 select-none pointer-events-auto"
    >
      {/* 3D Gauge HUD Pod */}
      <div className={`p-2 rounded-2xl bg-[#040711]/90 backdrop-blur-md border transition-all duration-300 shadow-2xl flex flex-col items-center ${
        isWarping 
          ? 'border-[#00f5ff] ring-2 ring-[#00f5ff]/40 shadow-[#00f5ff]/30 scale-105' 
          : 'border-[#00f5ff]/20 hover:border-[#00f5ff]/50'
      }`}>
        
        {/* Orbital Progress Ring */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            {/* Background circle */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="currentColor"
              strokeWidth="2.5"
              fill="transparent"
              className="text-white/10"
            />
            {/* Active animated progress circle */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="url(#orbitGradient)"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
            <defs>
              <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f5ff" />
                <stop offset="60%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#00ff9d" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Digital Percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-xs font-black text-white tracking-tighter">
              {scrollProgress}%
            </span>
          </div>
        </div>

        {/* Real-time Velocity / Warp Indicator */}
        <div className="mt-1 flex items-center gap-1 font-mono text-[8px] text-cyan-400">
          <Activity className={`w-2.5 h-2.5 ${isWarping ? 'text-[#00ff9d] animate-spin' : 'text-[#00f5ff]'}`} />
          <span>{isWarping ? 'WARP' : `${scrollVelocity}`}</span>
        </div>

        {/* Current Sector ID */}
        <div className="mt-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[8px] text-[#a855f7] font-semibold">
          SEC.{currentSector.id}
        </div>
      </div>

      {/* Quick Teleport Waypoint Matrix */}
      <nav aria-label="Waypoint Matrix" className="flex flex-col items-center gap-1.5 p-1.5 rounded-full bg-[#040711]/80 backdrop-blur-md border border-white/10 shadow-xl">
        {SECTORS.map((sector) => {
          const isActive = currentSector.id === sector.id;
          return (
            <button
              key={sector.id}
              onClick={() => scrollToSection(sector.targetId)}
              title={`${sector.id}: ${sector.name}`}
              className={`group relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-[#00f5ff] to-[#a855f7] text-black font-black scale-110 shadow-lg shadow-[#00f5ff]/30 ring-1 ring-white/50'
                  : 'text-white/40 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="font-mono text-[8px] font-bold">
                {sector.short.slice(0, 2)}
              </span>

              {/* Tooltip on Hover */}
              <span className="pointer-events-none absolute right-8 px-2 py-0.5 rounded bg-black/90 border border-[#00f5ff]/30 font-mono text-[9px] text-[#00f5ff] tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
                {sector.name}
              </span>
            </button>
          );
        })}

        {/* Top return arrow */}
        <button
          onClick={() => scrollToSection('hero')}
          title="Return to Core Architecture"
          className="w-5 h-5 flex items-center justify-center rounded-full text-white/30 hover:text-[#00f5ff] hover:bg-white/10 transition-colors mt-1"
        >
          <ChevronUp className="w-3 h-3" />
        </button>
      </nav>
    </aside>
  );
}
