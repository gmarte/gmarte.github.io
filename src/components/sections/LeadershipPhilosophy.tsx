"use client";

import { PHILOSOPHY } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Motion";

export default function LeadershipPhilosophy() {
  return (
    <section
      id="philosophy"
      data-chapter="07"
      className="hairline relative border-t bg-ink-raised py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 md:px-12 xl:px-20">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-28">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <SectionHeader
              index="07"
              label="Leadership Philosophy"
              lines={[
                "How the work",
                <span key="e" className="italic text-steel">
                  gets led.
                </span>,
              ]}
              intro="Five operating principles. None of them negotiable, all of them earned in production."
            />
          </div>

          <div className="flex flex-col">
            {PHILOSOPHY.principles.map((principle, i) => (
              <Reveal
                key={principle.title}
                delay={0.05 * i}
                className={`hairline border-b py-10 md:py-12 ${
                  i === 0 ? "hairline border-t" : ""
                }`}
              >
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-6 md:gap-10">
                  <span className="font-mono text-xs tracking-[0.2em] text-signal-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl leading-tight text-porcelain md:text-4xl">
                      {principle.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-steel">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
