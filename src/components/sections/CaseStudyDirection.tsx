import { outcomeHeading, type Project } from "../../../content/projects";
import type { CaseStudy } from "../../../content/projects/case-studies";
import styles from "./CaseStudyDirection.module.css";

/*
 * Closing of a case study, on near-black. For concept cases the heading is
 * "Design direction" and nothing is presented as a measured result.
 */
export function CaseStudyDirection({
  project,
  study,
}: {
  project: Project;
  study: CaseStudy;
}) {
  return (
    <section className={styles.direction} aria-labelledby="direction-heading">
      <p className={styles.label}>
        {"// "}
        {outcomeHeading(project)}
      </p>

      <div className={styles.content}>
        <h2 id="direction-heading" className={styles.heading}>
          {study.direction.reflection}
        </h2>

        <div className={styles.prose}>
          {study.direction.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {study.direction.quote ? (
          <figure className={styles.quote}>
            <blockquote>
              <p>
                {"“…"}
                {study.direction.quote.text}
                {"”"}
              </p>
            </blockquote>
            <figcaption>
              {study.direction.quote.name}, {study.direction.quote.role}
              <span className={styles.source}>
                {study.direction.quote.source}
              </span>
            </figcaption>
          </figure>
        ) : null}

        {study.direction.learned ? (
          <div className={styles.validate}>
            <h3 className={styles.subheading}>What I learned</h3>
            <ul className={styles.list}>
              {study.direction.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {study.direction.toValidate ? (
          <div className={styles.validate}>
            <h3 className={styles.subheading}>What I would validate next</h3>
            <ul className={styles.list}>
              {study.direction.toValidate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
