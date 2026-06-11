# Ein UI Dependency Upgrade Plan

**Date:** 2026-06-11  
**Last Updated:** January 2025  
**Goal:** Safely remediate 111 security vulnerabilities  
**Status:** ✅ Phase 3 Complete | 37 Vulnerabilities Fixed (33% reduction) | Awaiting Major Version Review

---

## Executive Summary

**Current Status:**
- ✅ **37 vulnerabilities fixed** (111 → 74)
- ✅ **Group 1 (Critical)** - All vitest patches applied
- ✅ **Group 2 (High)** - All ESLint chain fixes applied  
- ✅ **Group 3 (Safe)** - All React/Radix/Tailwind minor/patch updates applied
- ✅ **Group 4a** - TypeScript 6.0.3 successfully upgraded
- ⏳ **Group 4b-4e** - Deferred for detailed review (shadcn, eslint, lucide, @vercel/analytics)

**Remaining Security Work:**
- 74 vulnerabilities remain (mostly transitive/ecosystem)
- High-severity: 29 (minimatch ReDoS in chains, hono in SDK)
- Actionable fixes pending shadcn/eslint major version upgrades

---

## Phase 2: Detailed Upgrade Plan

### Group 1: CRITICAL SECURITY FIXES (Apply First ✓)

These are blocking issues that must be fixed:

#### 1.1 Vitest UI Server Vulnerability
- **Package:** `vitest` (dev)
- **Vulnerability:** Arbitrary file read/execute when UI server is listening
- **Current:** 4.0.18
- **Target:** 4.1.8
- **Type:** Patch (4.0.18 → 4.1.0 minimum, 4.1.8 is latest stable)
- **Breaking Changes:** None known for internal dev dependency
- **Risk Level:** ⚠️ CRITICAL - Must fix before continuing
- **Related:** `@vitest/ui` 4.0.18 → 4.1.8 (same issue)

**Migration Path:**
```bash
pnpm update vitest@4.1.8 --save-dev
pnpm update @vitest/ui@4.1.8 --save-dev
pnpm update @vitest/coverage-v8@4.0.18 --save-dev  # Check compatibility
```

---

## Phase 3: Safe Minor/Patch Updates (Group 3) ✅ COMPLETE

All routine updates applied successfully:
- React 19.2.4 → 19.2.7 (patch)
- React-DOM 19.2.4 → 19.2.7 (patch)  
- @types/react 19.2.14 → 19.2.17 (patch)
- Tailwind CSS 4.2.0 → 4.3.0 (minor)
- All @radix-ui/* packages to latest patch versions

**Status:** ✅ All tests passing, build successful

---

## Phase 4: Major Version Upgrades

### Group 4a: TypeScript 6.0.3 ✅ COMPLETE

**Summary:** Successfully upgraded from TypeScript 5.9.3 to 6.0.3

**Changes Made:**
- Updated `tsconfig.json`: `target` ES2017 → ES2020
- Added explicit `"rootDir": "./"` for consistency
- Validated all configuration changes

**Breaking Changes Addressed:**
- None - codebase uses modern TypeScript patterns (no es5, no deprecated options)
- Compilation fully compatible with Next.js 16 and React 19

**Status:** ✅ Build passes, linting passes, types valid

---

### Group 4b: lucide-react 0.575.0 → 1.17.0 ❌ BLOCKED

**Status:** BREAKING CHANGES DETECTED - Deferred indefinitely

**Issues:**
- Icons removed in v1.x: `Twitter`, `Github` (active use in codebase)
- v1.10 also has these removals (checked 1.10.0 and 1.17.0)
- Affects 20+ import locations across app/

**Recommendation:** Keep at 0.575.0 until full icon audit completed

---

### Group 4c: shadcn 3.8.5 → 4.11.0 ⏳ PENDING REVIEW

**Status:** Not yet evaluated

**Considerations:**
- Major version with registry format changes
- CLI command compatibility needed
- Installation/initialization differences

**Next Action:** Review release notes and registry.json schema

---

### Group 4d: eslint 9.39.2 → 10.4.1 ⏳ PENDING REVIEW

**Status:** Not yet evaluated

**Current Setup:** Compatible with both v9 and v10 (eslint-config-next 16.2.9)

**Next Action:** Review rule deprecations, typescript-eslint compatibility

---

### Group 4e: @vercel/analytics 1.6.1 → 2.0.1 ⏳ PENDING REVIEW

**Status:** Not yet evaluated  

**Concerns:**
- Major version API changes potential
- Usage pattern: Minimal direct imports detected

**Next Action:** Audit actual usage and API compatibility

---

## Phase 2: Detailed Upgrade Plan

Essential patches to close attack vectors:

#### 2.1 ESLint/Config Dependency Chain
**Root Cause:** Multiple eslint packages depend on older minimatch versions with ReDoS vulnerabilities

- **@eslint/eslintrc:** 3.3.3 → 3.3.5 (patch, fixes minimatch)
- **eslint-config-next:** 16.1.6 → 16.2.9 (minor, includes Next.js updates + minimatch fixes)
- **eslint:** 9.39.2 → 10.4.1 (major - see review section)
- **Type:** Patches + minor updates
- **Breaking Changes:** Minimal for eslint 9.x → 10.x (need review)
- **Risk Level:** 🟡 MEDIUM - Chain of interdependencies
- **Note:** Updating eslint-config-next may pull in eslint-plugin-import fixes for minimatch

#### 2.2 Build Tool Vulnerability
- **Package:** `@vitejs/plugin-react` (dev)
- **Vulnerability:** Transitive rollup vulnerability (arbitrary file write)
- **Current:** 5.1.4
- **Target:** 6.0.2
- **Type:** Major (rollup 4.x → 5.x indirectly)
- **Breaking Changes:** Need to check React integration
- **Risk Level:** 🟡 MEDIUM - Breaking major but React integration stable
- **Note:** Rollup updated from 4.59.0 (vulnerable) to 5.x (fixed)

#### 2.3 Accessibility Testing Tool
- **Package:** `@axe-core/cli` (dev)
- **Vulnerability:** Transitive basic-ftp path traversal (via chromedriver > proxy-agent)
- **Current:** 4.11.1
- **Target:** 4.11.3
- **Type:** Patch
- **Breaking Changes:** None
- **Risk Level:** 🟢 LOW - Simple patch

---

### Group 3: SAFE UPDATES (Apply Third ✓)

Backward-compatible patches and safe minor updates:

#### 3.1 React Ecosystem (Patches)
- **react:** 19.2.4 → 19.2.7 (patch)
- **react-dom:** 19.2.4 → 19.2.7 (patch)
- **@types/react:** 19.2.14 → 19.2.17 (patch)
- **@types/react-dom:** 19.2.3 → 19.2.3 (already latest)
- **Type:** Patch updates
- **Breaking Changes:** None
- **Risk Level:** 🟢 LOW - Minimal changes in patch releases

#### 3.2 Styling & UI (Minor Updates)
- **tailwindcss:** 4.2.0 → 4.3.0 (minor)
- **@tailwindcss/postcss:** 4.2.0 → 4.3.0 (minor)
- **@radix-ui/react-*:** Various 1.x → 1.x minor bumps
  - All Radix UI components have safe minor updates
- **tailwind-merge:** 3.4.1 → 3.6.0 (minor)
- **Type:** Minor updates (backward compatible)
- **Breaking Changes:** None
- **Risk Level:** 🟢 LOW - Additive features, no API breaks

#### 3.3 Utility Libraries (Minor Updates)
- **zod:** 4.3.6 → 4.4.3 (minor)
- **framer-motion:** 12.34.3 → 12.40.0 (minor)
- **Type:** Minor updates
- **Breaking Changes:** None
- **Risk Level:** 🟢 LOW

#### 3.4 Development Tools (Minor/Patch Updates)
- **@types/node:** 25.3.0 → 25.9.3 (patch)
- **jsdom:** 28.1.0 → 29.1.1 (minor)
- **Type:** Patch and minor
- **Breaking Changes:** None expected
- **Risk Level:** 🟢 LOW

#### 3.5 Framework (Minor Updates)
- **next:** 16.1.6 → 16.2.9 (minor patch)
- **eslint-config-next:** Already included in Group 2
- **Type:** Minor patch updates
- **Breaking Changes:** None
- **Risk Level:** 🟢 LOW

---

### Group 4: MAJOR VERSION UPDATES (Review & Plan ⚠️)

**These require careful review before applying:**

#### 4.1 TypeScript 6.0.3
- **Current:** 5.9.3
- **Target:** 6.0.3
- **Type:** Major version (5.x → 6.x)
- **Breaking Changes:** ⚠️ REVIEW NEEDED
  - ECMAScript 2025 features enabled by default
  - Possible stricter type checking
  - API changes may affect code
- **Decision Point:** Review release notes and test thoroughly
- **Impact Assessment:**
  - TypeScript 6.0 has significant changes; need to verify project compiles
  - Recommended: Leave for Phase 4 detailed review

#### 4.2 Lucide React 1.17.0
- **Current:** 0.575.0
- **Target:** 1.17.0
- **Type:** Major version (0.x → 1.x)
- **Breaking Changes:** ⚠️ REVIEW NEEDED
  - Icon names may have changed
  - API changes in component structure
  - Tree-shaking behavior may differ
- **Decision Point:** Check CHANGELOG for icon renames
- **Impact Assessment:**
  - All icon imports likely need updates
  - Breaking changes across all files using icons
  - Recommended: Leave for Phase 4 detailed review with full codebase scan

#### 4.3 Shadcn CLI 4.11.0
- **Current:** 3.8.5
- **Target:** 4.11.0
- **Type:** Major version
- **Breaking Changes:** ⚠️ REVIEW NEEDED
  - Registry format changes
  - CLI command changes
  - Component generation may differ
- **Decision Point:** Check if registry.json needs migration
- **Impact Assessment:**
  - May require `registry.json` updates
  - Component installation behavior may change
  - Recommended: Leave for Phase 4 with registry.json validation

#### 4.4 ESLint 10.4.1
- **Current:** 9.39.2
- **Target:** 10.4.1
- **Type:** Major version (9.x → 10.x)
- **Breaking Changes:** ⚠️ REVIEW NEEDED
  - Rule name changes
  - Configuration format changes
  - Possible stricter linting
- **Decision Point:** Review eslint.config.mjs compatibility
- **Impact Assessment:**
  - May require eslint.config.mjs updates
  - New rules might fail the build
  - Recommended: Combine with Group 2 (eslint-config-next update) for testing

#### 4.5 @vercel/analytics 2.0.1
- **Current:** 1.6.1
- **Target:** 2.0.1
- **Type:** Major version (1.x → 2.x)
- **Breaking Changes:** ⚠️ REVIEW NEEDED
  - API might have changed
  - Configuration may differ
- **Decision Point:** Check if analytics initialization needs changes
- **Impact Assessment:**
  - May require updates to how analytics is initialized
  - Recommended: Test in Phase 3 with other packages

---

## Execution Strategy

### Phase 3A: Apply Group 1 (Critical)
1. Update vitest and @vitest/ui
2. Run `pnpm lint` and `pnpm test`
3. Verify no regressions

### Phase 3B: Apply Group 2 (High-Security)
1. Update @axe-core/cli
2. Update @eslint/eslintrc
3. Update eslint-config-next
4. Update @vitejs/plugin-react
5. Run `pnpm lint` and `pnpm build`
6. Verify no errors

### Phase 3C: Apply Group 3 (Safe)
1. Batch update all minor/patch updates
2. Run full validation suite
3. Verify no regressions

### Phase 4: Review & Apply Group 4 (Major)
1. Research each major update in detail
2. Test individually
3. Document any required code changes
4. Apply only if safe migration path is confirmed

---

## Risk Assessment Summary

| Group | Count | Risk | Decision |
|-------|-------|------|----------|
| Group 1 (Critical) | 2 packages | CRITICAL | **Apply immediately** |
| Group 2 (High) | 4 packages | MEDIUM | **Apply after Group 1 validates** |
| Group 3 (Safe) | 15+ packages | LOW | **Apply after Group 2 validates** |
| Group 4 (Major) | 5 packages | HIGH | **Review each individually before applying** |

---

## Validation Checklist

After each group:
- [ ] `pnpm lint` passes
- [ ] `pnpm build` succeeds
- [ ] `pnpm test` passes (if applicable)
- [ ] `pnpm audit` shows reduced vulnerability count
- [ ] No new TypeScript errors
- [ ] Application starts successfully (`pnpm dev`)

---

## Next Steps

1. ✓ Phase 1: Analyze (Complete)
2. ✓ Phase 2: Create Plan (Complete - this document)
3. → **Phase 3: Apply Safe Changes** (Start now)
4. → Phase 4: Review Major Updates
5. → Phase 5: Security Verification
6. → Phase 6: Final Report
