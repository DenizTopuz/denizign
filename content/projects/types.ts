/*
 * Project content model.
 *
 * Projects are either "concept" (placeholder content used to validate the
 * portfolio structure) or "verified" (real, approved client work).
 * The two are separate types on purpose: a concept project can never be
 * mistaken for verified work, and a verified project must supply the facts
 * (year, outcome) that a concept project is not allowed to claim.
 */

export type ProjectStatus = "concept" | "verified";

/** Abstract interface placeholders used until real imagery exists. */
export type PlaceholderVariant =
  | "map-interface"
  | "operations-console"
  | "system-diagram";

export type ProjectImage =
  /* Neutral, abstract placeholder. Never a fake client screenshot. */
  | {
      kind: "placeholder";
      variant: PlaceholderVariant;
      ratio: "16:10";
      alt: string;
    }
  /* Real, approved project imagery. */
  | {
      kind: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
    };

interface ProjectBase {
  /** URL segment for the future case-study page. */
  slug: string;
  title: string;
  /** Job title held on the project, e.g. "UX Lead". */
  role: string;
  /** Domain tags, shown joined with " · ". */
  domain: string[];
  /** One or two sentences for the homepage. */
  summary: string;
  /** The core challenge, in one short paragraph. */
  challenge: string;
  /** What makes the problem complex. */
  complexity: string[];
  /** The design themes the project demonstrates. */
  designFocus: string[];
  image: ProjectImage;
}

/**
 * PLACEHOLDER / CONCEPT. Not client work.
 * Must not claim a year, client, metric, testimonial, award or measured result.
 */
export interface ConceptProject extends ProjectBase {
  status: "concept";
  /** Concept cases have no real year. */
  year: null;
  /** Concept outcomes are framed as design direction, never as results. */
  outcomeFraming: "design-direction";
}

/** Real, approved work. Replaces a ConceptProject entry. */
export interface VerifiedProject extends ProjectBase {
  status: "verified";
  year: string;
  /** Only with permission to name the client. */
  client?: string;
  /** Only verified outcomes. */
  outcome: string;
}

export type Project = ConceptProject | VerifiedProject;

/** Provisional narrative for case-study pages, in reading order. */
export const caseStudySections = [
  { id: "hero", label: "Project hero" },
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The challenge" },
  { id: "system", label: "Understanding the system" },
  { id: "decisions", label: "Key design decisions" },
  { id: "intervention", label: "The intervention" },
  { id: "outcome", label: "Outcome / reflection" },
] as const;

export type CaseStudySectionId = (typeof caseStudySections)[number]["id"];
