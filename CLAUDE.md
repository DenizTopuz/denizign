# Denizign Portfolio

## Project

This repository contains the personal portfolio website for Deniz Topuz under the Denizign brand.

The portfolio primarily positions Deniz as:

- UX Lead
- Product Experience professional
- Systems thinker

The core brand concept is:

**From complexity to clarity.**

## Source of truth

### Brand

Use:

- `/brand/README.md`
- `/brand/brand-foundation.md`
- `/brand/colors.md`
- `/brand/typography.md`
- `/brand/imagery.md`
- `/brand/motion.md`

### Design

Use:

- `/.claude/skills/denizign-design/SKILL.md`
- `/.claude/skills/denizign-design/references/design-system.md`

### Logo

Protected masters:

`/brand/logo/original/`

Website-ready assets:

`/brand/logo/web/`

Never modify protected master logo files.

## Source hierarchy

Use this hierarchy when interpreting project documentation:

1. `/brand/`
   Defines the approved Denizign brand identity:
   colours, typography, logo, imagery, motion and brand character.

2. `/src/styles/tokens.css`
   Implements the approved brand values as reusable code tokens.

3. `/.claude/skills/denizign-design/references/design-system.md`
   Defines how the brand and tokens are applied to layouts, components and interaction design.

4. `/.claude/skills/denizign-design/SKILL.md` and `/.claude/rules/`
   Define how Claude should work with the brand and design system.

If two sources conflict, use the higher source in this hierarchy.

`/brand/` always wins for brand values.

## Design direction

The website must feel:

- minimal
- calm
- intelligent
- editorial
- architectural
- premium
- human
- confident

It should not feel like:

- a generic freelance portfolio
- a SaaS product website
- an AI-generated template
- an overly decorative agency website

## Core principle

**Clarity over decoration.**

Before adding something, ask:

Does this improve clarity, hierarchy, meaning or usability?

If not, remove it.

## Development principles

- Build mobile-first.
- Use semantic HTML.
- Build reusable components.
- Keep components focused.
- Prefer CSS over unnecessary JavaScript.
- Avoid unnecessary dependencies.
- Target WCAG 2.2 AA.
- Respect `prefers-reduced-motion`.
- Use existing design tokens instead of inventing visual values.

## Workflow

For meaningful frontend work:

1. Read the relevant documentation.
2. Create a short implementation plan.
3. Implement one logical component or section.
4. Render the result.
5. Inspect it visually.
6. Review desktop and mobile.
7. Fix visual and responsive issues.
8. Check accessibility.
9. Continue only when the current implementation is stable.

Do not build large parts of the website blindly in a single pass.

## Visual review

Before considering frontend work finished, review:

- hierarchy
- spacing
- typography
- alignment
- colour usage
- responsiveness
- accessibility
- brand consistency

Prefer simplification over decoration.
