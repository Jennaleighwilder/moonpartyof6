"use client";

import Link from "next/link";
import { StaggerChildren, StaggerItem } from "@/components/motion/ScrollReveal";

const CARDS = [
  { href: "/our-story", label: "our story", title: "how we met", desc: "blended family, second chance, doing marriage differently. romance, role play, the hard work.", badge: "read more →", comingSoon: false },
  { href: "/quiz", label: "choose your path", title: "what's calling you?", desc: "lovers · travel · spark · compass. four paths. pick the one that calls you.", badge: "enter →", comingSoon: false },
  { href: "/resources", label: "free", title: "free resources", desc: "12 types of intimacy · date night at home · FL date night guide · 7-day reset.", badge: "explore →", comingSoon: false },
  { href: "/guides", label: "premium", title: "guides & playbooks", desc: "Spicy Text Playbook · 30-day reset · Modern Romance · Busy Dad's Fitness.", badge: "view →", comingSoon: false },
];

export function QuickAccessGrid() {
  return (
    <section className="section-padding relative -mt-8">
      <div className="max-w-[1400px] mx-auto">
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" delay={0.1}>
          {CARDS.map((card) => (
            <StaggerItem key={card.href}>
              <Link
                href={card.href}
                className="block p-8 rounded-sm border border-champagne-gold/10 bg-charcoal/40 backdrop-blur-sm hover:border-champagne-gold/30 hover:bg-charcoal/60 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-300 group tap-scale"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-sleek-silver/90">{card.label}</span>
                <h3 className="font-display text-2xl font-normal text-pearl-white mt-3 group-hover:text-champagne-gold transition-colors duration-300 leading-[1.4]">
                  {card.title}
                </h3>
                <p className="font-slab text-sleek-silver/80 text-sm mt-2 leading-relaxed">{card.desc}</p>
                <span className="inline-block mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-champagne-gold/90">
                  {card.badge}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
