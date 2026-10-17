import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './components/layout/navbar/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/layout/footer/Footer'
import PageLoadingFallback from './components/PageLoadingFallback'

// ─── Eagerly loaded ────────────────────────────────────────────────────────────
// Home stays eager — it is the initial LCP route; any delay would directly hurt
// the user's first impression and Lighthouse scores.
import Home from './pages/Home'

// ─── Route-level lazy chunks ───────────────────────────────────────────────────
// Each lazy() call produces a separate JS chunk loaded only when the route is
// actually visited — never downloaded for users who never navigate there.

// Core pages
const AboutPage                   = lazy(() => import('./pages/AboutPage'))
const CeoProfilePage              = lazy(() => import('./pages/CeoProfilePage'))
const PortfolioPage               = lazy(() => import('./pages/PortfolioPage'))
const GalleryPage                 = lazy(() => import('./pages/GalleryPage'))
const RegulationsPage             = lazy(() => import('./pages/RegulationsPage'))
const LetsTalkPage                = lazy(() => import('./pages/LetsTalkPage'))
const CareersPage                 = lazy(() => import('./pages/CareersPage'))

// Blog & Journal
const BlogPage                    = lazy(() => import('./pages/blog/BlogPage'))
const BlogPostPage                = lazy(() => import('./pages/blog/BlogPostPage'))
const GrowthJournalPage           = lazy(() => import('./pages/GrowthJournal'))
const GrowthJournalDetailPage     = lazy(() => import('./pages/GrowthJournalDetail'))

// Services — hub pages
const DigitalMarketingPage        = lazy(() => import('./pages/services/DigitalMarketingPage'))
const DevelopmentPage             = lazy(() => import('./pages/services/Developmentpage'))
const BrandingKitPage             = lazy(() => import('./pages/services/BrandingKitPage'))

// Digital Marketing detail pages
const SEOPage                     = lazy(() => import('./pages/services/digitalMarketingDetails/SEOPage'))
const PPCPage                     = lazy(() => import('./pages/services/digitalMarketingDetails/PPCPage'))
const SocialMediaMarketingPage    = lazy(() => import('./pages/services/digitalMarketingDetails/SocialMediaMarketingPage'))
const AnalyticsPage               = lazy(() => import('./pages/services/digitalMarketingDetails/AnalyticsPage'))

// Development detail pages
const WebsiteDevelopmentPage      = lazy(() => import('./pages/services/developmentDetails/WebsiteDevelopmentPage'))
const SoftwareDevelopmentPage     = lazy(() => import('./pages/services/developmentDetails/SoftwareDevelopmentPage'))
const MobileAppDevelopmentPage    = lazy(() => import('./pages/services/developmentDetails/MobileAppDevelopmentPage'))
const WebHostingPage              = lazy(() => import('./pages/services/developmentDetails/WebHostingPage'))

// Branding Kit detail pages
const GraphicDesignPage           = lazy(() => import('./pages/services/brandingKitDetails/GraphicDesignPage'))
const VideoProductionPage         = lazy(() => import('./pages/services/brandingKitDetails/VideoProductionPage'))
const InfluencerMarketingPage     = lazy(() => import('./pages/services/brandingKitDetails/InfluencerMarketingPage'))
const ProductPhotographyPage      = lazy(() => import('./pages/services/brandingKitDetails/ProductPhotographyPage'))
const ContentCreationPage         = lazy(() => import('./pages/services/brandingKitDetails/ContentCreationPage'))
const BulkSMSPage                 = lazy(() => import('./pages/services/brandingKitDetails/BulkSMSPage'))

// ─── Hover/focus preload map ───────────────────────────────────────────────────
// Exposed on window so NavLinks can call preloadRoute() without circular imports.
// Only high-value, frequently visited routes are preloaded — not every page.
if (typeof window !== 'undefined') {
  window.__naviPreloadMap = {
    '/portfolio':                        () => import('./pages/PortfolioPage'),
    '/about':                            () => import('./pages/AboutPage'),
    '/about/ceo':                        () => import('./pages/CeoProfilePage'),
    '/contact':                          () => import('./pages/LetsTalkPage'),
    '/services/digital-marketing':       () => import('./pages/services/DigitalMarketingPage'),
    '/services/development':             () => import('./pages/services/Developmentpage'),
    '/services/branding-kit':            () => import('./pages/services/BrandingKitPage'),
    '/careers':                          () => import('./pages/CareersPage'),
    '/blog':                             () => import('./pages/blog/BlogPage'),
    '/growth-journal':                   () => import('./pages/GrowthJournal'),
  };
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
          {/* Home — eagerly loaded, no Suspense delay */}
          <Route path="/" element={<Home />} />

          {/* Core pages */}
          <Route path='/about'       element={<AboutPage />} />
          <Route path='/about/ceo'   element={<CeoProfilePage />} />
          <Route path='/gallery'     element={<GalleryPage />} />
          <Route path='/regulations' element={<RegulationsPage />} />
          <Route path='/portfolio'   element={<PortfolioPage />} />
          <Route path='/contact'     element={<LetsTalkPage />} />
          <Route path='/careers'     element={<CareersPage />} />

          {/* Blog & Journal */}
          <Route path='/blog'                 element={<BlogPage />} />
          <Route path='/blog/:id'             element={<BlogPostPage />} />
          <Route path='/growth-journal'       element={<GrowthJournalPage />} />
          <Route path='/growth-journal/:id'   element={<GrowthJournalDetailPage />} />

          {/* Services hub */}
          <Route path='/services/digital-marketing' element={<DigitalMarketingPage />} />
          <Route path='/services/development'        element={<DevelopmentPage />} />
          <Route path='/services/branding-kit'       element={<BrandingKitPage />} />

          {/* Digital Marketing detail pages */}
          <Route path="/services/digital-marketing/seo"                    element={<SEOPage />} />
          <Route path="/services/digital-marketing/sem"                    element={<PPCPage />} />
          <Route path="/services/digital-marketing/social-media-marketing" element={<SocialMediaMarketingPage />} />
          <Route path="/services/digital-marketing/digital-analytics"      element={<AnalyticsPage />} />

          {/* Development detail pages */}
          <Route path="/services/development/website-development"    element={<WebsiteDevelopmentPage />} />
          <Route path="/services/development/custom-software"        element={<SoftwareDevelopmentPage />} />
          <Route path="/services/development/mobile-app-development" element={<MobileAppDevelopmentPage />} />
          <Route path='/services/development/hosting-maintenance'    element={<WebHostingPage />} />

          {/* Branding Kit detail pages */}
          <Route path="/services/branding-kit/graphic-design"       element={<GraphicDesignPage />} />
          <Route path="/services/branding-kit/video-production"     element={<VideoProductionPage />} />
          <Route path="/services/branding-kit/influencer-marketing" element={<InfluencerMarketingPage />} />
          <Route path="/services/branding-kit/product-photography"  element={<ProductPhotographyPage />} />
          <Route path="/services/branding-kit/content-creation"     element={<ContentCreationPage />} />
          <Route path="/services/branding-kit/bulk-sms-whatsapp"    element={<BulkSMSPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App