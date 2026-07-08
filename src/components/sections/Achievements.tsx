"use client";

import { PROOF } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Motion";

export default function Achievements() {
  return (
    <section
      id="proof"
      data-chapter="06"
      className="hairline relative border-t bg-ink py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 md:px-12 xl:px-20">
        <SectionHeader
          index="06"
          label="Proof Points"
          lines={[
            "Claims are cheap.",
            <span key="e" className="italic text-steel">
              These shipped.
            </span>,
          ]}
          intro={PROOF.intro}
        />

        <Stagger className="mt-20" stagger={0.06}>
          <div className="hairline border-t">
            {PROOF.items.map((item, i) => (
              <StaggerItem key={item.headline}>
                <div className="hairline group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b py-7 md:grid-cols-[6rem_1fr_1.2fr] md:gap-x-10 md:py-8">
                  <span className="font-mono text-xs tracking-[0.2em] text-mist transition-colors duration-500 group-hover:text-signal-soft">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-porcelain md:text-xl">
                    {item.headline}
                  </h3>
                  <p className="col-start-2 mt-2 text-sm leading-relaxed text-mist md:col-start-3 md:mt-0 md:text-base md:text-steel">
                    {item.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
