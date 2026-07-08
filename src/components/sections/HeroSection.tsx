"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { HERO } from "@/lib/content";
import { EASE } from "@/components/ui/Motion";
import Button from "@/components/ui/Button";
import Ticker from "@/components/ui/Ticker";

const MeridianScene = dynamic(() => import("@/components/3d/MeridianScene"), {
  ssr: false,
});

let webglSupport: boolean | null = null;
function detectWebgl(): boolean {
  if (webglSupport === null) {
    try {
      const c = document.createElement("canvas");
      webglSupport = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webglSupport = false;
    }
  }
  return webglSupport;
}
const noopSubscribe = () => () => {};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const visibleRef = useRef(true);
  const reduced = useReducedMotion();
  const webgl = useSyncExternalStore(noopSubscribe, detectWebgl, () => false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progressRef.current = v;
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease: EASE },
  });

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-chapter="01"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* Atmosphere still (Gemini) */}
      <Image
        src="/generated/hero-haze.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="pointer-events-none object-cover opacity-70"
      />

      {/* The Meridian — live 3D flow-field */}
      {webgl && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <MeridianScene
            progressRef={progressRef}
            visibleRef={visibleRef}
            reduced={!!reduced}
          />
        </motion.div>
      )}

      {/* Legibility vignettes */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-end px-6 pb-10 pt-36 md:px-12 xl:px-20">
        <motion.p {...enter(0.2)} className="kicker flex items-start gap-3">
          <span className="mt-[3px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-signal animate-pulse-dot" />
          <span>{HERO.kicker}</span>
        </motion.p>

        <h1 className="mt-8 font-serif text-[clamp(3.1rem,8.4vw,7.6rem)] leading-[0.98] tracking-[-0.015em] text-porcelain">
          <span className="block overflow-hidden pb-[0.09em] -mb-[0.04em]">
            <motion.span
              className="block will-change-transform"
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            >
              {HERO.headline.lead}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.06em]">
            <motion.span
              className="block italic text-steel will-change-transform"
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, delay: 0.47, ease: EASE }}
            >
              {HERO.headline.emphasis}
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.div {...enter(0.65)} className="max-w-xl">
            <p className="text-base leading-relaxed text-steel md:text-lg">
              {HERO.support}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={HERO.ctas.primary.href} variant="primary">
                {HERO.ctas.primary.label}
              </Button>
              <Button href={HERO.ctas.secondary.href} variant="ghost">
                {HERO.ctas.secondary.label}
              </Button>
            </div>
          </motion.div>

          <motion.div
            {...enter(0.8)}
            className="hidden shrink-0 flex-col gap-2 text-right font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist lg:flex"
          >
            <span>Current — Caribetrans</span>
            <span>Mandate — Technology &amp; Innovation</span>
            <span>Focus — Enterprise Systems · AI · Integration</span>
          </motion.div>
        </div>
      </div>

      {/* Domain ticker */}
      <motion.div
        {...enter(1.0)}
        className="hairline relative z-10 border-t py-5"
      >
        <Ticker items={HERO.ticker} />
      </motion.div>
    </section>
  );
}
