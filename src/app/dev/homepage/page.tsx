import type { Metadata } from "next";
import { HeroStudyB } from "@/components/sections/HeroStudyB";
import { HomepageIntro } from "@/components/sections/HomepageIntro";
import { HomepageLayers } from "@/components/sections/HomepageLayers";
import { HomepageMethod } from "@/components/sections/HomepageMethod";
import { HomepageServices } from "@/components/sections/HomepageServices";
import { HomepageWork } from "@/components/sections/HomepageWork";
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

      <HomepageIntro />

      <HomepageServices />

      <HomepageWork />

      <HomepageLayers />

      <HomepageMethod />

      <div className={styles.marker}>
        <p className={styles.caption}>Next: About</p>
      </div>
    </main>
  );
}
