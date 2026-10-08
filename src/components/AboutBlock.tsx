import { ScrollReveal } from "./ScrollReveal";

export function AboutBlock() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: "var(--color-surface-100)" }}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "var(--space-16)",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Image */}
          <ScrollReveal>
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "1 / 1",
                background: "var(--color-ink-700)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/deniz-topuz.jpg"
                alt="Deniz Topuz"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="eyebrow" style={{ marginBottom: "var(--space-4)" }}>
                About
              </p>
              <h2
                id="about-heading"
                style={{ marginBottom: "var(--space-8)" }}
              >
                Deniz Topuz
              </h2>
            </ScrollReveal>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-6)",
              }}
            >
              <ScrollReveal delay={1}>
                <p
                  style={{
                    fontSize: "var(--text-body-lg)",
                    color: "var(--color-ink-500)",
                    lineHeight: 1.7,
                  }}
                >
                  I&apos;m a product designer from The Netherlands, working on
                  digital products that need to handle real complexity — streaming
                  platforms, maritime AI tools, government portals, mobile apps,
                  and everything in between.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                <p style={{ color: "var(--color-ink-500)", lineHeight: 1.7 }}>
                  My work covers the full spectrum: user research, UX strategy,
                  interaction design, UI design, and front-end development. I&apos;ve
                  designed for clients including IHC, ProRail, PWN, Aegon, Engie,
                  LVNL, and Jumbo.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={3}>
                <p style={{ color: "var(--color-ink-500)", lineHeight: 1.7 }}>
                  I believe that great design makes complex things feel effortless.
                  Whether it&apos;s a video platform used by millions or an enterprise
                  tool relied on by specialists — the standard is the same: it
                  should just work.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={4}>
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-4)",
                    flexWrap: "wrap",
                    paddingTop: "var(--space-4)",
                  }}
                >
                  <a href="#contact" className="btn btn-primary">
                    Get in touch
                  </a>
                  <a
                    href="/cv-deniz-topuz.pdf"
                    className="btn btn-secondary"
                    download
                  >
                    Download CV
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

