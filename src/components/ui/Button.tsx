import type { ReactNode } from "react";

const base =
  "group inline-flex items-center justify-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-all duration-500 px-7 py-4";

const variants = {
  primary:
    "bg-porcelain text-ink hover:bg-signal hover:text-porcelain",
  ghost:
    "border hairline text-porcelain hover:border-signal-soft/60 hover:text-porcelain",
  quiet:
    "px-0 py-0 text-steel hover:text-porcelain",
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className ?? ""}`}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-500 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
