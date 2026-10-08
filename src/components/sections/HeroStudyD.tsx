import Image from "next/image";
import { SiteNavigation } from "./SiteNavigation";
import styles from "./HeroStudyD.module.css";

/*
 * Study D — Laura Gonzalez inspired.
 * Centred, large black-and-white portrait cut-out on the near-black canvas.
 * The headline crosses the chest, below the face. The role line becomes a
 * large quiet block in the bottom-right corner.
 */
export function HeroStudyD() {
  return (
    <section
      className={styles.canvas}
      data-study="d"
      aria-labelledby="study-d-title"
    >
      <figure className={styles.plane}>
        <Image
          src="/images/deniz-topuz-hero.png"
          alt="Portrait of Deniz Topuz"
          fill
          loading="eager"
          sizes="(min-width: 1024px) 70vw, 100vw"
          className={styles.photo}
        />
      </figure>

      <div className={styles.layer}>
        <SiteNavigation tone="dark" wide />

        <div className={styles.grid}>
          <h2 id="study-d-title" className={styles.headline}>
            <span className={styles.lineA}>Complex systems.</span>
            <span className={styles.lineB}>Clear experiences.</span>
          </h2>

          <div className={styles.bottom}>
            <div className={styles.left}>
              <dl className={styles.meta}>
                <div>
                  <dt>Based</dt>
                  <dd>Netherlands</dd>
                </div>
              </dl>
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

            <p className={styles.lead}>
              I connect users, product, technology and teams to turn
              complexity into intuitive digital experiences.
            </p>

            <p className={styles.roles}>
              <span>UX Lead</span>
              <span className="sr-only"> · </span>
              <span>Product Experience</span>
              <span className="sr-only"> · </span>
              <span>Systems Thinking</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
