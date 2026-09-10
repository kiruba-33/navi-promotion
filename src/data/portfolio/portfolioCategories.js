export const PORTFOLIO_CATEGORY_NAMES = {
  DIGITAL_MARKETING: "Digital Marketing",
  DEVELOPMENT: "Development",
  BRANDING_KIT: "Branding Kit",
};

export const categories = {
  "Digital Marketing": [
    "All",
    "Social Media Reports",
    "SEO Reports",
    "Ads Reports",
  ],

  Development: [
    "All",
    "Website",
    "App",
    "Custom works",
  ],

  "Branding Kit": [
    "All",
    "Videos",
    "Posters",
    "Logo",
    "Packages",
  ],
};

export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.1,
    opacity: 0,
  }),

  center: {
    zIndex: 1,
    x: 0,
    scale: 1,
    opacity: 1,
  },

  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    scale: 0.9,
    opacity: 0,
  }),
};
