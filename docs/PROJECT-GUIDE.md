# PROJECT GUIDE

> AI: Use this file to navigate the project. Find the files you need, then stop reading.

---

## Project Overview

| Field | Value |
|---|---|
| Client | [CLIENT_NAME] |
| Industry | [INDUSTRY] |
| Website Type | [WEBSITE_TYPE] |
| Primary Goal | [PRIMARY_GOAL] |
| Target Audience | [AUDIENCE] |
| Budget Tier | [BUDGET_TIER] |
| Timeline | [TIMELINE] |

Full context: `project-brief.md`

---

## File Map

### `/brand`
| File | Contains |
|---|---|
| `identity.md` | Brand name, mission, personality, voice & tone, audience |
| `design-system.md` | Color tokens, typography scale, spacing scale, component patterns |
| `visual-references.md` | Inspiration sites, mood direction, design notes |

### `/content`
| File | Contains |
|---|---|
| `sitemap.md` | Page hierarchy, navigation structure, page goals |
| `copy.md` | All written content — headlines, body, CTAs, organized by page |
| `media-requirements.md` | Image specs, video needs, asset list |

### `/technical`
| File | Contains |
|---|---|
| `stack.md` | Framework, packages, hosting, deployment config |
| `integrations.md` | Forms, analytics, payments, third-party services |

---

## Task → Files Quick Reference

| Task | Files to Read |
|---|---|
| Style any component | `brand/design-system.md` |
| Write copy or headings | `content/copy.md` |
| Build a page | `content/sitemap.md` → `content/copy.md` → `brand/design-system.md` |
| Style hero section | `brand/design-system.md` + `content/copy.md` (Hero section) |
| Create navigation | `content/sitemap.md` + `brand/design-system.md` (Components → Nav) |
| Build About page | `content/copy.md` (About) + `brand/identity.md` |
| Setup contact form | `technical/integrations.md` (Forms) + `content/copy.md` (Contact) |
| Add analytics | `technical/integrations.md` (Analytics) |
| Match brand voice | `brand/identity.md` (Voice & Tone) |
| Check design direction | `brand/visual-references.md` |
| Understand page structure | `content/sitemap.md` |
| Deploy / configure hosting | `technical/stack.md` (Deployment) |

---

## Design Token Rules

**Always reference `brand/design-system.md`. Never hardcode values.**

| Token Type | Use For |
|---|---|
| `color-primary` | Primary actions, CTAs, links |
| `color-text-*` | All text (primary / secondary / muted) |
| `color-bg-*` | Page and section backgrounds |
| `color-border` | All borders and dividers |
| `space-*` | Padding, margins, gaps (use scale, not arbitrary px) |
| `font-heading-*` | All headings h1–h6 |
| `font-body-*` | Body copy, labels, captions |

---

## File Authority & Update Rules

| File | Status | Rule |
|---|---|---|
| `project-brief.md` | Source of truth | Do not modify — clarify with human |
| `brand/identity.md` | Source of truth | Do not modify — clarify with human |
| `technical/stack.md` | Locked | Get approval before changing |
| `brand/design-system.md` | Reference | Alert human before any token changes |
| `content/copy.md` | Reference | Alert human before any copy changes |
| All other files | Safe to read | Use freely |

---

**Status:** [In Planning / In Development / In Review / Complete]
**Last Updated:** 2026-02-28
