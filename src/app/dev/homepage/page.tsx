import type { Metadata } from "next";
import { HeroStudyB } from "@/components/sections/HeroStudyB";
import { HeroStudyD } from "@/components/sections/HeroStudyD";
import { HeroStudyE } from "@/components/sections/HeroStudyE";
import { HeroStudyF } from "@/components/sections/HeroStudyF";
import styles from "./homepage.module.css";

export const metadata: Metadata = {
  title: "Denizign — Hero studies (internal)",
  description: "Internal composition studies for the new Denizign homepage hero.",
  robots: { index: false, follow: false },
};

export default function HomepagePreview() {
  return (
    <main id="main-content">
      <p className={styles.caption}>
        Study B · Laura / Julian · near-black, one seamless full-width composition
      </p>
      <HeroStudyB />

      <p className={styles.caption}>
        Study F · same layout as B, with a black-and-white portrait
      </p>
      <HeroStudyF />

      <p className={styles.caption}>
        Study D · Laura Gonzalez · centred black-and-white portrait, to compare with B
      </p>
      <HeroStudyD />

      <p className={styles.caption}>
        Study E · Laura Gonzalez · black and white with the name sliding right to left
      </p>
      <HeroStudyE />

      <div id="work" className={styles.marker}>
        <p className={styles.caption}>Next: Selected Work</p>
      </div>
    </main>
  );
}
