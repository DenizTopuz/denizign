import Link from "next/link";

const footerLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  const year = 2026;

  return (
    <footer
      style={{
        background: "var(--color-ink-900)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingBlock: "var(--space-12)",
      }}
      aria-label="Site footer"
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-8)",
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "var(--space-6)",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              aria-label="Denizign — home"
            >
              <FooterLogo />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                denizign
              </span>
            </Link>

            <nav
              aria-label="Footer navigation"
              style={{ display: "flex", gap: "var(--space-8)", flexWrap: "wrap" }}
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "var(--text-small)",
                    color: "var(--color-ink-300)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div
            aria-hidden="true"
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.08)",
            }}
          />

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "var(--space-4)",
            }}
          >
            <p
              style={{
                fontSize: "var(--text-small)",
                color: "var(--color-ink-500)",
                margin: 0,
              }}
            >
              © {year} Deniz Topuz · From complexity to clarity.
            </p>
            <p
              style={{
                fontSize: "var(--text-small)",
                color: "var(--color-ink-500)",
                margin: 0,
              }}
            >
              Based in the Netherlands
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="var(--color-red-600)" />
      <path d="M8 7h7c3.866 0 7 3.134 7 7s-3.134 7-7 7H8V7z" fill="white" />
      <path
        d="M12 11v6h3c1.657 0 3-1.343 3-3s-1.343-3-3-3h-3z"
        fill="var(--color-red-600)"
      />
    </svg>
  );
}
