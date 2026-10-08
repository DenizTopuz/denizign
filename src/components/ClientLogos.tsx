"use client";

import { ScrollReveal } from "./ScrollReveal";

const clients = [
  { name: "LVNL", src: "https://www.denizign.nl/wp-content/uploads/2021/04/LVNLbw-300x147.png" },
  { name: "Engie", src: "https://www.denizign.nl/wp-content/uploads/2021/04/Engie_bw-300x147.png" },
  { name: "IHC", src: "https://www.denizign.nl/wp-content/uploads/2021/04/IHC_bw-300x147.png" },
  { name: "Mazars", src: "https://www.denizign.nl/wp-content/uploads/2021/04/Mazars_bw-300x147.png" },
  { name: "ProRail", src: "https://www.denizign.nl/wp-content/uploads/2021/04/ProRail_bw-300x147.png" },
  { name: "PWN", src: "https://www.denizign.nl/wp-content/uploads/2021/04/PWN_bw-300x147.png" },
  { name: "Albert Heijn", src: "https://www.denizign.nl/wp-content/uploads/2021/04/AHak_bw-1-300x147.png" },
  { name: "Jumbo", src: "https://www.denizign.nl/wp-content/uploads/2021/04/Jumbo_bw-1-300x147.png" },
];

export function ClientLogos() {
  return (
    <section
      aria-label="Clients"
      style={{
        paddingBlock: "var(--space-16)",
        borderTop: "var(--border-default)",
        borderBottom: "var(--border-default)",
        background: "var(--color-surface-0)",
      }}
    >
      <div className="container">
        <ScrollReveal>
          <p
            className="eyebrow"
            style={{
              marginBottom: "var(--space-10)",
              textAlign: "center",
            }}
          >
            I was lucky to work with them
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-6)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {clients.map((client) => (
              <div
                key={client.name}
                style={{
                  width: "120px",
                  height: "58px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.5,
                  filter: "grayscale(1)",
                  transition: "opacity var(--duration-base) var(--ease-out)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.5";
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.src}
                  alt={client.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
