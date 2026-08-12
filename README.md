# Hima Technologies — Marketing Site

Next.js 15 marketing site for Hima Technologies (Zanzibar), statically
exported for Hostinger shared hosting, backed by a local Strapi CMS at
build time. See `codev/specs/` for the phased build history.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript, **static export**
  (`output: "export"` — no Node server at the hosting end)
- **Tailwind CSS** with a custom design token system (`tailwind.config.ts`)
- **Strapi** for content (services, products, team, process, pricing,
  testimonials, FAQs) — a separate application, see `../himatech-cms`.
  Fetched at *build time only*; rebuild + re-upload when content changes.
- **himatech-mailer** (`../himatech-mailer`) — standalone Vercel function
  that sends the contact form via Gmail SMTP, since this static site has
  no server of its own to hold email credentials
- **Framer Motion** for scroll reveals

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Every content section falls back to real
static copy when Strapi isn't configured or reachable, so the site
works out of the box.

## Connecting the Strapi CMS

The CMS is a separate project at `../himatech-cms` (sibling directory) —
it's its own application with its own database, not part of this repo.

1. `cd ../himatech-cms && npm install`
2. `npm run develop` — starts Strapi at http://localhost:1337, prompts you
   to create an admin account at `/admin` on first run
3. `npm run seed` (from `../himatech-cms`, with the dev server stopped —
   SQLite doesn't like two writers at once) — pushes the real content
4. Copy `.env.example` to `.env.local` in *this* repo and set
   `STRAPI_URL=http://localhost:1337`
5. Visit http://localhost:1337/admin to edit content directly
6. **Rebuild** (`npm run build`) and **re-upload `out/`** to Hostinger —
   content is baked in at build time, there's no live/runtime updating
   on static hosting.

Strapi itself only runs locally for now — no production hosting decided
yet, deliberately. Public read access is enabled automatically via the
bootstrap hook in `himatech-cms/src/index.ts`.

**Before real launch**, review and confirm in the admin panel: the draft
pricing tiers and process steps are placeholders and should be confirmed
against actual HimaTech offerings; testimonials stay hidden until real
client quotes are added and Site Settings > `showTestimonials` is on.

## Contact Form

The form posts to `NEXT_PUBLIC_CONTACT_ENDPOINT` (set in `.env.local`),
a standalone serverless function at `../himatech-mailer` that sends via
Gmail SMTP — see that project's README for the Gmail app-password and
Vercel deploy steps. Without this env var set, the form fails clearly
(logs an error, shows the "something went wrong" state) rather than
silently posting nowhere.

## Deploying to Hostinger

```bash
npm run build
```

This produces `out/` — a fully static site (HTML/CSS/JS, no server
needed). Upload **the contents of `out/`** (not the folder itself) to
`public_html` via Hostinger's File Manager or FTP.

Two things specific to static export + Apache (Hostinger's shared
hosting), already handled in this repo:
- `next.config.js` sets `trailingSlash: true` so pages export as
  `about-us/index.html` instead of `about-us.html` — Apache's default
  `DirectoryIndex`/`mod_dir` behavior serves that correctly with zero
  extra server config, which a flat `.html` file wouldn't.
- `public/.htaccess` sets `ErrorDocument 404 /404.html` so the custom
  404 page actually gets served (Apache doesn't do this automatically
  for a static export's `404.html`).

Rebuild and re-upload whenever content or code changes — there's no
live updating on static hosting.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — static export to `out/` (type-checked, linted)
- `npm run typecheck` — `tsc --noEmit`

CMS-side scripts (`npm run develop`, `npm run seed`) live in
`../himatech-cms`, not here.

## Project Structure

```
src/app/(site)/     marketing pages (share the Navbar/Footer layout)
src/components/      Navbar, Footer, and shared UI primitives (ui/)
src/components/sections/  homepage sections (Hero, Services, Pricing, ...)
src/lib/cms/         Strapi client + typed query layer (build-time fetch)
```
