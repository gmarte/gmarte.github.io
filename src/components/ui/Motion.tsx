"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** The single easing signature of the site. */
export const EASE: [number, number, number, number] = [0.19, 1, 0.22, 1];

export const VIEWPORT = { once: true, margin: "-10% 0px -10% 0px" } as const;

/** Rise + fade reveal for blocks of content. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 1,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const lineVariants: Variants = {
  hidden: { y: "112%" },
  show: (config: { delay: number }) => ({
    y: "0%",
    transition: { duration: 1.1, delay: config.delay, ease: EASE },
  }),
};

/**
 * Masked line reveal — each line slides up from behind a crop.
 * The intersection observer must sit on the (unclipped) parent: a span
 * translated 112% inside overflow-hidden is fully clipped, so observing
 * the line itself would never fire.
 */
export function RevealLines({
  lines,
  delay = 0,
  stagger = 0.09,
  className,
  lineClassName,
  as = "div",
}: {
  lines: ReactNode[];
  delay?: number;
  stagger?: number;
  className?: string;
  lineClassName?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block will-change-transform ${lineClassName ?? ""}`}
            variants={lineVariants}
            custom={{ delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

/** Staggered group — children must be <StaggerItem>. */
export function Stagger({
  children,
  className,
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
