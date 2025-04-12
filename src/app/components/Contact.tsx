"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles: { x: number; y: number; radius: number; dx: number; dy: number }[] = [];

    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.5 + Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
      ctx.shadowBlur = 10;

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-black py-24 px-6 md:px-12 text-center font-sora overflow-hidden" id="contact">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-black opacity-40 animate-gradient z-0" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />

      {/* Foreground content */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-wide mb-6 text-white"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/80 text-lg max-w-xl mx-auto mb-8"
        >
          I'm open to collaborations, freelance opportunities, or just a friendly chat.
        </motion.p>

        <motion.a
          href="mailto:you@example.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="inline-block bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full backdrop-blur-md transition hover:bg-white/20 hover:scale-105 shadow-lg"
          style={{
            boxShadow:
              "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)",
          }}
        >
          you@example.com
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
