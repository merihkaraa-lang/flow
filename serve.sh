#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"

if command -v python3 >/dev/null 2>&1; then
  exec python3 -m http.server "$PORT"
fi

if command -v python >/dev/null 2>&1; then
  exec python -m http.server "$PORT"
fi

echo "Python bulunamadı. Lütfen Python 3 kurun veya README'deki Node.js yöntemi ile çalıştırın." >&2
exit 1
