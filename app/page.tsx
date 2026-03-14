import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { TickerMarquee } from "@/components/TickerMarquee";
import { EmailGreeting } from "@/components/EmailGreeting";
import { QuickAccessGrid } from "@/components/cards/QuickAccessGrid";
import { MeetTheMoons } from "@/components/cards/MeetTheMoons";
import { HoverReveal } from "@/components/HoverReveal";
import { PhotoGallery } from "@/components/PhotoGallery";
import { TwelveIntimacy } from "@/components/TwelveIntimacy";
import { Partners } from "@/components/Partners";
import { SparkGenerator } from "@/components/spark-generator/SparkGenerator";
import { SocialLinks } from "@/components/SocialLinks";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SITE } from "@/lib/siteConfig";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TickerMarquee />
      <ScrollReveal><EmailGreeting /></ScrollReveal>
      <ScrollReveal><QuickAccessGrid /></ScrollReveal>

      {/* Moons */}
      <ScrollReveal>
      <section className="section-padding bg-vellum">
        <div className="max-w-[1400px] mx-auto">
          <MeetTheMoons />
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal><HoverReveal /></ScrollReveal>
      <ScrollReveal><PhotoGallery /></ScrollReveal>
      <ScrollReveal><TwelveIntimacy /></ScrollReveal>
      <ScrollReveal><Partners /></ScrollReveal>
      <ScrollReveal><SparkGenerator /></ScrollReveal>

      {/* Featured in — Moriah luxury brand bar */}
      <ScrollReveal>
      <section className="section-padding bg-obsidian text-pearl-white">
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
      </ScrollReveal>

      {/* Testimonial — Moriah luxury */}
      <ScrollReveal>
      <section className="section-padding bg-vellum">
        <div className="max-w-4xl mx-auto">
          <blockquote className="font-display text-4xl md:text-5xl font-normal text-charcoal leading-[1.4]">
            &ldquo;Dee and Josh are the real deal. They helped us actually talk to each other again.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-[0.4em] text-warm-gold mt-8 font-bold">— jess + alex</p>
        </div>
      </section>
      </ScrollReveal>

      {/* Quiz — Moriah luxury CTA */}
      <ScrollReveal>
      <section className="section-padding bg-obsidian text-pearl-white">
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
      </ScrollReveal>

      {/* Social + Videos */}
      <ScrollReveal>
      <section className="section-padding bg-vellum border-t border-charcoal/10">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-charcoal/40 mb-4">follow</p>
          <SocialLinks variant="inline" />
          <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:text-gold-light font-bold text-xs mt-3 inline-block tracking-[0.25em] uppercase">
            {SITE.handle}
          </a>
          <Link href="/media-press" className="block mt-6 text-deep-red hover:text-mahogany font-medium text-sm">
            Watch on TikTok & Instagram →
          </Link>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
