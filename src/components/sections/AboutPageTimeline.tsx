import Link from "next/link";
import { cv } from "../../../content/cv";
import styles from "./AboutPageTimeline.module.css";

/*
 * The CV as a timeline: newest at the top, the years in a left gutter and a
 * line with a red node per role. Below it education, certifications, skills
 * and languages as quiet ruled lists. Static server component; the line draws
 * itself with scroll (CSS only) where the browser supports it.
 */
export function AboutPageTimeline() {
  return (
    <section className={styles.cv} aria-labelledby="cv-title">
      <header className={styles.head}>
        <p className={styles.label}>{"// Experience"}</p>
        <h2 id="cv-title" className={styles.title}>
          Fifteen years of making complex products clear.
        </h2>
        <p className={styles.profile}>{cv.profile}</p>
      </header>

      <ol className={styles.timeline}>
        {cv.roles.map((role) => (
          <li key={role.employer} className={styles.entry}>
            <p className={styles.period}>{role.period}</p>
            <span className={styles.node} aria-hidden="true" />
            <div className={styles.body}>
              <h3 className={styles.employer}>{role.employer}</h3>
              <p className={styles.roleTitle}>{role.title}</p>
              <p className={styles.summary}>{role.summary}</p>

              {role.points.length > 0 ? (
                <ul className={styles.points}>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}

              {role.projects && role.projects.length > 0 ? (
                <ul className={styles.projects}>
                  {role.projects.map((project) => (
                    <li key={project.name} className={styles.project}>
                      {project.slug ? (
                        <Link
                          href={`/work/${project.slug}`}
                          className={styles.projectLink}
                        >
                          {project.name}
                          <span aria-hidden="true">→</span>
                        </Link>
                      ) : project.href ? (
                        <a
                          href={project.href}
                          className={styles.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.name}
                          <span aria-hidden="true">↗</span>
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        <span className={styles.projectName}>
                          {project.name}
                        </span>
                      )}
                      <span className={styles.projectDetail}>
                        {project.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.lists}>
        <section className={styles.group} aria-labelledby="cv-edu">
          <h3 id="cv-edu" className={styles.groupLabel}>
            Education
          </h3>
          <ul className={styles.ruled}>
            {cv.education.map((item) => (
              <li key={item.school}>
                <span className={styles.ruledMain}>{item.programme}</span>
                <span className={styles.ruledMeta}>
                  {item.school} · {item.period}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.group} aria-labelledby="cv-cert">
          <h3 id="cv-cert" className={styles.groupLabel}>
            Certifications
          </h3>

          <div className={styles.certificate}>
            <p className={styles.certTitle}>
              {cv.uxCertificate.issuer} {cv.uxCertificate.title}
            </p>
            <p className={styles.ruledMeta}>
              Earned {cv.uxCertificate.date} · ID {cv.uxCertificate.id}
            </p>
            <a
              href={cv.uxCertificate.file}
              className={styles.download}
              download
            >
              Download the certificate (PDF)
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <ul className={styles.ruled}>
            {cv.certifications.map((item) => (
              <li key={item.title}>
                <span className={styles.ruledMain}>{item.title}</span>
                <span className={styles.ruledMeta}>
                  {item.issuer}
                  {item.date ? ` · ${item.date}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.group} aria-labelledby="cv-skills">
          <h3 id="cv-skills" className={styles.groupLabel}>
            Skills
          </h3>
          <div className={styles.skills}>
            {cv.skillGroups.map((group) => (
              <div key={group.label}>
                <p className={styles.skillLabel}>{group.label}</p>
                <ul className={styles.skillList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.group} aria-labelledby="cv-lang">
          <h3 id="cv-lang" className={styles.groupLabel}>
            Languages
          </h3>
          <ul className={styles.ruled}>
            {cv.languages.map((item) => (
              <li key={item.language}>
                <span className={styles.ruledMain}>{item.language}</span>
                <span className={styles.ruledMeta}>{item.level}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.group} aria-labelledby="cv-inspiration">
          <h3 id="cv-inspiration" className={styles.groupLabel}>
            Where I find inspiration
          </h3>
          <ul className={styles.skillList}>
            {cv.inspiration.map((source) => (
              <li key={source.name}>
                <a
                  href={source.href}
                  className={styles.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>

          {cv.following.length > 0 ? (
            <>
              <p className={styles.skillLabel}>People I follow in UX</p>
              <ul className={styles.skillList}>
                {cv.following.map((person) => (
                  <li key={person.name}>
                    <span className={styles.source}>{person.name}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </section>
      </div>
    </section>
  );
}
