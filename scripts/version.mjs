#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const [, , command = 'check', bumpType = 'patch'] = process.argv;
const rootDir = process.cwd();
const packageJsonPath = path.join(rootDir, 'package.json');
const changelogPath = path.join(rootDir, 'CHANGELOG.md');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;
const semverPattern = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

if (!semverPattern.test(currentVersion)) {
  throw new Error(`Invalid package version: ${currentVersion}`);
}

function bumpVersion(version, type) {
  const [major, minor, patch] = version.split('.').map(Number);

  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

const SECTION_BY_TYPE = {
  feat: '### Added',
  fix: '### Fixed',
  perf: '### Changed',
  refactor: '### Changed',
  docs: '### Changed',
  // Release tooling, CI, and dependency chores stay out of the public changelog.
  chore: null,
  test: null,
  build: null,
  ci: null,
};

// Sections render in this order regardless of how recent each one is.
const SECTION_ORDER = ['### Added', '### Fixed', '### Changed'];

// Builds the entry body from commits made since the previous release tag so the
// changelog describes real changes instead of a fixed baseline blurb.
function collectCommitSections() {
  let range = [];

  try {
    const lastTag = execFileSync('git', ['describe', '--tags', '--abbrev=0'], {
      cwd: rootDir,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();

    if (lastTag) {
      range = [`${lastTag}..HEAD`];
    }
  } catch {
    // No tag reachable yet: fall back to the whole history.
  }

  let log = '';

  try {
    log = execFileSync('git', ['log', ...range, '--no-merges', '--pretty=format:%s'], {
      cwd: rootDir,
      encoding: 'utf8',
    });
  } catch {
    return [];
  }

  const grouped = new Map();

  for (const raw of log.split('\n')) {
    const subject = raw.trim();

    if (!subject) continue;

    const match = subject.match(/^(\w+)(?:\([^)]*\))?(!)?:\s*(.+)$/);
    const section = match ? SECTION_BY_TYPE[match[1]] : undefined;
    const text = match?.[3]?.trim();

    if (!section || !text) continue;

    if (!grouped.has(section)) {
      grouped.set(section, []);
    }

    grouped.get(section).push(`- ${text.charAt(0).toUpperCase()}${text.slice(1)}`);
  }

  return [...grouped]
    .sort(([a], [b]) => SECTION_ORDER.indexOf(a) - SECTION_ORDER.indexOf(b))
    .map(([section, lines]) => [section, ...lines].join('\n'));
}

function createChangeLogEntry(version) {
  const date = new Date().toISOString().slice(0, 10);
  const sections = collectCommitSections();
  const body = sections.length ? sections : ['### Changed', '- Updated the component registry.'];

  // Blank lines between sections keep headings from being absorbed into the
  // preceding list item when the changelog is rendered as Markdown.
  return [`## [${version}] - ${date}`, '', body.join('\n\n'), ''].join('\n');
}

function updateChangelog(version) {
  const entry = createChangeLogEntry(version);

  if (!fs.existsSync(changelogPath)) {
    fs.writeFileSync(changelogPath, `# Changelog\n\n${entry}\n`);
    return;
  }

  const current = fs.readFileSync(changelogPath, 'utf8');

  if (current.includes(`## [${version}]`)) {
    return;
  }

  // Insert below the title so the heading stays at the top of the document.
  const firstBreak = current.indexOf('\n');
  const title = firstBreak === -1 ? current : current.slice(0, firstBreak);
  const body = firstBreak === -1 ? '' : current.slice(firstBreak + 1).replace(/^\n+/, '');

  fs.writeFileSync(changelogPath, `${title}\n\n${entry}\n${body}`);
}

function printUsage() {
  console.log('Usage: node scripts/version.mjs <check|bump> [major|minor|patch]');
}

if (command === 'check') {
  console.log(currentVersion);
  process.exit(0);
}

if (command === 'bump') {
  const nextVersion = bumpVersion(currentVersion, bumpType);
  packageJson.version = nextVersion;
  fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
  updateChangelog(nextVersion);
  console.log(nextVersion);
  process.exit(0);
}

if (command === 'notes') {
  if (!fs.existsSync(changelogPath)) {
    console.log('No changelog available yet.');
    process.exit(0);
  }

  const changelogContent = fs.readFileSync(changelogPath, 'utf8');
  const latestEntryMatch = changelogContent.match(/## \[[^\]]+\][\s\S]*?(?=\n## \[|$)/);
  console.log(latestEntryMatch ? latestEntryMatch[0].trim() : changelogContent.trim());
  process.exit(0);
}

printUsage();
process.exit(1);
