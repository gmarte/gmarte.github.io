import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design System | Giancarlo Marte",
  description:
    "How the visual language of gmarte.com was constructed — palette, typography, motion, 3D, and the generative asset pipeline.",
  robots: { index: false },
};

/* ---------------------------------- data ---------------------------------- */

const COLORS = [
  { name: "ink", hex: "#060607", usage: "Page ground. Near-black with a breath of warmth — never pure #000." },
  { name: "ink-raised", hex: "#0B0B0D", usage: "Alternating chapter bands. One step of elevation, no shadows." },
  { name: "ink-panel", hex: "#121216", usage: "Hover surfaces and panels. The ceiling of the neutral stack." },
  { name: "porcelain", hex: "#F4F3F0", usage: "Primary text. Warm off-white — reads as print, not screen glare." },
  { name: "steel", hex: "#A6A9B0", usage: "Secondary text and supporting copy." },
  { name: "mist", hex: "#6B6E76", usage: "Tertiary text: labels, meta, captions." },
  { name: "signal", hex: "#C22233", usage: "The one accent. Graphic marks, progress, live indicators." },
  { name: "signal-soft", hex: "#E4636B", usage: "Text-safe red for small type on dark ground." },
  { name: "signal-deep", hex: "#7E1220", usage: "Reserved for gradients and glow falloff." },
];

const TYPE_ROLES = [
  {
    font: "Instrument Serif",
    cls: "font-serif",
    sample: "Enterprise complexity, engineered into advantage.",
    sizeCls: "text-4xl md:text-5xl",
    role: "Display",
    spec: "Headlines, chapter titles, pull statements. One weight (400), italic reserved for the emphasized phrase — one per headline, never more.",
  },
  {
    font: "Archivo",
    cls: "font-sans",
    sample:
      "Technology leader with 10+ years across enterprise systems, SAP architecture, integrations, and AI-driven innovation.",
    sizeCls: "text-lg",
    role: "Body / UI",
    spec: "Body copy, buttons, navigation. A grotesk with enough character to avoid the template feel, quiet enough to disappear behind content.",
  },
  {
    font: "IBM Plex Mono",
    cls: "font-mono uppercase tracking-[0.2em]",
    sample: "04 — Current Scope · Caribetrans",
    sizeCls: "text-xs",
    role: "Data / Labels",
    spec: "Kickers, chapter indices, tickers, metadata. The engineering voice of the system — IBM heritage, enterprise by blood.",
  },
];

const MOTION_RULES = [
  {
    name: "One easing signature",
    detail:
      "cubic-bezier(0.19, 1, 0.22, 1) — a long expo-out — drives every reveal, hover, and expansion. Durations 0.6–1.2s. One curve means the whole page decelerates the same way.",
  },
  {
    name: "Masked line reveals",
    detail:
      "Headlines rise from behind a crop (y: 112% → 0), line by line, staggered ~90ms. The text arrives like a ledger being printed — content is revealed, not animated.",
  },
  {
    name: "Scroll as narrative",
    detail:
      "Lenis smooth scroll (lerp 0.09) turns the wheel into a camera dolly. The journey spine fills as you read; the hero lattice orders itself as you leave it: complexity → control.",
  },
  {
    name: "Reduced motion is first-class",
    detail:
      "prefers-reduced-motion collapses every animation to its final frame, disables smooth scroll, freezes the 3D field and the ticker. The story survives without the motion.",
  },
];

const ENGINEERING = [
  {
    k: "Framework",
    v: "Next.js 16 App Router, static export (output: 'export') deployed to GitHub Pages. React 19, TypeScript, zero server dependencies.",
  },
  {
    k: "Styling",
    v: "Tailwind CSS v4 — the entire theme lives in globals.css as @theme tokens (no config file). Utilities like hairline, kicker, and grain encode the system's recurring moves.",
  },
  {
    k: "3D",
    v: "React Three Fiber. The hero field is one draw call: 1,900 particles in a custom GLSL shader that mixes each point between a noise position and its meridian-lattice position. Six route curves carry pulsing signal dots. DPR capped at 1.75, additive blending, no postprocessing.",
  },
  {
    k: "Motion",
    v: "Framer Motion for choreography, Lenis for scroll physics, IntersectionObserver for wayfinding state. CountUp and ticker are hand-rolled — no widget libraries.",
  },
  {
    k: "Performance",
    v: "Video asset re-encoded to 1.0 MB (H.264, CRF 25, muted). Stills ship as JPEG. The 3D scene suspends its work when the hero leaves the viewport.",
  },
];

/* --------------------------------- helpers -------------------------------- */

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="kicker">{children}</p>;
}

function Chapter({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="hairline border-t py-20 md:py-28">
      <div className="mx-auto w-full max-w-[90rem] px-6 md:px-12 xl:px-20">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.22em] text-signal-soft">
            {index}
          </span>
          <Kicker>{title}</Kicker>
          <span className="hairline h-px flex-1 border-t" aria-hidden />
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/* ----------------------------------- page ---------------------------------- */

export default function DesignSystemPage() {
  return (
    <div className="bg-ink pt-[72px]">
      {/* Intro */}
      <header className="mx-auto w-full max-w-[90rem] px-6 pb-20 pt-20 md:px-12 md:pt-28 xl:px-20">
        <Kicker>gmarte.com — behind the visual language</Kicker>
        <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2.8rem,6.5vw,5.4rem)] leading-[1.04] text-porcelain">
          Control Room{" "}
          <span className="italic text-steel">Editorial.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
          The calm of a boardroom annual report, fused with the precision of a
          logistics control tower. Every section is a numbered chapter in an
          operating ledger; every visual decision reduces to one question —
          does it read as{" "}
          <em className="text-porcelain">a leader in control of a complex system?</em>
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-mist">
          Three rules govern everything below: one signal color, roughly one
          red element per viewport. Hairlines instead of boxes. Motion reveals —
          it never decorates.
        </p>
      </header>

      {/* 01 Color */}
      <Chapter index="D·01" title="Color — one signal on obsidian">
        <div className="hairline grid grid-cols-1 gap-px overflow-hidden border bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {COLORS.map((c) => (
            <div key={c.name} className="bg-ink p-6">
              <div
                className="hairline h-20 w-full border"
                style={{ backgroundColor: c.hex }}
              />
              <div className="mt-5 flex items-baseline justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-porcelain">
                  {c.name}
                </span>
                <span className="font-mono text-[0.65rem] text-mist">{c.hex}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mist">{c.usage}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mist">
          The red carries brand continuity from the original gmarte identity
          (#A40000), tuned one step brighter for dark ground. It is rationed
          deliberately: when everything is quiet, a single red pulse reads as
          the most important thing on screen.
        </p>
      </Chapter>

      {/* 02 Typography */}
      <Chapter index="D·02" title="Typography — signal & structure">
        <div className="flex flex-col gap-14">
          {TYPE_ROLES.map((t) => (
            <div
              key={t.font}
              className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-16"
            >
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-signal-soft">
                  {t.role}
                </p>
                <p className="mt-2 text-lg text-porcelain">{t.font}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist">{t.spec}</p>
              </div>
              <div className="hairline flex min-h-32 items-center border p-8">
                <p className={`${t.cls} ${t.sizeCls} leading-snug text-porcelain`}>
                  {t.sample}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-mist">
          An editorial serif over an engineering mono is the whole thesis in
          typographic form: executive judgment above, operational precision
          below. The sans stays out of the argument.
        </p>
      </Chapter>

      {/* 03 Motion */}
      <Chapter index="D·03" title="Motion — choreography, not decoration">
        <div className="hairline border-t">
          {MOTION_RULES.map((rule, i) => (
            <div
              key={rule.name}
              className="hairline grid grid-cols-[auto_1fr] items-baseline gap-6 border-b py-8 md:grid-cols-[6rem_320px_1fr] md:gap-10"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-mist">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-medium tracking-tight text-porcelain">
                {rule.name}
              </h3>
              <p className="col-start-2 mt-2 text-sm leading-relaxed text-steel md:col-start-3 md:mt-0 md:text-base">
                {rule.detail}
              </p>
            </div>
          ))}
        </div>
      </Chapter>

      {/* 04 3D */}
      <Chapter index="D·04" title="3D — The Meridian">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-base leading-relaxed text-steel md:text-lg">
              The hero hosts a single WebGL scene: 1,900 particles that exist in
              two states at once — a scattered noise field (
              <em className="text-porcelain">operational complexity</em>) and an
              ordered lattice of meridian rings (
              <em className="text-porcelain">systems under control</em>). A
              scroll-driven uniform morphs every particle between its two
              positions, so leaving the hero literally brings the system into
              order. Six great-circle routes carry red signal pulses — data
              moving through an operation.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-mist">
              Per the brief: meaningful, not decorative. The scene is
              monochrome plus the signal red, capped at DPR 1.75, one shader
              material, zero postprocessing — it holds 60fps on integrated
              graphics and disappears entirely for reduced-motion users and
              browsers without WebGL.
            </p>
          </div>
          <div className="hairline border p-8">
            <p className="kicker">Scene parameters</p>
            <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 font-mono text-[0.7rem] tracking-wide text-steel">
              <dt className="text-mist">Particles</dt>
              <dd>1,900 · 1 draw call</dd>
              <dt className="text-mist">Lattice</dt>
              <dd>9 meridian rings · r 5.2</dd>
              <dt className="text-mist">Routes</dt>
              <dd>6 Catmull-Rom curves</dd>
              <dt className="text-mist">Morph</dt>
              <dd>uOrder · 0.30 → 1.0 by scroll</dd>
              <dt className="text-mist">Parallax</dt>
              <dd>pointer · lerped, ±0.11 rad</dd>
              <dt className="text-mist">DPR</dt>
              <dd>min(device, 1.75)</dd>
              <dt className="text-mist">Blending</dt>
              <dd>additive · depthWrite off</dd>
              <dt className="text-mist">Fallback</dt>
              <dd>static atmosphere still</dd>
            </dl>
          </div>
        </div>
      </Chapter>

      {/* 05 Generative pipeline */}
      <Chapter index="D·05" title="Asset pipeline — generative, then disciplined">
        <p className="max-w-2xl text-base leading-relaxed text-steel md:text-lg">
          The cinematic media on this site is generated, not stock. Stills come
          from the Gemini image model, prompted inside this design system
          (obsidian ground, one crimson signal, no text, no objects). The
          operating-terrain still is then animated into a 10-second ambient
          loop by Higgsfield&rsquo;s Cinema Studio video model, re-encoded to a
          1.0&nbsp;MB muted H.264 loop.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              src: "/generated/hero-haze.jpg",
              label: "hero-haze — Gemini",
              note: "Hero atmosphere under the 3D field",
            },
            {
              src: "/generated/flow-terrain.jpg",
              label: "flow-terrain — Gemini",
              note: "Source still for the Scope interstitial",
            },
            {
              src: "/generated/og-cover.jpg",
              label: "og-cover — Gemini",
              note: "OpenGraph card + final CTA backdrop",
            },
          ].map((asset) => (
            <figure key={asset.src} className="hairline border">
              <div className="relative aspect-video">
                <Image
                  src={asset.src}
                  alt={asset.label}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-porcelain">
                  {asset.label}
                </p>
                <p className="mt-1 text-xs text-mist">{asset.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <figure className="hairline mt-6 border">
          <video
            className="aspect-video w-full object-cover"
            src="/generated/flow-loop.mp4"
            poster="/generated/flow-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
          />
          <figcaption className="flex items-center justify-between p-4">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-porcelain">
              flow-loop — Gemini still → Higgsfield Cinema Studio → H.264
            </p>
            <p className="font-mono text-[0.62rem] text-mist">10s · muted · 1.0 MB</p>
          </figcaption>
        </figure>
      </Chapter>

      {/* 06 Engineering */}
      <Chapter index="D·06" title="Engineering notes">
        <div className="hairline border-t">
          {ENGINEERING.map((row) => (
            <div
              key={row.k}
              className="hairline grid gap-2 border-b py-7 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-signal-soft">
                {row.k}
              </span>
              <p className="text-sm leading-relaxed text-steel md:text-base">
                {row.v}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-porcelain px-7 py-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink transition-colors duration-500 hover:bg-signal hover:text-porcelain"
          >
            Back to the site
            <span
              aria-hidden
              className="inline-block transition-transform duration-500 group-hover:-translate-x-1"
            >
              ←
            </span>
          </Link>
        </div>
      </Chapter>
    </div>
  );
}
