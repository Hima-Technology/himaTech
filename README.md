# Hima Technologies — Marketing Site

Next.js 15 marketing site for Hima Technologies (Zanzibar), backed by a
Sanity CMS. See `codev/specs/1-cms-relaunch.md` and
`codev/plans/1-cms-relaunch.md` for the background and phased build plan.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS** with a custom design token system (`tailwind.config.ts`)
- **Sanity** for content (services, products, team, process, pricing,
  testimonials, FAQs), with an embedded Studio at `/studio`
- **Resend** for the contact form
- **Framer Motion** for scroll reveals

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Every content section falls back to real
static copy when Sanity isn't configured yet, so the site works
out of the box.

## Connecting Sanity CMS

1. `npx sanity login` then `npx sanity init` (creates a free project)
2. Copy `.env.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (defaults to `production`)
   - `SANITY_API_TOKEN` — a write token from sanity.io/manage, needed only for seeding
3. `npm run seed` — pushes the real content (services, team, process,
   pricing drafts, product catalog) into your project
4. Visit `/studio` to edit content directly

**Before real launch**, review and confirm in Studio: the draft pricing
tiers, process steps are placeholders based on common structure and
should be confirmed against actual HimaTech offerings; testimonials
stay hidden until real client quotes are added and `siteSettings.showTestimonials`
is turned on.

## Contact Form

Set `RESEND_API_KEY` in `.env.local` to enable email delivery from
`/contact-us`. Without it, submissions are logged to the server console
instead of failing silently.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (type-checked, linted)
- `npm run seed` — seed Sanity with real content
- `npm run typecheck` — `tsc --noEmit`

## Project Structure

```
src/app/(site)/     marketing pages (share the Navbar/Footer layout)
src/app/studio/      embedded Sanity Studio (no site chrome)
src/app/api/contact/ contact form email handler
src/components/      Navbar, Footer, and shared UI primitives (ui/)
src/components/sections/  homepage sections (Hero, Services, Pricing, ...)
src/sanity/          schemas, client, GROQ queries
scripts/seed-sanity.ts    content seed script
```
