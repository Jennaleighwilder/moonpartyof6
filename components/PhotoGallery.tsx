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
    <section className="section-padding relative overflow-hidden">
      <p className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-sleek-silver/70 mb-12">
        real life · real love
      </p>
      {/* Anti-grid collage — overlapping, clip-path, negative margins */}
      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 -ml-4 md:-ml-8">
          {GALLERY_IMAGES.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              style={{ rotate: item.rotate, zIndex: i % 3 === 0 ? 2 : 1, clipPath: i % 3 === 0 ? "polygon(1% 0%, 99% 1%, 100% 99%, 0% 98%)" : undefined }}
              className={`relative aspect-[4/5] overflow-hidden cut-out tap-scale rounded-sm ${i % 4 === 0 ? "md:-mt-8 md:ml-4" : ""} ${i === 2 ? "md:mt-4" : ""}`}
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
