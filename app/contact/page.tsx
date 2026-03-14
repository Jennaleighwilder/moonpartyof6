import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { SITE, CONTACT } from "@/lib/siteConfig";

export default function ContactPage() {
  return (
    <div>
      <section className="section-padding bg-pearl-white">
        <div className="max-w-xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-6">Contact</h1>
          <p className="text-charcoal mb-8">
            Speaking, retreats, collaborations, or general inquiries — we'd love to hear from you.
          </p>

          <div className="mb-10 p-6 bg-white border border-charcoal/10 rounded-xl">
            <p className="text-sm font-medium text-charcoal/70 mb-2">Reach us</p>
            <a href={`mailto:${CONTACT.email}`} className="text-deep-red font-medium hover:underline block mb-1">
              {CONTACT.email}
            </a>
            <p className="text-charcoal/80 text-sm mb-4">{CONTACT.location}</p>
            <a href={SITE.beaconsLink} target="_blank" rel="noopener noreferrer" className="text-deep-red font-medium hover:underline block mb-4">
              All links → beacons.ai/moonpartyof6
            </a>
            <p className="text-sm font-medium text-charcoal/70 mb-2">Follow us</p>
            <SocialLinks variant="inline" showLabels className="mb-2" />
            <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-charcoal/80 hover:text-deep-red text-sm">
              {SITE.handle}
            </a>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 border border-charcoal/30 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-charcoal/30 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Inquiry type</label>
              <select className="w-full px-4 py-3 border border-charcoal/30 rounded-lg">
                <option>General</option>
                <option>Speaking</option>
                <option>Retreat</option>
                <option>Collaboration</option>
                <option>Bookkeeping</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 border border-charcoal/30 rounded-lg" />
            </div>
            <button type="submit" className="btn-primary w-full">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}
