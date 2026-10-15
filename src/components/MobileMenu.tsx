"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { HomeLink } from "./HomeLink";
import styles from "./MobileMenu.module.css";

/*
 * The phone menu. A small two-line button sits at the bottom right, within
 * thumb reach. It opens a full-screen overlay with large menu items; the same
 * button (now a cross) closes it again, in the same spot. The header icon
 * (MenuButton) opens the same overlay. Escape closes it, focus is moved into
 * it and back, and the page behind does not scroll.
 */

const items = [
  { label: "Home", href: "/", home: true },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [past, setPast] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  /* Close when the page changes (derived during render, no effect needed). */
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onToggle = () => setOpen((value) => !value);
    window.addEventListener("denizign:menu", onToggle);
    return () => window.removeEventListener("denizign:menu", onToggle);
  }, []);

  useEffect(() => {
    const update = () => setPast(window.scrollY > 240);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";

    const first = panel.current?.querySelector<HTMLElement>("a");
    first?.focus({ preventScroll: true });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      /* Keep Tab inside the overlay and its close button. */
      const focusable = [
        ...(panel.current?.querySelectorAll<HTMLElement>("a") ?? []),
        trigger.current,
      ].filter((el): el is HTMLElement => Boolean(el));
      if (focusable.length === 0) return;
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div
        ref={panel}
        id="mobile-menu"
        className={styles.panel}
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={open ? undefined : true}
        inert={open ? undefined : true}
      >
        <HomeLink
          className={styles.brand}
          onClick={close}
          aria-label="Denizign — home"
        >
          <Image
            src="/brand/denizign-mark-red.svg"
            alt=""
            width={270}
            height={218}
            className={styles.mark}
          />
          <span className={styles.name}>Denizign</span>
        </HomeLink>

        <nav aria-label="Menu">
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li
                key={item.label}
                className={styles.item}
                style={{ "--i": index } as React.CSSProperties}
              >
                {"home" in item ? (
                  <HomeLink className={styles.link} onClick={close}>
                    <span className={styles.number} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </HomeLink>
                ) : (
                  <a className={styles.link} href={item.href} onClick={close}>
                    <span className={styles.number} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        data-visible={past || open}
        data-open={open}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.line} />
        <span className={`${styles.line} ${styles.short}`} />
      </button>
    </>
  );
}
