import styles from "./ProjectVisuals.module.css";

/*
 * CONCEPT VISUAL — Multi-product Design System. Not a real product.
 * Documentation for one component, the tokens behind it, and how three
 * products draw on the same system. Deliberately quiet: ink, off-white and a
 * single red focus ring.
 */

const nav = [
  "Foundations",
  "Tokens",
  "Components",
  "Patterns",
  "Accessibility",
  "Governance",
];

const swatches = [
  { name: "ink-900", cls: styles.fInk900 },
  { name: "ink-700", cls: styles.fInk700 },
  { name: "ink-500", cls: styles.fInk500 },
  { name: "ink-300", cls: styles.fInk300 },
  { name: "surface-100", cls: styles.fS100, border: true },
  { name: "red-600", cls: styles.fAccent },
];

export function SystemVisual() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Concept interface: design-system documentation for a button component with variants and states, the colour tokens behind it, and a diagram of three products drawing on one shared system."
    >
      <rect width="1600" height="1000" className={styles.fS0} />

      {/* Sidebar */}
      <rect x="0" y="0" width="300" height="1000" className={styles.fS50} />
      <line x1="300" y1="0" x2="300" y2="1000" className={styles.sBorder} strokeWidth="2" />
      <text x="32" y="62" fontSize="19" className={`${styles.tb} ${styles.fInk900}`}>Design system</text>
      {nav.map((label, i) => {
        const y = 116 + i * 52;
        const active = label === "Components";
        return (
          <g key={label}>
            {active ? <rect x="16" y={y} width="268" height="40" rx="8" className={styles.fS100} /> : null}
            <text x="36" y={y + 26} fontSize="16" className={`${active ? styles.tb : styles.t} ${active ? styles.fInk900 : styles.fInk500}`}>
              {label}
            </text>
          </g>
        );
      })}

      {/* Page header */}
      <text x="340" y="62" fontSize="14" className={`${styles.t} ${styles.fInk500}`}>Components  /  Button</text>
      <text x="340" y="146" fontSize="64" className={`${styles.td} ${styles.fInk900}`}>Button</text>
      <rect x="340" y="176" width="620" height="12" rx="6" className={styles.fBorder} />
      <rect x="340" y="200" width="460" height="12" rx="6" className={styles.fBorder} />
      <text x="340" y="268" fontSize="16" className={`${styles.tb} ${styles.fInk900}`}>Overview</text>
      <rect x="340" y="280" width="84" height="3" className={styles.fInk900} />
      <text x="470" y="268" fontSize="16" className={`${styles.t} ${styles.fInk500}`}>Usage</text>
      <text x="556" y="268" fontSize="16" className={`${styles.t} ${styles.fInk500}`}>Code</text>
      <text x="634" y="268" fontSize="16" className={`${styles.t} ${styles.fInk500}`}>Accessibility</text>
      <line x1="340" y1="283" x2="1140" y2="283" className={styles.sBorder} strokeWidth="2" />

      {/* Variants and states */}
      <rect x="340" y="324" width="800" height="300" rx="10" className={styles.fS50} />
      <rect x="340" y="324" width="800" height="300" rx="10" className={styles.sBorder} strokeWidth="2" />
      <rect x="376" y="360" width="150" height="52" rx="8" className={styles.fInk900} />
      <text x="451" y="392" textAnchor="middle" fontSize="16" className={`${styles.tb} ${styles.fS0}`}>Button</text>
      <rect x="548" y="360" width="150" height="52" rx="8" className={styles.fS0} />
      <rect x="548" y="360" width="150" height="52" rx="8" className={styles.sBorder} strokeWidth="2" />
      <text x="623" y="392" textAnchor="middle" fontSize="16" className={`${styles.tb} ${styles.fInk900}`}>Button</text>
      <rect x="720" y="360" width="150" height="52" rx="8" className={styles.fAccent} />
      <text x="795" y="392" textAnchor="middle" fontSize="16" className={`${styles.tb} ${styles.fS0}`}>Button</text>
      <text x="892" y="392" fontSize="16" className={`${styles.tb} ${styles.fInk900}`}>Button  →</text>
      <line x1="892" y1="400" x2="954" y2="400" className={styles.sAccent} strokeWidth="2" />

      <line x1="376" y1="452" x2="1104" y2="452" className={styles.sBorder} strokeWidth="1.5" />
      {["DEFAULT", "HOVER", "FOCUS", "DISABLED"].map((label, i) => {
        const x = 376 + i * 182;
        const fill = i === 1 ? styles.fInk700 : i === 3 ? styles.fBorder : styles.fInk900;
        return (
          <g key={label}>
            <rect x={x} y="484" width="132" height="44" rx="8" className={fill} />
            {i === 2 ? (
              <rect x={x - 5} y="479" width="142" height="54" rx="11" className={styles.sAccent} strokeWidth="2.5" />
            ) : null}
            <text
              x={x + 66}
              y="512"
              textAnchor="middle"
              fontSize="15"
              className={`${styles.tb} ${i === 3 ? styles.fInk300 : styles.fS0}`}
            >
              Button
            </text>
            <text x={x} y="566" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>{label}</text>
          </g>
        );
      })}

      {/* Tokens behind it */}
      <text x="340" y="684" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>TOKENS</text>
      {swatches.map((swatch, i) => {
        const x = 340 + i * 134;
        return (
          <g key={swatch.name}>
            <rect x={x} y="706" width="64" height="64" rx="10" className={swatch.cls} />
            {swatch.border ? (
              <rect x={x} y="706" width="64" height="64" rx="10" className={styles.sBorder} strokeWidth="2" />
            ) : null}
            <text x={x} y="800" fontSize="13" className={`${styles.t} ${styles.fInk500}`}>{swatch.name}</text>
          </g>
        );
      })}
      <rect x="340" y="852" width="620" height="11" rx="5.5" className={styles.fBorder} />
      <rect x="340" y="876" width="520" height="11" rx="5.5" className={styles.fBorder} />
      <rect x="340" y="900" width="360" height="11" rx="5.5" className={styles.fBorder} />

      {/* One system, many products */}
      <rect x="1180" y="0" width="420" height="1000" className={styles.fS50} />
      <line x1="1180" y1="0" x2="1180" y2="1000" className={styles.sBorder} strokeWidth="2" />
      <text x="1212" y="62" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>SHARED ACROSS</text>

      <g className={`${styles.sInk300} ${styles.round}`} strokeWidth="2">
        <path d="M1296 232 L1296 300 L1390 360" />
        <path d="M1484 232 L1484 300 L1390 360" />
        <path d="M1390 232 L1390 360" />
      </g>
      {["Product A", "Product B", "Product C"].map((label, i) => {
        const cx = [1296, 1390, 1484][i];
        return (
          <g key={label}>
            <rect x={cx - 42} y="170" width="84" height="62" rx="8" className={styles.fS0} />
            <rect x={cx - 42} y="170" width="84" height="62" rx="8" className={styles.sBorder} strokeWidth="2" />
            <rect x={cx - 28} y="184" width="56" height="8" rx="4" className={styles.fBorder} />
            <rect x={cx - 28} y="200" width="38" height="8" rx="4" className={styles.fBorder} />
            <text x={cx} y="258" textAnchor="middle" fontSize="12" className={`${styles.t} ${styles.fInk500}`}>{label}</text>
          </g>
        );
      })}
      <rect x="1295" y="360" width="190" height="66" rx="10" className={styles.fInk900} />
      <text x="1390" y="400" textAnchor="middle" fontSize="17" className={`${styles.tb} ${styles.fS0}`}>One system</text>

      <text x="1212" y="520" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>ACCESSIBILITY</text>
      <rect x="1212" y="544" width="190" height="42" rx="21" className={styles.fS0} />
      <rect x="1212" y="544" width="190" height="42" rx="21" className={styles.sBorder} strokeWidth="2" />
      <circle cx="1238" cy="565" r="9" className={styles.fInk900} />
      <path d="M1233 565 L1237 569 L1244 561" className={`${styles.sS50} ${styles.round}`} strokeWidth="2.2" />
      <text x="1256" y="571" fontSize="14" className={`${styles.tb} ${styles.fInk900}`}>WCAG 2.2 AA</text>

      <text x="1212" y="680" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>CONTRIBUTION</text>
      <line x1="1232" y1="730" x2="1548" y2="730" className={styles.sBorder} strokeWidth="2" />
      {["Propose", "Review", "Release"].map((label, i) => {
        const cx = 1232 + i * 158;
        return (
          <g key={label}>
            <circle cx={cx} cy="730" r="13" className={i === 2 ? styles.fInk900 : styles.fS0} />
            {i === 2 ? null : <circle cx={cx} cy="730" r="13" className={styles.sInk900} strokeWidth="2.5" />}
            <text x={cx} y="772" textAnchor="middle" fontSize="13" className={`${styles.tb} ${styles.fInk900}`}>{label}</text>
          </g>
        );
      })}
      <rect x="1212" y="832" width="330" height="11" rx="5.5" className={styles.fBorder} />
      <rect x="1212" y="856" width="260" height="11" rx="5.5" className={styles.fBorder} />
    </svg>
  );
}
