import { getProject, statusLabel, type Project } from "../../../content/projects";
import { ConsoleVisual } from "../projects/ConsoleVisual";
import { MobilityVisual } from "../projects/MobilityVisual";
import { SystemVisual } from "../projects/SystemVisual";
import styles from "./HomepageWork.module.css";

/*
 * Selected Work: three large editorial moments, not a card grid.
 * All three projects share one composition, so the hierarchy reads at a
 * glance: red number, title, description, then role, domain and status,
 * with a large interface visual beside it.
 *
 * All copy and status come from content/projects (concept cases for now).
 * The visuals are conceptual SVG interfaces. There are no links yet: no
 * case-study pages exist.
 */

type Entry = {
  slug: string;
  number: string;
  visual: React.ReactNode;
  tone: "dark" | "light";
  /** Native width / height of the visual, used to keep its proportions. */
  ratio: number;
};

const entries: Entry[] = [
  {
    slug: "mobility-intelligence-platform",
    number: "01",
    visual: <MobilityVisual />,
    tone: "dark",
    ratio: 1.6,
  },
  {
    slug: "operational-decision-console",
    number: "02",
    visual: <ConsoleVisual />,
    tone: "light",
    ratio: 1.333,
  },
  {
    slug: "multi-product-design-system",
    number: "03",
    visual: <SystemVisual />,
    tone: "light",
    ratio: 1.6,
  },
];

function requireProject(slug: string): Project {
  const project = getProject(slug);
  if (!project) throw new Error(`Missing project content: ${slug}`);
  return project;
}

export function HomepageWork() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-label">
      <div className={styles.inner}>
        <header className={styles.head}>
          <h2 id="work-label" className={styles.label}>
            {"// Selected Work"}
          </h2>
          <p className={styles.lede}>
            Selected work across complex products, systems and interfaces.
          </p>
        </header>

        {entries.map(({ slug, number, visual, tone, ratio }) => {
          const project = requireProject(slug);
          const titleId = `work-title-${number}`;
          return (
            <article
              key={slug}
              className={styles.project}
              aria-labelledby={titleId}
            >
              <div className={styles.text}>
                <p className={styles.index}>{number}</p>
                <h3 id={titleId} className={styles.title}>
                  {project.title}
                </h3>
                <p className={styles.summary}>{project.summary}</p>
                <p className={styles.soon}>Case study coming next</p>

                <dl className={styles.meta}>
                  <div className={styles.metaRow}>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div className={styles.metaRow}>
                    <dt>Domain</dt>
                    <dd>{project.domain.join(" · ")}</dd>
                  </div>
                  <div className={styles.metaRow}>
                    <dt>Status</dt>
                    <dd>{statusLabel(project) ?? "Case study"}</dd>
                  </div>
                </dl>
              </div>

              <figure
                className={`${styles.visual} ${
                  tone === "dark" ? styles.visualDark : styles.visualLight
                }`}
                style={{ "--visual-ratio": ratio } as React.CSSProperties}
              >
                {visual}
              </figure>
            </article>
          );
        })}
      </div>
    </section>
  );
}
