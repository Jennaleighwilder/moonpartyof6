"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HERO_IMAGE = "/images/hero-couple.png";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background: cinematic couple photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(17,17,17,0.88) 0%, rgba(46,46,46,0.6) 40%, rgba(129,31,31,0.5) 70%, rgba(122,12,24,0.3) 100%), url(${HERO_IMAGE})`,
          backgroundColor: "#111111",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(122,12,24,0.15)_0%,transparent_50%)]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16">
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
          {/* Right: Dee + Josh photo */}
          <div className="hidden lg:flex items-center justify-center animate-float">
            <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-pearl-white/20 shadow-2xl">
              <img src="/images/hero-couple.png" alt="Dee and Josh Moon" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
