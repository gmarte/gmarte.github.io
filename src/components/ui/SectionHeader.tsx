"use client";

import type { ReactNode } from "react";
import { Reveal, RevealLines } from "@/components/ui/Motion";

/**
 * Chapter header: mono index + label on a hairline rule,
 * then a serif display headline revealed line by line.
 */
export default function SectionHeader({
  index,
  label,
  lines,
  intro,
  className,
}: {
  index: string;
  label: string;
  lines: ReactNode[];
  intro?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal duration={0.8}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.22em] text-signal-soft">
            {index}
          </span>
          <span className="kicker">{label}</span>
          <span className="hairline h-px flex-1 border-t" aria-hidden />
        </div>
      </Reveal>
      <RevealLines
        as="h2"
        className="mt-8 font-serif text-[clamp(2.6rem,6vw,4.9rem)] leading-[1.04] text-porcelain"
        lines={lines}
        delay={0.08}
      />
      {intro ? (
        <Reveal delay={0.25} className="mt-6 max-w-2xl">
          <p className="text-base leading-relaxed text-steel md:text-lg">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
