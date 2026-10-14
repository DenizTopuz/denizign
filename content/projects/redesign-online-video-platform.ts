import type { VerifiedProject } from "./types";

/*
 * VERIFIED work from a previous employer. Facts are taken from the project's
 * own research plan, feedback sheet and design files, and from the case study
 * previously published on denizign.nl.
 */
export const redesignOnlineVideoPlatform: VerifiedProject = {
  slug: "redesign-online-video-platform",
  title: "Redesign Online Video Platform",
  status: "verified",
  year: "2023",
  client: "Blue Billywig",
  role: "Product Designer",
  domain: ["Online video", "B2B platform", "Design system"],
  summary:
    "A redesign of the media library of an online video platform, built on a new design system, so that customers can find, prepare and publish video on their own.",
  challenge:
    "Users found the platform overwhelming. There were too many options, and it was easy to get lost in all the choices.",
  complexity: [
    "a large and varied feature set",
    "new and advanced users",
    "colleagues and customers as users",
    "many areas of the platform",
  ],
  designFocus: [
    "information hierarchy",
    "guidance and empty states",
    "findability and filters",
    "design system",
  ],
  outcome:
    "A more cohesive interface with unified user flows, a clear grid system, a simplified interface and a better organisation of content.",
  image: {
    kind: "image",
    src: "/projects/redesign-online-video-platform/end-results.png",
    width: 1990,
    height: 2000,
    alt: "The redesigned media library: the media overview, a media table and the detail page of a clip.",
  },
};
