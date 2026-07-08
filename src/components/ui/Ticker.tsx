/**
 * Infinite marquee of operating domains. Pure CSS animation
 * (globals: --animate-ticker), duplicated list for a seamless loop.
 */
export default function Ticker({ items }: { items: string[] }) {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center font-mono text-[0.65rem] uppercase tracking-[0.24em] text-mist"
        >
          <span className="whitespace-nowrap">{item}</span>
          <span className="mx-6 inline-block h-1 w-1 rounded-full bg-signal/70" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="relative flex w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex w-max animate-ticker motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
