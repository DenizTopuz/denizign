import type { ConceptProject } from "./types";

/* PLACEHOLDER / CONCEPT CONTENT. Not verified client work.
   AI-generated signals are decision support: a person decides and acts. */
export const operationalDecisionConsole: ConceptProject = {
  slug: "operational-decision-console",
  title: "Operational Decision Console",
  status: "concept",
  year: null,
  role: "Product UX Lead",
  domain: ["Operations", "Incidents", "Decision support"],
  summary:
    "An operational workspace that helps teams understand incidents, assess urgency and coordinate the next action without losing context.",
  challenge:
    "Operators receive many signals at once. The product must communicate status, priority, uncertainty and history without overwhelming the user.",
  complexity: [
    "realtime status",
    "alerts",
    "incident progress",
    "prioritisation",
    "AI-generated signals",
    "audit history",
    "multiple actions",
  ],
  designFocus: [
    "information hierarchy",
    "status systems",
    "timelines",
    "action priority",
    "progressive disclosure",
    "human oversight of automated insight",
  ],
  outcomeFraming: "design-direction",
  image: {
    kind: "placeholder",
    variant: "operations-console",
    ratio: "16:10",
    alt: "Abstract placeholder for a dense operational interface",
  },
};
