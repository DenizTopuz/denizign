import type { Metadata } from "next";
import { cv } from "../../content/cv";
import { site } from "../../content/site";
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
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: cv.name,
      jobTitle: "UX Designer",
      description:
        "UX Lead, UX Architect and epic owner of a design system, based in the Netherlands.",
      url: site.url,
      email: cv.links.email,
      sameAs: [cv.links.linkedin],
      address: { "@type": "PostalAddress", addressCountry: "NL" },
      worksFor: { "@type": "Organization", name: "NDW" },
      knowsAbout: cv.skillGroups.flatMap((g) => [...g.items]),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
