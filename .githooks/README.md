# .githooks

Committed git hooks that run this repo's CI gate locally, before a commit
lands — so failures surface here instead of after a push.

## Activate

Hooks are not enabled automatically on clone. Run once per checkout:

```sh
git config core.hooksPath .githooks
```

## What runs

captain is a docs/fleet-config repo. Its blocking CI code-checks are
straitjacket and Conventional Commits (the codespell, vale, and stylelint files
here are fleet-managed templates synced to members, not gates on captain), so:

- `pre-commit` runs `run-straitjacket` (see below).
- `commit-msg` enforces Conventional Commits on the subject line, matching the
  `conventional` PR-title check.

## run-straitjacket

captain's workflow installs the latest straitjacket release rather than pinning,
so the hook resolves the current release tag, then caches that binary per version
under `$XDG_CACHE_HOME/straitjacket/<version>/`. It passes no path argument, so
the scan matches CI.

## Bypass

`git commit --no-verify` skips the hooks for a single commit.
