import type { Metadata } from "next";
import { cv } from "../../../content/cv";
import { AboutPageHero } from "@/components/sections/AboutPageHero";
import { AboutPageTimeline } from "@/components/sections/AboutPageTimeline";
import { AboutPagePractice } from "@/components/sections/AboutPagePractice";
import { HomepageContact } from "@/components/sections/HomepageContact";
import { HomepageFooter } from "@/components/sections/HomepageFooter";

export const metadata: Metadata = {
  title: "About — Denizign",
  description:
    "Deniz Topuz is a UX Lead based in the Netherlands, combining UX design with a technical front-end background.",
};

/* Structured data for search engines and AI assistants: verified facts only. */
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: cv.name,
  jobTitle: "UX Designer",
  worksFor: { "@type": "Organization", name: "NDW" },
  url: cv.links.website,
  email: cv.links.email,
  sameAs: [cv.links.linkedin],
  address: { "@type": "PostalAddress", addressCountry: "NL" },
  knowsLanguage: cv.languages.map((l) => l.language),
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Nielsen Norman Group UX Certificate",
    recognizedBy: { "@type": "Organization", name: "Nielsen Norman Group" },
  },
  alumniOf: cv.education
    .filter((e) => e.school !== "Het Amsterdams Lyceum")
    .map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
  knowsAbout: cv.skillGroups.flatMap((g) => [...g.items]),
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <main id="main-content">
        <AboutPageHero />
        <AboutPagePractice />
        <AboutPageTimeline />
        <HomepageContact />
      </main>

      <HomepageFooter />
    </>
  );
}
