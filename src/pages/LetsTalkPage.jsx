import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import LetsTalkHero from "../components/sections/lets-talk/LetsTalkHero";
import ContactSection from "../components/sections/lets-talk/ContactSection";
import ServicesSelector from "../components/sections/lets-talk/ServicesSelector";
import LetsTalkCTA from "../components/sections/lets-talk/LetsTalkCTA";

import {
  letsTalkHeroData,
} from "../data/letsTalk";

export default function LetsTalkPage() {
  return (
    <Fragment>
      <Helmet>
        <title>
          Let's Talk | Navi Promotions
        </title>

        <meta
          name="description"
          content="Let's discuss your next project. Connect with Navi Promotions for digital marketing, development, branding and creative solutions."
        />
      </Helmet>

      <main className="bg-white overflow-hidden">
        <LetsTalkHero
          badge={
            letsTalkHeroData.badge
          }
          title={
            letsTalkHeroData.title
          }
          description={
            letsTalkHeroData.description
          }
          image={
            letsTalkHeroData.image
          }
        />

        <ContactSection />

        <ServicesSelector />

        <LetsTalkCTA />
      </main>
    </Fragment>
  );
}