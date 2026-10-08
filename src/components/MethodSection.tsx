import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    number: "01",
    label: "Understand",
    description:
      "I start where the problem lives — with the people, the data, the constraints. Research, stakeholder interviews, system mapping. Not assumptions.",
  },
  {
    number: "02",
    label: "Connect",
    description:
      "I find the threads between user needs, business goals, and technical reality. Most complexity comes from things not talking to each other.",
  },
  {
    number: "03",
    label: "Simplify",
    description:
      "I reduce. Every screen, every flow, every interaction — stripped to what actually serves the user. The hardest decisions are the ones that remove things.",
  },
  {
    number: "04",
    label: "Scale",
    description:
      "I build systems, not screens. Patterns that hold across teams, platforms, and time — so what works today still works when the product grows.",
  },
];

export function MethodSection() {
  return (
    <section
      className="dark-section section"
      aria-labelledby="method-heading"
    >
      <div className="legacy-container">
        <ScrollReveal>
          <header style={{ marginBottom: "var(--space-16)", maxWidth: "640px" }}>
            <p
              className="eyebrow"
              style={{ marginBottom: "var(--space-4)", color: "var(--color-ink-300)" }}
            >
              Method
            </p>
            <h2 id="method-heading" style={{ color: "#ffffff" }}>
              Understand → Connect →{" "}
              <br className="hidden md:block" />
              Simplify → Scale
            </h2>
          </header>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--space-1)",
          }}
        >
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
              <div
                style={{
                  padding: "var(--space-8) var(--space-8)",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "var(--color-accent)",
                  }}
                >
                  {step.number}
                </span>
                <h3
                  style={{
                    fontSize: "var(--text-h4)",
                    color: "#ffffff",
                    fontWeight: 700,
                  }}
                >
                  {step.label}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-small)",
                    color: "rgba(185,187,192,0.85)",
                    lineHeight: 1.65,
                    maxWidth: "none",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
