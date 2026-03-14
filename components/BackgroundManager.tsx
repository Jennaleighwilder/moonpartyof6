"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Room-specific "Material" textures. Each page = different room in the House of Moon. */
const ROOM_MAP: Record<string, string> = {
  "/": "entrance",
  "/mrs-moon": "dee",
  "/mr-moon": "josh",
  "/resources": "vellum",
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

/** Silver damask pattern — SVG for Dee's room */
const DAMASK_SVG = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-2 4-4 8-4 12s2 8 4 12c2-4 4-8 4-12s-2-8-4-12z' fill='rgba(255,255,255,0.03)'/%3E%3Cpath d='M5 30c4-2 8-4 12-4s8 2 12 4c-4 2-8 4-12 4s-8-2-12-4z' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E\")";

/** Leather texture — subtle for Josh's room */
const LEATHER_SVG = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='l'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.08 0 0 0 0 0.06 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23l)' opacity='0.4'/%3E%3C/svg%3E\")";

/** Vellum paper — for Resources (light room) */
const VELLUM_SVG = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='v'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.96 0 0 0 0 0.95 0 0 0 0 0.92 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23v)'/%3E%3C/svg%3E\")";

export function BackgroundManager() {
  const pathname = usePathname();
  const basePath = pathname?.split("/")[1] ? `/${pathname.split("/")[1]}` : "/";
  const roomKey = ROOM_MAP[basePath] ?? "entrance";

  useEffect(() => {
    document.documentElement.setAttribute("data-room", roomKey);
    return () => document.documentElement.removeAttribute("data-room");
  }, [roomKey]);

  return (
    <>
      {/* Entrance: VOGUE editorial — warm cream, storytelling of love */}
      {roomKey === "entrance" && (
        <div
          className="fixed inset-0 -z-[3] transition-[background] duration-1000"
          style={{ background: "linear-gradient(180deg, #F8F5F2 0%, #F5F2E9 50%, #F0EDE8 100%)" }}
        />
      )}
      {/* Dee: warm charcoal (softer than mahogany) */}
      {roomKey === "dee" && (
        <>
          <div
            className="fixed inset-0 -z-[3] transition-[background] duration-1000"
            style={{ background: "linear-gradient(135deg, #1a1514 0%, #151212 50%, #121010 100%)" }}
          />
          <div
            className="fixed inset-0 -z-[2] pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: DAMASK_SVG }}
          />
        </>
      )}
      {/* Josh: charcoal slate */}
      {roomKey === "josh" && (
        <>
          <div
            className="fixed inset-0 -z-[3] transition-[background] duration-1000"
            style={{ background: "linear-gradient(180deg, #141414 0%, #1a1a1a 40%, #141414 100%)" }}
          />
          <div
            className="fixed inset-0 -z-[2] pointer-events-none opacity-30"
            style={{ backgroundImage: LEATHER_SVG }}
          />
        </>
      )}
      {/* Library: warm cream — editorial, not dark */}
      {roomKey === "library" && (
        <div
          className="fixed inset-0 -z-[3] transition-[background] duration-1000"
          style={{ background: "linear-gradient(180deg, #F8F5F2 0%, #F5F2E9 50%, #F0EDE8 100%)" }}
        />
      )}
      {/* Resources: Aged Vellum #F5F2E9 — LIGHT room */}
      {roomKey === "vellum" && (
        <>
          <div
            className="fixed inset-0 -z-[3] transition-[background] duration-1000"
            style={{ background: "#F5F2E9" }}
          />
          <div
            className="fixed inset-0 -z-[2] pointer-events-none"
            style={{ backgroundImage: VELLUM_SVG }}
          />
        </>
      )}
      {/* Film grain — 5% */}
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
