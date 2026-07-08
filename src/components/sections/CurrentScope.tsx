"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SCOPE } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Motion";

export default function CurrentScope() {
  const bandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="scope"
      data-chapter="04"
      className="hairline relative border-t bg-ink py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 md:px-12 xl:px-20">
        <SectionHeader
          index="04"
          label="Current Scope — Caribetrans"
          lines={[
            "An operation that never pauses.",
            <span key="e" className="italic text-steel">
              A mandate that covers all of it.
            </span>,
          ]}
          intro={SCOPE.intro}
        />
      </div>

      {/* Operating terrain — Gemini still animated via Higgsfield */}
      <div
        ref={bandRef}
        className="hairline relative mt-20 h-[52vh] overflow-hidden border-y md:h-[64vh]"
      >
        <motion.video
          style={{ y, scale: 1.28 }}
          className="absolute inset-0 h-full w-full object-cover"
          src="/generated/flow-loop.mp4"
          poster="/generated/flow-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-6 py-5 md:px-12 xl:px-20">
            <span className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-steel">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
              {SCOPE.interstitialLabel}
            </span>
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.22em] text-mist md:inline">
              Freight · Air · Ocean · Customs · Warehousing · Distribution
            </span>
          </div>
        </div>
      </div>

      {/* Operating board */}
      <div className="mx-auto mt-20 w-full max-w-[90rem] px-6 md:px-12 xl:px-20">
        <Stagger
          className="hairline grid grid-cols-1 gap-px overflow-hidden border bg-white/8 sm:grid-cols-2 xl:grid-cols-4"
          stagger={0.06}
        >
          {SCOPE.modules.map((mod, i) => (
            <StaggerItem key={mod.code} className="bg-ink">
              <div className="group flex h-full flex-col justify-between gap-14 p-8 transition-colors duration-700 hover:bg-ink-panel md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] tracking-[0.22em] text-mist transition-colors duration-500 group-hover:text-signal-soft">
                    {mod.code}
                  </span>
                  <span className="font-mono text-[0.6rem] text-mist/60">
                    {String(i + 1).padStart(2, "0")} / 08
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-porcelain">
                    {mod.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {mod.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
