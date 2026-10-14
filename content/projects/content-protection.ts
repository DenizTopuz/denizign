import type { VerifiedProject } from "./types";

/*
 * VERIFIED work from a previous employer. Facts come from the project's own
 * design files and from the case study previously published on denizign.nl.
 */
export const contentProtection: VerifiedProject = {
  slug: "content-protection",
  title: "Content Protection",
  status: "verified",
  year: "2024",
  client: "Blue Billywig",
  role: "Product Designer",
  domain: ["Online video", "Access control", "New feature"],
  summary:
    "A new feature of an online video platform that lets customers decide who may watch their videos and live streams, by region, website or subscription.",
  challenge:
    "Customers needed to keep clips, live streams and channels private to the right viewers, and to manage that access for all content or for selected parts.",
  complexity: [
    "several policy types",
    "rules that combine",
    "all content or selected parts",
    "technical terminology",
  ],
  designFocus: [
    "rule building",
    "terminology",
    "empty states",
    "feedback iterations",
  ],
  outcome:
    "A redesigned way to create policies with customisable rules, in the new look and layout of the platform.",
  image: {
    kind: "image",
    src: "/projects/content-protection/overview.jpg",
    width: 1717,
    height: 1303,
    alt: "The Content protection page in publication settings, with a policy title and description and a menu to choose a policy type: country, domain, IP, API or subscription.",
  },
};
