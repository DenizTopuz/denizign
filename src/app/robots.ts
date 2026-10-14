import type { MetadataRoute } from "next";
import { site } from "../../content/site";

/*
 * Open to search engines and to AI crawlers: the aim of the site is to be
 * found and quoted accurately. Only the internal playground is excluded.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/dev/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
