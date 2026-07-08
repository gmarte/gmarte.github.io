"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, IDENTITY } from "@/lib/content";
import { EASE } from "@/components/ui/Motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const prefix = pathname === "/" ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "hairline border-b bg-ink/70 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[90rem] items-center justify-between px-6 md:px-12 xl:px-20">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight text-porcelain"
            aria-label="Giancarlo Marte — home"
            onClick={() => setOpen(false)}
          >
            Giancarlo Marte<span className="text-signal-soft">.</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={`${prefix}${link.href}`}
                className="group relative font-mono text-[0.65rem] uppercase tracking-[0.2em] text-steel transition-colors duration-300 hover:text-porcelain"
              >
                <span className="mr-1.5 text-mist/70">0{i + 2}</span>
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal-soft transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`${prefix}#connect`}
              className="hidden border hairline px-5 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-porcelain transition-colors duration-500 hover:border-signal-soft/60 lg:inline-block"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span
                className={`h-px w-6 bg-porcelain transition-transform duration-500 ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-porcelain transition-transform duration-500 ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col gap-1 px-6 pb-28" aria-label="Mobile">
              {[...NAV_LINKS, { label: "Connect", href: "#connect" }].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={`${prefix}${link.href}`}
                  onClick={() => setOpen(false)}
                  className="hairline flex items-baseline gap-4 border-b py-4"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE }}
                >
                  <span className="font-mono text-xs text-signal-soft">
                    0{i + 2}
                  </span>
                  <span className="font-serif text-3xl text-porcelain">
                    {link.label}
                  </span>
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
                className="mt-8 flex flex-col gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist"
              >
                <a
                  href={IDENTITY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-porcelain"
                >
                  LinkedIn ↗
                </a>
                <a href={`mailto:${IDENTITY.email}`} className="hover:text-porcelain">
                  {IDENTITY.email}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
