# Plan: Migrate CMS from Sanity to Strapi

Same scope as `codev/specs/4-strapi-migration.md`. No time estimates —
progress tracked by phase status only.

## Phase 1: Scaffold Strapi Project
- **Status**: completed
- **Objective**: `npx create-strapi@latest himatech-cms` (sibling
  directory, TypeScript, SQLite, no example data), approve native
  install scripts (better-sqlite3, sharp, @swc/core, esbuild).
- **Deviation**: `DATABASE_FILENAME=` (empty string) in the generated
  `.env` overrode the code's default fallback (`.tmp/data.db`) with an
  empty path, causing `SqliteError: unable to open database file` — the
  `.tmp` directory existing wasn't the issue, the resolved path was the
  project root itself. Fixed by setting `DATABASE_FILENAME=.tmp/data.db`
  explicitly.
- **Commit**: n/a (separate project/repo, not committed to himaTech)

## Phase 2: Define Content Types + Public Permissions
- **Status**: completed
- **Depends on**: Phase 1
- **Objective**: 8 content types (`service`, `product`, `team-member`,
  `process-step`, `pricing-tier`, `testimonial`, `faq` as collection
  types; `site-setting` as a single type) with `draftAndPublish: false`,
  mirroring the removed Sanity schema field-for-field. Bootstrap hook in
  `src/index.ts` grants the public role `find`/`findOne` on all of them
  programmatically, so permissions don't require manual admin-panel
  setup.
- **Evaluation**: `npm run build` (Strapi) compiles clean; unauthenticated
  `curl http://localhost:1337/api/services` returns 200 with no auth
  header.

## Phase 3: Seed Script + Real Content
- **Status**: completed
- **Depends on**: Phase 2
- **Objective**: `himatech-cms/scripts/seed.js`, using Strapi's
  `compileStrapi()`/`createStrapi()` factory functions (the exact
  pattern Strapi's own `console` CLI command uses internally — the
  commonly-referenced `strapi.compile()` API from older docs doesn't
  exist in 5.50.2) to boot a headless instance and call `.documents(uid)
  .create()` directly, no HTTP round-trip. Idempotent per-collection
  (checks `findMany({limit:1})` before seeding a whole collection, skips
  if non-empty — not per-item, which would create the first item then
  silently skip the rest on a second run).
- **Evaluation**: `npm run seed` ran clean against the real content
  (6 services, 4 team members, 4 process steps, 3 pricing tiers, 6
  products, 1 site-settings record); rerunning it is a no-op.

## Phase 4: Next.js Client + Query Layer
- **Status**: completed
- **Depends on**: Phase 2
- **Objective**: `src/lib/cms/client.ts` (fetch wrapper, returns null on
  any failure/misconfiguration — same graceful-degradation contract as
  `isSanityConfigured` had) + `src/lib/cms/queries.ts` (identical
  exported interface/function names to the removed
  `src/sanity/queries.ts`, so consuming components needed only an
  import-path swap).
- **Evaluation**: typecheck clean.

## Phase 5: Rewire Components + Remove Sanity
- **Status**: completed
- **Depends on**: Phase 4
- **Objective**: `@/sanity/queries` → `@/lib/cms/queries` across all 9
  importing files (mechanical, since interfaces didn't change). Remove
  `src/sanity/`, `src/app/studio/`, `sanity.config.ts`, `sanity.cli.ts`,
  `scripts/seed-sanity.ts`, all `@sanity/*`/`sanity`/`next-sanity`/
  `@portabletext/react`/`styled-components`/`tsx` packages (the last
  three were Sanity-only, confirmed unused elsewhere first). Updated
  `next.config.js` (Sanity CDN remote pattern → localhost:1337 for
  Strapi media), `robots.ts` (dropped the now-nonexistent `/studio`
  disallow rule), `.env.example`/`.env.local`, README, and two stray
  code comments referencing "Sanity Studio".
- **Evaluation**: zero `@/sanity` or `Sanity` references left in
  `src/`; `npm install` dropped 819 packages and cut audit findings from
  20 to 2 (the Sanity CLI tooling chain was the source of most of them).

## Phase 6: End-to-End Verification
- **Status**: completed
- **Depends on**: Phase 5
- **Objective**: `npm run build`/`typecheck`/`lint` clean in the Next.js
  app. Live-data-flow proof: created a distinctive test service
  (`ZZZ_STRAPI_LIVE_TEST`) directly via Strapi's admin API and confirmed
  it rendered on the actual homepage — a same-content fallback check
  isn't sufficient proof since the seeded and fallback copy are
  identical by design.
- **Evaluation**: confirmed (see review doc for the exact verification
  steps and cache-revalidation gotcha encountered).

## Phase 7: Handoff + Review
- **Status**: completed
- **Depends on**: Phase 6
- **Objective**: Write `codev/reviews/4-strapi-migration.md`.
- **Deviation**: User reconsidered Strapi Cloud after the initial
  handoff and chose local-only for now instead. Removed the unused
  `@strapi/plugin-cloud` dependency and its `deploy` script from
  `himatech-cms/package.json`, and rewrote the hosting sections of the
  README/spec accordingly — production hosting is deliberately deferred,
  not a pending blocker.
