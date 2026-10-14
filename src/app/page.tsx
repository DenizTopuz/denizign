import type { Metadata } from "next";
import { HeroStudyB } from "@/components/sections/HeroStudyB";
import { HomepageAbout } from "@/components/sections/HomepageAbout";
import { HomepageContact } from "@/components/sections/HomepageContact";
import { HomepageFooter } from "@/components/sections/HomepageFooter";
import { HomepageIntro } from "@/components/sections/HomepageIntro";
import { HomepageLayers } from "@/components/sections/HomepageLayers";
import { HomepageMethod } from "@/components/sections/HomepageMethod";
import { HomepageTestimonials } from "@/components/sections/HomepageTestimonials";
import { HomepageServices } from "@/components/sections/HomepageServices";
import { HomepageWork } from "@/components/sections/HomepageWork";

export const metadata: Metadata = {
  title: "Denizign — Deniz Topuz | UX Lead · Product Experience · Systems Thinking",
  description:
    "I connect users, product, technology and teams to turn complexity into intuitive digital experiences.",
};

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <HeroStudyB />

        <HomepageIntro />

        <HomepageServices />

        <HomepageWork />

        <HomepageLayers />

        <HomepageMethod />

        <HomepageAbout />

        <HomepageTestimonials />

        <HomepageContact />
      </main>

      <HomepageFooter />
    </>
  );
}
