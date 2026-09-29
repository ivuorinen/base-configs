# Architecture Profile

Generated: 2026-09-25

Confidence: none — manual review required

## Detected Patterns

Detected: none.

No catalogued pattern (DDD, Hexagonal, Clean, Onion, Layered, CQRS, Event Sourcing, Event-Driven, MVC/MVVM/MVP,
Vertical Slice, Modular Monolith, Microservices, Microkernel, Repository, Pipe and Filter, Plugin, SOA) reaches Low
confidence. Structural evidence:

- The repository contains no source modules: `git ls-files` lists configuration, documentation and workflows only.
  The single JavaScript file, `eslint.config.mjs`, is the repo's own lint config.
- `package.json` has no `main`, `exports` or `files`; the published artifact is the manifest plus its `dependencies`
  on the seven `@ivuorinen/*-config` packages.
- The only import edge in the tree is `eslint.config.mjs` → `@ivuorinen/eslint-config`.

Shape, for orientation (descriptive, not a catalogued pattern): a dependency aggregator (meta-package) whose
entire contract is its `dependencies`, `engines` and the behavior those seven packages bring into a consumer's install.

## Detected Combination

None.

## Inferred Structural Rules

None.

## Ambiguities & Contradictions

None structural. Contract-level drift between the declared `engines` and the dependency closure is recorded as a
finding (`contract-9f44a52c`), not as an architecture rule.
