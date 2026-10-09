import { contact } from "../../../content/homepage";
import styles from "./HomepageContact.module.css";

/*
 * Contact: a dark closing scene. One large invitation with a single accent
 * phrase, and two ruled rows: email and LinkedIn. Content (including the
 * confirmed email address) comes from content/homepage.ts. Static, no client
 * code. The email link is the primary action.
 */
export function HomepageContact() {
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-label"
    >
      <h2 id="contact-label" className={styles.label}>
        {contact.label}
      </h2>

      <h3 className={styles.statement}>
        {contact.statement.lead}
        <span className={styles.accent}>{contact.statement.accent}</span>
      </h3>

      <ul className={styles.rows}>
        <li className={styles.row}>
          <span className={styles.rowLabel}>Email</span>
          <a href={`mailto:${contact.email}`} className={styles.link}>
            <span className={styles.linkText}>{contact.email}</span>
            <span aria-hidden="true" className={styles.arrow}>
              →
            </span>
          </a>
        </li>
        <li className={styles.row}>
          <span className={styles.rowLabel}>Profile</span>
          <a
            href={contact.linkedin.url}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.linkText}>{contact.linkedin.label}</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span aria-hidden="true" className={styles.arrow}>
              ↗
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
