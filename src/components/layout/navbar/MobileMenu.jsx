import { motion as Motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import {
  aboutMenu,
  servicesMenu,
  navLinks,
} from "./navbarData";

const MobileMenu = ({ isOpen, closeMenu, onOpenBecomeClient }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-40 lg:hidden"
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
            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 lg:hidden border-l border-slate-200 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100">

              <div>
                <h2 className="text-lg font-bold heading-primary">
                  Navi Promotions
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Enterprise Digital Agency
                </p>
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={closeMenu}
                className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center"
              >
                <X className="w-5 h-5 text-slate-900"  aria-hidden="true" focusable="false" />
              </button>

            </div>

            {/* Menu Body */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">

              {/* Main Links */}
              <div className="space-y-4">

                {/* HOME */}
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block text-xl font-semibold text-slate-900 hover:text-brand-orange transition-colors">
                  Home
                </Link>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeMenu}
                    className="block text-xl font-semibold text-slate-900 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* About Menu */}
              <div className="space-y-4">

                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  About
                </span>

                {aboutMenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center border border-slate-100">
                      <item.icon className="w-5 h-5 text-brand-orange" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold heading-primary">
                        {item.name}
                      </h4>

                      <p className="text-xs text-slate-500 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Services Menu */}
              <div className="space-y-4">

                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Services
                </span>

                {servicesMenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center border border-slate-100">
                      <item.icon className="w-5 h-5 text-brand-orange" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold heading-primary">
                        {item.name}
                      </h4>

                      <p className="text-xs text-slate-500 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-slate-100 space-y-3">

              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  if (onOpenBecomeClient) onOpenBecomeClient();
                }}
                className="block w-full py-3.5 rounded-2xl border-2 border-slate-900 text-center text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-all cursor-pointer"
              >
                Become a Client
              </button>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full py-3.5 rounded-2xl bg-slate-900 text-white text-center text-sm font-semibold hover:bg-brand-orange transition-all">
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