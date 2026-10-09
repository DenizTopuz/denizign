import { method } from "../../../content/homepage";
import styles from "./HomepageMethod.module.css";

/*
 * Method: HOW Deniz works. One dark section after the light ones: four large
 * steps, Understand → Connect → Simplify → Scale. Copy comes from
 * content/homepage.ts (the brand foundation's definitions). Static, no client
 * code; each step is its own list item for later emphasis.
 */
export function HomepageMethod() {
  return (
    <section
      id="method"
      className={styles.method}
      aria-labelledby="method-label"
    >
      <h2 id="method-label" className={styles.label}>
        {"// How I work"}
      </h2>

      <ol className={styles.steps}>
        {method.map((step, i) => (
          <li key={step.title} data-step={i + 1} className={styles.step}>
            <span className={styles.number} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
