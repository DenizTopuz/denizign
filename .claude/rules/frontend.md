# Frontend Rules

These rules apply to frontend implementation in the Denizign portfolio.

Always follow the source hierarchy defined in `/CLAUDE.md`.

## Architecture

Build reusable, focused components.

Prefer:

- semantic HTML
- clear composition
- predictable component APIs
- shared design tokens
- simple component boundaries

Avoid:

- monolithic page components
- duplicated styling
- unnecessary abstraction
- premature complexity
- excessive client-side JavaScript

## Design tokens

Use `/src/styles/tokens.css` for approved visual values.

Do not invent arbitrary:

- colours
- spacing
- border radii
- shadows
- font families
- animation timings

If a needed value does not exist, do not silently create it.

First determine whether the design system needs a new token.

## Styling

Use the Denizign design system and design skill.

Prefer:

- typography
- whitespace
- alignment
- grid
- restrained borders

before introducing additional containers or visual effects.

Do not turn every content block into a card.

## Responsive design

Build mobile-first.

Layouts must be intentionally composed for:

- mobile
- tablet
- desktop

Do not simply shrink desktop layouts.

These are visual review viewport sizes, not responsive breakpoint definitions. Responsive breakpoints remain defined by the design system.

At minimum, visually review:

- 390px
- 768px
- 1024px
- 1440px

No page-level horizontal overflow is allowed.

## Components

Prefer reusable primitives where they genuinely improve consistency.

Examples:

- Container
- Section
- SectionHeader
- Button
- TextLink
- ProjectCard

Do not create abstractions merely to reduce a few lines of markup.

## Images

Use responsive images.

Provide meaningful alt text where required.

Optimise image size and dimensions.

Avoid unnecessary device mockups.

The design work itself should remain the visual focus.

## Performance

Prefer native browser capabilities and CSS.

Avoid large libraries unless they solve a clear problem.

Do not introduce animation or UI dependencies without justification.

Keep JavaScript proportional to the interaction being built.

## Completion

Do not consider a frontend task complete until it has been checked for:

- responsive behaviour
- spacing
- typography
- alignment
- accessibility
- brand consistency
