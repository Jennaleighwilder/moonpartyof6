"use client";

import { motion } from "framer-motion";

type Place = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  query: string;
};

export function BlueprintMap({ place, isEditorial }: { place: Place; isEditorial?: boolean }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`;
  const uberUrl = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encodeURIComponent(place.address)}&dropoff[latitude]=${place.lat}&dropoff[longitude]=${place.lng}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl overflow-hidden ${isEditorial ? "border border-pearl-white/20" : "border border-charcoal/15"}`}
    >
      {/* Dark map-style placeholder — Night Mode aesthetic */}
      <div
        className={`relative h-48 ${isEditorial ? "bg-obsidian" : "bg-charcoal"}`}
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(122,12,24,0.15) 0%, transparent 50%), linear-gradient(180deg, rgba(26,26,26,0.9) 0%, rgba(10,10,10,0.95) 100%)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`font-mono text-[11px] uppercase tracking-[0.3em] ${isEditorial ? "text-pearl-white/70" : "text-sleek-silver/90"}`}>
            {place.lat.toFixed(4)}°N · {Math.abs(place.lng).toFixed(4)}°W
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className={`font-slab font-semibold ${isEditorial ? "text-pearl-white" : "text-classic-black"}`}>{place.name}</p>
          <p className={`font-mono text-[11px] ${isEditorial ? "text-pearl-white/80" : "text-sleek-silver/90"}`}>{place.address}</p>
        </div>
      </div>
      {/* Transit module */}
      <div className={`flex flex-wrap gap-2 p-4 ${isEditorial ? "bg-pearl-white/5 border-t border-pearl-white/10" : "bg-charcoal/5 border-t border-charcoal/10"}`}>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium tap-scale transition-all ${
            isEditorial
              ? "bg-pearl-white/10 border border-pearl-white/20 text-pearl-white hover:bg-pearl-white/20"
              : "bg-white border border-charcoal/15 text-charcoal hover:bg-charcoal/5"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Get Directions
        </a>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.address)}&travelmode=transit`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium tap-scale transition-all ${
            isEditorial
              ? "bg-pearl-white/10 border border-pearl-white/20 text-pearl-white hover:bg-pearl-white/20"
              : "bg-white border border-charcoal/15 text-charcoal hover:bg-charcoal/5"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
          Transit
        </a>
        <a
          href={uberUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium tap-scale transition-all ${
            isEditorial
              ? "bg-obsidian border border-pearl-white/30 text-pearl-white hover:bg-charcoal"
              : "bg-classic-black text-pearl-white hover:bg-charcoal border border-classic-black"
          }`}
        >
          <span className="font-bold">Uber</span>
          Black
        </a>
      </div>
    </motion.div>
  );
}
