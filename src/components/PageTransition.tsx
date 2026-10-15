"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./PageTransition.module.css";

/*
 * Page transition. Clicking an internal link to another page lets a near-black
 * curtain rise from the bottom and name the destination; the new page is
 * loaded behind it and the curtain lifts away. It tells you where you are
 * going. With reduced motion, or for modified clicks, navigation is untouched.
 */

type Phase = "idle" | "cover" | "reveal";

const names: Record<string, string> = {
  "/": "Home",
  "/about": "About",
};

function labelFor(path: string, hash: string) {
  if (path === "/" && hash) {
    const id = hash.slice(1);
    return id.charAt(0).toUpperCase() + id.slice(1);
  }
  if (names[path]) return names[path];
  const slug = path.split("/").filter(Boolean).pop() ?? "";
  const text = slug.replace(/-/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const [lastPath, setLastPath] = useState(pathname);

  /* The new page arrived: lift the curtain (derived during render). */
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (phase === "cover") setPhase("reveal");
  }

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        reduce.matches
      ) {
        return;
      }
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const normalise = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);
      if (normalise(url.pathname) === normalise(window.location.pathname)) return;
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return;

      event.preventDefault();
      setLabel(labelFor(normalise(url.pathname), url.hash));
      setPhase("cover");
      /* Let the curtain close before the route changes. */
      window.setTimeout(() => {
        router.push(url.pathname + url.search + url.hash);
      }, 460);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  useEffect(() => {
    if (phase === "reveal") {
      const id = window.setTimeout(() => setPhase("idle"), 700);
      return () => window.clearTimeout(id);
    }
    if (phase === "cover") {
      /* Safety: never leave the curtain up if the route does not change. */
      const id = window.setTimeout(() => setPhase("reveal"), 4000);
      return () => window.clearTimeout(id);
    }
  }, [phase]);

  return (
    <div className={styles.curtain} data-phase={phase} aria-hidden="true">
      <p className={styles.label}>{label}</p>
    </div>
  );
}
