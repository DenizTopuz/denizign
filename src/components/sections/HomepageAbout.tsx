import Image from "next/image";
import { about } from "../../../content/homepage";
import styles from "./HomepageAbout.module.css";

/* "front-end" must never break at its hyphen. */
function keepTogether(text: string) {
  const parts = text.split("front-end");
  return parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [part, <span key={i} className={styles.nowrap}>front-end</span>]
      : [part],
  );
}

/*
 * About: who Deniz is, in verified facts only (content/homepage.ts). An
 * editorial portrait on the left (the same graphite cut-out as the hero, on
 * the near-black canvas colour); a large statement, two short paragraphs and
 * the roles he works in on the right. No cards, no links yet (the contact
 * section does not exist). Static, no client code.
 */
export function HomepageAbout() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-label">
      <h2 id="about-label" className={styles.label}>
        {"// About"}
      </h2>

      <figure className={styles.portrait}>
        <Image
          src="/images/deniz-topuz-hero.png"
          alt="Portrait of Deniz Topuz"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className={styles.photo}
        />
      </figure>

      <div className={styles.text}>
        <h3 className={styles.statement}>{keepTogether(about.statement)}</h3>

        <div className={styles.paragraphs}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.roles}>
          <p className={styles.rolesLabel}>{about.rolesLabel}</p>
          <ul className={styles.rolesList}>
            {about.roles.map((role) => (
              <li key={role} className={styles.role}>
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
