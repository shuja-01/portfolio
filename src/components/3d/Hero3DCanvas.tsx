'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { sound } from '@/utils/soundEffects';
import { Sparkles, RotateCw, Pause, Eye, Zap, Shield, Cpu, Bot, Layers, CheckCircle2 } from 'lucide-react';

interface Hero3DCanvasProps {
  onSelectBeacon?: (beaconId: string) => void;
  className?: string;
}

interface BeaconData {
  id: string;
  label: string;
  sub: string;
  color: string;
  icon: string;
  angle: number;
  radius: number;
  yOffset: number;
  metric: string;
}

export default function Hero3DCanvas({ onSelectBeacon, className = '' }: Hero3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // UI Controls
  const [activeGeometryMode, setActiveGeometryMode] = useState<'core' | 'neural' | 'torus'>('core');
  const [wireframeOnly, setWireframeOnly] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [hoveredBeacon, setHoveredBeacon] = useState<BeaconData | null>(null);
  const [activeBeacon, setActiveBeacon] = useState<BeaconData | null>(null);
  const [fps, setFps] = useState<number>(60);

  // References for animation loop
  const stateRef = useRef({
    geometryMode: activeGeometryMode,
    wireframe: wireframeOnly,
    rotating: isRotating,
    shockwaveTriggered: false,
    hoveredBeaconId: null as string | null,
  });

  stateRef.current.geometryMode = activeGeometryMode;
  stateRef.current.wireframe = wireframeOnly;
  stateRef.current.rotating = isRotating;

  const beacons: BeaconData[] = [
    {
      id: 'tosca',
      label: 'Tosca L2',
      sub: 'Tricentis Certified',
      color: '#00f5ff',
      icon: '🛡️',
      angle: 0,
      radius: 7.2,
      yOffset: 0.8,
      metric: '99.4% Regression Pass Rate',
    },
    {
      id: 'react',
      label: 'React 19 & Next.js',
      sub: 'Modern SSR Architecture',
      color: '#00ff9d',
      icon: '⚛️',
      angle: (Math.PI * 2) / 5,
      radius: 7.6,
      yOffset: -1.2,
      metric: '95+ Lighthouse Performance',
    },
    {
      id: 'ai',
      label: 'Claude Code & AI',
      sub: 'Autonomous Workflows',
      color: '#c084fc',
      icon: '🤖',
      angle: ((Math.PI * 2) / 5) * 2,
      radius: 6.8,
      yOffset: 1.8,
      metric: 'Structured Extraction Pipelines',
    },
    {
      id: 'api',
      label: 'REST Assured',
      sub: 'Zero-Defect API Suite',
      color: '#38bdf8',
      icon: '⚡',
      angle: ((Math.PI * 2) / 5) * 3,
      radius: 7.4,
      yOffset: -1.0,
      metric: 'RS256 JWT Encryption Checks',
    },
    {
      id: 'ieee',
      label: 'IEEE 10182947',
      sub: 'Deep Learning CNN',
      color: '#ffb020',
      icon: '📑',
      angle: ((Math.PI * 2) / 5) * 4,
      radius: 7.0,
      yOffset: 0.2,
      metric: 'Published Research Author',
    },
  ];

  const triggerShockwave = useCallback(() => {
    stateRef.current.shockwaveTriggered = true;
    sound.playPulse();
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 520;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
    renderer.shadowMap.enabled = false;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.5, 17.5);
    camera.lookAt(0, 0, 0);

    // Dynamic Lights in Cyber Aurora Palette
    const ambientLight = new THREE.AmbientLight(0x060c18, 3.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f5ff, 140, 35);
    cyanLight.position.set(8, 7, 8);
    scene.add(cyanLight);

    const mintLight = new THREE.PointLight(0x00ff9d, 100, 30);
    mintLight.position.set(-8, -6, 6);
    scene.add(mintLight);

    const violetLight = new THREE.PointLight(0xa855f7, 120, 35);
    violetLight.position.set(0, 9, -6);
    scene.add(violetLight);

    // Root 3D Object for Rotation
    const coreRoot = new THREE.Group();
    scene.add(coreRoot);

    // 1. Central Core Meshes
    // 1A. Mode: Quantum Polyhedron (Icosahedron)
    const icoGeom = new THREE.IcosahedronGeometry(3.2, 1);
    const icoInnerMat = new THREE.MeshPhysicalMaterial({
      color: 0x07152c,
      emissive: 0x00f5ff,
      emissiveIntensity: 0.5,
      roughness: 0.1,
      metalness: 0.85,
      transmission: 0.45,
      transparent: true,
      opacity: 0.85,
    });
    const icoMesh = new THREE.Mesh(icoGeom, icoInnerMat);

    const icoWireGeom = new THREE.WireframeGeometry(icoGeom);
    const icoWireMat = new THREE.LineBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.85,
      linewidth: 1,
    });
    const icoWireMesh = new THREE.LineSegments(icoWireGeom, icoWireMat);
    icoMesh.add(icoWireMesh);
    coreRoot.add(icoMesh);

    // 1B. Mode: Torus Knot
    const torusGeom = new THREE.TorusKnotGeometry(2.4, 0.7, 128, 24);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      emissive: 0x581c87,
      emissiveIntensity: 0.4,
      roughness: 0.15,
      metalness: 0.9,
      wireframe: false,
    });
    const torusMesh = new THREE.Mesh(torusGeom, torusMat);
    torusMesh.visible = false;
    coreRoot.add(torusMesh);

    // 1C. Mode: Neural Constellation
    const neuralGroup = new THREE.Group();
    const nodeCount = 52;
    const neuralPositions: THREE.Vector3[] = [];
    const neuralNodeGeom = new THREE.SphereGeometry(0.13, 16, 16);
    const neuralNodeMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff });

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 3.3 + (Math.random() - 0.5) * 0.8;
      const pos = new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
      neuralPositions.push(pos);
      const nodeMesh = new THREE.Mesh(neuralNodeGeom, neuralNodeMat);
      nodeMesh.position.copy(pos);
      neuralGroup.add(nodeMesh);
    }

    // Connect close neighbors with lines
    const linePositions: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = neuralPositions[i].distanceTo(neuralPositions[j]);
        if (dist < 2.0) {
          linePositions.push(
            neuralPositions[i].x, neuralPositions[i].y, neuralPositions[i].z,
            neuralPositions[j].x, neuralPositions[j].y, neuralPositions[j].z
          );
        }
      }
    }
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.55,
    });
    const neuralLines = new THREE.LineSegments(lineGeom, lineMat);
    neuralGroup.add(neuralLines);
    neuralGroup.visible = false;
    coreRoot.add(neuralGroup);

    // 2. Orbital Energy Rings
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const createRing = (radius: number, color: number, tiltX: number, tiltY: number) => {
      const ringGeom = new THREE.RingGeometry(radius - 0.04, radius + 0.04, 96);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = tiltX;
      ringMesh.rotation.y = tiltY;

      // Orbiting energy bead
      const beadGeom = new THREE.SphereGeometry(0.19, 16, 16);
      const beadMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const bead = new THREE.Mesh(beadGeom, beadMat);
      ringMesh.add(bead);

      return { mesh: ringMesh, bead, radius };
    };

    const ring1 = createRing(5.2, 0x00f5ff, Math.PI / 3, 0); // Cyber Cyan
    const ring2 = createRing(6.2, 0x00ff9d, Math.PI / 2.3, Math.PI / 4); // Laser Mint
    const ring3 = createRing(7.2, 0xa855f7, Math.PI / 1.7, -Math.PI / 3); // Hyper Violet
    ringGroup.add(ring1.mesh, ring2.mesh, ring3.mesh);

    // 3. Interactive Satellite Beacons
    const beaconMeshes: { mesh: THREE.Group; data: BeaconData }[] = [];
    const beaconGroup = new THREE.Group();
    scene.add(beaconGroup);

    beacons.forEach((b) => {
      const bGroup = new THREE.Group();
      bGroup.userData = { beaconData: b };

      // Sphere core
      const bGeom = new THREE.SphereGeometry(0.48, 24, 24);
      const bMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(b.color),
        emissive: new THREE.Color(b.color),
        emissiveIntensity: 0.7,
        roughness: 0.15,
        metalness: 0.8,
      });
      const bSphere = new THREE.Mesh(bGeom, bMat);
      bGroup.add(bSphere);

      // Halo ring around beacon
      const haloGeom = new THREE.RingGeometry(0.68, 0.8, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(b.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
      });
      const halo = new THREE.Mesh(haloGeom, haloMat);
      halo.rotation.x = Math.PI / 2;
      bGroup.add(halo);

      // Positioning in 3D orbit
      const x = Math.cos(b.angle) * b.radius;
      const z = Math.sin(b.angle) * b.radius;
      bGroup.position.set(x, b.yOffset, z);

      beaconGroup.add(bGroup);
      beaconMeshes.push({ mesh: bGroup, data: b });
    });

    // 4. Shockwave Particle Emitter
    const shockwaveCount = 130;
    const shockGeom = new THREE.BufferGeometry();
    const shockPositions = new Float32Array(shockwaveCount * 3);
    const shockVelocities: THREE.Vector3[] = [];

    for (let i = 0; i < shockwaveCount; i++) {
      shockPositions[i * 3] = 0;
      shockPositions[i * 3 + 1] = 0;
      shockPositions[i * 3 + 2] = 0;
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize().multiplyScalar(Math.random() * 0.28 + 0.16);
      shockVelocities.push(vel);
    }

    shockGeom.setAttribute('position', new THREE.BufferAttribute(shockPositions, 3));
    const shockMat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 0.3,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    const shockParticles = new THREE.Points(shockGeom, shockMat);
    scene.add(shockParticles);

    // Mouse Interaction & Gaze Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseGazeX = 0;
    let mouseGazeY = 0;

    let cachedRect = container.getBoundingClientRect();
    const updateRect = () => {
      if (container) cachedRect = container.getBoundingClientRect();
    };
    container.addEventListener('mouseenter', updateRect, { passive: true });
    window.addEventListener('resize', updateRect, { passive: true });

    const onPointerMove = (e: MouseEvent) => {
      const rect = cachedRect;
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.x = normX;
      mouse.y = normY;

      // Realtime Gaze parallax
      mouseGazeX = normX * 0.45;
      mouseGazeY = normY * 0.35;

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotationY += deltaX * 0.007;
        targetRotationX += deltaY * 0.007;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const interactiveTargets = beaconMeshes.map((b) => b.mesh.children[0]);
      const intersects = raycaster.intersectObjects(interactiveTargets, false);

      if (intersects.length > 0) {
        const hitGroup = intersects[0].object.parent;
        if (hitGroup && hitGroup.userData.beaconData) {
          const clickedBeacon = hitGroup.userData.beaconData as BeaconData;
          setActiveBeacon(clickedBeacon);
          sound.playClick();
          triggerShockwave();
          if (onSelectBeacon) {
            onSelectBeacon(clickedBeacon.id);
          }
        }
      }
    };

    container.addEventListener('mousemove', onPointerMove);
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('click', onClick);

    // Touch Support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        targetRotationY += deltaX * 0.007;
        targetRotationX += deltaY * 0.007;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let shockProgress = 1.0;
    let frameCount = 0;
    let lastFpsTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // FPS tracking
      frameCount++;
      if (performance.now() - lastFpsTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastFpsTime = performance.now();
      }

      // Geometry Mode Switch Visibility
      const currentMode = stateRef.current.geometryMode;
      icoMesh.visible = currentMode === 'core';
      torusMesh.visible = currentMode === 'torus';
      neuralGroup.visible = currentMode === 'neural';

      // Wireframe toggle
      const isWire = stateRef.current.wireframe;
      icoInnerMat.wireframe = isWire;
      torusMat.wireframe = isWire;

      // Rotation & Drag Physics + Cursor Gaze Tracking
      if (stateRef.current.rotating) {
        targetRotationY += 0.005;
        targetRotationX = Math.sin(elapsed * 0.5) * 0.15;
      }

      // Smooth inertia lerp with cursor gaze influence
      const finalTargetY = targetRotationY + mouseGazeX;
      const finalTargetX = targetRotationX - mouseGazeY;

      coreRoot.rotation.y += (finalTargetY - coreRoot.rotation.y) * 0.08;
      coreRoot.rotation.x += (finalTargetX - coreRoot.rotation.x) * 0.08;

      // Orbit Beacons Rotation
      beaconGroup.rotation.y += 0.004;
      beaconMeshes.forEach(({ mesh }, idx) => {
        mesh.rotation.y = -beaconGroup.rotation.y;
        mesh.position.y += Math.sin(elapsed * 2 + idx) * 0.004;
      });

      // Rings and beads movement
      ring1.mesh.rotation.z += 0.008;
      ring2.mesh.rotation.z -= 0.006;
      ring3.mesh.rotation.z += 0.005;

      const beadAngle1 = elapsed * 1.5;
      ring1.bead.position.set(Math.cos(beadAngle1) * ring1.radius, Math.sin(beadAngle1) * ring1.radius, 0);

      const beadAngle2 = -elapsed * 1.2;
      ring2.bead.position.set(Math.cos(beadAngle2) * ring2.radius, Math.sin(beadAngle2) * ring2.radius, 0);

      const beadAngle3 = elapsed * 0.9;
      ring3.bead.position.set(Math.cos(beadAngle3) * ring3.radius, Math.sin(beadAngle3) * ring3.radius, 0);

      // Raycasting for Beacons
      raycaster.setFromCamera(mouse, camera);
      const interactiveTargets = beaconMeshes.map((b) => b.mesh.children[0]);
      const intersects = raycaster.intersectObjects(interactiveTargets, false);

      if (intersects.length > 0) {
        const hitGroup = intersects[0].object.parent;
        if (hitGroup && hitGroup.userData.beaconData) {
          const hoveredData = hitGroup.userData.beaconData as BeaconData;
          if (stateRef.current.hoveredBeaconId !== hoveredData.id) {
            stateRef.current.hoveredBeaconId = hoveredData.id;
            setHoveredBeacon(hoveredData);
            sound.playHover();
          }
          container.style.cursor = 'pointer';
        }
      } else {
        if (stateRef.current.hoveredBeaconId !== null) {
          stateRef.current.hoveredBeaconId = null;
          setHoveredBeacon(null);
          container.style.cursor = isDragging ? 'grabbing' : 'grab';
        }
      }

      // Shockwave update
      if (stateRef.current.shockwaveTriggered) {
        stateRef.current.shockwaveTriggered = false;
        shockProgress = 0.0;
        shockMat.opacity = 1.0;
        const posAttr = shockGeom.getAttribute('position') as THREE.BufferAttribute;
        for (let i = 0; i < shockwaveCount; i++) {
          posAttr.setXYZ(i, 0, 0, 0);
        }
        posAttr.needsUpdate = true;
      }

      if (shockProgress < 1.0) {
        shockProgress += delta * 1.6;
        shockMat.opacity = Math.max(0, 1.0 - shockProgress);
        const posAttr = shockGeom.getAttribute('position') as THREE.BufferAttribute;
        for (let i = 0; i < shockwaveCount; i++) {
          const vx = shockVelocities[i].x * (shockProgress * 15);
          const vy = shockVelocities[i].y * (shockProgress * 15);
          const vz = shockVelocities[i].z * (shockProgress * 15);
          posAttr.setXYZ(i, vx, vy, vz);
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mouseenter', updateRect);
      window.removeEventListener('resize', updateRect);
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('click', onClick);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);

      icoGeom.dispose();
      icoInnerMat.dispose();
      icoWireGeom.dispose();
      icoWireMat.dispose();
      torusGeom.dispose();
      torusMat.dispose();
      neuralNodeGeom.dispose();
      neuralNodeMat.dispose();
      lineGeom.dispose();
      lineMat.dispose();
      shockGeom.dispose();
      shockMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [triggerShockwave, onSelectBeacon]);

  return (
    <div className={`relative w-full h-[520px] rounded-3xl overflow-hidden editorial-card border border-[#00f5ff]/25 bg-[#050914]/85 shadow-2xl flex flex-col ${className}`}>
      
      {/* Top Telemetry Header Bar */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 py-3.5 bg-[#03060f]/90 backdrop-blur-md border-b border-[#00f5ff]/15 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9d] animate-pulse"></span>
          <span className="text-white font-bold tracking-wider text-[11px]">
            CYBERNETIC 3D QUANTUM CORE
          </span>
          <span className="text-[#00f5ff]/60 hidden sm:inline">// AURORA ENGINE</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-[#00ff9d] bg-[#00ff9d]/10 border border-[#00ff9d]/40 px-2 py-0.5 rounded-md font-semibold">
            {fps} FPS
          </span>
          <span className="text-[10px] text-[#00f5ff] bg-[#00f5ff]/10 border border-[#00f5ff]/30 px-2 py-0.5 rounded-md hidden sm:inline-block">
            CURSOR REACTIVE // DRAG 360°
          </span>
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Move your cursor to guide 3D gaze. Click and drag to rotate 360°. Click floating beacons to inspect."
      />

      {/* Hovered / Selected Holographic HUD Overlay */}
      {(hoveredBeacon || activeBeacon) && (
        <div className="absolute top-16 left-5 right-5 sm:right-auto sm:max-w-xs z-20 p-3.5 rounded-2xl bg-[#030712]/95 backdrop-blur-xl border border-[#00f5ff]/40 shadow-2xl space-y-1.5 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
              <span>{(hoveredBeacon || activeBeacon)?.icon}</span>
              <span>{(hoveredBeacon || activeBeacon)?.label}</span>
            </span>
            <span className="text-[10px] font-mono text-[#00ff9d] font-semibold bg-[#00ff9d]/10 px-2 py-0.5 rounded border border-[#00ff9d]/40">
              ACTIVE NODE
            </span>
          </div>
          <p className="text-[11px] font-mono text-slate-300">
            {(hoveredBeacon || activeBeacon)?.sub}
          </p>
          <div className="pt-1 border-t border-slate-800/80 text-[10px] font-mono text-[#00f5ff] font-medium">
            🎯 {(hoveredBeacon || activeBeacon)?.metric}
          </div>
        </div>
      )}

      {/* Interactive Controls Overlay Bar */}
      <div className="absolute bottom-3 inset-x-3 sm:inset-x-5 z-20 flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl bg-[#030712]/90 backdrop-blur-md border border-[#00f5ff]/20">
        
        {/* Geometry Mode Selector */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 font-mono text-[11px]">
          <button
            onClick={() => {
              setActiveGeometryMode('core');
              sound.playClick();
            }}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeGeometryMode === 'core'
                ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Quantum Core
          </button>
          <button
            onClick={() => {
              setActiveGeometryMode('neural');
              sound.playClick();
            }}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeGeometryMode === 'neural'
                ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Neural Net
          </button>
          <button
            onClick={() => {
              setActiveGeometryMode('torus');
              sound.playClick();
            }}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeGeometryMode === 'torus'
                ? 'bg-[#00f5ff] text-slate-950 font-bold shadow-md shadow-[#00f5ff]/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cyber Knot
          </button>
        </div>

        {/* Action Toggles */}
        <div className="flex items-center gap-1.5 font-mono text-[11px]">
          <button
            onClick={triggerShockwave}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#00f5ff]/15 hover:bg-[#00f5ff]/25 text-[#00f5ff] hover:text-white border border-[#00f5ff]/40 transition-all font-semibold shadow-sm"
            title="Fire a 3D particle shockwave pulse"
          >
            <Zap className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span className="hidden sm:inline">Energy</span> Pulse
          </button>

          <button
            onClick={() => {
              setWireframeOnly((prev) => !prev);
              sound.playClick();
            }}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border transition-all ${
              wireframeOnly
                ? 'bg-[#00f5ff] border-[#00f5ff] text-slate-950 font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
            title="Toggle wireframe mode"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Wire</span>
          </button>

          <button
            onClick={() => {
              setIsRotating((prev) => !prev);
              sound.playClick();
            }}
            className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all"
            title={isRotating ? 'Pause rotation' : 'Resume rotation'}
          >
            {isRotating ? <Pause className="w-3.5 h-3.5" /> : <RotateCw className="w-3.5 h-3.5 text-[#00f5ff]" />}
          </button>
        </div>

      </div>

    </div>
  );
}
