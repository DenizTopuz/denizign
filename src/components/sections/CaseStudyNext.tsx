import Link from "next/link";
import { projects } from "../../../content/projects";
import styles from "./CaseStudyNext.module.css";

/* Link to the next project in homepage order, wrapping around. */
export function CaseStudyNext({ slug }: { slug: string }) {
  const index = projects.findIndex((project) => project.slug === slug);
  const next = projects[(index + 1) % projects.length];
  if (!next || next.slug === slug) return null;

  return (
    <nav className={styles.next} aria-label="Next project">
      <p className={styles.label}>{"// Next project"}</p>
      <Link href={`/work/${next.slug}`} className={styles.link}>
        <span className={styles.title}>{next.title}</span>
        <span aria-hidden="true" className={styles.arrow}>
          →
        </span>
      </Link>
      <p className={styles.label}>{"// Who made this"}</p>
      <Link href="/about" className={styles.linkSmall}>
        <span className={styles.title}>About Deniz</span>
        <span aria-hidden="true" className={styles.arrow}>
          →
        </span>
      </Link>
    </nav>
  );
}
