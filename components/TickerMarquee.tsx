"use client";

const TICKER_TEXT =
  "✦ BODY · PSYCHE · SOUL · ROMANCE BIG AND SMALL · ROLE PLAY · THE SPICY TEXTS · THE SLOW MORNINGS · DOING THE HARD WORK · SHOWING UP · DATING EACH OTHER · EMOTIONAL DEPTH · WE'RE INTO IT · INTENTIONAL MARRIAGE · REAL COUPLE · REAL LIFE ✦";

export function TickerMarquee() {
  return (
    <div className="overflow-hidden border-y border-charcoal/20 bg-classic-black/5 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-6 text-xs font-bold tracking-[0.35em] uppercase text-charcoal/90">
          {TICKER_TEXT}
        </span>
        <span className="mx-6 text-deep-red">✦</span>
        <span className="mx-6 text-xs font-medium tracking-[0.25em] uppercase text-charcoal/80">
          {TICKER_TEXT}
        </span>
      </div>
    </div>
  );
}
