'use client';

import React, { useRef } from 'react';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default 10)
  perspective?: number; // Perspective distance (default 1000)
  scale?: number; // Scale on hover (default 1.02)
  glare?: boolean; // Enable specular glare overlay (default true)
}

export default function Card3DTilt({
  children,
  className = '',
  maxTilt = 8,
  perspective = 1000,
  scale = 1.02,
  glare = true,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const xRatio = x / width - 0.5;
    const yRatio = y / height - 0.5;

    const rotateY = xRatio * maxTilt * 2;
    const rotateX = -yRatio * maxTilt * 2;

    // Mutate DOM styles directly for maximum 120 FPS performance with 0 React renders
    card.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;

    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0.18';
      glareRef.current.style.background = `radial-gradient(circle 320px at ${(x / width) * 100}% ${(y / height) * 100}%, rgba(255, 255, 255, 0.25), transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}

      {/* Dynamic Specular 3D Glare */}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30 overflow-hidden opacity-0 will-change-[opacity,background]"
        />
      )}
    </div>
  );
}
