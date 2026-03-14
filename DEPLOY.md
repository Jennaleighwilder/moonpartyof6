# Deploy Moonpartyof6 — Public Access

## Quick deploy to Vercel (recommended)

1. **Push to GitHub** (if not already):
   ```bash
   cd moonpartyof6-site
   git init
   git add .
   git commit -m "Moonpartyof6 site"
   git remote add origin https://github.com/YOUR_USERNAME/moonpartyof6.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in → **Add New Project**
   - Import your GitHub repo
   - Root directory: `moonpartyof6-site` (or `.` if repo root)
   - Click **Deploy**

3. **Your site will be live** at `https://your-project.vercel.app` (or your custom domain).

---

## Deploy from local (no GitHub)

```bash
cd moonpartyof6-site
npx vercel
```

Follow prompts. Your site will be publicly accessible.

---

## Custom domain

In Vercel: Project → Settings → Domains → Add `moonpartyof6.com`

---

## Email capture backend

The EmailGreeting form currently simulates success. To wire it to a real list:

1. **ConvertKit / Mailchimp / Resend**: Add an API route in `app/api/subscribe/route.ts`
2. **Or use a form service**: Typeform, Tally, Google Forms — replace the form action

Example Resend API route:
```ts
// app/api/subscribe/route.ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  const { email } = await req.json();
  await resend.contacts.create({ email, audienceId: '...' });
  return Response.json({ ok: true });
}
```
