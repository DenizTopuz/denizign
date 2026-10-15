"use client";

import styles from "./MenuButton.module.css";

/*
 * The two-line menu icon in the page header (phones only). It asks the menu
 * overlay (MobileMenu) to open, through a window event.
 */
export function MenuButton({ tone = "dark" }: { tone?: "light" | "dark" }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[tone]}`}
      aria-label="Open menu"
      aria-haspopup="dialog"
      onClick={() => window.dispatchEvent(new CustomEvent("denizign:menu"))}
    >
      <span className={styles.line} />
      <span className={`${styles.line} ${styles.short}`} />
    </button>
  );
}
