"use client";

import Link from "next/link";

const FORMS = [
  "emotional",
  "physical",
  "intellectual",
  "spiritual",
  "recreational",
  "creative",
  "financial",
  "commitment",
  "conflict",
  "crisis",
  "healing",
  "celebration",
];

export function TwelveIntimacy() {
  return (
    <section className="section-padding bg-classic-black text-pearl-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-warm-gold mb-4 font-bold">arriving soon</p>
            <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight tracking-tight">
              the <span className="italic text-warm-gold">12 forms</span> of intimacy
            </h2>
            <p className="text-pearl-white/60 mt-4 text-sm max-w-md">
              emotional · physical · spiritual · intellectual · recreational · creative · financial · commitment · conflict · crisis · healing · celebration
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 px-8 py-3 bg-warm-gold text-pearl-white font-bold rounded-sm text-xs uppercase tracking-[0.4em] hover:bg-gold-light transition-all"
            >
              notify me
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {FORMS.map((form) => (
              <div
                key={form}
                className="rounded-[16px] border border-pearl-white/10 bg-pearl-white/5 px-4 py-3 text-xs font-medium capitalize text-pearl-white/90"
              >
                {form}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
