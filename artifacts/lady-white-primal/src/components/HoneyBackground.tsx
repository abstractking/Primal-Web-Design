import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

export default function HoneyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const lastParticleTimeRef = useRef(0);

  // Honey color palette (golden amber tones)
  const honeyColors = [
    'rgba(246, 166, 0, 0.8)',    // Primary golden
    'rgba(218, 140, 0, 0.7)',    // Darker amber
    'rgba(255, 180, 20, 0.6)',   // Lighter gold
    'rgba(200, 130, 0, 0.5)',    // Deep amber
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Throttle particle creation to every 50ms to prevent memory bloat
      const now = Date.now();
      if (now - lastParticleTimeRef.current > 50) {
        lastParticleTimeRef.current = now;
        
        // Create honey particles on mouse move
        if (Math.random() > 0.6 && particlesRef.current.length < 150) {
          for (let i = 0; i < 2; i++) {
            particlesRef.current.push({
              x: e.clientX + (Math.random() - 0.5) * 40,
              y: e.clientY + (Math.random() - 0.5) * 40,
              vx: (Math.random() - 0.5) * 4,
              vy: (Math.random() - 0.5) * 4 - 2,
              life: 1,
              size: Math.random() * 4 + 2,
            });
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(246, 166, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flowing honey waves
      const time = Date.now() / 1000;

      // Create wave pattern - optimized grid spacing
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const wave1 = Math.sin(x * 0.002 + time * 0.3) * 15;
          const wave2 = Math.cos(y * 0.002 + time * 0.4) * 15;
          const distance = Math.hypot(x - mouseRef.current.x, y - mouseRef.current.y);

          const size = Math.max(2, 8 - distance * 0.01);
          
          // Cache color selection for performance
          const colorIndex = (Math.floor(x / gridSize) + Math.floor(y / gridSize)) % honeyColors.length;

          ctx.beginPath();
          ctx.arc(
            x + wave1 + (distance < 150 ? (mouseRef.current.x - x) * 0.2 : 0),
            y + wave2 + (distance < 150 ? (mouseRef.current.y - y) * 0.2 : 0),
            size,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = honeyColors[colorIndex];
          ctx.fill();
        }
      }

      // Draw large ambient honey drops
      ctx.fillStyle = 'rgba(246, 166, 0, 0.25)';
      for (let i = 0; i < 3; i++) {
        const x = canvas.width / 3 + i * (canvas.width / 3);
        const y = canvas.height / 3 + Math.sin(time * 0.2 + i) * 30;
        ctx.beginPath();
        ctx.arc(x, y, 60 + Math.sin(time * 0.3 + i) * 20, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1; // gravity
        p.life -= 0.01;

        if (p.life > 0) {
          ctx.fillStyle = `rgba(246, 166, 0, ${p.life * 0.6})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });

      // Draw bee cursor
      const beeSize = 24;
      const beeX = mouseRef.current.x;
      const beeY = mouseRef.current.y;

      // Bee body (yellow/gold)
      ctx.fillStyle = 'rgb(246, 166, 0)';
      ctx.beginPath();
      ctx.ellipse(
        beeX,
        beeY,
        beeSize * 0.6,
        beeSize * 0.4,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Bee stripes (black)
      ctx.strokeStyle = 'rgb(18, 18, 18)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(beeX - 4, beeY, 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(beeX + 4, beeY, 3, 0, Math.PI * 2);
      ctx.stroke();

      // Bee wings - animated
      ctx.strokeStyle = 'rgba(18, 18, 18, 0.4)';
      ctx.lineWidth = 1;
      const wingFlap = Math.sin(time * 10) * 0.3;
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        const wingOffset = i === 0 ? -8 : 8;
        ctx.ellipse(
          beeX + wingOffset,
          beeY - 8,
          6,
          10,
          wingFlap,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      // Draw distortion ripple around bee (affects honey)
      const rippleRadius = 80 + Math.sin(time * 2) * 20;
      ctx.strokeStyle = 'rgba(246, 166, 0, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(beeX, beeY, rippleRadius, 0, Math.PI * 2);
      ctx.stroke();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [honeyColors]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        cursor: 'none',
      }}
    />
  );
}
