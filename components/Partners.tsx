"use client";

const PARTNERS = [
  {
    title: "couples retreats",
    subtitle: "tiki sunset retreats",
    href: "https://www.tikisunsetretreat.com/retreats",
    cta: "view →",
    code: null,
  },
  {
    title: "hidden honey homes",
    subtitle: "luxury stays for couples",
    href: "https://hiddenhoneyhomes.com/",
    cta: "book",
    code: "MOON",
  },
];

export function Partners() {
  return (
    <section className="section-padding relative">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-deep-red/90 mb-6 font-bold">partners we love</p>
        <div className="grid md:grid-cols-2 gap-6">
          {PARTNERS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-charcoal/10 bg-white p-8 hover:border-deep-red/30 transition-all tap-scale shadow-sm"
            >
              <div>
                <h3 className="font-display text-xl font-normal text-classic-black">
                  {p.title}
                </h3>
                <p className="text-charcoal/70 text-sm mt-1">{p.subtitle}</p>
              </div>
              <div className="flex items-center gap-3">
                {p.code && (
                  <span className="px-3 py-1.5 rounded-lg bg-deep-red/10 text-deep-red font-mono text-sm font-medium">
                    {p.code}
                  </span>
                )}
                <span className="text-deep-red font-medium text-sm hover:underline">
                  {p.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
