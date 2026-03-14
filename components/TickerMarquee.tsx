"use client";

const TICKER_TEXT =
  "✦ BODY · PSYCHE · SOUL · ROMANCE BIG AND SMALL · ROLE PLAY · THE SPICY TEXTS · THE SLOW MORNINGS · DOING THE HARD WORK · SHOWING UP · DATING EACH OTHER · EMOTIONAL DEPTH · WE'RE INTO IT · INTENTIONAL MARRIAGE · REAL COUPLE · REAL LIFE ✦";

export function TickerMarquee() {
  return (
    <div className="overflow-hidden border-y border-champagne-gold/10 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-6 text-xs font-bold tracking-[0.35em] uppercase text-pearl-white/95">
          {TICKER_TEXT}
        </span>
        <span className="mx-6 text-champagne-gold">✦</span>
        <span className="mx-6 text-xs font-medium tracking-[0.25em] uppercase text-pearl-white/90">
          {TICKER_TEXT}
        </span>
      </div>
    </div>
  );
}
