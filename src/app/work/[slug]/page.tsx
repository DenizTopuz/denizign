import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../../../content/projects";
import { getCaseStudy } from "../../../../content/projects/case-studies";
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

  return {
    title: `${project.title} — Denizign`,
    description: project.summary,
    /* Not indexed until the new site replaces the current homepage. */
    robots: { index: false, follow: false },
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

  return (
    <>
      <main id="main-content">
        <CaseStudyHero project={project} />
        <CaseStudyNarrative study={study} />
        <CaseStudyDirection project={project} study={study} />
        <CaseStudyNext slug={slug} />
        <HomepageContact />
      </main>

      <HomepageFooter />
    </>
  );
}
