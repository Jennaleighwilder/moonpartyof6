import { SparkGenerator } from "@/components/spark-generator/SparkGenerator";
import { TravelQuiz } from "@/components/travel-quiz/TravelQuiz";
import { HorizontalCarousel } from "@/components/carousels/HorizontalCarousel";
import Link from "next/link";

// Each section = its own magazine chapter. Choose your own adventure.

export default function DateNightsPage() {
  return (
    <div>
      {/* Chapter 1: Spark — flirty, intimate, tonight */}
      <section className="min-h-[60vh] flex flex-col justify-center bg-deep-red text-pearl-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          <Link href="/quiz" className="text-xs uppercase tracking-widest text-pearl-white/50 hover:text-pearl-white transition-colors">
            ← choose another path
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] mt-8 opacity-70">
            Date Night Spark · flirty · intimate · tonight
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-normal mt-4 max-w-2xl">
            Need a spark tonight?
          </h1>
          <p className="mt-6 text-lg opacity-90 max-w-xl">
            Vibe, spice, time, area. Four questions. One personalized idea. Send it to your love.
          </p>
        </div>
      </section>

      <SparkGenerator variant="editorial" />

      {/* Chapter 2: Where You're Called — travel pic background */}
      <section
        className="relative min-h-[55vh] flex flex-col justify-center text-pearl-white border-t-2 border-charcoal/10 overflow-hidden"
        style={{
          backgroundImage: "url(/images/gallery-beach.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/30" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          <p className="text-xs uppercase tracking-[0.35em] text-warm-gold font-bold">
            Where You're Called · wanderlust · vintage · postcard
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-normal mt-4 max-w-2xl text-pearl-white">
            Where are you being called?
          </h2>
          <p className="mt-6 text-pearl-white/90 text-lg max-w-xl">
            Three questions. One destination. A postcard from your next adventure.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#f8f0e6] border-t border-charcoal/10">
        <TravelQuiz variant="editorial" />
      </section>

      {/* Chapter 3: Lover Lairs — pier pic background */}
      <section
        className="relative section-padding text-pearl-white overflow-hidden"
        style={{
          backgroundImage: "url(/images/gallery-pier.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
        }}
      >
        <div className="absolute inset-0 bg-classic-black/85" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-deep-red/70">
            Lover Lairs · secret spots · moon-approved
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mt-4 max-w-xl">
            Hideaways made for two
          </h2>
          <p className="mt-6 text-pearl-white/60 max-w-xl">
            The kind of places that feel like they were made for you.
          </p>
          <div className="mt-12">
            <HorizontalCarousel />
          </div>
          <div className="mt-12">
            <Link href="/lovers" className="text-deep-red/90 hover:text-deep-red font-medium text-sm">
              Lovers & Patterns — 5 questions to glimpse your love pattern →
            </Link>
          </div>
        </div>
      </section>

      {/* Crossroads */}
      <section className="section-padding bg-pearl-white border-t border-charcoal/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-charcoal/70">More paths. More adventures.</p>
          <Link href="/quiz" className="inline-block mt-4 text-deep-red font-medium hover:underline">
            Choose another path →
          </Link>
        </div>
      </section>
    </div>
  );
}
