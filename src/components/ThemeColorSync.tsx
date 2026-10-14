"use client";

import { useEffect } from "react";

/*
 * Keeps the browser chrome (the bar above the page on a phone) in tune with
 * the section that is currently at the top of the screen: near-black over the
 * hero, warm white over light sections. It samples the background colour at
 * the top edge while scrolling and updates the theme-color meta tag, plus the
 * html and body background for browsers that tint from the page itself. Browsers
 * cross-fade the change. Nothing is animated by the page.
 */

const parse = (value: string) => {
  const m = value.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(",").map((part) => parseFloat(part));
  const [r, g, b] = parts;
  return { r, g, b, a: parts[3] ?? 1 };
};

function colourAtTop(): string | null {
  const x = Math.max(1, Math.floor(window.innerWidth / 2));
  let el: Element | null = document.elementFromPoint(x, 2);
  while (el) {
    const bg = parse(getComputedStyle(el).backgroundColor);
    if (bg && bg.a > 0.9) return `rgb(${bg.r}, ${bg.g}, ${bg.b})`;
    el = el.parentElement;
  }
  return null;
}

export function ThemeColorSync() {
  useEffect(() => {
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    const root = document.documentElement;
    const body = document.body;
    root.style.transition = "background-color 300ms ease-out";
    body.style.transition = "background-color 300ms ease-out";

    let frame = 0;
    let last = "";
    const update = () => {
      frame = 0;
      const colour = colourAtTop();
      if (!colour || colour === last) return;
      last = colour;
      meta.setAttribute("content", colour);
      root.style.backgroundColor = colour;
      /* Safari on iOS tints its top bar from the body background. */
      body.style.backgroundColor = colour;
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
      root.style.removeProperty("background-color");
      root.style.removeProperty("transition");
      body.style.removeProperty("background-color");
      body.style.removeProperty("transition");
    };
  }, []);

  return null;
}
