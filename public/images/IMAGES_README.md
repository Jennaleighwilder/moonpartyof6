# Hero & Gallery Images

## CRITICAL: Hero Image

**The hero must be the Maine photo** — snow, Dee in camel hat + black leggings, Josh in grey/white pullover. Cinematic, romantic.

**Do NOT use:** Screenshots of messages, text convos, or design mockups.

| File | Where it appears |
|------|------------------|
| `hero-maine.png` or `hero-couple.png` | Hero background (homepage) |
| `gallery-intimate.png` | Hero floating card (NO golf cart — use couple shot) |
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

---

## AI-Generated Images: High-Key Luxury (No Gollum)

For any AI-generated portraits of Dee and Josh, use this **exact prompt** to avoid harsh shadows and distorted features:

> High-end editorial portrait for a luxury lifestyle magazine.
> * **Lighting:** Soft, directional 'Golden Hour' light. Fill shadows so features are clear but sophisticated. No harsh black shadows on faces.
> * **Photography:** Shot on a Leica M11, 50mm lens, f/2.0. Clean, sharp focus on the eyes.
> * **Subject:** Authentic skin texture, professional grooming, expensive 'Old Money' styling.
> * **Correction:** Avoid distorted features or deep eye sockets. Make the subject look approachable, wealthy, and sharp.

**Alternative short prompt:**
> Cinematic high-fashion photography. Soft, wrap-around golden-hour lighting. No harsh black shadows. Subject looks wealthy, sharp, and approachable. Shot on Leica M11, 50mm f/1.4. Rich textures (silk, mahogany, skin) but clear and bright. Clean background.
