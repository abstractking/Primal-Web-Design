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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

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
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Create honey particles on mouse move
      if (Math.random() > 0.7) {
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
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(246, 166, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flowing honey waves
      const time = Date.now() / 1000;
      ctx.fillStyle = 'rgba(246, 166, 0, 0.15)';

      // Create wave pattern
      for (let x = 0; x < canvas.width; x += 40) {
        for (let y = 0; y < canvas.height; y += 40) {
          const wave1 = Math.sin(x * 0.002 + time * 0.3) * 15;
          const wave2 = Math.cos(y * 0.002 + time * 0.4) * 15;
          const distance = Math.hypot(x - mouseRef.current.x, y - mouseRef.current.y);

          const size = Math.max(2, 8 - distance * 0.01);

          ctx.beginPath();
          ctx.arc(
            x + wave1 + (distance < 150 ? (mouseRef.current.x - x) * 0.2 : 0),
            y + wave2 + (distance < 150 ? (mouseRef.current.y - y) * 0.2 : 0),
            size,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = honeyColors[Math.floor(Math.random() * honeyColors.length)];
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
      const angle = Math.atan2(mouseRef.current.y - cursorPos.y, mouseRef.current.x - cursorPos.x);

      // Bee body (yellow/gold)
      ctx.fillStyle = 'rgb(246, 166, 0)';
      ctx.beginPath();
      ctx.ellipse(
        cursorPos.x,
        cursorPos.y,
        beeSize * 0.6,
        beeSize * 0.4,
        angle,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Bee stripes (black)
      ctx.strokeStyle = 'rgb(18, 18, 18)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cursorPos.x - 4, cursorPos.y, 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cursorPos.x + 4, cursorPos.y, 3, 0, Math.PI * 2);
      ctx.stroke();

      // Bee wings
      ctx.strokeStyle = 'rgba(18, 18, 18, 0.4)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        const wingOffset = i === 0 ? -8 : 8;
        ctx.ellipse(
          cursorPos.x + wingOffset,
          cursorPos.y - 8,
          6,
          10,
          Math.sin(Date.now() / 100) * 0.5,
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
      ctx.arc(cursorPos.x, cursorPos.y, rippleRadius, 0, Math.PI * 2);
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
  }, []);

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
