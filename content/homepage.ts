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
