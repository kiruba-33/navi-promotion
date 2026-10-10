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
        summary:
          "Comprehensive operational protocols governing project intake, development lifecycles, quality assurance gates, deployment sign-offs, and client communication workflows across all Navi Promotions divisions.",
        sections: [
          {
            heading: "Purpose & Scope of Application",
            content:
              "This document outlines standard operating procedures applicable to all digital marketing, web engineering, branding kits, and enterprise client engagements conducted by Navi Promotions. Compliance with these workflows is mandatory across all technical and creative teams.",
          },
          {
            heading: "Project Initiation & Architecture Review",
            content:
              "Every new engagement undergoes a formal project kickoff, technical requirements verification, repository configuration, design-token alignment, and security assessment before development commences.",
          },
          {
            heading: "Quality Assurance & Code Standards",
            content:
              "All code deliverables must satisfy WCAG 2.1 AA accessibility guidelines, achieve performance benchmarks on Google PageSpeed (90+), maintain cross-browser visual consistency, and undergo peer code review prior to merge.",
          },
          {
            heading: "Production Deployment & Acceptance",
            content:
              "Deployments require formal sign-off from the technical lead, verification in the staging environment, client acceptance validation, and post-deployment telemetry monitoring for 48 hours.",
          },
        ],
      },

      {
        id: 2,
        date: "Sep 05, 2025",
        title:
          "Code of Conduct & Professional Ethics",
        size: "850 KB",
        status: "Required",
        tags: ["Ethics", "HR"],
        summary:
          "Foundational ethical framework, workplace integrity benchmarks, non-disclosure expectations, and behavioral standards for all team members, collaborators, and strategic partners.",
        sections: [
          {
            heading: "Core Organizational Principles",
            content:
              "Navi Promotions fosters a culture grounded in integrity, technical excellence, mutual respect, and client-first commitment. Team members must uphold honesty and professional conduct in all internal and external engagements.",
          },
          {
            heading: "Confidentiality & Trade Secrets",
            content:
              "All proprietary methodologies, source repositories, client credentials, strategy decks, and business intelligence are strictly confidential and protected under non-disclosure obligations.",
          },
          {
            heading: "Equal Opportunity & Safe Workplace",
            content:
              "We maintain a safe, inclusive workplace free from harassment, discrimination, or bias. Equal growth opportunities and transparent grievance channels are provided for every team member.",
          },
        ],
      },

      {
        id: 3,
        date: "Aug 20, 2025",
        title:
          "Privacy & Data Protection Policy",
        size: "1.5 MB",
        status: "Updated",
        tags: ["Privacy", "GDPR"],
        summary:
          "Corporate data governance and privacy policy detailing user privacy rights, encryption benchmarks, third-party processor safeguards, and regulatory compliance protocols.",
        sections: [
          {
            heading: "Data Collection & Lawful Processing",
            content:
              "Data is collected exclusively for legitimate business purposes, contract fulfillment, and authorized analytics. Explicit user consent and transparent disclosure are strictly maintained.",
          },
          {
            heading: "Storage, Security & Encryption",
            content:
              "All collected client data and system credentials are encrypted using industry-standard protocols both in transit (TLS 1.3) and at rest (AES-256), with least-privilege role-based access.",
          },
          {
            heading: "Data Subject Rights & Breach Response",
            content:
              "Individuals retain the right to access, rectify, or request deletion of personal information. In the event of a verified security incident, stakeholders will be notified within 72 hours.",
          },
        ],
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
        summary:
          "Official schedule announcement for corporate holiday hours, emergency engineering coverage, shift rotations, and international client SLA availability.",
        sections: [
          {
            heading: "Office Operational Schedule",
            content:
              "Headquarters in Theni and strategic branches will operate on revised schedules during the declared holiday period. Routine consultations will resume following the festive recess.",
          },
          {
            heading: "24/7 Critical Infrastructure On-Call",
            content:
              "Dedicated DevOps and infrastructure reliability engineers will remain active on an on-call rotation to guarantee 99.9% uptime for client web servers and applications.",
          },
        ],
      },

      {
        id: 5,
        date: "Nov 01, 2025",
        title:
          "New Service Expansion Announcement",
        size: "2.1 MB",
        status: "Info",
        tags: ["Market", "Growth"],
        summary:
          "Strategic expansion notice introducing enhanced enterprise service capabilities across AI performance marketing, headless ecommerce, and dedicated CRM architecture.",
        sections: [
          {
            heading: "Expanded Core Capabilities",
            content:
              "Navi Promotions is rolling out integrated solutions in high-velocity performance marketing, custom enterprise software, and scalable multi-channel brand positioning.",
          },
          {
            heading: "Client Onboarding & Resource Scaling",
            content:
              "Existing enterprise partners will gain direct access to our expanded technical talent pool, automated reporting suites, and specialized growth sprint frameworks.",
          },
        ],
      },

      {
        id: 6,
        date: "Oct 28, 2025",
        title:
          "Quarterly Performance Review Schedule",
        size: "310 KB",
        status: "Archive",
        tags: ["Corporate", "Reviews"],
        summary:
          "Procedural notice outlining timeline, milestones, self-assessment criteria, and one-on-one leadership reviews for the upcoming quarterly cycle.",
        sections: [
          {
            heading: "Review Milestones & Submission Deadlines",
            content:
              "Team members are requested to complete self-appraisals and project achievement summaries via the internal portal before the announced deadline.",
          },
          {
            heading: "Evaluation Dimensions",
            content:
              "Evaluations assess technical quality, speed of execution, collaborative contributions, client positive outcomes, and continuous professional development.",
          },
        ],
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
        summary:
          "Annual educational development initiative providing learning stipends, professional certification coverage, and hands-on masterclasses for Navi Promotions personnel.",
        sections: [
          {
            heading: "Skill Upskilling & Certification Stipend",
            content:
              "Every team member is eligible for annual sponsorship for technical certifications, UX design coursework, and advanced digital marketing credentials.",
          },
          {
            heading: "Internal Knowledge Sharing & Hackathons",
            content:
              "Bi-weekly technical demos, case-study debriefs, and quarterly hackathons are established to foster rapid cross-functional learning and technical innovation.",
          },
        ],
      },

      {
        id: 8,
        date: "Dec 10, 2025",
        title:
          "Office Safety & Security Protocols",
        size: "900 KB",
        status: "Critical",
        tags: ["Safety", "Admin"],
        summary:
          "Standardized facility protocols, emergency preparedness guidelines, access security measures, and device compliance for on-site and hybrid workspaces.",
        sections: [
          {
            heading: "Premises Access & Visitor Regulations",
            content:
              "All personnel must utilize designated badge credentials at entry access points. Visitors must register at the reception desk and remain accompanied in technical areas.",
          },
          {
            heading: "Network & Physical Device Security",
            content:
              "Company workstations must remain locked when unattended. External storage drives must pass anti-malware verification prior to connection to internal networks.",
          },
        ],
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