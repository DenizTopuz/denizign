import Image from "next/image";
import type { Figure } from "../../../content/projects/case-studies";
import styles from "./CaseStudyBleed.module.css";

/*
 * A full-width figure. The image is larger than its frame and drifts slowly
 * against the scroll, so the empty corners of a wide export stay out of view.
 * Pure CSS (scroll-driven animation, transform only); without support, or with
 * reduced motion, it simply sits still.
 *
 * `fit` figures are dense sheets that must stay readable: shown whole, centred
 * on the same quiet surface, with no zoom and no crop. They drift too, but only
 * within the padding around them. On a phone they can be panned sideways, like
 * the project visuals.
 */
export function CaseStudyBleed({ figure }: { figure: Figure }) {
  return (
    <figure className={styles.bleed}>
      <div className={`${styles.frame} ${figure.fit ? styles.fit : ""}`}>
        {figure.fit ? (
          /* The scroller (for phones) sits inside the frame, so the page
             scroll, not the sideways scroller, drives the drift. */
          <div className={styles.fitScroll}>
            <Image
              src={figure.src}
              width={figure.width}
              height={figure.height}
              alt={figure.alt}
              sizes="100vw"
              className={styles.image}
            />
          </div>
        ) : (
          <Image
            src={figure.src}
            width={figure.width}
            height={figure.height}
            alt={figure.alt}
            sizes="100vw"
            className={styles.image}
          />
        )}
      </div>
      <figcaption className={styles.caption}>{figure.caption}</figcaption>
    </figure>
  );
}
