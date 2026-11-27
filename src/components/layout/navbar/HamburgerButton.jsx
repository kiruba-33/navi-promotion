import { Menu, X } from "lucide-react";

const HamburgerButton = ({
  isOpen,
  toggleMenu,
  isScrolled,
}) => {
  return (
    <button
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={`lg:hidden p-2.5 rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
        isScrolled
          ? "bg-[#FFFFFF] border-[#0F172A]/15 text-[#102A56]"
          : "bg-[#102A56]/70 backdrop-blur-md border-white/25 text-[#FFFFFF]"
      }`}
      onClick={toggleMenu}
    >
      {isOpen ? (
        <X size={24}  aria-hidden="true" focusable="false" />
      ) : (
        <Menu size={24} />
      )}
    </button>
  );
};

export default HamburgerButton;