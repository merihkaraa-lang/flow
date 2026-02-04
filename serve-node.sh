#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"

if ! command -v npx >/dev/null 2>&1; then
  echo "npx bulunamadı. Lütfen Node.js kurun veya README'deki node serve.js yöntemini kullanın." >&2
  exit 1
fi

exec npx http-server . -p "$PORT"
