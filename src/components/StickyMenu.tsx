"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./StickyMenu.module.css";

/*
 * A compact menu that follows the page, so it is always within reach. It
 * appears after the first screen of scrolling (the full navigation is in the
 * hero) and picks its colours from whatever section is under it: dark text on
 * light sections, light text on dark ones. The change is a fade, nothing else
 * moves. Anchors work from any page.
 */

const links = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#approach", label: "Approach", id: "approach" },
  { href: "/about", label: "About", id: "about-page" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

const luminance = (rgb: string) => {
  const m = rgb.match(/rgba?\(([^)]+)\)/);
  if (!m) return 1;
  const [r, g, b] = m[1].split(",").map((v) => parseFloat(v) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

function colourBelow(y: number): string | null {
  const x = Math.floor(window.innerWidth / 2);
  let el: Element | null = document.elementFromPoint(x, y);
  while (el) {
    const bg = getComputedStyle(el).backgroundColor;
    const m = bg.match(/rgba?\(([^)]+)\)/);
    if (m) {
      const parts = m[1].split(",").map((p) => parseFloat(p));
      if ((parts[3] ?? 1) > 0.9) return bg;
    }
    el = el.parentElement;
  }
  return null;
}

export function StickyMenu() {
  const pathname = usePathname();
  const bar = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const [tone, setTone] = useState<"light" | "dark">("light");
  const [spy, setSpy] = useState<string | null>(null);
  const active =
    pathname === "/about" ? "about-page" : pathname === "/" ? spy : null;

  /* Which section is in view decides the marked link. */
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["work", "approach", "contact"];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        setSpy(best ? best[0] : null);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.1, 0.5, 1] },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setShown(window.scrollY > window.innerHeight * 0.6);
      const el = bar.current;
      if (!el) return;
      /* Sample just under the bar, so the bar's own background is ignored. */
      const bg = colourBelow(el.offsetHeight + 4);
      if (bg) setTone(luminance(bg) < 0.4 ? "dark" : "light");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const href = (link: string) =>
    pathname === "/" && link.startsWith("/#") ? link.slice(1) : link;

  return (
    <header
      ref={bar}
      className={styles.bar}
      data-shown={shown}
      data-tone={tone}
      aria-hidden={shown ? undefined : true}
    >
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="Denizign — home"
          tabIndex={shown ? 0 : -1}
        >
          <Image
            src="/brand/denizign-mark-red.svg"
            alt=""
            width={270}
            height={218}
            className={styles.mark}
          />
          <span className={styles.name}>Denizign</span>
        </Link>
        <nav aria-label="Quick menu">
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={href(link.href)}
                  className={styles.link}
                  tabIndex={shown ? 0 : -1}
                  aria-current={active === link.id ? "location" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
