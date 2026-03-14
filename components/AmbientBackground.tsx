"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/** Liquid mesh gradient + cursor-following shimmer. Hilton palette: Obsidian, Champagne, Deep Mahogany, Pearl. */
export function AmbientBackground() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Liquid mesh gradient — Hilton palette, cursor-reactive */}
      <div
        className="fixed inset-0 -z-[2] transition-[background] duration-700"
        style={{
          background: `
            radial-gradient(ellipse 140% 100% at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(243,229,171,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 100% 140% at ${(1 - mouse.x) * 100}% ${(1 - mouse.y) * 100}%, rgba(78,7,7,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 90% 60% at 50% 0%, rgba(253,252,251,0.03) 0%, transparent 60%),
            linear-gradient(180deg, #0A0A0A 0%, #120808 20%, #1a0a0a 40%, #0d0505 60%, #0A0A0A 100%)
          `,
        }}
      />
      {/* Shimmer mask — follows cursor */}
      <motion.div
        className="fixed inset-0 -z-[1] pointer-events-none mix-blend-soft-light opacity-[0.07]"
        style={{
          background: `radial-gradient(circle 400px at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(243,229,171,0.4) 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* SVG noise — vellum film grain */}
      <div
        className="fixed inset-0 -z-[1] pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
