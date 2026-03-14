"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/** Liquid mesh gradient + cursor-following shimmer. SUBTLE (2% opacity) — expensive atmosphere, not digital glitch. */
export function AmbientBackground() {
  const pathname = usePathname();
  const basePath = pathname?.split("/")[1] ? `/${pathname.split("/")[1]}` : "/";
  const isVellum = basePath === "/resources";
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

  /* Vellum room: no dark overlay — light page */
  if (isVellum) return null;

  return (
    <>
      {/* Liquid mesh — Hilton palette, cursor-reactive. Reduced to ~2% for luxury feel. */}
      <div
        className="fixed inset-0 -z-[2] transition-[background] duration-700"
        style={{
          background: `
            radial-gradient(ellipse 140% 100% at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(243,229,171,0.02) 0%, transparent 55%),
            radial-gradient(ellipse 100% 140% at ${(1 - mouse.x) * 100}% ${(1 - mouse.y) * 100}%, rgba(78,7,7,0.025) 0%, transparent 50%),
            radial-gradient(ellipse 90% 60% at 50% 0%, rgba(253,252,251,0.015) 0%, transparent 60%)
          `,
        }}
      />
      {/* Shimmer — 2% opacity. Expensive atmosphere, not glitch. */}
      <motion.div
        className="fixed inset-0 -z-[1] pointer-events-none mix-blend-soft-light opacity-[0.02]"
        style={{
          background: `radial-gradient(circle 400px at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(243,229,171,0.5) 0%, transparent 70%)`,
        }}
        animate={{ opacity: [0.015, 0.025, 0.015] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
