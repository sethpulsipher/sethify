# Technical Stack

## Framework & Core

| Layer | Choice | Version | Notes |
|---|---|---|---|
| SSG / Framework | Astro | Latest | Islands architecture |
| UI Components | React | Latest | For interactive islands only |
| CSS | Tailwind CSS | Latest | Notes |
| Language | TypeScript | Latest | Notes |

## Key Packages

| Package | Purpose |
|---|---|
| [package-name] | [What it does] |
| [package-name] | [What it does] |

## Hosting & Deployment

| Setting | Value |
|---|---|
| Host | Netlify |
| Repo | [REPO_URL] |
| Branch → Production | `master` |
| Branch → Preview | `dev` |
| Build command | `npm run build` |
| Output dir | `dist` |
| Node version | Latest |
| Environment variables | N/A |

## File & Folder Conventions

| Path | Purpose |
|---|---|
| `src/components/` | Shared components |
| `src/layouts/` | Page layouts |
| `src/pages/` | Route pages |
| `src/styles/` | Global styles, tokens |
| `public/` | Static assets |
| `docs/` | This documentation |

## Code Conventions

- **Components:** [e.g., PascalCase filenames, named exports]
- **Styles:** [e.g., Tailwind utility classes — no custom CSS unless tokens required]
- **Images:** [e.g., Use `<Image />` component for automatic optimization]
- **Imports:** [e.g., Use `@/` path alias for `src/`]
