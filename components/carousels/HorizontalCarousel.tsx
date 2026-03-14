"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const SPOTS = [
  { name: "Winter Park — Park Avenue", desc: "Stroll, shop, share a gelato. Old Florida charm." },
  { name: "Lake Eola — Orlando", desc: "Swan boats, sunset, and the city skyline." },
  { name: "St. Augustine — St. George Street", desc: "Cobblestones, courtyards, centuries of romance." },
  { name: "Key West — Mallory Square", desc: "Sunset ritual. Street performers. Salt air." },
  { name: "Thornton Park — Orlando", desc: "Brick streets, indie cafes, intimate dinners." },
  { name: "Mills 50 — Orlando", desc: "Global flavors, neon, late-night connection." },
];

export function HorizontalCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <p className="text-xs uppercase tracking-[0.35em] text-pearl-white/60 mb-4">Drag to explore</p>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-12 md:px-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {SPOTS.map((spot, i) => (
          <motion.div
            key={spot.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group relative shrink-0 w-[320px] md:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden snap-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian/90 to-mahogany/70" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="relative z-10 transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                <h3 className="font-display text-xl font-normal text-pearl-white transition-all duration-300 group-hover:font-semibold">
                  {spot.name}
                </h3>
                <p className="text-sm text-pearl-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {spot.desc}
                </p>
              </div>
            </div>
            {/* Glassmorphism overlay — reveals on hover */}
            <div className="absolute inset-0 bg-pearl-white/0 group-hover:bg-pearl-white/5 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
