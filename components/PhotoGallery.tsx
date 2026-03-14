"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/** Curated client photos only — no build/design images */
const GALLERY_IMAGES = [
  "/images/gallery-intimate.png",
  "/images/gallery-aprons.png",
  "/images/gallery-hallway.png",
  "/images/gallery-casual.png",
  "/images/gallery-beach.png",
  "/images/gallery-pier.png",
  "/images/hero-couple.png",
  "/images/dee.png",
  "/images/josh.png",
];

export function PhotoGallery() {
  return (
    <section className="section-padding bg-[#f8f0e6]">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-charcoal/60 mb-6 font-bold">
          real life · real love
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden border border-charcoal/10"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
