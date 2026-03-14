"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/** All 20+ gallery images — uses every photo */
const GALLERY_IMAGES = [
  "/images/gallery-intimate.png",
  "/images/gallery-aprons.png",
  "/images/gallery-hallway.png",
  "/images/gallery-casual.png",
  "/images/gallery-beach.png",
  "/images/gallery-pier.png",
  "/images/gallery-51D1FA81-2F38-49D0-B84F-964D02F20F7E.png",
  "/images/gallery-5CC28067-EE5A-453D-9F63-27E0695C0270.png",
  "/images/hero-couple.png",
  "/images/dee.png",
  "/images/josh.png",
  "/images/gallery-10-55-48 AM.png",
  "/images/gallery-10-55-59 AM.png",
  "/images/gallery-10-56-18 AM.png",
  "/images/gallery-10-56-28 AM.png",
  "/images/gallery-10-56-44 AM.png",
  "/images/gallery-10-56-55 AM.png",
  "/images/gallery-10-57-10 AM.png",
  "/images/gallery-10-57-18 AM.png",
  "/images/gallery-10-57-21 AM.png",
  "/images/gallery-10-57-25 AM.png",
  "/images/gallery-10-58-17 AM.png",
  "/images/gallery-10-58-48 AM.png",
  "/images/gallery-10-59-03 AM.png",
  "/images/gallery-10-59-36 AM.png",
  "/images/gallery-11-00-18 AM.png",
];

export function PhotoGallery() {
  return (
    <section className="section-padding bg-[#f8f0e6]">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-warm-gold mb-6 font-bold">
          real life · real love
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
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
