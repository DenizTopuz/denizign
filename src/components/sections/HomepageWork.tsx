import {
  getProject,
  statusLabel,
  type Project,
} from "../../../content/projects";
import Link from "next/link";
import { ProjectCursor } from "../ProjectCursor";
import { SwipeHint } from "../SwipeHint";
import { projectVisuals } from "../projects/projectVisuals";
import styles from "./HomepageWork.module.css";

/*
 * Selected Work: three large editorial moments, not a card grid.
 * All three projects share one composition, so the hierarchy reads at a
 * glance: red number, title, description, then role, domain and status,
 * with a large interface visual beside it.
 *
 * All copy and status come from content/projects (concept cases for now).
 * The visuals are conceptual SVG interfaces, each linking to its case study.
 * Each project is one framed block with an action row at the bottom. The
 * whole block is one link: the action link is stretched over the article (a
 * single, accessible link), so it also works without hover on touch.
 */

const slugs = [
  "redesign-online-video-platform",
  "shorts",
  "player-skin",
  "content-protection",
  "channels",
];

const entries = slugs.map((slug, index) => ({
  slug,
  number: String(index + 1).padStart(2, "0"),
}));

function requireProject(slug: string): Project {
  const project = getProject(slug);
  if (!project) throw new Error(`Missing project content: ${slug}`);
  return project;
}

export function HomepageWork() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-label">
      <ProjectCursor />
      <div className={styles.inner}>
        <header className={styles.head}>
          <h2 id="work-label" className={styles.label}>
            {"// Selected Work"}
          </h2>
          <p className={styles.lede}>
            Selected work across complex products, systems and interfaces.
          </p>
        </header>

        {entries.map(({ slug, number }) => {
          const project = requireProject(slug);
          const { visual, tone, ratio } = projectVisuals[slug];
          const titleId = `work-title-${number}`;
          return (
            <div key={slug} className={styles.item}>
              <article
                className={styles.project}
                aria-labelledby={titleId}
                data-cursor="View"
              >
                <div className={styles.text}>
                  <p className={styles.index}>{number}</p>
                  <h3 id={titleId} className={styles.title}>
                    {project.title}
                  </h3>
                  <p className={styles.summary}>{project.summary}</p>

                  <dl className={styles.meta}>
                    <div className={styles.metaRow}>
                      <dt>Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div className={styles.metaRow}>
                      <dt>Domain</dt>
                      <dd>{project.domain.join(" · ")}</dd>
                    </div>
                    {project.status === "verified" ? (
                      <div className={styles.metaRow}>
                        <dt>Year</dt>
                        <dd>{project.year}</dd>
                      </div>
                    ) : (
                      <div className={styles.metaRow}>
                        <dt>Status</dt>
                        <dd>{statusLabel(project) ?? "Case study"}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <figure
                  className={`${styles.visual} ${
                    tone === "dark" ? styles.visualDark : styles.visualLight
                  }`}
                  style={{ "--visual-ratio": ratio } as React.CSSProperties}
                >
                  <SwipeHint />
                  {visual}
                </figure>

                <div className={styles.footer}>
                  <Link href={`/work/${slug}`} className={styles.more}>
                    Read the case study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
