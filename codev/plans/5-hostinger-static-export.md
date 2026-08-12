# Plan: Static Export for Hostinger + Standalone Mailer

Same scope as `codev/specs/5-hostinger-static-export.md`. No time
estimates — progress tracked by phase status only.

## Phase 1: Standalone Mailer Project
- **Status**: completed
- **Objective**: `../himatech-mailer` — `api/contact.js` (Vercel
  serverless function, `nodemailer` + Gmail SMTP transport, CORS
  restricted to the real origin, input validation matching the removed
  Next.js route's rules), `.env.example`, README with the exact Gmail
  App Password + Vercel deploy steps.
- **Evaluation**: git-initialized and committed locally (not yet pushed
  or deployed — that's the one remaining manual step).

## Phase 2: Remove Server-Only Pieces From the Main Site
- **Status**: completed
- **Depends on**: Phase 1
- **Objective**: Delete `src/app/api/`; update `ContactForm.tsx` to
  `fetch(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT)` with a clear
  console-error + error-state fallback when unset (rather than silently
  POSTing to a relative path that doesn't exist under static export);
  remove `resend` and `zod` from `package.json` (both were only used by
  the removed route, confirmed via grep before removing).
- **Evaluation**: zero remaining references to Resend/zod/`/api/contact`
  anywhere in `src/`.

## Phase 3: Static Export Configuration
- **Status**: completed
- **Depends on**: Phase 2
- **Objective**: `next.config.js` — `output: "export"`,
  `trailingSlash: true`, `images.unoptimized: true` (optimizer needs a
  server, unavailable in static export).
- **Deviation**: The build failed twice before succeeding, each time
  pointing at a different route handler needing
  `export const dynamic = "force-static"` — `robots.ts`, then
  `sitemap.ts`, then `opengraph-image.tsx`. Fixed one at a time as the
  build surfaced each; not something worth trying to predict all of up
  front versus just letting the build tell you.
- **Evaluation**: `npm run build` succeeds, `out/` generated.

## Phase 4: Apache/Hostinger Compatibility
- **Status**: completed
- **Depends on**: Phase 3
- **Objective**: Verify the actual output works under a static file
  server the way Hostinger's Apache would serve it — not just that
  `next build` exits 0.
- **Deviation**: First export attempt (without `trailingSlash`)
  produced `about-us.html` but no `about-us/index.html` — confirmed via
  a local `python3 -m http.server` test that requesting `/about-us`
  (the exact URL every internal `<Link>` uses) would 404 on real Apache
  without extra server config, since Apache doesn't resolve
  extensionless URLs to `.html` files by default. Added
  `trailingSlash: true`, which makes Next.js both emit
  `about-us/index.html` (which Apache serves automatically via
  `DirectoryIndex`) and rewrites every internal `<Link>` href to include
  the trailing slash — confirmed via grep on the built HTML.
  Also added `public/.htaccess` (`ErrorDocument 404 /404.html` +
  cache-control headers) since Apache doesn't serve a static export's
  `404.html` automatically either.
- **Evaluation**: local static-server test — `/`, `/about-us/`,
  `/about-us` (redirects, then 200), `/contact-us/`, `/Our-Products/`,
  `/privacy-policy/`, `/terms-of-service/` all 200; `/nonexistent` 404.
  Spot-checked real CMS content (services list) present in the built
  `index.html`, confirming Strapi's build-time fetch actually ran (not
  silently falling back).

## Phase 5: Handoff
- **Status**: completed
- **Objective**: Zip `out/` for easy upload (`himatech-out.zip`),
  rewrite README with the Hostinger upload steps and the two
  Apache-specific gotchas explained (so future-you doesn't have to
  rediscover them), write this spec/plan/review.
