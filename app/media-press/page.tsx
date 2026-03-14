import { SocialLinks } from "@/components/SocialLinks";
import { SITE } from "@/lib/siteConfig";

export default function MediaPressPage() {
  return (
    <div>
      <section className="section-padding bg-pearl-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-6">Media & Press</h1>
          <p className="text-xl text-charcoal mb-12">
            Podcast appearances, viral content, and featured moments.
          </p>

          <div className="mb-12 p-6 bg-white border border-charcoal/10 rounded-xl">
            <p className="text-sm font-medium text-charcoal/70 mb-3">Follow us</p>
            <SocialLinks variant="inline" showLabels />
            <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline text-sm mt-2 inline-block">
              {SITE.handle}
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-2">Podcast Appearances</h3>
              <p className="text-charcoal mb-4">[Placeholder for podcast logos/links]</p>
              <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline text-sm">
                {SITE.handle}
              </a>
            </div>
            <div className="p-6 bg-white border border-charcoal/10 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-2">Viral Content</h3>
              <p className="text-charcoal mb-4">TikTok & Instagram reels</p>
              <SocialLinks variant="inline" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
