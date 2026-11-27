import { Link, useLocation } from "react-router-dom";

import DropdownMenu from "./dropdowns/DropdownMenu";

import {
  servicesMenu,
  aboutMenu,
  navLinks,
} from "./navbarData";

// Calls the preload factory registered in App.jsx for a given route path.
function prefetchRoute(href) {
  try {
    const factory = window.__naviPreloadMap?.[href];
    if (factory) factory();
  } catch {
    // Silently ignore — preloading is a progressive enhancement
  }
}

const NavLinks = ({ isScrolled }) => {
  const location = useLocation();

  const isRouteActive = (href) => {
    const current = location.pathname;
    if (href === "/") {
      return current === "/";
    }
    if (href === "/about") {
      return (
        current === "/about" ||
        current.startsWith("/about/") ||
        current === "/gallery" ||
        current.startsWith("/gallery/") ||
        current === "/regulations" ||
        current.startsWith("/regulations/")
      );
    }
    if (href === "/services") {
      return current === "/services" || current.startsWith("/services/");
    }
    return current === href || current.startsWith(`${href}/`);
  };

  return (
    <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">

      {/* HOME — no prefetch needed (eagerly loaded) */}
      <Link
        to="/"
        className={`text-[14px] lg:text-[15px] font-medium transition-colors duration-200 whitespace-nowrap rounded-md px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
          isRouteActive("/")
            ? isScrolled
              ? "text-[#F97316] font-semibold"
              : "text-[#FFFFFF] font-semibold underline decoration-[#F97316] decoration-2 underline-offset-8"
            : isScrolled
            ? "text-[#0F172A] hover:text-[#F97316]"
            : "text-[#F1F5F9] hover:text-[#FFFFFF]"
        }`}
      >
        Home
      </Link>

      {/* ABOUT — prefetch fires when dropdown opens */}
      <DropdownMenu
        label="About"
        items={aboutMenu}
        isScrolled={isScrolled}
        isActive={isRouteActive("/about")}
      />

      {/* SERVICES — prefetch fires when dropdown opens */}
      <DropdownMenu
        label="Services"
        items={servicesMenu}
        isScrolled={isScrolled}
        isActive={isRouteActive("/services")}
      />

      {/* FLAT LINKS — prefetch on hover & focus */}
      {navLinks.map((link) => {
        const active = isRouteActive(link.href);
        return (
          <Link
            key={link.href}
            to={link.href}
            onMouseEnter={() => prefetchRoute(link.href)}
            onFocus={() => prefetchRoute(link.href)}
            className={`text-[14px] lg:text-[15px] font-medium transition-colors duration-200 whitespace-nowrap rounded-md px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
              active
                ? isScrolled
                  ? "text-[#F97316] font-semibold"
                  : "text-[#FFFFFF] font-semibold underline decoration-[#F97316] decoration-2 underline-offset-8"
                : isScrolled
                ? "text-[#0F172A] hover:text-[#F97316]"
                : "text-[#F1F5F9] hover:text-[#FFFFFF]"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;