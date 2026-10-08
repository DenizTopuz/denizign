import type { ConceptProject } from "./types";

/* PLACEHOLDER / CONCEPT CONTENT. Not verified client work. */
export const mobilityIntelligencePlatform: ConceptProject = {
  slug: "mobility-intelligence-platform",
  title: "Mobility Intelligence Platform",
  status: "concept",
  year: null,
  role: "UX Lead",
  domain: ["Mobility", "Data", "Maps"],
  summary:
    "A map-first platform that helps transport professionals explore complex mobility data, compare patterns and turn large datasets into actionable insight.",
  challenge:
    "Users work with large amounts of spatial and time-based data, but existing workflows make it difficult to understand context, compare locations and move from exploration to decision-making.",
  complexity: [
    "maps",
    "datasets",
    "filtering",
    "comparison",
    "export",
    "multiple user types",
    "information density",
  ],
  designFocus: [
    "map-first interaction",
    "progressive disclosure",
    "data hierarchy",
    "complex filters",
    "clear comparison",
    "decision support",
  ],
  outcomeFraming: "design-direction",
  image: {
    kind: "placeholder",
    variant: "map-interface",
    ratio: "16:10",
    alt: "Abstract placeholder for a map-based data interface",
  },
};
