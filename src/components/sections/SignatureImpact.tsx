"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMPACT } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal, EASE } from "@/components/ui/Motion";

export default function SignatureImpact() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="impact"
      data-chapter="05"
      className="hairline relative border-t bg-ink-raised py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 md:px-12 xl:px-20">
        <SectionHeader
          index="05"
          label="Signature Impact"
          lines={[
            "Seven pillars,",
            <span key="e" className="italic text-steel">
              carried from architecture to operation.
            </span>,
          ]}
          intro={IMPACT.intro}
        />

        <Reveal className="mt-20">
          <div className="hairline border-t">
            {IMPACT.pillars.map((pillar, i) => {
              const isOpen = open === i;
              return (
                <div key={pillar.title} className="hairline border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-baseline gap-6 py-7 text-left md:gap-10 md:py-8"
                  >
                    <span
                      className={`font-mono text-xs tracking-[0.2em] transition-colors duration-500 ${
                        isOpen ? "text-signal-soft" : "text-mist"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 font-serif text-2xl leading-tight transition-all duration-500 md:text-4xl ${
                        isOpen
                          ? "text-porcelain"
                          : "text-steel group-hover:translate-x-2 group-hover:text-porcelain"
                      }`}
                    >
                      {pillar.title}
                    </span>
                    <span
                      aria-hidden
                      className={`relative h-4 w-4 shrink-0 transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <span className="absolute left-0 top-1/2 h-px w-full bg-steel" />
                      <span className="absolute left-1/2 top-0 h-full w-px bg-steel" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-6 pb-9 pl-12 pr-4 md:flex-row md:items-end md:justify-between md:pl-[4.5rem]">
                          <p className="max-w-xl text-base leading-relaxed text-steel">
                            {pillar.desc}
                          </p>
                          <div className="flex flex-wrap gap-2 md:justify-end">
                            {pillar.tags.map((tag) => (
                              <span
                                key={tag}
                                className="hairline border px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mist"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
