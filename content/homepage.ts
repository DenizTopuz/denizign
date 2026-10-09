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
