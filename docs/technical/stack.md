# Technical Stack

## Framework & Core

| Layer | Choice | Version | Notes |
|---|---|---|---|
| SSG / Framework | Next.js | Latest stable version | Islands architecture |
| UI Components | React | Latest stable version | For interactive islands only |
| CSS | Tailwind CSS | Latest stable version | Notes |
| Language | TypeScript | Latest stable version | Notes |

## Key Packages

| Package | Purpose |
|---|---|
| [package-name] | [What it does] |
| [package-name] | [What it does] |

## Hosting & Deployment

| Setting | Value |
|---|---|
| Host | Vercel |
| Repo | [REPO_URL] |
| Branch → Production | `master` |
| Branch → Preview | `dev` |
| Build command | `pnpm run build` |
| Output dir | `dist` |
| Node version | Latest |
| Environment variables | N/A |

## File & Folder Conventions

| Path | Purpose |
|---|---|
| `src/components/` | Shared components |
| `src/app/` | Next.js app router |
| `src/styles/` | Global styles, tokens |
| `public/` | Static assets |
| `docs/` | This documentation |

## Code Conventions

- **Components:** [e.g., PascalCase filenames, named exports]
- **Styles:** [e.g., Tailwind utility classes — no custom CSS unless tokens required]
- **Images:** [e.g., Use `<Image />` component for automatic optimization]
- **Imports:** [e.g., Use `@/` path alias for `src/`]
