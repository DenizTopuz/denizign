import { designSystem } from "../../../content/homepage";
import styles from "./HomepageDesignSystem.module.css";

/*
 * Design system: the work behind NDW's components, with two links out to the
 * public documentation. Static, no client code. External links open in a new
 * tab and say so for assistive technology.
 */
export function HomepageDesignSystem() {
  return (
    <section
      id="design-system"
      className={styles.section}
      aria-labelledby="design-system-label"
    >
      <h2 id="design-system-label" className={styles.label} data-rise>
        {designSystem.label}
      </h2>

      <h3 className={styles.statement} data-rise>
        {designSystem.statement.lead}
        <span className={styles.accent}>{designSystem.statement.accent}</span>
      </h3>

      <div className={styles.copy}>
        {designSystem.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <ul className={styles.rows}>
        {designSystem.links.map((item) => (
          <li key={item.href} className={styles.row}>
            <span className={styles.rowLabel}>{item.label}</span>
            <div className={styles.body}>
              <a
                href={item.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkText}>{item.title}</span>
                <span className="sr-only"> (opens in a new tab)</span>
                <span aria-hidden="true" className={styles.arrow}>
                  ↗
                </span>
              </a>
              <p className={styles.description}>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
