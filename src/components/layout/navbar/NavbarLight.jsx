import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import NavLinksLight from "./NavLinksLight";
import HamburgerButton from "./HamburgerButton";

import { useState } from "react";

function NavbarLight() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 shadow-sm py-4">

        <div className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              className="shrink-0">
              <img
                src="/logo-color.png"
                alt="Logo"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex flex-1 justify-center">

              <NavLinksLight />

            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-5 shrink-0">

              <Link
                to="/become-client"
                className="text-sm font-semibold text-black transition-all duration-300 hover:text-amber-500">
                Become Client
              </Link>

              <Link
                to="/contact"
                className="h-12 px-8 rounded-full text-sm font-bold inline-flex items-center justify-center bg-black text-white transition-all duration-300 hover:opacity-90">
                Let's Talk
              </Link>

            </div>

            {/* MOBILE */}
            <div className="lg:hidden">

              <HamburgerButton
                isOpen={isMobileMenuOpen}
                toggleMenu={() =>
                  setIsMobileMenuOpen(
                    !isMobileMenuOpen
                  )
                }
                isScrolled={true}
              />

            </div>

          </div>

        </div>

      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        closeMenu={() =>
          setIsMobileMenuOpen(false)
        }
      />
    </>
  );
}

export default NavbarLight;