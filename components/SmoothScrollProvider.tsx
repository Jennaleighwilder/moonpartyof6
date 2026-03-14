"use client";

import { useEffect } from "react";

/** Lenis smooth scroll + GSAP ScrollTrigger. Enables Z-axis-ready scroll behavior. */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let mounted = true;
    let teardown: (() => void) | null = null;

    const init = async () => {
      const LenisMod = await import("@studio-freight/lenis");
      const Lenis = LenisMod.default;
      const gsap = (await import("gsap")).default as { registerPlugin: (p: unknown) => void };
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);

      let rafId: number;
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    };

    init().then((fn) => {
      teardown = fn;
      if (!mounted) fn();
    });

    return () => {
      mounted = false;
      teardown?.();
    };
  }, []);

  return <>{children}</>;
}
