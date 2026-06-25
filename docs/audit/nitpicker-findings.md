# Nitpicker Findings

- Generated: 2026-06-25
- Last validated: 2026-06-25
- Scope: all uncommitted changes (changed-files mode) on branch `chore/upgrades`

## Summary

- Total: 1 | Open: 1 | Fixed: 0 | Invalid: 0

Reviewed changes:

- Prettier YAML reformats: `codeql.yml`, `stale.yml`, `sync-labels.yml`, `.yarnrc.yml`
- `js-yaml` resolution added to `package.json`
- node_modules cache-key change in `pr.yml` and `publish.yml`
- New config files: `.coderabbit.yaml`, `.mega-linter.yml`

No correctness, security, reliability, maintainability, or convention defects were found.

## Open Findings

### Advisory

#### [N1] zizmor online-audit re-enable cannot be confirmed without a CI run

- Category: reliability
- Area: `.mega-linter.yml`
- Problem: Exposing `GITHUB_TOKEN` lets zizmor's online `impostor-commit` audit authenticate instead of returning HTTP 401.
- Evidence: `ACTION_ZIZMOR_UNSECURED_ENV_VARIABLES` is in the MegaLinter v9.5.0 schema and is the documented remedy.
- Evidence: Online audits run only inside MegaLinter's CI; local validation cannot exercise the token hand-off.
- Impact: Informational. If MegaLinter does not surface `GITHUB_TOKEN` to the zizmor step in CI, the 401 may persist.
- Fix: No action now. If CI still 401s, set `ACTION_ZIZMOR_ARGUMENTS: --no-online-audits` to skip only online audits.

## Verification notes (no findings)

- Prettier quote changes parse to identical YAML trees versus `HEAD` for all four files; no semantic change.
- `js-yaml` `^4.2.0` removes the vulnerable `4.1.1` (CVE-2026-53550); only `4.2.0` remains, with no `3.x` consumer.
- Cache key `hashFiles('.nvmrc', '**/yarn.lock')` references existing files; no `restore-keys`, so a Node bump misses cleanly.
- `.coderabbit.yaml` and `.mega-linter.yml` pass prettier and yamllint, and validate against their published JSON schemas.
- `zizmor --persona auditor .github/workflows/` reports no findings.

## Fixed

None.

## Invalid

None.
