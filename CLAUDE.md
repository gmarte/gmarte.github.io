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

**gmarte.com** is a personal executive portfolio site: a single-page Next.js 16 static export deployed to GitHub Pages. Design language: "Control Room Editorial" — obsidian base, porcelain text, one signal red, serif/mono type pairing (see `/design-system` route for the full breakdown).

### Route Structure
- `/` → `src/app/page.tsx` — composes all section components (numbered "chapters" 01–07)
- `/design-system` → breakdown of the visual language, motion system, 3D scene, and asset pipeline
- `/network` → unlisted event credential card (QR toggle: LinkedIn / scannable vCard,
  plus `/gmarte.vcf` download). Not linked from the site; shown in person at events.
  Renders bare — `layout/Chrome.tsx` strips nav/footer on this route.

### Component Layers

```
src/
  app/           # Next.js App Router: layout (fonts/SEO/GA), pages, global CSS
  components/
    3d/          # MeridianScene.tsx — R3F hero particle field (chaos→order morph)
    layout/      # Navigation.tsx, Footer.tsx — rendered in root layout
    providers/   # SmoothScroll.tsx — Lenis + MotionConfig (reduced-motion aware)
    sections/    # One file per chapter (HeroSection, CareerTimeline, ...)
    ui/          # Motion.tsx (Reveal/RevealLines/Stagger), SectionHeader, Button,
                 # CountUp, Ticker, ScrollLedger
  lib/
    content.ts   # Single source of truth for ALL site copy (edit text here)
```

To add a new page section: add copy to `src/lib/content.ts`, create
`src/components/sections/MySection.tsx` (use `SectionHeader` + `data-chapter`),
and import it into `src/app/page.tsx`.

### 3D Scene (MeridianScene.tsx)
- React Three Fiber; 1,900 particles in one custom GLSL shader draw call
- Each particle mixes between a noise position and a meridian-lattice position via
  a scroll-driven `uOrder` uniform (hero scroll progress passed by ref)
- Red signal pulses travel along 6 Catmull-Rom route curves
- DPR capped at 1.75, additive blending, point size clamped; renders only when
  WebGL is available; freezes for `prefers-reduced-motion`
- Any component using Three.js hooks must be marked `"use client"`

### Motion System
- One easing: `cubic-bezier(0.19, 1, 0.22, 1)` (exported as `EASE` in `ui/Motion.tsx`)
- Headline mask reveals: observe the PARENT, not the clipped line (see RevealLines
  comment — an IntersectionObserver on a fully-clipped child never fires)
- Lenis smooth scroll is initialized in `providers/SmoothScroll.tsx` with
  `anchors: { offset: -72 }`; it is skipped entirely under reduced motion, and
  `MotionConfig reducedMotion="user"` gates framer-motion transforms

### Styling
- **Tailwind CSS v4** — config lives entirely in `src/app/globals.css` via `@theme` block (no `tailwind.config` file)
- Tokens: `ink/ink-raised/ink-panel` surfaces, `porcelain/steel/mist` text,
  `signal/signal-soft/signal-deep` red family. Custom utilities: `hairline`,
  `panel`, `kicker`, `grain`, `text-balance`
- Fonts: Instrument Serif (display), Archivo (body/UI), IBM Plex Mono (labels)
  via `next/font/google` in root layout, wired through `@theme inline`

### Generated Assets (`public/generated/`)
- Stills generated with the Gemini image API (see prompts in git history /
  `/design-system`); `flow-loop.mp4` = Gemini still animated by Higgsfield
  Cinema Studio, re-encoded to ~1 MB (H.264 CRF 25, muted)
- Keep video assets ~1 MB; GitHub Pages serves them uncompressed

### Deployment
- GitHub Actions: `.github/workflows/nextjs.yml` — triggers on push to `main`, deploys `./out/` to GitHub Pages
- Image optimization is disabled (`images: { unoptimized: true }`) — required for static export
- Note: `next/image` `priority` prop is deprecated in Next 16 — use `preload`
