import Image from "next/image";
import type { Figure } from "../../../content/projects/case-studies";
import styles from "./CaseStudyFigures.module.css";

/*
 * Figures that explain the story. Each one has a caption that says what to
 * look at. Images are never framed in device mockups. Transparent exports
 * (which carry their own soft shadow) sit on a quiet surface.
 */
export function CaseStudyFigures({ figures }: { figures?: Figure[] }) {
  if (!figures || figures.length === 0) return null;

  return (
    <div className={styles.figures}>
      {figures.map((figure) => (
        <figure
          key={figure.src}
          className={`${styles.figure} ${figure.half ? styles.half : ""}`}
        >
          <div
            className={`${styles.frame} ${
              figure.surface === "soft" ? styles.soft : ""
            }`}
          >
            <Image
              src={figure.src}
              width={figure.width}
              height={figure.height}
              alt={figure.alt}
              sizes="(min-width: 1024px) 60rem, 100vw"
              className={styles.image}
            />
          </div>
          <figcaption className={styles.caption}>{figure.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
