"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { IDENTITY } from "@/lib/content";
import { EASE } from "@/components/ui/Motion";

/**
 * /network — the event credential card.
 * Unlisted: shown in person on a phone so people can scan and connect.
 * Two QR modes: LinkedIn profile, or a vCard payload that writes
 * the contact straight into the scanner's address book.
 */

const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Marte;Giancarlo;;;",
  "FN:Giancarlo Marte",
  "TITLE:Technology & Innovation Manager",
  "ORG:Caribetrans",
  `EMAIL;TYPE=INTERNET:${IDENTITY.email}`,
  `URL:https://${IDENTITY.domain}`,
  `item1.URL:${IDENTITY.linkedin}`,
  "item1.X-ABLabel:LinkedIn",
  "END:VCARD",
].join("\n");

const MODES = [
  {
    key: "linkedin",
    tab: "LinkedIn",
    value: IDENTITY.linkedin,
    level: "H" as const,
    caption: "Scan — connect on LinkedIn",
  },
  {
    key: "vcard",
    tab: "Contact card",
    value: VCARD,
    level: "M" as const,
    caption: "Scan — save contact to phone",
  },
];

const ACTIONS = [
  { label: "Save contact", meta: ".VCF", href: "/gmarte.vcf", download: true },
  { label: "Email", meta: IDENTITY.email, href: `mailto:${IDENTITY.email}` },
  { label: "Full portfolio", meta: IDENTITY.domain, href: "/" },
  { label: "Résumé", meta: "PDF", href: IDENTITY.resume, external: true },
];

export default function NetworkCard() {
  const [mode, setMode] = useState(0);
  const active = MODES[mode];

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-ink px-4 py-10">
      {/* Quiet atmosphere, consistent with the hero */}
      <Image
        src="/generated/hero-haze.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/80" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE }}
        className="panel relative z-10 w-full max-w-sm"
      >
        {/* Header strip */}
        <div className="hairline flex items-center justify-between border-b px-6 py-4">
          <span className="flex items-center gap-2.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
            Executive contact
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-mist">
            In person
          </span>
        </div>

        {/* Identity */}
        <div className="flex items-center gap-5 px-6 pt-7">
          <div className="hairline relative h-20 w-20 shrink-0 overflow-hidden border">
            <Image
              src="/profile.jpg"
              alt="Giancarlo Marte"
              fill
              sizes="80px"
              className="object-cover"
              preload
            />
            <span
              aria-hidden
              className="absolute left-0 top-0 h-px w-3 bg-signal"
            />
            <span
              aria-hidden
              className="absolute left-0 top-0 h-3 w-px bg-signal"
            />
          </div>
          <div className="min-w-0">
            <h1 className="font-serif text-[1.7rem] leading-tight text-porcelain">
              Giancarlo Marte
            </h1>
            <p className="mt-1.5 font-mono text-[0.58rem] uppercase leading-relaxed tracking-[0.18em] text-steel">
              Technology &amp; Innovation Manager
              <br />
              <span className="text-mist">SAP Solutions Architect</span>
            </p>
          </div>
        </div>

        {/* QR mode tabs */}
        <div className="hairline mx-6 mt-7 grid grid-cols-2 border">
          {MODES.map((m, i) => (
            <button
              key={m.key}
              type="button"
              onClick={() => setMode(i)}
              aria-pressed={mode === i}
              className={`px-3 py-2.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
                mode === i
                  ? "bg-porcelain text-ink"
                  : "text-mist hover:text-porcelain"
              }`}
            >
              {m.tab}
            </button>
          ))}
        </div>

        {/* QR block — white ground for scan contrast in any light */}
        <div className="px-6 pt-4">
          <div className="hairline mx-auto w-full max-w-[17rem] border bg-white p-4">
            <QRCode
              value={active.value}
              level={active.level}
              fgColor="#060607"
              bgColor="#ffffff"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <p className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-mist">
            {active.caption}
          </p>
        </div>

        {/* Direct actions — for when the page itself is shared */}
        <div className="hairline mx-6 mb-6 mt-6 border-t">
          {ACTIONS.map((action) => (
            <a
              key={action.label}
              href={action.href}
              {...(action.download ? { download: "" } : {})}
              {...(action.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="hairline group flex items-center justify-between border-b py-3.5 transition-colors duration-300"
            >
              <span className="text-sm text-porcelain transition-transform duration-300 group-hover:translate-x-1">
                {action.label}
              </span>
              <span className="flex items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-mist">
                {action.meta}
                <span
                  aria-hidden
                  className="text-steel transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-signal-soft"
                >
                  →
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Footer strip */}
        <div className="hairline flex items-center justify-between border-t px-6 py-4">
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-mist">
            {IDENTITY.domain}/network
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-mist">
            Logistics · Retail · Mfg
          </span>
        </div>
      </motion.div>
    </div>
  );
}
