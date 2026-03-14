#!/bin/bash
# Moonpartyof6 — Deploy to Vercel (run in your terminal)
cd "$(dirname "$0")"
echo "Deploying Moonpartyof6..."
npx vercel --prod
echo "Done. Your site URL will appear above."
