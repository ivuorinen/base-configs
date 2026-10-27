---
id: deps-83deab14
auditor: deps
severity: low
category: maintainability
area: package.json
status: open
found: 2026-10-27
location: package.json:66-69
location_sha: 47a776213c3e3185
---

# markdownlint-cli js-yaml and smol-toml resolutions outlive markdownlint-cli 0.49

## Problem

package.json resolves `markdownlint-cli/js-yaml` to ^5.4.1 and `markdownlint-cli/smol-toml` to ^1.9.1, outside the ranges markdownlint-cli 0.49.1 declares. Both exist only because the published @ivuorinen/markdownlint-config 2.0.6 depends on markdownlint-cli ^0.49.1, whose pinned versions carry advisories.

## Evidence

markdownlint-cli 0.49.1 declares js-yaml ~5.2.1 and smol-toml ~1.7.0; smol-toml 1.7.2 carries GHSA-r4xh-jqrq-34v2 (fixed in 1.9.0). markdownlint-cli 0.50.0 declares js-yaml ~5.5.0 and smol-toml ~1.9.1, so both overrides are redundant once a markdownlint-config release depends on it. base-configs-markdownlint `fix/audit-2026-10` raises markdownlint-cli to ^0.50.0 but is not released yet. The resolutions were added in abadaf4 (js-yaml) and 838ef8b (smol-toml).

## Impact

A resolution keeps applying after its reason is gone: once markdownlint-cli 0.50 is in the tree, `markdownlint-cli/js-yaml: ^5.4.1` can resolve a js-yaml outside 0.50.0's ~5.5.0. Consumers are unaffected, since resolutions apply only to this repository's install.

## Fix

After @ivuorinen/markdownlint-config releases with markdownlint-cli ^0.50.0: raise its range here to that release, drop both `markdownlint-cli/*` resolutions, re-resolve, and confirm osv-scanner and trivy (as MegaLinter runs them) still exit 0.
