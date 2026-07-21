<!-- housekeeper:description An agentic consortium building for the here and now — captain of the powderworks fleet -->
<!-- housekeeper:topics agents, fleet, housekeeping, powderworks, repo-hygiene -->
# powderworks

An agentic consortium building for the here and now.

Powderworks is the family name for Zack Maril's open source tools and the
captain of their fleet. This repo holds the fleet manifest and the root CI
that checks the other repos' CI — each member audits itself with
[housekeeping](https://github.com/zmaril/housekeeping); the captain checks
the auditors are on duty. The powderworks.dev site will live here too.

## The fleet

- [Straitjacket](https://github.com/zmaril/Straitjacket) — a fast,
  deterministic scanner for the weird code and text LLMs like to produce
- [housekeeping](https://github.com/zmaril/housekeeping) — checks that a
  GitHub repo is in good order, and helps fix it
- [powdermonkey](https://github.com/zmaril/powdermonkey) — an agent
  orchestration harness for aspiring slop cannons
- [fluessig](https://github.com/zmaril/fluessig) — entl's schema tool: describe
  a typed entity graph once, project it everywhere
- [disponent](https://github.com/zmaril/disponent) — dispatch work to coding
  agents (local tmux or remote, exe.dev first) and watch it run
- [entl](https://github.com/zmaril/entl) — pull a repo's git history and
  forge activity into streaming data (under active development)

## Usage

The roster lives in [housecaptain.toml](housecaptain.toml). The
[housecaptain workflow](.github/workflows/housecaptain.yml) runs
`housekeeper captain` on it weekly and on every push: each member must have
a housekeeping workflow that fires on pull requests, pushes, and a schedule,
with its latest run green — and member configs must not contradict fleet
policy; divergence is surfaced, never silently resolved.

## Getting started with your own fleet

Install [housekeeping](https://github.com/zmaril/housekeeping), write a
`housecaptain.toml` naming your repos, and add the captain workflow to
whichever repo you call flagship. `housekeeper fleet housecaptain.toml`
runs the full audit locally; the action's `captain:` input runs the
delegation check in CI.

## Contributing

The tools take contributions in their own repos — this one is mostly a
roster and a website. To hack on the site locally, run `scripts/dev.sh` to
install the powderworks.dev site deps; see [`site/README.md`](site/README.md)
for the dev and build commands. If the captain is wrong about what a healthy
fleet looks like, [file an issue](https://github.com/zmaril/housekeeping/issues)
on housekeeping, where the checks live. PR titles here follow
[conventional commits](https://www.conventionalcommits.org).

## License

[MIT](LICENSE).
