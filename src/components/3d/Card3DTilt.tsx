'use client';

import React, { useRef, useState, useCallback } from 'react';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default 12)
  perspective?: number; // Perspective distance (default 1000)
  scale?: number; // Scale on hover (default 1.02)
  glare?: boolean; // Enable specular glare overlay (default true)
}

export default function Card3DTilt({
  children,
  className = '',
  maxTilt = 10,
  perspective = 1000,
  scale = 1.02,
  glare = true,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;

      // Calculate tilt angles (-0.5 to 0.5 range)
      const xRatio = (x / width) - 0.5;
      const yRatio = (y / height) - 0.5;

      const rotateY = xRatio * maxTilt * 2;
      const rotateX = -yRatio * maxTilt * 2;

      setTransformStyle(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      if (glare) {
        setGlarePos({
          x: (x / width) * 100,
          y: (y / height) * 100,
          opacity: 0.18,
        });
      }
    },
    [maxTilt, perspective, scale, glare]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}

      {/* Dynamic Specular 3D Glare */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30 overflow-hidden"
          style={{
            opacity: isHovered ? glarePos.opacity : 0,
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.22), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
}
