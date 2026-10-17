/*
 * Homepage content.
 *
 * Services answer WHAT Deniz does. The method (HOW he works) is a separate
 * section and must not be described here.
 */

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "UX Strategy & Leadership",
    description:
      "Product vision, UX direction, stakeholder alignment and decision-making across complex digital products.",
  },
  {
    title: "Complex Product Design",
    description:
      "Information architecture, interaction design, complex workflows, data-heavy interfaces and prototyping.",
  },
  {
    title: "Design Systems & Scale",
    description:
      "Design tokens, components, accessibility, documentation and governance across products and teams.",
  },
  {
    title: "Research & Facilitation",
    description:
      "User research, usability testing, synthesis and workshops that turn insight into product decisions.",
  },
];

/*
 * Working between the layers: the canonical six layers from
 * brand/brand-foundation.md ("Deniz operates across several layers").
 * The legacy five-layer model (Users, Experience, Product, Technology,
 * Systems) must not be used.
 */
export const layers = [
  "User experience",
  "Product",
  "Technology",
  "Design systems",
  "Organisation",
  "Strategy",
] as const;

/*
 * Method: HOW Deniz works. The four steps and their one-line definitions are
 * taken word for word from brand/brand-foundation.md ("Method").
 * Services (what he does) must not repeat these.
 */
export const method: Service[] = [
  {
    title: "Understand",
    description: "Understand users, context, systems and the actual problem.",
  },
  {
    title: "Connect",
    description: "Connect users, stakeholders, product, design and technology.",
  },
  {
    title: "Simplify",
    description: "Turn complex information and flows into clear experiences.",
  },
  {
    title: "Scale",
    description:
      "Create solutions, systems and patterns that work beyond one screen or one team.",
  },
];

/*
 * About. Only facts from brand/brand-foundation.md ("Professional profile")
 * and the confirmed location. No years of experience, project counts, clients
 * or outcomes: those are not verified yet.
 */
export const about = {
  statement: "UX Lead with a technical front-end background.",
  paragraphs: [
    "I'm Deniz Topuz, a UX Lead based in the Netherlands. I combine UX design with a technical front-end background.",
    "My strength is not one individual skill. It is the ability to connect disciplines and move between strategic, technical and design perspectives.",
  ],
  rolesLabel: "I work as",
  roles: [
    "UX Lead",
    "Product Designer",
    "UX Architect",
    "Consultant",
    "Design System Lead",
    "Product / Epic Owner",
  ],
};

/*
 * Contact and footer. Confirmed by Deniz: email hello@denizign.nl, his own
 * LinkedIn profile, KvK number 80072518. No phone number, no availability
 * claim, no CV link (the PDF does not exist).
 */
export const contact = {
  label: "// Contact",
  /** The statement is split so one phrase can carry the accent. */
  statement: {
    lead: "Have a complex product problem? Let’s ",
    accent: "make it clear.",
  },
  email: "hello@denizign.nl",
  linkedin: {
    label: "LinkedIn",
    url: "https://linkedin.com/in/deniztopuz",
  },
};

export const footer = {
  owner: "Deniz Topuz",
  kvk: "80072518",
  location: "Netherlands",
};

/*
 * Design system section. Facts supplied by Deniz: the WCAG page was set up by
 * the Design System team so Cardan (which performs the official testing) can
 * check the components; Storybook documents all components; the team he leads
 * updates the system weekly and builds new components used in all
 * applications. No test results are claimed.
 */
export const designSystem = {
  label: "// Design system",
  statement: {
    lead: "A design system that keeps products ",
    accent: "consistent and reliable.",
  },
  paragraphs: [
    "I lead the team behind the NDW Design System. Every week we update it so all systems stay current, and we add new components that are used in all our applications.",
    "Together this keeps NDW's applications consistent and reliable.",
  ],
  links: [
    {
      label: "Components",
      title: "NDW Storybook",
      description:
        "All components of the NDW Design System, documented in one place.",
      href: "https://design.ndw.nu/ndw-storybook/?path=/docs/docs-playground--docs",
    },
    {
      label: "Accessibility",
      title: "NDW Playground",
      description:
        "The components in a realistic context, with a WCAG page the Design System team set up so Cardan, which performs the official testing, can check that the components meet the WCAG guidelines.",
      href: "https://design.ndw.nu/playground/",
    },
  ],
} as const;
