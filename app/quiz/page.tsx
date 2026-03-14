"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Choose your own adventure — each path has its own visual identity
const PATHS = [
  {
    slug: "lovers",
    href: "/lovers",
    label: "Lovers & Patterns",
    tagline: "Five questions. One thread. Every relationship has a pattern running underneath.",
    mood: "dark · literary · archetype",
    bg: "bg-classic-black",
    accent: "text-pearl-white",
    border: "border-pearl-white/20",
    hover: "hover:border-pearl-white/50 hover:bg-pearl-white/5",
    cta: "Enter the pattern",
    visual: "✦",
  },
  {
    slug: "travel",
    href: "/date-nights",
    label: "Where You're Called",
    tagline: "Three questions. One destination. A postcard from your next adventure.",
    mood: "wanderlust · vintage · postcard",
    bg: "bg-[#f8f0e6]",
    accent: "text-mahogany",
    border: "border-charcoal/20",
    hover: "hover:border-mahogany/40 hover:bg-mahogany/5",
    cta: "Find your place",
    visual: "✉",
  },
  {
    slug: "spark",
    href: "/date-nights",
    label: "Date Night Spark",
    tagline: "Vibe, spice, time, area. One personalized idea. Send it to your love.",
    mood: "flirty · intimate · tonight",
    bg: "bg-deep-red",
    accent: "text-pearl-white",
    border: "border-pearl-white/30",
    hover: "hover:border-pearl-white/60 hover:bg-pearl-white/10",
    cta: "Generate spark",
    visual: "♡",
  },
  {
    slug: "compass",
    href: "/quiz/compass",
    label: "Relationship Compass",
    tagline: "Focus, time, format. We point you to the right resource.",
    mood: "practical · guided · next step",
    bg: "bg-pearl-white",
    accent: "text-classic-black",
    border: "border-charcoal/15",
    hover: "hover:border-deep-red/40 hover:bg-deep-red/5",
    cta: "Get your map",
    visual: "◈",
  },
];

function PathCard({ path, index }: { path: (typeof PATHS)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <Link href={path.href}>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`${path.bg} ${path.accent} group`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <motion.span
                className="text-4xl md:text-5xl opacity-40 group-hover:opacity-70 transition-opacity block"
                whileHover={{ scale: 1.05 }}
              >
                {path.visual}
              </motion.span>
              <p className="text-xs uppercase tracking-[0.25em] mt-6 opacity-70">
                {path.mood}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-normal mt-4 group-hover:italic transition-all">
                {path.label}
              </h2>
              <p className="mt-4 text-base md:text-lg opacity-90 leading-relaxed max-w-md">
                {path.tagline}
              </p>
              <motion.span
                className={`inline-block mt-8 text-sm font-medium border-b-2 ${path.border} ${path.hover} py-1 transition-all`}
                whileHover={{ x: 4 }}
              >
                {path.cta} →
              </motion.span>
            </div>
            <div className="hidden md:block">
              <motion.div
                className={`aspect-[4/3] rounded-2xl border ${path.border} ${path.hover} flex items-center justify-center text-6xl opacity-20 group-hover:opacity-40 transition-all`}
                whileHover={{ scale: 1.02 }}
              >
                {path.visual}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </Link>
  );
}

export default function QuizHubPage() {
  return (
    <div className="min-h-screen">
      {/* Editorial masthead */}
      <section className="relative overflow-hidden border-b border-charcoal/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.35em] text-deep-red/80 mb-6 font-medium"
          >
            Choose your own adventure
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-classic-black max-w-3xl leading-[1.15]"
          >
            What&apos;s calling you?
            <br />
            <span className="italic text-charcoal/90">Where do you want to go deeper?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg text-charcoal/80 max-w-xl"
          >
            Four paths. Lovers, travel, spark, compass. Pick the one that calls you.
          </motion.p>
        </div>
      </section>

      {/* Paths — Popup-style: each a distinct magazine spread with scroll reveal */}
      <div className="divide-y divide-charcoal/10">
        {PATHS.map((path, i) => (
          <PathCard key={path.slug} path={path} index={i} />
        ))}
      </div>

      <section className="section-padding bg-charcoal text-pearl-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm opacity-70">
            All paths lead somewhere. No gate. No sign-up. Just you, choosing.
          </p>
          <Link href="/" className="text-deep-red/90 hover:text-deep-red mt-4 inline-block text-sm font-medium">
            ← back to moonpartyof6
          </Link>
        </div>
      </section>
    </div>
  );
}
