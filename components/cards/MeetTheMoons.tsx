"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function MeetTheMoons() {
  const [deeError, setDeeError] = useState(false);
  const [joshError, setJoshError] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Link href="/mrs-moon" className="group block p-8 bg-charcoal/40 backdrop-blur-sm rounded-xl border border-champagne-gold/10 hover:border-champagne-gold/30 card-hover transition-all tap-scale">
        <div className="aspect-square bg-obsidian/60 rounded-lg mb-6 overflow-hidden relative flex items-center justify-center">
          {!deeError && (
            <Image
              src="/images/dee.png"
              alt="Dee Moon"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setDeeError(true)}
            />
          )}
          {deeError && <span className="text-4xl">✨</span>}
        </div>
        <h3 className="font-display text-2xl font-normal mb-1 group-hover:text-champagne-gold transition-colors text-pearl-white">Dee Moon</h3>
        <p className="text-sleek-silver/80 text-sm mb-4">counselor · speaker</p>
        <p className="text-sleek-silver/90 text-sm mb-4">MA in Counseling, crisis hotline veteran, helps couples go deeper without the cringe.</p>
        <span className="text-champagne-gold font-bold text-xs uppercase tracking-[0.25em]">meet dee →</span>
      </Link>
      <Link href="/mr-moon" className="group block p-8 bg-charcoal/40 backdrop-blur-sm rounded-xl border border-champagne-gold/10 hover:border-champagne-gold/30 card-hover transition-all tap-scale">
        <div className="aspect-square bg-obsidian/60 rounded-lg mb-6 overflow-hidden relative flex items-center justify-center">
          {!joshError && (
            <Image
              src="/images/josh.png"
              alt="Josh Moon"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setJoshError(true)}
            />
          )}
          {joshError && <span className="text-4xl">🌟</span>}
        </div>
        <h3 className="font-display text-2xl font-normal mb-1 group-hover:text-champagne-gold transition-colors text-pearl-white">Josh Moon</h3>
        <p className="text-sleek-silver/80 text-sm mb-4">mba · romance advocate</p>
        <p className="text-sleek-silver/90 text-sm mb-4">Accountant by trade, husband by passion. Helps men show up intentionally.</p>
        <span className="text-champagne-gold font-bold text-xs uppercase tracking-[0.25em]">meet josh →</span>
      </Link>
    </div>
  );
}
