# Plan: Agenciy Template Redesign

Same scope as `codev/specs/2-agenciy-redesign.md`.

## Phase 1: Foundation (CSS & Design Tokens)
- **Status**: completed
- **Tasks**:
  - Update `src/app/globals.css` base layer to default the body to a pure black background (`bg-black` or `bg-[#030303]`) and text-white.
  - Clean up any legacy honeycomb-grid or non-dark classes from global utility layers.
  - Set styling tokens for custom inputs and Radix UI primitives.

## Phase 2: Layout Shell (Navbar & Footer)
- **Status**: completed
- **Tasks**:
  - Rebuild `src/components/navbar.tsx` with a dark transparent background, glassmorphism blur, white links, and a glowing pill button.
  - Rebuild `src/components/footer.tsx` to match the exact spacing, vertical stack list of links, location coordinates, and logo presentation.

## Phase 3: Homepage Rebuild (All Sections)
- **Status**: completed
- **Tasks**:
  - Rebuild `src/components/sections/Hero.tsx` using the "Create, *Impactful*" header structure, stats blocks, and stack marquee.
  - Rebuild `src/components/sections/Services.tsx` with 4 card modules (Brand, UI/UX, Dev, Marketing) and detailed dark style styling.
  - Rebuild `src/components/sections/Process.tsx` with numbered stages.
  - Rebuild `src/components/sections/Work.tsx` to display products as showcase cards with category tag details.
  - Rebuild `src/components/sections/Pricing.tsx` with glowing card modules.
  - Rebuild `src/components/sections/Testimonials.tsx` with modern quotes grid.
  - Rebuild `src/components/sections/CTA.tsx` with the "Let's Talk" bottom section form and accordion FAQs.

## Phase 4: Secondary Pages
- **Status**: completed
- **Tasks**:
  - Rebuild `/about-us` (`src/app/(site)/about-us/page.tsx`) with professional timelines, experience charts, and stats.
  - Rebuild `/contact-us` (`src/app/(site)/contact-us/page.tsx`) with clean form elements.
  - Rebuild `/Our-Products` (`src/app/(site)/Our-Products/page.tsx`) to show case studies or product items in dark grid.

## Phase 5: Verification & Quality Assurance
- **Status**: completed
- **Tasks**:
  - Run linting and typecheck (`npm run typecheck` and `npm run lint`).
  - Perform production build (`npm run build`).

## Phase 6: Hero Viewport Fit & Background Animations
- **Status**: completed
- **Tasks**:
  - Add floating background glow keyframes in `src/app/globals.css` using brand color scales.
  - Re-adjust `src/components/sections/Hero.tsx` wrapper to use `min-h-screen` flex-col structure, spacing everything dynamically up to "Our Tech Stack".
  - Perform typechecks, lint checks, and run build verification.

## Phase 7: Stylish Font Color Theme Alignment
- **Status**: in-progress
- **Tasks**:
  - Replace `text-neutral-400` with `text-accent-400` in all stylish font occurrences in Hero, Services, Process, Work, Team, Testimonials, About, Products, and Contact pages.
  - Run typecheck and verify build succeeds.
