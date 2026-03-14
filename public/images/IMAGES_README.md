# Hero & Gallery Images

## CRITICAL: Hero Image

**The hero must be the Maine photo** — snow, Dee in camel hat + black leggings, Josh in grey/white pullover. Cinematic, romantic.

**Do NOT use:** Screenshots of messages, text convos, or design mockups.

| File | Where it appears |
|------|------------------|
| `hero-maine.png` or `hero-couple.png` | Hero background (homepage) |
| `gallery-beach.png` | Hero floating card (different from background) |
| `dee.png` | Mrs. Moon page + Meet the Moons |
| `josh.png` | Mr. Moon page + Meet the Moons |

## Specs

- **Hero**: 1920×1080 or larger, landscape, Maine snow photo
- **Floating card**: Different image than hero (e.g. beach, couple shot)
- **Portraits**: 800×800 (square), headshots or 3/4
- **Format**: PNG, JPG, or WebP

## To fix the hero

1. Replace `hero-maine.png` with the actual Maine photo (snow, Dee in camel hat, Josh in grey pullover).
2. Update `components/hero/Hero.tsx` line 7: set `HERO_BG = "/images/hero-maine.png"`.
