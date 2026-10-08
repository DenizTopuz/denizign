# Denizign Design System

Version 1.0

> Brand values are defined in `/brand/` and implemented through `/src/styles/tokens.css`. This document defines how those values are applied to the interface.

This document defines the visual and interaction system for the Denizign portfolio.

The design system supports the brand principle:

**From complexity to clarity.**

The interface should feel minimal, calm, intelligent, premium and deliberate.

---

# 1. Core principles

## Clarity over decoration

Typography, spacing and hierarchy should do most of the visual work.

Do not add visual elements unless they improve:

- hierarchy
- clarity
- meaning
- usability
- storytelling
- connection

When in doubt, remove something.

---

## Structured, not rigid

The visual identity combines:

- strong grids
- bold typography
- architectural composition
- subtle softness

The website should feel precise without becoming cold.

---

## Sharp structure. Subtle softness.

Use controlled corner radii.

Do not make every interface element fully square.

Do not make the interface overly rounded or SaaS-like.

---

# 2. Colours

Use the approved Denizign brand colours only.

## Near Black

`#111214`

Use for:

- primary text
- dark sections
- strong UI elements

Avoid pure black unless technically required.

---

## Graphite

`#34373B`

Use for:

- secondary dark surfaces
- subtle dark variation

---

## Muted text

`#6E7177`

Use for:

- secondary copy
- metadata
- supporting labels

---

## Warm White

`#FAFAF8`

Default page background.

Prefer this over pure white for large backgrounds.

---

## White

`#FFFFFF`

Use for:

- cards
- contained surfaces
- high-contrast content areas

---

## Border

`#E2E2DE`

Use for:

- dividers
- card outlines
- subtle structure

---

## Denizign Red

`#D7263D`

The only strong accent colour.

Use for:

- primary CTA
- active states
- key highlights
- selected words
- meaningful UI accents
- brand details

Red should be rare enough that it attracts attention.

---

## Red Dark

`#B91C32`

Use for:

- hover
- active
- pressed states

---

## Red Soft

`#FDE8EA`

Use only for subtle supporting surfaces.

---

## Colour balance

General guideline:

- 70% light neutral
- 20% near-black / graphite
- maximum 10% red

Do not introduce additional accent colours without explicit approval.

Do not use gradients as part of the core identity.

---

# 3. Typography

## Headlines

Font:

**Manrope**

Preferred weights:

- 800 ExtraBold
- 700 Bold
- 600 SemiBold

Use for:

- hero headlines
- section headlines
- project titles
- strong statements

Headlines should feel bold, compact and confident.

---

## Body and interface

Font:

**Inter**

Preferred weights:

- 400 Regular
- 500 Medium
- 600 SemiBold

Use for:

- body copy
- buttons
- navigation
- labels
- metadata
- interface elements

Body typography should remain quiet and highly readable.

---

# 4. Type scale

Use responsive typography where possible.

## Desktop

### Display XL

- Font: Manrope
- Size: 96px
- Weight: 800
- Line height: 0.98
- Letter spacing: -0.045em

### Display L

- Size: 72px
- Weight: 800
- Line height: 1

### H1

- Size: 64px
- Weight: 800
- Line height: 1.02

### H2

- Size: 48px
- Weight: 700
- Line height: 1.08

### H3

- Size: 32px
- Weight: 700
- Line height: 1.15

### H4

- Size: 24px
- Weight: 700
- Line height: 1.2

### Lead

- Font: Inter
- Size: 22px
- Weight: 400
- Line height: 1.55

### Body Large

- Size: 18px
- Weight: 400
- Line height: 1.65

### Body

- Size: 16px
- Weight: 400
- Line height: 1.65

### Small

- Size: 14px

### Label

- Size: 13px
- Weight: 600
- Letter spacing: 0.06em

---

## Mobile

Recommended starting sizes:

- Display XL: 56px
- Display L: 48px
- H1: 44px
- H2: 36px
- H3: 28px
- H4: 22px
- Lead: 19px
- Body Large: 17px
- Body: 16px

Do not simply scale desktop typography down proportionally.

Compose intentionally for mobile.

---

# 5. Content width

## Main container

Maximum width:

`1280px`

## Reading width

Maximum:

`720px`

Body copy should usually remain between approximately 55 and 72 characters per line.

Do not stretch body text across wide layouts.

---

# 6. Grid

## Desktop

12-column grid

Gutter:

`24px`

## Tablet

8-column grid

Gutter:

`20px`

## Mobile

4-column grid

Gutter:

`16px`

---

# 7. Page padding

Desktop:

`48px`

Tablet:

`32px`

Mobile:

`20px`

---

# 8. Spacing

Use an 8px-based spacing system.

Approved values:

`4`
`8`
`12`
`16`
`24`
`32`
`40`
`48`
`64`
`80`
`96`
`120`
`144`
`192`

Do not introduce random spacing values without a specific reason.

---

# 9. Section spacing

Whitespace is a major part of the Denizign identity.

Default vertical section spacing:

Desktop:

`144px`

Mobile:

`88px`

Larger storytelling moments may use:

`192px`

Avoid visually cramped sections.

---

# 10. Border radius

The website should not feel overly rounded.

## Small UI

Buttons:
`8px`

Inputs:
`8px`

## Cards

`12px`

## Large media

`12px–16px`

## Chips

Pill radius is allowed only where the component is genuinely a tag, filter or status.

Avoid applying pill-shaped styling to standard buttons.

---

# 11. Borders

Default:

`1px solid #E2E2DE`

Dark sections:

`1px solid rgba(255,255,255,0.12)`

Prefer borders and whitespace over heavy shadows.

---

# 12. Shadows

Use shadows rarely.

## Soft shadow

`0 8px 30px rgba(17,18,20,0.06)`

## Floating shadow

`0 18px 60px rgba(17,18,20,0.10)`

Do not give every card a shadow.

---

# 13. Buttons

## Primary

Background:

`#D7263D`

Text:

`#FFFFFF`

Height:

minimum `48px`

Horizontal padding:

`22px`

Radius:

`8px`

Typography:

Inter / 600 / 15px

### Hover

Background:

`#B91C32`

Optional:

`translateY(-1px)`

---

## Secondary

Background:

transparent

Text:

`#111214`

Border:

`#E2E2DE`

Hover:

`#F1F0EC`

---

## Text link

Use:

text + directional arrow

Keep interaction understated.

Do not create a button container when a normal text link is sufficient.

---

# 14. Navigation

Desktop navigation:

- logo left
- navigation right

Recommended items:

- Work
- About
- Approach
- Contact

Optional:

- Download CV

Keep navigation minimal.

Avoid complex dropdown structures.

---

# 15. Cards

Do not use cards automatically.

Before using a card, determine whether the information truly needs visual grouping.

Prefer:

- layout
- typography
- whitespace
- dividers

over containers.

Cards are appropriate for:

- project previews
- selected supporting content
- functional UI groups

Default card:

- white surface
- subtle border
- 12px radius
- no shadow by default
- 24–32px internal spacing

---

# 16. Project cards

Project work should dominate the portfolio visually.

Each project preview should contain:

- project name
- concise problem statement
- role
- domain or year
- strong project imagery

Project cards should not look like generic SaaS feature cards.

Prefer editorial compositions and large imagery.

---

# 17. Case study structure

Every case study should communicate:

## Context

What was happening?

## Complexity

Why was the problem difficult?

## Role

What was Deniz responsible for?

## Thinking

What research, architecture or decision-making happened?

## Intervention

What was designed or changed?

## Outcome

What became clearer, better or more scalable?

## Reflection

What did this case demonstrate?

Use the narrative pattern:

**Problem → Thinking → Intervention → Outcome**

Do not create unexplained screenshot galleries.

---

# 18. Imagery

Prefer:

- actual UI
- product screenshots
- maps
- dashboards
- data visualisations
- flows
- research artefacts
- design-system examples

The work itself should remain the hero.

Avoid placing every screen inside a laptop or phone mockup.

---

# 19. Photography

Photography should feel:

- editorial
- architectural
- calm
- professional
- confident

Prefer:

- natural light
- strong composition
- negative space
- neutral environments
- concrete
- structure
- glass
- architecture

Avoid:

- generic stock imagery
- laptop-and-coffee scenes
- fake collaboration photography
- colourful office photography

---

# 20. Motion

Core Denizign motion principle:

**Fragment → Connect → Organise**

Motion should communicate complexity becoming clarity.

Preferred:

- opacity
- translate
- masks
- subtle scale
- line reveal
- sequencing

Avoid:

- bouncing
- looping decoration
- excessive parallax
- random rotation
- flashy 3D
- scroll-jacking

---

# 21. Motion timing

Micro interaction:

`140–200ms`

Standard transition:

`240–320ms`

Section reveal:

`500–700ms`

Preferred easing:

`cubic-bezier(.22,1,.36,1)`

---

# 22. Dark sections

Dark sections should be used sparingly for visual punctuation.

Background:

`#111214`

Primary text:

`#FFFFFF`

Secondary text:

`#B9BBC0`

Accent:

`#D7263D`

Suitable for:

- major case moments
- philosophy / approach
- contact CTA

Do not alternate light and dark sections mechanically.

---

# 23. Forms

Inputs:

- minimum 48px height
- white background
- subtle border
- 8px radius
- visible label

Focus:

use a clear red focus treatment.

Errors must use both text and visual indication.

Never rely on colour alone.

---

# 24. Breakpoints

Recommended:

- Small: 480px
- Medium: 768px
- Large: 1024px
- XL: 1280px
- XXL: 1536px

Design mobile-first.

---

# 25. Accessibility

Target:

**WCAG 2.2 AA**

Required:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible labels
- correct heading hierarchy
- sufficient colour contrast
- useful alt text
- minimum practical touch targets around 44px
- reduced motion support
- no information communicated through colour alone

Accessibility is part of the design system.

It is not a final QA step.

---

# 26. Component philosophy

Components should be:

- simple
- reusable
- intentional
- composable

Prefer components such as:

- Container
- Section
- SectionHeader
- Button
- TextLink
- ProjectCard
- ProjectGrid
- MethodStep
- CapabilityList
- ContactCTA

Do not create components merely to abstract a few lines of markup.

---

# 27. Homepage visual rhythm

Recommended composition:

1. Navigation
2. Hero
3. Selected work
4. Positioning
5. Method
6. Capabilities
7. About
8. Contact CTA
9. Footer

The homepage should alternate between:

- strong statements
- large product imagery
- quiet explanatory sections

Avoid visually dense sequences.

---

# 28. Hero

The hero must have one dominant message.

Recommended content:

Eyebrow:

`UX Lead · Product Experience · Systems Thinking`

Headline:

`Complex systems.`
`Clear experiences.`

The second line may use Denizign Red.

Supporting copy:

`I connect users, product, technology and teams to turn complexity into intuitive digital experiences.`

Primary action:

`View selected work`

Secondary action:

`About me`

Do not overload the hero with decorative objects.

---

# 29. Logo

Use only approved assets.

`/brand/logo/original/` is the protected source/master directory.
Files in it must never be modified.

`/brand/logo/web/` contains website-ready logo assets.
The website uses assets from `/brand/logo/web/` once they exist.

Do not recreate the logo with CSS.

Do not:

- distort
- rotate
- reinterpret
- add drop shadows
- add glow
- add gradients

Logo geometry is part of the brand identity.

---

# 30. Visual anti-patterns

Avoid:

- generic SaaS landing pages
- excessive rounded cards
- gradients
- glassmorphism
- neon
- blobs
- UI floating in 3D space without purpose
- excessive shadows
- multiple accent colours
- huge numbers of badges
- meaningless animations
- generic AI portfolio aesthetics

---

# 31. Final design test

Before approving any section, ask:

1. Is the hierarchy obvious?
2. Is there enough whitespace?
3. Is typography doing most of the work?
4. Is red being used sparingly?
5. Is every container necessary?
6. Does motion communicate something?
7. Is it usable on mobile?
8. Is it accessible?
9. Does it feel appropriate for a UX Lead?
10. Can anything be removed?

If removing something improves the design, remove it.
