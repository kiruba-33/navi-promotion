import { Menu, X } from "lucide-react";

const HamburgerButton = ({
  isOpen,
  toggleMenu,
  isScrolled,
}) => {
  return (
    <button
      className={`lg:hidden p-2 rounded-xl border transition-all duration-300 ${
        isScrolled
          ? "bg-white border-black/10 text-black"
          : "bg-white/10 backdrop-blur-md border-white/20 text-white"
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