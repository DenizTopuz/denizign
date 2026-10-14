"use client";

import { useEffect } from "react";

/*
 * Browsers without CSS scroll-driven animations (older iOS Safari, Firefox)
 * would show the data-rise elements without any motion. This gives them the
 * same effect through an IntersectionObserver. Where the CSS version works,
 * or when the person has asked for reduced motion, this does nothing.
 */
export function RiseFallback() {
  useEffect(() => {
    const supported =
      typeof CSS !== "undefined" &&
      CSS.supports("animation-timeline", "view()");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (supported || reduce) return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rise]"),
    );
    const below = items.filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.9,
    );

    below.forEach((el) => {
      const i = Number(el.style.getPropertyValue("--i")) || 0;
      el.style.transitionDelay = `${i * 70}ms`;
      el.dataset.riseJs = "pending";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.riseJs = "in";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    below.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
