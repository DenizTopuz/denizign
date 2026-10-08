import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    id: "video-platform",
    name: "Online Video Platform",
    tagline: "Redesigning how millions of users experience streaming.",
    role: "Lead UX Designer",
    year: "2024",
    domain: "UX/UI · Streaming",
    bgColor: "#0d2b3e",
    imgSrc:
      "https://www.denizign.nl/wp-content/uploads/2024/04/Media-detail-with-data-768x583.png",
    description:
      "End-to-end UX redesign of a major Dutch video streaming platform — from information architecture and user flows to the final interface. Focused on clarity, engagement, and bringing complex content management into a product people genuinely enjoy using.",
  },
  {
    id: "shorts",
    name: "Shorts",
    tagline: "Designing a short-form video feature from zero.",
    role: "Lead UX Designer",
    year: "2024",
    domain: "UX/UI · New Feature",
    bgColor: "#544229",
    imgSrc:
      "https://www.denizign.nl/wp-content/uploads/2024/05/Shorts_projectview-1-768x583.png",
    description:
      "Designing a new short-form video experience within an existing streaming platform — defining the feed mechanic, content creation flow, and interaction model from concept through final UI. A careful balance between familiar patterns and a distinct new format.",
  },
  {
    id: "ihc-sherlock",
    name: "IHC Sherlock",
    tagline: "Making AI-driven maritime data legible for operators.",
    role: "UX/UI Designer",
    year: "2023",
    domain: "Data · Maritime · AI/ML",
    bgColor: "#1a2636",
    imgSrc: null,
    description:
      "IHC Sherlock enhances efficiency, safety, and decision-making in maritime operations through advanced data analytics and AI/ML technologies. The design challenge: surface machine-generated insights in a way that supports — rather than overwhelms — the operators depending on them.",
  },
];

export function SelectedWork() {
  return (
    <section
      id="work"
      className="section"
      style={{ background: "var(--color-surface-50)" }}
    >
      <div className="legacy-container">
        <ScrollReveal>
          <header style={{ marginBottom: "var(--space-16)" }}>
            <p className="eyebrow" style={{ marginBottom: "var(--space-4)" }}>
              Selected work
            </p>
            <h2>Things I like to show others.</h2>
          </header>
        </ScrollReveal>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}
        >
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article
                style={{
                  background: "var(--color-surface-0)",
                  border: "var(--border-default)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                }}
              >
                {/* Visual */}
                <div
                  style={{
                    background: project.bgColor,
                    minHeight: "300px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {project.imgSrc ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={project.imgSrc}
                      alt={`${project.name} — project screenshot`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                        position: "absolute",
                        inset: 0,
                        display: "block",
                      }}
                    />
                  ) : (
                    <IHCSherlockVisual />
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "var(--space-10)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-5)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-4)",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="eyebrow"
                      style={{
                        background: "var(--color-surface-100)",
                        padding: "4px 10px",
                        borderRadius: "var(--radius-xs)",
                      }}
                    >
                      {project.domain}
                    </span>
                    <span
                      style={{
                        fontSize: "var(--text-small)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {project.role} · {project.year}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ marginBottom: "var(--space-2)" }}>
                      {project.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "var(--text-body-lg)",
                        color: "var(--color-ink-700)",
                        fontWeight: 500,
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  <p
                    style={{
                      color: "var(--color-ink-500)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>

                  <a
                    href={`/work/${project.id}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "var(--text-small)",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      alignSelf: "flex-start",
                    }}
                  >
                    Read case study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IHCSherlockVisual() {
  return (
    <svg
      viewBox="0 0 700 300"
      width="100%"
      style={{ maxWidth: "700px", padding: "2rem" }}
      aria-hidden="true"
    >
      {/* Ship hull schematic */}
      <g opacity="0.12" stroke="#60a5fa" strokeWidth="0.5">
        {[0, 60, 120, 180, 240, 300].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="700" y2={y} />
        ))}
        {[0, 100, 200, 300, 400, 500, 600, 700].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" />
        ))}
      </g>

      {/* Vessel shape */}
      <path
        d="M60 200 Q350 180 640 200 L620 240 Q350 255 80 240 Z"
        fill="none"
        stroke="rgba(96,165,250,0.3)"
        strokeWidth="1.5"
      />

      {/* Sensor data streams */}
      <path
        d="M100 150 Q200 100 350 120 Q500 140 600 100"
        stroke="rgba(215,38,61,0.5)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="6 3"
      />
      <path
        d="M100 170 Q200 130 350 145 Q500 160 600 125"
        stroke="rgba(96,165,250,0.35)"
        strokeWidth="1"
        fill="none"
        strokeDasharray="4 4"
      />

      {/* Alert nodes */}
      <circle cx="240" cy="118" r="5" fill="#D7263D" opacity="0.9" />
      <circle cx="240" cy="118" r="14" fill="none" stroke="#D7263D" strokeWidth="0.8" opacity="0.4" />
      <circle cx="240" cy="118" r="24" fill="none" stroke="#D7263D" strokeWidth="0.4" opacity="0.2" />

      <circle cx="460" cy="133" r="4" fill="rgba(96,165,250,0.9)" />
      <circle cx="460" cy="133" r="12" fill="none" stroke="rgba(96,165,250,0.4)" strokeWidth="0.8" />

      {/* UI panel */}
      <rect x="480" y="30" width="180" height="120" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="493" y="46" width="90" height="6" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="493" y="62" width="60" height="4" rx="2" fill="rgba(96,165,250,0.5)" />
      <rect x="493" y="76" width="70" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="493" y="90" width="50" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="493" y="110" width="80" height="20" rx="3" fill="rgba(215,38,61,0.25)" stroke="rgba(215,38,61,0.5)" strokeWidth="1" />
      <text x="499" y="124" fill="#D7263D" fontSize="9" fontFamily="monospace" opacity="0.9">ANOMALY DETECTED</text>

      <text x="30" y="285" fill="rgba(255,255,255,0.25)" fontSize="10" fontFamily="monospace">IHC SHERLOCK — MARITIME AI PLATFORM</text>
    </svg>
  );
}
