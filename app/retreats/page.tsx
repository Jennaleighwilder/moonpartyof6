import Link from "next/link";

export default function RetreatsPage() {
  return (
    <div>
      <section className="section-padding bg-pearl-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-6">Retreats & Experiences</h1>
          <p className="text-xl text-charcoal mb-4">
            Gottman meets luxury. Couples retreats designed for connection, reflection, and renewal.
          </p>
          <p className="text-charcoal/80 mb-12">
            We partner with intimate venues built for couples who want to reconnect, rekindle, or protect the spark they&apos;ve worked hard to build.
          </p>

          <div className="space-y-12">
            {/* Tiki Sunset Retreat — Fort Lauderdale */}
            <div className="p-8 bg-white border border-charcoal/10 rounded-xl">
              <h2 className="font-display text-2xl font-semibold mb-2">Relax & Rejuvenate Retreats</h2>
              <p className="text-charcoal font-medium mb-2">Tiki Sunset Retreat · Fort Lauderdale, Florida</p>
              <p className="text-charcoal mb-6">
                We&apos;ll be there end of June. Website updating soon — reach out for details.
              </p>
              <a
                href="https://www.tikisunsetretreat.com/retreats"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Tiki Sunset Retreat →
              </a>
            </div>

            {/* Hidden Honey Homes — Maine & beyond */}
            <div className="p-8 bg-white border border-charcoal/10 rounded-xl">
              <h2 className="font-display text-2xl font-semibold mb-2">Hidden Honey Homes</h2>
              <p className="text-charcoal mb-6">
                Intentionally designed for comfort and intimacy. Water views, snowfall, fireplace, spa massage room, gourmet kitchen, hot tub. Use code <strong>MOON</strong> when booking.
              </p>
              <a
                href="https://hiddenhoneyhomes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                Hidden Honey Homes →
              </a>
            </div>
          </div>

          <div className="mt-12 p-6 bg-charcoal/5 rounded-xl border border-charcoal/10">
            <p className="text-charcoal mb-4">Questions about retreats or want to host us at your venue?</p>
            <Link href="/contact?inquiry=retreat" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
