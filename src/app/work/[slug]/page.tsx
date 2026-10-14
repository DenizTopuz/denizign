import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "../../../../content/site";
import { getProject, projects } from "../../../../content/projects";
import { getCaseStudy } from "../../../../content/projects/case-studies";
import { BackToTop } from "@/components/BackToTop";
import { CaseStudyDirection } from "@/components/sections/CaseStudyDirection";
import { CaseStudyHero } from "@/components/sections/CaseStudyHero";
import { CaseStudyNarrative } from "@/components/sections/CaseStudyNarrative";
import { CaseStudyNext } from "@/components/sections/CaseStudyNext";
import { HomepageContact } from "@/components/sections/HomepageContact";
import { HomepageFooter } from "@/components/sections/HomepageFooter";

type Params = { slug: string };

/*
 * Every slug is known at build time (generateStaticParams), so the route is
 * rendered as a whole rather than streamed behind a shell.
 */
export const instant = false;

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const url = `${site.url}/work/${project.slug}`;
  return {
    title: `${project.title}: case study`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${project.title}: case study by Deniz Topuz`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const study = getCaseStudy(slug);
  if (!project || !study) notFound();

  const url = `${site.url}/work/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: project.title,
        headline: project.title,
        description: project.summary,
        url,
        inLanguage: "en",
        author: { "@type": "Person", name: site.owner, url: site.url },
        ...(project.status === "verified"
          ? { dateCreated: project.year, about: [...project.domain] }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${site.url}/#work`,
          },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <CaseStudyHero project={project} />
        <CaseStudyNarrative study={study} />
        <CaseStudyDirection project={project} study={study} />
        <CaseStudyNext slug={slug} />
        <HomepageContact />
      </main>

      <HomepageFooter />
      <BackToTop />
    </>
  );
}
