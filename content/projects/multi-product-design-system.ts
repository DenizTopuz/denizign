import type { ConceptProject } from "./types";

/* PLACEHOLDER / CONCEPT CONTENT. Not verified client work. */
export const multiProductDesignSystem: ConceptProject = {
  slug: "multi-product-design-system",
  title: "Multi-product Design System",
  status: "concept",
  year: null,
  role: "Design System Lead",
  domain: ["Design Systems", "Accessibility", "Scale"],
  summary:
    "A shared design system for multiple digital products and teams, designed to improve consistency while allowing flexibility across different product contexts.",
  challenge:
    "Different teams are building related products independently, causing inconsistent interaction patterns, duplicated work and accessibility risks.",
  complexity: [
    "multiple products",
    "multiple teams",
    "governance",
    "components",
    "tokens",
    "accessibility",
    "technical adoption",
  ],
  designFocus: [
    "design tokens",
    "component architecture",
    "documentation",
    "governance",
    "WCAG 2.2 AA",
    "design/development collaboration",
  ],
  outcomeFraming: "design-direction",
  image: {
    kind: "placeholder",
    variant: "system-diagram",
    ratio: "16:10",
    alt: "Abstract placeholder for a design-system diagram",
  },
};
