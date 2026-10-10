import React, { Suspense, lazy } from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/sections/home/About'
import HomeServices from '../components/sections/home/HomeServices'
import LazySection from '../components/utils/LazySection'

// Above the fold or immediately below — eager load for fast rendering
import ToolsPartners from '../components/sections/home/ToolsPartners'

// Heavy below-the-fold components — lazy load them when they enter viewport
// const Portfolio = lazy(() => import('../components/sections/home/Portfolio'))
const WhyChooseUs = lazy(() => import('../components/sections/home/WhyChooseUs'))
const Stats = lazy(() => import('../components/sections/home/Stats'))
const Testimonials = lazy(() => import('../components/sections/home/Testimonials'))
const Culture = lazy(() => import('../components/sections/home/Culture'))
// const PremiumEventGallery = lazy(() => import('@/components/sections/home/PremiumEventGallery'))
const Events = lazy(() => import('../components/sections/home/Events'))
// const Insights = lazy(() => import('../components/sections/home/Insights'))
const TrustedClients = lazy(() => import('../components/sections/home/TrustedClients'))

function Home() {
  return (
    <>
      <Hero />
      <About />
      <HomeServices />
      <ToolsPartners />
      
      {/* <LazySection margin="600px">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <Portfolio />
        </Suspense>
      </LazySection> */}

      <LazySection margin="600px">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <WhyChooseUs />
        </Suspense>
      </LazySection>

      <LazySection margin="600px">
        <Suspense fallback={<div className="min-h-[300px]" />}>
          <Stats />
        </Suspense>
      </LazySection>

      <LazySection margin="600px">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <Testimonials />
        </Suspense>
      </LazySection>

      <LazySection margin="600px">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <Culture />
        </Suspense>
      </LazySection>

      {/* <LazySection margin="600px">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <PremiumEventGallery />
        </Suspense>
      </LazySection> */}

      <LazySection margin="600px">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <Events />
        </Suspense>
      </LazySection>

      {/* <LazySection margin="600px">
        <Suspense fallback={<div className="min-h-[500px]" />}>
          <Insights />
        </Suspense>
      </LazySection> */}

      <LazySection margin="600px">
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <TrustedClients />
        </Suspense>
      </LazySection>
    </>
  )
}

export default Home