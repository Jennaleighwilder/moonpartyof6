"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getDateIdea, buildShareUrl, AREAS } from "@/lib/dateIdeas";
import { DateNightShareBar } from "./DateNightShareBar";

const VIBES = [
  { id: "stayIn", label: "Stay In", desc: "Couch, candles, connection" },
  { id: "goOut", label: "Go Out", desc: "Get dressed, make a reservation" },
  { id: "reconnect", label: "Reconnect", desc: "After conflict, when you need each other" },
  { id: "surpriseMe", label: "Surprise Me", desc: "Dealer's choice" },
];

const SPICE_LEVELS = [
  { id: "tender", label: "Tender", desc: "Heart connection, emotional intimacy" },
  { id: "flirty", label: "Flirty", desc: "Playful energy, teasing" },
  { id: "heated", label: "Heated", desc: "Turn it up 🔥" },
  { id: "inferno", label: "Inferno", desc: "…you know 🌶️" },
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
  const [vibe, setVibe] = useState("");
  const [spice, setSpice] = useState("");
  const [time, setTime] = useState("");
  const [area, setArea] = useState("");
  const [result, setResult] = useState<ReturnType<typeof getDateIdea> | null>(null);

  const isEditorial = variant === "editorial";

  const handleSubmit = () => {
    if (step === 0 && vibe) {
      setStep(1);
    } else if (step === 1 && spice) {
      setStep(2);
    } else if (step === 2 && time) {
      setStep(3);
    } else if (step === 3) {
      setResult(getDateIdea(vibe, spice, time, area || undefined));
    }
  };

  const shareUrl = result ? buildShareUrl({ vibe, spice, time, area: area || undefined }) : "";

  return (
    <section className={`section-padding ${isEditorial ? "bg-deep-red/95" : "bg-cream"}`}>
      <div className={`max-w-2xl mx-auto ${isEditorial ? "" : ""}`}>
        {!isEditorial && (
          <>
            <p className="text-xs uppercase tracking-[0.4em] text-warm-gold mb-4 font-bold text-center">date night generator</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-charcoal text-center mb-4">
              Need a spark tonight?
            </h2>
            <p className="text-charcoal/80 text-center mb-12">
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
              className={`p-8 rounded-2xl ${
                isEditorial
                  ? "bg-pearl-white/5 border border-pearl-white/20 backdrop-blur-sm"
                  : "bg-white border border-warm-gold/20 shadow-[0_15px_40px_rgba(169,111,19,0.08)]"
              }`}
            >
              {step === 0 && (
                <div>
                  <h3 className={`font-display text-xl font-semibold mb-6 ${isEditorial ? "text-pearl-white" : "text-classic-black"}`}>
                    What&apos;s the vibe?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {VIBES.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setVibe(v.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          isEditorial
                            ? vibe === v.id
                              ? "border-pearl-white bg-pearl-white/20 text-pearl-white"
                              : "border-pearl-white/30 hover:border-pearl-white/50 hover:bg-pearl-white/10 text-pearl-white/90"
                            : vibe === v.id
                              ? "border-warm-gold bg-warm-gold/10 text-warm-gold"
                              : "border-charcoal/15 hover:border-warm-gold/40"
                        }`}
                      >
                        <span className="font-medium block">{v.label}</span>
                        <span className={`text-sm ${isEditorial ? "text-pearl-white/70" : "text-charcoal"}`}>{v.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 1 && (
                <div>
                  <h3 className={`font-display text-xl font-semibold mb-6 ${isEditorial ? "text-pearl-white" : "text-classic-black"}`}>
                    Spice level?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {SPICE_LEVELS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSpice(s.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          isEditorial
                            ? spice === s.id
                              ? "border-pearl-white bg-pearl-white/20 text-pearl-white"
                              : "border-pearl-white/30 hover:border-pearl-white/50 hover:bg-pearl-white/10 text-pearl-white/90"
                            : spice === s.id
                              ? "border-warm-gold bg-warm-gold/10 text-warm-gold"
                              : "border-charcoal/15 hover:border-warm-gold/40"
                        }`}
                      >
                        <span className="font-medium block">{s.label}</span>
                        <span className={`text-sm ${isEditorial ? "text-pearl-white/70" : "text-charcoal"}`}>{s.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h3 className={`font-display text-xl font-semibold mb-6 ${isEditorial ? "text-pearl-white" : "text-classic-black"}`}>
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
                  <h3 className={`font-display text-xl font-semibold mb-6 ${isEditorial ? "text-pearl-white" : "text-classic-black"}`}>
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
                              ? "border-warm-gold bg-warm-gold/10 text-warm-gold"
                              : "border-charcoal/15 hover:border-warm-gold/40"
                        }`}
                      >
                        <span className="font-medium block">{a.label}</span>
                        <span className={`text-sm ${isEditorial ? "text-pearl-white/70" : "text-charcoal"}`}>{a.desc}</span>
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
                        : "border border-charcoal/30 text-charcoal hover:bg-charcoal/5"
                    }`}
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={
                    (step === 0 && !vibe) ||
                    (step === 1 && !spice) ||
                    (step === 2 && !time)
                  }
                  className={`flex-1 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-medium ${
                    isEditorial
                      ? "bg-pearl-white text-deep-red hover:bg-pearl-white/95"
                      : "bg-warm-gold text-pearl-white font-bold uppercase tracking-[0.35em] text-sm hover:bg-gold-light transition-all"
                  }`}
                >
                  {step < 3 ? "Next" : "Reveal Your Date"}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`overflow-hidden rounded-2xl ${
                isEditorial ? "bg-classic-black/90 border border-pearl-white/20" : "bg-white border border-charcoal/10 shadow-xl"
              }`}
            >
              {/* Event-invite style header */}
              <div
                className="px-8 py-12 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(129,31,31,0.95) 0%, rgba(17,17,17,0.98) 100%)",
                  color: "#F5F5F5",
                }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-pearl-white/70 mb-2">Your Date Night</p>
                <h3 className="font-display text-3xl font-semibold mb-2">{result!.title}</h3>
                <p className="text-pearl-white/90 italic">{result!.tagline}</p>
                {result!.areaHint && (
                  <p className="mt-2 text-sm uppercase tracking-wider text-deep-red/90">Moon-approved · {result!.areaHint}</p>
                )}
              </div>

              <div className={`p-8 ${isEditorial ? "text-pearl-white" : ""}`}>
                <p className={isEditorial ? "text-pearl-white/85 mb-6" : "text-charcoal mb-6"}>{result!.desc}</p>

                <div className={`rounded-xl p-5 mb-6 ${isEditorial ? "bg-pearl-white/10 border border-pearl-white/20" : "bg-pearl-white/80 border border-charcoal/10"}`}>
                  <p className={`text-xs uppercase tracking-wider mb-2 font-medium ${isEditorial ? "text-pearl-white/60" : "text-charcoal"}`}>Text to send them</p>
                  <p className={`mb-4 italic ${isEditorial ? "text-pearl-white" : "text-classic-black"}`}>&ldquo;{result!.text}&rdquo;</p>
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
                    setVibe("");
                    setSpice("");
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
