# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`
- **Lint:** `pnpm lint`
- **Add shadcn component:** `pnpm dlx shadcn@latest add <component>`

Package manager is **pnpm** (not npm).

## Project Overview

**Sethify** is a web development and AI automation studio serving small service businesses (HVAC, dental, legal, plumbing, contractors). We build hand-coded websites, AI automation systems (phone answering, chatbots, scheduling, workflow automation), and custom Shopify storefronts. The studio is operated by Seth, positioned as "we" in all copy.

**Tagline:** "Faster sites. Smarter systems."
**Positioning:** "Built, not bought."
**Studio descriptor:** Web Development & AI Studio

### What We Sell
- Hand-coded websites: $150/month subscription or $3,000 one-time
- AI automation systems: $500-$2,000 setup, $200/month management
- Custom Shopify storefronts: Starting at $8,000
- Hosting (lump sum clients only): $25/month

These are the exact numbers. Use them consistently on every page. No rounding. No approximations.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (uses `@theme` directive in CSS, not tailwind.config.js)
- **UI Primitives:** shadcn/ui (New York style, CSS variables, RSC-compatible). Config in `components.json`. ReactBits registry available at `@react-bits`.
- **Fonts:** Outfit (headings, `--font-heading`) and Nunito Sans (body, `--font-body`) via `next/font/google`
- **Animations:** Framer Motion for scroll reveals and interactions. Respect `prefers-reduced-motion`.
- **Utility:** `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)
- **Path alias:** `@/*` maps to `./src/*`
- **Client tools:** n8n (automation), Shopify (e-commerce), PostgreSQL (database), Vercel (deployment)

## Architecture

### App Router Structure (`src/app/`)
- `/` — Homepage (Hero, ServicesPreview, WhyHandCoded, PricingPreview, SocialProof, FinalCTA)
- `/about` — Founder story, values, tech stack
- `/web-design` — Web design service page (parent)
- `/web-design/[hvac|dental|legal|plumbing|contractors]` — Industry web design verticals
- `/ai-systems` — AI automation service page (parent)
- `/ai-systems/[hvac|dental|legal|plumbing|contractors]` — Industry AI systems verticals
- `/projects` — Portfolio grid
- `/contact` — Contact form + FAQ accordion
- `/privacy` — Privacy policy
- `/terms` — Terms of service

### Component Organization (`src/components/`)
- `layout/` — Header, Footer (rendered in root layout, wrap all pages)
- `home/` — Homepage-specific sections
- `about/`, `services/`, `contact/`, `projects/` — Page-specific sections
- `common/` — Shared components (Section, PageHero)
- `ui/` — shadcn/ui primitives (button, accordion, input, select, textarea, label, dropdown-menu, sheet)
- `theme-provider.tsx` — next-themes ThemeProvider (dark mode via class strategy)
- `mode-toggle.tsx` — Dark/light mode toggle

## Reference Documents

The `docs/` directory contains detailed guidance documents. **Read the relevant doc before creating or editing content in that area:**

- `docs/` — Project documentation directory (brand guidelines, customer profiles, SEO research, copy references, and other strategic documents)

When creating any customer-facing content (page copy, proposals, marketing materials), check `docs/` first for existing guidance.

---

## Brand Identity

### Colors
- Coral: `--coral` (#FF6B4A) — primary accent, use sparingly
- Ink: `--ink` (#0F172A) — primary text
- Cream: `--cream` (#FDF8F3) — backgrounds
- Stone, Steel, and other neutrals defined as custom properties in `globals.css`

### Typography
- Headings: Outfit (`--font-heading`)
- Body: Nunito Sans (`--font-body`)
- Hierarchy: Follow existing component patterns for sizing

### Design Principles
- Mobile-first responsive. 8px spacing grid. Max content width 1280px.
- Generous whitespace. Clear visual hierarchy.
- Target 95+ PageSpeed. Use Next.js `<Image>`, dynamic imports for heavy components.
- WCAG 2.1 AA accessibility. Semantic HTML, proper ARIA labels, keyboard navigation.
- Coral is the accent. Use it for CTAs and key highlights, not everywhere.

### Brand Identity Is Locked
The brand (name, colors, typography, tagline, positioning) is finalized. Do not suggest brand revisions. Focus on building and improving content, pages, and functionality.

---

## Brand Voice & Writing Standards

### Voice Characteristics
- **Direct but warm:** Expert tone without consultant jargon. Say it plainly.
- **Confident but honest:** No hype. No overselling. If something has limitations, say so.
- **Conversational:** Would a real person say this out loud? If not, rewrite it.
- **Outcome-focused:** Talk about what the business gets, not what the technology does.

### Writing Rules (Non-Negotiable)

1. Short sentences. Active voice. Address the reader as "you/your."
2. Use "we" positioning (studio), never "I" (freelancer).
3. No em dashes (—). Use periods or commas instead.
4. No clichés, metaphors, or unnecessary adjectives.
5. No hashtags or semicolons.

### Banned Words — NEVER use these in any copy:
can, may, just, that, very, really, actually, basically, could, maybe, craft, imagine, realm, unlock, discover, revolutionize, utilize, harness, boost, powerful, cutting-edge, groundbreaking, remarkable, pivotal, furthermore, however, moreover, synergy, leverage, solutions (when non-specific), game-changing

### Preferred Language

| Use This | Not This | Why |
|----------|----------|-----|
| "Build" or "implement" | "Craft" or "create" | Implies real engineering work |
| "Systems" | "Tools" or "solutions" | Conveys completeness |
| "Capture" | "Generate" | Emphasizes seizing existing opportunities |
| Specific numbers | Vague claims | "12 additional leads/month" not "dramatically more leads" |
| Active voice | Passive voice | "We build your site" not "Your site is built by us" |

### Proof Points Required
Always back claims with specific metrics, client examples, before/after comparisons, or honest acknowledgment of limitations.

- ❌ "Our AI systems dramatically improve your business performance"
- ✅ "Our AI phone system captures an average of 12 additional leads per month for HVAC companies. Those are calls that would have gone to voicemail."

### Copy Context Rules
- **Cold traffic (homepage hero, landing pages):** Lead with the pain point. Then the solution. Then the CTA.
- **Warm traffic (service pages, verticals):** Lead with what you do. Be specific. Show proof.
- **Navigation (nav labels, breadcrumbs, footer):** Descriptive labels only. No persuasion.

---

## Target Customer Profile

### Who We Serve
- Small service businesses: HVAC, dental offices, law firms, plumbing companies, general contractors
- 1-50 employees, owner-operated or small team
- Revenue depends on local leads and booked appointments
- Non-technical. No IT department. Need things to "work."
- Decision makers are business owners/operations managers (30-60 years old)

### Customer Pain Points (Use These in Copy)
1. **Losing business to missed calls:** 42% of small businesses lose $500+/month to missed calls. Contractors miss 60-80% of incoming calls because they are on a job site.
2. **Website is a brochure, not a tool:** No lead generation. Poor mobile experience. Slow. Outdated.
3. **Drowning in admin work:** Repetitive questions, manual scheduling, no follow-up system.
4. **Burned by past developers:** Agencies that disappeared after launch. Overpromised. Underdelivered.
5. **AI confusion:** Do not understand what is real vs. hype. Worried about cost, complexity, and quality.

### How They Talk About Their Problems
- "I miss calls all day because I'm on the job site."
- "My website looks like it's from 2015."
- "The last guy took our money and disappeared."
- "I don't have time to learn another tool."
- "Will my customers know they're talking to a robot?"

### Common Objections & How to Address

**"We can't afford it right now"**
→ Show clear payback calculation. Emphasize missed revenue cost ($500+/month in lost calls). Offer the $150/month subscription as low-entry option.

**"We're too busy to implement"**
→ Show minimal time required from them. We handle the build. Break into phases. Show quick wins.

**"Tried this before, didn't work"**
→ Acknowledge the bad experience. Explain what is different (hand-coded, ongoing support, not build-and-disappear). Offer risk mitigation.

**"My customers won't like AI"**
→ Show the AI handles overflow and after-hours, not replacing humans. Offer trial period. Callers rarely notice when AI is configured well.

---

## SEO Strategy

### Primary Keywords (Mapped to Pages)
- "small business website design" (1,600/mo) → /web-design
- "AI receptionist" (2,000-5,000/mo) → /ai-systems
- "AI answering service" (2,000-4,500/mo) → /ai-systems
- "AI automation for small business" (1,500-3,500/mo) → /ai-systems

### Industry Vertical Keywords
- HVAC: "HVAC website design" / "AI phone system for HVAC"
- Dental: "dental website design" / "AI receptionist for dental office"
- Legal: "law firm website design" / "AI answering service for law firms"
- Plumbing: "plumber website design" / "automated scheduling for plumbers"
- Contractors: "contractor website design" / "AI receptionist for contractors"

### SEO Rules
- Each page targets its own keyword set. No overlap between pages (prevents cannibalization).
- Blog posts target informational keywords ONLY. Service pages target transactional/commercial keywords ONLY.
- Primary keyword appears in: H1, meta title, first paragraph, and at least one H2.
- One H1 per page. No skipped heading levels.
- Meta title under 60 characters. Meta description under 160 characters.
- FAQ sections on industry pages should be structured for FAQ schema.

### Homepage Targets (Broad Identity Only)
- "web design" + "AI automation" + "small service businesses" in H1
- Do NOT put service-page keywords on the homepage.

---

## Known Issues / In Progress

- Footer industry links point to `#` instead of actual pages
- /about page needs real founder story and photo (has placeholder text)
- AI industry vertical pages (/ai-systems/[industry]) only cover phone systems. Need expansion to cover chatbots, scheduling, workflow automation, review collection.
- Web design vertical pages need more depth
- No blog exists yet
- No schema markup (LocalBusiness, Service, FAQ)
- Google still showing old ASP.NET meta description. Needs re-crawl after sitemap submission.
- /services page being removed (redundant with /web-design and /ai-systems)

---

## Code Standards

### Styling
- Use Tailwind v4 with CSS variables for theming. Brand colors defined in `globals.css`.
- Pre-built component classes available. Check existing components before creating new patterns.
- Use `cn()` utility for conditional class merging.

### Components
- shadcn/ui for all primitives. Add new components with `pnpm dlx shadcn@latest add <component>`.
- Framer Motion for animations. Keep animations subtle and purposeful.
- All images use Next.js `<Image>` component with WebP format and descriptive alt text.

### General
- TypeScript strict mode. No `any` types without justification.
- All user-facing text must follow brand voice guidelines above.
- Name variables/functions around business outcomes, not technical implementation.
- Every UI decision should consider: "Will this work for a non-technical business owner viewing on their phone?"
