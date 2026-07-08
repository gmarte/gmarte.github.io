import Link from "next/link";
import { IDENTITY, NAV_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="hairline relative border-t bg-ink">
      <div className="mx-auto w-full max-w-[90rem] px-6 py-16 md:px-12 md:py-20 xl:px-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link href="/" className="font-serif text-3xl text-porcelain">
              Giancarlo Marte<span className="text-signal-soft">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Technology &amp; Innovation Manager. Turning enterprise complexity
              into scalable execution.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="kicker">Chapters</span>
              {NAV_LINKS.slice(0, 3).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-steel transition-colors hover:text-porcelain"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="kicker" aria-hidden>
                &nbsp;
              </span>
              {NAV_LINKS.slice(3).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-steel transition-colors hover:text-porcelain"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="kicker">Connect</span>
              <a
                href={IDENTITY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-steel transition-colors hover:text-porcelain"
              >
                LinkedIn ↗
              </a>
              <a
                href={`mailto:${IDENTITY.email}`}
                className="text-sm text-steel transition-colors hover:text-porcelain"
              >
                Email
              </a>
              <a
                href={IDENTITY.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-steel transition-colors hover:text-porcelain"
              >
                Résumé ↗
              </a>
            </div>
          </div>
        </div>

        <div className="hairline mt-16 flex flex-col gap-3 border-t pt-8 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mist md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Giancarlo Marte — All rights reserved</p>
          <div className="flex items-center gap-6">
            <Link
              href="/design-system"
              className="transition-colors hover:text-porcelain"
            >
              Design system
            </Link>
            <span aria-hidden className="hidden md:inline">
              /
            </span>
            <p>Engineered with discipline</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
