'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  maxLife: number;
  life: number;
}

export default function Cursor3DInteractive() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const coordsTextRef = useRef<HTMLSpanElement>(null);
  const lockBadgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check if touch device or coarse pointer
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Mutable state container to completely avoid React re-renders on mousemove
    const state = {
      mouseX: -200,
      mouseY: -200,
      prevX: -200,
      prevY: -200,
      speed: 0,
      ringX: -200,
      ringY: -200,
      ringAngle: 0,
      isHovered: false,
      isClicking: false,
      idleTimer: 0,
      isIdle: true,
      lastActive: performance.now(),
    };

    const particles: Particle[] = [];
    const particleColors = ['#00f5ff', '#a855f7', '#00ff9d', '#38bdf8'];

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - state.prevX;
      const dy = e.clientY - state.prevY;
      const speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40);

      state.speed = speed;
      state.prevX = state.mouseX;
      state.prevY = state.mouseY;
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      state.lastActive = performance.now();
      state.isIdle = false;

      // Update HUD directly without React re-renders
      if (hudRef.current) {
        hudRef.current.style.opacity = '1';
        hudRef.current.style.transform = `translate3d(${e.clientX + 22}px, ${e.clientY - 12}px, 0)`;
      }
      if (coordsTextRef.current) {
        coordsTextRef.current.textContent = `X:${Math.round(e.clientX)} Y:${Math.round(e.clientY)}`;
      }

      // Spawn stardust particles (max 2 per move event to preserve CPU)
      if (speed > 2 && particles.length < 32) {
        const spreadAngle = Math.random() * Math.PI * 2;
        const particleSpeed = Math.random() * 1.5 + 0.5;
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: -dx * 0.12 + Math.cos(spreadAngle) * particleSpeed,
          vy: -dy * 0.12 + Math.sin(spreadAngle) * particleSpeed,
          size: Math.random() * 2 + 1.2,
          color: particleColors[(particles.length) % particleColors.length],
          alpha: 0.85,
          maxLife: 26,
          life: 0,
        });
      }
    };

    const onMouseDown = () => {
      state.isClicking = true;
      // Burst 8 particles
      if (particles.length < 24) {
        for (let i = 0; i < 8; i++) {
          const angle = (Math.PI * 2 * i) / 8;
          particles.push({
            x: state.mouseX,
            y: state.mouseY,
            vx: Math.cos(angle) * 3,
            vy: Math.sin(angle) * 3,
            size: 2.2,
            color: '#00f5ff',
            alpha: 1,
            maxLife: 28,
            life: 0,
          });
        }
      }
    };

    const onMouseUp = () => {
      state.isClicking = false;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isTargetInteractive = !!(
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-target')
      );

      if (state.isHovered !== isTargetInteractive) {
        state.isHovered = isTargetInteractive;
        if (lockBadgeRef.current) {
          lockBadgeRef.current.style.display = isTargetInteractive ? 'inline' : 'none';
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Smooth 60FPS RAF Render Loop
    let animId: number;
    const render = () => {
      animId = requestAnimationFrame(render);

      const now = performance.now();
      if (!state.isIdle && now - state.lastActive > 2000) {
        state.isIdle = true;
        if (hudRef.current) {
          hudRef.current.style.opacity = '0';
        }
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw and update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.92;
        p.vy *= 0.92;

        const progress = p.life / p.maxLife;
        if (progress >= 1) {
          particles.splice(i, 1);
          continue;
        }

        const currentAlpha = (1 - progress) * p.alpha;
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Reticle Ring
      if (state.mouseX > 0 && state.mouseY > 0) {
        const lerpSpeed = state.isHovered ? 0.35 : 0.22;
        state.ringX += (state.mouseX - state.ringX) * lerpSpeed;
        state.ringY += (state.mouseY - state.ringY) * lerpSpeed;
        state.ringAngle += 0.03 + state.speed * 0.002;

        const targetRadius = state.isHovered ? 26 : state.isClicking ? 14 : 18;

        ctx.save();
        ctx.translate(state.ringX, state.ringY);
        ctx.rotate(state.ringAngle);

        ctx.strokeStyle = state.isHovered ? 'rgba(0, 245, 255, 0.9)' : 'rgba(168, 85, 247, 0.65)';
        ctx.lineWidth = state.isHovered ? 1.6 : 1.2;
        ctx.setLineDash([4, 5]);

        ctx.beginPath();
        ctx.arc(0, 0, targetRadius, 0, Math.PI * 2);
        ctx.stroke();

        if (state.isHovered) {
          ctx.setLineDash([]);
          ctx.strokeStyle = '#00ff9d';
          ctx.lineWidth = 1.4;
          const tick = 5;
          [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].forEach((rot) => {
            const tx = Math.cos(rot) * targetRadius;
            const ty = Math.sin(rot) * targetRadius;
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(tx + Math.cos(rot) * tick, ty + Math.sin(rot) * tick);
            ctx.stroke();
          });
        }

        ctx.restore();

        // Center dot
        ctx.globalAlpha = 1;
        ctx.fillStyle = state.isHovered ? '#00f5ff' : '#ffffff';
        ctx.beginPath();
        ctx.arc(state.mouseX, state.mouseY, state.isClicking ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      />

      {/* Zero-rerender DOM-level Telemetry Pill */}
      <div
        ref={hudRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-50 font-mono text-[9px] tracking-widest text-[#00f5ff] select-none opacity-0 transition-opacity duration-300 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm border border-[#00f5ff]/30 shadow-lg will-change-transform"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
        <span ref={coordsTextRef}>X:0 Y:0</span>
        <span ref={lockBadgeRef} className="text-[#a855f7] font-bold hidden">
          [LOCK]
        </span>
      </div>
    </>
  );
}
