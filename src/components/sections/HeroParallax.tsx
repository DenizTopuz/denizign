"use client";

import { useEffect, useRef } from "react";

/*
 * Writes the hero's scroll distance (in px, clamped to the hero's height) to
 * the CSS variable --hero-scroll on the surrounding section. The hero's CSS
 * turns that number into small transforms (the parallax). Renders nothing.
 *
 * Switched off for prefers-reduced-motion: the variable then stays unset, so
 * every transform resolves to zero.
 */
export function HeroParallax() {
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = marker.current?.closest("section");
    if (!section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const height = section.offsetHeight;
      const top = section.getBoundingClientRect().top + window.scrollY;
      const scrolled = Math.min(Math.max(window.scrollY - top, 0), height);
      section.style.setProperty("--hero-scroll", String(Math.round(scrolled)));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      section.style.removeProperty("--hero-scroll");
    };
  }, []);

  return <span ref={marker} hidden />;
}
