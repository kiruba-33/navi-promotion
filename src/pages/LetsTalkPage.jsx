import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import LetsTalkHero from "../components/sections/lets-talk/LetsTalkHero";
import ContactSection from "../components/sections/lets-talk/ContactSection";
import OurSubBrands from "../components/sections/lets-talk/OurSubBrands";
import LetsTalkCTA from "../components/sections/lets-talk/LetsTalkCTA";

import { letsTalkHeroData } from "../data/letsTalk";

export default function LetsTalkPage() {
  return (
    <Fragment>
      <Helmet>
        <title>Let's Talk | Navi Promotions</title>
        <meta
          name="description"
          content="Let's discuss your next project. Connect with Navi Promotions for digital marketing, development, branding, creative solutions, and our specialized sub-brands."
        />
      </Helmet>

      <main className="bg-white overflow-hidden">
        {/* Hero */}
        <LetsTalkHero
          badge={letsTalkHeroData.badge}
          title={letsTalkHeroData.title}
          description={letsTalkHeroData.description}
          image={letsTalkHeroData.image}
        />

        {/* Contact Information & Interactive Form */}
        <ContactSection />

        {/* Our Sub Brands (Replaces Our Services) */}
        <OurSubBrands />

        {/* Ready To Start & Appointment Booking Modal */}
        <LetsTalkCTA />
      </main>
    </Fragment>
  );
}