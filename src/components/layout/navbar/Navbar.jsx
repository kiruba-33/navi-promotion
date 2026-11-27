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
    "/about/ceo",
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
            ? "bg-[#FFFFFF] border-b border-[#0F172A]/10 py-4 shadow-xs"
            : "bg-transparent py-5"
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
            <div className="hidden lg:flex items-center gap-3.5 shrink-0">

              <button
                type="button"
                onClick={handleOpenBecomeClientModal}
                className={`h-11 px-5 rounded-[10px] text-[14px] font-medium inline-flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                  showLightNavbar
                    ? "border border-[#102A56]/25 text-[#102A56] bg-[#FFFFFF] hover:border-[#2563EB] hover:text-[#2563EB]"
                    : "border border-white/30 text-[#FFFFFF] bg-[#102A56]/55 backdrop-blur-md hover:bg-[#FFFFFF] hover:text-[#102A56]"
                }`}
              >
                Become a Client
              </button>

              <Link
                to="/contact"
                className={`h-11 px-6 rounded-[10px] text-[14px] font-medium inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                  showLightNavbar
                    ? "bg-[#F97316] text-[#FFFFFF] hover:bg-[#102A56]"
                    : "bg-[#F97316] text-[#FFFFFF] hover:bg-[#2563EB]"
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