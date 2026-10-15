"use client";

import { useEffect, useRef } from "react";
import styles from "./SwipeHint.module.css";

/*
 * A small pointing hand that drifts sideways, to show that an image can be
 * swiped. Place it as the first child of a horizontally scrollable element.
 * It only shows on phones, only when the content really overflows, and
 * disappears for good as soon as the person scrolls it. It plays a few times
 * and rests; with reduced motion it stays still.
 */
export function SwipeHint({
  label = "Swipe to see more",
}: {
  label?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hint = ref.current;
    const scroller = hint?.parentElement;
    if (!hint || !scroller) return;

    let dismissed = false;
    let played = false;
    const overflows = () => scroller.scrollWidth > scroller.clientWidth + 8;
    const sync = () => {
      if (dismissed) return;
      if (!overflows()) hint.dataset.state = "off";
      else if (hint.dataset.state === "off") hint.dataset.state = "ready";
    };
    const dismiss = () => {
      dismissed = true;
      hint.dataset.state = "off";
    };

    /* Play only once the image is actually on screen. */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || dismissed || played || !overflows())
          return;
        played = true;
        hint.dataset.state = "playing";
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    sync();
    observer.observe(scroller);
    scroller.addEventListener("scroll", dismiss, { passive: true, once: true });
    window.addEventListener("resize", sync);
    return () => {
      observer.disconnect();
      scroller.removeEventListener("scroll", dismiss);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={styles.anchor}
      data-state="off"
      aria-hidden="true"
    >
      <span className={styles.pill}>
        <svg
          className={styles.hand}
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 14a8 8 0 0 1-8 8" />
          <path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
          <path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
          <path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" />
          <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
        <span className={styles.label}>{label}</span>
      </span>
    </span>
  );
}
