"use client";

import { useEffect, useMemo, useRef } from "react";
import styles from "./ScrollReveal.module.css";

type Segment = { text: string; accent?: boolean };

type ScrollRevealProps = {
  id?: string;
  className?: string;
  /** The full text, as segments. A segment with `accent` turns red when lit. */
  segments: Segment[];
};

type Letter = { ch: string; accent: boolean };

/** Splits the segments into words, keeping each letter's accent flag. */
function toWords(segments: Segment[]): Letter[][] {
  const words: Letter[][] = [];
  let current: Letter[] = [];
  for (const { text, accent = false } of segments) {
    for (const ch of text) {
      if (ch === " ") {
        if (current.length) words.push(current);
        current = [];
      } else {
        current.push({ ch, accent });
      }
    }
  }
  if (current.length) words.push(current);
  return words;
}

/*
 * A statement that is faintly visible from the start and lights up letter by
 * letter, in reading order, as the visitor scrolls down.
 *
 * When the last letter is lit, the section gets data-reveal-state="done"; the
 * supporting block below fades in as a whole (see HomepageIntro.module.css).
 *
 * Progressive enhancement: the text renders fully lit. Only when JavaScript
 * runs and the visitor has not asked for reduced motion is the dimmed state
 * switched on (data-reveal="on"). The full sentence is exposed through
 * aria-label, so screen readers never hear it letter by letter.
 */
export function ScrollReveal({ id, className, segments }: ScrollRevealProps) {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const words = useMemo(() => toWords(segments), [segments]);
  const label = useMemo(
    () => segments.map((segment) => segment.text).join(""),
    [segments],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const letters = Array.from(
      root.querySelectorAll<HTMLElement>("[data-letter]"),
    );
    root.dataset.reveal = "on";

    /* The parent section learns when the statement is fully lit, so content
       below it (the supporting block) can fade in as a whole afterwards. */
    const section = root.closest("section");
    if (section) section.dataset.revealState = "pending";

    let lit = -1;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;
      /* 0 when the statement's top reaches 90% of the viewport height,
         1 when its bottom reaches 60%. */
      const travel = vh * 0.3 + rect.height;
      const progress = Math.min(1, Math.max(0, (vh * 0.9 - rect.top) / travel));
      const count = Math.round(progress * letters.length);
      if (count === lit) return;
      for (let i = 0; i < letters.length; i++) {
        letters[i].classList.toggle(styles.lit, i < count);
      }
      lit = count;
      if (section) {
        section.dataset.revealState =
          count >= letters.length ? "done" : "pending";
      }
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
      delete root.dataset.reveal;
      if (section) delete section.dataset.revealState;
    };
  }, []);

  return (
    <h2 ref={rootRef} id={id} className={`${styles.root} ${className ?? ""}`} aria-label={label}>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <span key={w}>
            <span className={styles.word}>
              {word.map((letter, i) => (
                <span
                  key={i}
                  data-letter=""
                  className={`${styles.letter} ${letter.accent ? styles.accent : ""}`}
                >
                  {letter.ch}
                </span>
              ))}
            </span>
            {w < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </h2>
  );
}
