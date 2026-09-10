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
        className={`flex items-center gap-1 text-sm font-bold transition-all duration-300 ${
          isScrolled
            ? "text-black"
            : "text-white"
        }`}
      >
        {label}

        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
         aria-hidden="true" focusable="false" />
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
            className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 p-2 rounded-3xl shadow-2xl z-50"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                onFocus={() => prefetchRoute(item.href)}
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-black" />
                </div>

                <div>
                  <span className="block text-sm font-bold text-black">
                    {item.name}
                  </span>

                  <span className="block text-xs text-gray-500">
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