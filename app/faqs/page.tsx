"use client";

import { useState } from "react";

const FAQS = [
  { q: "Are you marriage counselors?", a: "No. We are relationship educators and coaches. Our content is based on personal experience, education, and research (including Gottman-informed principles). It is not a substitute for professional therapy." },
  { q: "Do you offer coaching?", a: "We offer speaking engagements, retreats, and digital guides. One-on-one coaching may be available — contact us for details." },
  { q: "How do we book you?", a: "Use our Contact form and select 'Speaking' or your inquiry type. Dee's speaking honorarium is travel expenses only." },
  { q: "What are the retreats?", a: "Our retreats are immersive experiences for couples. We partner with Hidden Honey Homes (code: MOON) and other venues." },
  { q: "Are these resources therapy?", a: "No. Our guides and content are for informational and educational purposes. They are not a substitute for professional therapy or counseling." },
];

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <section className="section-padding bg-pearl-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-12">FAQs</h1>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-charcoal/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full p-6 text-left font-display text-lg font-semibold flex justify-between items-center"
                >
                  {faq.q}
                  <span className="text-deep-red">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-charcoal">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
