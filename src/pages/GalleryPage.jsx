import React, { Fragment, useEffect, useState, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

import GalleryHero from "../components/sections/gallery/GalleryHero";
import GalleryGrid from "../components/sections/gallery/GalleryGrid";
import CTA from "../components/CTA";

const GalleryModal = lazy(() => import("../components/sections/gallery/GalleryModal"));

import {
  galleryHeroData,
  galleryEvents,
} from "../data/gallery";

export default function GalleryPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [hasOpenedModal, setHasOpenedModal] = useState(false);

  if ((selectedEvent || selectedMediaIndex !== null) && !hasOpenedModal) {
    setHasOpenedModal(true);
  }

  useEffect(() => {
    if (
      selectedEvent ||
      selectedMediaIndex !== null
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedEvent, selectedMediaIndex]);

  return (
    <Fragment>
      <Helmet>
        <title>Gallery | Navi Promotions</title>

        <meta
          name="description"
          content="Explore the culture, events, celebrations, social initiatives and memorable moments at Navi Promotions."
        />
      </Helmet>

      <main className="bg-slate-50">
        {/* Hero Section */}
        <GalleryHero
          badge={galleryHeroData.badge}
          title={galleryHeroData.title}
          description={galleryHeroData.description}
          image={galleryHeroData.image}
        />

        {/* Events Grid */}
        <GalleryGrid
          events={galleryEvents}
          onSelectEvent={setSelectedEvent}
        />

        {/* Modal + Lightbox */}
        {hasOpenedModal && (
          <Suspense fallback={null}>
            <GalleryModal
              selectedEvent={selectedEvent}
              setSelectedEvent={setSelectedEvent}
              selectedMediaIndex={selectedMediaIndex}
              setSelectedMediaIndex={setSelectedMediaIndex}
            />
          </Suspense>
        )}

        {/* CTA */}
        <CTA />
      </main>
    </Fragment>
  );
}