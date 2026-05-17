'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

export function MouseParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 }); // Out of bounds initially
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get parent dimensions
    const parent = canvas.parentElement;
    if (!parent) return;

    // Set canvas size to fill parent
    const resizeCanvas = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Re-initialize particles on major resize to avoid empty areas
      initParticles();
    };

    // Official brand palette: variations of Teal (#2DD4BF)
    const colors = ['#2DD4BF', '#14b8a6', '#5eead4', '#0d9488', '#ffffff'];

    // Initialize particles
    const initParticles = () => {
      const particleCount = 600;
      particlesRef.current = Array.from({ length: particleCount }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 1.2 + 0.4,
        };
      });
    };

    resizeCanvas();
    const resizeListener = () => resizeCanvas();
    window.addEventListener('resize', resizeListener);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    // Clear mouse position when it leaves
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let isAnimating = true;

    // Animation loop
    const animate = () => {
      if (!isAnimating) return;

      // Draw trails (clear with a slight opacity matching deep black #080808)
      ctx.fillStyle = 'rgba(8, 8, 8, 0.18)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const interactRadius = 180;
      const repelForce = 0.6;
      const swirlForce = 0.5;
      const friction = 0.95;
      const returnForce = 0.0006; 

      particlesRef.current.forEach((particle) => {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Interaction with mouse (Repel + Swirl + Current Beam)
        if (distance < interactRadius && distance > 0) {
          const force = (interactRadius - distance) / interactRadius;
          const angle = Math.atan2(dy, dx);

          // Repulse away from mouse
          particle.vx += Math.cos(angle) * force * repelForce;
          particle.vy += Math.sin(angle) * force * repelForce;

          // Swirl tangentially
          particle.vx += Math.cos(angle + Math.PI / 2) * force * swirlForce;
          particle.vy += Math.sin(angle + Math.PI / 2) * force * swirlForce;

          // Draw "lightning" connection to mouse
          ctx.save();
          ctx.globalAlpha = force * 0.4;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          
          const segments = 4;
          for (let i = 1; i <= segments; i++) {
            const t = i / segments;
            let currentX = particle.x - dx * t;
            let currentY = particle.y - dy * t;
            
            if (i < segments) {
              const jitterLimit = Math.min(15, distance * 0.1);
              const jitter = (Math.random() - 0.5) * jitterLimit * 2;
              currentX += (-dy / distance) * jitter;
              currentY += (dx / distance) * jitter;
            }
            ctx.lineTo(currentX, currentY);
          }
          
          ctx.stroke();
          ctx.restore();
        }

        // Return to origin
        const returnDx = particle.originX - particle.x;
        const returnDy = particle.originY - particle.y;
        particle.vx += returnDx * returnForce;
        particle.vy += returnDy * returnForce;

        // Ambient idle drift
        particle.vx += (Math.random() - 0.5) * 0.08;
        particle.vy += (Math.random() - 0.5) * 0.08;

        // Apply friction
        particle.vx *= friction;
        particle.vy *= friction;

        // Update positions
        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.strokeStyle = particle.color;
        ctx.lineWidth = particle.size;
        ctx.lineCap = 'round';
        ctx.globalAlpha = 0.6;

        // Render as dashes pointing along velocity vector
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - (particle.vx * 1.5) + 0.1, particle.y - (particle.vy * 1.5));
        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isAnimating = false;
      window.removeEventListener('resize', resizeListener);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
