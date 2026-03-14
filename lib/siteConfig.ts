/**
 * Moonpartyof6 — Central site config
 * Social links, handles, contact. Update here to propagate everywhere.
 */

export const SITE = {
  name: "Moonpartyof6",
  tagline: "Intentional marriage in the real world",
  url: "https://moonpartyof6.com",
  handle: "@themoonpartyof6",
  /** Primary social — handle links here */
  handleLink: "https://instagram.com/themoonpartyof6",
  /** Link hub */
  beaconsLink: "https://beacons.ai/moonpartyof6",
  /** Americas Fav Couple feature */
  americasFavCoupleLink: "https://americasfavcouple.org/2025/the-moons-8",
} as const;

export const SOCIALS = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/themoonpartyof6",
    icon: "instagram",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@themoonpartyof6",
    icon: "tiktok",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@moonpartyof6",
    icon: "youtube",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com/moonpartyof6",
    icon: "facebook",
  },
  {
    id: "threads",
    label: "Threads",
    href: "https://threads.net/@moonpartyof6",
    icon: "threads",
  },
] as const;

export const CONTACT = {
  email: "moonpartyof6@gmail.com",
  /** General inquiry / contact form */
  inquiryEmail: "moonpartyof6@gmail.com",
  /** Speaking (Dee) */
  speakingEmail: "moonpartyof6@gmail.com",
  /** Retreats */
  retreatsEmail: "moonpartyof6@gmail.com",
  /** Location */
  location: "Cape Canaveral, FL",
} as const;

/** Dee's personal / professional links */
export const DEE_SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/themoonpartyof6" },
  { label: "TikTok", href: "https://tiktok.com/@themoonpartyof6" },
  { label: "YouTube", href: "https://youtube.com/@MoonPartyof6" },
];

/** Josh's personal / professional links */
export const JOSH_SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/themoonpartyof6" },
  { label: "TikTok", href: "https://tiktok.com/@themoonpartyof6" },
];

/** TikTok profile — add popular video IDs here as they're identified */
export const TIKTOK = {
  profile: "https://tiktok.com/@themoonpartyof6",
  /** Popular videos — add video IDs when known, e.g. "7123456789" from tiktok.com/@moonpartyof6/video/7123456789 */
  popularVideos: [] as string[],
};
