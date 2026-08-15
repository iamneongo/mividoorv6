#!/usr/bin/env bash
set -euo pipefail

REPO_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_PATH="/home/ulfdxguphosting/public_html/mividoor"
STATE_PATH="/home/ulfdxguphosting/.mividoor-deployed-commit"

cd "$REPO_PATH"
git fetch origin main --quiet

REMOTE_COMMIT="$(git rev-parse origin/main)"

if [ -f "$STATE_PATH" ] && [ "$(cat "$STATE_PATH")" = "$REMOTE_COMMIT" ]; then
  exit 0
fi

git reset --hard origin/main
npm ci --include=dev --no-audit --no-fund
npm run build

# Keep the separate WordPress installation untouched while replacing the static Next.js output.
rm -rf "$DEPLOY_PATH/cms-new"
cp -a out/. "$DEPLOY_PATH/"
find "$DEPLOY_PATH" -type d -exec chmod 755 {} +
find "$DEPLOY_PATH" -type f -exec chmod 644 {} +
printf '%s' "$REMOTE_COMMIT" > "$STATE_PATH"
