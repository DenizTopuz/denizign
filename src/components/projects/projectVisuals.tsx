import Image from "next/image";

/*
 * Visual per project slug, shared by the homepage and the case-study pages.
 * `ratio` is the visual's native width / height; `tone` is the surface it is
 * designed to sit on. Concept cases use conceptual SVG interfaces; verified
 * work uses a real, approved screen.
 */
export const projectVisuals: Record<
  string,
  { visual: React.ReactNode; tone: "dark" | "light"; ratio: number }
> = {
  "redesign-online-video-platform": {
    visual: (
      <Image
        src="/projects/redesign-online-video-platform/media-detail-data.jpg"
        width={1800}
        height={1366}
        alt="The redesigned media clip detail page with thumbnails, chapters, languages, reactions, social media and performance."
        sizes="(min-width: 1024px) 60rem, 100vw"
      />
    ),
    tone: "light",
    ratio: 1800 / 1366,
  },
  "content-protection": {
    visual: (
      <Image
        src="/projects/content-protection/overview.jpg"
        width={1717}
        height={1303}
        alt="The Content protection page with a menu of policy types: country, domain, IP, API and subscription."
        sizes="(min-width: 1024px) 60rem, 100vw"
      />
    ),
    tone: "light",
    ratio: 1717 / 1303,
  },
  "player-skin": {
    visual: (
      <Image
        src="/projects/player-skin/new.jpg"
        width={1200}
        height={675}
        alt="The redesigned player skin on a video of hot-air balloons, with large controls and a thumbnail preview."
        sizes="(min-width: 1024px) 60rem, 100vw"
      />
    ),
    tone: "dark",
    ratio: 1200 / 675,
  },
  shorts: {
    visual: (
      <Image
        src="/projects/shorts/overview.jpg"
        width={1717}
        height={1240}
        alt="The overview of a short with blocks for playlist, experience, player and monetisation, and a performance block."
        sizes="(min-width: 1024px) 60rem, 100vw"
      />
    ),
    tone: "light",
    ratio: 1717 / 1240,
  },
  channels: {
    visual: (
      <Image
        src="/projects/channels/showcase-responsive.avif"
        width={2000}
        height={1796}
        alt="A barbecue-themed channel shown on desktop, tablet and phone."
        sizes="(min-width: 1024px) 60rem, 100vw"
      />
    ),
    tone: "dark",
    ratio: 2000 / 1796,
  },
};
