import { motion as Motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

import {
  aboutMenu,
  servicesMenu,
  navLinks,
} from "./navbarData";

const MobileMenu = ({ isOpen, closeMenu, onOpenBecomeClient }) => {
  const location = useLocation();

  const isRouteActive = (href) => {
    const current = location.pathname;
    if (href === "/") return current === "/";
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
    if (href === "/services") return current === "/services" || current.startsWith("/services/");
    return current === href || current.startsWith(`${href}/`);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#102A56]/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
          />

          {/* Drawer */}
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 220,
            }}
            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-[#FFFFFF] z-50 lg:hidden border-l border-[#0F172A]/10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#0F172A]/10">

              <div>
                <h2 className="text-[18px] font-semibold text-[#0F172A]">
                  Navi Promotions
                </h2>

                <p className="text-[12px] text-[#0F172A]/65 mt-0.5">
                  Enterprise Digital Agency
                </p>
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={closeMenu}
                aria-label="Close mobile menu"
                className="w-10 h-10 rounded-lg bg-[#F1F5F9] hover:bg-[#102A56] text-[#102A56] hover:text-[#FFFFFF] transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <X className="w-5 h-5" aria-hidden="true" focusable="false" />
              </button>

            </div>

            {/* Menu Body */}
            <div className="flex-1 overflow-y-auto px-6 py-7 space-y-8">

              {/* Main Links */}
              <div className="space-y-3.5">

                {/* HOME */}
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`block text-[18px] font-semibold transition-colors duration-200 ${
                    isRouteActive("/")
                      ? "text-[#2563EB]"
                      : "text-[#102A56] hover:text-[#2563EB]"
                  }`}
                >
                  Home
                </Link>

                {navLinks.map((link) => {
                  const active = isRouteActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={closeMenu}
                      className={`block text-[18px] font-semibold transition-colors duration-200 ${
                        active
                          ? "text-[#2563EB]"
                          : "text-[#102A56] hover:text-[#2563EB]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* About Menu */}
              <div className="space-y-3">

                <span className="text-[12px] uppercase tracking-[0.05em] text-[#0F172A]/55 font-medium">
                  About
                </span>

                {aboutMenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F1F5F9] hover:bg-[#F1F5F9]/80 border border-[#0F172A]/5 hover:border-[#2563EB]/30 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] flex items-center justify-center border border-[#0F172A]/10 shrink-0">
                      <item.icon className="w-4 h-4 text-[#F97316]" />
                    </div>

                    <div>
                      <h4 className="text-[14px] font-semibold text-[#0F172A]">
                        {item.name}
                      </h4>

                      <p className="text-[12px] text-[#0F172A]/70 mt-0.5 leading-[1.4]">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Services Menu */}
              <div className="space-y-3">

                <span className="text-[12px] uppercase tracking-[0.05em] text-[#0F172A]/55 font-medium">
                  Services
                </span>

                {servicesMenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F1F5F9] hover:bg-[#F1F5F9]/80 border border-[#0F172A]/5 hover:border-[#2563EB]/30 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] flex items-center justify-center border border-[#0F172A]/10 shrink-0">
                      <item.icon className="w-4 h-4 text-[#F97316]" />
                    </div>

                    <div>
                      <h4 className="text-[14px] font-semibold text-[#0F172A]">
                        {item.name}
                      </h4>

                      <p className="text-[12px] text-[#0F172A]/70 mt-0.5 leading-[1.4]">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-[#0F172A]/10 space-y-3">

              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  if (onOpenBecomeClient) onOpenBecomeClient();
                }}
                className="block w-full py-3 rounded-[10px] border border-[#102A56]/30 text-center text-[14px] font-medium text-[#102A56] hover:bg-[#102A56] hover:text-[#FFFFFF] transition-colors cursor-pointer"
              >
                Become a Client
              </button>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full py-3 rounded-[10px] bg-[#F97316] text-[#FFFFFF] text-center text-[14px] font-medium hover:bg-[#102A56] transition-colors">
                Let's Talk
              </Link>

            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;