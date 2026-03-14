import { SparkGenerator } from "@/components/spark-generator/SparkGenerator";
import { TravelQuiz } from "@/components/travel-quiz/TravelQuiz";
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

      {/* Chapter 2: Where You're Called — wanderlust, vintage, postcard */}
      <section className="min-h-[50vh] flex flex-col justify-center bg-[#f8f0e6] text-mahogany border-t-2 border-charcoal/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-mahogany/70">
            Where You're Called · wanderlust · vintage · postcard
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-normal mt-4 max-w-2xl">
            Where are you being called?
          </h2>
          <p className="mt-6 text-charcoal/80 text-lg max-w-xl">
            Three questions. One destination. A postcard from your next adventure.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#f8f0e6] border-t border-charcoal/10">
        <TravelQuiz variant="editorial" />
      </section>

      {/* Chapter 3: Lover Lairs — secret spots, editorial grid */}
      <section className="section-padding bg-classic-black text-pearl-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-deep-red/70">
            Lover Lairs · secret spots · moon-approved
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal mt-4 max-w-xl">
            Hideaways made for two
          </h2>
          <p className="mt-6 text-pearl-white/60 max-w-xl">
            The kind of places that feel like they were made for you.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Winter Park — Park Avenue", desc: "Stroll, shop, share a gelato. Old Florida charm." },
              { name: "Lake Eola — Orlando", desc: "Swan boats, sunset, and the city skyline." },
              { name: "St. Augustine — St. George Street", desc: "Cobblestones, courtyards, centuries of romance." },
              { name: "Key West — Mallory Square", desc: "Sunset ritual. Street performers. Salt air." },
            ].map((spot) => (
              <div key={spot.name} className="p-6 rounded-xl border border-pearl-white/10 hover:border-deep-red/30 hover:bg-deep-red/5 transition-all">
                <h3 className="font-display text-lg font-normal">{spot.name}</h3>
                <p className="text-sm text-pearl-white/60 mt-2">{spot.desc}</p>
              </div>
            ))}
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
