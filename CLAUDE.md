# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node is managed via **mise**, which reads `.nvmrc` automatically. No manual activation needed in an interactive shell. For scripts:

```sh
mise exec -- yarn <command>
```

| Task | Command |
|------|---------|
| Fix all (prettier → eslint → markdownlint) | `yarn fix` |
| ESLint autofix | `yarn eslint:fix` |
| ESLint report only | `yarn eslint:report` |
| Prettier autofix | `yarn prettier:fix` |
| Prettier report only | `yarn prettier:report` |
| Markdownlint autofix | `yarn markdownlint:fix` |
| Markdownlint report only | `yarn markdownlint:report` |
| Validate last commit message | `yarn commitlint` |

There is no build step and no test suite — this is a configuration distribution package.

## Architecture

`@ivuorinen/base-configs` is a **meta-package**: it has no source code of its own. Its sole purpose is to declare the 7 individual config packages as `dependencies` so consumers can install one package and get all configs:

| Config | Package |
|--------|---------|
| Browserslist | `@ivuorinen/browserslist-config` |
| CommitLint | `@ivuorinen/commitlint-config` |
| ESLint | `@ivuorinen/eslint-config` |
| Markdownlint | `@ivuorinen/markdownlint-config` |
| Prettier | `@ivuorinen/prettier-config` |
| Semantic Release | `@ivuorinen/semantic-release-config` |
| Stylelint | `@ivuorinen/stylelint-config` |

Each config package is versioned and published independently to npm. This repo only bumps their version ranges.

- **Package manager**: Yarn 4 (Berry) with `node-modules` linker (no PnP) — always use `yarn` for repo development; consumers may install via `npm` as shown in the README
- **Module system**: ES Modules (`"type": "module"`)
- **Node requirement**: `>=20` (active version read from `.nvmrc` by mise)

## Release Process

Releases are fully automated via **semantic-release** triggered on push to `main`. Commit messages must follow Conventional Commits (enforced by commitlint via a simple-git-hooks `commit-msg` hook). Never manually bump versions or publish.

## EditorConfig Rules

`.editorconfig` is authoritative — all generated code must follow it:
- Charset: UTF-8, line endings: LF
- Indent: 2 spaces (all file types)
- Max line length: 120 (disabled for Markdown)
- Trim trailing whitespace (except Markdown)

---

## context-mode — MANDATORY routing rules

You have context-mode MCP tools available. These rules are NOT optional — they protect your context window from flooding. A single unrouted command can dump 56 KB into context and waste the entire session.

### BLOCKED commands — do NOT attempt these

#### curl / wget — BLOCKED
Any Bash command containing `curl` or `wget` is intercepted and replaced with an error message. Do NOT retry.
Instead use:
- `ctx_fetch_and_index(url, source)` to fetch and index web pages
- `ctx_execute(language: "javascript", code: "const r = await fetch(...)")` to run HTTP calls in sandbox

#### Inline HTTP — BLOCKED
Any Bash command containing `fetch('http`, `requests.get(`, `requests.post(`, `http.get(`, or `http.request(` is intercepted and replaced with an error message. Do NOT retry with Bash.
Instead use:
- `ctx_execute(language, code)` to run HTTP calls in sandbox — only stdout enters context

#### WebFetch — BLOCKED
WebFetch calls are denied entirely. The URL is extracted and you are told to use `ctx_fetch_and_index` instead.
Instead use:
- `ctx_fetch_and_index(url, source)` then `ctx_search(queries)` to query the indexed content

### REDIRECTED tools — use sandbox equivalents

#### Bash (>20 lines output)
Bash is ONLY for: `git`, `mkdir`, `rm`, `mv`, `cd`, `ls`, `yarn install`, `pip install`, and other short-output commands.
For everything else, use:
- `ctx_batch_execute(commands, queries)` — run multiple commands + search in ONE call
- `ctx_execute(language: "shell", code: "...")` — run in sandbox, only stdout enters context

#### Read (for analysis)
If you are reading a file to **Edit** it → Read is correct (Edit needs content in context).
If you are reading to **analyze, explore, or summarize** → use `ctx_execute_file(path, language, code)` instead. Only your printed summary enters context. The raw file content stays in the sandbox.

#### Grep (large results)
Grep results can flood context. Use `ctx_execute(language: "shell", code: "grep ...")` to run searches in sandbox. Only your printed summary enters context.

### Tool selection hierarchy

1. **GATHER**: `ctx_batch_execute(commands, queries)` — Primary tool. Runs all commands, auto-indexes output, returns search results. ONE call replaces 30+ individual calls.
2. **FOLLOW-UP**: `ctx_search(queries: ["q1", "q2", ...])` — Query indexed content. Pass ALL questions as array in ONE call.
3. **PROCESSING**: `ctx_execute(language, code)` | `ctx_execute_file(path, language, code)` — Sandbox execution. Only stdout enters context.
4. **WEB**: `ctx_fetch_and_index(url, source)` then `ctx_search(queries)` — Fetch, chunk, index, query. Raw HTML never enters context.
5. **INDEX**: `ctx_index(content, source)` — Store content in FTS5 knowledge base for later search.

### Subagent routing

When spawning subagents (Agent/Task tool), the routing block is automatically injected into their prompt. Bash-type subagents are upgraded to general-purpose so they have access to MCP tools. You do NOT need to manually instruct subagents about context-mode.

### Output constraints

- Keep responses under 500 words.
- Write artifacts (code, configs, PRDs) to FILES — never return them as inline text. Return only: file path + 1-line description.
- When indexing content, use descriptive source labels so others can `ctx_search(source: "label")` later.

### ctx commands

| Command | Action |
|---------|--------|
| `ctx stats` | Call the `ctx_stats` MCP tool and display the full output verbatim |
| `ctx doctor` | Call the `ctx_doctor` MCP tool, run the returned shell command, display as checklist |
| `ctx upgrade` | Call the `ctx_upgrade` MCP tool, run the returned shell command, display as checklist |
