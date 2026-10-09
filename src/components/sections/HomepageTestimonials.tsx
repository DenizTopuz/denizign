import {
  testimonials as allTestimonials,
  type Testimonial,
} from "../../../content/testimonials";
import { TestimonialStage } from "./TestimonialStage";
import styles from "./HomepageTestimonials.module.css";

/*
 * Testimonials: external proof, placed between About and Contact.
 *
 * Renders NOTHING while content/testimonials.ts is empty: no label, no empty
 * state, no developer note. When real, agreed recommendations are added the
 * section appears by itself. The server component only renders the frame; the
 * one-at-a-time stage is a small client component. No star ratings, no
 * autoplay.
 *
 * `items` exists only so the layout can be checked; the page uses the default.
 */

/* Featured first, then newest first. */
const ordered = (items: Testimonial[]) =>
  [...items].sort(
    (a, b) =>
      Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
      b.date.localeCompare(a.date),
  );

export function HomepageTestimonials({
  items = allTestimonials,
}: {
  items?: Testimonial[];
}) {
  if (items.length === 0) return null;

  return (
    <section
      id="testimonials"
      className={styles.testimonials}
      aria-labelledby="testimonials-label"
    >
      <h2 id="testimonials-label" className={styles.label}>
        {"// From people I've worked with"}
      </h2>

      <TestimonialStage items={ordered(items)} />
    </section>
  );
}
