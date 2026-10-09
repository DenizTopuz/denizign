/*
 * Testimonials: real recommendations only.
 *
 * Every entry is a real LinkedIn recommendation received by Deniz, copied word
 * for word. While the list is empty the Testimonials section renders nothing
 * (see HomepageTestimonials). Nothing here may be invented, paraphrased or
 * "placeholder" praise. Quotes in Dutch stay Dutch (`lang: "nl"`).
 *
 * Source: real LinkedIn recommendations, supplied manually or exported by
 * Deniz. There is no LinkedIn integration, API, OAuth or scraping, and none is
 * planned: the testimonials stay static content in this file.
 *
 * Rules for every entry:
 * - `quote` is the recommendation word for word, or an explicitly agreed
 *   excerpt. Do not edit the meaning.
 * - `name`, `role` and `company` are exactly as the author gave them.
 * - Only add an entry once the author has agreed to it being shown on the site.
 * - Prefer three strong recommendations over many weak ones.
 *
 * Shape of one entry (documentation only, not data):
 *
 *   {
 *     quote: "…the recommendation, verbatim…",
 *     name: "Full Name",
 *     role: "Job title",
 *     company: "Company",           // optional
 *     source: "LinkedIn",
 *     sourceUrl: "https://www.linkedin.com/…",   // optional, link to the original
 *     date: "2025-03",                          // YYYY-MM or YYYY-MM-DD
 *     featured: true,                           // optional, shown largest and first
 *   }
 */

export type Testimonial = {
  /** Word for word. Separate paragraphs with a blank line. */
  quote: string;
  name: string;
  role: string;
  company?: string;
  source: "LinkedIn";
  sourceUrl?: string;
  /** ISO date: YYYY-MM or YYYY-MM-DD. */
  date: string;
  /** Language of the quote when it is not English. */
  lang?: "nl";
  featured?: boolean;
  /**
   * Optional phrase from `quote`, exactly as written, shown in the accent
   * colour. Presentation only: the quote itself is never changed.
   */
  highlight?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Deniz has proven to be a very professional, well structured UX designer. We had the pleasure of having him on board for a major UX redesign. A task he managed to do very well with a properly structured approach",
    name: "Guido Hultink",
    role: "Technical architect",
    company: "Blue Billywig",
    source: "LinkedIn",
    date: "2024-05",
    featured: true,
    highlight: "very professional, well structured UX designer",
  },
  {
    quote:
      "Deniz is a highly skilled UX/UI designer with a strong ability to articulate his ideas in a clear and engaging way. He welcomes feedback and uses it to refine his work, making him a great collaborator. His contributions clearly highlight the impact and value of having a dedicated UX/UI designer on the team.",
    name: "Bart Koot",
    role: "Freelance frontend developer and DevOps engineer",
    source: "LinkedIn",
    date: "2026-04",
    highlight: "great collaborator",
  },
  {
    quote:
      "Ik heb een korte periode met Deniz samengewerkt rondom de designoverdracht binnen NDW. In die tijd was het prettig samenwerken om het designwerk snel up to speed te krijgen. Deniz dook er vlot in, pakte de werkzaamheden snel op. Hij is fijn om mee samen te werken en daarnaast ook iemand met wie ik persoonlijk een goede klik had.",
    name: "Simon Dijkman",
    role: "Freelance Senior UX Designer",
    source: "LinkedIn",
    date: "2025-09",
    lang: "nl",
    highlight: "Hij is fijn om mee samen te werken",
  },
  {
    quote:
      "I had the pleasure of working with Deniz in his role as Product Designer at Blue Billywig, and right from the start he proved to be a great hire and addition to our team.\n\nHe is a dedicated and experienced professional who consistently delivered high-quality work. In addition he possesses deep knowledge of UX and IU design principles, always staying updated with the latest industry trends and best practices. This expertise was evident in the innovative and user-friendly designs he created, significantly enhancing our products and user experiences.\n\nIn addition Deniz has been a very kind colleague with an unfailing positive attitude, always willing to lend a hand and share insights with the team, making him a joy to work with.\n\nI highly recommend Deniz for any future endeavours. Any team would be lucky to have such a talented and dedicated designer. Also a remarkable football player!",
    name: "Jeroen Meeter",
    role: "CEO",
    company: "Blue Billywig",
    source: "LinkedIn",
    date: "2024-06",
  },
  {
    quote:
      "Deniz is een fijne collega met een goed gevoel voor moderne designs van webapplicaties. Ook staat hij open voor feedback van zijn collega's en weet ook de juiste kritische vragen te stellen aan collega's en klanten om erachter te komen wat echt belangrijk is.\n\nBij Blue Billywig was Deniz onder andere verantwoordelijk voor het creëren van een moderne look en feel voor het online video platform en de video speler, wat heeft geleid tot veel positieve reacties.",
    name: "Roel Hengeveld",
    role: "Product Owner",
    company: "Polpo",
    source: "LinkedIn",
    date: "2024-05",
    lang: "nl",
  },
  {
    quote:
      "Gedurende mijn tijd met Deniz zeer fijn mee samengewerkt. Zijn kennis van UX is erg breed en kan goed de vertaalslag maken op commercieel gebied. Maakt van te voren een goed plan gegrond op onderzoek en betrekt zowel collega’s als de markt hierbij voor een optimaal resultaat. Oog voor detail en bovenal gewoon een heel prettig persoon om mee te werken!",
    name: "Daniël Witteveen",
    role: "Accountmanager",
    company: "DPG Media",
    source: "LinkedIn",
    date: "2024-05",
    lang: "nl",
    highlight: "Zijn kennis van UX is erg breed",
  },
  {
    quote:
      "Deniz is een bekwame ontwerper met een goed gevoel voor detail. Gedurende de tijd dat ik met hem heb samengewerkt, heeft hij laten zien dat hij goed begrip heeft van UI design. Hij gaat graag de diepte in om  Hij werkt goed in teamverband en neemt initiatief waar nodig. Maar bovenal is hij een heel fijne collega!",
    name: "Vincent van Laar",
    role: "Frontend engineer",
    company: "Blue Billywig",
    source: "LinkedIn",
    date: "2024-05",
    lang: "nl",
    highlight: "bekwame ontwerper",
  },
  {
    quote:
      "I highly recommend Deniz for any position as UX designer. During our time working together, I was consistently impressed by his creativity and professionalism. He is not only a talented designer who consistently delivers high-quality work, but also a pleasure to collaborate with. His positive attitude and willingness to help make him a valuable asset to any team.",
    name: "Simon Smulders",
    role: "Frontend developer",
    company: "Blue Billywig",
    source: "LinkedIn",
    date: "2024-05",
    highlight: "consistently impressed by his creativity and professionalism",
  },
  {
    quote:
      "Deniz is een echte UX topper. Hij heeft interesse en ervaring in de onderzoekende kant, waarbij wij samen gebruikersonderzoeken hebben mogen uitvoeren. Daarnaast weet hij de inzichten die hieruit voort komen te vertalen in moderne designs die er fantastisch uitzien en aansluiten bij de behoeften van de gebruiker.\n\nNaast vakbekwaam is Deniz een fijne collega om mee samen te werken. Hij staat open voor feedback, denkt graag mee en is plezierig om mee samen te werken. Mocht ik in de toekomst de kans krijgen weer met hem samen te werken dan ben ik daar heel blij mee.",
    name: "Joep ten Haaf",
    role: "Product Owner",
    company: "Blue Billywig",
    source: "LinkedIn",
    date: "2024-05",
    lang: "nl",
  },
  {
    quote:
      "During our time together at Blue Billywig, I thoroughly enjoyed working with Deniz. With his keen eye for product design and great personality, I found him to be a great addition to our team.\n\nHis structured approach to product design brought the quality of our product to the next level, and by incorporating research and interviews in his design process, he was able to design the right solutions for our clients. And not only that, with his amazing eye for details, all the designs he delivered had a modern and sleak appearance. Something we really needed at Blue Billywig.\n\nThere are two projects that he can be really proud of (I know I am!); The redesign of our online video player, which now competes with those of the biggest players out there and the redesign of our online video platform, which will turn our platform into one of the most modern and intuitive out there. But that’s maybe selling him short. There are numerous smaller features and improvements that bear his signature.\n\nOn top of all of his professional skills, he has been a great addition to our team. With his relaxed and stress-free attitude, it was always nice to jump into projects with him. I always enjoyed our talks outside of the realm of our jobs.\n\nAll in all, I would recommend Deniz to anyone who is looking for a skilled product designer and am curious to see his future work!",
    name: "Tom Kleijn",
    role: "Product Leader",
    company: "Blue Billywig",
    source: "LinkedIn",
    date: "2024-05",
  },
  {
    quote:
      "Deniz is een creatieve designer die zowel zelfstandig als in teamverband actief meewerkt tot een succes. Hij komt met ideeën voor veranderingen of verbeteringen en werkt nauwkeurig en gedetailleerd. Wat Deniz onmisbaar maakt in projecten of opdrachten is, naast de “gewone” design werkzaamheden, zijn houding en inzet. Hij neemt initiatief, doet onderzoek naar gerelateerde zaken, neemt je mee in de ontwikkelingen en houdt je goed op de hoogte.",
    name: "Kemal Korkmaz",
    role: "Teamlead SecOps",
    company: "Proact IT NL",
    source: "LinkedIn",
    date: "2021-07",
    lang: "nl",
  },
  {
    quote:
      "I've worked with Deniz for 5 years. He has a keen eye for pixel perfect detail and what colours and fonts fit best for a design. Whether he's nearing a deadline or having small talk, he always remains a friendly chap.",
    name: "Lennart Heim",
    role: "Technisch specialist AI",
    source: "LinkedIn",
    date: "2021-06",
    highlight: "pixel perfect detail",
  },
  {
    quote:
      "De samenwerking met Deniz in verschillende projecten is mij heel goed bevallen, Deniz is echt een topper! Wat ik erg goed vond is dat Deniz de tijd neemt om de opdracht/het project goed te leren kennen, goeie vragen stelt en ervoor zorgt dat de verwachtingen duidelijk zijn. Deniz houdt je op de hoogte over de ontwikkelingen in het project en stemt goed af. Verder neemt Deniz initiatief in het spotten en aangeven van kansen waar nog niet rekening mee gehouden is en besparend zijn voor de opdrachtgever. Op het gebied van UX en UI ben ik uitermate tevreden over wat Deniz heeft geleverd. Door zijn uitgebreide kennis is hij multi inzetbaar wat voor veel opdrachtgevers van toegevoegde waarde is.  Bedankt voor de mooie en effectieve samenwerking Deniz!",
    name: "Michael Abou El Khair",
    role: "Senior Service & Customer Success Manager",
    source: "LinkedIn",
    date: "2020-08",
    lang: "nl",
  },
  {
    quote:
      "Deniz is iemand op wie je kan vertrouwen. Hij denkt graag mee en zet altijd zijn beste been voor. In zijn werkzaamheden zie je dat hij een oog voor design heeft en goed de wensen weet te vertalen naar een uitwerking. Ik heb onze samenwerkingen altijd als plezierig ervaren!",
    name: "Tibor Dujmovic",
    role: "Co-Founder",
    company: "Pokka B.V.",
    source: "LinkedIn",
    date: "2020-08",
    lang: "nl",
    highlight: "iemand op wie je kan vertrouwen",
  },
  {
    quote:
      "Deniz is in zijn werk heel nauwkeurig en gaat gedetailleerd te werk. Door zijn creativiteit in te zetten en te luisteren zorgt hij ervoor dat het resultaat aansluit bij de wensen van een opdrachtgever.",
    name: "Hafid El Addouti",
    role: "Founder",
    company: "HFD Secure Works",
    source: "LinkedIn",
    date: "2020-08",
    lang: "nl",
    highlight: "heel nauwkeurig",
  },
];
