import Link from "next/link";

const FREE_RESOURCES = [
  { title: "12 Types of Intimacy", href: "/resources#intimacy", desc: "Emotional, physical, spiritual, and more" },
  { title: "Date Night at Home Guide", href: "/resources#at-home", desc: "Ideas for connection without leaving the house" },
  { title: "FL Date Night Guide", href: "/resources#florida", desc: "Orlando and beyond" },
  { title: "7-Day Reset", href: "/resources#7day", desc: "Included in Spicy Text Playbook" },
];

export default function ResourcesPage() {
  return (
    <div>
      <section className="section-padding bg-pearl-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-6">Free Resources</h1>
          <p className="text-xl text-charcoal mb-12">
            High-value guides to encourage you to return. Download, explore, and share.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {FREE_RESOURCES.map((r) => (
              <Link key={r.href} href={r.href} className="block p-8 bg-white border border-charcoal/10 rounded-lg hover:border-charcoal/20 card-hover">
                <h2 className="font-display text-xl font-semibold mb-2">{r.title}</h2>
                <p className="text-charcoal">{r.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/date-nights" className="btn-primary">Date Night Spark Generator</Link>
          </div>
        </div>
      </section>

      <section id="intimacy" className="section-padding bg-white border-t border-charcoal/10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4">12 Types of Intimacy</h2>
          <p className="text-charcoal mb-6">
            Emotional, physical, intellectual, spiritual, recreational, creative, financial, commitment, conflict, crisis, healing, celebration. Beyond the physical — the full spectrum of connection.
          </p>
          <Link href="/resources#intimacy" className="text-charcoal font-medium hover:underline">Explore the 12 forms →</Link>
        </div>
      </section>

      <section id="at-home" className="section-padding bg-pearl-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4">Date Night at Home Guide</h2>
          <p className="text-charcoal mb-6">
            Ideas for connection without leaving the house. The spicy texts. The slow mornings. Coming soon.
          </p>
        </div>
      </section>

      <section id="florida" className="section-padding bg-white border-t border-charcoal/10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4">FL Date Night Guide</h2>
          <p className="text-charcoal mb-6">
            Orlando and beyond. Moon-approved spots: Winter Park, Lake Eola, St. Augustine, Key West. Curated for connection.
          </p>
          <Link href="/date-nights" className="text-charcoal font-medium hover:underline">Try the Spark Generator →</Link>
        </div>
      </section>

      <section id="7day" className="section-padding bg-pearl-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4">7-Day Reset</h2>
          <p className="text-charcoal mb-6">
            Included in the Spicy Text Playbook. A week of intentional reconnection.
          </p>
          <Link href="/guides" className="text-charcoal font-medium hover:underline">View Spicy Text Playbook →</Link>
        </div>
      </section>
    </div>
  );
}
