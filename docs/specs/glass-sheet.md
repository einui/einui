## SECTION 1 — Executive Summary
- **Purpose:** Side/top/bottom panel overlay based on dialog primitive.
- **Maturity:** Low.
- **Audit score:** **53/100**.
- **Why refactor:** Good base composition, but side/size contract not standardized and styling is hardcoded.
- **Expected outcome:** Predictable sheet API aligned with dialog and standards.

## SECTION 2 — Current Problems
- `side` exists, but no standardized `size` scale.
- Hardcoded panel visuals and motion.
- No documented controlled patterns.
- No status/loading/pending action-state guidance for sheet workflows.

## SECTION 3 — Refactor Goals (Priority)
1. Standardize side + size + behavior contract.
2. Align with dialog accessibility and interaction patterns.
3. Tokenize visuals/motion.
4. Add test/docs parity.

## SECTION 4 — Public API
- Root: `open/defaultOpen/onOpenChange/modal`.
- Content: `side`, `size`, `variant`, `theme`, `showClose`.
- Compound parts retained.
- Controlled + uncontrolled first-class.
- Deprecate ad hoc sizing via custom className-only approaches.

## SECTION 5 — Component States
Closed/opening/open/closing/focus-trapped/disabled-actions/loading/pending plus side-specific animation states.

## SECTION 6 — Composition Model
Compound API remains with overlay/content/header/footer/title/description/close.

```mermaid
graph TD
A[GlassSheet.Root] --> B[Trigger]
A --> C[Portal]
C --> D[Overlay]
C --> E[Content(side,size)]
E --> F[Header/Footer/Title/Description/Close]
```

## SECTION 7 — Accessibility Requirements
Dialog-equivalent keyboard and SR behavior; focus restore and escape handling required.

## SECTION 8 — Design & Visual Language
Tokenized panel dimensions, spacing, radius by side, glass surface consistency, reduced-motion transitions.

## SECTION 9 — Design Tokens
Sheet side/sizing/motion/surface/border/shadow/focus tokens.

## SECTION 10 — Performance Considerations
Avoid layout thrash for side transitions; keep animation classes static and side-driven.

## SECTION 11 — Breaking Changes
Canonical `size` system may replace custom width conventions; documented migration required.

## SECTION 12 — Test Plan
Side behavior matrix, open/close lifecycle, keyboard + focus, controlled usage, accessibility assertions.

## SECTION 13 — Documentation Requirements
Examples for each side + sizes, form-in-sheet pattern, accessibility and anti-patterns.

## SECTION 14 — Acceptance Criteria
Sheet API is standardized, accessible, tokenized, and documented with full regression coverage.

## SECTION 15 — Refactor Checklist
- □ Add `size` contract  
- □ Align behavior with dialog  
- □ Tokenize animations/surface  
- □ Add full test matrix  
- □ Publish migration docs

## SECTION 16 — Future Opportunities
Responsive docking behavior, nested sheet orchestration, swipe gesture support (mobile).