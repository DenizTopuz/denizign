# Denizign Motion

Motion is part of the Denizign identity.

It should communicate:

Fragment → Connect → Organise

This represents the core brand idea:

From complexity to clarity.

Motion should never exist purely to impress.

---

## Motion personality

Motion should feel:

- controlled
- precise
- calm
- confident
- smooth
- intentional

Never playful or exaggerated.

---

## Core motion principle

Elements may begin:

- separated
- fragmented
- slightly offset
- visually disconnected

Through interaction or scrolling they may:

- align
- connect
- organise
- reveal hierarchy

The final state should always feel calmer and clearer than the initial state.

---

## Allowed motion

Preferred techniques:

- opacity
- translate
- subtle scale
- clipping / masks
- line reveals
- staggered text
- layout transitions
- controlled image reveals

---

## Avoid

Do not use:

- bouncing
- elastic animation
- excessive parallax
- random rotation
- floating decorative objects
- continuous looping animation
- flashy 3D effects
- animation on every element

---

## Timing

Micro interaction:
140–200ms

Standard UI transition:
240–320ms

Section reveal:
500–700ms

Large storytelling sequence:
700–1200ms when justified

---

## Easing

Preferred:

cubic-bezier(.22, 1, .36, 1)

Motion should decelerate smoothly.

---

## Hover interactions

Hover states should be subtle.

Examples:

- arrow shifts 4px
- image scales to maximum 1.02
- text colour changes
- border becomes stronger
- button translates up 1px

Avoid dramatic hover effects.

---

## Scroll animation

Scroll animation may be used for:

- storytelling
- connecting layers
- revealing relationships
- project transitions

Avoid scroll-jacking.

The user must always remain in control.

---

## Accessibility

Always support:

prefers-reduced-motion

When reduced motion is requested:

- remove non-essential transforms
- remove parallax
- use simple opacity changes where needed
- preserve all information

---

## Motion test

Before adding animation ask:

Does this help explain a relationship, hierarchy or transition?

If not:

Do not animate it.
