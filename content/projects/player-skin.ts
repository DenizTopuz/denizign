import type { VerifiedProject } from "./types";

/*
 * VERIFIED work from a previous employer. Facts come from the project's own
 * design files and from the case study previously published on denizign.nl.
 */
export const playerSkin: VerifiedProject = {
  slug: "player-skin",
  title: "Redesign the Player Skin",
  status: "verified",
  year: "2024",
  client: "Blue Billywig",
  role: "Product Designer",
  domain: ["Online video", "Video player", "Design system"],
  summary:
    "A redesign of the skin of a branded HTML5 video player, so that customers can make it their own and every control stays clear on every screen.",
  challenge:
    "The old player skin looked outdated, and its buttons were too small or poorly aligned to feel intuitive.",
  complexity: [
    "many player states",
    "desktop, mobile and fullscreen",
    "customer branding",
    "accessibility",
  ],
  designFocus: [
    "control sizing and spacing",
    "customisation",
    "contrast",
    "documentation",
  ],
  outcome:
    "Two configurable types of player skin, several play button styles, a contrast check for custom colours and documentation of the skin and its scenarios.",
  image: {
    kind: "image",
    src: "/projects/player-skin/new.jpg",
    width: 1200,
    height: 675,
    alt: "The redesigned player skin on a video of hot-air balloons, with a large play button, ten-second skip buttons, a progress bar with thumbnail preview and a row of controls.",
  },
};
