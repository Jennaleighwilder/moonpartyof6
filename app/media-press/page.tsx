import { SocialLinks } from "@/components/SocialLinks";
import { SITE, TIKTOK } from "@/lib/siteConfig";

/** Popular TikTok videos — Dee is a public figure, content is public and legal to link */
const TIKTOK_VIDEOS = [
  { id: "profile", label: "TikTok profile", href: TIKTOK.profile },
  // Add video IDs when known: { id: "7123456789", label: "Video title", href: "https://tiktok.com/@moonpartyof6/video/7123456789" },
];

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
              <h3 className="font-display text-xl font-semibold mb-2">TikTok — Popular Videos</h3>
              <p className="text-charcoal mb-4">Viral moments from @moonpartyof6</p>
              <ul className="space-y-2">
                {TIKTOK_VIDEOS.map((v) => (
                  <li key={v.id}>
                    <a href={v.href} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline text-sm">
                      {v.label} →
                    </a>
                  </li>
                ))}
              </ul>
              <a href={TIKTOK.profile} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline text-sm mt-3 inline-block">
                View all on TikTok →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
