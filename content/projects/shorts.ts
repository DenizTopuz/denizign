import type { VerifiedProject } from "./types";

/*
 * VERIFIED work from a previous employer. Facts come from the project's own
 * design files and from the case study previously published on denizign.nl.
 */
export const shorts: VerifiedProject = {
  slug: "shorts",
  title: "Shorts",
  status: "verified",
  year: "2024",
  client: "Blue Billywig",
  role: "Product Designer",
  domain: ["Online video", "Short-form video", "Player experience"],
  summary:
    "A feature of an online video platform that turns existing video into short, swipeable experiences: created and configured in the platform, and embedded on any page.",
  challenge:
    "Short-form video had to be created from a customer's existing content, configured to match their brand and played well on desktop and mobile.",
  complexity: [
    "creation inside the platform",
    "more than twenty settings",
    "three display formats",
    "desktop and mobile",
  ],
  designFocus: [
    "settings structure",
    "consistency with the platform",
    "player states",
    "responsive behaviour",
  ],
  outcome:
    "Player states for desktop and mobile, support for several video formats, a complete creation experience in the platform, a fully responsive design and Shorts that can be embedded on external pages.",
  image: {
    kind: "image",
    src: "/projects/shorts/end-results.png",
    width: 1990,
    height: 2000,
    alt: "The Shorts screens: an overview of a short with its settings, and the experience and player configuration pages.",
  },
};
