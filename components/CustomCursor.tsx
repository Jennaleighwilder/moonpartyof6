"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    document.body.style.cursor = "none";
    document.addEventListener("mousemove", move);
    const els = document.querySelectorAll("a, button, [role='button'], input, select, textarea");
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", move);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop || typeof window === "undefined") return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: mouse.x, y: mouse.y }}
      animate={{
        scale: hovering ? 1.6 : 1,
        opacity: 0.7,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div
        className="h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-obsidian/80 bg-pearl-white/90"
      />
    </motion.div>
  );
}
