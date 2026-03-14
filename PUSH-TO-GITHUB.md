# Push Moonpartyof6 to GitHub → Vercel

## Step 1: Create the repo on GitHub (30 seconds)

1. Go to **[github.com/new](https://github.com/new)**
2. Repository name: **`moonpartyof6`**
3. Public
4. **Do NOT** add README, .gitignore, or license (we already have them)
5. Click **Create repository**

---

## Step 2: Push from your terminal

```bash
cd /Users/jenniferwest/moonpartyof6-build/moonpartyof6-site
git remote add origin https://github.com/Jennaleighwilder/moonpartyof6.git
git push -u origin main
```

(If you already added the remote: `git push -u origin main`)

---

## Step 3: Deploy on Vercel

1. Go to **[vercel.com/jenniferleighwilder-5338s-projects](https://vercel.com/jenniferleighwilder-5338s-projects)**
2. **Add New** → **Project**
3. Import **Jennaleighwilder/moonpartyof6**
4. Root Directory: leave as `.` (or `moonpartyof6-site` if the repo root is the parent folder)
5. **Deploy**

---

## If the repo is inside moonpartyof6-build

If your GitHub repo root is `moonpartyof6-build` (parent folder), then in Vercel set:
- **Root Directory**: `moonpartyof6-site`

If your GitHub repo root is `moonpartyof6-site` (just the site), leave Root Directory blank.
