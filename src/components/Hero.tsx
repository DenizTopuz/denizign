import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "640px",
        overflow: "hidden",
        background: "var(--color-surface-100)",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {/* Left content panel */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(1.5rem, 4vw, 3rem) 0 clamp(1.5rem, 4vw, 3rem) var(--page-padding)",
          width: "clamp(260px, 42vw, 540px)",
          flexShrink: 0,
        }}
      >
        {/* Top: vertical tagline */}
        <div
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            fontSize: "var(--text-label)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-ink-300)",
            userSelect: "none",
          }}
        >
          Product designer
        </div>

        {/* Middle: main content */}
        <div>
          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-10)",
              marginBottom: "var(--space-10)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "var(--color-ink-900)",
                  margin: 0,
                }}
              >
                +12
              </p>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--color-ink-500)",
                  marginTop: "0.25rem",
                  maxWidth: "none",
                }}
              >
                Years experience
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "var(--color-ink-900)",
                  margin: 0,
                }}
              >
                +40
              </p>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--color-ink-500)",
                  marginTop: "0.25rem",
                  maxWidth: "none",
                }}
              >
                Projects completed
              </p>
            </div>
          </div>

          {/* Main heading */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              color: "var(--color-ink-900)",
              margin: "0 0 var(--space-6)",
            }}
          >
            Hallo.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-ink-500)",
              lineHeight: 1.55,
              maxWidth: "38ch",
              margin: 0,
            }}
          >
            — Het is Deniz, een UX Lead en product designer uit Nederland.
          </p>
        </div>

        {/* Bottom: CTA + scroll */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          <div
            style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}
          >
            <a href="#work" className="btn btn-primary">
              Bekijk mijn werk
            </a>
            <a
              href="mailto:hello@denizign.nl"
              className="btn btn-secondary"
            >
              Neem contact op
            </a>
          </div>
          <p
            style={{
              fontSize: "var(--text-small)",
              color: "var(--color-ink-300)",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            Scroll down
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1.5v11M2.5 8l4.5 4.5L11.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>
        </div>
      </div>

      {/* Right: portrait — full height, anchored right */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "clamp(300px, 62vw, 900px)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        <HeroPortrait />
      </div>

      {/* Subtle left-side gradient to blend portrait into bg */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "clamp(300px, 62vw, 900px)",
          background:
            "linear-gradient(to right, var(--color-surface-100) 0%, transparent 28%)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />
    </section>
  );
}
