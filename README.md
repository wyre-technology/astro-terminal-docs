# Astro Terminal Docs

A themeable documentation starter for [Astro](https://astro.build) with 8 built-in terminal color scheme presets.

**[Live Demo](https://wyre-technology.github.io/astro-terminal-docs/)**

## Quick Start

```bash
npm create astro@latest -- --template wyre-technology/astro-terminal-docs
cd my-docs
npm install
npm run dev
```

## Features

- **8 color themes** — Default, Nord, Dracula, Catppuccin, Gruvbox, Solarized, Tokyo Night, One Dark
- **Light & dark mode** — Independent toggle, persists to localStorage, zero flash on load
- **Full-text search** — Pagefind with Ctrl+K / Cmd+K shortcut
- **MDX content collections** — Type-safe frontmatter, automatic sidebar from file structure
- **Responsive** — Mobile hamburger menu, collapsible sidebar
- **Copy buttons** — Auto-added to all code blocks
- **SEO ready** — Open Graph, Twitter Cards, sitemap, canonical URLs

## Themes

Each theme provides both light and dark variants. Switch from the header dropdown — your choice persists across pages.

| Theme | Dark Background | Accent |
|-------|----------------|--------|
| Default | `#0a0a0a` | `#3b82f6` |
| Nord | `#2e3440` | `#88c0d0` |
| Dracula | `#282a36` | `#bd93f9` |
| Catppuccin | `#1e1e2e` | `#cba6f7` |
| Gruvbox | `#282828` | `#fabd2f` |
| Solarized | `#002b36` | `#268bd2` |
| Tokyo Night | `#1a1b26` | `#7aa2f7` |
| One Dark | `#282c34` | `#61afef` |

## Project Structure

```
src/
├── components/          # Header, Footer, Sidebar, ThemeSwitcher, etc.
├── content/docs/        # Your MDX documentation pages
├── data/themes.ts       # Theme metadata (name, preview colors)
├── layouts/             # BaseLayout + DocsLayout
├── lib/theme.ts         # localStorage persistence
├── pages/               # Homepage + docs route
└── styles/
    ├── global.css       # Tailwind v4 + component styles
    └── themes/          # 8 color scheme CSS files
```

## Adding Documentation Pages

Create `.mdx` files in `src/content/docs/`:

```mdx
---
title: My Page
description: Page description for SEO.
order: 1
---

# My Page

Content here.
```

Use subdirectories for sidebar sections:

```
src/content/docs/
├── getting-started.mdx      → "General" section
├── guides/
│   └── deployment.mdx        → "Guides" section
└── reference/
    └── api.mdx                → "Reference" section
```

## Creating a Custom Theme

1. Copy any file in `src/styles/themes/` (e.g., `nord.css`)
2. Change the selector to `:root[data-theme="my-theme"]` (and `.dark` variant)
3. Update the colors
4. Import it in `src/styles/global.css`
5. Add an entry to `src/data/themes.ts`

All colors use CSS custom properties (`--td-bg`, `--td-accent`, etc.) mapped to Tailwind via `@theme`.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production (includes Pagefind indexing) |
| `npm run preview` | Preview the production build locally |

## Tech Stack

- [Astro](https://astro.build) v5
- [Tailwind CSS](https://tailwindcss.com) v4
- [MDX](https://mdxjs.com) via `@astrojs/mdx`
- [Pagefind](https://pagefind.app) for search

## License

Apache 2.0 — see [LICENSE](LICENSE).
