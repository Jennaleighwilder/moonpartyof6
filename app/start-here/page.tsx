import Link from "next/link";
import { SparkGenerator } from "@/components/spark-generator/SparkGenerator";

export default function StartHerePage() {
  return (
    <div>
      <section className="section-padding bg-pearl-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-6">If you're new here</h1>
          <p className="text-xl text-charcoal mb-12">
            Welcome. We're Dee and Josh Moon. This page is your map — pick a path and start exploring.
          </p>
          <div className="space-y-6">
            <Link href="/our-story" className="block p-6 bg-white border border-charcoal/10 rounded-lg hover:border-deep-red/30 transition-colors">
              <span className="font-display text-xl font-semibold">Learn our love story</span>
              <p className="text-charcoal mt-2">How we built our life together</p>
            </Link>
            <Link href="/resources" className="block p-6 bg-white border border-charcoal/10 rounded-lg hover:border-deep-red/30 transition-colors">
              <span className="font-display text-xl font-semibold">Explore free relationship guides</span>
              <p className="text-charcoal mt-2">Date nights, intimacy, communication</p>
            </Link>
            <Link href="/media-press" className="block p-6 bg-white border border-charcoal/10 rounded-lg hover:border-deep-red/30 transition-colors">
              <span className="font-display text-xl font-semibold">Watch our most popular content</span>
              <p className="text-charcoal mt-2">Reels, podcasts, viral moments</p>
            </Link>
            <Link href="/mrs-moon" className="block p-6 bg-white border border-charcoal/10 rounded-lg hover:border-deep-red/30 transition-colors">
              <span className="font-display text-xl font-semibold">Book Dee for speaking</span>
              <p className="text-charcoal mt-2">Events, workshops, retreats</p>
            </Link>
            <Link href="/mr-moon" className="block p-6 bg-white border border-charcoal/10 rounded-lg hover:border-deep-red/30 transition-colors">
              <span className="font-display text-xl font-semibold">Work with Mr. Moon</span>
              <p className="text-charcoal mt-2">Bookkeeping, men's romance tutorial</p>
            </Link>
            <Link href="/quiz" className="block p-6 bg-deep-red/10 border-2 border-deep-red rounded-xl hover:bg-deep-red/20 transition-colors">
              <span className="font-display text-xl font-semibold text-deep-red">Choose your own adventure</span>
              <p className="text-charcoal mt-2">Four paths. Lovers, Travel, Spark, Compass. Pick the one that calls you.</p>
            </Link>
          </div>
        </div>
      </section>
      <SparkGenerator />
    </div>
  );
}
