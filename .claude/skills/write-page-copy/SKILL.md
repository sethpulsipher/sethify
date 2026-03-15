---
name: write-page-copy
description: Write or rewrite page copy for sethify.com. Use when creating new pages, rewriting existing page content, or drafting sections for any page on the Sethify website. Enforces brand voice, banned word list, customer pain points, and SEO keyword placement.
---

# Write Page Copy for Sethify

You are writing copy for sethify.com, a web development and AI automation studio for small service businesses.

## Before Writing

1. Read `CLAUDE.md` at the project root for full brand context, banned words, SEO targets, and customer profile.
2. Check `docs/` for any existing guidance documents relevant to this page.
3. Identify which page the copy is for and what keywords it targets (see SEO Strategy in CLAUDE.md).
4. Determine the audience temperature:
   - **Cold traffic (homepage hero, ads, landing pages):** Lead with the pain point. Then the solution. Then the CTA.
   - **Warm traffic (service pages, verticals):** Lead with what you do. Be specific. Show proof.
   - **Navigation (nav labels, breadcrumbs, footer):** Descriptive labels only. No persuasion.

## Writing Rules — Non-Negotiable

- Short sentences. Active voice.
- Address the reader as "you/your."
- Use "we" (studio), never "I" (freelancer).
- No em dashes (—). Use periods or commas instead.
- No clichés, metaphors, or unnecessary adjectives.
- No hashtags or semicolons.
- Every claim needs a specific number, example, or honest caveat. No vague promises.

### Banned Words — Check every sentence against this list:
can, may, just, that, very, really, actually, basically, could, maybe, craft, imagine, realm, unlock, discover, revolutionize, utilize, harness, boost, powerful, cutting-edge, groundbreaking, remarkable, pivotal, furthermore, however, moreover, synergy, leverage, solutions (when non-specific), game-changing

### Preferred Language
- "Build" or "implement" not "craft" or "create"
- "Systems" not "tools" or "solutions"
- "Capture" not "generate" (emphasizes seizing existing opportunities)
- Specific numbers not vague claims

If you catch yourself using any banned word or non-preferred term, rewrite the sentence.

## Customer Pain Points — Weave These Into Copy Where Relevant

1. **Missed calls = lost money.** 42% of small businesses lose $500+/month. Contractors miss 60-80% of calls.
2. **Website is a brochure.** No leads. Slow. Outdated. Poor mobile.
3. **Drowning in admin.** Manual scheduling, repetitive questions, no follow-up.
4. **Burned by past developers.** Agencies disappeared. Overpromised. Underdelivered.
5. **AI confusion.** Don't know what's real vs. hype. Worried about cost and quality.

Use the customer's own language when possible:
- "I miss calls all day because I'm on the job site."
- "My website looks like it's from 2015."
- "The last guy took our money and disappeared."

## Structure

Output copy in this format:

```
## [Section Name]
### [Heading tag: H1 / H2 / H3]
[Copy]
```

Include:
- Recommended meta title (under 60 characters, include primary keyword + "| Sethify")
- Recommended meta description (under 160 characters, include primary keyword + CTA language)
- H1 (one per page, include primary keyword naturally)
- H2s for major sections
- H3s for sub-items

## SEO Integration

- Place the primary keyword in: H1, meta title, first paragraph, at least one H2.
- Place secondary keywords in: H2s, H3s, body copy (1-2 times each, naturally).
- Do NOT keyword-stuff. If it reads awkwardly, rewrite it.
- Each page targets its own keyword set. Check CLAUDE.md to avoid cannibalization.

## Tone Check

After writing, review against these questions:
1. Does every sentence pass the banned word check?
2. Would a real person say this out loud? If not, simplify.
3. Is every claim backed by a specific number, example, or honest caveat?
4. Are there any em dashes? Remove them.
5. Does it sound like AI wrote it? If yes, rewrite until it does not.

## Pricing References (Exact Numbers Only)

- Web design: $150/month subscription or $3,000 one-time
- AI automation: $500-$2,000 setup, $200/month management
- Shopify: Starting at $8,000
- Hosting (lump sum clients): $25/month
