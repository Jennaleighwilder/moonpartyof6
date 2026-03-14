import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { TickerMarquee } from "@/components/TickerMarquee";
import { EmailGreeting } from "@/components/EmailGreeting";
import { QuickAccessGrid } from "@/components/cards/QuickAccessGrid";
import { MeetTheMoons } from "@/components/cards/MeetTheMoons";
import { HoverReveal } from "@/components/HoverReveal";
import { TwelveIntimacy } from "@/components/TwelveIntimacy";
import { Partners } from "@/components/Partners";
import { SparkGenerator } from "@/components/spark-generator/SparkGenerator";
import { SocialLinks } from "@/components/SocialLinks";
import { SITE } from "@/lib/siteConfig";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TickerMarquee />
      <EmailGreeting />
      <QuickAccessGrid />

      {/* Moons */}
      <section className="section-padding bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <MeetTheMoons />
        </div>
      </section>

      <HoverReveal />
      <TwelveIntimacy />
      <Partners />
      <SparkGenerator />

      {/* Featured in — Moriah luxury brand bar */}
      <section className="section-padding bg-classic-black text-pearl-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-warm-gold mb-8 font-bold">featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-80">
            <span className="text-sm font-medium tracking-wider">TODAY</span>
            <span className="text-sm font-medium tracking-wider">PEOPLE</span>
            <span className="text-sm font-medium tracking-wider">THE KNOT</span>
            <span className="text-sm font-medium tracking-wider">BRIDES</span>
          </div>
        </div>
      </section>

      {/* Testimonial — Moriah luxury */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto">
          <blockquote className="font-display text-4xl md:text-5xl font-normal text-charcoal leading-[1.4]">
            &ldquo;Dee and Josh are the real deal. They helped us actually talk to each other again.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-[0.4em] text-warm-gold mt-8 font-bold">— jess + alex</p>
        </div>
      </section>

      {/* Quiz — Moriah luxury CTA */}
      <section className="section-padding bg-charcoal text-pearl-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-4xl md:text-5xl font-normal tracking-tight">
              not sure where to begin?
            </p>
            <p className="text-warm-taupe text-sm mt-3 max-w-md">
              Four paths. Romance. Role play. The hard work. Pick the one that calls you.
            </p>
          </div>
          <Link href="/quiz" className="shrink-0 px-10 py-4 bg-warm-gold text-pearl-white font-bold rounded-sm hover:bg-gold-light transition-all text-xs uppercase tracking-[0.4em]">
            choose your path
          </Link>
        </div>
      </section>

      {/* Social */}
      <section className="section-padding bg-cream border-t border-charcoal/10">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-charcoal/40 mb-4">follow</p>
          <SocialLinks variant="inline" />
          <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:text-gold-light font-bold text-xs mt-3 inline-block tracking-[0.25em] uppercase">
            {SITE.handle}
          </a>
        </div>
      </section>
    </>
  );
}
