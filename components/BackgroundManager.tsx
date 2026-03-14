"use client";

import { usePathname } from "next/navigation";

/** Room-specific "Material" textures. Obsidian Silk, Mahogany Filigree, Charcoal Slate, Vellum & Gold. */
const ROOM_MAP: Record<string, string> = {
  "/": "entrance",
  "/mrs-moon": "dee",
  "/mr-moon": "josh",
  "/resources": "library",
  "/guides": "library",
  "/lovers": "library",
  "/date-nights": "library",
  "/date-night": "library",
  "/quiz": "entrance",
  "/our-story": "library",
  "/contact": "library",
  "/start-here": "entrance",
  "/work-with-us": "library",
  "/retreats": "library",
  "/media-press": "library",
  "/faqs": "library",
};

const TEXTURES: Record<string, { bg: string; label: string }> = {
  entrance: {
    bg: "linear-gradient(180deg, #0A0A0A 0%, #120808 25%, #1a0a0a 50%, #0d0505 75%, #0A0A0A 100%)",
    label: "Obsidian Silk",
  },
  dee: {
    bg: "linear-gradient(135deg, #4A0E0E 0%, #2e0808 50%, #1a0505 100%)",
    label: "Mahogany Filigree",
  },
  josh: {
    bg: "linear-gradient(180deg, #1a1a1a 0%, #252421 30%, #1a1a1a 70%, #0A0A0A 100%)",
    label: "Charcoal Slate",
  },
  library: {
    bg: "linear-gradient(180deg, #0A0A0A 0%, #1a1510 25%, #2a2015 50%, #1a1510 75%, #0A0A0A 100%)",
    label: "Vellum & Gold",
  },
};

export function BackgroundManager() {
  const pathname = usePathname();
  const basePath = pathname?.split("/")[1] ? `/${pathname.split("/")[1]}` : "/";
  const roomKey = ROOM_MAP[basePath] ?? ROOM_MAP["/"] ?? "entrance";
  const texture = TEXTURES[roomKey] ?? TEXTURES.entrance;

  return (
    <>
      {/* Room-specific base gradient */}
      <div
        className="fixed inset-0 -z-[3] transition-[background] duration-1000"
        style={{ background: texture.bg }}
      />
      {/* SVG noise — 5% film grain, removes digital look */}
      <div
        className="fixed inset-0 -z-[2] pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
