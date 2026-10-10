// src/components/layout/footer/footerData.js
// Verified footer structure and content for Navi Promotions.

export const footerData = {
  company: {
    name: "Navi Promotions",
    tagline: "Performance-Driven Digital Agency",
    description:
      "Navi Promotions is a digital marketing and technology company founded in Theni, Tamil Nadu. We deliver high-impact digital marketing, modern web & software engineering, and brand identity solutions that scale ambitious businesses worldwide.",
    socials: [
      { name: "LinkedIn", href: "#", key: "linkedin" },
      { name: "Instagram", href: "#", key: "instagram" },
      { name: "Facebook", href: "#", key: "facebook" },
      { name: "X (Twitter)", href: "#", key: "x" },
      { name: "YouTube", href: "#", key: "youtube" },
      { name: "GitHub", href: "https://github.com/navin-kumar", key: "github" },
    ],
  },
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Website Development", href: "/services/development/website-development" },
    { label: "Social Media Management", href: "/services/digital-marketing/social-media-marketing" },
    { label: "SEO", href: "/services/digital-marketing/seo" },
    { label: "PPC Advertising", href: "/services/digital-marketing/sem" },
    { label: "Bulk WhatsApp & SMS", href: "/services/branding-kit/bulk-sms-whatsapp" },
  ],
  resources: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Regulations", href: "/regulations" },
    { label: "Growth Journal", href: "/growth-journal" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/regulations" },
    { label: "Terms and Conditions", href: "/regulations" },
  ],
  contact: {
    address: "Theni, Tamil Nadu 625531, India",
    email: "contact@navipromotions.com",
    phone: "+91 98765 43210",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM IST",
  },
};
