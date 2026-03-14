import { SocialLinks } from "@/components/SocialLinks";
import { SITE, TIKTOK } from "@/lib/siteConfig";

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

          {/* Featured videos — from TikTok/Reels */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-semibold mb-4">Featured Videos</h3>
            <p className="text-charcoal mb-6">Viral moments, date ideas, and real marriage content.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="rounded-xl overflow-hidden border border-charcoal/10 bg-classic-black aspect-[9/16] max-h-[400px] mx-auto">
                  <video
                    src={`/videos/video-${n}.mp4`}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* TikTok — video links + CTA */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-charcoal to-classic-black text-pearl-white">
            <h3 className="font-display text-2xl font-semibold mb-2">TikTok — @moonpartyof6</h3>
            <p className="text-pearl-white/80 mb-6">More viral moments, date ideas, and real marriage content.</p>
            <a href={TIKTOK.profile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-deep-red text-pearl-white font-bold rounded-lg hover:bg-mahogany transition-all hover:scale-105">
              Watch on TikTok →
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
              <h3 className="font-display text-xl font-semibold mb-2">Instagram Reels</h3>
              <p className="text-charcoal mb-4">Short-form content on Instagram</p>
              <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline text-sm">
                View @moonpartyof6 on Instagram →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
