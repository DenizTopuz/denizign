/*
 * Case-study narrative, per project slug.
 *
 * Reading order follows Problem → Thinking → Intervention → Direction/Outcome
 * (see the design system, "Case study structure").
 *
 * CONCEPT CONTENT. The three entries below belong to concept cases: design
 * exercises, not client work. They describe reasoning and design direction.
 * They must not claim a client, a year, research findings, metrics, user
 * numbers or measured results. When a project becomes a VerifiedProject its
 * entry is rewritten with real, approved facts.
 */

export type Decision = {
  title: string;
  /** What was decided. */
  decision: string;
  /** Why: what in the problem or the research led to it. */
  reasoning: string;
  /** What it costs, and how the design deals with that. Only when known. */
  tradeOff?: string;
};

/**
 * An image that earns its place by explaining something. Files live in
 * /public/projects/<slug>/. `caption` says what the reader should see.
 */
export type Figure = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Surface behind transparent images. Defaults to "plain". */
  surface?: "plain" | "soft";
  /** Two consecutive half figures sit side by side from 768px. */
  half?: boolean;
  /** Full viewport width, with a slow parallax. For wide, atmospheric images. */
  bleed?: boolean;
  /**
   * With `bleed`: show the whole image, uncropped and without zoom, drifting
   * only in the space around it. For dense, annotated sheets that have to stay
   * readable.
   */
  fit?: boolean;
};

export type CaseStudy = {
  /** One short paragraph on what this case explores. */
  scope: string;
  /** Verified work: what Deniz did, with whom and how. */
  role?: {
    responsibilities: string[];
    team: string;
    methods: string[];
  };
  problem: {
    heading: string;
    paragraphs: string[];
    /** e.g. the situation before the redesign. */
    figures?: Figure[];
  };
  thinking: {
    heading: string;
    paragraphs: string[];
    /** The parts of the system, or what the research said, one line each. */
    layers: { title: string; text: string }[];
    layersLabel?: string;
    figures?: Figure[];
  };
  decisionsHeading?: string;
  decisions: Decision[];
  intervention: {
    heading: string;
    paragraphs: string[];
    figures?: Figure[];
  };
  /** Closing section: design direction for concepts, outcome when verified. */
  direction: {
    paragraphs: string[];
    /** Verified work: a real quote that supports the outcome, verbatim. */
    quote?: { text: string; name: string; role: string; source: string };
    /** Concepts: what would need to be validated with real users and data. */
    toValidate?: string[];
    /** Verified work: what the project taught. */
    learned?: string[];
    reflection: string;
  };
};

export const caseStudies: Record<string, CaseStudy> = {
  /*
   * VERIFIED. Real work from a previous employer. Facts come from the
   * project's design files and from the case study previously published on
   * denizign.nl. Customer names from that page are left out until they can be
   * named.
   */
  channels: {
    scope:
      "Channels turns a customer's videos into a branded, streaming-style page that fits into their website or app. This case covers the editor in which customers build such a page themselves, and the pages they publish.",
    role: {
      responsibilities: [
        "Facilitating brainstorming sessions",
        "User research",
        "Wireframing and prototyping",
        "Mentoring a junior designer",
      ],
      team: "Stakeholders, product owners, a product manager, front-end and back-end developers and designers.",
      methods: [
        "Design thinking",
        "Usability testing",
        "Interviews",
        "Wireframes",
        "Crazy 8s",
        "Agile and Scrum",
      ],
    },
    problem: {
      heading: "A page builder that only a developer could use.",
      paragraphs: [
        "Channels was not meeting customer expectations, so it was decided to overhaul it. The front end had received updates, but the channel editor in the platform was still outdated.",
        "The goal was to make the editor fully self-service, so that non-technical customers can manage their own channels: choose a layout, add content, style it and embed it, without needing help.",
      ],
    },
    thinking: {
      heading: "Design the builder and the result together.",
      paragraphs: [
        "The work followed the design thinking method, with brainstorm sessions, interviews and Crazy 8s sketching before wireframes took over.",
        "A channel has two sides that depend on each other: the back-end editor in which it is built, and the front-end page that visitors see. They were designed in parallel, so that every option in the editor has a clear counterpart on the page.",
      ],
      layersLabel: "What the builder had to cover",
      layers: [
        {
          title: "Layout",
          text: "A page assembled from elements: headers, a video player, playlists and featured items.",
        },
        {
          title: "Styling",
          text: "Colour theme, fonts and button styles, so a channel matches the customer's brand.",
        },
        {
          title: "Detail page",
          text: "A page per video, with or without a blurred background image.",
        },
        {
          title: "Distribution",
          text: "Preview on desktop, tablet and mobile, and an embed code for the customer's own pages.",
        },
      ],
    },
    decisionsHeading: "Four design responses, and what each one came from.",
    decisions: [
      {
        title: "Build by adding elements",
        decision:
          "A channel is a list of elements. An “add element” menu groups them by kind (header, video player, playlist, featured) and shows a small visual of each.",
        reasoning:
          "The editor had to work for people who are not technical. Choosing from pictures is easier than filling in a form, and each element can be reordered or removed.",
      },
      {
        title: "See it on every device",
        decision:
          "A live preview sits next to the settings, with a switch between desktop, tablet and mobile.",
        reasoning:
          "Channels are responsive. Customers can check how their choices behave on each screen before they publish.",
      },
      {
        title: "Settings in the order of the job",
        decision:
          "The editor has four tabs: general styling, elements, detail page and embed, in the order in which a channel is built and published.",
        reasoning:
          "Many options need structure. Following the customer's own sequence keeps each step small and puts the embed code last, where it is needed.",
      },
      {
        title: "Enough options, still controllable",
        decision:
          "The number of components was kept manageable, with more styling options added over time: fonts, button styles and header types.",
        reasoning:
          "Customers want a result that feels unique, and the platform has to remain controllable. A small set of well-designed components does both.",
      },
    ],
    intervention: {
      heading: "A builder customers can use on their own.",
      paragraphs: [
        "Existing components were redesigned and new ones added. The user flows were visualised, and the layouts for the front end and the back end were defined together.",
        "Customers can create their own layout, choose from different headers and playlists, add ad space, set fonts and button styles, show the detail screen with or without a blurred background and offer search, all in responsive layouts.",
      ],
      figures: [
        {
          src: "/projects/channels/wireframes.png",
          width: 2600,
          height: 1503,
          bleed: true,
          fit: true,
          alt: "Wireframes of the Channels editor: channel overview, general settings, the add-element menu, elements, detail page and embed.",
          caption:
            "Wireframes of the editor: from the channel overview to the embed code.",
        },
        {
          src: "/projects/channels/backend-options.png",
          width: 3200,
          height: 1027,
          bleed: true,
          fit: true,
          alt: "Twelve states of the back-end editor: general styling, add element, configured elements, detail page and embed.",
          caption:
            "The back-end editor: configuration options for styling, elements, the detail page and embedding.",
        },
        {
          src: "/projects/channels/showcase-responsive.png",
          width: 2000,
          height: 1796,
          alt: "A barbecue-themed channel shown on desktop, tablet, a phone and a video overlay.",
          caption:
            "The result: one channel on desktop, tablet and mobile, with a featured header, playlists and a banner.",
          surface: "soft",
        },
        {
          src: "/projects/channels/promo.png",
          width: 1600,
          height: 1375,
          alt: "Two football club video channels with a featured header, rows of highlights, players and specials, and a ticket banner.",
          caption:
            "Channels for football clubs: the same components, branded in each club's colours.",
          surface: "soft",
        },
      ],
    },
    direction: {
      paragraphs: [
        "The project delivered a redesigned editor with new and redesigned components, defined user flows and front-end and back-end layouts. Customers can now build and brand their own channels.",
        "No usage or business metrics are published for this project, so none are claimed here.",
      ],
      learned: [
        "Offering a builder effectively to customers was challenging.",
        "The number of options stayed manageable, and a feature that started with few components has shown strong potential.",
        "More styling options were added to give customers unique experiences while keeping the platform controllable.",
        "A future version may deserve a drag-and-drop canvas, in the way of site builders such as Wix or Elementor.",
      ],
      reflection:
        "A builder works when it offers freedom in a form that stays easy to control.",
    },
  },

  /*
   * VERIFIED. Real work from a previous employer. Facts come from the
   * project's design files and from the case study previously published on
   * denizign.nl. Benefits listed there as expectations (adoption, trust,
   * fewer support requests) are not claimed: no measurements exist.
   */
  "content-protection": {
    scope:
      "Content protection is a lock for video: it makes sure videos and live streams are seen only by the viewers they are meant for. This case covers how a customer builds and manages the rules that decide that.",
    role: {
      responsibilities: [
        "User research",
        "Brainstorm sessions",
        "Wireframing and prototyping",
      ],
      team: "Stakeholders, product owners, a product manager, front-end and back-end developers and designers.",
      methods: [
        "Design thinking",
        "User interviews",
        "A/B testing",
        "Wireframes",
        "Agile and Scrum",
      ],
    },
    problem: {
      heading: "Keep content private, without making the rules a puzzle.",
      paragraphs: [
        "Customers needed to keep media clips, live streams and channels private, with access limited to the right viewers. The reasons differ: rights restrictions, sensitive content or subscription rules.",
        "The feature had to let them manage that access for all of their content or for selected parts, and to combine several conditions, such as a country, a website and a subscription, without having to understand the underlying technology.",
      ],
    },
    thinking: {
      heading: "Learn the vocabulary, then make it visible.",
      paragraphs: [
        "The work followed the design thinking method. Content protection comes with its own technology and terminology, so the first step was to learn how it works and which kinds of policy can be created. That made the interface easier to understand.",
        "Technical conversations with developers were sometimes hard to follow. Wireframes made it easier to discuss and to understand each other, and they carried the design through several rounds of brainstorming and feedback.",
      ],
      layersLabel: "What had to be understood",
      layers: [
        {
          title: "Policy types",
          text: "Access can depend on country, domain, IP address, an API key or a subscription.",
        },
        {
          title: "Rules",
          text: "A policy is built from conditions that combine with “and” and “or”.",
        },
        {
          title: "Scope",
          text: "A policy can apply to all content or only to selected clips, playlists or channels.",
        },
        {
          title: "Presentation",
          text: "What a blocked viewer sees: the clip without playback, or nothing at all.",
        },
      ],
      figures: [
        {
          src: "/projects/content-protection/brainstorm.png",
          width: 1722,
          height: 1800,
          alt: "Early designs of the policy flow: an add-policy dialog with three types, and a policy page with rules, tags and the content it applies to.",
          caption:
            "First iteration: policies were created through a dialog and edited on a separate page.",
          surface: "soft",
        },
        {
          src: "/projects/content-protection/feedback-moments.png",
          width: 1486,
          height: 2000,
          alt: "Several design variations of selecting a policy type and countries, annotated with questions such as how to select countries and whether the mechanism feels intuitive.",
          caption:
            "Feedback moments: variations of the same step, with the questions that came out of them.",
          surface: "soft",
        },
      ],
    },
    decisionsHeading: "Four design responses, and what each one came from.",
    decisions: [
      {
        title: "Choose the type first, with an explanation",
        decision:
          "When adding a rule, a menu lists the policy types with an icon and a one-line explanation: country, domain, IP, API and subscription.",
        reasoning:
          "Customers meet the terminology here for the first time. Explaining each type at the moment of choosing it makes the technology understandable.",
      },
      {
        title: "Rules that read like a sentence",
        decision:
          "A policy reads “Activate policy when: country is not Albania, or domain is …”, with groups joined by “and”, and rules within a group by “or”.",
        reasoning:
          "People think in conditions. Showing the logic in words, with the combinations visible, avoids a hidden rule engine.",
      },
      {
        title: "Say what the viewer will see",
        decision:
          "A separate choice, “Present your protected content”, lets the customer pick between showing the clip but preventing playback, and not showing the clip at all.",
        reasoning:
          "Protecting content is also an experience for the viewer who is blocked. Seeing both options side by side makes the consequence clear.",
      },
      {
        title: "From dialogs to one page",
        decision:
          "The first iterations used dialogs and the old layout. After feedback the policy moved to one page in the platform's new style, with an empty state that invites the first policy.",
        reasoning:
          "Feedback questioned whether the existing mechanism felt intuitive, and whether to keep the old layout. One page keeps all parts of a policy in view.",
      },
    ],
    intervention: {
      heading: "A policy builder that explains itself.",
      paragraphs: [
        "The result is a single page on which a customer names a policy, builds its rules, chooses what viewers see and switches it on or off. An overview lists the created policies, the content they apply to and their status.",
        "The designs were iterated with colleagues in feedback moments and built in Figma in the platform's new look.",
      ],
      figures: [
        {
          src: "/projects/content-protection/overview.jpg",
          width: 1717,
          height: 1303,
          alt: "The Content protection page with a menu of policy types, each with an icon and short explanation.",
          caption:
            "Choosing a policy type, with an explanation for each.",
          half: true,
        },
        {
          src: "/projects/content-protection/policy-sets.jpg",
          width: 1718,
          height: 1534,
          alt: "A policy with two groups of rules joined by AND, each rule row with a type, an operator and a value, and a choice of what to show to viewers.",
          caption:
            "A policy with several rules and groups, and a choice of what blocked viewers see.",
          half: true,
        },
        {
          src: "/projects/content-protection/wireframes.png",
          width: 2600,
          height: 1394,
          bleed: true,
          fit: true,
          alt: "A grid of detailed wireframes of the Content protection flow: empty state, policy form, type menu, country selection and rule groups.",
          caption:
            "Detailed wireframes of the flow, from the empty state to a policy with several rule groups.",
        },
        {
          src: "/projects/content-protection/end-results.png",
          width: 2800,
          height: 1366,
          bleed: true,
          fit: true,
          alt: "Eight final screens of the Content protection flow in the platform's new look.",
          caption:
            "The end result: eight states of the flow, from the empty state to a complete policy.",
        },
      ],
    },
    direction: {
      paragraphs: [
        "The project delivered a redesigned way to create content protection policies, with customisable rules, enhanced security features and a layout that fits the platform's new look. The feedback it received was positive.",
        "No adoption, support or business metrics are published for this project, so none are claimed here.",
      ],
      learned: [
        "Learning how content protection works, with its technology and terminology, made the interface more intuitive.",
        "Wireframes made technical conversations with developers easier to follow and to discuss.",
        "Involving the team in every stage of the design, and getting enthusiastic feedback, helped to create something valuable for the end user together.",
      ],
      reflection:
        "Complex technology becomes usable when its vocabulary is explained at the moment someone needs it.",
    },
  },

  /*
   * VERIFIED. Real work from a previous employer. Facts come from the
   * project's design files and from the case study previously published on
   * denizign.nl. Customer names from that page are left out until the client
   * can be named.
   */
  "player-skin": {
    scope:
      "A redesign of the skin of a branded HTML5 video player: the controls, states and styles that sit on top of every video a customer publishes. Customers can change its colours, logo and thumbnails in an editor.",
    role: {
      responsibilities: [
        "Facilitating brainstorming sessions",
        "User research",
        "Wireframing and prototyping",
      ],
      team: "Stakeholders, product owners, a product manager, front-end and back-end developers and designers.",
      methods: [
        "Design thinking",
        "Usability testing",
        "A/B testing",
        "Wireframes",
        "Crazy 8s",
        "Agile and Scrum",
      ],
    },
    problem: {
      heading: "A player that looked old, with controls that were hard to hit.",
      paragraphs: [
        "The player skin looked outdated. Buttons were too small or poorly aligned, which made the player feel unintuitive. Large customers use the player for their own videos on their own websites, so a modern skin that matches those sites was essential.",
        "The redesign had three goals: a more visually appealing player for a better experience, better performance through a lighter and less cumbersome player, and a leaner code base.",
      ],
      figures: [
        {
          src: "/projects/player-skin/old.jpg",
          width: 1199,
          height: 675,
          alt: "The previous player skin: a dark play button, share icons on the top left, a small control bar at the bottom and a logo at the top right.",
          caption:
            "Before: small controls, share icons placed over the video and a flat play button.",
        },
      ],
    },
    thinking: {
      heading: "Draw the controls before you design them.",
      paragraphs: [
        "The work followed the design thinking method. Brainstorm sessions with colleagues used Crazy 8s: many quick sketches of controls, play buttons and layouts, pinned to the wall in numbered rounds and clustered by theme.",
        "A player is a small interface with many parts, so the sketches looked at each part separately first: play button shapes, skip buttons, the progress bar, the time display, and how they combine into one clear whole.",
      ],
      layersLabel: "What had to be solved",
      layers: [
        {
          title: "Legibility",
          text: "Controls that are large enough, aligned and easy to read over any video.",
        },
        {
          title: "Branding",
          text: "A skin that customers can match to their own website with colours, logo and thumbnail.",
        },
        {
          title: "States",
          text: "Playing, paused, subtitles, related clips and up next, each designed on its own.",
        },
        {
          title: "Responsiveness",
          text: "The same player in a page, in fullscreen and on a phone in portrait and landscape.",
        },
      ],
      figures: [
        {
          src: "/projects/player-skin/brainstorm-wall.jpg",
          width: 1500,
          height: 844,
          alt: "A whiteboard with sticky notes at the top and numbered rounds of paper sketches of player layouts below.",
          caption:
            "The wall during a session: notes at the top, numbered rounds of sketches below.",
          half: true,
        },
        {
          src: "/projects/player-skin/brainstorm-sketches.jpg",
          width: 1500,
          height: 844,
          alt: "Folded sheets of paper with sketches of player layouts on a table, next to markers and colour stickers.",
          caption: "Folded sheets with eight sketches each: Crazy 8s on paper.",
          half: true,
        },
        {
          src: "/projects/player-skin/brainstorm-controls.jpg",
          width: 1500,
          height: 844,
          alt: "A sketchbook page with play button shapes, skip icons, time displays, progress bars and small player layouts.",
          caption:
            "Parts first: play button shapes, skip buttons, time and progress styles.",
          half: true,
        },
        {
          src: "/projects/player-skin/brainstorm-styles.jpg",
          width: 1500,
          height: 844,
          alt: "A sketchbook page with player layouts in solid, outlined and light styles.",
          caption: "Whole layouts in solid, outlined and light styles.",
          half: true,
        },
      ],
    },
    decisionsHeading: "Four design responses, and what each one came from.",
    decisions: [
      {
        title: "Controls on a grid",
        decision:
          "On desktop every control sits in a 48 by 48px grid with 20px of padding. On mobile the grid is 38px, and in fullscreen the padding grows to 30px.",
        reasoning:
          "The old buttons were too small or misaligned. A fixed grid makes sizes and spacing predictable on every screen.",
      },
      {
        title: "A skin that takes the customer's brand",
        decision:
          "Customers set colours, logo and thumbnail in an editor. There are two configurable skin types and several play button styles, from solid to outlined.",
        reasoning:
          "Large customers need a player that matches their own website. Letting them choose within a designed system keeps the player coherent.",
      },
      {
        title: "Contrast checked automatically",
        decision:
          "For play buttons, a contrast checker applies a contrasting colour when the colours a customer picks are too close together.",
        reasoning:
          "Freedom to choose any colour should not make the controls unreadable. The check protects legibility without limiting the choice.",
      },
      {
        title: "Every state drawn",
        decision:
          "The skin was designed state by state: playing, hover, subtitles, related clips, up next with a countdown, and desktop, mobile, fullscreen portrait and fullscreen landscape.",
        reasoning:
          "A player skin is more complex than it looks, because of the many states and the need to be responsive. Drawing them explicitly keeps the behaviour consistent.",
      },
    ],
    intervention: {
      heading: "A modern skin that customers can make their own.",
      paragraphs: [
        "The new skin has larger, aligned controls, ten-second skip buttons, a thumbnail preview with timestamp while seeking, subtitles with a readable background and, for longer videos, related clips and an up-next countdown.",
        "It was documented with measurements for desktop and mobile, and with a page where all the player skin scenarios can be tried.",
      ],
      figures: [
        {
          src: "/projects/player-skin/new.jpg",
          width: 1200,
          height: 675,
          alt: "The redesigned player skin on a video of hot-air balloons, with a large play button, ten-second skip buttons, a progress bar with thumbnail preview and a row of controls.",
          caption:
            "After: a clear play button, skip buttons, a thumbnail preview while seeking, and one row of controls.",
        },
        {
          src: "/projects/player-skin/play-button-styles.png",
          width: 2600,
          height: 624,
          bleed: true,
          fit: true,
          alt: "Five variations of the player skin with different play button styles and accent colours: yellow, green, coral, outlined white and pink.",
          caption:
            "The same skin in different styles: round, square and outlined play buttons in the customer's colour.",
        },
        {
          src: "/projects/player-skin/best-experience.png",
          width: 2000,
          height: 1722,
          bleed: true,
          fit: true,
          alt: "Annotated player states: the main skin with subtitles, a related clips view and an up-next countdown, on desktop and in a compact size.",
          caption:
            "Player states: the main skin, related clips, and an up-next countdown that can be cancelled.",
        },
        {
          src: "/projects/player-skin/documentation.png",
          width: 2400,
          height: 2021,
          bleed: true,
          fit: true,
          alt: "Documentation sheets with measurements for the desktop player skin, mobile thumbnail, button grids and fullscreen portrait and landscape modes.",
          caption:
            "The documentation: sizes and spacing for desktop, mobile and fullscreen, so developers can build it exactly.",
        },
      ],
    },
    direction: {
      paragraphs: [
        "The project delivered a fresh look with new customisation options and two configurable types of player skin, several play button styles and documentation of the skin and its scenarios.",
        "Later, a second design and extra features (chapters, highlights and live video) were built with the same components.",
        "No usage or performance metrics are published for this project, so none are claimed here.",
      ],
      learned: [
        "Designing a player skin is more complex than it looks, because of the many states and the need for responsiveness.",
        "Adding a contrast checker for play buttons keeps custom colours legible.",
        "A separate design system for the player skin would have been better, as with the redesign of the platform itself.",
      ],
      reflection:
        "A player is small, but every pixel and state matters, and it works best when customers can make it theirs without breaking it.",
    },
  },

  /*
   * VERIFIED. Real work from a previous employer. Facts come from the
   * project's design files and from the case study previously published on
   * denizign.nl. Market statistics from that page are left out on purpose.
   */
  shorts: {
    scope:
      "Shorts is a feature of an online video platform that turns existing video into short-form experiences. It covers two sides of one product: how a customer creates and configures a short, and how a viewer plays it.",
    role: {
      responsibilities: [
        "Facilitating brainstorming sessions",
        "User research",
        "Wireframing and prototyping",
        "Mentoring a junior designer",
      ],
      team: "Stakeholders, product owners, a product manager, front-end and back-end developers and designers.",
      methods: [
        "Design thinking",
        "Usability testing and interviews",
        "Wireframes",
        "Crazy 8s",
        "Agile and Scrum",
      ],
    },
    problem: {
      heading: "Short video from the library people already have.",
      paragraphs: [
        "Short-form video has become one of the most popular kinds of social media content. For the customers of the platform it raised a practical question: how do you turn the video you already have into short, vertical experiences, without starting again?",
        "The answer had to live inside the platform. Customers upload content and organise it into playlists. From those playlists a short is created, configured to fit their brand and embedded on their own pages, in three display formats and with more than twenty settings to tailor it.",
      ],
    },
    thinking: {
      heading: "Design the creator and the viewer together.",
      paragraphs: [
        "The work followed the design thinking method and started with brainstorm sessions: sketching with Crazy 8s, clustering notes and drawing first wireframes on paper before anything was designed in Figma.",
        "Two things had to be solved at once. A customer needed a clear way to create and configure a short, with a lot of options. A viewer needed a player that feels natural on a phone as well as on a desktop, in whichever format was chosen.",
      ],
      layersLabel: "What had to be designed",
      layers: [
        {
          title: "Creation",
          text: "A guided way to make a short from existing content, with an empty state for customers who have none yet.",
        },
        {
          title: "Configuration",
          text: "More than twenty settings, organised so that each one is easy to find.",
        },
        {
          title: "Playback",
          text: "A player with its own states on desktop and mobile: subtitles, seeking, sharing and ads.",
        },
        {
          title: "Distribution",
          text: "Shorts that can be embedded on pages outside the platform.",
        },
      ],
      figures: [
        {
          src: "/projects/shorts/brainstorm-1.jpg",
          width: 1000,
          height: 563,
          alt: "A glass wall with paper wireframe sketches and many coloured sticky notes.",
          caption: "Sketches and notes from the first brainstorm sessions.",
          half: true,
        },
        {
          src: "/projects/shorts/brainstorm-2.jpg",
          width: 1000,
          height: 563,
          alt: "Close-up of sticky notes with how-might-we questions next to paper sketches.",
          caption: "Notes grouped into how-might-we questions.",
          half: true,
        },
      ],
    },
    decisionsHeading: "Four design responses, and what each one came from.",
    decisions: [
      {
        title: "Settings grouped by what they change",
        decision:
          "The configuration is split into four blocks: playlist, experience, player and monetisation, with performance shown beside them.",
        reasoning:
          "With more than twenty options, a long list would be unusable. Grouping by what a setting changes lets a customer go straight to the part they need.",
      },
      {
        title: "A page that looks like the rest of the platform",
        decision:
          "The overview of a short reuses the pattern of the media clip page: a header with the content, blocks with settings and a details panel with publishing.",
        reasoning:
          "Familiar patterns keep the platform consistent. The goal was a page that stays recognisable next to the media library, while it shows a series of videos instead of one.",
      },
      {
        title: "Experience options you can see",
        decision:
          "Choices such as swipe direction, previews and the background of the fullscreen view are presented as visual options with a short explanation, and saved per step.",
        reasoning:
          "These settings change what a viewer sees. A visual choice is quicker to understand than a label, and the creator can judge the result before saving.",
      },
      {
        title: "Player states designed, not left to chance",
        decision:
          "The player was drawn state by state for desktop and mobile: title, description and subtitles, behaviour on click and tap, the timestamp while seeking, sharing, ad slates and several video sizes.",
        reasoning:
          "A short is watched on many devices and in several formats. Designing the states explicitly makes the player behave well whichever format a customer chooses.",
      },
    ],
    intervention: {
      heading: "One feature, built from creation to playback.",
      paragraphs: [
        "Wireframes came first, as simplified blueprints of the creation flow, the empty state and the fullscreen player. The designs were then built in Figma on the platform's design system, with the creation and configuration screens designed together with the viewer's player.",
        "The result is a complete Shorts experience: a customer creates a short from a playlist, configures how it looks and behaves, previews it and embeds it. A viewer swipes through the clips, on desktop or on a phone.",
      ],
      figures: [
        {
          src: "/projects/shorts/wireframes.png",
          width: 2660,
          height: 1418,
          bleed: true,
          alt: "Wireframes of the Shorts creation flow, the empty state and the fullscreen player.",
          caption:
            "Wireframes: the creation flow, the empty state and the fullscreen player, before any visual design.",
        },
        {
          src: "/projects/shorts/overview.jpg",
          width: 1717,
          height: 1240,
          alt: "The overview of a short called Food recipes, with blocks for playlist, experience, player and monetisation and a performance block.",
          caption:
            "The overview of a short: playlist, experience, player and monetisation, with performance and publishing beside it.",
          half: true,
        },
        {
          src: "/projects/shorts/viewer.jpg",
          width: 1717,
          height: 1303,
          alt: "The fullscreen Shorts player on desktop, with one video in focus and neighbouring videos on both sides.",
          caption:
            "The viewer: one clip in focus, the next and previous clips beside it, with sharing, subtitles and sound controls.",
          half: true,
        },
        {
          src: "/projects/shorts/player-states.png",
          width: 2000,
          height: 1376,
          bleed: true,
          fit: true,
          alt: "A sheet of Shorts player states: title, description and subtitles, tap behaviour, timestamp while seeking, sharing, an ad slate and different video sizes.",
          caption:
            "Player states for desktop and mobile, from subtitles and tap behaviour to sharing, ad slates and different video sizes.",
        },
      ],
    },
    direction: {
      paragraphs: [
        "The project delivered player states for desktop and mobile, support for various video formats and a complete Shorts creation experience in the redesigned platform. It is fully responsive and Shorts can be embedded on external pages.",
        "No usage or business metrics are published for this project, so none are claimed here.",
      ],
      learned: [
        "Reusing familiar patterns keeps a new feature consistent with the platform.",
        "Headers can differ in content, but should look and feel the same across menus.",
        "Keeping the media library and the Shorts page visually consistent, yet recognisable as different things, was the hardest balance.",
        "Splitting the configuration options logically was the most rewarding part.",
      ],
      reflection:
        "A feature with more than twenty settings only works if each setting is easy to find, and if the result is easy to see.",
    },
  },

  /*
   * VERIFIED. Real work from a previous employer. Facts come from the
   * project's own research plan, feedback sheet and design files, and from the
   * case study previously published on denizign.nl. No metrics are claimed
   * because none are documented.
   */
  "redesign-online-video-platform": {
    scope:
      "A redesign of the media library of an online video platform: the overview where customers manage their videos, and the detail page where they prepare a video for publication. Both were built on a new design system.",
    role: {
      responsibilities: [
        "Facilitating brainstorming sessions",
        "User research",
        "Wireframing and prototyping",
        "Mentoring a junior designer",
      ],
      team: "Stakeholders, product owners, a product manager, front-end and back-end developers and designers.",
      methods: [
        "Design thinking",
        "Usability testing",
        "Wireframes",
        "Crazy 8s",
        "Agile and Scrum",
      ],
    },
    problem: {
      heading: "A powerful platform that new users could not read.",
      paragraphs: [
        "The platform lets businesses and content creators, from small companies to solo creators, upload, organise, edit and publish video. It has many strong features. For new users that was the problem: there were too many options, and it was easy to get lost in all the choices.",
        "The same pattern showed up across teams and customers: an outdated look and feel, unclear terminology, pages where everything had the same importance, and little guidance for people who were new. The goal was to help customers work more independently in the platform.",
      ],
      figures: [
        {
          src: "/projects/redesign-online-video-platform/before-media-library.jpg",
          width: 2200,
          height: 1226,
          alt: "The previous media clips page: a dense table with many filter buttons, tabs and row actions.",
          caption:
            "Before: the media clips overview. A dense table, a row of filter buttons and an action set on every row.",
        },
        {
          src: "/projects/redesign-online-video-platform/before-media-detail.jpg",
          width: 2200,
          height: 1230,
          alt: "The previous media clip detail page: one long form with seven tabs and a side panel.",
          caption:
            "Before: the detail page. One long form behind seven tabs, with publishing hidden in the corner.",
        },
      ],
    },
    thinking: {
      heading: "Listen first, then design.",
      paragraphs: [
        "The work followed the design thinking method. It started with colleagues from different teams, because they use the platform every day and help customers with it. Each session ran for an hour, with screen and audio recorded, so it was visible what a person was thinking, feeling, doing and saying. The same approach was then applied with customers who had different levels of experience.",
        "The results were grouped by area of the platform: start screen, navigation, ad services, analytics, media clips, playouts, projects, playlists, channels and search. For each group the problem was written down, with “how might we” questions to take into ideation.",
        "Ideation happened in brainstorm sessions with colleagues. The decision was to clean up the content first and to optimise the information architecture afterwards.",
      ],
      layersLabel: "What the research said",
      layers: [
        {
          title: "Hierarchy",
          text: "Everything on a page looked equally important, so nothing stood out.",
        },
        {
          title: "Terminology",
          text: "Names of pages and options were unclear, and some were barely used.",
        },
        {
          title: "Guidance",
          text: "New users wanted to be led through a task. The platform did not tell new and advanced users apart.",
        },
        {
          title: "Findability",
          text: "Filters went unused and finding one clip among many pages was hard. Users asked for search that suggests as you type.",
        },
      ],
      figures: [
        {
          src: "/projects/redesign-online-video-platform/brainstorm-session.jpg",
          half: true,
          width: 1000,
          height: 753,
          alt: "A brainstorm session in a meeting room with colleagues around a table and sticky notes on a glass wall.",
          caption: "A brainstorm session with colleagues. Faces are masked.",
        },
        {
          src: "/projects/redesign-online-video-platform/brainstorm-notes.jpg",
          half: true,
          width: 1000,
          height: 750,
          alt: "Sticky notes on a glass wall with phrases such as “No guidance”, “Lost! Help! Need guidance” and “Guidance = flow”.",
          caption:
            "Notes from a session. “Guidance = flow” became a principle for the redesign.",
        },
        {
          src: "/projects/redesign-online-video-platform/brainstorm-board.jpg",
          width: 1000,
          height: 750,
          alt: "A glass wall with hand-drawn interface sketches on paper next to groups of coloured sticky notes.",
          caption:
            "Sketches and clustered notes on the wall: ideas were drawn before anything was designed in Figma.",
        },
      ],
    },
    decisionsHeading: "Four design responses, and what each one came from.",
    decisions: [
      {
        title: "A library that starts with the content",
        decision:
          "The media overview shows videos as cards with a thumbnail, type, status and title. The table stays available behind a view toggle.",
        reasoning:
          "Finding one specific clip among many pages was a recurring problem, and a thumbnail is the quickest way to recognise a clip. People who work in bulk keep the table.",
      },
      {
        title: "Filters that get used",
        decision:
          "Filters are reachable from one place, saved as presets, and the active ones stay visible as removable chips with a clear-all.",
        reasoning:
          "The old filter options were not used because they were not user-friendly. Presets turn a repeated filter into one click, and visible chips show why a list looks the way it does.",
      },
      {
        title: "A detail page built around the next step",
        decision:
          "The seven tabs became one page: the video and its title on top, then blocks to enrich it (thumbnails, chapters, languages, reactions), social media, performance, and a details panel with publish.",
        reasoning:
          "The old page was overwhelming, with too many tabs and options. One page makes the whole state of a video visible at a glance and puts the publish action where the details are.",
      },
      {
        title: "Empty states that guide",
        decision:
          "Every block says what is missing and offers a way to add it, such as “No chapters yet” with a button to create one.",
        reasoning:
          "Reviewers of the first version asked what a clip looks like when nothing is filled in yet. New users also asked to be guided, and an empty block is the right moment to do that.",
      },
    ],
    intervention: {
      heading: "A library and a detail page that tell you what to do next.",
      paragraphs: [
        "Wireframes came first, as simplified blueprints, and were checked with developers and with a test group before any high-fidelity work in Figma. A feedback round on the first version of the detail page raised concrete questions: what a blank clip looks like, where to find “replace clip”, where changes are saved, and how easy the embed and publish actions are to find. These went into the next iteration.",
        "The screens were built on a new design system in Figma: colour primitives and variables, buttons and form fields in all their states, and a defined set of screen sizes. That is what keeps the media library and the other parts of the platform consistent with each other.",
      ],
      figures: [
        {
          src: "/projects/redesign-online-video-platform/wireframes.png",
          width: 2660,
          height: 1418,
          bleed: true,
          alt: "A set of wireframes of the media clip detail page in several layout variations.",
          caption:
            "Wireframes: several layouts of the detail page, before any visual design.",
          surface: "soft",
        },
        {
          src: "/projects/redesign-online-video-platform/media-overview.jpg",
          half: true,
          width: 1800,
          height: 1366,
          alt: "The redesigned media clips overview with video cards, filter presets and an active filter chip.",
          caption:
            "After: the media overview with cards, presets and a visible active filter.",
        },
        {
          src: "/projects/redesign-online-video-platform/media-detail-empty.jpg",
          half: true,
          width: 1800,
          height: 1366,
          alt: "The redesigned media clip detail page with empty blocks for thumbnails, chapters, languages and reactions.",
          caption:
            "After: the detail page of a clip with nothing added yet. Each empty block explains itself.",
        },
        {
          src: "/projects/redesign-online-video-platform/media-detail-data.jpg",
          width: 1800,
          height: 1366,
          alt: "The redesigned media clip detail page for a filled-in clip, with thumbnails, chapters, languages, reactions, social media and performance blocks.",
          caption:
            "After: the same page for a clip that is filled in. Thumbnails, chapters, languages, reactions, sharing and performance in one view, with publishing in the details panel.",
        },
        {
          src: "/projects/redesign-online-video-platform/design-system.png",
          width: 1279,
          height: 1800,
          alt: "Colour primitives, button variants and form field states from the design system in Figma.",
          caption:
            "The design system: colour variables, buttons and form fields in every state.",
          surface: "soft",
        },
      ],
    },
    direction: {
      paragraphs: [
        "After the wireframing stage the redesign gave the platform better cohesion, unified user flows, a clear grid system, a simplified interface and a better organisation of content, all on a shared design system.",
        "It improved the user experience and interface for clients and their workflows, in particular for customers who prefer to work independently in the platform.",
        "No usage or business metrics are published for this project, so none are claimed here.",
      ],
      quote: {
        text: "the redesign of our online video platform, which will turn our platform into one of the most modern and intuitive out there.",
        name: "Tom Kleijn",
        role: "Product Leader, Blue Billywig",
        source: "LinkedIn recommendation, May 2024",
      },
      learned: [
        "Running several projects while building a design system is complex.",
        "Buttons, forms, typography and filters behave differently in the redesign than in the old interface. That made it hard to support both versions while new functionality was being added.",
      ],
      reflection:
        "Making a complex platform clear came down to one question: what does a new user need to see first, and what can wait.",
    },
  },
};

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  caseStudies[slug];
