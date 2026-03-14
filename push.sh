#!/bin/bash
# Push moonpartyof6 to GitHub (run after creating repo at github.com/new)
set -e
cd "$(dirname "$0")"
echo "Pushing to https://github.com/Jennaleighwilder/moonpartyof6 ..."
git push -u origin main
echo "Done. Now: Vercel → Add New → Import moonpartyof6"
