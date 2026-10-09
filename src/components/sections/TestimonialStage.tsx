"use client";

import { useRef, useState } from "react";
import type { Testimonial } from "../../../content/testimonials";
import styles from "./HomepageTestimonials.module.css";

/*
 * One recommendation at a time. All slides sit in the same grid cell, so the
 * stage is as tall as the longest one and nothing jumps. Inactive slides are
 * hidden from sight and from assistive technology; the text stays in the DOM.
 * No autoplay.
 */

const formatDate = (iso: string) => {
  const [year, month] = iso.split("-");
  if (!month) return year;
  return new Date(
    Date.UTC(Number(year), Number(month) - 1, 1),
  ).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

const pad = (n: number) => String(n).padStart(2, "0");

/* Larger type for shorter quotes. The accent phrase only appears at sizes
   where the red on near-black passes as large text. */
const sizeFor = (quote: string) =>
  quote.length <= 260 ? "large" : quote.length <= 420 ? "medium" : "small";

function Quote({ item }: { item: Testimonial }) {
  const size = sizeFor(item.quote);
  const paragraphs = item.quote.split("\n\n");

  return (
    <blockquote className={`${styles.quote} ${styles[size]}`} lang={item.lang}>
      {paragraphs.map((paragraph) => {
        const at =
          item.highlight && size !== "small"
            ? paragraph.indexOf(item.highlight)
            : -1;
        return (
          <p key={paragraph}>
            {at < 0 ? (
              paragraph
            ) : (
              <>
                {paragraph.slice(0, at)}
                <span className={styles.mark}>{item.highlight}</span>
                {paragraph.slice(at + (item.highlight?.length ?? 0))}
              </>
            )}
          </p>
        );
      })}
    </blockquote>
  );
}

export function TestimonialStage({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const last = items.length - 1;

  const go = (index: number, focus = false) => {
    const next = (index + items.length) % items.length;
    setActive(next);
    if (focus) tabs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const step =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? -1
          : 0;
    if (step) {
      event.preventDefault();
      go(active + step, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      go(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      go(last, true);
    }
  };

  return (
    <div
      className={styles.stage}
      role="group"
      aria-roledescription="carousel"
      aria-label="Recommendations"
    >
      <div className={styles.head}>
        <p className={styles.counter} aria-live="polite">
          <span className={styles.current}>{pad(active + 1)}</span>
          <span aria-hidden="true">/{pad(items.length)}</span>
          <span className="sr-only"> of {items.length}</span>
        </p>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            onClick={() => go(active - 1)}
            aria-label="Previous recommendation"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className={styles.control}
            onClick={() => go(active + 1)}
            aria-label="Next recommendation"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className={styles.slides}>
        {items.map((item, index) => (
          <div
            key={`${item.name}-${item.date}`}
            id={`testimonial-${index}`}
            role="tabpanel"
            aria-labelledby={`testimonial-tab-${index}`}
            className={`${styles.slide} ${index === active ? styles.on : ""}`}
          >
            <figure className={styles.figure}>
              <Quote item={item} />
              <figcaption className={styles.caption}>
                <span className={styles.name}>
                  <span aria-hidden="true">{"// "}</span>
                  {item.name}
                </span>
                <span className={styles.role}>
                  {item.company ? `${item.role}, ${item.company}` : item.role}
                </span>
                <span className={styles.meta}>
                  {item.source}
                  <span aria-hidden="true"> · </span>
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                </span>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Choose a recommendation"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
      >
        {items.map((item, index) => (
          <button
            key={`${item.name}-${item.date}`}
            ref={(el) => {
              tabs.current[index] = el;
            }}
            id={`testimonial-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls={`testimonial-${index}`}
            aria-label={`${pad(index + 1)}, ${item.name}`}
            tabIndex={index === active ? 0 : -1}
            className={styles.tab}
            onClick={() => go(index)}
          >
            <span className={styles.tick} aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}
