"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

/*
 * A quick way back to the top on long pages. Appears once the person has
 * scrolled a screen or two, scrolls smoothly (instantly with reduced motion)
 * and moves focus to the page so keyboard users land at the top too.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 1.2);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const goTop = () => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    (document.querySelector("#top") as HTMLElement | null)?.focus({
      preventScroll: true,
    });
  };

  return (
    <button
      type="button"
      className={styles.button}
      data-visible={visible}
      onClick={goTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
      aria-label="Back to top"
    >
      <span aria-hidden="true">↑</span>
      <span className={styles.text}>Top</span>
    </button>
  );
}
