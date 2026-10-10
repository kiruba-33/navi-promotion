import { Link, useLocation } from "react-router-dom";

import DropdownMenu from "./dropdowns/DropdownMenu";

import {
  servicesMenu,
  aboutMenu,
  navLinks,
} from "./navbarData";

const NavLinksLight = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6">

      <Link
        to="/"
        className={`text-[13px] lg:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
          isActive("/")
            ? "text-amber-500"
            : "text-black hover:text-amber-500"
        }`}>
        Home
      </Link>

      <DropdownMenu
        label="About"
        items={aboutMenu}
        isScrolled={true}
      />

      <DropdownMenu
        label="Services"
        items={servicesMenu}
        isScrolled={true}
      />

      {navLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={`text-[13px] lg:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
            isActive(link.href)
              ? "text-amber-500"
              : "text-black hover:text-amber-500"
          }`}>
          {link.name}
        </Link>
      ))}

    </nav>
  );
};

export default NavLinksLight;