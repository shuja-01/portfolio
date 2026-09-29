'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Global3DBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false, // Disabling antialias on background canvas saves huge fill-rate
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      600
    );
    camera.position.z = 50;

    renderer.setSize(window.innerWidth, window.innerHeight);
    // Limit pixel ratio to 1.25 max to prevent high-DPI fill rate bottlenecks
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    container.appendChild(renderer.domElement);

    // Ambient & Accent Lights
    const ambientLight = new THREE.AmbientLight(0x0a1020, 2.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f5ff, 45, 120);
    cyanLight.position.set(20, 20, 25);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0xa855f7, 40, 120);
    violetLight.position.set(-20, -20, 20);
    scene.add(violetLight);

    // Optimized Particle Constellation (380 particles, static buffer, GPU-scaled)
    const particleCount = 380;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const themeColors = [
      new THREE.Color('#00f5ff'), // Cyber Cyan
      new THREE.Color('#a855f7'), // Hyper Violet
      new THREE.Color('#00ff9d'), // Laser Mint
      new THREE.Color('#38bdf8'), // Sky Flare
      new THREE.Color('#ffffff'), // Star Core
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const col = themeColors[i % themeColors.length];
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Lightweight circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(0, 245, 255, 0.8)');
      gradient.addColorStop(0.7, 'rgba(168, 85, 247, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.0,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Floating Geometric Crystal Polyhedra (reduced to 7 light wireframe meshes)
    const crystalGroup = new THREE.Group();
    const crystalMeshes: THREE.Mesh[] = [];

    const geomIco = new THREE.IcosahedronGeometry(2.0, 0);
    const geomOcta = new THREE.OctahedronGeometry(2.4, 0);
    const geomTorus = new THREE.TorusGeometry(2.0, 0.4, 8, 24);

    const mats = [
      new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        wireframe: true,
        transparent: true,
        opacity: 0.16,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x00ff9d,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      }),
    ];

    const geoms = [geomIco, geomOcta, geomTorus];

    for (let i = 0; i < 7; i++) {
      const mesh = new THREE.Mesh(geoms[i % geoms.length], mats[i % mats.length]);
      mesh.position.set(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 180,
        (Math.random() - 0.5) * 50 - 10
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      crystalGroup.add(mesh);
      crystalMeshes.push(mesh);
    }
    scene.add(crystalGroup);

    // Mutable state for zero-overhead event tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetCamX = 0;
    let targetCamY = 0;
    let targetCamZ = 50;

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let warpFactor = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Scroll physics and Warp calculation
      const absVelocity = Math.abs(scrollVelocity);
      const targetWarp = Math.min(absVelocity * 0.05, 3.0);
      warpFactor += (targetWarp - warpFactor) * 0.15;
      scrollVelocity *= 0.88; // decay velocity

      // Camera responds smoothly to Mouse Movement (Parallax & Depth Tilt)
      targetCamX = mouseX * 5;
      targetCamY = mouseY * 3 - (window.scrollY * 0.018);
      targetCamZ = 50 - Math.min(warpFactor * 5, 18);

      camera.position.x += (targetCamX - camera.position.x) * 0.06;
      camera.position.y += (targetCamY - camera.position.y) * 0.06;
      camera.position.z += (targetCamZ - camera.position.z) * 0.08;

      // 3D Warp Speed: Hardware-accelerated Z stretch without CPU buffer rebuilding!
      particles.scale.z = 1 + warpFactor * 3.2;
      particles.position.x = mouseX * 3;
      particles.position.y = mouseY * 2;
      particles.rotation.y = elapsed * 0.015;
      particles.rotation.x = Math.sin(elapsed * 0.015) * 0.04;

      // Rotate floating wireframe crystals
      crystalMeshes.forEach((mesh, idx) => {
        mesh.rotation.x += 0.003 * (idx % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.004 * (idx % 3 === 0 ? 1 : -1);
      });

      renderer.render(scene, camera);
    };

    animate();

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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 15%, #081026 0%, #040711 55%, #020409 100%)',
      }}
    />
  );
}
