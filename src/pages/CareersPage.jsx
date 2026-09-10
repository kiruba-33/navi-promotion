import React from 'react'
import CareersIntro from '../components/sections/careers/CareersIntro'
import OpenPositions from '../components/sections/careers/OpenPositions'
import HiringProcess from '../components/sections/careers/HiringProcess'
import OurValues from '../components/sections/careers/ValuesSection'
import FutureOpportunities from '../components/sections/careers/FutureOpportunities'

function CareersPage() {
  return (
    <>
    <main className="min-h-screen overflow-x-hidden">
        <CareersIntro/>
        <OpenPositions/>
        <HiringProcess/>
        <OurValues/>
        <FutureOpportunities/>
    </main>
    </>
  )
}

export default CareersPage