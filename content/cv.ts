/*
 * Curriculum vitae, as shown on the About page and as the source for the Word
 * version. Everything here comes from Deniz's own CV (CV_Deniz_Topuz.pdf, May
 * 2024) or from facts he confirmed in this project. Nothing is invented.
 *
 * Open items, to be supplied by Deniz (see `todo`): the NDW role and projects,
 * and the end date at Blue Billywig. Entries with `current: true` show
 * "Present". Private details (home address, phone number) are deliberately not
 * part of this public data.
 */

export type CvRole = {
  employer: string;
  title: string;
  /** Display period, e.g. "Sept 2020 – 2025". */
  period: string;
  /** Start year, used for ordering and for the timeline gutter. */
  from: number;
  /** End year; undefined means "still going". */
  to?: number;
  current?: boolean;
  summary: string;
  /** What he did there, as short concrete statements. */
  points: string[];
  /** Named engagements (customers / products), with a case-study slug when one exists. */
  projects?: { name: string; detail: string; slug?: string; href?: string }[];
};

export const cv = {
  name: "Deniz Topuz",
  headline: "UX Designer · UX Lead · UX Architect · Design System Epic Owner",
  location: "Netherlands",
  profile:
    "UX designer with over thirteen years of experience in complex digital products, working as UX Lead, UX architect and epic owner of a design system. I research how people use software, turn what I learn into accessible interfaces and prove the idea with low- and high-fidelity interactive prototypes. My background combines UX and UI design with front-end development, which makes it easy to work with product owners, developers and stakeholders across teams.",
  roles: <CvRole[]>[
    {
      employer: "NDW",
      title: "UX Designer · UX Lead · UX Architect · Epic owner design system",
      period: "Oct 2024 – Present",
      from: 2024,
      current: true,
      summary:
        "Designing digital products at NDW (Nationale Databank Wegverkeersgegevens): an information hub, applications for several teams and new data dashboards, across team boundaries.",
      points: [
        "Epic owner of the design system: I direct the front-end team in building the components that NDW's applications use.",
        "Working on the information hub, the central place that brings NDW's products and services together for people looking for information.",
        "Designing and improving the applications of several teams, thinking along on solutions for existing and new features.",
        "Designing entirely new dashboards, from heavy goods vehicle charging (vrachtwagenheffing) to road safety and Inweva.",
        "Taking part in conversations with partners, municipalities, stakeholders and internal colleagues, to gather the question and translate it into user-friendly interfaces.",
      ],
      projects: [
        {
          name: "Information hub",
          detail: "One central place for NDW's products and services",
        },
        {
          name: "Verkeersveiligheid",
          detail: "Road safety dashboard",
          href: "https://verkeersveiligheid.ndw.nu/",
        },
        {
          name: "Inweva",
          detail:
            "Dashboard for partners (behind a login, so not publicly viewable)",
        },
        {
          name: "Heavy goods vehicle charge",
          detail: "A new dashboard for the vrachtwagenheffing",
        },
        {
          name: "Design system",
          detail:
            "Components for NDW's applications, built with the front-end team",
        },
      ],
    },
    {
      employer: "Blue Billywig",
      title: "Product UX & UI Designer",
      period: "Sept 2020 – Sept 2024",
      from: 2020,
      to: 2024,
      summary:
        "Improved the user experience and interface of existing and new features of an online video platform, from research to design system.",
      points: [
        "Organised research and brainstorming sessions and used design thinking to arrive at solutions.",
        "Redesigned the whole online video platform and built a design system for it.",
        "Worked with junior designers and shared knowledge; supported the marketing team.",
      ],
      projects: [
        {
          name: "Redesign Online Video Platform",
          detail: "Media library and detail page on a new design system",
          slug: "redesign-online-video-platform",
        },
        {
          name: "Shorts",
          detail:
            "Short-form video, created and embedded from the platform; shown at DMEXCO",
          slug: "shorts",
        },
        {
          name: "Redesign the Player Skin",
          detail:
            "HTML5 player for web and app, used by customers such as Ajax, Feyenoord, Omroep Brabant and Allerhande",
          slug: "player-skin",
        },
        {
          name: "Content Protection",
          detail: "Policies that decide who may watch a video",
          slug: "content-protection",
        },
        {
          name: "Channels",
          detail: "A self-service builder for streaming-style video pages",
          slug: "channels",
        },
        {
          name: "Ad Services",
          detail: "Revamped monetisation dashboard with KPI metrics",
        },
      ],
    },
    {
      employer: "Wortell",
      title: "UX & UI Designer · Front-end developer",
      period: "Apr 2017 – 2020",
      from: 2017,
      to: 2020,
      summary:
        "Designed and built responsive applications for large organisations, working with stakeholders, product owners and developers.",
      points: [
        "Wrote HTML, CSS and JavaScript for responsive mobile and desktop applications.",
        "Created interactive prototypes and ran user tests.",
        "Worked with stakeholders abroad (USA), product owners and developers on implementation of features.",
      ],
      projects: [
        {
          name: "Aegon: Data Migration Factory",
          detail:
            "User experience, interface and visual design of a migration tool",
        },
        {
          name: "IHC: Sherlock",
          detail:
            "Cognitive search and knowledge mining over drawings, manuals, certificates, scans, reports and contracts",
        },
        {
          name: "PWN",
          detail:
            "User flows, visual style, style guide and prototypes for internal apps",
        },
      ],
    },
    {
      employer: "PeopleWare (now ProACT)",
      title: "UX & UI Designer · Front-end developer",
      period: "Jan 2011 – Apr 2017",
      from: 2011,
      to: 2017,
      summary:
        "Worked in a multidisciplinary team on the Collaboration Factory, a tool in the SharePoint framework for intranets and collaboration portals.",
      points: [
        "Owned all visual design and prototyping, built in HTML, CSS and JavaScript.",
        "Designed more than 25 SharePoint portals for organisations such as Engie, Jumbo, Mazars, HAK and KPMG, for news sharing and document management.",
      ],
    },
  ],
  education: [
    {
      school: "Hogeschool van Amsterdam",
      programme: "Communication & Multimedia Design",
      period: "2007 – 2010",
    },
    {
      school: "Mediacollege Amsterdam",
      programme: "Interaction Design",
      period: "2003 – 2007",
    },
    {
      school: "Het Amsterdams Lyceum",
      programme: "MAVO",
      period: "1999 – 2003",
    },
  ],
  /** Nielsen Norman Group UX Certificate, earned 9 July 2026 (ID 1059998). */
  uxCertificate: {
    title: "UX Certificate",
    issuer: "Nielsen Norman Group",
    date: "July 2026",
    id: "1059998",
    file: "/documents/NNG-UX-Certificate-Deniz-Topuz.pdf",
  },
  certifications: [
    {
      issuer: "Nielsen Norman Group",
      title: "UX Roadmaps",
      date: "July 2026",
      group: "Management",
    },
    {
      issuer: "Nielsen Norman Group",
      title: "UX Leader: Essential Skills for Any UX Practitioner",
      date: "May 2026",
      group: "Management",
    },
    {
      issuer: "Nielsen Norman Group",
      title: "Design Systems and Pattern Libraries",
      date: "January 2025",
      group: "Management",
    },
    {
      issuer: "Nielsen Norman Group",
      title: "Emerging Patterns in Interface Design",
      date: "August 2023",
      group: "Interaction",
    },
    {
      issuer: "Nielsen Norman Group",
      title: "The Human Mind and Usability",
      date: "August 2022",
      group: "Interaction",
    },
    {
      issuer: "Nielsen Norman Group",
      title: "Application Design for Web and Desktop",
      date: "July 2022",
      group: "Interaction",
    },
    {
      issuer: "Nielsen Norman Group",
      title: "User Research Methods: From Strategy to Requirements to Design",
      date: "May 2022",
      group: "Research",
    },
    {
      issuer: "Microsoft",
      title: "70-480 Programming in HTML5 with JavaScript and CSS3",
      date: "",
      group: "Development",
    },
  ],
  skillGroups: [
    {
      label: "Research & strategy",
      items: [
        "User research",
        "Interviews",
        "Usability testing",
        "Human-centred design",
        "User journeys",
        "Design thinking",
        "Facilitation and workshops",
      ],
    },
    {
      label: "Design",
      items: [
        "UX & UI design",
        "Interaction design",
        "Wireframes",
        "Low- and high-fidelity prototyping",
        "Design systems",
        "Accessibility (WCAG)",
        "Visual design",
      ],
    },
    {
      label: "AI in my work",
      items: [
        "Prototyping with Figma Make",
        "Claude Code",
        "Claude Design",
        "Perplexity",
        "Gemini",
        "ChatGPT",
      ],
    },
    {
      label: "Tools & delivery",
      items: [
        "Figma",
        "Adobe Creative Suite",
        "Adobe XD",
        "Sketch",
        "InVision",
        "HTML, CSS and JavaScript",
        "Agile and Scrum",
      ],
    },
  ],
  /** Where Deniz gets his inspiration, in his own words. */
  inspiration: [
    { name: "Medium", href: "https://medium.com" },
    { name: "Dribbble", href: "https://dribbble.com" },
    { name: "Awwwards", href: "https://www.awwwards.com" },
    { name: "Smashing Magazine", href: "https://www.smashingmagazine.com" },
    { name: "UX Planet", href: "https://uxplanet.org" },
    { name: "Nielsen Norman Group", href: "https://www.nngroup.com" },
  ],
  /** UX voices Deniz follows on social media, as he named them. */
  following: [
    { name: "Zander Whitehurst" },
    { name: "Femke van Schoonhoven" },
    { name: "Michal Malewicz" },
  ],
  languages: [
    { language: "Dutch", level: "Native" },
    { language: "English", level: "Good" },
  ],
  links: {
    website: "https://denizign.nl",
    linkedin: "https://www.linkedin.com/in/deniztopuz/",
    email: "hello@denizign.nl",
  },
  /** What still has to be supplied before the CV is complete. */
  todo: [
    "Outcomes with numbers where they can be substantiated (none available now).",
  ],
} as const;
