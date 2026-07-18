# Plan: CMS Relaunch & Next-Level Redesign

Same scope as `codev/specs/1-cms-relaunch.md`. No time estimates — progress is tracked by phase status only (`pending` / `in-progress` / `completed` / `blocked`).

## Phase 0: Codev Adoption
- **Status**: completed
- **Objective**: Scaffold `codev/` in himaTech and write this spec/plan.
- **Evaluation**: `codev/` present, spec and plan committed.
- **Commit**: `[Spec 1] Adopt codev and write spec/plan`

## Phase 1: Foundation — Next.js upgrade + design system tokens
- **Depends on**: Phase 0
- **Objective**: Upgrade Next.js/React, drop `output: 'export'`, remove `@material-tailwind/react`/`honeycomb-grid` as hard dependencies, add Radix/Framer Motion/next-sanity/Resend, rebuild `tailwind.config.ts` as a real token system (color scale anchored on `hima-blue`, type scale via `next/font` with a geometric display + Inter body pairing, spacing/shadow/radius primitives).
- **Evaluation**: `npm run build` succeeds on the upgraded stack (even with old pages temporarily broken is acceptable mid-phase, but the phase isn't done until the build is green); no more `output: 'export'`; design tokens documented in `tailwind.config.ts`.
- **Commit**: `[Spec 1][Phase: foundation] chore: Upgrade Next.js and rebuild design tokens`

## Phase 2: Sanity CMS Integration
- **Depends on**: Phase 1
- **Objective**: Add `sanity.config.ts` + embedded Studio route, define schemas (`siteSettings`, `hero`, `service`, `product`, `teamMember`, `processStep`, `pricingTier`, `testimonial`, `caseStudy`, `faq`, `contactInfo`), typed client/query helpers, and a seed script populated with the real migrated content (products from `public/data/products.json`, team from `patners.tsx`, mission/vision/contact info) plus clearly-labeled draft placeholders for pricing/process/portfolio.
- **Evaluation**: Studio loads at `/studio`, seed script runs successfully against the user's Sanity project, content is fetchable via the query helpers.
- **Manual blocker**: user must run Sanity's interactive login/project creation and hand back the project ID — flagged, not silently worked around.
- **Commit**: `[Spec 1][Phase: sanity-cms] feat: Add Sanity schemas, client, and seed script`

## Phase 3: Home Page Rebuild
- **Depends on**: Phase 2
- **Objective**: Rebuild the homepage on the princeton-inspired structure using real + Sanity-sourced content: Hero → Services (6 real service areas) → Process (draft) → Pricing (draft) → Work (top products as portfolio highlights, no fake case studies) → Testimonials (conditional on `showSection`) → CTA → Footer.
- **Evaluation**: Homepage renders with zero hardcoded copy for the sections above (all sourced from Sanity), zero broken images, matches new design tokens.
- **Commit**: `[Spec 1][Phase: home-rebuild] feat: Rebuild homepage on new structure and CMS content`

## Phase 4: About / Products / Contact Pages
- **Depends on**: Phase 2 (can run in parallel with Phase 3)
- **Objective**: About page keeps real Mission/Vision/Why-Choose-Us content, adds Sanity-sourced team grid. Products page becomes Sanity-backed (drop `api.microlink.io` screenshot dependency). Contact page uses real footer contact info and a working `app/api/contact/route.ts` (Resend).
- **Evaluation**: All three pages build and render correctly; contact form either sends a real email or logs a clear "no API key configured" message in dev; no fabricated contact details remain anywhere.
- **Commit**: `[Spec 1][Phase: secondary-pages] feat: Rebuild About/Products/Contact on CMS content`

## Phase 5: Cleanup
- **Depends on**: Phases 3–4
- **Objective**: Remove confirmed-dead files (`page.tsx.bak`, `src/app/index.tsx`, dead duplicate `hero.tsx`, `lazy-iframe.tsx`, `HexagonalShowcase.tsx`), unused template logos, oversized unused images (`Training.png/jpg`), `Deleted/` asset folders (after confirming nothing is still referenced), stale `vercel.json` screenshot-function config, and fix the malformed `.gitignore` `cache/*` rule. Explicitly confirm with the user before touching the stray nested SvelteKit `himaTech/` folder — out of scope unless they say otherwise.
- **Evaluation**: `git status` clean of the flagged dead files, no broken references introduced, no deletion happened without a confirmation step for anything ambiguous.
- **Commit**: `[Spec 1][Phase: cleanup] chore: Remove dead code and unused assets`

## Phase 6: Polish
- **Depends on**: Phase 5
- **Objective**: Real OG/Twitter share images, wire up the existing (currently orphaned) favicon sets, WCAG AA contrast pass, `prefers-reduced-motion` support for Framer Motion transitions, Lighthouse pass.
- **Evaluation**: No 404'ing meta assets, Lighthouse categories in the 90s, reduced-motion respected.
- **Commit**: `[Spec 1][Phase: polish] feat: SEO, accessibility, and motion polish`

## Phase 7: Review
- **Depends on**: Phase 6
- **Objective**: Write `codev/reviews/1-cms-relaunch.md` — what shipped vs. spec, deviations, lessons learned, and the "must-do-before-real-launch" checklist (confirm draft pricing/process/portfolio copy, provide Resend key if not already, decide on the stray SvelteKit folder, add real testimonials whenever secured).
- **Evaluation**: Review doc committed; `verify` skill run against the finished site.
- **Commit**: `[Spec 1][Phase: review] docs: Add review and lessons learned`
