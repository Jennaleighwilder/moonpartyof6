"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CARDS = [
  { href: "/our-story", label: "our story", title: "how we met", desc: "blended family, second chance, doing marriage differently. romance, role play, the hard work.", badge: "read more →", comingSoon: false },
  { href: "/quiz", label: "choose your path", title: "what's calling you?", desc: "lovers · travel · spark · compass. four paths. pick the one that calls you.", badge: "enter →", comingSoon: false },
  { href: "/resources", label: "free", title: "free resources", desc: "12 types of intimacy · date night at home · FL date night guide · 7-day reset.", badge: "explore →", comingSoon: false },
  { href: "/guides", label: "premium", title: "guides & playbooks", desc: "Spicy Text Playbook · 30-day reset · Modern Romance · Busy Dad's Fitness.", badge: "view →", comingSoon: false },
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
                className="block p-8 rounded-xl border border-charcoal/5 bg-white hover:border-charcoal/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-charcoal/60 font-bold">{card.label}</span>
                <h3 className="font-display text-2xl font-normal text-charcoal mt-3 group-hover:text-charcoal transition-colors duration-300 leading-[1.4]">
                  {card.title}
                </h3>
                <p className="text-charcoal/70 text-sm mt-2 leading-relaxed">{card.desc}</p>
                <span className="inline-block mt-4 text-xs font-bold uppercase tracking-[0.2em] text-charcoal/70">
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
