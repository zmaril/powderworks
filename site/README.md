# powderworks.dev

The Powderworks site. A static, no-backend single page — Bun + Vite + React +
Tailwind — served at [powderworks.dev](https://powderworks.dev).

## Develop

```bash
cd site
bun install
bun run dev      # http://localhost:5173
```

## Build

```bash
bun run build    # type-checks, then emits static files to site/dist/
bun run preview  # serve the built output locally
```

## Deploy (Cloudflare Pages)

Connect this repo in the Cloudflare Pages dashboard and use:

| Setting               | Value        |
| --------------------- | ------------ |
| Root directory        | `site`       |
| Build command         | `bun run build` |
| Build output directory | `dist`      |

The fleet roster lives in [`src/projects.ts`](src/projects.ts) — add or edit a
project there and it shows up on the page.
