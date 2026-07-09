#!/usr/bin/env bash
# Stand up the powderworks dev environment: this repo is the fleet roster plus
# the powderworks.dev site. "Getting started" here means the site — Bun + Vite +
# React + Tailwind, living in site/. Safe to run from anywhere.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "installing the powderworks.dev site deps…"
cd site
bun install

echo
echo "dev environment ready:"
echo "  cd site && bun run dev      # http://localhost:5173"
echo "  cd site && bun run build    # type-check + static build to site/dist/"
echo "  the fleet roster lives in housecaptain.toml; audit it with 'housekeeper fleet housecaptain.toml'"
