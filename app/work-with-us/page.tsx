import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { SITE } from "@/lib/siteConfig";

export default function WorkWithUsPage() {
  return (
    <div>
      <section className="section-padding bg-pearl-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-6">Work With Us</h1>
          <p className="text-xl text-charcoal mb-12">
            Brand collaborations, tourism partnerships, podcast interviews, speaking events, and sponsored content.
          </p>

          <div className="mb-12 p-6 bg-white border border-charcoal/10 rounded-xl">
            <p className="text-sm font-medium text-charcoal/70 mb-3">Connect</p>
            <SocialLinks variant="inline" showLabels />
            <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline text-sm mt-2 inline-block">
              {SITE.handle}
            </a>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-2">Brand Collaborations</h3>
              <p className="text-charcoal">Partnerships with brands aligned with our values.</p>
            </div>
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-2">Tourism Partnerships</h3>
              <p className="text-charcoal">Travel and date-night destination features.</p>
            </div>
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-2">Podcast Interviews</h3>
              <p className="text-charcoal">Book Dee and Josh for your show.</p>
            </div>
          </div>
          <Link href="/contact?inquiry=collab" className="btn-primary mt-8 inline-block">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
