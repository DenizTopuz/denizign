"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(250,250,248,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        transition:
          "background var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)",
      }}
    >
      <div
        className="container"
        style={{
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
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
          <LogoMark />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.0625rem",
              color: "var(--color-ink-900)",
              letterSpacing: "-0.02em",
            }}
          >
            denizign
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          style={{ alignItems: "center", gap: "2.5rem" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "var(--text-small)",
                fontWeight: 500,
                color: "var(--color-ink-500)",
                textDecoration: "none",
                transition: "color var(--duration-fast) var(--ease-out)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--color-ink-900)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--color-ink-500)")
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv-deniz-topuz.pdf"
            className="btn btn-secondary"
            style={{ minHeight: "38px", paddingInline: "1rem", fontSize: "0.875rem" }}
          >
            Download CV
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--color-ink-900)",
          }}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--color-surface-50)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "88px var(--page-padding) var(--space-12)",
          }}
        >
          <nav
            aria-label="Mobile navigation"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "clamp(2rem, 8vw, 3rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--color-ink-900)",
                  textDecoration: "none",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  padding: "0.25rem 0",
                  borderBottom: "1px solid var(--color-border)",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="/cv-deniz-topuz.pdf"
            className="btn btn-primary"
            style={{ marginTop: "var(--space-8)", alignSelf: "flex-start" }}
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://www.denizign.nl/wp-content/uploads/2021/04/Denizign_Beeldlogo_Red-1.png"
      alt=""
      width={22}
      height={28}
      aria-hidden="true"
      style={{ display: "block", objectFit: "contain" }}
    />
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
