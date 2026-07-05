# Changelog

Notable changes to powderworks, newest first, by date.

## 2026-07-05

- fleet-owned managed configs: canonical stylelint + vale configs live under
  `.fleet/`, declared as `[[policy.managed-config]]` in the manifest, and
  `fleet-sync.yml` pushes them out to members as isolated PRs when they change.
  Depends on the managed-config support in housekeeping (zmaril/housekeeping#46)
  and a `FLEET_PAT` secret with write access to the members.

## 2026-07-04

- the flagship exists: fleet roster in housecaptain.toml, captain CI
  checking that every member's housekeeping CI is on duty
