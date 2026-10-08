import Image from "next/image";
import Link from "next/link";
import styles from "./SiteNavigation.module.css";

const links = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

type SiteNavigationProps = {
  /** light: on warm white. dark: on near-black. blend: inverts over photography. */
  tone?: "light" | "dark" | "blend";
  /** Align to the viewport gutters instead of the 1280px container. */
  wide?: boolean;
  /** A larger mark with the name "Denizign" set next to it. */
  brand?: boolean;
};

export function SiteNavigation({
  tone = "light",
  wide = false,
  brand = false,
}: SiteNavigationProps) {
  return (
    <header className={wide ? styles.wide : "container"}>
      <div className={`${styles.bar} ${styles[tone]}`}>
        <Link
          href="/"
          className={`${styles.logo} ${brand ? styles.brand : ""}`}
          aria-label="Denizign — home"
        >
          <Image
            src="/brand/denizign-mark-red.svg"
            alt=""
            width={270}
            height={218}
            className={styles.mark}
          />
          {brand ? <span className={styles.name}>Denizign</span> : null}
        </Link>
        <nav aria-label="Primary">
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
