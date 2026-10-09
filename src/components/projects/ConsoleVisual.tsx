import styles from "./ProjectVisuals.module.css";

/*
 * CONCEPT VISUAL — Operational Decision Console. Not a real product.
 * An incident list, one incident in detail with a timeline and a system
 * suggestion that waits for a person, and a column of actions. Skeleton bars
 * stand in for content: no statistics, names or outcomes appear.
 */

const incidents = [
  { status: "Escalated", w: 300, critical: true },
  { status: "Investigating", w: 260 },
  { status: "Investigating", w: 320 },
  { status: "Monitoring", w: 240 },
  { status: "Monitoring", w: 280 },
  { status: "Resolved", w: 220 },
];

const events = [
  { tag: "System signal", w: 330 },
  { tag: "", w: 270 },
  { tag: "Operator action", w: 350 },
  { tag: "", w: 240 },
  { tag: "System signal", w: 300 },
  { tag: "", w: 210 },
];

const actions = ["Assign owner", "Escalate", "Add note", "Request information"];

export function ConsoleVisual() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 1600 1200"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Concept interface: a list of incidents with priority and status, one incident in detail with a timeline and a system suggestion awaiting review, and a column of actions."
    >
      <rect width="1600" height="1200" className={styles.fS0} />

      {/* Top bar */}
      <line x1="0" y1="84" x2="1600" y2="84" className={styles.sBorder} strokeWidth="2" />
      <text x="36" y="53" fontSize="21" className={`${styles.tb} ${styles.fInk900}`}>Operations</text>
      <rect x="1000" y="25" width="340" height="34" rx="17" className={styles.fBorder} />
      <rect x="1372" y="24" width="104" height="36" rx="18" className={styles.sBorder} strokeWidth="2" />
      <circle cx="1398" cy="42" r="6" className={styles.fInk900} />
      <text x="1414" y="48" fontSize="15" className={`${styles.tb} ${styles.fInk900}`}>Live</text>
      <circle cx="1536" cy="42" r="18" className={styles.fInk900} />

      {/* Left: incident list */}
      <rect x="0" y="85" width="480" height="1115" className={styles.fS50} />
      <line x1="480" y1="85" x2="480" y2="1200" className={styles.sBorder} strokeWidth="2" />
      <text x="36" y="132" fontSize="19" className={`${styles.tb} ${styles.fInk900}`}>Incidents</text>
      <rect x="36" y="152" width="58" height="32" rx="16" className={styles.fInk900} />
      <text x="65" y="173" textAnchor="middle" fontSize="14" className={`${styles.tb} ${styles.fS0}`}>All</text>
      <rect x="104" y="152" width="136" height="32" rx="16" className={styles.sBorder} strokeWidth="2" />
      <text x="172" y="173" textAnchor="middle" fontSize="14" className={`${styles.t} ${styles.fInk500}`}>Needs review</text>
      <rect x="250" y="152" width="68" height="32" rx="16" className={styles.sBorder} strokeWidth="2" />
      <text x="284" y="173" textAnchor="middle" fontSize="14" className={`${styles.t} ${styles.fInk500}`}>Mine</text>

      {incidents.map((incident, i) => {
        const y = 210 + i * 150;
        return (
          <g key={i}>
            {i === 0 ? (
              <rect x="0" y={y} width="480" height="150" className={styles.fS0} />
            ) : null}
            <rect
              x="0"
              y={y}
              width="6"
              height="150"
              className={incident.critical ? styles.fAccent : i < 3 ? styles.fInk900 : styles.fInk300}
            />
            <rect x="36" y={y + 28} width={incident.w} height="14" rx="7" className={`${styles.fInk900} ${styles.op60}`} />
            <rect x="36" y={y + 58} width={incident.w + 70 > 410 ? 410 : incident.w + 70} height="10" rx="5" className={styles.fBorder} />
            <rect x="404" y={y + 28} width="44" height="10" rx="5" className={styles.fBorder} />
            <circle cx="42" cy={y + 106} r="5" className={incident.critical ? styles.fAccent : styles.fInk300} />
            <text
              x="56"
              y={y + 111}
              fontSize="14"
              className={`${styles.tb} ${incident.critical ? styles.fAccent : styles.fInk500}`}
            >
              {incident.status}
            </text>
            <line x1="0" y1={y + 150} x2="480" y2={y + 150} className={styles.sBorder} strokeWidth="1.5" />
          </g>
        );
      })}

      {/* Centre: incident in detail */}
      <rect x="520" y="122" width="400" height="24" rx="12" className={`${styles.fInk900} ${styles.op60}`} />
      <rect x="960" y="108" width="122" height="38" rx="19" className={styles.sAccent} strokeWidth="2" />
      <text x="1021" y="133" textAnchor="middle" fontSize="15" className={`${styles.tb} ${styles.fAccent}`}>Escalated</text>

      <text x="520" y="196" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>STATUS</text>
      <text x="520" y="222" fontSize="16" className={`${styles.tb} ${styles.fInk900}`}>Escalated</text>
      <text x="720" y="196" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>PRIORITY</text>
      <text x="720" y="222" fontSize="16" className={`${styles.tb} ${styles.fInk900}`}>High</text>
      <text x="920" y="196" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>OWNER</text>
      <rect x="920" y="208" width="110" height="14" rx="7" className={`${styles.fInk900} ${styles.op60}`} />

      {/* System suggestion: waits for a person */}
      <rect x="520" y="262" width="562" height="212" rx="10" className={styles.fS50} />
      <rect x="520" y="262" width="562" height="212" rx="10" className={styles.sBorder} strokeWidth="2" />
      <text x="548" y="300" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>SYSTEM SUGGESTION · NEEDS REVIEW</text>
      <rect x="548" y="322" width="480" height="11" rx="5.5" className={`${styles.fInk900} ${styles.op45}`} />
      <rect x="548" y="346" width="420" height="11" rx="5.5" className={`${styles.fInk900} ${styles.op45}`} />
      <rect x="548" y="370" width="300" height="11" rx="5.5" className={`${styles.fInk900} ${styles.op45}`} />
      <rect x="548" y="412" width="122" height="44" rx="8" className={styles.fInk900} />
      <text x="609" y="440" textAnchor="middle" fontSize="16" className={`${styles.tb} ${styles.fS0}`}>Review</text>
      <rect x="684" y="412" width="122" height="44" rx="8" className={styles.sBorder} strokeWidth="2" />
      <text x="745" y="440" textAnchor="middle" fontSize="16" className={`${styles.tb} ${styles.fInk900}`}>Dismiss</text>
      <text x="1056" y="440" textAnchor="end" fontSize="13" className={`${styles.t} ${styles.fInk500}`}>Awaiting your decision</text>

      {/* Timeline */}
      <text x="520" y="546" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>TIMELINE</text>
      <line x1="548" y1="590" x2="548" y2="1118" className={styles.sBorder} strokeWidth="2" />
      {events.map((event, i) => {
        const y = 600 + i * 96;
        return (
          <g key={i}>
            <circle cx="548" cy={y} r="9" className={i === 0 ? styles.fAccent : styles.fS0} />
            {i === 0 ? null : (
              <circle cx="548" cy={y} r="9" className={styles.sInk900} strokeWidth="2.5" />
            )}
            <rect x="584" y={y - 6} width="58" height="10" rx="5" className={styles.fBorder} />
            <rect x="584" y={y + 18} width={event.w} height="13" rx="6.5" className={`${styles.fInk900} ${styles.op60}`} />
            <rect x="584" y={y + 42} width={Math.round(event.w * 0.72)} height="10" rx="5" className={styles.fBorder} />
            {event.tag ? (
              <g>
                <rect x="664" y={y - 15} width={event.tag === "Operator action" ? 138 : 118} height="26" rx="13" className={styles.fS100} />
                <text
                  x={664 + (event.tag === "Operator action" ? 69 : 59)}
                  y={y + 3}
                  textAnchor="middle"
                  fontSize="12"
                  className={`${styles.tb} ${styles.fInk500}`}
                >
                  {event.tag}
                </text>
              </g>
            ) : null}
          </g>
        );
      })}

      {/* Right: actions and context */}
      <line x1="1120" y1="85" x2="1120" y2="1200" className={styles.sBorder} strokeWidth="2" />
      <text x="1152" y="132" fontSize="19" className={`${styles.tb} ${styles.fInk900}`}>Actions</text>
      {actions.map((label, i) => {
        const y = 156 + i * 74;
        const primary = i === 0;
        return (
          <g key={label}>
            <rect x="1152" y={y} width="416" height="58" rx="8" className={primary ? styles.fInk900 : styles.fS0} />
            {primary ? null : (
              <rect x="1152" y={y} width="416" height="58" rx="8" className={styles.sBorder} strokeWidth="2" />
            )}
            <text x="1178" y={y + 36} fontSize="16" className={`${styles.tb} ${primary ? styles.fS0 : styles.fInk900}`}>{label}</text>
            <text x="1540" y={y + 37} textAnchor="end" fontSize="18" className={`${styles.tb} ${primary ? styles.fS0 : styles.fInk500}`}>›</text>
          </g>
        );
      })}

      <text x="1152" y="520" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>CONTEXT</text>
      <rect x="1152" y="544" width="416" height="200" rx="8" className={styles.fS100} />
      <g className={`${styles.sInk300} ${styles.round}`} strokeWidth="5">
        <path d="M1152 680 C1230 660 1290 620 1350 600 S1480 560 1568 540" />
        <path d="M1280 744 C1290 690 1330 650 1380 600 S1420 560 1430 544" />
      </g>
      <circle cx="1352" cy="600" r="11" className={styles.fAccent} />
      <circle cx="1352" cy="600" r="20" className={styles.sAccent} strokeWidth="2" opacity="0.5" />

      <text x="1152" y="788" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>RELATED</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="1160" cy={820 + i * 40} r="5" className={styles.fInk300} />
          <rect x="1180" y={814 + i * 40} width={[260, 220, 300][i]} height="11" rx="5.5" className={`${styles.fInk900} ${styles.op45}`} />
        </g>
      ))}

      <text x="1152" y="974" fontSize="12" className={`${styles.cap} ${styles.fInk500}`}>AUDIT HISTORY</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="1154" y={1004 + i * 42} width="10" height="10" rx="2" className={styles.fInk300} />
          <rect x="1180" y={1003 + i * 42} width={[300, 240, 280][i]} height="11" rx="5.5" className={styles.fBorder} />
        </g>
      ))}
    </svg>
  );
}
