# Sethify Website — Claude Code Build Prompt

You are building the production website for **Sethify, LLC** — a web development and AI automation agency serving small-to-medium businesses across the US. This is a 5-page site that needs to look and feel like the work of a serious agency, not a template.

---

## TECH STACK

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (override default styles to match brand)
- **Typography:** Inter (via `next/font/google`)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Vercel

---

## BRAND IDENTITY

### Who We Are
Sethify builds digital foundations for small and medium businesses — professional websites and AI-powered automation that drive real results. Two co-equal service pillars: web development and AI automation. They complement each other; they don't compete.

### Brand Voice
Clear, confident, performance-focused, relationship-oriented.

- **Clear** — straightforward, no jargon, but not dumbed down
- **Confident** — self-assured, not arrogant or salesy
- **Performance-focused** — results-driven, not buzzwordy
- **Relationship-oriented** — warm and human, not corporate or overly casual

We ARE: clear, direct, conversational, approachable, knowledgeable, honest, outcome-focused.
We ARE NOT: jargon-heavy, salesy, pushy, condescending, impersonal, corporate, vague.

### Primary Message
"Sethify builds digital foundations for small and medium businesses — professional websites and intelligent automation that drive real results."

### Supporting Messages
- **Web Dev:** "Professional websites that convert. Clean code, fast performance, designed to grow with your business. Straightforward pricing, clear deliverables, no surprises."
- **AI Automation:** "AI that actually works for your business. We implement automation that captures leads, books appointments, and handles the operational tasks that slow you down."
- **Combined:** "Your complete digital foundation. A professional website backed by intelligent automation — everything working together to grow your business."

---

## COLOR PALETTE

```css
:root {
  /* Primary — these carry 90% of the site */
  --coral: #FF6B4A;          /* Action/accent: CTAs, links, highlights, hover states */
  --ink: #0F172A;             /* Dominant text and dark backgrounds */
  --cream: #FDF8F3;           /* Light background/surface color */

  /* Secondary — supporting roles, use sparingly */
  --ink-light: #1E293B;       /* Card backgrounds, section differentiation on dark layouts */
  --coral-dark: #E5563A;      /* Hover/active states for coral elements */
  --cream-dark: #F5EFE6;      /* Alternating sections, subtle borders, input backgrounds */
  --stone: #64748B;           /* Secondary text, captions, muted UI */
  --stone-light: #94A3B8;     /* Tertiary text, placeholders */

  /* Utility — very occasional, special-purpose */
  --success: #10B981;         /* Success states */
  --error: #EF4444;           /* Error states */
}
```

**Design philosophy:** Minimal palette. Coral is the star — use it sparingly so it always pops. Ink for everything structural. Cream and stone for the rest. No secondary accent color. Think Airbnb's restraint: one bold color, lots of breathing room, clean and quiet everything else. That restraint is what makes it feel premium.

**Color description (for reference):** "Sethify's color palette is bold, warm, and intentional. Coral brings the energy, ink keeps it grounded, and cream gives everything room to breathe. It's a palette that feels like a business that knows what it's doing — without trying too hard to prove it."

---

## TYPOGRAPHY

**Font:** Inter (and ONLY Inter). No decorative fonts, no serifs.

**Scale:**
| Element  | Size        | Weight    | Line Height | Letter Spacing |
|----------|-------------|-----------|-------------|----------------|
| H1       | 48px / 3rem | Semibold 600 | 1.2      | -0.02em        |
| H2       | 36px / 2.25rem | Semibold 600 | 1.2   | -0.02em        |
| H3       | 30px / 1.875rem | Semibold 600 | 1.2  | -0.02em        |
| H4       | 24px / 1.5rem | Medium 500 | 1.3      | -0.01em        |
| Body     | 16px / 1rem | Regular 400 | 1.6       | 0              |
| Body lg  | 18px / 1.125rem | Regular 400 | 1.6   | 0              |
| Small    | 14px / 0.875rem | Regular 400 | 1.5   | 0              |
| Caption  | 12px / 0.75rem | Regular 400 | 1.5    | 0              |

**Rules:**
- Flush-left, ragged-right for body copy. Never center long text blocks. Never justify.
- Headlines can be centered in hero sections only.
- Max body copy width: 65-75 characters per line (~720px).

---

## DESIGN PRINCIPLES

- **Whitespace is a design element.** Generous negative space. Every margin serves the visual rhythm.
- **Mobile-first responsive.** Must look just as good on mobile as desktop — not an afterthought.
- **Visual hierarchy matters.** Clear distinction between H1 → H2 → H3 → body. The eye should flow naturally.
- **Spacing rhythm.** Use a consistent base unit (8px) for all spacing. Sections get generous vertical padding (80-120px desktop, 48-64px mobile).
- **No template energy.** This should feel custom-built and intentional, not like a ThemeForest purchase.

---

## RESPONSIVE BREAKPOINTS

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Max content width: 1280px, centered with auto margins.

---

## ANIMATIONS & MICRO-INTERACTIONS

Use Framer Motion. All animations should feel smooth and purposeful — never gratuitous.

**Scroll Reveals:**
- Sections fade in + translate up (20px) on scroll into viewport
- Stagger children by 100ms when multiple elements enter together
- Duration: 0.5-0.6s, ease: `[0.25, 0.46, 0.45, 0.94]` (easeOutQuad)
- Trigger at ~20% viewport intersection

**Hover States:**
- Buttons: subtle scale (1.02) + background color transition (0.2s)
- Cards: subtle lift via translateY(-4px) + box-shadow increase (0.25s)
- Links: coral underline slide-in from left (0.2s)
- Images in portfolio: subtle zoom (scale 1.05) with overflow hidden

**Navigation:**
- Mobile menu: slide in from right with backdrop fade (0.3s)
- Nav background: transparent → solid on scroll (0.2s transition)
- Active link indicator: animated underline

**Page Transitions:**
- Subtle fade between pages (0.3s)

**Form Interactions:**
- Input focus: border color transition to coral (0.15s)
- Labels: float animation on focus
- Submit button: loading state with spinner
- Success: checkmark animation

**IMPORTANT:** Respect `prefers-reduced-motion`. Disable all transforms/transitions when user prefers reduced motion. Keep opacity fades only.

---

## PAGES

### 1. HOME PAGE (`/`)

**Purpose:** Make it immediately clear what Sethify does, who it's for, and what outcomes they get. Then convert to a call booking or contact.

**Sections:**

**Hero**
- Headline: "Small Business Websites That Actually Work."
- Subheadline: "$0 down, $150/month. Hand-coded. Lightning fast. Designed to convert."
- Primary CTA: "Get Started Today"
- Secondary CTA: "View Our Work"
- Optional: subtle animated gradient or floating shape elements behind text (keep it tasteful)

**Services Overview (2 pillars)**
Present Web Development and AI Automation as co-equal offerings. Use two large cards or a split section.

Web Development card:
- "Professional websites that convert. Clean code, fast performance, designed to grow with your business."
- Link to Services page

AI Automation card:
- "AI that actually works for your business. Chatbots, voice agents, and workflow automation that capture leads and save time."
- Link to Services page

**Why Hand-Coded (trust builder)**
- 6 feature/value cards in a responsive grid (3x2 desktop, 2x3 tablet, 1x6 mobile):
  1. Mobile-First Design
  2. Lightning Fast Load Times
  3. 100% Hand-Coded
  4. Ongoing Support & Updates
  5. SEO-Optimized
  6. Secure & Reliable
- Each card: icon (Lucide), short title, 1-2 sentence description

**Pricing Preview**
Show the two web dev pricing models side by side:

Standard Plan:
- $0 down, $150/month
- 12-month minimum
- Includes design, development, hosting, unlimited edits, 24/7 support, lifetime updates
- CTA: "Get Started"

Lump Sum:
- $2,500 one-time
- Same deliverables
- $25/month hosting after launch
- CTA: "Learn More"

**Note:** Do NOT include AI automation pricing on the homepage. Keep it on the Services page where there's room for context.

**Social Proof / Testimonials**
- Carousel or grid of 3 testimonial cards
- Quote, name, business type, star rating
- Use placeholder testimonials for now

**Final CTA**
- "Ready to Get the Site You Always Wanted?"
- "Let's build something amazing together."
- CTA: "Book Your Free Consultation"

---

### 2. ABOUT PAGE (`/about`)

**Purpose:** Build trust and connection. Show there's a real person behind the brand who gives a damn.

**Sections:**

**Hero**
- Headline: "Built by a Developer Who Actually Cares"
- Short paragraph about the founder and philosophy

**Founder Story**
- Personal narrative (leave as placeholder text blocks for Seth to fill in)
- Photo placeholder
- Key points to convey: technical background, why SMBs, the gap in the market, hands-on approach

**Values / Philosophy**
3-4 value blocks:
1. "Quality Over Quantity" — We take on projects we can deliver exceptionally, not just fill a pipeline.
2. "Transparency" — Clear pricing, clear timelines, no surprises.
3. "Long-Term Partnerships" — We don't disappear after launch. Your success is our success.
4. "Technology That Serves You" — We implement what works, not what's trendy.

**Tech Stack Showcase (optional)**
A visual grid of technologies used — Next.js, React, Tailwind, Shopify, n8n, etc. with logos. Signals technical credibility without being jargon-heavy.

---

### 3. SERVICES PAGE (`/services`)

**Purpose:** Detailed breakdown of everything Sethify offers with clear pricing and CTAs.

**Page structure uses jump-nav anchors** — sticky sidebar or top nav that links to each service section. Smooth scroll behavior.

**Section A: Web Design & Development**

Headline: "Websites That Work As Hard As You Do"

Two pricing tiers displayed as cards:

**Standard ($150/mo):**
- $0 down
- Custom design & development
- Hosting included
- Unlimited edits
- 24/7 support
- Lifetime updates
- SEO optimization
- 12-month minimum contract

**Lump Sum ($2,500):**
- One-time payment (50% upfront, 50% on completion)
- Same design & development quality
- 3 revision rounds
- $25/month hosting after launch
- 4-week turnaround

**Why Hand-Coded subsection:**
Quick comparison vs. WordPress/page builders:
- Faster load times (no bloated plugins)
- Better SEO performance
- More secure (no vulnerable plugins)
- Fully custom — no template limitations
- Cleaner code = easier to maintain

**Section B: E-Commerce / Shopify**

Headline: "Online Stores That Sell"

- Custom Shopify development starting at $8,000
- Custom theme development
- App integration & configuration
- Payment & shipping setup
- CMS training for the client
- Ongoing support available

This is a different conversation than $150/mo — the copy should reflect the larger investment and more complex scope.

**Section C: AI Automation**

Headline: "Stop Losing Leads. Start Automating."

Three sub-services:

1. **AI Chatbots** — Customer-facing chatbots that answer questions, qualify leads, and book appointments 24/7.
2. **AI Voice Agents** — Phone agents that handle inbound calls, route inquiries, and never put anyone on hold.
3. **Workflow Automation** — Connect your tools (CRM, email, scheduling, invoicing) so data flows automatically and nothing falls through the cracks.

Pricing framework (flexible, not rigid tiers):
- Setup: $500 – $2,000 (depending on complexity)
- Monthly management: $200 – $500

**Section D: How It Works**

5-step process:
1. Discovery — We learn about your business, goals, and what's not working.
2. Strategy — We recommend exactly what you need (not upsell what you don't).
3. Build — We build it. You see progress along the way.
4. Launch & Handoff — Goes live, we walk you through everything.
5. Ongoing Support — We don't disappear. Long-term partnership.

**Final CTA**
"Ready to Stop Worrying About Your Website and Start Growing Your Business?"
CTA: "Book Your Free Consultation"

---

### 4. PROJECTS / PORTFOLIO PAGE (`/projects`)

**Purpose:** Show the work. Build credibility through proof.

**Layout:** Responsive grid of project cards. Asymmetric layout encouraged — not a boring uniform grid.

**Each project card:**
- Featured image/screenshot (placeholder for now)
- Project title
- Brief description (1 sentence)
- Tags (e.g., "Web Design", "Shopify", "AI Automation")
- Hover: subtle zoom on image + overlay with "View Project" link

**Project detail pages (optional, `/projects/[slug]`):**
- Hero image
- Project overview
- Challenge → Solution → Results format
- Tech stack used
- Testimonial from client (if available)
- CTA: "Want results like this?"

**If no projects yet:** Design the page structure with 3-4 placeholder project cards. Make it easy to add real projects later. Include a note like "Currently curating our portfolio. In the meantime, book a call and we'll walk you through our recent work."

---

### 5. CONTACT PAGE (`/contact`)

**Purpose:** Make it dead simple to get in touch. Remove all friction.

**Layout:** Two-column — form on left, contact info + FAQ on right.

**Contact Form:**
- Name
- Email
- Phone (optional)
- Service interested in (dropdown: Web Design, E-Commerce, AI Automation, Not Sure)
- Project details (textarea)
- Budget range (dropdown: Under $2,500 / $2,500–$5,000 / $5,000–$10,000 / $10,000+)
- Submit button: "Send Message"

**Contact Info:**
- Email: [placeholder]
- Phone: [placeholder]
- Location: United States (remote-first)
- Availability: 24/7
- "When you reach out, you get a real person — not a phone tree."

**FAQ Accordion (3-5 questions):**
1. "How long does a website take?" → Typically 2-4 weeks for standard sites.
2. "Do you work with businesses outside of [area]?" → Yes, we serve businesses across the US.
3. "What if I need changes after launch?" → Unlimited edits on monthly plans, or we can quote additional work for lump-sum clients.
4. "Do I need both a website and AI automation?" → Not necessarily. We meet you where you are. Many clients start with web dev and add automation as they grow.
5. "What if I already have a website?" → We can rebuild, redesign, or add AI automation to your existing setup.

---

## GLOBAL COMPONENTS

### Navigation
- Logo (left)
- Links: Home, About, Services, Projects, Contact (center or right)
- CTA button: "Get Started" (right, coral background)
- Sticky on scroll with background transition (transparent → solid)
- Mobile: hamburger → slide-in drawer from right

### Footer
- Logo + tagline: "We believe small businesses deserve better."
- Quick links: all pages + individual service anchors
- Contact info: phone, email, location
- CTA: "Get Started Today"
- Legal: © 2025 Sethify, LLC | Privacy Policy | Terms of Service
- Social links (if applicable)

---

## TECHNICAL REQUIREMENTS

### Performance
- Target: 95+ Google PageSpeed on both mobile and desktop
- Optimize all images (use Next.js `<Image>` component, WebP format)
- Minimize JavaScript bundle size
- Use dynamic imports for heavy components (Framer Motion, etc.)
- Lazy load below-fold sections

### SEO
- Semantic HTML (proper heading hierarchy per page)
- Meta titles and descriptions per page
- Open Graph tags
- Structured data (LocalBusiness schema)
- Sitemap.xml and robots.txt
- Alt text on all images

### Accessibility
- WCAG 2.1 AA compliance
- All color combinations meet 4.5:1 contrast ratio (normal text), 3:1 (large text)
- Keyboard navigable
- Screen reader friendly (proper ARIA labels)
- Focus states on all interactive elements

### Code Quality
- Clean, modular TypeScript
- Components are reusable and well-structured
- Follow Next.js App Router conventions
- No unnecessary abstractions or over-engineering
- Well-commented where intent isn't obvious

---

## EVALUATION CRITERIA

The site will be evaluated on:
1. **Visual hierarchy** — Clear distinction between content levels. The eye flows naturally.
2. **Typography choices** — Proper use of the type scale. Readable. Rhythmic.
3. **Spacing, rhythm, and balance** — Consistent use of the 8px grid. Sections breathe.
4. **UX clarity and flow** — Every page has a clear purpose. Navigation is intuitive. CTAs are obvious.
5. **Sensible use of motion** — Animations enhance, never distract. Purposeful micro-interactions.

---

## THE STANDARD

This is the website of an agency that builds websites for a living. If Sethify claims to build fast, hand-coded, performance-optimized websites — this site must be the proof.

The visitor should think: **"If this is what they build for themselves, imagine what they'd build for me."**

Clean. Fast. Intentional. No fluff.