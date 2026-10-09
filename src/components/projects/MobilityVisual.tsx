import styles from "./ProjectVisuals.module.css";

/*
 * CONCEPT VISUAL — Mobility Intelligence Platform. Not a real product.
 * A map-first interface: filters left, map in the middle, comparison right.
 * The only red in the image is the route and the point where A and B differ.
 */

/* Small deterministic scatter for the data layer (no random at render time). */
function scatter(count: number) {
  const points: { x: number; y: number; r: number }[] = [];
  let seed = 7;
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < count; i++) {
    points.push({
      x: 330 + next() * 820,
      y: 100 + next() * 860,
      r: 2 + next() * 3.2,
    });
  }
  return points;
}

const dots = scatter(54);

const verticals = [400, 500, 600, 700, 800, 900, 1000, 1100];
const horizontals = [160, 260, 360, 460, 560, 660, 760, 860, 960];

const toggles = [
  { label: "Flow", on: true },
  { label: "Density", on: true },
  { label: "Access", on: false },
  { label: "Incidents", on: false },
];

const histogram = [26, 40, 34, 58, 72, 64, 90, 78, 52, 46, 60, 38];

const compare = [
  { label: "FLOW", a: 320, b: 200 },
  { label: "DENSITY", a: 180, b: 290 },
  { label: "ACCESS", a: 260, b: 230 },
];

export function MobilityVisual() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Concept interface: a map with network lines and data layers, filters on the left and a side-by-side comparison of two locations on the right."
    >
      <rect width="1600" height="1000" className={styles.fInk900} />

      {/* Map ground: faint grid */}
      <g className={`${styles.sInk700} ${styles.op30}`} strokeWidth="1">
        {verticals.map((x) => (
          <line key={`v${x}`} x1={x} y1="64" x2={x} y2="1000" />
        ))}
        {horizontals.map((y) => (
          <line key={`h${y}`} x1="300" y1={y} x2="1180" y2={y} />
        ))}
      </g>

      {/* Density areas (flat shapes) */}
      <g className={`${styles.fInk700} ${styles.op60}`}>
        <circle cx="700" cy="520" r="130" />
        <circle cx="900" cy="420" r="92" />
        <circle cx="520" cy="730" r="84" />
        <circle cx="1010" cy="660" r="72" />
        <circle cx="440" cy="300" r="64" />
      </g>

      {/* Secondary streets */}
      <g className={`${styles.sInk700} ${styles.round}`} strokeWidth="3.5">
        <path d="M300 520 C520 500 700 560 900 540 S1100 480 1180 470" />
        <path d="M560 64 C580 220 640 340 700 440" />
        <path d="M1040 64 C1020 200 1060 320 1180 400" />
        <path d="M300 880 C520 860 760 900 980 820 S1120 780 1180 760" />
        <path d="M380 64 C420 200 520 250 600 330" />
        <path d="M640 1000 C700 920 760 880 840 860" />
        <path d="M1100 1000 C1090 920 1120 860 1180 840" />
      </g>

      {/* Arterials */}
      <g className={`${styles.sInk700} ${styles.round}`} strokeWidth="10">
        <path d="M300 700 C520 640 640 560 760 500 S1000 340 1180 300" />
        <path d="M420 1000 C470 860 560 780 640 700 S800 520 820 400 S900 180 940 64" />
        <path d="M300 300 C480 340 620 380 760 500 S980 700 1180 760" />
      </g>

      {/* Data points */}
      <g className={`${styles.fInk300} ${styles.op60}`}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} />
        ))}
      </g>

      {/* Location areas A and B */}
      <path
        d="M560 330 L760 290 L860 400 L800 520 L620 520 Z"
        className={`${styles.sS50} ${styles.dash}`}
        strokeWidth="2"
        fill="var(--color-surface-50)"
        fillOpacity="0.06"
      />
      <path
        d="M820 700 L1000 660 L1080 760 L980 860 L820 840 Z"
        className={`${styles.sInk300} ${styles.dash}`}
        strokeWidth="2"
        fill="var(--color-ink-300)"
        fillOpacity="0.05"
      />

      {/* Route (the one red line on the map) */}
      <path
        d="M380 850 C520 760 640 700 760 560 S980 380 1120 250"
        className={`${styles.sAccent} ${styles.round}`}
        strokeWidth="5"
      />
      <circle cx="380" cy="850" r="9" className={styles.fInk900} />
      <circle
        cx="380"
        cy="850"
        r="9"
        className={styles.sS50}
        strokeWidth="3"
      />
      <circle cx="1120" cy="250" r="10" className={styles.fAccent} />

      {/* Pins */}
      <g>
        <rect x="518" y="262" width="112" height="34" rx="6" className={styles.fS50} />
        <text x="574" y="284" textAnchor="middle" fontSize="14" className={`${styles.tb} ${styles.fInk900}`}>
          Location A
        </text>
        <rect x="1000" y="612" width="112" height="34" rx="6" className={styles.fInk300} />
        <text x="1056" y="634" textAnchor="middle" fontSize="14" className={`${styles.tb} ${styles.fInk900}`}>
          Location B
        </text>
      </g>

      {/* Connectors from locations to the comparison */}
      <g className={`${styles.sInk500} ${styles.op60}`} strokeWidth="1.5">
        <path d="M630 279 L1150 279 L1150 170 L1180 170" />
        <path d="M1112 629 L1150 629 L1150 460 L1180 460" />
      </g>

      {/* Top bar */}
      <line x1="300" y1="64" x2="1600" y2="64" className={styles.sInk700} strokeWidth="1.5" />
      <text x="330" y="40" fontSize="15" className={`${styles.tb} ${styles.fS50}`}>Map</text>
      <rect x="328" y="58" width="42" height="3" className={styles.fAccent} />
      <text x="418" y="40" fontSize="15" className={`${styles.tb} ${styles.fInk300}`}>Compare</text>
      <text x="528" y="40" fontSize="15" className={`${styles.tb} ${styles.fInk300}`}>Table</text>
      <rect x="900" y="17" width="240" height="30" rx="15" className={`${styles.fInk700} ${styles.op60}`} />

      {/* Left panel: filters */}
      <rect x="0" y="0" width="300" height="1000" className={`${styles.fInk700} ${styles.op45}`} />
      <line x1="300" y1="0" x2="300" y2="1000" className={styles.sInk700} strokeWidth="1.5" />
      <text x="28" y="42" fontSize="17" className={`${styles.tb} ${styles.fS50}`}>Filters</text>

      <text x="28" y="108" fontSize="12" className={`${styles.cap} ${styles.fInk300}`}>LAYERS</text>
      {toggles.map((t, i) => {
        const y = 134 + i * 46;
        return (
          <g key={t.label}>
            <rect x="28" y={y} width="40" height="22" rx="11" className={t.on ? styles.fS50 : styles.fInk700} />
            <circle cx={t.on ? 57 : 39} cy={y + 11} r="8" className={t.on ? styles.fInk900 : styles.fInk500} />
            <text x="84" y={y + 16} fontSize="15" className={`${styles.t} ${t.on ? styles.fS50 : styles.fInk300}`}>
              {t.label}
            </text>
          </g>
        );
      })}

      <text x="28" y="360" fontSize="12" className={`${styles.cap} ${styles.fInk300}`}>TIME RANGE</text>
      <g>
        {histogram.map((h, i) => (
          <rect
            key={i}
            x={28 + i * 22}
            y={450 - h}
            width="14"
            height={h}
            rx="2"
            className={i >= 4 && i <= 8 ? styles.fS50 : styles.fInk500}
          />
        ))}
        <line x1="28" y1="470" x2="272" y2="470" className={styles.sInk500} strokeWidth="2" />
        <line x1="116" y1="470" x2="204" y2="470" className={styles.sS50} strokeWidth="4" />
        <circle cx="116" cy="470" r="9" className={styles.fS50} />
        <circle cx="204" cy="470" r="9" className={styles.fS50} />
      </g>

      <text x="28" y="540" fontSize="12" className={`${styles.cap} ${styles.fInk300}`}>AREA</text>
      <g>
        <rect x="28" y="560" width="86" height="34" rx="17" className={styles.fS50} />
        <text x="71" y="582" textAnchor="middle" fontSize="14" className={`${styles.tb} ${styles.fInk900}`}>Region</text>
        <rect x="124" y="560" width="96" height="34" rx="17" className={styles.sInk500} strokeWidth="1.5" />
        <text x="172" y="582" textAnchor="middle" fontSize="14" className={`${styles.t} ${styles.fInk300}`}>Corridor</text>
        <rect x="28" y="604" width="72" height="34" rx="17" className={styles.sInk500} strokeWidth="1.5" />
        <text x="64" y="626" textAnchor="middle" fontSize="14" className={`${styles.t} ${styles.fInk300}`}>Zone</text>
      </g>
      <text x="28" y="956" fontSize="14" className={`${styles.tb} ${styles.fInk300}`}>Reset filters</text>

      {/* Right panel: comparison */}
      <rect x="1180" y="0" width="420" height="1000" className={`${styles.fInk700} ${styles.op45}`} />
      <line x1="1180" y1="0" x2="1180" y2="1000" className={styles.sInk700} strokeWidth="1.5" />
      <text x="1210" y="42" fontSize="17" className={`${styles.tb} ${styles.fS50}`}>Compare</text>
      <rect x="1478" y="20" width="26" height="26" rx="6" className={styles.fS50} />
      <text x="1491" y="39" textAnchor="middle" fontSize="14" className={`${styles.tb} ${styles.fInk900}`}>A</text>
      <rect x="1514" y="20" width="26" height="26" rx="6" className={styles.fInk300} />
      <text x="1527" y="39" textAnchor="middle" fontSize="14" className={`${styles.tb} ${styles.fInk900}`}>B</text>

      {compare.map((c, i) => {
        const y = 120 + i * 96;
        return (
          <g key={c.label}>
            <text x="1210" y={y} fontSize="12" className={`${styles.cap} ${styles.fInk300}`}>{c.label}</text>
            <rect x="1210" y={y + 14} width={c.a} height="10" rx="5" className={styles.fS50} />
            <rect x="1210" y={y + 34} width={c.b} height="10" rx="5" className={styles.fInk500} />
          </g>
        );
      })}

      <text x="1210" y="440" fontSize="12" className={`${styles.cap} ${styles.fInk300}`}>OVER TIME</text>
      <line x1="1210" y1="640" x2="1570" y2="640" className={styles.sInk500} strokeWidth="1.5" />
      <path
        d="M1210 600 C1260 560 1300 590 1340 520 S1420 480 1490 450 S1560 410 1570 396"
        className={`${styles.sS50} ${styles.round}`}
        strokeWidth="3"
      />
      <path
        d="M1210 612 C1270 604 1310 574 1350 584 S1430 548 1490 566 S1560 530 1570 518"
        className={`${styles.sInk500} ${styles.round}`}
        strokeWidth="3"
      />
      <line x1="1490" y1="460" x2="1490" y2="640" className={styles.sAccent} strokeWidth="2" />
      <circle cx="1490" cy="450" r="7" className={styles.fAccent} />
      <text x="1502" y="478" fontSize="13" className={`${styles.tb} ${styles.fAccent}`}>Difference</text>

      <text x="1210" y="712" fontSize="12" className={`${styles.cap} ${styles.fInk300}`}>DECISION NOTE</text>
      <rect x="1210" y="732" width="360" height="9" rx="4.5" className={`${styles.fInk500} ${styles.op60}`} />
      <rect x="1210" y="756" width="320" height="9" rx="4.5" className={`${styles.fInk500} ${styles.op60}`} />
      <rect x="1210" y="780" width="210" height="9" rx="4.5" className={`${styles.fInk500} ${styles.op60}`} />

      <rect x="1210" y="880" width="190" height="52" rx="8" className={styles.fS50} />
      <text x="1305" y="912" textAnchor="middle" fontSize="16" className={`${styles.tb} ${styles.fInk900}`}>Export</text>
      <rect x="1416" y="880" width="154" height="52" rx="8" className={styles.sInk500} strokeWidth="1.5" />
      <text x="1493" y="912" textAnchor="middle" fontSize="16" className={`${styles.tb} ${styles.fS50}`}>Save view</text>
    </svg>
  );
}
