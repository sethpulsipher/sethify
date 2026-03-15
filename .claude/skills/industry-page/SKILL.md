---
name: industry-page
description: Generate or expand an industry vertical page for sethify.com. Use when creating or rewriting pages like /web-design/hvac, /ai-systems/dental, or any industry-specific landing page. Produces full page copy with heading hierarchy, SEO keywords, FAQ schema content, customer pain points, and cross-links to companion pages.
---

# Industry Vertical Page Generator

You are building an industry-specific landing page for sethify.com. These pages target long-tail keywords with near-zero competition and high conversion rates.

## Before Writing

1. Read `CLAUDE.md` at the project root for brand rules, banned words, preferred language, customer profile, and keyword targets.
2. Check `docs/` for any existing industry-specific research or copy references.
3. Determine which page type this is:
   - **Web design vertical** (`/web-design/[industry]`) — website design and development for the industry
   - **AI systems vertical** (`/ai-systems/[industry]`) — ALL AI automation services for the industry

4. Identify target keywords from the mapping below.

### Web Design Verticals
| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| /web-design/hvac | HVAC website design | HVAC web design, HVAC website cost |
| /web-design/dental | dental website design | dentist website design, dental web design |
| /web-design/legal | law firm website design | attorney website design, lawyer website design |
| /web-design/plumbing | plumber website design | plumbing company website, plumbing website cost |
| /web-design/contractors | contractor website design | contractor web design, construction website design |

### AI Systems Verticals
| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| /ai-systems/hvac | AI phone system for HVAC | AI receptionist HVAC, HVAC automation |
| /ai-systems/dental | AI receptionist for dental office | dental office automation, dental scheduling automation |
| /ai-systems/legal | AI answering service for law firms | law firm automation, AI receptionist legal |
| /ai-systems/plumbing | AI answering service for plumbers | plumbing automation, automated scheduling plumbers |
| /ai-systems/contractors | AI receptionist for contractors | contractor automation, AI phone system contractors |

## Page Structure — Web Design Verticals

### 1. Hero Section
- **H1:** "[Industry] Website Design" or "Website Design for [Industry] Companies"
- Opening paragraph (2-3 sentences): State the problem (bad websites lose leads), then the solution.
- CTA buttons: "Get a Free Quote" → /contact, "See Pricing" → #pricing

### 2. What You Get (Features)
- **H2:** "Everything included with your website."
- 6 feature items tailored to this industry:
  - Hand-coded, no templates
  - Mobile-first (with industry-specific reasoning)
  - SEO built in (mention local search: "[city] + [service]")
  - Click-to-call and contact forms on every page
  - Service area pages for local targeting
  - Google PageSpeed scores above 90

### 3. Pricing Section
- **H2:** Question format ("Wondering about [industry] website cost?")
- Two options: One-time ($3,000) and Subscription ($150/month, 12-month minimum)
- Pricing must match CLAUDE.md exactly.

### 4. Cross-Link to AI Systems
- One-line callout linking to /ai-systems/[industry]
- Example: "We also build AI phone systems for [industry] companies. Your AI receptionist answers every call, books appointments, and follows up with leads."

### 5. FAQ Section (4-5 questions with full answers)
- **H2:** "Common questions"
- Question patterns:
  1. "How much does a/an [industry] website cost?"
  2. "How long does it take to build?"
  3. "Will my website show up on Google?"
  4. Industry-specific question
  5. "Do I need to provide the content and photos?"
- Write full answers (3-5 sentences each). These are FAQ schema candidates.

### 6. CTA Section
- Industry-specific CTA headline (e.g., "Stop losing jobs to a bad website.")
- Button: "Get a Free Quote" → /contact

## Page Structure — AI Systems Verticals

**CRITICAL:** Current AI vertical pages ONLY cover phone systems. Expanded pages must cover ALL services:

### 1. Hero Section
- **H1:** "AI [Receptionist/Phone System/Automation] for [Industry]"
- Opening paragraph: Industry-specific pain point, then the solution.
- CTA: "Get a Free Quote" → /contact

### 2. The Problem (Pain Point Section)
- **H2:** Industry-specific problem statement
- 2-3 paragraphs quantifying the problem with real stats:
  - 42% of small businesses lose $500+/month to missed calls
  - Contractors miss 60-80% of incoming calls
  - Industry-specific pain (see Industry Context below)
- Use customer language: "I miss calls all day because I'm on the job site."
- Include stat callouts with large numbers.

### 3. AI Receptionist & Phone Answering (Core)
- **H2:** "AI Receptionist & Answering Service for [Industry]"
- Cover: 24/7 answering, appointment booking, lead qualification, call summaries, after-hours handling, SMS follow-up

### 4. AI Chat & Website Support (MISSING FROM CURRENT PAGES)
- **H2:** "AI Chatbot for Your [Industry] Website"
- Cover: Website chat widget, lead capture from chat, appointment booking through chat, FAQ handling, after-hours chat

### 5. Automated Scheduling & Workflows (MISSING FROM CURRENT PAGES)
- **H2:** "Workflow Automation for [Industry] Businesses"
- Cover: Online scheduling synced to calendar, automated reminders (reduce no-shows), review collection after jobs, lead follow-up sequences, CRM integrations
- Tailor each item to the industry workflow.

### 6. How It Works
- **H2:** "Simple setup. Immediate results."
- One realistic scenario paragraph for this industry.

### 7. Cross-Link to Web Design
- Link to /web-design/[industry]

### 8. Addressing Objections
Weave these into the copy naturally (don't create an "objections" section):
- **"My customers won't like AI"** → AI handles overflow and after-hours. Callers rarely notice when configured well. Backup to human always available.
- **"Tried this before"** → We configure for your workflow, not a generic script. Ongoing support, not build-and-disappear.
- **"Too expensive"** → Show the cost of missed calls ($500+/month) vs. system cost ($200/month management). The system pays for itself.

### 9. FAQ Section (5-6 questions with full answers)
- Question patterns:
  1. "What is an AI receptionist for [industry]?"
  2. Industry-specific capability question
  3. "How much does an AI system cost for [industry]?"
  4. "How long does setup take?"
  5. "Will callers know they are talking to an AI?"
  6. Integration question
- Full answers (3-5 sentences). FAQ schema candidates.

### 10. CTA Section
- Industry-specific CTA headline
- Button: "Get a Free Quote" → /contact

## Industry-Specific Context

### HVAC
- Highest-volume call industry in home services
- Emergency calls at all hours (AC dies in summer, furnace in winter)
- Seasonal demand spikes
- Techs on job sites, physically unable to answer phones
- Service area coverage matters (multiple cities/zip codes)
- Customer language: "The phone rings while I'm on a roof."

### Dental
- Front desk handles check-ins, insurance, follow-ups, AND the phone simultaneously
- Scheduling/rescheduling/cancellations are constant
- New patient intake is a bottleneck
- No-shows cost $150-$300 per missed appointment
- After-hours booking is a competitive advantage
- Customer language: "My receptionist is answering phones, checking people in, and filing insurance at the same time."

### Legal
- Client intake is the revenue bottleneck
- Potential clients call multiple firms, go with whoever answers first
- Confidentiality and professionalism are non-negotiable
- After-hours calls from distressed clients (DUI, accidents, arrests)
- Conflict checks and case type screening are part of intake
- Customer language: "If we don't pick up, they call the next firm on Google."

### Plumbing
- Emergency calls (burst pipes, sewage backup) at any hour
- Techs on job sites, same dynamic as HVAC
- Seasonal spikes (frozen pipes in winter)
- Estimate requests need fast response or the lead goes elsewhere
- Service area pages critical for local SEO
- Customer language: "I'm under a house fixing a leak. I'm not answering the phone."

### Contractors
- On job sites all day, physically unable to answer
- Estimate requests are time-sensitive (homeowners call 3-5 contractors)
- Project scheduling is complex (multiple trades, timelines)
- Seasonal work patterns affect demand
- Reputation and reviews drive referrals
- Customer language: "By the time I call back at 6pm, they've already hired someone else."

## Final Checks

1. All banned words absent (check full list in CLAUDE.md).
2. Primary keyword in: H1, meta title, first paragraph, at least one H2.
3. All pricing matches CLAUDE.md exactly.
4. Cross-link to companion page exists (web ↔ AI).
5. FAQ answers are 3-5 sentences each (not collapsed/empty).
6. Page covers ALL relevant services, not a single one.
7. No em dashes anywhere.
8. Every claim has a number, example, or honest caveat.
9. Copy does not sound like AI wrote it.
