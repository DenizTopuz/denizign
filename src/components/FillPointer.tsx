"use client";

import { useEffect } from "react";

/*
 * Tells pills with data-fill where the pointer entered and left, so their
 * colour can grow out of that point (see the [data-fill] rules in globals.css).
 * One delegated listener for the whole site. Decorative: without it the fill
 * simply grows from the centre.
 */
export function FillPointer() {
  useEffect(() => {
    const place = (el: HTMLElement, event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--fx", `${event.clientX - rect.left}px`);
      el.style.setProperty("--fy", `${event.clientY - rect.top}px`);
    };

    const onOver = (event: PointerEvent) => {
      const el = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-fill]",
      );
      if (el) place(el, event);
    };
    const onOut = (event: PointerEvent) => {
      const el = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-fill]",
      );
      if (el && !el.contains(event.relatedTarget as Node | null)) {
        place(el, event);
      }
    };

    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return null;
}
