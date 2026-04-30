# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Lady White Primal Site Clone

**Artifact**: `artifacts/lady-white-primal` (preview at `/`)

A pixel-perfect static React + Vite clone of ladywhiteprimal.com — a Shopify-based skincare and crystals store.

### Design Tokens
- **Primary color**: #F6A600 (amber/gold) — `rgb(246, 166, 0)`
- **Text color**: #121212 (near black) — `rgb(18, 18, 18)`
- **Button**: dark background (`#121212`) with amber text (`#F6A600`)
- **Font**: Inter (self-hosted woff2/woff in `/public/fonts/`)

### Pages
- `/` — Home page (product grid + reviews bar)
- `/collections` — All products
- `/collections/genuine-stone-collection` — Crystal/stone collection
- `/products/:slug` — Individual product pages (12 products)
- `/pages/crystals` — Crystals/about page

### Data
- `src/data/products.ts` — All 12 skincare products + 7 stone collection products (static)

### Assets
- `public/images/` — 121 downloaded product images from original CDN
- `public/fonts/` — 8 Inter font files (woff2 + woff, weights 400/700, normal/italic)
- Source HTML cached in `clone-data/` for reference

### No Backend
Static frontend only. No cart, checkout, account, or payment flows.
