import type { CaseStudy } from "../../../content/projects/case-studies";
import type { Figure } from "../../../content/projects/case-studies";
import { CaseStudyBleed } from "./CaseStudyBleed";
import { CaseStudyFigures } from "./CaseStudyFigures";
import styles from "./CaseStudyNarrative.module.css";

/*
 * The reasoning part of a case study: problem, thinking, key decisions and
 * intervention. Each part is a ruled section with a small label on the left
 * and the content on the right (stacked on mobile). Static, no client code.
 */

type Segment = { bleed: Figure } | { group: Figure[] };

/* Consecutive normal figures stay together in the content column; a bleed
   figure breaks out to the full width of the page, in its place. */
function segment(figures: Figure[]): Segment[] {
  const out: Segment[] = [];
  for (const figure of figures) {
    if (figure.bleed) {
      out.push({ bleed: figure });
      continue;
    }
    const last = out[out.length - 1];
    if (last && "group" in last) last.group.push(figure);
    else out.push({ group: [figure] });
  }
  return out;
}

function Part({
  id,
  label,
  heading,
  figures,
  children,
}: {
  id: string;
  label: string;
  heading: string;
  figures?: Figure[];
  children: React.ReactNode;
}) {
  return (
    <section className={styles.part} aria-labelledby={`${id}-heading`}>
      <p className={styles.label}>{label}</p>
      <div className={styles.content}>
        <h2 id={`${id}-heading`} className={styles.heading}>
          {heading}
        </h2>
        {children}
      </div>
      {figures
        ? segment(figures).map((part, index) =>
            "bleed" in part ? (
              <div key={part.bleed.src} className={styles.bleedRow}>
                <CaseStudyBleed figure={part.bleed} />
              </div>
            ) : (
              <div key={index} className={styles.figureRow}>
                <CaseStudyFigures figures={part.group} />
              </div>
            ),
          )
        : null}
    </section>
  );
}

export function CaseStudyNarrative({ study }: { study: CaseStudy }) {
  return (
    <div className={styles.narrative}>
      {study.role ? (
        <Part
          id="role"
          label={"// My role"}
          heading="What I did, and with whom."
        >
          <dl className={styles.roleGrid}>
            <div>
              <dt>Responsibilities</dt>
              <dd>
                <ul className={styles.plain}>
                  {study.role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{study.role.team}</dd>
            </div>
            <div>
              <dt>Methods</dt>
              <dd>
                <ul className={styles.plain}>
                  {study.role.methods.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Part>
      ) : null}

      <Part
        id="problem"
        label={"// The problem"}
        heading={study.problem.heading}
        figures={study.problem.figures}
      >
        <div className={styles.prose}>
          <p className={styles.scope}>{study.scope}</p>
          {study.problem.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Part>

      <Part
        id="thinking"
        label={"// The thinking"}
        heading={study.thinking.heading}
        figures={study.thinking.figures}
      >
        <div className={styles.prose}>
          {study.thinking.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {study.thinking.layersLabel ? (
          <p className={styles.sublabel}>{study.thinking.layersLabel}</p>
        ) : null}
        <ul className={styles.layers}>
          {study.thinking.layers.map((layer, index) => (
            <li key={layer.title} className={styles.layer} data-rise>
              <span className={styles.layerIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.layerTitle}>{layer.title}</span>
              <span className={styles.layerText}>{layer.text}</span>
            </li>
          ))}
        </ul>
      </Part>

      <Part
        id="decisions"
        label={"// Key decisions"}
        heading={
          study.decisionsHeading ?? "Four decisions, and what each one costs."
        }
      >
        <ol className={styles.decisions}>
          {study.decisions.map((item, index) => (
            <li key={item.title} className={styles.decision} data-rise>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.decisionTitle}>{item.title}</h3>
              <p className={styles.decisionText}>{item.decision}</p>
              <dl className={styles.reasons}>
                <div>
                  <dt>Why</dt>
                  <dd>{item.reasoning}</dd>
                </div>
                {item.tradeOff ? (
                  <div>
                    <dt>Trade-off</dt>
                    <dd>{item.tradeOff}</dd>
                  </div>
                ) : null}
              </dl>
            </li>
          ))}
        </ol>
      </Part>

      <Part
        id="intervention"
        label={"// The intervention"}
        heading={study.intervention.heading}
        figures={study.intervention.figures}
      >
        <div className={styles.prose}>
          {study.intervention.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Part>
    </div>
  );
}
