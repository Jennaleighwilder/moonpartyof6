import Link from "next/link";

const FREE_RESOURCES = [
  { title: "Date Night at Home Guide", href: "/resources#at-home", desc: "Ideas for connection without leaving the house" },
  { title: "Florida Date Night Guide", href: "/resources#florida", desc: "Orlando and beyond" },
  { title: "12 Types of Intimacy", href: "/resources#intimacy", desc: "Beyond the physical" },
  { title: "Communication Tools", href: "/resources#communication", desc: "Scripts and prompts" },
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
              <Link key={r.href} href={r.href} className="block p-8 bg-white border border-charcoal/10 rounded-lg hover:border-deep-red/30 card-hover">
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

      {/* Date Nights & Travel — linked from Date Nights page */}
      <section id="orlando" className="section-padding bg-white border-t border-charcoal/10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4">Orlando Date Nights</h2>
          <p className="text-charcoal mb-6">
            Moon-approved spots in Orlando: Winter Park, Lake Eola, Mills 50, Thornton Park, and more. Curated for connection.
          </p>
          <Link href="/date-nights" className="text-deep-red font-medium hover:underline">Try the Spark Generator →</Link>
        </div>
      </section>

      <section id="getaways" className="section-padding bg-pearl-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4">Weekend Getaways</h2>
          <p className="text-charcoal mb-6">
            St. Augustine, Key West, Amelia Island, Savannah — romantic escapes within driving distance. Where are you being called?
          </p>
          <Link href="/date-nights" className="text-deep-red font-medium hover:underline">Take the travel quiz →</Link>
        </div>
      </section>

      <section id="restaurants" className="section-padding bg-white border-t border-charcoal/10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4">Romantic Restaurants</h2>
          <p className="text-charcoal mb-6">
            Intimate tables, great food, and the kind of ambiance that makes you lean in. Orlando and Florida favorites.
          </p>
        </div>
      </section>

      <section id="travel" className="section-padding bg-pearl-white scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold mb-4">Travel Guides</h2>
          <p className="text-charcoal mb-6">
            Destination guides for couples. Where to stay, what to do, and how to make the most of your time together.
          </p>
          <Link href="/date-nights" className="text-deep-red font-medium hover:underline">Where are you being called? →</Link>
        </div>
      </section>
    </div>
  );
}
