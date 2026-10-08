import type { Project } from "./types";
import { mobilityIntelligencePlatform } from "./mobility-intelligence-platform";
import { operationalDecisionConsole } from "./operational-decision-console";
import { multiProductDesignSystem } from "./multi-product-design-system";

export * from "./types";

/*
 * Selected work, in homepage order.
 *
 * TEMPORARY: all three entries are concept cases (status: "concept").
 * To replace one with real work, swap the entry for a VerifiedProject in
 * this list. Nothing else in the site should need to change.
 */
export const projects: Project[] = [
  mobilityIntelligencePlatform,
  operationalDecisionConsole,
  multiProductDesignSystem,
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const isConcept = (project: Project): boolean =>
  project.status === "concept";

/** Subtle label for cards and headers. Verified work shows none. */
export const statusLabel = (project: Project): string | null =>
  project.status === "concept" ? "Concept case" : null;

/** Heading for the closing section of a case study. */
export const outcomeHeading = (project: Project): string =>
  project.status === "concept" ? "Design direction" : "Outcome";
