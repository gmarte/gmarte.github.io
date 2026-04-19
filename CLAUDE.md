# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start local dev server (localhost:3000)
- `npm run build` — static export to `./out/` (Next.js `output: "export"`)
- `npm run lint` — ESLint with next/core-web-vitals + TypeScript rules
- No test framework is configured.

Install: `npm ci --legacy-peer-deps` (required — Three.js ecosystem has peer dep conflicts with React 19)

## Architecture

**gmarte.github.io** is a personal executive portfolio site: a single-page Next.js 16 static export deployed to GitHub Pages.

### Route Structure
- `/` → `src/app/page.tsx` — composes all section components linearly
- `/network` → `src/app/network/page.tsx` — standalone 3D network visualization

### Component Layers

```
src/
  app/           # Next.js App Router: layout, pages, global CSS
  components/
    3d/          # Three.js / React Three Fiber scenes (NetworkScene.tsx)
    layout/      # Navigation.tsx, Footer.tsx — rendered in root layout
    sections/    # One file per page section (HeroSection, CareerTimeline, etc.)
    ui/          # Shared primitives (ScrollReveal.tsx)
```

To add a new page section: create `src/components/sections/MySection.tsx` and import it into `src/app/page.tsx`.

### 3D Scene (NetworkScene.tsx)
- Uses React Three Fiber (`@react-three/fiber`) with `useFrame` animation loop
- Animated terrain: plane geometry with per-frame vertex position updates
- Mouse parallax tracked via `mousemove` listener in a `useEffect`
- Any component using Three.js hooks must be marked `"use client"`

### Styling
- **Tailwind CSS v4** — config lives entirely in `src/app/globals.css` via `@theme` block (no `tailwind.config` file)
- Custom color palette: graphite/black base with deep-red accent `#a40000`
- Custom utilities: `glass` (glassmorphism), `text-balance`
- Fonts: Inter (body) and Outfit (headings) via `next/font/google` in root layout

### Deployment
- GitHub Actions: `.github/workflows/nextjs.yml` — triggers on push to `main`, deploys `./out/` to GitHub Pages
- Image optimization is disabled (`images: { unoptimized: true }`) — required for static export
