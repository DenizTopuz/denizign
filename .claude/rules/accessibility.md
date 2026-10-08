# Accessibility Rules

The Denizign portfolio targets WCAG 2.2 AA.

Accessibility is part of the design process, not a final cleanup step.

Always follow the source hierarchy defined in `/CLAUDE.md`.

## Semantic structure

Use native semantic HTML whenever possible.

Prefer:

- button for actions
- anchor for navigation
- nav for navigation groups
- main for primary content
- section where meaningful
- correct heading hierarchy

Do not use clickable divs when a semantic native element exists.

## Keyboard

All interactive functionality must be usable with a keyboard.

Ensure:

- logical tab order
- no keyboard traps
- interactive controls are reachable
- custom interactions have keyboard support

## Focus

Never remove visible focus indication without providing an accessible replacement.

Use the approved design-system focus treatment.

Focus must remain visible on both light and dark backgrounds.

## Touch targets

Interactive targets should generally provide an effective target size of approximately 44px or greater where practical.

## Colour and contrast

Meet WCAG AA contrast requirements.

Do not communicate meaning through colour alone.

States such as:

- active
- error
- selected
- success

must have another visual or textual indicator where necessary.

## Images

Use empty alt text for decorative images.

Use useful descriptive alt text when the image conveys information.

Do not repeat surrounding text unnecessarily in alt attributes.

## Forms

Every field requires an accessible name.

Use visible labels whenever practical.

Errors must:

- clearly explain the problem
- identify the relevant field
- not rely only on colour

## Motion

Respect `prefers-reduced-motion`.

The full experience and all content must remain usable without non-essential animation.

## Content

Maintain readable line lengths and sufficient text sizing.

Do not reduce usability to achieve a visual effect.
