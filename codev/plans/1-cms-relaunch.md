# Plan: CMS Relaunch & Next-Level Redesign

Same scope as `codev/specs/1-cms-relaunch.md`. No time estimates — progress is tracked by phase status only (`pending` / `in-progress` / `completed` / `blocked`).

## Phase 0: Codev Adoption
- **Status**: completed
- **Objective**: Scaffold `codev/` in himaTech and write this spec/plan.
- **Evaluation**: `codev/` present, spec and plan committed.
- **Commit**: `[Spec 1] Adopt codev and write spec/plan` (`c03bd68`)

## Phase 1: Foundation + Home/Secondary Page Rebuild
- **Status**: completed
- **Depends on**: Phase 0
- **Deviation from original plan**: Originally split into separate Phase 1 (foundation), Phase 3 (home), Phase 4 (secondary pages). Merged into one phase/commit in practice — removing `@material-tailwind/react` broke every page simultaneously (it was imported nearly everywhere), so there was no working intermediate state to commit between "upgrade the stack" and "every page compiles again." Also: the hexagon grid motif was fully removed per direct user instruction mid-build ("design as new i need not hexagonal tiles"), rather than kept as a lightweight accent as the spec originally proposed.
- **Objective**: Upgrade Next.js 13→15 / React 18→19, drop `output: 'export'`, remove Material Tailwind/honeycomb-grid/Puppeteer, new Tailwind design tokens (Space Grotesk + Inter, brand/accent/violet/neutral color scales), rebuild every page on real content with the princeton-inspired structure.
- **Evaluation**: `npm run build` green with zero suppressed errors; all routes return 200; real content (services, mission/vision, team bios, product catalog, real contact info) migrated, no broken image paths.
- **Commit**: `[Spec 1][Phase: foundation-and-pages]` (`2d390d5`)

## Phase 2: Sanity CMS Integration
- **Status**: completed
- **Depends on**: Phase 1
- **Deviation**: Dropped the standalone `caseStudy` schema type from the original plan — the Work/portfolio section reuses the `product` type instead of duplicating content. `hero` and `contactInfo` were folded into `siteSettings` rather than separate document types, since there's only ever one of each.
- **Objective**: `sanity.config.ts` + embedded Studio at `/studio` (in its own `(site)`-sibling route so it renders without the marketing Navbar/Footer), schemas (`siteSettings`, `service`, `product`, `teamMember`, `processStep`, `pricingTier`, `testimonial`, `faq`), typed query layer, seed script.
- **Evaluation**: Studio route builds and loads (`/studio` → 200). Every CMS-backed section falls back to real static content when Sanity isn't configured, verified via build + dev smoke test with no env vars set.
- **Manual blocker (still open)**: Sanity project creation requires an interactive `sanity login` — can't be completed headlessly. User must run it, set env vars, then `npm run seed`.
- **Commit**: `[Spec 1][Phase: sanity-cms]` (`8568e45`)

## Phase 3 & 4: Home/Secondary Pages
- **Status**: completed (folded into Phase 1's commit — see deviation note above)

## Phase 5 & 6: Cleanup + Polish
- **Status**: completed
- **Deviation**: Combined into one phase/commit since the cleanup and the favicon/OG-image polish touched overlapping files (the favicon assets themselves).
- **Objective**: Remove confirmed-dead files/assets, stale scripts (`hexagonal.sh`, `screenshotGen.sh`), stale `vercel.json`; wire real favicons via Next's app-directory convention; generate a proper OG share image (`next/og`, since no Gemini API key was available for `codev generate-image`); WCAG AA contrast pass (`neutral-500` → `neutral-600` for body text, was ~4.2:1 against the 4.5:1 threshold).
- **Evaluation**: `public/` dropped 33MB → 3MB. Build green. OG image verified visually. Left `public/image/abubakar.jpg` (unlisted 5th person's photo) and the stray nested SvelteKit `himaTech/` folder untouched — flagged in the review, not deleted, since neither was confirmed safe to remove.
- **Commit**: `[Spec 1][Phase: cleanup-and-polish]` (`a7e7863`)

## Phase 7: Review
- **Status**: completed
- **Objective**: Write `codev/reviews/1-cms-relaunch.md` and the must-do-before-launch checklist.
- **Commit**: `[Spec 1][Phase: review]`
