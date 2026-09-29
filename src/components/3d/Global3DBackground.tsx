'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Global3DBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return; // Fallback gracefully if WebGL not supported
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Constellation Cloud
    const particleCount = 750;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color('#387bff'), // Cobalt
      new THREE.Color('#38bdf8'), // Sky
      new THREE.Color('#10b981'), // Emerald
      new THREE.Color('#818cf8'), // Indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      scales[i] = Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Custom Particle Texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
      gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.6,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.65,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Floating 3D Geometric Nodes in Background
    const floatingGroup = new THREE.Group();
    const floatingMeshes: THREE.Mesh[] = [];

    const geomOcta = new THREE.OctahedronGeometry(2.5, 0);
    const geomIco = new THREE.IcosahedronGeometry(2, 0);
    const geomBox = new THREE.BoxGeometry(2, 2, 2);

    const wireMatCobalt = new THREE.MeshBasicMaterial({
      color: 0x387bff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    const wireMatEmerald = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });

    const wireMatViolet = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });

    const geoms = [geomOcta, geomIco, geomBox];
    const mats = [wireMatCobalt, wireMatEmerald, wireMatViolet];

    for (let i = 0; i < 9; i++) {
      const mesh = new THREE.Mesh(
        geoms[i % geoms.length],
        mats[i % mats.length]
      );
      mesh.position.set(
        (Math.random() - 0.5) * 110,
        (Math.random() - 0.5) * 140,
        (Math.random() - 0.5) * 50 - 15
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      floatingGroup.add(mesh);
      floatingMeshes.push(mesh);
    }
    scene.add(floatingGroup);

    // Mouse and Scroll tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow majestic rotation
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.sin(elapsedTime * 0.015) * 0.05;

      // Rotate floating geometric nodes
      floatingMeshes.forEach((mesh, idx) => {
        mesh.rotation.x += 0.003 * (idx % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.004 * (idx % 3 === 0 ? 1 : -1);
        mesh.position.y += Math.sin(elapsedTime * 0.5 + idx) * 0.02;
      });

      // Camera responds smoothly to mouse and scroll
      targetCameraX = mouseX * 5;
      targetCameraY = mouseY * 4 - (scrollY * 0.025);

      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      geoms.forEach((g) => g.dispose());
      mats.forEach((m) => m.dispose());
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
      style={{
        background: 'radial-gradient(ellipse at 50% 10%, #0d1527 0%, #070a12 60%, #04060a 100%)',
      }}
    />
  );
}
