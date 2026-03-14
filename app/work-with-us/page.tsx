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

          <div className="mb-12">
            <h3 className="font-display text-xl font-semibold mb-4">Brands We&apos;ve Collabed With</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="https://hiddenhoneyhomes.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-charcoal/10 rounded-lg hover:border-deep-red/30 transition-colors font-medium">
                Hidden Honey Homes
              </a>
              <a href="https://www.tikisunsetretreat.com/retreats" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-charcoal/10 rounded-lg hover:border-deep-red/30 transition-colors font-medium">
                Tiki Sunset Retreat
              </a>
              <a href="https://www.instagram.com/easterlystthomas" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-charcoal/10 rounded-lg hover:border-deep-red/30 transition-colors font-medium">
                Easterly St Thomas
              </a>
            </div>
          </div>

          <div className="mb-12 p-6 bg-white border border-charcoal/10 rounded-xl">
            <p className="text-sm font-medium text-charcoal/70 mb-3">Connect</p>
            <SocialLinks variant="inline" showLabels />
            <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline text-sm mt-2 inline-block">
              {SITE.handle}
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-2">Speaking Events</h3>
              <p className="text-charcoal">Dee speaks on relationships, communication, intimacy. Travel expenses only.</p>
            </div>
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg md:col-span-2">
              <h3 className="font-display text-xl font-semibold mb-2">Sponsored Content</h3>
              <p className="text-charcoal">Authentic partnerships for retreats, date spots, lifestyle brands.</p>
            </div>
          </div>
          <Link href="/contact?inquiry=collab" className="btn-primary mt-8 inline-block">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
