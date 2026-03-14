# Design System

> AI: Use these tokens for all styling. Never hardcode colors, font sizes, or spacing values.
> Style: Editorial — warm palette, architectural sharpness (2px radius), serif/sans pairing, grain texture, asymmetric layouts with dark accent cards.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `color-primary` | `#FF6B4A` | CTAs, links, primary buttons, label tags, inline heading emphasis |
| `color-primary-hover` | `#E5563A` | Button hover state (slide-up fill) |
| `color-secondary` | `#0F172A` | Dark accent cards, secondary buttons, inverted sections |
| `color-text-primary` | `#0F172A` | Headings, nav links, main body text |
| `color-text-secondary` | `#64748B` | Body paragraphs, supporting text, descriptions |
| `color-text-muted` | `#94A3B8` | Captions, metadata, placeholders, body text on dark backgrounds |
| `color-bg-primary` | `#FDF8F3` | Main page background (cream) |
| `color-bg-secondary` | `#F5EFE6` | Alternate section background, section-offset panels |
| `color-bg-accent` | `#0F172A` | Dark feature cards, inverted CTA sections, footer |
| `color-bg-card` | `#FFFFFF` | White cards sitting on cream background |
| `color-border` | `#E2E8F0` | All borders, dividers, input borders |
| `color-border-dark` | `rgba(255, 255, 255, 0.1)` | Dividers inside dark accent cards |
| `color-success` | `#10B981` | Form success, confirmations |
| `color-error` | `#EF4444` | Form errors, alerts |
| `color-warning` | `#F59E0B` | Notifications (use sparingly) |
| `color-selection` | `rgba(255, 107, 74, 0.2)` | Text selection highlight background |

---

## Typography

### Fonts

| Role | Family | Source |
|---|---|---|
| Display / Heading | DM Serif Display | Google Fonts (next/font) |
| Body / UI | DM Sans | Google Fonts (next/font) |
| Mono (optional) | JetBrains Mono | Google Fonts |

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Family | Usage |
|---|---|---|---|---|---|---|
| `font-h1` | 3rem / 3.75rem / 4.5rem | 400 | 1.05 | -0.02em | DM Serif Display | Page hero titles |
| `font-h2` | 2.25rem / 3rem | 400 | 1.1 | -0.02em | DM Serif Display | Section headings |
| `font-h3` | 1.5rem / 1.875rem | 400 | 1.15 | -0.02em | DM Serif Display | Subsection headings |
| `font-h4` | 1.25rem | 400 | 1.2 | -0.02em | DM Serif Display | Card titles |
| `font-stat` | 3.75rem / 4.5rem | 400 | 1.0 | normal | DM Serif Display | Stat numbers, large data points |
| `font-body-lg` | 1.125rem | 400 | 1.7 | normal | DM Sans | Lead paragraphs, hero subtext |
| `font-body` | 1rem | 400 | 1.6 | normal | DM Sans | Standard body copy |
| `font-body-sm` | 0.875rem | 400 | 1.5 | normal | DM Sans | Captions, stat labels, metadata |
| `font-label` | 0.75rem | 600 | 1.4 | 0.2em | DM Sans | Section label tags (uppercase) |
| `font-button` | 0.875rem–1rem | 500 | 1.4 | normal | DM Sans | Button text |
| `font-nav` | 1rem | 500 | 1.4 | normal | DM Sans | Navigation links |

**Size notation:** `mobile / md / lg` breakpoints using Tailwind responsive prefixes.

**Heading rule:** All headings (H1–H4) use DM Serif Display at weight 400. No bold headings. The serif letterforms carry enough visual weight on their own. Tracking is tight (-0.02em) on all headings.

**Body rule:** All non-heading text uses DM Sans. Weight 400 for body, 500 for interactive elements (buttons, nav), 600 for label tags only.

**OpenType features:** `font-feature-settings: "ss01", "ss02", "cv01"` enabled on body font for stylistic alternates.

---

## Spacing Scale

| Token | Value | Common Use |
|---|---|---|
| `space-1` | 4px (0.25rem) | Tight gaps, icon padding |
| `space-2` | 8px (0.5rem) | Label-input gap, inline spacing |
| `space-3` | 12px (0.75rem) | Small stacks, tight card gaps |
| `space-4` | 16px (1rem) | Standard component padding |
| `space-5` | 20px (1.25rem) | Container padding mobile (px-5) |
| `space-6` | 24px (1.5rem) | Card gaps, list gaps |
| `space-7` | 28px (1.75rem) | Button padding horizontal (px-7) |
| `space-8` | 32px (2rem) | Card padding (p-8), section inner padding |
| `space-10` | 40px (2.5rem) | Component group gaps |
| `space-12` | 48px (3rem) | Between components, container padding desktop (lg:px-12) |
| `space-16` | 64px (4rem) | Between sections (mobile) |
| `space-24` | 96px (6rem) | Between sections (desktop) |

---

## Border & Radius

| Token | Value | Notes |
|---|---|---|
| `border-width` | 1px | Standard. 2px for secondary button borders only. |
| `border-color` | `color-border` (#E2E8F0) | — |
| `radius-sm` | 2px | Buttons, cards, inputs, form elements. The default. |
| `radius-md` | 8px | Logo icon, rare UI exceptions |
| `radius-lg` | 12px–16px | Dark accent cards only |
| `radius-full` | 9999px | Geometric accent circles, avatars, pills |

**Design rule:** Default radius is 2px. Sharp and architectural. Reserve rounded corners (radius-lg) for dark accent cards only — the contrast between sharp white cards and slightly rounded dark cards creates visual hierarchy. Full radius only for decorative elements.

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` | `0 1px 3px rgba(15, 23, 42, 0.04)` | Cards at rest, inputs |
| `shadow-md` | `0 4px 12px rgba(15, 23, 42, 0.06)` | Dropdowns, tooltips |
| `shadow-lg` | `0 20px 40px rgba(15, 23, 42, 0.08)` | Card hover state, modals, elevated elements |

**Shadow rule:** Shadows use ink color (#0F172A) as base, not black. This keeps shadows warm and cohesive with the cream background. Shadows are subtle — the design relies on background color contrast (cream vs white vs ink) for depth, not heavy shadows.

---

## Decorative Elements

| Element | Class | CSS | Usage |
|---|---|---|---|
| Line accent | `.line-accent` | `w-12 h-0.5 bg-primary` | Below label tags, section emphasis markers |
| Geometric accent | `.geo-accent` | `absolute w-32 h-32 border border-primary/20 rounded-full` | Decorative circles in hero and open areas |
| Grain texture | `body::before` | Fixed SVG fractalNoise overlay at 3% opacity | Applied to entire viewport for tactile warmth |
| Section offset | `.section-offset::before` | Right 33% of section filled with `color-bg-secondary` | Asymmetric background depth |

---

## Animations

| Token | Value | Usage |
|---|---|---|
| `ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | All custom animations. Snappy start, smooth settle. |
| `duration-fast` | 300ms | Button hovers, link transitions |
| `duration-normal` | 500ms | Card hover transitions |
| `duration-slow` | 800ms | Page load fadeUp animations |

### Keyframes

| Name | Effect | Duration | Usage |
|---|---|---|---|
| `fadeUp` | translateY(30px) + opacity 0 → translateY(0) + opacity 1 | 0.8s | Hero content, section reveals on scroll |
| `lineGrow` | scaleX(0) → scaleX(1), origin left | 1s (0.5s delay) | Line accent elements on load |

### Stagger Pattern

Parent `.stagger-children` auto-staggers direct children at 100ms intervals (up to 6 children) using fadeUp at 0.6s duration.

---

## UI Components

### Buttons

| Variant | Background | Text | Border | Hover | Radius | Class Name |
|---|---|---|---|---|---|---|
| Primary | `color-primary` | White | None | Slide-up fill with `color-primary-hover` via ::before pseudo | `radius-sm` (2px) | `btn-primary` |
| Secondary | Transparent | `color-text-primary` | 2px `color-text-primary` | `bg-secondary text-bg-primary` (full invert) | `radius-sm` (2px) | `btn-secondary` |
| Ghost | Transparent | `color-primary` | None | Arrow translateX(4px) | None | N/A |

- Padding: 1rem vertical / 1.75rem horizontal (py-4 px-7)
- Font: `font-button` (DM Sans, 500 weight)
- Primary hover technique: `::before` element with `color-primary-hover` translates from `translate-y-full` to `translate-y-0`. Button text wrapped in `<span class="relative z-10">`. Transition uses `ease-out-expo`.
- Secondary hover: Full background/text color swap to inverted.

### Cards

- Background: `color-bg-card` (#FFFFFF)
- Border: none (differentiated from cream bg by color alone)
- Border radius: `radius-sm` (2px)
- Padding: `space-8` (2rem / p-8)
- Shadow: `shadow-sm` at rest
- Hover: `shadow-lg` + translateY(-2px), transition 500ms
- Dark variant: `color-bg-accent` background, `radius-lg` (12–16px), padding 2.5–3rem

### Forms

- Input background: `color-bg-card` (#FFFFFF)
- Input border: 1px `color-border` with `/20` opacity modifier
- Input padding: px-5 py-4
- Input radius: `radius-sm` (2px)
- Focus: `color-primary` border + ring-4 `color-primary/10`
- Placeholder: `color-text-muted`
- Label: `font-label`
- Error state: `color-error`
- Success state: `color-success`

### Navigation

- Background: `color-bg-primary` (cream)
- Logo: Rounded square icon (`color-primary` bg, white letter, ~radius-md) + wordmark (DM Sans, medium weight)
- Link style: `font-nav` (DM Sans, 500), `color-text-primary`
- Active/hover: `color-primary`
- CTA: Primary button variant
- Separator: 1px vertical line `color-border` between nav links and CTA
- Mobile: Hamburger → slide-in drawer
- Sticky: Fixed on scroll with backdrop-blur and bottom border

---

## Layout

| Token | Value |
|---|---|
| `container-max-width` | 1280px (max-w-7xl) |
| `container-padding` | 20px mobile (px-5) / 32px tablet (sm:px-8) / 48px desktop (lg:px-12) |
| `grid-columns` | 12-col CSS Grid |
| `grid-gap` | `space-6` (24px) default, `space-8` (32px) for card grids |
| `section-padding-y` | `space-16` mobile (py-16) / `space-24` desktop (md:py-24) |

**USE THE CLASS `container-custom` FOR THE SECTIONS CONTAINER**

### Layout Patterns

**Asymmetric split:** 55-60% content left / 35-40% accent right. Used for results sections and trust-building blocks. The right column holds a dark accent card.

**Section alternation:** Cream (`color-bg-primary`) and white (`color-bg-card`) backgrounds alternate between major sections to create depth without borders.

**Section offset:** Right 33% of a section gets `color-bg-secondary` background via ::before pseudo-element for asymmetric visual weight.

---

## Tailwind v4 Theme Block

```css
@theme {
  --color-ink: #0F172A;
  --color-ink-light: #1E293B;
  --color-cream: #FDF8F3;
  --color-cream-dark: #F5EFE6;
  --color-coral: #FF6B4A;
  --color-coral-dark: #E5563A;
  --color-sage: #10B981;
  --color-stone: #64748B;
  --color-stone-light: #94A3B8;
  --color-border: #E2E8F0;
  --color-error: #EF4444;
  --color-warning: #F59E0B;

  --font-display: var(--font-dm-serif-display), Georgia, serif;
  --font-body: var(--font-dm-sans), system-ui, sans-serif;
  --font-sans: var(--font-dm-sans), system-ui, sans-serif;

  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
```