# Architecture

## Overview

Hima Technologies marketing site. Next.js 15 (App Router) + React 19 +
TypeScript, styled with a custom Tailwind design token system, content
managed through an embedded Sanity Studio. Deployed on Vercel (server
runtime, not static export — required for the Sanity fetches and the
contact form API route).

## Directory Structure

```
himaTech/
├── codev/                       # Specs, plans, reviews (this feature: 1-cms-relaunch)
├── sanity.config.ts             # Sanity Studio config (schema, plugins)
├── scripts/seed-sanity.ts       # One-time content seed
├── src/
│   ├── app/
│   │   ├── (site)/              # Marketing pages — share Navbar/Footer via this group's layout.tsx
│   │   │   ├── page.tsx         # Home
│   │   │   ├── about-us/
│   │   │   ├── contact-us/
│   │   │   └── Our-Products/
│   │   ├── studio/[[...tool]]/  # Embedded Sanity Studio — no site chrome
│   │   ├── api/contact/         # Contact form email handler (Resend)
│   │   ├── layout.tsx           # Root layout: fonts, metadata only (no Navbar/Footer)
│   │   ├── opengraph-image.tsx  # Generated OG share image (next/og)
│   │   └── favicon.ico / icon.png / apple-icon.png
│   ├── components/
│   │   ├── navbar.tsx, footer.tsx, layout.tsx   # Site chrome ((site) group layout)
│   │   ├── ui/                  # Button, Container, SectionHeading, Badge, RevealOnScroll
│   │   ├── sections/            # Hero, Services, Process, Pricing, Work, Testimonials, Team, CTA
│   │   └── products/            # ProductWebsiteCard
│   ├── sanity/
│   │   ├── schemaTypes/         # siteSettings, service, product, teamMember, processStep, pricingTier, testimonial, faq
│   │   ├── client.ts, env.ts    # Sanity client (null when unconfigured)
│   │   └── queries.ts           # GROQ queries + typed fetch helpers
│   └── lib/products-data.ts     # Real product catalog — fallback source + seed source
```

## Key Components

### Content-fallback pattern

Every CMS-backed section (`Services`, `Process`, `Pricing`, `Team`,
`Work`, `Footer`, the homepage `Testimonials` gate) is an async server
component that calls a `sanity/queries.ts` fetch, then falls back to a
local constant with the real existing content when Sanity returns
`null` (unconfigured) or an empty array (configured but not yet
seeded/edited). This means the site is fully functional before Sanity
is connected, and switches over automatically once content exists.

### `(site)` route group

Introduced so `/studio` can render full-screen without the marketing
site's Navbar/Footer. The root `layout.tsx` only sets up fonts and
metadata; `(site)/layout.tsx` wraps the marketing pages with
`components/layout.tsx` (Navbar + Footer).

### Testimonials

Deliberately absent until real client quotes exist — `siteSettings.showTestimonials`
must be `true` AND at least one `testimonial` document must exist for
the section to render at all. This carries forward a decision the team
already made (see `Docs.txt`), not a new one.

## External Dependencies

| Dependency | Purpose |
|------------|---------|
| Sanity (`sanity`, `next-sanity`, `@sanity/client`) | Headless CMS + embedded Studio |
| Resend | Contact form email delivery |
| Framer Motion | Scroll-reveal animation (`RevealOnScroll`) |
| Radix UI (`react-dialog`) | Accessible mobile nav drawer |

## Configuration

- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN` — see `.env.example`
- `RESEND_API_KEY` — contact form; without it, submissions are logged server-side instead of sent

## Conventions

- Design tokens (`brand`/`accent`/`violet`/`neutral` color scales, `font-display`/`font-sans`) live in `tailwind.config.ts` — components should pull from these, not raw Tailwind grays.
- New homepage sections go in `src/components/sections/`, one file per section, composed in `(site)/page.tsx`.

---

*Last updated: Spec 1 (CMS relaunch), 2026-07-18.*
