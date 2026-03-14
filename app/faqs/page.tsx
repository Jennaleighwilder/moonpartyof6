"use client";

import { useState } from "react";

const FAQS = [
  { q: "Are you marriage counselors?", a: "No. We are relationship educators and coaches. Our content is based on personal experience, education, and research (including Gottman-informed principles). It is not a substitute for professional therapy." },
  { q: "What if I send the spicy text, wear the lingerie, or try to initiate — and my partner's response is lackluster or nonexistent?", a: "If that's you, please know there's nothing wrong with you. You're not undesirable, or 'too much.' This is incredibly common, especially for women. According to the Gottman Institute, many partners don't respond because they genuinely don't know what the expectation is, what you want next, or how to respond without getting it 'wrong.' What often feels like rejection might be nervousness or fear of misstepping. The answer isn't to make yourself smaller or stop trying. It's learning how to say what you want in a way that feels safe and clear for both of you. Sometimes that means actually naming what you're hoping for instead of testing them to see if they 'get it.' You're not alone — and healthy relationships look different for everyone. Learning how to meet each other where you are is part of the work." },
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
