# Specification: Migrate CMS from Sanity to Strapi

## Metadata
- **ID**: spec-2026-07-22-strapi-migration
- **Status**: approved
- **Created**: 2026-07-22

## Clarifying Questions Asked
1. **Why switch off Sanity?** User explicitly requested Strapi by name
   (https://strapi.io/), a deliberate choice rather than reacting to a
   problem with Sanity (Sanity's free tier was already confirmed
   sufficient in an earlier conversation — the 30-day trial banner some
   Sanity projects show is for optional Growth-plan features, not a
   shutoff).
2. **Hosting** — unlike Sanity (fully managed) or Payload (embeds inside
   Next.js), Strapi is a separate application requiring its own server
   and database. User initially chose Strapi Cloud, then changed to
   **local-only for now** — no production hosting decision needed until
   the site is actually ready to go live on a real domain.

## Problem Statement
Replace the Sanity CMS integration with Strapi, per explicit user
request, while preserving all real content already migrated into the
CMS layer (services, team, process steps, pricing tiers, product
catalog, site settings) and the existing graceful-fallback behavior
(every section renders real static copy when the CMS is unreachable).

## Current State
- Sanity: 8 schema types, embedded Studio at `/studio`, GROQ query layer
  at `src/sanity/queries.ts`, seed script at `scripts/seed-sanity.ts`.
- Every homepage/page section imports typed query functions
  (`getServices`, `getTeamMembers`, etc.) and falls back to hardcoded
  content when the CMS returns null.

## Desired State
- Strapi (Community, self-hosted architecture) running as its own
  project at `../himatech-cms` (sibling directory to this repo — Strapi
  is a full separate Node application, not embeddable like Payload).
- 8 content types mirroring the Sanity schema exactly (same field names)
  so the query layer's TypeScript interfaces don't change shape.
- Public read access enabled programmatically via a bootstrap hook
  (`himatech-cms/src/index.ts`), not manual admin-panel clicking — this
  keeps the setup reproducible.
- `src/lib/cms/{client,queries}.ts` replaces `src/sanity/*` with the
  same exported function names/interfaces, so every consuming component
  needed only an import-path change, not a rewrite.
- Real content reseeded into Strapi via an idempotent seed script
  (`himatech-cms/scripts/seed.js`, using Strapi's `documents()` API
  directly against a headless-booted instance — no HTTP round-trip).
- Sanity fully removed: packages, schema files, Studio route, config,
  env vars, docs.

## Stakeholders
- **Content editor**: HimaTech staff editing services/products/team via
  the Strapi admin panel instead of Sanity Studio.
- **Technical owner**: will eventually manage two deployments (Next.js
  on Vercel + Strapi somewhere reachable) instead of one app + a
  fully-managed SaaS — deferred until the site goes live.

## Success Criteria
- [x] All 8 content types exist in Strapi with identical field shapes to
      the removed Sanity schemas.
- [x] Public (unauthenticated) read access confirmed working for every
      content type without manual admin configuration.
- [x] Seed script populates real content (services, team, process,
      pricing drafts, product catalog, site settings) idempotently.
- [x] Every consuming component/page updated to the new query layer;
      zero remaining `@/sanity/*` imports anywhere in the codebase.
- [x] `npm run build`/`typecheck`/`lint` all clean in the Next.js app.
- [x] Verified live data flow end-to-end: created a distinctive test
      entry directly in Strapi and confirmed it renders on the actual
      page (not just that the fallback happens to look the same).
- [ ] Production hosting decision — deliberately deferred, not blocking.
      Strapi Cloud's `@strapi/plugin-cloud` dependency was removed from
      `himatech-cms` since it isn't being used.

## Constraints
### Technical Constraints
- Strapi needs its own database (SQLite locally; Postgres/MySQL likely
  in whatever production hosting is eventually chosen) — genuinely more
  infrastructure than Sanity's zero-ops model, a deliberate tradeoff the
  user accepted.
- SQLite doesn't support concurrent writers — the seed script and the
  dev server can't run against the same `.tmp/data.db` at once.
- Strapi 5.50.2 currently has critical/high vulnerabilities in its own
  dependency tree (`@ai-sdk`/`@modelcontextprotocol` packages powering
  the admin panel's AI-assist feature) that `npm audit fix --force`
  would only resolve by downgrading to Strapi 4.26.2 — not worth doing.
  Not introduced by anything in this migration; revisit when Strapi
  patches it upstream.

### Business Constraints
- None currently — production hosting (which would have this category
  of blocker, e.g. Strapi Cloud account creation) is deferred.

## Assumptions
- Draft/publish workflow disabled on all content types (`draftAndPublish:
  false`) — matches the "always live" document model used with Sanity,
  no separate publish step needed.
- Team member and product photos still ship as local files in
  `public/image/`, not uploaded through Strapi's media library — same
  decision made during the original Sanity build, unchanged here.

## Consultation Log
No external multi-model consultation — matches this project's standing
preference (established earlier in the conversation) for Claude-only
judgment on this codebase.
