"use client";

import { useState } from "react";
import Image from "next/image";

/** Real photos only — NO screenshots (webpage, style guide) or duplicates. */
const CARDS = [
  {
    title: "emotional intimacy",
    text: "the conversations that actually matter — dee's guides on connection that goes deeper.",
    image: "/images/gallery-intimate.png",
  },
  {
    title: "physical connection",
    text: "from spicy texts to slow mornings — keeping the spark alive after kids and chaos.",
    image: "/images/gallery-aprons.png",
  },
  {
    title: "intentional partnership",
    text: "josh's take on showing up as a husband without losing the romance.",
    image: "/images/gallery-hallway.png",
  },
  {
    title: "casual moments",
    text: "the everyday magic — coffee, kids, and the in-between that makes marriage real.",
    image: "/images/gallery-casual.png",
  },
  {
    title: "travel together",
    text: "beach days, pier sunsets — adventures that bring you closer.",
    image: "/images/gallery-pier.png",
  },
  {
    title: "date night vibes",
    text: "dressed up or cozy — the kind of nights that remind you why you chose each other.",
    image: "/images/gallery-intimate.png",
  },
];

export function HoverReveal() {
  return (
    <section className="section-padding relative">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-champagne-gold/90 mb-6 font-bold">
          lean in closer
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <RevealCard key={card.title} title={card.title} text={card.text} image={card.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RevealCard({ title, text, image }: { title: string; text: string; image: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative overflow-hidden rounded-[24px] min-h-[280px]
        transition-all duration-500 ease-out
        ${hovered
          ? "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] -translate-y-1 scale-[1.02]"
          : "border border-transparent opacity-95"
        }
      `}
    >
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className={`object-cover object-top transition-all duration-700 ${hovered ? "scale-110" : "scale-100"}`} sizes="(max-width: 768px) 100vw, 33vw" />
        <div className={`absolute inset-0 transition-all duration-500 ${hovered ? "bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent" : "bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent"}`} />
      </div>
      <div className="relative z-10 p-8 flex flex-col justify-end min-h-[280px]">
        <h3 className="font-display text-2xl font-normal text-pearl-white mb-3 drop-shadow-lg">
          {title}
        </h3>
        <p className={`text-pearl-white/95 text-sm leading-relaxed transition-all duration-500 ${hovered ? "opacity-100" : "opacity-85"}`}>{text}</p>
      </div>
    </div>
  );
}
