"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Route-aware site chrome. /network is a standalone event artifact
 * (a digital credential card shown in person) — it renders bare,
 * without the site navigation and footer.
 */
export default function Chrome({
  nav,
  footer,
  children,
}: {
  nav: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const bare = pathname === "/network";

  return (
    <>
      {!bare && nav}
      <main>{children}</main>
      {!bare && footer}
    </>
  );
}
