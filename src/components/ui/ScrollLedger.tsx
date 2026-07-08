"use client";

import { useEffect, useState } from "react";
import { CHAPTERS } from "@/lib/content";

/**
 * Fixed left "ledger rail": chapter indices 01–07 with the active
 * chapter highlighted. Desktop only — quiet wayfinding, not chrome.
 */
export default function ScrollLedger() {
  const [active, setActive] = useState("01");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chapter]")
    );
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-chapter") ?? "01");
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => io.observe(s));

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Chapters"
      className={`fixed left-7 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-4 transition-opacity duration-700 2xl:flex ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {CHAPTERS.map((chapter) => {
        const isActive = chapter.index === active;
        return (
          <a
            key={chapter.index}
            href={`#${chapter.id}`}
            aria-label={`Chapter ${chapter.index}: ${chapter.label}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`h-px transition-all duration-500 ${
                isActive ? "w-6 bg-signal" : "w-3 bg-white/20 group-hover:bg-white/50"
              }`}
            />
            <span
              className={`font-mono text-[0.6rem] tracking-[0.2em] transition-colors duration-500 ${
                isActive ? "text-porcelain" : "text-mist/60 group-hover:text-steel"
              }`}
            >
              {chapter.index}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
