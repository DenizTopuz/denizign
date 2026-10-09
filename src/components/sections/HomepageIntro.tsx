import { ScrollReveal } from "./ScrollReveal";
import styles from "./HomepageIntro.module.css";

/*
 * Intro: the second scene after the hero. One large positioning statement
 * with a single accent phrase that lights up letter by letter on scroll, and
 * smaller supporting copy that fades in as a whole once the statement is lit.
 */
export function HomepageIntro() {
  return (
    <section
      id="intro"
      className={styles.intro}
      aria-labelledby="intro-statement"
    >
      <p className={styles.label}>{"// Intro"}</p>

      <ScrollReveal
        id="intro-statement"
        className={styles.statement}
        segments={[
          { text: "I turn " },
          { text: "complex digital products", accent: true },
          {
            text: " into clear experiences by connecting users, product, technology and teams.",
          },
        ]}
      />

      <div className={styles.support}>
        <p className={styles.copy}>
          I work across the layers where decisions, systems and interfaces meet
          — bringing structure to complexity and helping teams move forward
          with clarity.
        </p>
        <a href="#work" className={styles.link}>
          <span className={styles.linkText}>View selected work</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
