"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  opacity: number;
  life: number;
  maxLife: number;
  mpid?: string;
}
const COLORS = ['#00b99a', '#8b7fff', '#fe8363', '#ffc45c', '#ff6b9d', '#4ecdc4', '#45b7d1', '#96ceb4'];
export default function CursorSnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const nextIdRef = useRef(0);
  const mouseRef = useRef({
    x: 0,
    y: 0
  });
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const createSnowflake = (x: number, y: number): Snowflake => {
      const size = Math.random() * 4 + 2;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      return {
        id: nextIdRef.current++,
        x,
        y,
        size,
        color,
        velocity: {
          x: Math.cos(angle) * speed * 0.5,
          y: Math.sin(angle) * speed + Math.random() * 2 + 1
        },
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 120 + 60
      };
    };
    const updateSnowflakes = () => {
      snowflakesRef.current = snowflakesRef.current.filter(snowflake => {
        snowflake.life++;
        snowflake.x += snowflake.velocity.x;
        snowflake.y += snowflake.velocity.y;

        // Add slight drift and gravity
        snowflake.velocity.x += (Math.random() - 0.5) * 0.1;
        snowflake.velocity.y += 0.05;

        // Fade out over time
        snowflake.opacity = Math.max(0, 1 - snowflake.life / snowflake.maxLife);
        return snowflake.life < snowflake.maxLife && snowflake.y < canvas.height + 50 && snowflake.x > -50 && snowflake.x < canvas.width + 50;
      });
    };
    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakesRef.current.forEach(snowflake => {
        ctx.save();
        ctx.globalAlpha = snowflake.opacity;
        ctx.fillStyle = snowflake.color;
        ctx.shadowColor = snowflake.color;
        ctx.shadowBlur = snowflake.size * 2;
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
        ctx.fill();

        // Add sparkle effect
        if (Math.random() < 0.1) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.beginPath();
          ctx.arc(snowflake.x, snowflake.y, snowflake.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });
    };
    const animate = () => {
      updateSnowflakes();
      drawSnowflakes();
      animationRef.current = requestAnimationFrame(animate);
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };

      // Create multiple snowflakes on mouse movement
      if (isActive) {
        for (let i = 0; i < 3; i++) {
          const offsetX = (Math.random() - 0.5) * 20;
          const offsetY = (Math.random() - 0.5) * 20;
          snowflakesRef.current.push(createSnowflake(e.clientX + offsetX, e.clientY + offsetY));
        }
      }
    };
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{
    mixBlendMode: 'screen',
    filter: 'blur(0.5px)'
  }} data-magicpath-id="0" data-magicpath-path="CursorSnowEffect.tsx" />;
}