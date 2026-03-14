"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { getDateIdea, buildShareUrl } from "@/lib/dateIdeas";
import { SITE } from "@/lib/siteConfig";
import { DateNightShareBar } from "@/components/spark-generator/DateNightShareBar";

function DateNightCardContent() {
  const searchParams = useSearchParams();
  const vibe = searchParams.get("vibe") || "stayIn";
  const spice = searchParams.get("spice") || "tender";
  const time = searchParams.get("time") || "60";
  const area = searchParams.get("area") || undefined;

  const idea = getDateIdea(vibe, spice, time, area);
  const [shareUrl, setShareUrl] = useState("");
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    setShareUrl(buildShareUrl({ vibe, spice, time, area }));
  }, [vibe, spice, time, area]);

  // Add to Calendar — Popup-style (Google Calendar)
  const handleAddToCalendar = () => {
    const title = encodeURIComponent(idea.title);
    const details = encodeURIComponent(`${idea.tagline}\n\n${idea.desc}\n\nText to send them: "${idea.text}"\n\n— ${SITE.name}`);
    const location = idea.areaHint ? encodeURIComponent(idea.areaHint) : "";
    const start = new Date();
    start.setHours(19, 0, 0);
    const end = new Date(start);
    end.setHours(21, 0, 0);
    const startStr = start.toISOString().replace(/-|:|\.\d+/g, "").slice(0, 15);
    const endStr = end.toISOString().replace(/-|:|\.\d+/g, "").slice(0, 15);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  const handleCopyShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch (_) {}
  };

  return (
    <div
      className="min-h-screen bg-pearl-white"
      style={{ fontFamily: "var(--font-playfair), serif" }}
    >
      {/* Popup-style event hero — image + gradient, Ken Burns feel */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-28 overflow-hidden"
      >
        <div className="absolute inset-0 ken-burns">
          <img
            src="/images/hero-maine.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(17,17,17,0.98) 0%, rgba(75,31,31,0.9) 35%, rgba(122,12,24,0.6) 70%, rgba(169,111,19,0.3) 100%)",
          }}
        />
        <div className="relative z-10" style={{ color: "#F5F5F5" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-pearl-white/70 mb-4">Your Date Night</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
            {idea.title}
          </h1>
          <p className="text-xl text-pearl-white/90 italic mb-6">{idea.tagline}</p>
          {idea.areaHint && (
            <p className="text-sm uppercase tracking-wider text-deep-red/90 mb-8">
              Moon-approved · {idea.areaHint}
            </p>
          )}

          {/* Popup-style CTA row: Add to Calendar + Share */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-2 px-8 py-4 bg-deep-red text-pearl-white font-medium tracking-wider uppercase rounded-lg hover:bg-mahogany transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Add to Calendar
            </button>
            <button
              onClick={handleCopyShare}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-pearl-white/50 text-pearl-white font-medium tracking-wider uppercase rounded-lg hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              {shareCopied ? "✓ Copied!" : "Share with your love"}
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="border-t border-charcoal/20 pt-12">
          <p className="text-charcoal text-lg leading-relaxed mb-8">{idea.desc}</p>

          <div className="bg-classic-black/5 rounded-xl p-6 mb-8 border border-charcoal/10">
            <p className="text-xs uppercase tracking-wider text-charcoal/70 mb-2">Text to send them</p>
            <p className="text-classic-black text-lg italic leading-relaxed">&quot;{idea.text}&quot;</p>
          </div>

          <div className="space-y-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-wider text-deep-red mb-2">Why this works</p>
              <p className="text-charcoal leading-relaxed">{idea.wisdom}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-deep-red mb-2">Pro tip</p>
              <p className="text-charcoal leading-relaxed">{idea.tip}</p>
            </div>
          </div>

          {/* Share to your love — full bar */}
          <div className="border-t border-charcoal/20 pt-8">
            <p className="font-display text-xl font-semibold text-classic-black mb-2 text-center">
              Send this to your love
            </p>
            <p className="text-charcoal text-sm text-center mb-6">
              Email, text, WhatsApp — or copy the link to share the full date idea
            </p>
            <DateNightShareBar url={shareUrl} title={idea.title} text={idea.text} />
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/date-nights"
              className="inline-block px-8 py-4 bg-deep-red text-pearl-white font-medium rounded-lg hover:bg-mahogany transition-colors"
            >
              Generate Another Spark
            </Link>
            <p className="mt-6 text-sm text-charcoal">
              From <a href="/" className="text-deep-red hover:underline">{SITE.name}</a> · <a href={SITE.handleLink} target="_blank" rel="noopener noreferrer" className="text-deep-red hover:underline">{SITE.handle}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DateNightPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-pearl-white">
        <div className="w-10 h-px bg-deep-red animate-pulse" />
      </div>
    }>
      <DateNightCardContent />
    </Suspense>
  );
}
