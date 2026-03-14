"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getDateIdea, buildShareUrl, AREAS } from "@/lib/dateIdeas";
import { DateNightShareBar } from "./DateNightShareBar";
import { InvitationCard } from "./InvitationCard";
import { BlueprintMap } from "./BlueprintMap";

/** Esoteric: "What is the current mood of your union?" — maps to vibe */
const MOODS = [
  { id: "tender", label: "Tender", desc: "We need to slow down", vibe: "reconnect" as const, spice: "tender" as const },
  { id: "playful", label: "Playful", desc: "We want to flirt", vibe: "goOut" as const, spice: "flirty" as const },
  { id: "heated", label: "Heated", desc: "We're ready for more", vibe: "stayIn" as const, spice: "heated" as const },
  { id: "seeking", label: "Seeking", desc: "Surprise us", vibe: "surpriseMe" as const, spice: "flirty" as const },
];

/** Esoteric: "Which element draws you tonight?" — refines spice */
const ELEMENTS = [
  { id: "fire", label: "Fire", desc: "Passion, spark", spice: "heated" as const },
  { id: "water", label: "Water", desc: "Flow, intimacy", spice: "tender" as const },
  { id: "earth", label: "Earth", desc: "Grounded, present", spice: "tender" as const },
];

const TIME_OPTIONS = [
  { id: "15", label: "15 min" },
  { id: "30", label: "30 min" },
  { id: "60", label: "1 hour" },
  { id: "120", label: "2+ hours" },
  { id: "overnight", label: "Overnight" },
];

export function SparkGenerator({ variant = "default" }: { variant?: "default" | "editorial" }) {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState<typeof MOODS[0] | null>(null);
  const [element, setElement] = useState<typeof ELEMENTS[0] | null>(null);
  const [time, setTime] = useState("");
  const [area, setArea] = useState("");
  const [result, setResult] = useState<ReturnType<typeof getDateIdea> | null>(null);

  const isEditorial = variant === "editorial";
  const vibe = mood?.vibe ?? "";
  const spice = element?.spice ?? mood?.spice ?? "tender";

  const handleSubmit = () => {
    if (step === 0 && mood) {
      setStep(1);
    } else if (step === 1 && element) {
      setStep(2);
    } else if (step === 2 && time) {
      setStep(3);
    } else if (step === 3) {
      setResult(getDateIdea(vibe, spice, time, area || undefined));
    }
  };

  const shareUrl = result ? buildShareUrl({ vibe, spice, time, area: area || undefined }) : "";

  return (
    <section className={`section-padding relative ${isEditorial ? "bg-deep-red/95" : ""}`}>
      <div className={`max-w-2xl mx-auto ${isEditorial ? "" : ""}`}>
        {!isEditorial && (
          <>
            <p className="text-xs uppercase tracking-[0.4em] text-champagne-gold/90 mb-4 font-bold text-center">date night generator</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-pearl-white text-center mb-4">
              Need a spark tonight?
            </h2>
            <p className="text-sleek-silver/90 text-center mb-12">
              Four questions. One personalized date idea. Area-specific when you want it. Send it to your love.
            </p>
          </>
        )}

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`p-8 md:p-10 rounded-2xl ${
                isEditorial
                  ? "bg-pearl-white/5 border border-pearl-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                  : "bg-charcoal/50 backdrop-blur-md border border-champagne-gold/20 shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
              }`}
            >
              {step === 0 && (
                <div>
                  <p className={`subhead-editorial mb-4 ${isEditorial ? "text-pearl-white/60" : "text-sleek-silver/60"}`}>Question 1 of 4</p>
                  <h3 className={`font-display text-xl md:text-2xl font-normal mb-6 ${isEditorial ? "text-pearl-white" : "text-pearl-white"}`}>
                    What is the current mood of your union?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {MOODS.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setMood(m)}
                        className={`p-4 rounded-xl border-2 text-left transition-all tap-scale ${
                          isEditorial
                            ? mood?.id === m.id
                              ? "border-pearl-white bg-pearl-white/20 text-pearl-white"
                              : "border-pearl-white/30 hover:border-pearl-white/50 hover:bg-pearl-white/10 text-pearl-white/90"
                            : mood?.id === m.id
                              ? "border-champagne-gold bg-champagne-gold/20 text-champagne-gold"
                              : "border-champagne-gold/20 hover:border-champagne-gold/50 hover:bg-champagne-gold/10"
                        }`}
                      >
                        <span className="font-medium block">{m.label}</span>
                        <span className={`text-sm ${isEditorial ? "text-pearl-white/70" : "text-sleek-silver/90"}`}>{m.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 1 && (
                <div>
                  <p className={`subhead-editorial mb-4 ${isEditorial ? "text-pearl-white/60" : "text-sleek-silver/60"}`}>Question 2 of 4</p>
                  <h3 className={`font-display text-xl md:text-2xl font-normal mb-6 ${isEditorial ? "text-pearl-white" : "text-pearl-white"}`}>
                    Which element draws you tonight?
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {ELEMENTS.map((e) => (
                      <button
                        key={e.id}
                        onClick={() => setElement(e)}
                        className={`p-4 rounded-xl border-2 text-left transition-all tap-scale ${
                          isEditorial
                            ? element?.id === e.id
                              ? "border-pearl-white bg-pearl-white/20 text-pearl-white"
                              : "border-pearl-white/30 hover:border-pearl-white/50 hover:bg-pearl-white/10 text-pearl-white/90"
                            : element?.id === e.id
                              ? "border-champagne-gold bg-champagne-gold/20 text-champagne-gold"
                              : "border-champagne-gold/20 hover:border-champagne-gold/50 hover:bg-champagne-gold/10"
                        }`}
                      >
                        <span className="font-display text-2xl block mb-1">{e.id === "fire" ? "🔥" : e.id === "water" ? "🌊" : "🌿"}</span>
                        <span className="font-medium block">{e.label}</span>
                        <span className={`text-sm ${isEditorial ? "text-pearl-white/70" : "text-sleek-silver/90"}`}>{e.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <p className={`subhead-editorial mb-4 ${isEditorial ? "text-pearl-white/60" : "text-sleek-silver/60"}`}>Question 3 of 4</p>
                  <h3 className={`font-display text-xl md:text-2xl font-normal mb-6 ${isEditorial ? "text-pearl-white" : "text-pearl-white"}`}>
                    How much time do you have?
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {TIME_OPTIONS.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTime(t.id)}
                        className={`px-6 py-3 rounded-xl border-2 transition-all ${
                          isEditorial
                            ? time === t.id
                              ? "border-pearl-white bg-pearl-white/20 text-pearl-white"
                              : "border-pearl-white/30 hover:border-pearl-white/50 hover:bg-pearl-white/10 text-pearl-white/90"
                            : time === t.id
                              ? "border-warm-gold bg-warm-gold/10 text-warm-gold"
                              : "border-charcoal/15 hover:border-warm-gold/40"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <p className={`subhead-editorial mb-4 ${isEditorial ? "text-pearl-white/60" : "text-sleek-silver/60"}`}>Question 4 of 4</p>
                  <h3 className={`font-display text-xl md:text-2xl font-normal mb-6 ${isEditorial ? "text-pearl-white" : "text-pearl-white"}`}>
                    Where are you?
                  </h3>
                  <p className={`text-sm mb-4 ${isEditorial ? "text-pearl-white/70" : "text-charcoal"}`}>
                    Get area-specific ideas (Orlando, Florida) or keep it universal.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {AREAS.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => setArea(a.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          isEditorial
                            ? area === a.id
                              ? "border-pearl-white bg-pearl-white/20 text-pearl-white"
                              : "border-pearl-white/30 hover:border-pearl-white/50 hover:bg-pearl-white/10 text-pearl-white/90"
                            : area === a.id
                              ? "border-champagne-gold bg-champagne-gold/20 text-champagne-gold"
                              : "border-champagne-gold/20 hover:border-champagne-gold/50 hover:bg-champagne-gold/10"
                        }`}
                      >
                        <span className="font-medium block">{a.label}</span>
                        <span className={`text-sm ${isEditorial ? "text-pearl-white/70" : "text-sleek-silver/90"}`}>{a.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex gap-4">
                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className={`px-6 py-3 rounded-xl ${
                      isEditorial
                        ? "border border-pearl-white/40 text-pearl-white hover:bg-pearl-white/10"
                        : "border border-champagne-gold/30 text-pearl-white hover:bg-champagne-gold/10"
                    }`}
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={
                    (step === 0 && !mood) ||
                    (step === 1 && !element) ||
                    (step === 2 && !time)
                  }
                  className={`flex-1 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-medium ${
                    isEditorial
                      ? "bg-pearl-white text-deep-red hover:bg-pearl-white/95"
                      : "bg-champagne-gold text-obsidian font-bold uppercase tracking-[0.35em] text-sm hover:bg-champagne-gold/90 transition-all"
                  }`}
                >
                  {step < 3 ? "Next" : "Reveal Your Date"}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`overflow-hidden rounded-2xl ${
                isEditorial ? "bg-classic-black/90 border border-pearl-white/20" : "bg-white border border-warm-gold/20 shadow-[0_20px_60px_rgba(169,111,19,0.15)]"
              }`}
            >
              {/* Popup-style event hero — gradient, CTAs upfront */}
              <div
                className="relative px-8 py-14 md:py-16 text-center min-h-[280px] flex flex-col justify-end"
                style={{
                  background: "linear-gradient(to top, rgba(17,17,17,0.98) 0%, rgba(75,31,31,0.9) 35%, rgba(122,12,24,0.7) 70%, rgba(169,111,19,0.4) 100%)",
                  color: "#F5F5F5",
                }}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-pearl-white/80 mb-3 font-bold">Your Date Night</p>
                <h3 className="font-display text-3xl md:text-4xl font-normal mb-3 leading-tight" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>
                  {result!.title}
                </h3>
                <p className="text-lg md:text-xl text-pearl-white/95 italic mb-6" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>
                  {result!.tagline}
                </p>
                {result!.areaHint && (
                  <p className="text-sm uppercase tracking-[0.2em] text-warm-gold/95 mb-6 font-medium">Moon-approved · {result!.areaHint}</p>
                )}
                {/* Popup-style CTA row: Add to Calendar + Share */}
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-warm-gold text-pearl-white font-bold tracking-[0.25em] uppercase text-sm rounded-lg hover:bg-gold-light transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    Share with your love
                  </Link>
                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(result!.title)}&dates=20260101T190000/20260101T210000&details=${encodeURIComponent(`${result!.tagline}\n\n${result!.desc}\n\nText: "${result!.text}"`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-pearl-white/50 text-pearl-white font-bold tracking-[0.2em] uppercase text-sm rounded-lg hover:bg-pearl-white/10 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Add to Calendar
                  </a>
                </div>
              </div>

              <div className={`p-8 ${isEditorial ? "text-pearl-white" : ""}`}>
                <div className="mb-8">
                  <InvitationCard idea={result!} />
                </div>
                <p className={isEditorial ? "text-pearl-white/85 mb-6" : "text-charcoal mb-6"}>{result!.desc}</p>

                {/* Blueprint: Map + Transit when location-specific */}
                {result!.place && (
                  <div className="mb-8">
                    <p className={`font-mono text-[9px] uppercase tracking-[0.3em] mb-3 ${isEditorial ? "text-pearl-white/50" : "text-charcoal/60"}`}>Your Night · Map</p>
                    <BlueprintMap place={result!.place} isEditorial={isEditorial} />
                  </div>
                )}

                {/* Lover's Note — Vibe Check (handwritten feel) */}
                <div className={`rounded-xl p-6 mb-6 ${isEditorial ? "bg-pearl-white/5 border border-pearl-white/20" : "bg-pearl-white/80 border border-charcoal/10"}`}>
                  <p className={`font-mono text-[9px] uppercase tracking-[0.2em] mb-3 ${isEditorial ? "text-pearl-white/50" : "text-charcoal/60"}`}>Lover&apos;s Note · Vibe Check</p>
                  <p className={`mb-4 font-display text-lg italic leading-relaxed ${isEditorial ? "text-pearl-white" : "text-classic-black"}`}>&ldquo;{result!.text}&rdquo;</p>
                  <DateNightShareBar url={shareUrl} title={result!.title} text={result!.text} />
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-deep-red mb-1">Why this works</p>
                    <p className={`text-sm ${isEditorial ? "text-pearl-white/85" : "text-classic-black"}`}>{result!.wisdom}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-deep-red mb-1">Pro tip</p>
                    <p className={`text-sm ${isEditorial ? "text-pearl-white/85" : "text-classic-black"}`}>{result!.tip}</p>
                  </div>
                </div>

                <div className={`border-t pt-6 mb-6 ${isEditorial ? "border-pearl-white/20" : "border-charcoal/10"}`}>
                  <p className={`text-sm font-medium mb-3 ${isEditorial ? "text-pearl-white/70" : "text-charcoal"}`}>Send the full date card to your love</p>
                  <Link
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-deep-red hover:underline font-medium"
                  >
                    Open shareable link →
                  </Link>
                  <p className={`text-xs mt-2 ${isEditorial ? "text-pearl-white/50" : "text-charcoal"}`}>They&apos;ll see the full date idea, text, and tips in a beautiful card.</p>
                </div>

                <div className={`border-t pt-6 mb-6 ${isEditorial ? "border-pearl-white/20" : "border-charcoal/10"}`}>
                  <p className={`text-sm font-medium mb-3 ${isEditorial ? "text-pearl-white/70" : "text-charcoal"}`}>Want more ideas?</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/resources" className={isEditorial ? "px-4 py-2 border border-pearl-white/40 text-pearl-white rounded-xl text-sm hover:bg-pearl-white/10" : "btn-secondary text-sm py-2 px-4"}>At-Home Guide</Link>
                    <Link href="/guides" className={isEditorial ? "px-4 py-2 border border-pearl-white/40 text-pearl-white rounded-xl text-sm hover:bg-pearl-white/10" : "btn-secondary text-sm py-2 px-4"}>30-Day Reset</Link>
                    <Link href="/quiz" className={isEditorial ? "px-4 py-2 border border-pearl-white/40 text-pearl-white rounded-xl text-sm hover:bg-pearl-white/10" : "btn-secondary text-sm py-2 px-4"}>Choose Your Path</Link>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setStep(0);
                    setMood(null);
                    setElement(null);
                    setTime("");
                    setArea("");
                    setResult(null);
                  }}
                  className={`w-full py-3 rounded-xl ${
                    isEditorial
                      ? "border border-pearl-white/30 text-pearl-white hover:bg-pearl-white/10"
                      : "border border-charcoal/30 hover:bg-charcoal/5 text-charcoal"
                  }`}
                >
                  Generate Another Spark
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
