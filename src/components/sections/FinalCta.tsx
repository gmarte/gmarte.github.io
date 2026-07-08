"use client";

import Image from "next/image";
import { CTA } from "@/lib/content";
import { Reveal, RevealLines } from "@/components/ui/Motion";
import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section
      id="connect"
      className="hairline relative overflow-hidden border-t bg-ink py-32 md:py-48"
    >
      {/* Lattice arc artwork (Gemini) as quiet backdrop */}
      <Image
        src="/generated/og-cover.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-right opacity-30"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 md:px-12 xl:px-20">
        <Reveal duration={0.8}>
          <p className="kicker flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
            {CTA.kicker}
          </p>
        </Reveal>

        <RevealLines
          as="h2"
          className="mt-10 max-w-4xl font-serif text-[clamp(2.8rem,6.5vw,5.6rem)] leading-[1.04] text-porcelain"
          lines={[
            CTA.headline.lead,
            <span key="e" className="italic text-steel">
              {CTA.headline.emphasis}
            </span>,
          ]}
        />

        <Reveal delay={0.25} className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-steel md:text-lg">
            {CTA.support}
          </p>
        </Reveal>

        <Reveal delay={0.4} className="mt-12">
          <div className="flex flex-wrap items-center gap-4">
            {CTA.actions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                external={action.external}
                variant={action.primary ? "primary" : "ghost"}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
