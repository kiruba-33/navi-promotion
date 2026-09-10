import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Share2,
  Camera,
  FileText,
  Users,
  Monitor,
} from "lucide-react";

export const footerData = {
  company: {
    name: "Navi Promotions",
    tagline: "Performance-Driven Digital Agency",
    description:
      "We deliver high-impact digital marketing, modern web & software engineering, and brand identity solutions that scale ambitious businesses worldwide.",
    socials: [
      { name: "Share", href: "#", icon: Share2 },
      { name: "Media", href: "#", icon: Camera },
      { name: "Insights", href: "/blog", icon: FileText },
      { name: "Team", href: "/about", icon: Users },
      { name: "Platform", href: "/", icon: Monitor },
    ],
  },
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Portfolio", href: "/portfolio" },
    { label: "Growth Journal", href: "/growth-journal" },
    { label: "Gallery", href: "/gallery" },
    { label: "Regulations", href: "/regulations" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Web & Custom Software", href: "/services/development" },
    { label: "Branding Kit", href: "/services/branding-kit" },
    { label: "SEO & Performance", href: "/services/digital-marketing/seo" },
    { label: "Mobile App Development", href: "/services/development/mobile-app-development" },
    { label: "Social Media Marketing", href: "/services/digital-marketing/social-media-marketing" },
  ],
  resources: [
    { label: "Case Studies", href: "/portfolio" },
    { label: "Blog & News", href: "/blog" },
    { label: "Growth Journal", href: "/growth-journal" },
    { label: "Open Positions", href: "/careers" },
    { label: "Privacy Policy", href: "/regulations" },
    { label: "Terms of Service", href: "/regulations" },
  ],
  contact: {
    address: "Navi Promotions Hub, Tech District",
    email: "contact@navipromotions.com",
    phone: "+91 98765 43210",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
  },
};
