import Image from "next/image";
import { aboutPage } from "../../../content/about-page";
import { contact } from "../../../content/homepage";
import { SiteNavigation } from "./SiteNavigation";
import styles from "./AboutPageHero.module.css";

/*
 * About page opening: navigation, a small portrait chip, one large statement,
 * two short columns and the call to talk. Static, no client code.
 */
export function AboutPageHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-title">
      <SiteNavigation tone="light" wide brand anchorBase="/" />

      <div className={styles.inner}>
        <p className={styles.label}>{aboutPage.label}</p>

        <figure className={styles.portrait}>
          <Image
            src="/images/deniz-topuz-hero.png"
            alt="Portrait of Deniz Topuz"
            width={400}
            height={400}
            priority
            className={styles.photo}
          />
        </figure>

        <h1 id="about-title" className={styles.statement}>
          {aboutPage.statement}
        </h1>

        <div className={styles.columns}>
          {aboutPage.columns.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {aboutPage.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <a href={`mailto:${contact.email}`} className={styles.cta} data-fill>
          {aboutPage.cta.label}
        </a>
      </div>
    </section>
  );
}
