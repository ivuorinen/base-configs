---
id: security-44eab753
auditor: security
severity: critical
category: security
area: yarn.lock
status: open
found: 2026-10-27
location: yarn.lock:2989
location_sha: e5dfefd07ada30c9
---

# yarn.lock resolves 10 packages with known advisories, which fails PR Lint on every open PR

## Problem

dependency-vulnerability. The committed lockfile resolves ten packages that osv-scanner, trivy and `yarn npm audit` all report as vulnerable. MegaLinter's grype, osv-scanner and trivy linters fail on this lockfile, so the required `PR Lint` check is red on all 11 open PRs (#585, #591-#600) regardless of what each PR changes.

## Evidence

Scanned 2026-10-27 on origin/main c3b0e6d. osv-scanner 2.7.0, trivy 0.76.0 (`--include-dev-deps`) and `yarn npm audit --recursive` report the same set (grype 0.120.1 cannot parse a Yarn Berry lockfile: `unable to parse yarn v2 package key`, so it is not a source here).

| Package | Advisories | First fixed |
| --- | --- | --- |
| handlebars 4.7.9 | GHSA-8r5x-fm3f-whwj (CVSS 9.8), GHSA-p8wg-vrv2-v86f (9.2), GHSA-xw65-4hp5-5hc7 | 4.7.10 |
| shell-quote 1.10.0 | GHSA-pqg4-j6r4-53mv (trivy: CRITICAL) | 1.11.0 |
| undici 8.11.2 | GHSA-4qv8-2p9j-2685, GHSA-f72v-6w45-q472, GHSA-xjj6-f33q-929c | 8.12.2 |
| http-cache-semantics 4.2.0 | GHSA-ch52-4w7c-c8xp (affects <= 4.2.0) | 4.3.0 |
| markdown-it 14.3.2 | GHSA-gfr2-rv44-r23c, GHSA-vfgh-jcmw-g37q | 14.3.3 |
| source-map-js 1.2.1 | GHSA-68fv-2mgg-jv7q | 1.2.2 |
| fast-uri 3.1.8 | GHSA-333x-w4r6-6crp, GHSA-w74x-v6f9-j3xg, GHSA-wjr9-j795-jxcr, GHSA-xhq7-xmqj-769h | 3.1.9 |
| ip-address 10.7.2 | GHSA-rxp7-6hxx-x8q5 | 10.7.4 |
| smol-toml 1.7.2 | GHSA-r4xh-jqrq-34v2 | 1.9.0 |
| katex 0.16.47 | GHSA-238p-pmpm-9mq7 | 0.18.2 |

PR #600's `PR Lint` log: grype 14 errors, osv-scanner 15 errors, trivy 1 error.

## Impact

Every dependency PR is blocked by a failure it did not cause, so security updates queue up instead of merging. The vulnerable code runs in this repo's own tooling (release notes rendering via handlebars, npm's fetch stack via @semantic-release/npm, markdownlint-cli).

## Fix

Refresh the lockfile after the config packages are re-released: bump the seven `@ivuorinen/*` ranges to their current releases, `yarn up -R` each listed package, and re-run `osv-scanner scan source --lockfile=yarn.lock` until it exits 0. katex 0.18.2 and smol-toml 1.9.0 sit outside the ranges markdownlint-cli 0.49.1 allows (`^0.16.0`, `~1.7.0`), so they need a markdownlint-cli release that widens them, not a resolution forced across a major.

## Status — partially applied (2026-10-27)

`fix/audit-2026-10` raised the seven config ranges to their published
releases (7e3266b), removed npm-run-all2 and with it shell-quote (79cfaa3),
re-resolved the lockfile and narrowed `js-yaml: ^5.0.0` to
`markdownlint-cli/js-yaml: ^5.4.1` (abadaf4), and recorded a dated
osv-scanner ignore for the unreachable katex advisory (78e3db7). handlebars,
undici, fast-uri, http-cache-semantics, ip-address, markdown-it, source-map-js
and js-yaml are fixed.

Remaining: smol-toml 1.7.2 (GHSA-r4xh-jqrq-34v2). It arrives through the
published @ivuorinen/markdownlint-config 2.0.6, whose markdownlint-cli ^0.49.1
pins `~1.7.0`. base-configs-markdownlint `fix/audit-2026-10` raises
markdownlint-cli to ^0.50.0 (smol-toml ~1.9.1); once that is released, raise
the range here, drop the `markdownlint-cli/js-yaml` resolution, confirm
osv-scanner exits 0 and resolve this finding.
