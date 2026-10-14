/*
 * About page. Verified statements only, taken from brand/brand-foundation.md
 * and content/homepage.ts. Nothing about years of experience, employers,
 * education or tools is stated here, because none of it is confirmed yet:
 * add it as `story` below once Deniz has supplied it.
 */

export const aboutPage = {
  label: "// About",
  /** The large opening statement (the brand's supporting proposition). */
  statement:
    "I connect users, product, technology and teams to turn complexity into clear digital experiences.",
  columns: [
    "I'm Deniz Topuz, a UX Lead based in the Netherlands. I combine UX design with a technical front-end background.",
    "My strength is not one individual skill. It is the ability to connect disciplines and move between strategic, technical and design perspectives.",
  ],
  /** Optional: career story, supplied by Deniz. Empty means the part is not shown. */
  story: [] as string[],
  rolesLabel: "I work as",
  roles: [
    "UX Designer",
    "UX Lead",
    "UX Architect",
    "Epic owner design system",
    "Product Designer",
    "Consultant",
  ],
  layersLabel: "Across six layers",
  layers: [
    "User experience",
    "Product",
    "Technology",
    "Design systems",
    "Organisation",
    "Strategy",
  ],
  cta: { label: "Let's talk", note: "Have a complex product problem?" },
};
