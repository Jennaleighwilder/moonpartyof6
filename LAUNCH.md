# Launch Moonpartyof6 — Live in 2 Minutes

## Option A: Netlify Drop (fastest — no account needed)

1. **Build** (already done — or run again):
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**
   - Drag the **`out`** folder onto the page
   - Done. You get a live URL instantly.

3. **Custom domain** (optional): Netlify → Site settings → Domain management → Add `moonpartyof6.com`

---

## Option B: Vercel (GitHub)

1. Push to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/moonpartyof6.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Add New Project → Import your repo

3. **Important**: Remove `output: "export"` from `next.config.ts` if you want full Next.js (or leave it for static).

4. Deploy. Add domain: Settings → Domains → `moonpartyof6.com`

---

## Option C: Cloudflare Pages

1. Push to GitHub (see Option B step 1)

2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → Pages → Create project → Connect Git

3. Build settings:
   - Build command: `npm run build`
   - Build output: `out`

4. Deploy.

---

## Your site is ready

- **Build**: ✓ (run `npm run build` anytime)
- **Static export**: ✓ (`out` folder)
- **Images**: ✓ (all 20+ photos included)
- **TikTok links**: ✓ (Media page — add video IDs when you have them)
