import { ScrollReveal } from "./ScrollReveal";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="dark-section section"
      aria-labelledby="contact-heading"
    >
      <div className="legacy-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--space-10)",
            maxWidth: "720px",
          }}
        >
          <ScrollReveal>
            <p
              className="eyebrow"
              style={{ color: "var(--color-ink-300)" }}
            >
              Let&apos;s work together
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h2
              id="contact-heading"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#ffffff",
              }}
            >
              Have a complex
              <br />
              product problem?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p
              style={{
                fontSize: "var(--text-lead)",
                color: "rgba(185,187,192,0.85)",
                lineHeight: 1.55,
              }}
            >
              Let&apos;s make it clear.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div
              style={{
                display: "flex",
                gap: "var(--space-4)",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:hello@denizign.com"
                className="btn btn-primary"
              >
                Get in touch
                <ArrowIcon />
              </a>
              <a
                href="https://linkedin.com/in/deniztopuz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  background: "transparent",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
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
  );
}
