#!/usr/bin/env node

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

function createChangeLogEntry(version) {
  const date = new Date().toISOString().slice(0, 10);

  return [
    `## [${version}] - ${date}`,
    '',
    '### Added',
    `- Baseline release ${version} for the registry and docs platform.`,
    `- Added versioning metadata, changelog tracking, and GitHub release automation.`,
    '',
  ].join('\n');
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

  const updated = current.includes('# Changelog')
    ? `${entry}\n${current}`
    : `# Changelog\n\n${entry}\n${current}`;

  fs.writeFileSync(changelogPath, updated);
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
