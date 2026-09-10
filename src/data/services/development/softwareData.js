import {
  Code2,
  Database,
  Workflow,
  Cloud,
  Cpu,
  Shield,
  Rocket,
  Briefcase,
  Building2,
  Factory,
  Settings,
  Layers,
  Server,
  GitBranch,
  TrendingUp,
  Users,
  Network,
  Wrench,
} from "lucide-react";

const softwareDevelopmentData = {
  intro: {
    label: "Development Service",
    title: "Software Design & Development",
    description:
      "Build powerful, scalable, and secure software solutions tailored to your business needs. From custom applications to enterprise-grade platforms, we develop software that improves efficiency, automation, and growth.",
  },

  deliver: [
    {
      title: "Custom Software Development",
      description:
        "Develop software tailored specifically to your business requirements.",
      details:
        "Create solutions that streamline operations, improve productivity, and support long-term growth.",
    },

    {
      title: "Business Process Automation",
      description:
        "Automate repetitive workflows and manual processes.",
      details:
        "Reduce operational overhead while improving efficiency and accuracy.",
    },

    {
      title: "Enterprise Software Solutions",
      description:
        "Build scalable systems for complex business environments.",
      details:
        "Support multiple departments, users, and operational requirements.",
    },

    {
      title: "Cloud-Based Applications",
      description:
        "Access business applications securely from anywhere.",
      details:
        "Enable collaboration, scalability, and improved accessibility.",
    },

    {
      title: "System Integration",
      description:
        "Connect software platforms and business tools seamlessly.",
      details:
        "Improve data flow and eliminate disconnected workflows.",
    },

    {
      title: "Software Maintenance & Support",
      description:
        "Keep your applications secure, stable, and optimized.",
      details:
        "Ensure long-term performance through continuous improvements and updates.",
    },
  ],

  steps: [
    {
      title: "Discovery & Analysis",
      description:
        "Understand business goals, workflows, and software requirements.",
    },

    {
      title: "Planning & Architecture",
      description:
        "Design scalable system architecture and technical foundations.",
    },

    {
      title: "UI/UX Design",
      description:
        "Create intuitive user experiences and interface designs.",
    },

    {
      title: "Development",
      description:
        "Build frontend, backend, database, and application functionality.",
    },

    {
      title: "Testing & Quality Assurance",
      description:
        "Validate performance, security, and reliability before deployment.",
    },

    {
      title: "Deployment & Support",
      description:
        "Launch the software and provide ongoing maintenance and improvements.",
    },
  ],

  benefits: [
    {
      title: "Improve Operational Efficiency",
      description:
        "Automate workflows and reduce manual tasks across your business.",
    },

    {
      title: "Increase Productivity",
      description:
        "Provide teams with tools that streamline daily operations.",
    },

    {
      title: "Scale With Confidence",
      description:
        "Build software designed to grow alongside your business.",
    },

    {
      title: "Enhance Data Management",
      description:
        "Centralize information and improve accessibility across departments.",
    },

    {
      title: "Strengthen Security",
      description:
        "Protect sensitive business data through secure development practices.",
    },

    {
      title: "Gain Competitive Advantage",
      description:
        "Leverage technology to improve customer experiences and business performance.",
    },
  ],

  audience: [
    {
      icon: Rocket,
      title: "Startups",
      description:
        "Launch innovative software products and scalable business platforms.",
    },

    {
      icon: Briefcase,
      title: "Small Businesses",
      description:
        "Improve efficiency through custom software and automation.",
    },

    {
      icon: Building2,
      title: "Enterprises",
      description:
        "Develop large-scale software systems for complex business operations.",
    },

    {
      icon: Factory,
      title: "Manufacturing Companies",
      description:
        "Optimize workflows, inventory management, and production processes.",
    },

    {
      icon: Users,
      title: "Service-Based Businesses",
      description:
        "Improve client management, operations, and internal collaboration.",
    },
  ],

  solutions: [
    {
      title: "Custom Business Software",
      description:
        "Develop software solutions tailored to your unique operational requirements.",

      tags: [
        "Custom Solutions",
        "Business Automation",
        "Scalable Systems",
      ],

      tagIcons: [
        Code2,
        Workflow,
        TrendingUp,
      ],
    },

    {
      title: "CRM & ERP Solutions",
      description:
        "Centralize business operations and improve organizational efficiency.",

      tags: [
        "Customer Management",
        "Resource Planning",
        "Operational Control",
      ],

      tagIcons: [
        Users,
        Layers,
        Database,
      ],
    },

    {
      title: "Cloud-Based Applications",
      description:
        "Build secure and scalable cloud applications accessible from anywhere.",

      tags: [
        "Cloud Computing",
        "Remote Access",
        "Scalability",
      ],

      tagIcons: [
        Cloud,
        Network,
        TrendingUp,
      ],
    },

    {
      title: "Workflow Automation",
      description:
        "Automate repetitive business processes and reduce manual effort.",

      tags: [
        "Automation",
        "Efficiency",
        "Productivity",
      ],

      tagIcons: [
        Workflow,
        Settings,
        TrendingUp,
      ],
    },

    {
      title: "API & System Integrations",
      description:
        "Connect applications, databases, and third-party services seamlessly.",

      tags: [
        "API Development",
        "Data Flow",
        "Integrations",
      ],

      tagIcons: [
        GitBranch,
        Database,
        Network,
      ],
    },

    {
      title: "Software Maintenance & Support",
      description:
        "Ensure long-term software stability, security, and performance.",

      tags: [
        "Maintenance",
        "Security",
        "Support",
      ],

      tagIcons: [
        Wrench,
        Shield,
        Server,
      ],
    },
  ],

  deliverables: [
    "Business Requirement Analysis",
    "Software Architecture Planning",
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "API Development",
    "Third-Party Integrations",
    "Testing & Quality Assurance",
    "Deployment & Launch",
    "Technical Documentation",
    "Ongoing Maintenance & Support",
  ],

  faqs: [
    {
      question: "What types of software do you develop?",
      answer:
        "We develop custom business applications, enterprise software, CRM systems, ERP solutions, cloud applications, and workflow automation platforms.",
    },

    {
      question: "Can you build software tailored to my business?",
      answer:
        "Yes. Every software solution is designed around your specific business requirements, workflows, and objectives.",
    },

    {
      question: "Do you provide software maintenance?",
      answer:
        "Yes. We offer ongoing maintenance, security updates, performance improvements, and technical support.",
    },

    {
      question: "Can you integrate existing systems?",
      answer:
        "Absolutely. We can connect software platforms, databases, APIs, and third-party services.",
    },

    {
      question: "How long does software development take?",
      answer:
        "Timelines depend on project complexity, features, and business requirements. After discovery, we provide a detailed project roadmap.",
    },

    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. We continue supporting, maintaining, and improving your software after deployment.",
    },
  ],

  cta: {
    title: "Ready To Build Software That Powers Business Growth?",
    description:
      "Let's develop a custom software solution that improves efficiency, automates workflows, and helps your business scale with confidence.",
  },
};

export default softwareDevelopmentData;