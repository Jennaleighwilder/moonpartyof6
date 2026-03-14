import Link from "next/link";

const PAID_GUIDES = [
  { title: "Spicy Text Playbook", price: "TBD", desc: "Dee's guide to flirty, reconnecting texts", intake: "/intakes/COUPLES_SPICY_INTAKE_COMPLETE.html" },
  { title: "30-Day Relationship Reset", price: "TBD", desc: "A month of intentional connection" },
  { title: "Mr. Moon: Modern Romance", price: "TBD", desc: "Josh's guide for men" },
  { title: "Busy Dad's Guide to Fitness", price: "TBD", desc: "TBD" },
];

export default function GuidesPage() {
  return (
    <div>
      <section className="section-padding bg-pearl-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-6">Guides & Tutorials</h1>
          <p className="text-xl text-charcoal mb-12">
            Premium resources for couples ready to go deeper.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {PAID_GUIDES.map((g) => (
              <div key={g.title} className="p-8 bg-white border border-charcoal/10 rounded-lg">
                <h2 className="font-display text-xl font-semibold mb-2">{g.title}</h2>
                <p className="text-charcoal mb-4">{g.desc}</p>
                <p className="text-deep-red font-semibold mb-4">{g.price}</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/contact?inquiry=guide" className="btn-primary text-sm py-2 px-4">Learn More</Link>
                  {g.intake && (
                    <a href={g.intake} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">Couples Intake</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
