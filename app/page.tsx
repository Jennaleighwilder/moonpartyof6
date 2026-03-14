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

      {/* Moons — anti-grid: overlap */}
      <ScrollReveal>
      <section className="section-padding relative">
        <div className="max-w-[1400px] mx-auto -mt-12">
          <MeetTheMoons />
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal><HoverReveal /></ScrollReveal>
      <ScrollReveal><PhotoGallery /></ScrollReveal>
      <ScrollReveal><TwelveIntimacy /></ScrollReveal>
      <ScrollReveal><Partners /></ScrollReveal>
      <ScrollReveal><SparkGenerator /></ScrollReveal>

      {/* Featured in — luxury brand bar */}
      <ScrollReveal>
      <section className="section-padding bg-obsidian/90 backdrop-blur-sm border-y border-champagne-gold/10 text-pearl-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-champagne-gold/90 mb-8 font-bold">featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-80">
            <span className="text-sm font-medium tracking-wider">TODAY</span>
            <span className="text-sm font-medium tracking-wider">PEOPLE</span>
            <span className="text-sm font-medium tracking-wider">THE KNOT</span>
            <span className="text-sm font-medium tracking-wider">BRIDES</span>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Testimonial — editorial block */}
      <ScrollReveal>
      <section className="section-padding relative -mt-8">
        <div className="max-w-4xl mx-auto p-8 md:p-12 bg-charcoal/40 backdrop-blur-sm border border-champagne-gold/10 rounded-sm">
          <blockquote className="font-display text-4xl md:text-5xl font-normal text-pearl-white leading-[1.4]">
            &ldquo;Dee and Josh are the real deal. They helped us actually talk to each other again.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-[0.4em] text-champagne-gold/90 mt-8 font-bold">— jess + alex</p>
        </div>
      </section>
      </ScrollReveal>

      {/* Quiz CTA */}
      <ScrollReveal>
      <section className="section-padding border-y border-champagne-gold/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-4xl md:text-5xl font-normal tracking-tight text-pearl-white">
              not sure where to begin?
            </p>
            <p className="text-sleek-silver/80 text-sm mt-3 max-w-md">
              Four paths. Romance. Role play. The hard work. Pick the one that calls you.
            </p>
          </div>
          <Link href="/quiz" className="shrink-0 px-10 py-4 bg-champagne-gold text-obsidian font-bold rounded-sm hover:bg-champagne-gold/90 transition-all text-xs uppercase tracking-[0.4em] tap-scale">
            choose your path
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* Social + Videos */}
      <ScrollReveal>
      <section className="section-padding border-t border-champagne-gold/10">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-sleek-silver/95 mb-4">follow</p>
          <SocialLinks variant="inline" />
          <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-champagne-gold hover:text-champagne-gold/80 font-bold text-xs mt-3 inline-block tracking-[0.25em] uppercase">
            {SITE.handle}
          </a>
          <Link href="/media-press" className="block mt-6 text-champagne-gold/90 hover:text-champagne-gold font-medium text-sm">
            Watch on TikTok & Instagram →
          </Link>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
