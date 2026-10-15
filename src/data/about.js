import {
  Target,
  Eye,
  Flag,
  Code2,
  Palette,
  ShoppingBag,
} from "lucide-react";

/* =========================================
   HERO
========================================= */

export const aboutHeroData = {
  badge: "About Us",

  title: {
    lineOne: "We are",
    highlight: "Navi",
  },

  description:
    "A collective of digital pioneers, strategists, and creators bridging the gap between complex technology and human-centric design.",

  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
};

/* =========================================
   WHO WE ARE (ABOUT CONTENT)
========================================= */

export const aboutContentData = {
  badge: "Who We Are",

  title: {
    lineOne: "Building Digital Growth",
    highlight: "That Moves Businesses Forward",
  },

  description:
    "Navi Promotions is a digital marketing and technology company founded on February 21, 2021, in Theni, Tamil Nadu. We help businesses build stronger brands, create meaningful digital experiences, and use technology to achieve their business goals.",

  secondaryDescription:
    "From strategy and branding to digital marketing, web development and creative production, we bring the right capabilities together to turn ideas into practical business solutions.",

  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",

  stats: [
    {
      value: "100+",
      label: "PROJECTS COMPLETED",
    },
    {
      value: "50+",
      label: "CLIENTS SERVED",
    },
    {
      value: "5+",
      label: "YEARS OF EXPERIENCE",
    },
    {
      value: "10+",
      label: "CORE SERVICES",
    },
  ],
};

/* =========================================
   MISSION, VISION & GOAL
========================================= */

export const missionVisionGoalMeta = {
  label: "Mission, Vision & Goal",
  heading: "What Drives Us",
  supportingText:
    "The principles that shape our decisions, guide our work and define the future we are building.",
};

export const missionVisionGoalData = [
  {
    id: "01",
    category: "Mission",
    title: "Empowering Businesses Through Digital",
    description:
      "We empower businesses with effective marketing, creative solutions and technology that create meaningful growth and long-term value.",
    icon: Target,
    color: "text-brand-orange",
  },
  {
    id: "02",
    category: "Vision",
    title: "Building the Future of Digital Business",
    description:
      "To become a trusted digital growth partner for businesses by bringing together strategy, creativity and technology to solve real-world challenges.",
    icon: Eye,
    color: "text-brand-orange",
  },
  {
    id: "03",
    category: "Goal",
    title: "Create Measurable Business Impact",
    description:
      "To consistently deliver high-quality solutions that help our clients strengthen their brand, reach their customers and achieve sustainable business growth.",
    icon: Flag,
    color: "text-brand-orange",
  },
];

/* =========================================
   OUR SUB BRANDS
========================================= */

export const subBrandsData = [
  {
    name: "Kalanjiyam",
    tagline: "Retail & Community Commerce",
    description:
      "Empowering local enterprises, artisanal commerce, and regional brands with modern digital distribution and authentic marketing.",
    icon: ShoppingBag,
    color: "from-amber-500 to-orange-500",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Zentrix Studio",
    tagline: "Creative & Brand Identity",
    description:
      "Award-winning brand architecture, motion media, UI/UX aesthetics, visual design, and high-impact multimedia production.",
    icon: Palette,
    color: "from-orange-500 to-rose-500",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "FORGE",
    tagline: "Software & Technology Lab",
    description:
      "Enterprise digital product engineering, custom software solutions, scalable web architecture, and cloud infrastructure.",
    icon: Code2,
    color: "from-blue-600 to-indigo-600",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
];

/* Kept as alias for backward compatibility */
export const entitiesData = subBrandsData;

/* =========================================
   GLOBAL FOOTPRINT
========================================= */

export const locationsData = [
  {
    id: "india",
    city: "Theni",
    country: "India",
    region: "Tamil Nadu",
    type: "Headquarters",
    description:
      "Our founding engineering and strategy headquarters, driving design innovation and technical execution worldwide.",
    coordinates: {
      x: "68%",
      y: "56%",
    },
    stats: {
      clients: "80+",
      team: "40+",
    },
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    region: "South East Asia",
    type: "Global Operations",
    description:
      "International strategic operations center managing enterprise partnerships across the Asia-Pacific region.",
    coordinates: {
      x: "75%",
      y: "64%",
    },
    stats: {
      clients: "25+",
      team: "10+",
    },
  },
];

/* =========================================
   TEAM
========================================= */

export const teamData = [
  {
    name: "Navin Kumar",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    bio:
      "Visionary leader with 10+ years in digital strategy and tech innovation.",
    socials: {
      linkedin: "#",
      github: "https://github.com/navin-kumar",
    },
  },
  {
    name: "Priya Sharma",
    role: "Chief Marketing Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio:
      "Data-driven marketer specializing in brand positioning and growth strategy.",
    socials: {
      linkedin: "#",
      github: "https://github.com",
    },
  },
  {
    name: "Rahul Desai",
    role: "Head of Development",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    bio:
      "Full-stack architect passionate about scalable applications and web systems.",
    socials: {
      linkedin: "#",
      github: "https://github.com",
    },
  },
  {
    name: "Ananya Patel",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    bio:
      "Award-winning creative strategist shaping memorable brand narratives and identity.",
    socials: {
      linkedin: "#",
      github: "https://github.com",
    },
  },
];