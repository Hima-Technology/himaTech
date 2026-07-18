# Specification: CMS Relaunch & Next-Level Redesign

## Metadata
- **ID**: spec-2026-07-18-cms-relaunch
- **Status**: approved
- **Created**: 2026-07-18

## Clarifying Questions Asked
1. **CMS platform**: Sanity.io (hosted headless CMS + embedded Studio) — chosen over Payload (self-hosted) and a git-based Markdown/JSON approach for best Next.js DX with zero infrastructure to run.
2. **Rewrite scope**: Full rebuild — Next.js upgraded, dead code removed, sections rebuilt on a new design system, rather than restyling in place.
3. **Content strategy**: Migrate genuine existing company content (mission/vision, "who we are", team bios, product catalog, real footer contact info) rather than discard it. Draft realistic placeholder copy only for structural sections that have no real content yet (pricing tiers, process steps, portfolio highlights) — clearly flagged for the client to confirm before launch. Testimonials remain empty/hidden by default, honoring the team's own prior decision recorded in `Docs.txt` (no fabricated client quotes).
4. **Multi-agent consultation**: User opted for Claude-only judgment (no external Codex/Gemini `consult` CLI gates) for this project — `codev doctor` also showed Gemini unauthenticated at the time.

## Problem Statement
The current himaTech marketing site (Next.js 13.4, statically exported) is company-critical for customer acquisition but is unfinished and inconsistent: broken image paths are live on the homepage, the `/contact-us` page shows fabricated contact details that contradict the real ones in the footer, several components are dead/duplicated, and there is no content-management capability — every piece of copy and every image path is hardcoded in JSX, so any content change requires a code deploy. The visual design is a lightly-modified Creative Tim template, not a differentiated "next level" identity for a software company selling technical credibility (software development, AI, data analytics, cybersecurity, IT consulting).

## Current State
- Next.js 13.4 App Router (mixed with legacy patterns), statically exported (`output: 'export'`), no server runtime.
- `@material-tailwind/react` + a honeycomb-grid hero as the primary UI kit/layout mechanism.
- Content hardcoded across `src/app/*.tsx` and `src/components/*.tsx`; one page (`Our-Products`) fetches from a static `public/data/products.json`.
- No CMS, no working contact form backend (client-side-only `console.log`/`alert`), no email delivery.
- Real, valuable content already exists but is scattered/inconsistent: 4 real team bios with photos (`patners.tsx`), a real 6-product catalog (`public/data/products.json`), real mission/vision/"who we are"/"why choose us" copy (`about-us/page.tsx`, `hero.tsx`), real contact info in `footer.tsx` that contact-us/page.tsx contradicts.
- Known defects: broken image paths (`at-glance.tsx`'s `/image/team.webp` only exists under `public/image/Deleted/`), dead files (`page.tsx.bak`, `src/app/index.tsx`, duplicate `hero.tsx` in two locations), an intentionally-disabled testimonials section with placeholder names, unused ~22MB of unoptimized images, and a stray unrelated SvelteKit project nested inside the repo root.

## Desired State
- Codev adopted for this and future feature work (spec → plan → implement → review).
- Sanity CMS backs all editable content: services, products, team members, process steps, pricing tiers, testimonials (toggleable), FAQs, case studies/portfolio highlights, and site-wide contact info — editable via Sanity Studio without a code deploy.
- The site is rebuilt on a coherent design system (palette anchored on the existing `hima-blue`, a geometric/sans type pairing, consistent spacing/shadow/radius tokens, restrained motion) informed by the ui-ux-pro-max methodology for a software/AI/cybersecurity consultancy — not a generic template look.
- Content architecture follows a proven conversion structure (hero → services → process → pricing → work/portfolio → testimonial (conditional) → contact → footer), populated with HimaTech's real content wherever it exists.
- The contact form actually delivers email (via Resend) to `info@himatech.co.tz`.
- Dead code and broken asset references are removed; no 404'ing images remain.
- The site runs on standard Next.js server deployment (Vercel) since a real CMS + email backend both need server/ISR capability.

## Stakeholders
- **Primary users**: prospective HimaTech clients researching the company before reaching out.
- **Content editors**: HimaTech staff (e.g. Usama Talib Juma) who need to update services/products/team/pricing without a developer.
- **Technical owner**: whoever maintains the Next.js/Sanity codebase going forward.

## Success Criteria
- [ ] `codev/` adopted with spec/plan/review docs tracked in git.
- [ ] `npm run build` succeeds with zero TypeScript/ESLint errors (build-time checks re-enabled, not silenced).
- [ ] All site copy for services, products, team, pricing, process, FAQs, and contact info is served from Sanity, editable via `/studio` without a redeploy.
- [ ] No 404'ing images or dead links anywhere on Home, About, Products, Contact.
- [ ] Testimonials section renders nothing when no approved testimonial exists (no fabricated quotes ship).
- [ ] Contact form submission delivers a real email to `info@himatech.co.tz` (or fails loudly in dev with a clear log if no API key is configured yet).
- [ ] Visual design is demonstrably differentiated from the current Creative Tim template baseline (new palette application, new type pairing, new section layouts) while keeping the existing `hima-blue` brand anchor and hexagon motif as a lightweight accent.
- [ ] Dead files (`page.tsx.bak`, unused `index.tsx`, duplicate dead `hero.tsx`, `lazy-iframe.tsx`, `HexagonalShowcase.tsx`) removed after confirming nothing of value is lost.

## Constraints
### Technical Constraints
- Must run on Vercel (a `vercel.json` already exists, implying this is the intended host).
- Must keep the existing real content (team bios/photos, product catalog, mission/vision copy, real contact info) — migration, not deletion.
- No fabricated client testimonials or fabricated client case studies — this is a trust-sensitive claim about third parties, unlike draft pricing/process copy which is the company's own forward-looking content.

### Business Constraints
- Sanity project provisioning requires an interactive login the agent cannot complete headlessly — the user must create the project and hand back the project ID.
- Contact form email delivery requires a Resend API key the user must provide before real launch.

## Assumptions
- The user wants Vercel as the deploy target (implied by existing `vercel.json`; not otherwise stated).
- Draft pricing tiers, process steps, and portfolio highlights are acceptable to ship as clearly-editable CMS placeholders, to be confirmed/edited by the client in Sanity Studio before real public launch.
- The stray nested SvelteKit `himaTech/` folder at the repo root is out of scope and will not be touched without explicit confirmation.

## Consultation Log
External multi-model consultation (Codex/Gemini via the `consult` CLI) was explicitly waived by the user for this project. Review responsibility rests with the user and with Claude's own judgment during implementation.
