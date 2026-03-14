import Link from "next/link";

const PAID_GUIDES = [
  { title: "Spicy Text Playbook", price: "$", desc: "Flirty, reconnecting texts. Includes 7-day reset.", intake: "/intakes/COUPLES_SPICY_INTAKE_COMPLETE.html" },
  { title: "30-Day Reset", price: "$", desc: "A month of intentional connection" },
  { title: "Mr. Moon — Modern Romance", price: "$", desc: "Josh's guide for men (title TBD)", bundle: "Bundle option with Spicy Text Playbook" },
  { title: "A Busy Dad's Guide to Fitness", price: "$", desc: "TBD" },
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
                <p className="text-charcoal mb-2">{g.desc}</p>
                {g.bundle && <p className="text-charcoal/70 text-sm mb-2">{g.bundle}</p>}
                <p className="text-charcoal font-semibold mb-4">Price TBD</p>
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
