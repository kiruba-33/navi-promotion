import {
  Target,
  Eye,
  Flag,
  Code2,
  Palette,
  GraduationCap,
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
   ABOUT CONTENT
========================================= */

export const aboutContentData = {
  badge: "Who We Are",

  title: {
    lineOne: "Driving",
    highlight: "Digital Growth",
  },

  description:
    "Navi Promotions is a full-service digital growth agency helping businesses scale through marketing, development, branding, and creative production. We combine strategy, technology, and creativity to deliver measurable business outcomes.",

  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",

  stats: [
    {
      value: "100+",
      label: "Projects Completed",
    },
    {
      value: "50+",
      label: "Happy Clients",
    },
    {
      value: "5+",
      label: "Years Experience",
    },
    {
      value: "10+",
      label: "Core Services",
    },
  ],
};

/* =========================================
   MISSION VISION GOAL
========================================= */

export const missionVisionGoalData = [
  {
    id: "01",
    title: "Mission",
    description:
      "To empower businesses with transformative digital solutions that drive sustainable growth and operational excellence.",
    icon: Target,
    color: "text-brand-orange",
  },

  {
    id: "02",
    title: "Vision",
    description:
      "To be the global benchmark for digital innovation, where creativity meets cutting-edge technology to shape the future.",
    icon: Eye,
    color: "text-brand-orange",
  },

  {
    id: "03",
    title: "Goal",
    description:
      "Deliver 100% client success rate by maintaining uncompromising quality and fostering long-term strategic partnerships.",
    icon: Flag,
    color: "text-brand-orange",
  },
];

/* =========================================
   ENTITIES
========================================= */

export const entitiesData = [
  {
    name: "Navi Tech Solutions",

    description:
      "Enterprise software development and IT consulting services for global clients.",

    icon: Code2,

    color: "from-blue-500 to-cyan-400",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },

  {
    name: "Navi Creative Studio",

    description:
      "Award-winning design, branding, and multimedia production house.",

    icon: Palette,

    color: "from-purple-500 to-pink-500",

    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },

  {
    name: "Navi Academy",

    description:
      "Empowering the next generation of digital marketers and developers through comprehensive training.",

    icon: GraduationCap,

    color: "from-brand-orange to-yellow-500",

    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
  },
];

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
      "Our primary design and engineering hub where we cultivate digital innovation and performance strategies for the global market.",

    coordinates: {
      x: "72%",
      y: "58%",
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
      "Strategic center for our international operations and enterprise client relations across the APAC region.",

    coordinates: {
      x: "78%",
      y: "68%",
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
      "Visionary leader with 10+ years in digital strategy.",

    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },

  {
    name: "Priya Sharma",

    role: "Chief Marketing Officer",

    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",

    bio:
      "Data-driven marketer specializing in brand positioning.",

    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },

  {
    name: "Rahul Desai",

    role: "Head of Development",

    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",

    bio:
      "Full-stack architect passionate about scalable applications.",

    socials: {
      linkedin: "#",
      github: "#",
    },
  },

  {
    name: "Ananya Patel",

    role: "Creative Director",

    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",

    bio:
      "Award-winning designer crafting memorable brand experiences.",

    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];