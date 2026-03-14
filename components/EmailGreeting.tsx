"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE, CONTACT } from "@/lib/siteConfig";

/**
 * Premium email capture — high-end greeting, ultimate list builder.
 * Luxe styling: mahogany, pearl, restrained gold accent.
 */
export function EmailGreeting() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (formId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim(), _subject: "Moonpartyof6 — Inner Circle signup" }),
        });
        if (!res.ok) throw new Error("Submit failed");
      } catch {
        setStatus("error");
        return;
      }
    } else {
      await new Promise((r) => setTimeout(r, 600));
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="email" className="relative overflow-hidden scroll-mt-20 bg-classic-black/95">
      <div className="relative z-10 section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-champagne-gold/90 mb-6 font-bold">
              the moonparty awaits
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-pearl-white mb-4 leading-[1.4]">
              Join the Inner Circle
            </h2>
            <p className="text-sleek-silver/90 text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed">
              Monthly emails about relationships, communication, romance ideas, and behind-the-scenes life. No spam — just the good stuff.
            </p>

            {status === "error" ? (
              <div className="py-8 px-6 bg-charcoal/50 backdrop-blur-sm border border-champagne-gold/20 rounded-xl">
                <p className="text-pearl-white">Something went wrong. Try again or email us at {CONTACT.email}.</p>
              </div>
            ) : status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-8 bg-charcoal/50 backdrop-blur-sm border border-champagne-gold/30 rounded-xl"
              >
                <p className="font-display text-xl text-pearl-white">
                  You&apos;re in. Check your inbox for a welcome from us.
                </p>
                <p className="text-sleek-silver/80 text-sm mt-2">
                  We&apos;ll see you there.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your best email"
                    required
                    disabled={status === "submitting"}
                    className="flex-1 px-6 py-4 bg-obsidian/80 border border-champagne-gold/20 rounded-lg text-pearl-white placeholder:text-sleek-silver/50 focus:outline-none focus:ring-2 focus:ring-champagne-gold/30 focus:border-champagne-gold transition-all disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="px-8 py-4 bg-deep-red text-pearl-white font-bold uppercase tracking-[0.35em] text-sm rounded-lg hover:bg-mahogany transition-all disabled:opacity-60 shrink-0"
                  >
                    {status === "submitting" ? "Joining…" : "Join"}
                  </button>
                </div>
                <p className="text-xs text-sleek-silver/60">
                  Unsubscribe anytime. We respect your inbox.
                </p>
              </form>
            )}

            <p className="mt-8 text-sm text-sleek-silver/60">
              {SITE.name} · {SITE.tagline}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
