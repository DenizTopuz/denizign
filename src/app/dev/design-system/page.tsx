import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import styles from "./design-system.module.css";

export const metadata: Metadata = {
  title: "Denizign Design System — Visual Playground (internal)",
  description: "Internal visual playground for the Denizign design system.",
  robots: { index: false, follow: false },
};

/* Token values shown on this page are read from tokens.css at build time,
   so the playground cannot drift from the real tokens. */
function readTokens(): Record<string, string> {
  const css = readFileSync(
    join(process.cwd(), "src/styles/tokens.css"),
    "utf8",
  );
  const tokens: Record<string, string> = {};
  for (const match of css.matchAll(/^\s*(--[a-z0-9-]+)\s*:\s*([^;]+);/gm)) {
    tokens[match[1]] = match[2].trim();
  }
  return tokens;
}

const colourNames: [string, string][] = [
  ["--color-ink-900", "Ink 900"],
  ["--color-ink-700", "Ink 700"],
  ["--color-ink-500", "Ink 500"],
  ["--color-ink-300", "Ink 300"],
  ["--color-surface-0", "Surface 0"],
  ["--color-surface-50", "Surface 50"],
  ["--color-surface-100", "Surface 100"],
  ["--color-border", "Border"],
  ["--color-red-600", "Red 600"],
  ["--color-red-700", "Red 700"],
  ["--color-red-100", "Red 100"],
  ["--color-red-50", "Red 50"],
];

const semanticColours: [string, string, string][] = [
  ["--color-bg", "Background", "--color-surface-50"],
  ["--color-surface", "Surface", "--color-surface-0"],
  ["--color-text", "Text", "--color-ink-900"],
  ["--color-text-muted", "Muted text", "--color-ink-500"],
  ["--color-accent", "Accent", "--color-red-600"],
  ["--color-accent-hover", "Accent hover", "--color-red-700"],
];

const spacingSteps: [string, string][] = [
  ["--space-2", "Tight"],
  ["--space-4", "Tight"],
  ["--space-6", "Content"],
  ["--space-8", "Content"],
  ["--space-12", "Content"],
  ["--space-16", "Group"],
  ["--space-24", "Section · mobile"],
  ["--space-36", "Section · desktop"],
  ["--space-48", "Major narrative"],
];

const layers = [
  "User experience",
  "Product",
  "Technology",
  "Design systems",
  "Organisation",
];

const remToPx = (value: string) => {
  const rem = parseFloat(value);
  return Number.isNaN(rem) ? value : `${Math.round(rem * 16)}px`;
};

export default function DesignSystemPlayground() {
  const tokens = readTokens();

  return (
    <div className={styles.page}>
      <main id="main-content">
        {/* Opening */}
        <section
          className={`container ${styles.opening}`}
          aria-labelledby="opening-title"
        >
          <div className={styles.openingBar}>
            <p className={styles.label}>Denizign / Visual system</p>
            <p className={styles.label}>Internal playground · Not for production</p>
          </div>
          <p className={`${styles.label} ${styles.openingEyebrow}`}>
            UX Lead · Product Experience · Systems Thinking
          </p>
          <h1
            id="opening-title"
            className={`${styles.displayXL} ${styles.openingHeadline}`}
          >
            Complex systems.
            <br />
            <span className={styles.accent}>Clear experiences.</span>
          </h1>
          <div className={styles.openingFoot}>
            <p className={styles.lead}>
              A visual playground for clarity, hierarchy, systems thinking and
              product experience.
            </p>
          </div>
        </section>

        {/* 2. Typography */}
        <section
          className={styles.section}
          aria-labelledby="typography-title"
        >
          <div className="container">
            <header className={styles.sectionHead}>
              <h2 id="typography-title" className={styles.sectionTitle}>
                02 — Typography
              </h2>
              <p className={styles.sectionIntro}>
                The scale as it reads in context. Display and headings use
                Manrope; supporting text uses Inter.
              </p>
            </header>

            <div>
              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>Display XL</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-display-xl</span>
                  </p>
                </div>
                <p className={styles.displayXL}>From complexity to clarity.</p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>Display L</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-display-l</span>
                  </p>
                </div>
                <p className={styles.displayL}>
                  Clarity is a design decision.
                </p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>H1</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-h1</span>
                  </p>
                </div>
                <p className={styles.h1}>Designing across the layers.</p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>H2</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-h2</span>
                  </p>
                </div>
                <p className={styles.h2}>
                  Products become clearer when the system around them makes
                  sense.
                </p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>H3</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-h3</span>
                  </p>
                </div>
                <p className={styles.h3}>
                  Users, product, technology and teams.
                </p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>H4</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-h4</span>
                  </p>
                </div>
                <p className={styles.h4}>
                  Understand → Connect → Simplify → Scale
                </p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>Lead</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-lead</span>
                  </p>
                </div>
                <p className={styles.lead}>
                  I connect users, product, technology and teams to turn
                  complexity into clear digital experiences.
                </p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>Body Large</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-body-lg</span>
                  </p>
                </div>
                <p className={styles.bodyLg}>
                  Deniz works on complex digital products and systems and makes
                  them understandable, intuitive and human.
                </p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>Body</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-body</span>
                  </p>
                </div>
                <p className={styles.body}>
                  I work across complex digital products to connect user needs,
                  product decisions and technical reality.
                </p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>Small</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-small</span>
                  </p>
                </div>
                <p className={`${styles.small} ${styles.muted}`}>
                  Metadata, captions and supporting details sit quietly at this
                  size.
                </p>
              </div>

              <div className={styles.specimen}>
                <div className={styles.specimenMeta}>
                  <p className={styles.label}>Label</p>
                  <p className={styles.meta}>
                    <span className={styles.code}>--text-label</span>
                  </p>
                </div>
                <p className={styles.label}>
                  UX Lead · Product Experience · Systems Thinking
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Scale contrast */}
        <section
          className={`${styles.section} ${styles.sectionMajor}`}
          aria-labelledby="contrast-title"
        >
          <div className="container">
            <header className={styles.sectionHead}>
              <h2 id="contrast-title" className={styles.sectionTitle}>
                03 — Scale contrast
              </h2>
            </header>
            <div className={styles.contrast}>
              <p className={styles.displayXL}>
                Complexity
                <br />
                becomes clarity.
              </p>
              <div className={styles.contrastFoot}>
                <p className={styles.label}>Principle 01 / Clarity</p>
                <div className={styles.contrastNote}>
                  <p className={styles.body}>
                    Large type states the idea. Small type explains it. The gap
                    between the two does most of the work.
                  </p>
                  <p className={styles.meta}>
                    One composition, three tiers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Colour */}
        <section className={styles.section} aria-labelledby="colour-title">
          <div className="container">
            <header className={styles.sectionHead}>
              <h2 id="colour-title" className={styles.sectionTitle}>
                04 — Colour system
              </h2>
              <p className={styles.sectionIntro}>
                Raw colours from tokens.css, then the semantic aliases built on
                them.
              </p>
            </header>
            <ul className={styles.swatchGrid}>
              {colourNames.map(([token, name]) => (
                <li key={token} className={styles.swatch}>
                  <span
                    className={styles.swatchChip}
                    style={{ background: `var(${token})` }}
                    aria-hidden="true"
                  />
                  <span className={styles.swatchText}>
                    <span className={styles.swatchName}>{name}</span>
                    <span className={styles.meta}>
                      <span className={styles.code}>
                        {tokens[token]} · {token}
                      </span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <ul className={styles.semanticRow}>
              {semanticColours.map(([token, name, source]) => (
                <li key={token} className={styles.semanticItem}>
                  <span
                    className={styles.semanticChip}
                    style={{ background: `var(${token})` }}
                    aria-hidden="true"
                  />
                  <span className={styles.swatchText}>
                    <span className={styles.swatchName}>{name}</span>
                    <span className={styles.meta}>
                      <span className={styles.code}>→ {source}</span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Red restraint */}
        <section className={styles.section} aria-labelledby="red-title">
          <div className="container">
            <header className={styles.sectionHead}>
              <h2 id="red-title" className={styles.sectionTitle}>
                05 — Red restraint test
              </h2>
            </header>
            <div className={styles.redGrid}>
              <div className={styles.redCase}>
                <p className={styles.label}>Good</p>
                <p className={styles.h1}>
                  Complexity becomes{" "}
                  <span className={styles.accent}>clarity</span>.
                </p>
                <p className={`${styles.small} ${styles.muted}`}>
                  One short phrase carries the accent.
                </p>
              </div>

              <div className={`${styles.redCase} ${styles.redCaseTooMuch}`}>
                <p className={styles.label}>
                  Too much — anti-example, do not use
                </p>
                <p className={styles.redTooMuch}>
                  Complexity becomes clarity when every word, every line and
                  every surface is red.
                </p>
                <p className={`${styles.small} ${styles.muted}`}>
                  A whole paragraph on a filled area makes red the loudest
                  thing on the page, so nothing in particular stands out.
                </p>
              </div>

              <div className={styles.redPrinciple}>
                <p className={styles.label}>Principle</p>
                <p className={styles.displayL}>
                  Red directs attention. It does not fill space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Editorial two-column */}
        <section
          className={styles.section}
          aria-labelledby="editorial-title"
        >
          <div className="container">
            <header className={styles.sectionHead}>
              <h2 id="editorial-title" className={styles.sectionTitle}>
                06 — Editorial two-column layout
              </h2>
            </header>
            <div className={styles.editorial}>
              <div className={styles.editorialLead}>
                <p className={styles.label}>Approach</p>
                <p className={styles.h1}>Working between the layers.</p>
              </div>
              <div className={styles.editorialBody}>
                <p className={styles.h3}>
                  Complex products are rarely one problem. They sit where users,
                  product, technology and the organisation meet.
                </p>
                <p className={`${styles.bodyLg} ${styles.muted}`}>
                  The work is to connect those layers so the whole becomes
                  clearer than any single part.
                </p>
                <ul className={styles.layers}>
                  {layers.map((layer, i) => (
                    <li key={layer} className={styles.layer}>
                      <span className={styles.layerNo}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{layer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Case-study overview */}
        <section className={styles.section} aria-labelledby="case-title">
          <div className="container">
            <div className={styles.case}>
              <div>
                <div className={styles.caseTop}>
                  <h2 id="case-title" className={styles.sectionTitle}>
                    07 — Case study / Example
                  </h2>
                  <p className={styles.label}>Example content · No results</p>
                </div>
                <p className={`${styles.displayXL} ${styles.caseTitle}`}>
                  Complex mobility platform
                </p>
              </div>
              <div className={styles.caseBody}>
                <dl className={styles.facts}>
                  <div className={styles.fact}>
                    <dt className={styles.factTerm}>Role</dt>
                    <dd className={styles.factValue}>UX Lead</dd>
                  </div>
                  <div className={styles.fact}>
                    <dt className={styles.factTerm}>Context</dt>
                    <dd className={styles.factValue}>
                      Data · Maps · Decision support
                    </dd>
                  </div>
                </dl>
                <p className={styles.h3}>
                  Turning a dense operational product into an experience that
                  helps users understand where they are, what they are looking
                  at and what they can do next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Large project imagery */}
        <section
          className={`${styles.section} ${styles.sectionTight}`}
          aria-labelledby="image-title"
        >
          <div className="container">
            <h2 id="image-title" className="sr-only">
              08 — Large project imagery
            </h2>
            <figure className={styles.figure}>
              <div
                className={styles.imagePlaceholder}
                role="img"
                aria-label="Placeholder for future project imagery, 16 to 10"
              >
                <span className={`${styles.label} ${styles.imageMark}`}>
                  08 — Large project imagery
                </span>
                <span className={`${styles.label} ${styles.imageLabel}`}>
                  Project image / 16:10
                </span>
              </div>
              <figcaption className={styles.caption}>
                <p className={styles.label}>Figure 01</p>
                <p className={`${styles.small} ${styles.muted}`}>
                  Caption placement test. The image carries the weight; the
                  caption stays quiet and aligned to the text grid.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 9. Spacing */}
        <section className={styles.section} aria-labelledby="spacing-title">
          <div className="container">
            <header className={styles.sectionHead}>
              <h2 id="spacing-title" className={styles.sectionTitle}>
                09 — Spacing
              </h2>
              <p className={styles.sectionIntro}>
                The intervals that matter, from tight to major narrative
                spacing.
              </p>
            </header>
            <ul className={styles.spacingList}>
              {spacingSteps.map(([token, role]) => (
                <li key={token} className={styles.spacingRow}>
                  <span className={styles.spacingName}>
                    <span className={styles.label}>{role}</span>
                    <span className={styles.meta}>
                      <span className={styles.code}>
                        {token} · {remToPx(tokens[token])}
                      </span>
                    </span>
                  </span>
                  <span
                    className={styles.spacingBar}
                    style={{ width: `var(${token})` }}
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10. Radius and borders */}
        <section className={styles.section} aria-labelledby="radius-title">
          <div className="container">
            <header className={styles.sectionHead}>
              <h2 id="radius-title" className={styles.sectionTitle}>
                10 — Radius and borders
              </h2>
            </header>
            <ul className={styles.radiusRow}>
              {[
                ["--radius-xs", styles.radiusXs],
                ["--radius-sm", styles.radiusSm],
                ["--radius-md", styles.radiusMd],
                ["--radius-lg", styles.radiusLg],
              ].map(([token, shape]) => (
                <li key={token} className={styles.radiusItem}>
                  <span
                    className={`${styles.radiusShape} ${shape}`}
                    aria-hidden="true"
                  />
                  <span className={styles.meta}>
                    <span className={styles.code}>
                      {token} · {tokens[token]}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div className={styles.pillRow}>
              <span className={styles.pill}>Status</span>
              <p className={styles.meta}>
                <span className={styles.code}>--radius-pill</span> · Reserved
                for tags / status only
              </p>
            </div>
            <div className={styles.borderDemo}>
              <p className={styles.meta}>
                <span className={styles.code}>1px · --color-border</span>
              </p>
              <hr className={styles.rule} />
              <p className={`${styles.small} ${styles.muted}`}>
                Structure comes from hairlines and whitespace, not from heavy
                containers or large radii.
              </p>
            </div>
          </div>
        </section>

        {/* 11. Layout widths */}
        <section className={styles.section} aria-labelledby="widths-title">
          <div className="container">
            <header className={styles.sectionHead}>
              <h2 id="widths-title" className={styles.sectionTitle}>
                11 — Layout widths
              </h2>
            </header>
            <div className={styles.widths}>
              <div className={styles.widthFrame}>
                <p className={`${styles.meta} ${styles.widthLabel}`}>
                  Container ·{" "}
                  <span className={styles.code}>
                    --container-max {tokens["--container-max"]}
                  </span>
                </p>
                <div className={styles.widthReading}>
                  <p className={`${styles.meta} ${styles.widthLabel}`}>
                    Reading width ·{" "}
                    <span className={styles.code}>
                      --content-max {tokens["--content-max"]}
                    </span>
                  </p>
                  <p className={styles.bodyLg}>
                    Long-form text stays inside the reading width, even when the
                    layout around it uses the wider container. Lines of roughly
                    55 to 72 characters keep case studies comfortable to read,
                    and leave room for imagery and metadata to use the wider
                    space beside or below the text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Links and focus */}
        <section className={styles.section} aria-labelledby="focus-title">
          <div className="container">
            <header className={styles.sectionHead}>
              <h2 id="focus-title" className={styles.sectionTitle}>
                12 — Links and focus
              </h2>
              <p className={styles.sectionIntro}>
                Press Tab to move through these native elements and check the
                visible focus treatment.
              </p>
            </header>
            <p className={styles.bodyLg}>
              Body copy with a{" "}
              <a className={styles.textLink} href="#focus-title">
                native text link
              </a>{" "}
              shows how the accent behaves inside running text.
            </p>
            <div className={styles.controls}>
              <button type="button" className={styles.button}>
                Primary action
              </button>
              <button
                type="button"
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                Secondary action
              </button>
            </div>
          </div>
        </section>

        {/* 13. Dark section */}
        <section className={styles.dark} aria-labelledby="dark-title">
          <div className="container">
            <div className={styles.darkInner}>
              <div>
                <h2 id="dark-title" className={styles.darkLabel}>
                  13 — Dark-section test
                </h2>
              </div>
              <div className={styles.darkStack}>
                <p className={styles.darkHeadline}>
                  Clarity is the <span className={styles.darkMark}>work</span>.
                </p>
                <p className={styles.darkBody}>
                  An occasional dark moment for a key statement. Near-black
                  ground, light secondary text, one small red accent.
                </p>
                <div className={styles.darkRule}>
                  <p className={styles.darkLabel}>
                    UX Lead · Product Experience · Systems Thinking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. Final principles */}
        <section className={styles.section} aria-labelledby="final-title">
          <div className="container">
            <div className={styles.final}>
              <div className={styles.editorialLead}>
                <h2 id="final-title" className={styles.sectionTitle}>
                  14 — Final visual principles
                </h2>
                <p className={styles.h1}>Denizign should feel:</p>
              </div>
              <ul className={styles.feel}>
                <li className={styles.feelItem}>Clear</li>
                <li className={styles.feelItem}>Editorial</li>
                <li className={styles.feelItem}>Structured</li>
                <li className={styles.feelItem}>Confident</li>
                <li className={styles.feelItem}>Human</li>
                <li className={styles.feelItem}>
                  Technical without feeling cold
                </li>
              </ul>
            </div>
            <p className={`${styles.displayL} ${styles.closing}`}>
              If decoration does not improve clarity, remove it.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.meta}>
            Denizign Design System / Visual playground · internal · noindex
          </p>
        </div>
      </footer>
    </div>
  );
}
