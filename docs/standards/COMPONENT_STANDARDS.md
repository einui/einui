# Ein UI Component Standards

## Philosophy

Ein UI is not just a collection of components.

It is a **Design System**.

Every component must be:

* Predictable
* Composable
* Accessible
* Themeable
* Performant
* Type-safe
* Tree-shakeable
* SSR-friendly
* AI-friendly
* Beautiful by default

Consistency is more important than cleverness.

If a developer understands one component, they should immediately understand every other component.

---

# Core Principles

## 1. API Consistency

Every component should expose a familiar API.

Never invent new patterns unless absolutely necessary.

Example:

```tsx
<Button
    variant="default"
    size="md"
    disabled
    className=""
>
```

instead of

```tsx
<Button
    styleType="primary"
    large
    inactive
>
```

---

## 2. Composition over Configuration

Prefer compound components instead of huge prop APIs.

Good

```tsx
<Card>
    <CardHeader />
    <CardContent />
    <CardFooter />
</Card>
```

Avoid

```tsx
<Card
    header=""
    footer=""
    footerActions=""
    showDivider
    contentPadding
/>
```

---

## 3. Theme over Duplication

Never create separate components for visual styles.

Avoid

```
GlassButton
GlassCard
GlassDialog
```

Prefer

```tsx
<Button theme="glass" />

<Card theme="glass" />
```

or global theme configuration.

---

## 4. Predictability

Every component should behave exactly like similar components.

Button API should resemble IconButton.

Dialog API should resemble Sheet.

Popover API should resemble Tooltip.

---

# Component Folder Structure

Each component should follow the same structure.

```
button/

    index.ts

    button.tsx

    button.types.ts

    button.styles.ts

    button.test.tsx

    button.stories.tsx

    README.md
```

Optional

```
button/

    hooks/

    utils/

    animations.ts

    constants.ts
```

---

# Export Rules

Every component exports only from index.ts.

```ts
export * from "./button"
```

Avoid deep imports.

Never require

```ts
import Button from ".../button/button"
```

---

# Naming Convention

Component names:

```
Button
Card
Dialog
Avatar
Badge
Input
```

Compound components:

```
CardHeader

CardContent

CardFooter

CardTitle

CardDescription
```

Hooks

```
useDialog

useToast

useCarousel
```

Utilities

```
cn()

composeVariants()

createSlots()
```

---

# Public API Standards

Every component should expose:

```
variant

size

className

style

children
```

Interactive components

```
disabled

loading

asChild
```

Controlled components

```
value

defaultValue

onChange
```

Overlay components

```
open

defaultOpen

onOpenChange
```

Collection components

```
items

value

defaultValue

orientation
```

Never invent custom names.

---

# Variant Standards

Allowed variants:

```
default

secondary

outline

ghost

soft

glass

destructive

success

warning

info

link
```

Variants should have identical meaning across every component.

---

# Size Standards

Only use

```
xs

sm

md

lg

xl

icon
```

Avoid

```
medium

big

small

large
```

---

# Radius Standards

Allowed values

```
none

sm

md

lg

xl

full
```

---

# Color Standards

Semantic colors only.

Never expose raw colors.

Good

```
success

warning

destructive

primary

secondary

muted

accent
```

Avoid

```
green

red

blue

purple
```

---

# State Standards

Every interactive component should support as many of these as applicable.

```
Default

Hover

Pressed

Focused

Disabled

Loading

Error

Success

Warning

Readonly

Selected

Active

Pending
```

State behavior should be consistent across all components.

---

# Accessibility Standards

Every interactive component must support:

✅ Keyboard navigation

✅ Focus ring

✅ Screen readers

✅ ARIA attributes

✅ Tab order

✅ Escape behavior

✅ Reduced motion

✅ Proper labels

No exceptions.

---

# Focus Standards

Focus should never rely on browser defaults.

Every component uses the shared focus style.

```
Focus Ring

Focus Offset

Focus Transition

Focus Visible
```

---

# Motion Standards

Animations must feel consistent.

Motion tokens

```
instant

fast

normal

slow
```

Animation tokens

```
fade

scale

slide

collapse

expand
```

Never hardcode animation durations.

---

# Animation Principles

Animations should:

* communicate state
* improve UX
* never block interaction
* respect prefers-reduced-motion
* be interruptible

---

# Styling Standards

All styling comes from design tokens.

Avoid

```css
border-radius: 14px;
```

Prefer

```
radius.lg
```

Avoid

```css
#3b82f6
```

Prefer

```
primary
```

---

# Design Tokens

Every component should consume tokens.

Categories

```
Color

Radius

Spacing

Shadow

Border

Typography

Motion

Opacity

Blur

Elevation

Glass

Z-index
```

Never hardcode values.

---

# Layout Rules

Spacing should follow a consistent scale.

Example

```
0

1

2

3

4

6

8

10

12

16
```

Avoid arbitrary spacing.

---

# Typography Rules

Use typography tokens.

Never define font sizes manually inside components.

Example

```
text-xs

text-sm

text-md

text-lg

text-xl
```

---

# Glass Design Rules

Glass is a theme.

Not a component.

Glass should define

* blur
* opacity
* border
* reflection
* shadow

Components consume the theme.

---

# Component Composition Rules

Prefer slots.

Example

```tsx
<Card>

<CardHeader />

<CardContent />

<CardFooter />

</Card>
```

Avoid dozens of configuration props.

---

# Hooks

Business logic belongs inside hooks.

Example

```
useCarousel()

useDialog()

useClipboard()
```

Components should stay as presentational as possible.

---

# Performance Standards

Every component should

* minimize re-renders
* avoid unnecessary state
* avoid unnecessary effects
* avoid layout thrashing
* support tree-shaking
* support React Server Components when possible

---

# Bundle Size

Components should only import what they use.

Avoid giant shared utilities.

Prefer modular imports.

---

# Dependency Rules

Each component should have minimal dependencies.

Avoid pulling an entire library for one helper.

---

# TypeScript Standards

No any.

Public types should be exported.

Props should be documented.

Use discriminated unions where appropriate.

Support autocomplete.

---

# Testing Standards

Each component should include tests for:

* Rendering
* Accessibility
* Keyboard interaction
* Mouse interaction
* Variants
* Sizes
* Disabled state
* Loading state
* Snapshot (where appropriate)

---

# Documentation Standards

Every component page should include

* Overview
* Installation
* Usage
* API
* Variants
* Sizes
* States
* Accessibility
* Examples
* Best Practices
* Common Mistakes

---

# Error Handling

Components should fail gracefully.

Never crash because of optional props.

Provide meaningful warnings in development mode.

---

# Developer Experience

Every component should be:

* easy to discover
* easy to autocomplete
* easy to compose
* easy to customize
* easy to extend

---

# AI-First Design

Ein UI is designed for both humans and AI coding assistants.

Every component should:

* have predictable naming
* use consistent APIs
* expose explicit types
* have complete documentation
* avoid ambiguous props
* be easy for LLMs to understand
* generate deterministic code examples
* minimize hidden behavior

This ensures excellent compatibility with tools such as Copilot, Claude Code, Codex, Gemini CLI, Cursor, and future AI-assisted development environments.

---

# Definition of Done (DoD)

A component is considered complete only if it satisfies all of the following:

* ✅ API follows project standards
* ✅ Uses design tokens exclusively
* ✅ Supports all applicable variants
* ✅ Supports all applicable sizes
* ✅ Supports all applicable states
* ✅ Fully accessible (WCAG compliant where applicable)
* ✅ Keyboard navigable
* ✅ Theme-aware
* ✅ Responsive
* ✅ SSR compatible
* ✅ Type-safe
* ✅ Tree-shakeable
* ✅ Includes tests
* ✅ Includes documentation
* ✅ Includes examples
* ✅ Includes changelog entry (if applicable)
* ✅ Reviewed for performance
* ✅ Reviewed for consistency with existing components

---

# Non-Goals

Ein UI intentionally avoids:

* Inconsistent component APIs
* Component-specific naming conventions
* Hardcoded design values
* One-off styling patterns
* Duplicated components for visual themes
* Breaking established design patterns without strong justification
* Unnecessary abstractions
* Overly complex configuration APIs

---

# Guiding Principle

> **Consistency over cleverness. Composition over configuration. Themes over duplication. Accessibility by default. Performance by design. AI-ready by architecture.**

This document serves as the canonical standard for every existing and future component in **Ein UI**. Any new component, refactor, or contribution must adhere to these standards before being accepted into the library.
