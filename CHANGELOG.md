# Changelog

All notable changes to the Ein UI component registry are documented here.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-10-08

### Added
- `area-chart-widget`: glass area chart widget with a Catmull-Rom smoothed curve,
  gradient fill, and auto-trimmed x-axis labels so they stop colliding past eight
  points. Accepts `title`, `subtitle`, `value`, `change`, `data`, and `glowColor`.
- `map-widget`: glass node-map widget rendering a dotted-grid landmass with live
  active points. Accepts `title`, `subtitle`, `regionName`, `activePoints`, and
  `glowColor`.
- Both widgets are exported from `registry/widgets/index.ts`, registered in
  `registry.json`, and published as installable `shadcn` registry items
  (`public/r/area-chart-widget.json`, `public/r/map-widget.json`).
- Docs pages for both widgets with live previews and prop examples.
- Both widgets featured on the homepage widget showcase.

### Fixed
- Area chart used module-level SVG `id`s for its gradient and glow definitions,
  so rendering two charts on one page made the second instance reference the
  first instance's defs. Ids are now derived per-instance from `React.useId`.
- Area chart divided by the value range to normalise its plot, which produced
  `NaN` coordinates when every data point had the same value. The divisor is now
  guarded against zero.
- Map widget had an unused `React` import, a required prop that also carried a
  default, and a placeholder default title.

### Changed
- Registered distinct sidebar icons for the new widgets (`Globe` for
  `map-widget`, `ChartArea` for `area-chart-widget`) so both stop falling back to
  the generic cloud icon. `area-chart-widget` intentionally uses `ChartArea`
  rather than `TrendingUp` to stay distinct from `stats-widget`.

## [0.1.0] - 2026-09-25

### Added
- Initial semantic versioning baseline for the registry and docs platform.
- Version check and release scripts for patch, minor, and major bumps.
- GitHub release workflow for tag-based release publishing.
