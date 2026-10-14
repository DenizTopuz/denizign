import { aboutPage } from "../../../content/about-page";
import { method } from "../../../content/homepage";
import styles from "./AboutPagePractice.module.css";

/*
 * How Deniz works, as quiet ruled lists: the roles, the six layers and the
 * method (Understand, Connect, Simplify, Scale). Content from the brand
 * foundation only. Static.
 */
export function AboutPagePractice() {
  return (
    <section className={styles.practice} aria-label="How I work">
      <div className={styles.group}>
        <h2 className={styles.label}>{aboutPage.rolesLabel}</h2>
        <ul className={styles.list}>
          {aboutPage.roles.map((role) => (
            <li key={role} className={styles.item}>
              {role}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.group}>
        <h2 className={styles.label}>{aboutPage.layersLabel}</h2>
        <ol className={styles.list}>
          {aboutPage.layers.map((layer, index) => (
            <li key={layer} className={styles.item}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {layer}
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.group}>
        <h2 className={styles.label}>{"// Method"}</h2>
        <ol className={styles.steps}>
          {method.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
