# Project Technical Report

## 1. Overview

This document captures the technical architecture, core dependencies, data flow, and component structure for the `NaviPromotions` marketing website.

The codebase is a React 19 single-page application built with Vite 8, designed as a static marketing site that serves:
- Home / hero landing content
- About section
- Portfolio and gallery
- Blog listing and post details
- Services pages with nested detail routes
- Careers and regulations pages
- Contact / Let's Talk form section

The application architecture is primarily static and data-driven, with content supplied from `src/data/*.js` modules and page layout composed through reusable components.

## 2. Technology Stack

### Core Framework
- `react` ^19.2.5
- `react-dom` ^19.2.5
- `vite` ^8.0.9
- `@vitejs/plugin-react` ^6.0.1

### Styling
- `tailwindcss` ^3.4.19
- `postcss` ^8.5.10
- `autoprefixer` ^10.5.0
- `@fontsource/inter` ^5.2.8
- Custom font import for `Manrope` in `src/index.css`

### Routing and SEO
- `react-router` ^7.14.1
- `react-router-dom` ^7.14.1
- `react-helmet-async` ^3.0.0

### Animation and UI
- `framer-motion` ^12.38.0
- `motion` ^12.38.0
- `gsap` ^3.15.0
- `@gsap/react` ^2.1.2
- `lucide-react` ^1.8.0

### Linting and Development Tools
- `eslint` ^9.39.4
- `@eslint/js` ^9.39.4
- `eslint-plugin-react-hooks` ^7.1.1
- `eslint-plugin-react-refresh` ^0.5.2
- `@types/react` ^19.2.14
- `@types/react-dom` ^19.2.3

## 3. Root Application Entry Points

- `src/main.jsx`
  - boots the React app
  - imports `@fontsource/inter/index.css`
  - imports `./index.css`
  - wraps `<App />` in `<BrowserRouter>` and `<StrictMode>`

- `src/App.jsx`
  - renders `<ScrollToTop />` and `<Navbar />`
  - defines the full route map using React Router v7
  - includes top-level routes, nested service routes, blog and growth journal detail routes

- `src/index.css`
  - imports Tailwind base/components/utilities
  - imports `src/styles/typography.css`
  - defines global `body` styling with `Manrope` and a light neutral background

- `tailwind.config.js`
  - configured to scan `index.html` and all `src/**/*.{js,ts,jsx,tsx}` files
  - currently uses default Tailwind theme extension

## 4. Folder Layout and High-Level Architecture

| Folder | Purpose |
|---|---|
| `src/components/` | Reusable UI and layout components, including navigation, hero sections, cards, and shared utilities |
| `src/pages/` | Page-level composition components, each representing a route or major section |
| `src/data/` | Static content, copy, and configuration objects for use across pages and components |
| `src/assets/` | Static assets used by the UI, such as images and icons |
| `src/hooks/` | Custom hooks (currently present as a folder) |
| `src/routes/` | Route-related logic and abstractions (present but not necessarily used for route definitions) |
| `src/styles/` | Tailwind typography utilities and CSS helper styles |

### Major Page Categories

- Core marketing sections: `Home`, `AboutPage`, `PortfolioPage`, `GalleryPage`, `RegulationsPage`, `LetsTalkPage`, `CareersPage`
- Blog: `BlogPage`, `BlogPostPage`
- Growth Journal: `GrowthJournal`, `GrowthJournalDetail`
- Services overview: `DigitalMarketingPage`, `DevelopmentPage`, `BrandingKitPage`
- Service detail pages: `SEOPage`, `PPCPage`, `SocialMediaMarketingPage`, `AnalyticsPage`, `WebsiteDevelopmentPage`, `SoftwareDevelopmentPage`, `MobileAppDevelopmentPage`, `WebHostingPage`, `GraphicDesignPage`, `VideoProductionPage`, `InfluencerMarketingPage`, `ProductPhotographyPage`, `ContentCreationPage`, `BulkSMSPage`

### Core UI Components

- `src/components/layout/navbar/Navbar.jsx`
  - responsive header with scroll and route-aware style changes
  - toggles light/dark logo assets based on page context
  - includes desktop nav links and mobile menu behavior

- `src/components/ScrollToTop.jsx`
  - ensures route changes reset scroll position

- `src/components/CTA.jsx`
  - reusable call-to-action component across pages

- `src/components/cards/`, `src/components/hero/`, `src/components/sections/`
  - organized by feature area and page section for easier composition

## 5. Route Map Summary

### Primary routes

- `/` → `Home`
- `/about` → `AboutPage`
- `/gallery` → `GalleryPage`
- `/regulations` → `RegulationsPage`
- `/blog` → `BlogPage`
- `/blog/:id` → `BlogPostPage`
- `/portfolio` → `PortfolioPage`
- `/growth-journal` → `GrowthJournal`
- `/growth-journal/:id` → `GrowthJournalDetail`
- `/services/digital-marketing` → `DigitalMarketingPage`
- `/services/development` → `DevelopmentPage`
- `/services/branding-kit` → `BrandingKitPage`
- `/contact` → `LetsTalkPage`
- `/careers` → `CareersPage`

### Service detail routes

- `/services/development/website-development`
- `/services/digital-marketing/seo`
- `/services/digital-marketing/sem`
- `/services/digital-marketing/social-media-marketing`
- `/services/digital-marketing/digital-analytics`
- `/services/development/custom-software`
- `/services/development/mobile-app-development`
- `/services/development/hosting-maintenance`
- `/services/branding-kit/graphic-design`
- `/services/branding-kit/video-production`
- `/services/branding-kit/influencer-marketing`
- `/services/branding-kit/product-photography`
- `/services/branding-kit/content-creation`
- `/services/branding-kit/bulk-sms-whatsapp`

## 6. Content Strategy and Data Flow

- The site uses `src/data/*.js` modules to provide page copy, card data, blog posts, portfolio items, and service descriptions.
- Pages compose components and pass static content through props rather than loading remote APIs.
- This design favors predictable rendering and simplified maintenance for marketing content.

---
