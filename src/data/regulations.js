import {
  FileText,
  Bell,
  Info,
} from "lucide-react";

export const regulationsHeroData = {
  badge: "Governance & Transparency",
  title: "Official Regulations",
  description:
    "Our central vault for all legal frameworks, operational protocols and official communications ensuring total transparency.",

  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
};

export const regulationCategories = [
  {
    id: "company",
    title: "Company Regulations",
    icon: FileText,
    description:
      "Legal frameworks and internal governance documents.",

    items: [
      {
        id: 1,
        date: "Oct 12, 2025",
        title:
          "Standard Operating Procedures (v2.4)",
        size: "1.2 MB",
        status: "Latest",
        tags: ["Internal", "Legal"],
      },

      {
        id: 2,
        date: "Sep 05, 2025",
        title:
          "Code of Conduct & Professional Ethics",
        size: "850 KB",
        status: "Required",
        tags: ["Ethics", "HR"],
      },

      {
        id: 3,
        date: "Aug 20, 2025",
        title:
          "Privacy & Data Protection Policy",
        size: "1.5 MB",
        status: "Updated",
        tags: ["Privacy", "GDPR"],
      },
    ],
  },

  {
    id: "notices",
    title: "Notices & Updates",
    icon: Bell,
    description:
      "Real-time shifts and operational announcements.",

    items: [
      {
        id: 4,
        date: "Dec 15, 2025",
        title:
          "Holiday Season Operational Hours",
        size: "420 KB",
        status: "Archive",
        tags: ["Event", "Operations"],
      },

      {
        id: 5,
        date: "Nov 01, 2025",
        title:
          "New Service Expansion Announcement",
        size: "2.1 MB",
        status: "Info",
        tags: ["Market", "Growth"],
      },

      {
        id: 6,
        date: "Oct 28, 2025",
        title:
          "Quarterly Performance Review Schedule",
        size: "310 KB",
        status: "Archive",
        tags: ["Corporate", "Reviews"],
      },
    ],
  },

  {
    id: "circulars",
    title: "Circulars",
    icon: Info,
    description:
      "General communications for the entire ecosystem.",

    items: [
      {
        id: 7,
        date: "Jan 02, 2026",
        title:
          "Staff Development Program 2026",
        size: "1.1 MB",
        status: "New",
        tags: ["HR", "Education"],
      },

      {
        id: 8,
        date: "Dec 10, 2025",
        title:
          "Office Safety & Security Protocols",
        size: "900 KB",
        status: "Critical",
        tags: ["Safety", "Admin"],
      },
    ],
  },
];

export const regulationFilters = [
  {
    id: "all",
    label: "All",
  },

  {
    id: "company",
    label: "Company",
  },

  {
    id: "notices",
    label: "Notices",
  },

  {
    id: "circulars",
    label: "Circulars",
  },
];

export const regulationStats = [
  {
    value: "24h",
    label: "Support Response",
  },

  {
    value: "100%",
    label: "Transparent",
  },
];