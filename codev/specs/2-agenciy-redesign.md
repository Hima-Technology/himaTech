# Specification: Agenciy Template Redesign

## Metadata
- **ID**: spec-2026-07-18-agenciy-redesign
- **Status**: approved
- **Created**: 2026-07-18

## Problem Statement
The user wants to redesign the himaTech website and apply the exact visual style, layout hierarchy, copywriting references, and aesthetics of the "Agenciy" Framer website (https://agenciy.framer.website/). The current site uses a mix of light/dark themes, blue branding, and does not align with the dark, minimalist, and luxury aesthetic of the modern Agenciy template.

## Current State
- Next.js 15.1.3 App Router with `@/src/app/(site)/` as the primary page group.
- Styling uses Tailwind CSS with light background (`bg-white`) and dark-text body as the default.
- Navigation header shifts between transparent and white on scroll.
- Hero contains Zanzibarian branding and a video/image webp overlay.
- Layout sections are structured on a white background with traditional cards.

## Desired State
- The entire project is transitioned to a default dark mode theme matching `agenciy.framer.website/` (pure black `#000` background, `#0c0c0c` and `#1b1b1b` containers, with white and `text-white/60` typography).
- Typography system utilizes `Playfair Display` for italicized heading accents (serif italic) and `Space Grotesk` or `Inter` for bold display and clean body content.
- Visual components redesigned to match the precise Framer template:
  - **Header/Navbar**: Fixed, transparent border, white link navigation, pill-shaped glowing CTA button ("Let's Chat!").
  - **Hero**: Clean text "Create, *Impactful*" / "We Build Brands, websites and digital experience with intention, clarity and care" on dark background with subtle grid overlay and backing glow.
  - **Services**: 4-card grid on dark backdrop, featuring minimal icons and clean bordered panels.
  - **About Us**: Modern stats list with thin divider lines ("100+ Projects Launched", etc.) and personal expertise timelines.
  - **Process**: Grid featuring large numbers `/01`, `/02`, etc., with clean labels.
  - **Featured Projects**: Showcase cards with large imagery, categories, dates, and smooth zoom-on-hover effects.
  - **Awards**: A structured table or row layout showing design achievements.
  - **Team Members**: Styled cards with grayscale photos that colorize on hover.
  - **Pricing**: 3-card structure (Starter, Growth, Custom) utilizing custom hover glowing outlines.
  - **Testimonials**: Elegant grid cards quoting client feedback.
  - **FAQs**: Accordion UI with smooth slide transitions.
  - **Contact Form**: Clean text inputs with bottom-only borders.
  - **Footer**: Structured links, socials, and Tanzania-based contact details matching the Agenciy aesthetic.

## Success Criteria
- [ ] Website default background is pure black `#000` with text-white and text-white/60 body copy.
- [ ] Heading elements mix Sans-serif and Playfair Display italic accents correctly.
- [ ] Border assets and divider lines use transparent white borders (`border-white/10` or `border-neutral-800`).
- [ ] No layout regressions; all pages (Home, About Us, Our Products, Contact Us) are fully operational and rebuilt under the new theme.
- [ ] `npm run build` compiles with no TypeScript or linting errors.
- [ ] Responsive layouts work perfectly on mobile, tablet, and desktop viewports.
- [ ] Hero layout fits the screen viewport exactly (`min-h-screen` flex box spacing everything up to the "Our Tech Stack" marquee).
- [ ] Background features gentle moving color animations (drifting glow blobs) using the brand's `hima-blue` accent scheme (#0A2463, #3A5AB0, #071648) without modifying other color parameters.
- [ ] Stylish italic serif text elements use the brand blue accent color (text-accent-400) to harmonize with the background color animations.
