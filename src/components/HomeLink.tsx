"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/*
 * A link to the home page that always lands at the very top, as if the page
 * was opened for the first time: on the home page it scrolls to the top and
 * clears any #section from the address; from other pages it navigates home.
 */
export function HomeLink({
  onClick,
  ...props
}: Omit<ComponentProps<typeof Link>, "href">) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      href="/"
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (pathname === "/") {
          event.preventDefault();
          const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          window.history.replaceState(null, "", "/");
          window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        }
      }}
    />
  );
}
