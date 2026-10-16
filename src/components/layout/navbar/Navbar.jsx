import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import HamburgerButton from "./HamburgerButton";

const BecomeClientModal = React.lazy(() => import("../../ui/BecomeClientModal"));

function Navbar() {
  const location = useLocation();

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [isBecomeClientModalOpen, setIsBecomeClientModalOpen] =
    useState(false);

  const [hasEverOpenedClientModal, setHasEverOpenedClientModal] =
    useState(false);

  const handleOpenBecomeClientModal = () => {
    setHasEverOpenedClientModal(true);
    setIsBecomeClientModalOpen(true);
  };

    

  const lightPages = [
    "/careers",
    "/become-client",

    "/services/digital-marketing/social-media-marketing",
    "/services/digital-marketing/seo",
    "/services/digital-marketing/sem",
    "/services/digital-marketing/digital-analytics",

    "/services/development/website-development",
    "/services/development/custom-software",
    "/services/development/mobile-app-development",
    "/services/development/hosting-maintenance",

    "/services/branding-kit/graphic-design",
    "/services/branding-kit/video-production",
    "/services/branding-kit/influencer-marketing",
    "/services/branding-kit/product-photography",
    "/services/branding-kit/bulk-sms-whatsapp",
    "/services/branding-kit/content-creation",
  ];

  const isLightPage =
  lightPages.includes(location.pathname);

const isBlogDetailPage =
  location.pathname.startsWith("/blog/") &&
  location.pathname !== "/blog";

  const isGrowthJournalDetailPage =
  location.pathname.startsWith("/growth-journal/") &&
  location.pathname !== "/growth-journal";

const showLightNavbar =
  isLightPage ||
  isBlogDetailPage ||
  isGrowthJournalDetailPage ||
  isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showLightNavbar
            ? "bg-white border-b border-black/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">

          <div className="flex items-center justify-between">

            {/* LEFT LOGO */}
            <Link
              to="/"
              className="relative shrink-0">

              {/* WHITE LOGO */}
              <img
                src="/logo-white.png"
                alt="Logo"
                decoding="async"
                className={`h-10 sm:h-12 lg:h-14 w-auto object-contain transition-all duration-500 ${
                  showLightNavbar
                    ? "opacity-0 absolute"
                    : "opacity-100 relative"
                }`}
              />

              {/* COLOR LOGO */}
              <img
                src="/logo-color.png"
                alt="Logo"
                decoding="async"
                className={`h-10 sm:h-12 lg:h-14 w-auto object-contain transition-all duration-500 ${
                  showLightNavbar
                    ? "opacity-100 relative"
                    : "opacity-0 absolute"
                }`}
              />

            </Link>

            {/* CENTER NAVIGATION */}
            <div className="hidden lg:flex flex-1 justify-center">

              <NavLinks
                isScrolled={showLightNavbar}
              />

            </div>

            {/* RIGHT CTA */}
            <div className="hidden lg:flex items-center gap-5 shrink-0">

              <button
                type="button"
                onClick={handleOpenBecomeClientModal}
                className={`h-12 px-7 rounded-full text-sm font-semibold inline-flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  showLightNavbar
                    ? "border-2 border-black text-black hover:bg-black hover:text-white"
                    : "border-2 border-white/80 text-white hover:bg-white hover:text-black backdrop-blur-md"
                }`}
              >
                Become a Client
              </button>

              <Link
                to="/contact"
                className={`h-12 px-8 rounded-full text-sm font-semibold inline-flex items-center justify-center transition-all duration-300 ${
                  showLightNavbar
                    ? "bg-black text-white hover:bg-brand-orange hover:text-white"
                    : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black"
                }`}>
                Let's Talk
              </Link>

            </div>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden">

              <HamburgerButton
                isOpen={isMobileMenuOpen}
                toggleMenu={() =>
                  setIsMobileMenuOpen(
                    !isMobileMenuOpen
                  )
                }
                isScrolled={showLightNavbar}
              />

            </div>

          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        closeMenu={() =>
          setIsMobileMenuOpen(false)
        }
        onOpenBecomeClient={handleOpenBecomeClientModal}
      />

      {/* BECOME A CLIENT POPUP MODAL */}
      {hasEverOpenedClientModal && (
        <React.Suspense fallback={null}>
          <BecomeClientModal
            isOpen={isBecomeClientModalOpen}
            onClose={() => setIsBecomeClientModalOpen(false)}
          />
        </React.Suspense>
      )}
    </>
  );
}

export default Navbar;