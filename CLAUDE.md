# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Next.js)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test framework is configured.

## Architecture

**Stack:** Next.js 16 (App Router) + React 19 + Tailwind CSS + Framer Motion + Embla Carousel

**Backend API:** Configured via `NEXT_PUBLIC_API_URL` (`.env.local`). Points to `https://sales-backend-production.up.railway.app`. Endpoints:
- `GET /api/home` — top-rated games for the homepage carousel
- `GET /api/deals` — full deals list
- `GET /api/deals?maxPrice=5` — deals under €5
- `GET /api/deals?store=1` — Steam-only deals

All pages use `next: { revalidate: 60 }` (ISR, 60-second cache).

## Page structure (`/app`)

Each page follows the same pattern: **server component** fetches data → passes it to a **client content component** that handles UI and translations.

| Route | Server page | Client content component |
|---|---|---|
| `/` | `page.jsx` | `components/HomeContent.jsx` |
| `/ofertas-pc-semana` | `ofertas-pc-semana/page.jsx` | `components/OfertasPCSemanaContent.jsx` |
| `/ofertas-steam` | `ofertas-steam/page.jsx` | `components/OfertasSteamContent.jsx` |
| `/juegos-menos-de-5-euros` | `juegos-menos-de-5-euros/page.jsx` | `components/JuegosMenos5Content.jsx` |

## Key components (`/app/components`)

- **`DealsExplorer.jsx`** — `"use client"`. Full filter UI: single-thumb price slider (max price only), discount buttons, Metacritic score buttons, sort (default: score), pagination (20/page). Receives full deal list as prop and filters client-side.
- **`DealCard.jsx`** — `"use client"`. Single deal card. Maps numeric `storeID` (1–36+) to store names via internal `STORE_MAP`.
- **`MetacriticCarousel.jsx`** — `"use client"`. Embla carousel with autoplay for homepage.
- **`LanguageProvider.jsx`** — `"use client"`. React context providing `{ lang, setLang, t }`. Persists language choice in `localStorage`. Default: `"es"`.
- **`LanguageSwitcher.jsx`** — `"use client"`. Fixed-position 🇪🇸 ES / 🇬🇧 EN toggle, top-right corner, visible on all pages. Rendered in `layout.jsx`.

## i18n

Translation strings live in `app/i18n/translations.js`, organised by namespace: `common`, `filters`, `home`, `pcDeals`, `steamDeals`, `cheapGames`. Each namespace has both `es` and `en` keys.

Use the hook in any client component:
```js
const { t } = useLang(); // from ./LanguageProvider
// t.common.buyNow, t.filters.sortBy, t.home.badge, etc.
```

Language switching is **client-side only** (localStorage). It is not URL-based, so it does not affect SEO — search engines only index Spanish content.

## Styling conventions

Mix of Tailwind utility classes and inline `style={{}}` objects. Design system:
- Background: `#09090d`
- Accent green: `#10b981` (interactive) / `#34d399` (text/labels)
- Glassmorphism with `backdrop-filter: blur()`
- Fluid typography via CSS `clamp()`

## SEO

- **Metadata:** All pages export `title`, `description`, `openGraph`, `twitter`, and `alternates.canonical`.
- **OG image:** `/public/og-image.png` (1200×630). Referenced in all page metadata as `https://juegosbaratospc.com/og-image.png`.
- **Sitemap:** `app/sitemap.js` — covers `/`, `/ofertas-pc-semana`, `/ofertas-steam`, `/juegos-menos-de-5-euros` with `changeFrequency: "daily"`.
- **robots.txt:** `/public/robots.txt` — allows all, blocks `/api/`, points to sitemap.
- **Structured data:** BreadcrumbList JSON-LD in all detail page content components. FAQPage JSON-LD in `ofertas-pc-semana` page.

## Notes

- `gh` CLI is **not installed** on this machine. PRs must be created via the GitHub web UI at `https://github.com/Vangdale/sales-frontend/pull/new/<branch>`.
- `.claude/` is in `.gitignore` — never commit it.
- The production domain is `juegosbaratospc.com`.
