"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { DEE_SOCIALS } from "@/lib/siteConfig";

// Add dee.jpg to public/images/ for Dee's portrait
const DEE_IMAGE = "/images/dee.png";

export default function MrsMoonPage() {
  const [imgError, setImgError] = useState(false);
  return (
    <div>
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="museum-glass aspect-square max-w-md mx-auto rounded-lg mb-8 bg-charcoal/10 relative flex items-center justify-center">
            {!imgError ? (
              <Image
                src={DEE_IMAGE}
                alt="Dee Moon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                onError={() => setImgError(true)}
              />
            ) : null}
            {imgError && <span className="text-6xl">✨</span>}
          </div>
          <h1 className="font-display text-4xl font-semibold mb-6">Mrs. Moon — Dee Moon</h1>
          <p className="text-charcoal text-lg leading-relaxed mb-6">
            Dee holds a Master&apos;s in Counseling (Marriage & Family focus) and a Bachelor&apos;s in Psychology. Her experience includes crisis hotline work, sexual assault response, pregnancy resources, and volunteer work. She speaks on relationships, communication, and intimacy.
          </p>

          <div className="p-6 bg-charcoal/5 border-l-4 border-deep-red rounded-r-lg mb-8">
            <p className="text-charcoal text-lg leading-relaxed italic mb-2">
              &quot;We always see what he does for you… but what do you ever do for him?&quot;
            </p>
            <p className="text-charcoal leading-relaxed">
              I want to say this clearly: these videos are not a measure of my value or my worth. This platform isn&apos;t performative. It offers peeks, not the whole picture. So often, when people ask what I&apos;m doing for him, what they&apos;re really asking is, what am I doing to deserve this level of appreciation from my partner — instead of recognizing something much simpler: that this is what mutual love can look like. And I don&apos;t have to &quot;do or prove&quot; anything to earn it. My inherent value is enough. You see the ways he shows up for me because that&apos;s how he loves. But the ways I love him? It doesn&apos;t always look the same. This platform is, in many ways, a love letter to him. I hold the quiet moments, the behind-the-scenes, the unseen — the parts that don&apos;t always end up in a social media clip. I don&apos;t show love in the same ways he loves me, and that&apos;s okay. Because if you&apos;re keeping score, you&apos;ll miss the whole point.
            </p>
          </div>

          <p className="text-charcoal mb-8">
            Speaking honorarium: travel expenses only. Book Dee for your event, workshop, or retreat.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/contact?inquiry=speaking" className="btn-primary">Book Dee for Speaking</Link>
            <a href="/intakes/DEE_WOMENS_INTAKE_COMPLETE.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">Women's Intake Form</a>
            <Link href="/retreats" className="btn-secondary">View Retreats</Link>
          </div>
          <div className="pt-8 border-t border-charcoal/10">
            <p className="text-sm font-medium text-charcoal/70 mb-3">Follow Dee</p>
            <div className="flex flex-wrap gap-4">
              {DEE_SOCIALS.map((s) => (
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
