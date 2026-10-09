import { layers } from "../../../content/homepage";
import styles from "./HomepageLayers.module.css";

/*
 * Working between the layers: the perspective behind the work.
 * Three levels: a large positioning statement, a short supporting
 * explanation, and the six canonical layers as a ruled sequence.
 *
 * Static on purpose. Every phrase and every layer is its own element
 * (data-phrase / data-layer) so scroll-driven emphasis can be added later
 * without changing the markup. The section works fully without motion.
 */
export function HomepageLayers() {
  return (
    <section
      id="approach"
      className={styles.layers}
      aria-labelledby="layers-label"
    >
      <h2 id="layers-label" className={styles.label}>
        {"// Between the layers"}
      </h2>

      <h3 className={styles.statement}>
        <span data-phrase="1">I make complex digital products </span>
        <span data-phrase="2" className={styles.accent}>
          feel simple.
        </span>
      </h3>

      <div className={styles.support}>
        <p className={styles.lead}>
          The interface is only one layer of the experience.
        </p>
        <p className={styles.copy}>
          <span data-phrase="3">
            Great digital products don&apos;t become complex because of one bad
            screen.
          </span>{" "}
          <span data-phrase="4">
            They become complex when the layers around the experience stop
            connecting.
          </span>{" "}
          <span data-phrase="5">I work between those layers.</span>
        </p>
      </div>

      <div className={styles.system}>
        <p className={styles.caption}>
          Strong digital products depend on the relationship between six layers.
        </p>
        <ol className={styles.list}>
          {layers.map((layer, i) => (
            <li key={layer} data-layer={i + 1} className={styles.item}>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.name}>{layer}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
