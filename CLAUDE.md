# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Add shadcn component:** `pnpm dlx shadcn@latest add <component>`

Package manager is **pnpm** (not npm).

## Architecture

Next.js 16 App Router site for **Sethify** — a web development and AI automation agency. TypeScript, Tailwind CSS v4, React 19.

### Pages (all under `src/app/`)
- `/` — Home (Hero, ServicesPreview, WhyHandCoded, PricingPreview, SocialProof, FinalCTA)
- `/about` — Founder story, values, tech stack
- `/services` — Web dev pricing, e-commerce, AI automation, process steps (uses anchor nav)
- `/projects` — Portfolio grid
- `/contact` — Contact form + FAQ accordion

### Component Organization (`src/components/`)
- `layout/` — Header, Footer (rendered in root layout, wrap all pages)
- `home/` — Homepage-specific sections
- `about/`, `services/`, `contact/`, `projects/` — Page-specific sections
- `common/` — Shared components (Section, PageHero)
- `ui/` — shadcn/ui primitives (button, accordion, input, select, textarea, label, dropdown-menu, sheet)
- `theme-provider.tsx` — next-themes ThemeProvider (dark mode via class strategy)
- `mode-toggle.tsx` — Dark/light mode toggle
- `FuzzyText.tsx` — Custom text effect component

### Key Conventions
- **Path alias:** `@/*` maps to `./src/*`
- **shadcn/ui:** New York style, CSS variables, RSC-compatible. Config in `components.json`. ReactBits registry available at `@react-bits`.
- **Fonts:** Outfit (headings, `--font-heading`) and Nunito Sans (body, `--font-body`) via `next/font/google`
- **Animations:** Framer Motion for scroll reveals and interactions. Respect `prefers-reduced-motion`.
- **Styling:** Tailwind v4 with CSS variables for theming. Brand colors defined as custom properties in `globals.css` (coral, ink, cream, stone, etc.).
- **Utility:** `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)

### Brand Colors
Primary: `--coral` (#FF6B4A), `--ink` (#0F172A), `--cream` (#FDF8F3). Coral is the accent — use sparingly. See `prompt.md` for full design system spec.

### Design Principles
- Mobile-first responsive. 8px spacing grid. Max content width 1280px.
- Generous whitespace. Clear visual hierarchy.
- Target 95+ PageSpeed. Use Next.js `<Image>`, dynamic imports for heavy components.
- WCAG 2.1 AA accessibility. Semantic HTML, proper ARIA labels, keyboard navigation.
