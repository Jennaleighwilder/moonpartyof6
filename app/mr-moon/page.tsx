"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { JOSH_SOCIALS } from "@/lib/siteConfig";

// Add josh.jpg to public/images/ for Josh's portrait
const JOSH_IMAGE = "/images/josh.png";

export default function MrMoonPage() {
  const [imgError, setImgError] = useState(false);
  return (
    <div>
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-square max-w-md mx-auto rounded-lg mb-8 overflow-hidden bg-charcoal/10 relative flex items-center justify-center">
            {!imgError ? (
              <Image
                src={JOSH_IMAGE}
                alt="Josh Moon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                onError={() => setImgError(true)}
              />
            ) : null}
            {imgError && <span className="text-6xl">🌟</span>}
          </div>
          <h1 className="font-display text-4xl font-semibold mb-6">Mr. Moon — Josh Moon</h1>
          <p className="text-charcoal text-lg leading-relaxed mb-6">
            Josh brings the male perspective to modern relationships. As a husband of 14 years and father of four, he believes romance isn't about grand gestures once a year — it's about daily intention, small acts of care, and learning how to truly see your partner.
          </p>
          <p className="text-charcoal mb-6">
            Josh holds an MBA and Master's in Accountancy. He offers monthly bookkeeping services. <strong>Note: The 2027 tax season waitlist is currently full.</strong>
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/guides" className="btn-primary">Men's Romance Tutorial</Link>
            <a href="/intakes/JOSH_MENS_INTAKE_COMPLETE.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">Men's Intake Form</a>
            <Link href="/contact?inquiry=bookkeeping" className="btn-secondary">Bookkeeping Inquiry</Link>
          </div>
          <div className="pt-8 border-t border-charcoal/10">
            <p className="text-sm font-medium text-charcoal/70 mb-3">Follow Josh</p>
            <div className="flex flex-wrap gap-4">
              {JOSH_SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline font-medium">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
