"use client";

import { motion } from "framer-motion";
import { POSITION, CHAPTERS } from "@/lib/content";
import { Reveal, Stagger, StaggerItem, EASE, VIEWPORT } from "@/components/ui/Motion";
import CountUp from "@/components/ui/CountUp";

export default function ExecutivePositioning() {
  return (
    <section
      id="position"
      data-chapter="02"
      className="relative bg-ink py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 md:px-12 xl:px-20">
        <Reveal duration={0.8}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.22em] text-signal-soft">
              {CHAPTERS[1].index}
            </span>
            <span className="kicker">Executive Position</span>
            <span className="hairline h-px flex-1 border-t" aria-hidden />
          </div>
        </Reveal>

        <motion.blockquote
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
          className="mt-14 max-w-5xl font-serif text-[clamp(1.75rem,3.6vw,3.1rem)] leading-[1.28] text-porcelain"
        >
          {POSITION.statement.map((seg, i) =>
            seg.em ? (
              <em
                key={i}
                className={`italic ${
                  seg.signal ? "text-signal-soft" : "text-porcelain"
                }`}
              >
                {seg.text}
              </em>
            ) : (
              <span key={i}>{seg.text}</span>
            )
          )}
        </motion.blockquote>

        <Reveal delay={0.2} className="mt-10 max-w-2xl">
          <p className="text-base leading-relaxed text-steel md:text-lg">
            {POSITION.detail}
          </p>
        </Reveal>

        <Stagger
          className="hairline mt-20 grid grid-cols-2 gap-px overflow-hidden border bg-white/8 lg:grid-cols-4"
          stagger={0.08}
        >
          {POSITION.stats.map((stat) => (
            <StaggerItem key={stat.label} className="bg-ink">
              <div className="flex h-full flex-col justify-between gap-8 p-8 md:p-10">
                <span className="font-serif text-5xl text-porcelain md:text-6xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="kicker">{stat.label}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
