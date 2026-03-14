import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { TickerMarquee } from "@/components/TickerMarquee";
import { EmailGreeting } from "@/components/EmailGreeting";
import { QuickAccessGrid } from "@/components/cards/QuickAccessGrid";
import { MeetTheMoons } from "@/components/cards/MeetTheMoons";
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

      <ScrollReveal><PhotoGallery /></ScrollReveal>
      <ScrollReveal><TwelveIntimacy /></ScrollReveal>
      <ScrollReveal><Partners /></ScrollReveal>
      <ScrollReveal><SparkGenerator /></ScrollReveal>

      {/* Featured in — VOGUE editorial bar */}
      <ScrollReveal>
      <section className="section-padding bg-classic-black/95 border-y border-charcoal/20 text-pearl-white">
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
        <div className="max-w-4xl mx-auto p-8 md:p-12 bg-classic-black/90 border border-charcoal/30 rounded-sm">
          <blockquote className="font-display text-4xl md:text-5xl font-normal text-pearl-white leading-[1.4]">
            &ldquo;Dee and Josh are the real deal. They helped us actually talk to each other again.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-[0.4em] text-champagne-gold/90 mt-8 font-bold">— jess + alex</p>
        </div>
      </section>
      </ScrollReveal>

      {/* Encouraged — DMs & messages from those we've encouraged */}
      <ScrollReveal>
      <section className="section-padding border-t border-charcoal/20">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-deep-red/90 mb-8 font-bold">encouraged</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg shadow-sm">
              <p className="text-charcoal italic">&ldquo;Your content changed how we communicate. Thank you.&rdquo;</p>
              <p className="text-xs text-charcoal/60 mt-3">— DM</p>
            </div>
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg shadow-sm">
              <p className="text-charcoal italic">&ldquo;We tried the date idea and it was exactly what we needed.&rdquo;</p>
              <p className="text-xs text-charcoal/60 mt-3">— DM</p>
            </div>
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
              <p className="text-charcoal italic">&ldquo;Finally someone who gets it. You two are a gift.&rdquo;</p>
              <p className="text-xs text-charcoal/60 mt-3">— DM</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Quiz CTA */}
      <ScrollReveal>
      <section className="section-padding border-y border-charcoal/20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-4xl md:text-5xl font-normal tracking-tight text-classic-black">
              not sure where to begin?
            </p>
            <p className="text-charcoal/80 text-sm mt-3 max-w-md">
              Four paths. Romance. Role play. The hard work. Pick the one that calls you.
            </p>
          </div>
          <Link href="/quiz" className="shrink-0 px-10 py-4 bg-deep-red text-pearl-white font-bold rounded-sm hover:bg-mahogany transition-all text-xs uppercase tracking-[0.4em] tap-scale">
            choose your path
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* Social */}
      <ScrollReveal>
      <section className="section-padding border-t border-charcoal/20">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-charcoal/80 mb-4">follow</p>
          <SocialLinks variant="inline" />
          <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:text-mahogany font-bold text-xs mt-3 inline-block tracking-[0.25em] uppercase">
            {SITE.handle}
          </a>
          <Link href="/media-press" className="block mt-6 text-charcoal hover:text-deep-red font-medium text-sm">
            Watch on TikTok & Instagram →
          </Link>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
