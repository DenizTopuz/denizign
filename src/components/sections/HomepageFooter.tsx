import { footer } from "../../../content/homepage";
import styles from "./HomepageFooter.module.css";

/*
 * Footer: the quiet end of the page, continuing the dark Contact scene.
 * Owner, KvK number and location come from content/homepage.ts. The year is
 * left out on purpose: a build-time year goes stale, and a runtime year would
 * make this static page dynamic.
 */
export function HomepageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <p className={styles.item}>
          © {footer.owner}
          <span className={styles.sep} aria-hidden="true">
            ·
          </span>
          KvK {footer.kvk}
        </p>
        <p className={styles.item}>{footer.location}</p>
        <a href="#main-content" className={styles.top}>
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
