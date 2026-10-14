import type { Project } from "./types";
import { shorts } from "./shorts";
import { playerSkin } from "./player-skin";
import { contentProtection } from "./content-protection";
import { channels } from "./channels";
import { redesignOnlineVideoPlatform } from "./redesign-online-video-platform";

export * from "./types";

/*
 * Selected work, in homepage order.
 *
 * Verified work comes first. The remaining entries are concept cases
 * (status: "concept"). To replace a concept with real work, swap the entry
 * for a VerifiedProject in this list and add its case study.
 */
export const projects: Project[] = [
  redesignOnlineVideoPlatform,
  shorts,
  playerSkin,
  contentProtection,
  channels,
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
