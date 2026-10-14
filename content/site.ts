/*
 * Site-wide facts used by metadata, the sitemap and structured data.
 * The canonical host is the apex domain; www redirects to it.
 */
export const site = {
  url: "https://denizign.nl",
  name: "Denizign",
  owner: "Deniz Topuz",
  title:
    "Deniz Topuz | UX Lead, UX Designer and UX Architect in the Netherlands",
  description:
    "Deniz Topuz (Denizign) is a UX Lead and UX designer in the Netherlands. He designs complex digital products and design systems: information hubs, dashboards, video platforms and more. Case studies and CV.",
  locale: "en_NL",
} as const;
