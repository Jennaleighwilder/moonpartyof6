# Moonpartyof6 — Premium Relationship Brand Website

A luxury-feeling, multi-page relationship and lifestyle website for Dee & Josh Moon (@moonpartyof6).

## Features

- **Homepage** — Hero, Date Night Spark Generator, 6-card quick-access grid, brand statement, Dee & Josh split, quiz entry, social proof, email signup
- **Date Night Spark Generator** — 3 questions → personalized date idea + spicy text (copy button, generate another)
- **Quiz** — Relationship quiz with result routing to recommended guides
- **17 pages** — Start Here, Our Story, Mrs. Moon, Mr. Moon, Resources, Guides, Date Nights, Media & Press, Work With Us, Retreats, FAQs, Contact, Quiz
- **Accessibility bar** — ADHD Focus, High Contrast, Reduce Motion (Launchpad-style)
- **Floating "Start Here"** — Concierge shortcut (not a chatbot)
- **Design system** — Deep Red, Classic Black, Pearl White, Playfair Display, Cormorant Garamond, Montserrat

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
vercel
```

Or connect the repo to Vercel for automatic deploys.

## Add your assets

1. **Hero image** — Add `public/images/hero-couple.jpg` (Dee + Josh cinematic photo). Update `components/hero/Hero.tsx` to use it.
2. **Intake forms** — Copy `../intakes/*.html` to `public/intakes/` and link from Mrs. Moon, Mr. Moon, or guide pages.
3. **Guide covers** — Add to `public/guide-covers/` for the guides page.
4. **Videos** — Embed TikTok/Instagram reels on Media & Press page.

## Tech stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion

---

Built for Moonpartyof6. © Dee & Josh Moon.
