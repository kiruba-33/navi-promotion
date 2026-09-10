import React from "react";
import { Helmet } from "react-helmet-async";

// Importing the newly created custom split-up component
import AboutHero from "../components/sections/about/AboutHero";

import AboutContent from "../components/sections/about/AboutContent";
import MissionVisionGoal from "../components/sections/about/MissionVisionGoal";
import OurEntities from "../components/sections/about/OurEntities";
import GlobalFootprint from "../components/sections/about/GlobalFootprint";
import OurTeam from "../components/sections/about/OurTeam";

import CTA from "../components/CTA";

import { aboutHeroData } from "../data/about";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Navi Promotions</title>
        <meta
          name="description"
          content="Learn more about Navi Promotions, our mission, vision, values and the team driving digital excellence."
        />
      </Helmet>

      <main className="bg-slate-50">
        {/* Render clean and isolated code segment here */}
        <AboutHero
          badge={aboutHeroData.badge}
          description={aboutHeroData.description}
          image={aboutHeroData.image}
        />

        <AboutContent />
        <MissionVisionGoal />
        <OurEntities />
        <GlobalFootprint />
        <OurTeam />
        <CTA />
      </main>
    </>
  );
}