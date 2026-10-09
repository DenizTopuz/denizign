import { services } from "../../../content/homepage";
import styles from "./HomepageServices.module.css";

/*
 * Services: WHAT Deniz does. Four ruled rows, no cards. The copy lives in
 * content/homepage.ts. The last row leads straight into Selected Work.
 */
export function HomepageServices() {
  return (
    <section
      id="services"
      className={styles.services}
      aria-labelledby="services-label"
    >
      <h2 id="services-label" className={styles.label}>
        {"// What I do"}
      </h2>

      <ol className={styles.list}>
        {services.map((service, i) => (
          <li key={service.title} className={styles.row}>
            <span className={styles.number} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
