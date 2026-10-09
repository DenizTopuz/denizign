import type { Metadata } from "next";
import { HeroStudyB } from "@/components/sections/HeroStudyB";
import styles from "./homepage.module.css";

export const metadata: Metadata = {
  title: "Denizign — Homepage preview (internal)",
  description: "Internal preview of the new Denizign homepage.",
  robots: { index: false, follow: false },
};

export default function HomepagePreview() {
  return (
    <main id="main-content">
      <p className={styles.caption}>Hero</p>
      <HeroStudyB />

      <div id="work" className={styles.marker}>
        <p className={styles.caption}>Next: Selected Work</p>
      </div>
    </main>
  );
}
