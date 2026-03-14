"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_BG = "/images/hero-maine.png";
const HERO_CARD = "/images/gallery-beach.png";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden hero-paper-texture">
      {/* Background: Maine photo — parallax */}
      <motion.div
        style={{
          y,
          backgroundImage: `linear-gradient(120deg, rgba(10,10,10,0.92) 0%, rgba(26,26,26,0.7) 40%, rgba(46,46,46,0.5) 70%, rgba(60,60,60,0.3) 100%), url(${HERO_BG})`,
          backgroundColor: "#0A0A0A",
          backgroundPosition: "center 30%",
        }}
        className="absolute inset-0 bg-cover bg-no-repeat"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(122,12,24,0.12)_0%,transparent_50%)]" />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-pearl-white mb-6 leading-[1.08] tracking-[-0.02em]"
            >
              intentional marriage.
              <br />
              <span className="text-pearl-white/95 italic">modern partnership.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg text-pearl-white/90 mb-8 max-w-xl leading-relaxed"
            >
              body. psyche. soul. we&apos;re still dating each other — showing up, doing the hard work, romance big and small. role play. the spicy texts. the slow mornings. we&apos;re into it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/mrs-moon" className="btn-primary text-base px-8 py-3.5 uppercase tracking-[0.35em]">
                meet dee
              </Link>
              <Link href="/mr-moon" className="px-8 py-3.5 bg-classic-black text-pearl-white font-bold rounded-lg hover:bg-charcoal transition-colors text-base uppercase tracking-[0.25em] text-sm">
                meet josh
              </Link>
              <Link href="/resources" className="btn-secondary border-pearl-white/50 text-pearl-white hover:bg-pearl-white hover:text-classic-black text-base px-8 py-3.5 uppercase tracking-[0.3em]">
                free guides
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8 mt-10 text-pearl-white/70"
            >
              <div><span className="text-pearl-white font-semibold">2.4M</span> <span className="text-sm">followers</span></div>
              <div><span className="text-pearl-white font-semibold">50+</span> <span className="text-sm">free guides</span></div>
              <div><span className="text-pearl-white font-semibold">15</span> <span className="text-sm">retreats</span></div>
            </motion.div>
          </div>
          {/* Right: different photo — not same as background */}
          <div className="hidden lg:flex items-center justify-center animate-float">
            <div className="w-full aspect-[4/3] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] image-film-still">
              <img src={HERO_CARD} alt="Dee and Josh Moon" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
