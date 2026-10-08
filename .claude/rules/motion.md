# Motion Rules

Frontend motion must follow the Denizign motion principles defined in:

`/brand/motion.md`

Always follow the source hierarchy defined in `/CLAUDE.md`.

The core motion idea is:

**Fragment → Connect → Organise**

Motion should support the transition from complexity to clarity.

## Implementation

Prefer efficient properties such as:

- opacity
- transform

Use clipping or masks only when they materially improve storytelling.

Avoid expensive layout animation unless necessary.

## Tokens

Use the approved motion tokens from:

`/src/styles/tokens.css`

Do not invent arbitrary durations or easing values.

## Purpose

Use animation to:

- reveal hierarchy
- show relationships
- explain transitions
- support navigation
- reinforce storytelling

Do not animate an element simply because animation is possible.

## Hover interactions

Keep hover behaviour subtle.

Acceptable examples include:

- small directional movement
- understated image scale
- underline reveal
- subtle colour change
- subtle border change

Do not use:

- bounce
- elastic movement
- dramatic scaling
- random rotation

## Scroll

Scrolling must remain controlled by the user.

Do not use scroll-jacking.

Use scroll-based effects sparingly and only when they help communicate a story or relationship.

## Continuous motion

Avoid permanent looping animation unless it communicates essential state.

Decorative motion should stop rather than continuously compete for attention.

## Reduced motion

When `prefers-reduced-motion` is enabled:

- remove decorative transforms
- disable parallax
- avoid animated spatial transitions
- preserve all information and functionality
