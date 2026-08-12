# Review: Migrate CMS from Sanity to Strapi

## Summary
Replaced the Sanity CMS integration with Strapi per explicit user
request. All 8 content types, the query layer's public interface, and
the graceful-fallback behavior carried over unchanged in shape — only
the transport (GROQ over Sanity's client vs REST over `fetch`) and the
hosting model (fully-managed SaaS vs a separate self-hosted app)
changed.

## What Shipped
- `himatech-cms/` — new sibling project (Strapi 5.50.2, TypeScript,
  SQLite locally), 8 content types matching the removed Sanity schema
  field-for-field, a bootstrap hook that grants public read access
  programmatically (no manual admin-panel permission clicking), and an
  idempotent seed script using Strapi's internal `documents()` API.
- `src/lib/cms/{client,queries}.ts` in the Next.js app — same exported
  function names and TypeScript interfaces the Sanity query layer had,
  so every consuming component needed only an import-path change.
- Sanity fully removed: 819 npm packages dropped, audit findings fell
  from 20 to 2 (nearly all the remaining vulnerabilities traced back to
  Sanity's own CLI tooling dependency chain).

## Deviations From Plan
- The commonly-referenced `strapi.compile()` / `strapi(app).load()`
  pattern for standalone scripts (from older Strapi docs/muscle memory)
  doesn't exist in 5.50.2 — the actual exports are `compileStrapi()` and
  `createStrapi()`. Found the correct pattern by reading Strapi's own
  `console` CLI command source rather than guessing further.
- `DATABASE_FILENAME=` (empty string, not unset) in the generated
  `.env` silently overrode the code's default SQLite path fallback,
  resolving to the project root itself instead of `.tmp/data.db` — a
  scaffolding quirk, not something in my control, but worth flagging
  since the error message ("unable to open database file") pointed at
  permissions/missing-directory, not at an empty env var.
- My own idempotency-check-per-item pattern in an early seed script
  draft was wrong (would create the first item in a collection, then
  incorrectly skip the rest on the same run) — caught it before running,
  restructured to check emptiness once per collection.

## Verification Performed
`npm run build`/`typecheck`/`lint` clean. More importantly: since the
seeded Strapi content and the hardcoded fallback content are
intentionally identical (same real HimaTech copy), a page looking
correct doesn't prove it's reading from Strapi rather than silently
falling back. Verified genuine live-data-flow by creating a
distinctive test entry (`ZZZ_STRAPI_LIVE_TEST`) directly via Strapi's
admin API, confirming it rendered on the actual homepage, then deleting
it. (First verification attempt returned no data at all — turned out to
be an unrelated shell-quoting issue with bracketed query-string
characters in my own `curl` commands, not a bug in the app; a plain
URL confirmed the data was there all along.)

## Must-Do Before Real Launch
- **Decide production hosting for Strapi** — deliberately deferred.
  Removed `@strapi/plugin-cloud` and its `deploy` script from
  `himatech-cms/package.json` since Strapi Cloud isn't the current
  plan; add it back (or set up a VPS instead) when the site is ready to
  go live, then set this app's production `STRAPI_URL` accordingly.
- **Change the local admin password** — `admin@himatech.co.tz` /
  `HimaTech2026!Secure` was set via the register-admin API for local
  dev only; set a real password (or recreate the admin) before any
  shared/production use.
- Same outstanding items carried over from the original Sanity build:
  confirm the draft pricing tiers/process steps against real HimaTech
  offerings, add real testimonials before turning on
  `showTestimonials`, decide whether to upload team/product photos
  through the CMS media library instead of local files.

## Post-Handoff Update
User reconsidered Strapi Cloud shortly after the initial handoff and
chose local-only for now. Removed the now-unused `@strapi/plugin-cloud`
dependency; `npm uninstall` surfaced that Strapi 5.50.2 itself currently
has critical/high vulnerabilities in its own admin-panel AI-assist
dependency chain (`@ai-sdk`, `@modelcontextprotocol/sdk`) — pre-existing,
not caused by this change, and not worth "fixing" since the only
resolution `npm audit fix --force` offers is downgrading to Strapi
4.26.2. Confirmed Strapi still boots clean and all 6 real services are
still intact after the package removal.

## Lessons Learned
- When a widely-documented API pattern doesn't match what's actually
  installed, check the tool's own source for how it uses itself
  internally (Strapi's `console` command) rather than iterating on
  variations of the remembered pattern.
- "The page shows the right content" is not sufficient proof a CMS
  integration is wired correctly when fallback and real content are
  designed to be identical — needed a deliberately distinctive,
  temporary probe value to prove genuine data flow.
