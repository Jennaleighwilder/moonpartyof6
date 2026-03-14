"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CARDS = [
  { href: "/our-story", label: "our story", title: "how we met", desc: "blended family, second chance, doing marriage differently. romance, role play, the hard work.", badge: "read more →", comingSoon: false },
  { href: "/quiz", label: "choose your path", title: "what's calling you?", desc: "lovers · travel · spark · compass. four paths. pick the one that calls you.", badge: "enter →", comingSoon: false },
  { href: "/resources", label: "free resource", title: "date night guide", desc: "12 at-home ideas. the spicy texts. the slow mornings. coming june 2026.", badge: "coming soon", comingSoon: true },
  { href: "/resources#intimacy", label: "signature", title: "12 forms of intimacy", desc: "emotional · physical · spiritual · body, psyche, soul.", badge: "preview ↓", comingSoon: false },
];

export function QuickAccessGrid() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={card.href}
                className="block p-8 rounded-xl border border-charcoal/5 bg-white hover:border-deep-red/30 hover:shadow-[0_12px_40px_rgba(122,12,24,0.08)] hover:-translate-y-1 transition-all duration-400 group"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-warm-gold font-bold">{card.label}</span>
                <h3 className="font-display text-2xl font-normal text-charcoal mt-3 group-hover:text-deep-red transition-colors duration-300 leading-[1.4]">
                  {card.title}
                </h3>
                <p className="text-charcoal/70 text-sm mt-2 leading-relaxed">{card.desc}</p>
                <span className={`inline-block mt-4 text-xs font-bold uppercase tracking-[0.2em] ${card.comingSoon ? "text-charcoal/60" : "text-warm-gold"}`}>
                  {card.badge}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
