import React from "react";
import { Helmet } from "react-helmet-async";
import OpenPositions from "../components/sections/careers/OpenPositions";
import HiringProcess from "../components/sections/careers/HiringProcess";
import OurValues from "../components/sections/careers/ValuesSection";
import WhyJoinNavi from "../components/sections/careers/WhyJoinNavi";
import CareersLocationMap from "../components/sections/careers/CareersLocationMap";

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers | Navi Promotions</title>
        <meta
          name="description"
          content="Explore career opportunities and internships at Navi Promotions in Theni, Tamil Nadu. Join a team focused on digital growth, engineering excellence, and creative impact."
        />
      </Helmet>

      <main className="min-h-screen overflow-x-hidden bg-white">
        {/* Section 1: Open Positions */}
        <OpenPositions />

        {/* Section 2: Hiring Process */}
        <HiringProcess />

        {/* Section 3: Our Values */}
        <OurValues />

        {/* Section 4: Why Join Navi */}
        <WhyJoinNavi />

        {/* Section 5: Map & Headquarters */}
        <CareersLocationMap />
      </main>
    </>
  );
}