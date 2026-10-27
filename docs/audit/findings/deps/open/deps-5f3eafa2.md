---
id: deps-5f3eafa2
auditor: deps
severity: low
category: maintainability
area: package.json
status: open
found: 2026-10-27
location: package.json:63
location_sha: af7afc8930c4099f
---

# conventionalcommits devDependency and <10 hold only hoist 9.x

## Problem

The conventional-changelog-conventionalcommits ^9.3.1 devDependency, and the Renovate hold that keeps it below 10, exist so that 9.x is hoisted to the root of this repository's tree, where the published @ivuorinen/semantic-release-config's plugins resolve their preset by name.

## Evidence

This repository releases with @ivuorinen/semantic-release-config 3.0.9 from its lockfile, which still passes `preset: "conventionalcommits"`; without the devDependency the root copy is the 10.4.1 of @commitlint/config-conventional and generateNotes fails. base-configs-semantic-release f9b6c8b loads the preset by path, which makes the root copy irrelevant, but it is not published yet.

## Impact

A workaround to maintain until removed, and consumers of the 3.0.9 range still run the by-name config.

## Fix

After semantic-release-config publishes f9b6c8b: raise the `@ivuorinen/semantic-release-config` dependency to that version (`fix(deps)`, so consumers who upgrade base-configs get it), then drop the devDependency and its Renovate hold and confirm release notes still render.
