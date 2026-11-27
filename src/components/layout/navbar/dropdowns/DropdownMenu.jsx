import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// Calls the preload factory registered in App.jsx for a given route path.
// No-ops safely if the map isn't available or the route isn't registered.
function prefetchRoute(href) {
  try {
    const factory = window.__naviPreloadMap?.[href];
    if (factory) factory();
  } catch {
    // Silently ignore — preloading is a progressive enhancement
  }
}

const DropdownMenu = ({
  label,
  items,
  isScrolled,
  isActive = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prefetch all dropdown item routes on menu open (hover)
  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
    items.forEach((item) => prefetchRoute(item.href));
  }, [items]);

  return (
    <div
      className="relative py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1 text-[14px] lg:text-[15px] font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer rounded-md px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
          isActive
            ? isScrolled
              ? "text-[#F97316] font-semibold"
              : "text-[#FFFFFF] font-semibold underline decoration-[#F97316] decoration-2 underline-offset-8"
            : isScrolled
            ? "text-[#0F172A] hover:text-[#F97316]"
            : "text-[#F1F5F9] hover:text-[#FFFFFF]"
        }`}
      >
        <span>{label}</span>

        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          focusable="false"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="absolute top-full left-0 mt-2 w-72 bg-[#FFFFFF] border border-[#0F172A]/10 p-2 rounded-2xl shadow-xl shadow-[#102A56]/10 z-50"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#F1F5F9] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                onFocus={() => prefetchRoute(item.href)}
              >
                <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] border border-[#102A56]/10 group-hover:bg-[#F97316] group-hover:border-[#F97316] flex items-center justify-center transition-colors duration-200 shrink-0">
                  <item.icon className="w-4 h-4 text-[#F97316] group-hover:text-[#FFFFFF] transition-colors duration-200" />
                </div>

                <div>
                  <span className="block text-[14px] font-semibold text-[#0F172A] group-hover:text-[#F97316] transition-colors">
                    {item.name}
                  </span>

                  <span className="block text-[12px] text-[#0F172A]/70 leading-[1.4]">
                    {item.desc}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;