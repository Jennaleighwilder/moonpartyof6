/**
 * Moonpartyof6 — Central site config
 * Social links, handles, contact. Update here to propagate everywhere.
 */

export const SITE = {
  name: "Moonpartyof6",
  tagline: "Intentional marriage in the real world",
  url: "https://moonpartyof6.com",
  handle: "@moonpartyof6",
  /** Primary social — handle links here */
  handleLink: "https://instagram.com/moonpartyof6",
} as const;

export const SOCIALS = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/moonpartyof6",
    icon: "instagram",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@moonpartyof6",
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
  email: "hello@moonpartyof6.com",
  /** General inquiry / contact form */
  inquiryEmail: "hello@moonpartyof6.com",
  /** Speaking (Dee) */
  speakingEmail: "hello@moonpartyof6.com",
  /** Retreats */
  retreatsEmail: "hello@moonpartyof6.com",
} as const;

/** Dee's personal / professional links */
export const DEE_SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/moonpartyof6" },
  { label: "TikTok", href: "https://tiktok.com/@moonpartyof6" },
  { label: "YouTube", href: "https://youtube.com/@moonpartyof6" },
];

/** Josh's personal / professional links */
export const JOSH_SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/moonpartyof6" },
  { label: "TikTok", href: "https://tiktok.com/@moonpartyof6" },
];
