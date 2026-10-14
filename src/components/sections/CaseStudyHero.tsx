import Image from "next/image";
import Link from "next/link";
import { statusLabel, type Project } from "../../../content/projects";
import { projectVisuals } from "../projects/projectVisuals";
import { SiteNavigation } from "./SiteNavigation";
import styles from "./CaseStudyHero.module.css";

/*
 * Case-study opening: navigation, title, summary, role/domain/status rows and
 * the project's interface visual. The visual is the hero: the work itself,
 * shown large, with an honest caption for concept cases.
 */
export function CaseStudyHero({ project }: { project: Project }) {
  const concept = project.status === "concept";
  const conceptVisual = concept ? projectVisuals[project.slug] : undefined;
  const tone = conceptVisual?.tone ?? "light";
  const ratio = conceptVisual?.ratio;
  const rows: [string, string][] = [
    ["Role", project.role],
    ["Domain", project.domain.join(" · ")],
    ...(project.status === "verified"
      ? ([
          ["Year", project.year],
          ...(project.client ? [["Company", project.client]] : []),
        ] as [string, string][])
      : ([["Status", statusLabel(project) ?? "Case study"]] as [
          string,
          string,
        ][])),
  ];

  return (
    <section
      id="top"
      tabIndex={-1}
      className={styles.hero}
      aria-labelledby="case-title"
    >
      <SiteNavigation tone="light" wide brand anchorBase="/" />

      <div className={styles.head}>
        <Link href="/#work" className={styles.back}>
          <span aria-hidden="true">←</span>
          All work
        </Link>
        <p className={styles.label}>
          {"// Selected Work"}
          {concept ? " · Concept case" : null}
        </p>
        <h1 id="case-title" className={styles.title}>
          {project.title}
        </h1>
        <p className={styles.summary}>{project.summary}</p>

        <dl className={styles.meta}>
          {rows.map(([label, value]) => (
            <div key={label} className={styles.metaRow}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure
        className={`${styles.visual} ${
          tone === "dark" ? styles.visualDark : styles.visualLight
        }`}
        style={
          ratio
            ? ({ "--visual-ratio": ratio } as React.CSSProperties)
            : undefined
        }
      >
        {conceptVisual ? (
          conceptVisual.visual
        ) : project.image.kind === "image" ? (
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            sizes="(min-width: 1024px) 90rem, 100vw"
            priority
            className={styles.photo}
          />
        ) : null}
        {concept ? (
          <figcaption className={styles.caption}>
            Conceptual interface. A design exercise, not a screenshot of client
            work.
          </figcaption>
        ) : null}
      </figure>
    </section>
  );
}
