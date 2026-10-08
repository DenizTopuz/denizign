import { ScrollReveal } from "./ScrollReveal";

const layers = [
  { label: "Users", sub: "Needs, behaviours, context" },
  { label: "Experience", sub: "Flows, interactions, clarity" },
  { label: "Product", sub: "Goals, strategy, features" },
  { label: "Technology", sub: "Systems, APIs, constraints" },
  { label: "Systems", sub: "Design, processes, scale" },
];

export function LayerDiagram() {
  return (
    <section
      id="approach"
      className="section"
      style={{ background: "var(--color-surface-100)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--space-16)",
          }}
        >
          <ScrollReveal>
            <header style={{ maxWidth: "640px" }}>
              <p className="eyebrow" style={{ marginBottom: "var(--space-4)" }}>
                How I work
              </p>
              <h2 style={{ marginBottom: "var(--space-6)" }}>
                I work between the layers.
              </h2>
              <p className="lead">
                Great digital products don&apos;t fail because of bad ideas — they fail
                because the layers don&apos;t connect. I sit at those intersections.
              </p>
            </header>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div style={{ overflowX: "auto", paddingBottom: "var(--space-4)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  gap: "0",
                  minWidth: "600px",
                }}
                role="list"
                aria-label="Experience layers"
              >
                {layers.map((layer, i) => (
                  <div
                    key={layer.label}
                    role="listitem"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                    }}
                  >
                    {/* Connector line */}
                    {i < layers.length - 1 && (
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          top: "28px",
                          right: "-1px",
                          width: "2px",
                          height: "56px",
                          background: "var(--color-border)",
                          zIndex: 1,
                        }}
                      />
                    )}

                    {/* Layer card */}
                    <div
                      style={{
                        padding: "var(--space-6) var(--space-6)",
                        borderTop: i === 0
                          ? "2px solid var(--color-accent)"
                          : "1px solid var(--color-border)",
                        borderRight: "1px solid var(--color-border)",
                        borderLeft: i === 0 ? "1px solid var(--color-border)" : "none",
                        background: i === 1 ? "var(--color-surface-0)" : "transparent",
                        position: "relative",
                      }}
                    >
                      {i === 1 && (
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "2px",
                            background: "var(--color-accent)",
                          }}
                        />
                      )}
                      <div
                        style={{
                          fontSize: "var(--text-small)",
                          fontWeight: 700,
                          fontFamily: "var(--font-display)",
                          color: i === 1 ? "var(--color-accent)" : "var(--color-ink-900)",
                          letterSpacing: "-0.01em",
                          marginBottom: "var(--space-2)",
                        }}
                      >
                        {layer.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-text-muted)",
                          lineHeight: 1.4,
                        }}
                      >
                        {layer.sub}
                      </div>
                    </div>

                    {/* Arrow between layers */}
                    {i < layers.length - 1 && (
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "-10px",
                          zIndex: 2,
                          color: "var(--color-ink-300)",
                          fontSize: "12px",
                        }}
                      >
                        ↔
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
