"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/** Curated client photos only — no build/design images. Zine: cut-out, rotate, no borders. */
const GALLERY_IMAGES = [
  { src: "/images/gallery-intimate.png", rotate: "-2deg" },
  { src: "/images/gallery-aprons.png", rotate: "1.5deg" },
  { src: "/images/gallery-hallway.png", rotate: "-1deg" },
  { src: "/images/gallery-casual.png", rotate: "2deg" },
  { src: "/images/gallery-beach.png", rotate: "-1.5deg" },
  { src: "/images/gallery-pier.png", rotate: "1deg" },
  { src: "/images/hero-couple.png", rotate: "-2deg" },
  { src: "/images/dee.png", rotate: "1.5deg" },
  { src: "/images/josh.png", rotate: "-1deg" },
];

export function PhotoGallery() {
  return (
    <section className="section-padding bg-vellum">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center font-slab text-sm font-semibold uppercase tracking-[0.3em] text-charcoal/70 mb-8">
          real life · real love
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {GALLERY_IMAGES.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              style={{ rotate: item.rotate }}
              className="relative aspect-[4/5] overflow-hidden cut-out tap-scale rounded-sm"
            >
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
