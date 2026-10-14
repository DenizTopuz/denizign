"use client";

import { useEffect, useRef } from "react";
import styles from "./ProjectCursor.module.css";

/*
 * A round "View" cursor that follows the pointer over any element marked with
 * data-cursor="…". Only on devices with a real, fine pointer. The native
 * cursor (including the pointing hand on links) is hidden over those
 * elements; the links themselves are untouched, so
 * keyboard and touch behave exactly as before. Decorative: aria-hidden.
 */
export function ProjectCursor() {
  const bubble = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = bubble.current;
    const text = label.current;
    if (!el || !text) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    /* Hide the native cursor on the targets and everything inside them,
       links included (they would otherwise show the pointing hand). Added
       only once this script runs, so without JavaScript nothing changes. */
    const style = document.createElement("style");
    style.textContent =
      "[data-cursor], [data-cursor] * { cursor: none !important; }";
    document.head.appendChild(style);

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let frame = 0;
    let visible = false;

    const render = () => {
      /* A gentle trail; with reduced motion the bubble sticks to the pointer. */
      cx += (x - cx) * (reduce ? 1 : 0.22);
      cy += (y - cy) * (reduce ? 1 : 0.22);
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      if (Math.abs(x - cx) > 0.1 || Math.abs(y - cy) > 0.1) {
        frame = requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-cursor]",
      );
      x = event.clientX;
      y = event.clientY;
      if (target) {
        if (!visible) {
          cx = x;
          cy = y;
          visible = true;
          el.dataset.visible = "true";
        }
        text.textContent = target.dataset.cursor ?? "View";
        if (!frame) frame = requestAnimationFrame(render);
      } else if (visible) {
        visible = false;
        el.dataset.visible = "false";
      }
    };

    const onLeave = () => {
      visible = false;
      el.dataset.visible = "false";
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
      style.remove();
    };
  }, []);

  return (
    <div
      ref={bubble}
      className={styles.bubble}
      data-visible="false"
      aria-hidden="true"
    >
      <span ref={label} className={styles.label}>
        View
      </span>
    </div>
  );
}
