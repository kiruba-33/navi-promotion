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

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">

      {/* HOME — no prefetch needed (eagerly loaded) */}
      <Link
        to="/"
        className={`text-[13px] lg:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
          isActive("/")
            ? isScrolled
              ? "text-black"
              : "text-white"
            : isScrolled
            ? "text-black"
            : "text-white"
        }`}>
        Home
      </Link>

      {/* ABOUT — prefetch fires when dropdown opens */}
      <DropdownMenu
        label="About"
        items={aboutMenu}
        isScrolled={isScrolled}
      />

      {/* SERVICES — prefetch fires when dropdown opens */}
      <DropdownMenu
        label="Services"
        items={servicesMenu}
        isScrolled={isScrolled}
      />

      {/* FLAT LINKS — prefetch on hover & focus */}
      {navLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onMouseEnter={() => prefetchRoute(link.href)}
          onFocus={() => prefetchRoute(link.href)}
          className={`text-[13px] lg:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
            isActive(link.href)
              ? isScrolled
                ? "text-black"
                : "text-white"
              : isScrolled
              ? "text-black"
              : "text-white"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;