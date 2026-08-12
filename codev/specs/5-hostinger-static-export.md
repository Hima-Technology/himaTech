# Specification: Static Export for Hostinger + Standalone Mailer

## Metadata
- **ID**: spec-2026-07-22-hostinger-static-export
- **Status**: approved
- **Created**: 2026-07-22

## Clarifying Questions Asked
1. **Deploy target**: user wants to upload to Hostinger — confirmed
   shared hosting (no Node.js runtime), which is incompatible with the
   current architecture's `/api/contact` route and runtime CMS
   revalidation.
2. **Contact form under static export**: since API routes can't run on
   static/shared hosting, the form needs a different backend. User
   wants to use their own Gmail account (`usama.lion65@gmail.com`) via
   SMTP to send to `info@himatech.co.tz`, rather than a third-party form
   service (Formspree) — but real SMTP credentials can't safely live in
   client-side code on a static site. Resolved by moving just the email
   endpoint to a standalone serverless function (`../himatech-mailer`,
   deployed separately, e.g. on Vercel) that holds the Gmail app
   password server-side; the static site's form POSTs to that function's
   URL cross-origin.
3. **CMS updates under static export**: confirmed acceptable that
   content only updates on rebuild + re-upload, no live/runtime
   revalidation — matches the earlier decision to run Strapi locally
   with no production hosting yet.

## Problem Statement
Convert the site from a server-rendered Next.js app (Node hosting
target) to a static export deployable to Hostinger shared hosting,
without silently breaking the contact form or losing CMS-driven content.

## Current State (before this phase)
- `next.config.js` had no `output` set (standard Node-hosted build).
- `src/app/api/contact/route.ts` sent email via Resend, called from
  `ContactForm.tsx` via a same-origin `fetch("/api/contact")`.
- `src/app/{robots,sitemap}.ts` and `opengraph-image.tsx` used dynamic
  route handlers without static-export annotations.
- CMS content fetched server-side with `next: { revalidate: 60 }`
  (ISR-style), meaningless without a running Node server.

## Desired State
- `output: "export"` + `trailingSlash: true` in `next.config.js`.
- No API routes in this repo — `src/app/api/` removed entirely.
- `ContactForm.tsx` posts to `NEXT_PUBLIC_CONTACT_ENDPOINT`, an external
  URL pointing at the new `../himatech-mailer` project.
- `../himatech-mailer` — a minimal standalone project (not part of this
  repo) with one Vercel serverless function
  (`api/contact.js`) using `nodemailer` + Gmail SMTP, CORS-restricted to
  the real site origin, holding `GMAIL_USER`/`GMAIL_APP_PASSWORD` as
  server-side env vars only.
- `robots.ts`/`sitemap.ts`/`opengraph-image.tsx` annotated
  `export const dynamic = "force-static"` (required by `output: export`,
  the build fails without it).
- `public/.htaccess` added so the custom 404 page and static-asset
  cache headers actually work on Apache (Hostinger's server), which
  doesn't do either by default for a static export.
- `out/` verified end-to-end via a local static file server (simulating
  Hostinger's Apache) before handoff, not just `next build` succeeding.

## Stakeholders
- **Technical owner**: now manages three things instead of one — the
  static site (Hostinger), the mailer function (Vercel), and Strapi
  (local, for now). More moving parts, explicitly chosen given the
  hosting constraint.

## Success Criteria
- [x] `npm run build` produces `out/` with zero errors.
- [x] Every route resolves correctly under a plain static file server,
      including extensionless URLs (`/about-us` → redirects to
      `/about-us/` → serves `index.html`) — verified this is a real
      Apache-shared-hosting gotcha, not assumed to just work.
- [x] Custom 404 page verified reachable via `.htaccess`'s
      `ErrorDocument` directive (not Apache's generic default 404).
- [x] Real CMS content still baked into the static HTML (spot-checked,
      not just build success).
- [x] `himatech-mailer` created, committed locally, documented with the
      exact Gmail-app-password + Vercel-deploy steps.
- [ ] `himatech-mailer` actually deployed and `NEXT_PUBLIC_CONTACT_ENDPOINT`
      pointed at it (manual — needs the user's Gmail app password and
      Vercel login, can't be completed headlessly).

## Constraints
### Technical Constraints
- Apache (Hostinger's web server) does not resolve extensionless URLs
  to `.html` files without `mod_negotiation`/`MultiViews` or custom
  rewrite rules — `trailingSlash: true` avoids needing either by
  producing real `index.html` files inside matching directories, which
  Apache's default `DirectoryIndex` handles with no config at all.
- Real SMTP/email credentials cannot be shipped in client-side
  JavaScript on a static site — hence the separate serverless function
  rather than embedding nodemailer directly in the frontend.
- Static export requires every route handler to explicitly opt into
  `dynamic = "force-static"`; the build fails otherwise (discovered by
  building, not by reading docs first — see review for the exact error
  messages).

## Assumptions
- CMS content freshness on the live site is "as of the last rebuild,"
  not real-time — explicitly accepted, matches the earlier decision to
  keep Strapi local/no live hosting.
- The mailer function's CORS is locked to `https://himatech.co.tz` by
  default (configurable via `ALLOWED_ORIGIN`) — update it if the real
  domain differs (e.g. `www.` prefix or a staging subdomain).

## Consultation Log
No external multi-model consultation — matches this project's standing
preference for Claude-only judgment.
