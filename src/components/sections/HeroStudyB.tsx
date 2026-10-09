import Image from "next/image";
import { SiteNavigation } from "./SiteNavigation";
import styles from "./HeroStudyB.module.css";

/*
 * Study B — near-black canvas, one seamless composition.
 * The portrait is a cut-out of the original photo (public/images), so
 * Deniz stands directly on the canvas colour: no frame, no plane, no line.
 * The original photograph is untouched.
 */
export function HeroStudyB() {
  return (
    <section
      className={styles.canvas}
      data-study="b"
      aria-labelledby="study-b-title"
    >
      <figure className={styles.plane}>
        <Image
          src="/images/deniz-topuz-hero.png"
          alt="Portrait of Deniz Topuz"
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          loading="eager"
          className={styles.photo}
        />
      </figure>

      <div className={styles.layer}>
        <SiteNavigation tone="dark" wide brand />

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span className={styles.nowrap}>UX Lead ·</span>{" "}
              <span className={styles.nowrap}>Product Experience ·</span>{" "}
              <span className={styles.nowrap}>Systems Thinking</span>
            </p>

            <p className={styles.lead}>
              I connect users, product, technology and teams to turn complexity
              into intuitive digital experiences.
            </p>

            <h2 id="study-b-title" className={styles.headline}>
              <span className={styles.lineA}>Complex systems.</span>
              <span className={styles.lineB}>Clear experiences.</span>
            </h2>

            <div className={styles.actions}>
              <a href="#work" className={styles.primary}>
                View selected work
                <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" className={styles.secondary}>
                Get in touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
