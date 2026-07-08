"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { JOURNEY } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Motion";

export default function CareerTimeline() {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const entryRefs = useRef<(HTMLElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.7", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entryRefs.current.indexOf(entry.target as HTMLElement);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    entryRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="journey"
      data-chapter="03"
      className="hairline relative border-t bg-ink-raised py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 md:px-12 xl:px-20">
        <SectionHeader
          index="03"
          label="Career Journey"
          lines={[
            "One trajectory,",
            <span key="e" className="italic text-steel">
              four operating phases.
            </span>,
          ]}
          intro={JOURNEY.intro}
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-[280px_1fr] lg:gap-24">
          {/* Sticky phase index (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-36 flex flex-col gap-6">
              {JOURNEY.phases.map((phase, i) => (
                <div
                  key={phase.index}
                  className={`flex items-baseline gap-4 transition-all duration-500 ${
                    active === i ? "opacity-100" : "opacity-35"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-[0.2em] ${
                      active === i ? "text-signal-soft" : "text-mist"
                    }`}
                  >
                    {phase.index}
                  </span>
                  <span className="font-serif text-2xl text-porcelain">
                    {phase.era}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Entries with progress spine */}
          <div ref={listRef} className="relative">
            <div
              aria-hidden
              className="absolute bottom-0 left-0 top-0 w-px bg-white/8"
            />
            <motion.div
              aria-hidden
              style={{ scaleY: progress }}
              className="absolute bottom-0 left-0 top-0 w-px origin-top bg-signal"
            />

            <div className="flex flex-col">
              {JOURNEY.phases.map((phase, i) => (
                <article
                  key={phase.index}
                  ref={(el) => {
                    entryRefs.current[i] = el;
                  }}
                  className={`group relative pl-10 md:pl-16 ${
                    i > 0 ? "mt-20 md:mt-28" : ""
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute left-0 top-2 h-2 w-2 -translate-x-[3.5px] rounded-full transition-colors duration-500 ${
                      active >= i ? "bg-signal" : "bg-white/20"
                    }`}
                  />
                  <Reveal>
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-mist">
                        {phase.index} — {phase.era}
                      </span>
                      {phase.current && (
                        <span className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-signal-soft">
                          <span className="h-1 w-1 rounded-full bg-signal animate-pulse-dot" />
                          Present
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-serif text-3xl leading-tight text-porcelain md:text-4xl">
                      {phase.role}
                    </h3>
                    <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-steel">
                      {phase.org}
                    </p>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
                      {phase.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {phase.themes.map((theme) => (
                        <span
                          key={theme}
                          className="hairline border px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mist"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
