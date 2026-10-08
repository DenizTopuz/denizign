import Image from "next/image";
import { SiteNavigation } from "./SiteNavigation";
import styles from "./HeroStudyE.module.css";

/*
 * Study E — black-and-white portrait with an animated name.
 * "Deniz Topuz" slides right to left through the middle of the hero, in plain
 * warm white, in front of the portrait. The animation is decorative
 * (aria-hidden) and is switched off for prefers-reduced-motion.
 */
function NameGroup() {
  return (
    <div className={styles.group}>
      <span className={styles.name}>Deniz Topuz</span>
      <span className={styles.name}>Deniz Topuz</span>
      <span className={styles.name}>Deniz Topuz</span>
    </div>
  );
}

export function HeroStudyE() {
  return (
    <section
      className={styles.canvas}
      data-study="e"
      aria-labelledby="study-e-title"
    >
      <h2 id="study-e-title" className="sr-only">
        Deniz Topuz
      </h2>

      <figure className={styles.plane}>
        <Image
          src="/images/deniz-topuz-hero.png"
          alt="Portrait of Deniz Topuz"
          fill
          loading="eager"
          sizes="(min-width: 1024px) 70vw, 100vw"
          className={styles.photo}
        />
      </figure>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          <NameGroup />
          <NameGroup />
        </div>
      </div>

      <div className={styles.layer}>
        <SiteNavigation tone="dark" wide brand />

        <div className={styles.foot}>
          <p className={styles.lead}>
            I connect users, product, technology and teams to turn complexity
            into intuitive digital experiences.
          </p>

          <p className={styles.roles}>
            <span className={styles.role}>UX Lead</span>
            <span className="sr-only"> · </span>
            <span className={styles.role}>Product Experience</span>
            <span className="sr-only"> · </span>
            <span className={styles.role}>Systems Thinking</span>
          </p>
        </div>
      </div>
    </section>
  );
}
