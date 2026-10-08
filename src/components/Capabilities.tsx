import { ScrollReveal } from "./ScrollReveal";

const capabilityGroups = [
  {
    title: "Product & UX strategy",
    items: ["Vision alignment", "Opportunity framing", "Roadmap input", "North star definition"],
  },
  {
    title: "Complex flows & IA",
    items: ["Information architecture", "User journey mapping", "Edge case design", "Flow optimisation"],
  },
  {
    title: "UX/UI & Prototyping",
    items: ["Interaction design", "High-fidelity UI", "Rapid prototyping", "Figma systems"],
  },
  {
    title: "Design systems",
    items: ["Component libraries", "Token architecture", "Documentation", "Governance models"],
  },
  {
    title: "Stakeholder alignment",
    items: ["Cross-team facilitation", "Presenting to leadership", "Design reviews", "Buy-in building"],
  },
  {
    title: "Technical collaboration",
    items: ["Working with engineers", "API-aware design", "Feasibility thinking", "Handoff quality"],
  },
  {
    title: "Research to decisions",
    items: ["User interviews", "Usability testing", "Synthesis & insight", "Evidence-based design"],
  },
  {
    title: "Accessibility",
    items: ["WCAG 2.2 AA", "Keyboard navigation", "Screen reader testing", "Inclusive patterns"],
  },
  {
    title: "Product ownership",
    items: ["Backlog refinement", "Acceptance criteria", "Sprint collaboration", "Delivery focus"],
  },
  {
    title: "AI-assisted design",
    items: ["Prompt-driven prototyping", "AI workflow integration", "LLM UX patterns", "Responsible AI UX"],
  },
];

export function Capabilities() {
  return (
    <section
      className="section"
      style={{ background: "var(--color-surface-50)" }}
      aria-labelledby="capabilities-heading"
    >
      <div className="container">
        <ScrollReveal>
          <header style={{ marginBottom: "var(--space-16)" }}>
            <p className="eyebrow" style={{ marginBottom: "var(--space-4)" }}>
              Capabilities
            </p>
            <h2 id="capabilities-heading" style={{ maxWidth: "560px" }}>
              What I bring to the table.
            </h2>
          </header>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "var(--space-1)",
          }}
        >
          {capabilityGroups.map((group, i) => (
            <ScrollReveal
              key={group.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            >
              <div
                style={{
                  padding: "var(--space-8) var(--space-6)",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <h3
                  style={{
                    fontSize: "var(--text-body)",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    marginBottom: "var(--space-4)",
                    color: "var(--color-ink-900)",
                  }}
                >
                  {group.title}
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-2)",
                  }}
                >
                  {group.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "var(--text-small)",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
