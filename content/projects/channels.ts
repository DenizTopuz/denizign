import type { VerifiedProject } from "./types";

/*
 * VERIFIED work from a previous employer. Facts come from the project's own
 * design files and from the case study previously published on denizign.nl.
 */
export const channels: VerifiedProject = {
  slug: "channels",
  title: "Channels",
  status: "verified",
  year: "2024",
  client: "Blue Billywig",
  role: "Product Designer",
  domain: ["Online video", "Website builder", "Design system"],
  summary:
    "A self-service builder for streaming-style video pages that customers assemble, brand and embed in their own websites and apps.",
  challenge:
    "Channels did not meet customer expectations, and its editor was outdated: non-technical customers could not manage their own channels.",
  complexity: [
    "many layout options",
    "a front end and a back end",
    "desktop, tablet and mobile",
    "non-technical users",
  ],
  designFocus: [
    "editor structure",
    "component options",
    "responsive layouts",
    "self-service",
  ],
  outcome:
    "A redesigned editor with new and redesigned components, defined user flows and front-end and back-end layouts, so customers can build and brand their own channels.",
  image: {
    kind: "image",
    src: "/projects/channels/showcase-responsive.avif",
    width: 2000,
    height: 1796,
    alt: "A channel page in a barbecue theme shown on desktop, tablet and phone, with a featured header, rows of vertical videos and a banner.",
  },
};
