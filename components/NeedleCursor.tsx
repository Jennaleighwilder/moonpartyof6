"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Needle cursor: 0.5px vertical line, snaps to crosshair on interactive elements, 9px italic tooltip. */
export function NeedleCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);
  const [hovering, setHovering] = useState(false);
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [active, setActive] = useState(false);
  const tooltipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(pointer: fine)").matches;
    const reduced = document.documentElement.classList.contains("reduce-motion") || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setActive(desktop && !reduced);
    const obs = new MutationObserver(() => {
      setActive(window.matchMedia("(pointer: fine)").matches && !document.documentElement.classList.contains("reduce-motion"));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) {
      document.body.style.cursor = "";
      return;
    }

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactive = el?.closest("a, button, [role='button'], input, select, textarea, [data-cursor]");
      if (interactive) {
        const rect = interactive.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        if (dist < 30) {
          setTarget({ x: centerX, y: centerY });
          setHovering(true);
          const label = interactive.getAttribute("data-cursor-label") ?? (interactive as HTMLElement).textContent?.slice(0, 20) ?? "step inside";
          setTooltip(label);
          if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
          tooltipTimeout.current = setTimeout(() => setTooltipVisible(true), 200);
        } else {
          setTarget(null);
          setHovering(false);
          setTooltip(null);
          setTooltipVisible(false);
          if (tooltipTimeout.current) {
            clearTimeout(tooltipTimeout.current);
            tooltipTimeout.current = null;
          }
        }
      } else {
        setTarget(null);
        setHovering(false);
        setTooltip(null);
        setTooltipVisible(false);
        if (tooltipTimeout.current) {
          clearTimeout(tooltipTimeout.current);
          tooltipTimeout.current = null;
        }
      }
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", move);
    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
    };
  }, [active]);

  if (!active || typeof window === "undefined") return null;

  const displayPos = target ?? pos;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{
        x: displayPos.x,
        y: displayPos.y,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {/* Needle: 0.5px vertical line, 24px tall — or crosshair when hovering */}
      <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        {hovering ? (
          <div className="relative w-4 h-4">
            <span className="absolute left-1/2 top-0 w-px h-4 -translate-x-1/2 bg-white/90" style={{ width: "0.5px" }} />
            <span className="absolute left-0 top-1/2 w-4 h-px -translate-y-1/2 bg-white/90" style={{ height: "0.5px" }} />
          </div>
        ) : (
          <span
            className="block w-px h-6 bg-white/85"
            style={{ width: "0.5px", minWidth: "0.5px" }}
          />
        )}
      </div>
      {/* Tooltip: 9px italic, corner of needle */}
      <AnimatePresence>
        {tooltip && tooltipVisible && (
          <motion.span
            key="tooltip"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap font-mono text-[9px] italic text-white/80"
          >
            {tooltip}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
