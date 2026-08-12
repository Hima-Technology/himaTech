# Review: Static Export for Hostinger + Standalone Mailer

## Summary
Converted the site from a Node-hosted Next.js app to a static export
for Hostinger shared hosting, and split the contact form's email
sending out to a standalone serverless function (`../himatech-mailer`)
since a static site has no server of its own to hold email credentials
safely.

## What Shipped
- `next.config.js`: `output: "export"`, `trailingSlash: true`,
  `images.unoptimized: true`.
- `../himatech-mailer`: new sibling project, one Vercel function
  (`api/contact.js`), `nodemailer` + Gmail SMTP, CORS-restricted,
  documented Gmail-app-password setup, committed locally.
- `src/app/api/` removed; `ContactForm.tsx` now posts to
  `NEXT_PUBLIC_CONTACT_ENDPOINT` with a clear failure state when unset.
- `resend`/`zod` dependencies removed (confirmed unused elsewhere first).
- `robots.ts`/`sitemap.ts`/`opengraph-image.tsx` annotated
  `dynamic = "force-static"` (required for static export, discovered by
  building and reading the error, not by anticipating it).
- `public/.htaccess` added (custom 404, cache headers).
- `out/` zipped for handoff; README rewritten with Hostinger-specific
  upload steps and the two Apache gotchas spelled out.

## Verification Performed
Not just "the build succeeded" — three separate checks:
1. `npm run typecheck`/`lint` clean.
2. Real content spot-check: grepped the built `index.html` for actual
   Strapi-sourced service titles, confirming the build-time fetch ran
   (this project has a standing pattern of fallback and real content
   looking identical by design, so build success alone doesn't prove
   data flowed — same lesson as the Strapi migration review).
3. **Local static-file-server simulation** (`python3 -m http.server`
   against `out/`) to test what Hostinger's Apache would actually do —
   this is what caught the `trailingSlash` issue. Without it, the site
   would have built successfully, looked fine to a cursory check, and
   then every internal navigation link would have 404'd on the real
   host — a mismatch that `next build` succeeding gives zero signal
   about.

## Deviations From Plan
- Needed three separate build-fix-rebuild cycles to find every route
  handler requiring `force-static` (robots, sitemap, then the OG image)
  — Next.js surfaces these one at a time rather than all at once.
- The `about-us.html`-vs-`about-us/index.html` issue wasn't something
  I'd have caught from a green build alone; it only showed up because I
  deliberately served the output through a static file server rather
  than trusting the build's exit code.

## Must-Do Before Real Launch
- **Deploy `../himatech-mailer`** to Vercel (needs the user's Vercel
  login and a Gmail App Password for `usama.lion65@gmail.com` — see
  that project's README).
- **Set `NEXT_PUBLIC_CONTACT_ENDPOINT`** in `.env.local` to the deployed
  mailer URL, then rebuild and re-upload `out/` — the contact form
  fails clearly (not silently) until this is done.
- **Set `ALLOWED_ORIGIN`** on the mailer deployment to the real site
  domain (defaults to `https://himatech.co.tz`) — update if it differs.
- Upload `out/` (or `himatech-out.zip`'s contents) to Hostinger's
  `public_html` via File Manager or FTP.
- Same outstanding items carried over from earlier phases: confirm
  draft pricing/process copy, add real testimonials before enabling
  that section, decide on production Strapi hosting whenever this goes
  fully live (content updates require a manual rebuild+reupload either
  way, but Strapi itself still only runs on this dev machine right now
  — if this machine is off, the *next* rebuild will use the local
  Strapi fallback content instead of latest CMS edits, worth knowing).

## Lessons Learned
- A green `next build` is not suffient evidence that a static export
  actually works on the target host — the trailing-slash/Apache
  DirectoryIndex mismatch would have shipped silently without
  deliberately simulating the real serving environment locally first.
- When a hosting constraint (no server) conflicts with a security
  requirement (credentials can't go in client code), the fix is
  architectural (split the one stateful piece into its own tiny
  service) rather than compromising on the security requirement.
