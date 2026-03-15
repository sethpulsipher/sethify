---
name: seo-check
description: Audit a page or component file for SEO compliance against Sethify's keyword strategy and brand standards. Use when checking if a page has proper meta tags, heading hierarchy, keyword placement, internal links, brand voice compliance, and FAQ schema readiness. Run after writing or editing any page.
---

# SEO & Brand Audit for Sethify Pages

Run this check against any page file in the Sethify codebase.

## Steps

1. Read `CLAUDE.md` at the project root to load keyword targets, brand voice rules, banned words, and site architecture.
2. Check `docs/` for any additional SEO guidance.
3. Read the target page file.
4. Run every check below and output a pass/fail report.

## Checks

### Meta Tags
- [ ] `<title>` exists, under 60 characters, includes primary keyword + "| Sethify"
- [ ] Meta description exists, under 160 characters, includes primary keyword
- [ ] Meta description contains a CTA or value proposition
- [ ] Open Graph tags exist (og:title, og:description, og:image)

### Heading Hierarchy
- [ ] Exactly ONE H1 on the page
- [ ] H1 contains the primary keyword naturally
- [ ] H2s exist for all major sections
- [ ] No heading level skipped (no H1 → H3 without H2)
- [ ] At least one H2 contains a secondary keyword

### Keyword Placement
- [ ] Primary keyword in: H1, meta title, first paragraph, at least one H2
- [ ] Secondary keywords in body copy (1-2 times each)
- [ ] No keyword stuffing (density under 2%)
- [ ] Keywords read naturally in context

### Internal Linking
- [ ] Page links to at least 2 other Sethify pages
- [ ] Cross-link exists between companion pages (web design ↔ AI systems for same industry)
- [ ] CTA links point to /contact (not broken # anchors)
- [ ] Footer industry links point to actual pages (not #)

### Brand Voice Compliance
- [ ] No banned words present (check full list in CLAUDE.md)
- [ ] No em dashes (—)
- [ ] Active voice throughout
- [ ] "We" positioning, never "I"
- [ ] Every claim backed by a number, example, or honest caveat
- [ ] Preferred language used ("build/implement" not "craft", "systems" not "tools", "capture" not "generate")
- [ ] All pricing figures match CLAUDE.md exactly ($150/month, $3,000, $500-$2,000, $200/month, $8,000, $25/month)

### Content Depth
- [ ] FAQ section has at least 4 questions with full written answers (not collapsed/empty)
- [ ] AI systems pages cover ALL services (phone, chat, scheduling, workflows) not phone-only
- [ ] Customer pain points referenced with specific stats where relevant
- [ ] At least one customer-language quote or scenario included

### Technical SEO
- [ ] Images use Next.js `<Image>` component with descriptive alt text
- [ ] Alt text includes a keyword where natural
- [ ] Page URL is lowercase, descriptive, matches site architecture in CLAUDE.md
- [ ] No duplicate content with other pages

### Schema Readiness
- [ ] FAQ content structured as question + answer pairs (ready for FAQ schema)
- [ ] Service information present for Service schema
- [ ] LocalBusiness signals (service area, contact info) where relevant

## Output Format

```
## SEO & Brand Audit: [page path]

### Summary
[X/Y checks passed] — [PASS / NEEDS WORK / FAIL]

### Critical Issues
1. [Issue] → [Fix]

### Warnings
1. [Issue] → [Suggestion]

### Keyword Report
- Primary: "[keyword]" — Found in: [locations] ✅ / ❌
- Secondary:
  - "[keyword]" — [X] occurrences ✅
  - "[keyword]" — NOT FOUND ❌ → Add to [section]

### Banned Word Violations
- [word] found in [location] → Rewrite: "[suggested replacement]"

### Missing Elements
- [What's missing and where to add it]
```
