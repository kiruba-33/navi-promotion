import {
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  Target,
  TrendingUp,
  Database,
  Search,
  Rocket,
  Briefcase,
  ShoppingBag,
  Building2,
  Users,
  Globe,
  Monitor,
  DollarSign,
} from "lucide-react";

const analyticsData = {
  intro: {
    label: "Digital Marketing Service",
    title: "Digital Analytics & Reporting",
    description:
      "Transform data into actionable insights through advanced analytics, conversion tracking, and performance reporting that help you make smarter business and marketing decisions.",
  },

  deliver: [
    {
      title: "Analytics Setup",
      description:
        "Implement reliable tracking systems across your digital channels.",
      details:
        "Ensure accurate data collection for websites, campaigns, and user interactions.",
    },

    {
      title: "Conversion Tracking",
      description:
        "Measure the actions that matter most to your business.",
      details:
        "Track leads, purchases, form submissions, calls, and other key conversions.",
    },

    {
      title: "Custom Dashboards",
      description:
        "Visualize important business metrics in one place.",
      details:
        "Access clear dashboards that simplify performance monitoring and reporting.",
    },

    {
      title: "Campaign Analytics",
      description:
        "Evaluate marketing performance across channels.",
      details:
        "Understand which campaigns generate the best results and ROI.",
    },

    {
      title: "Customer Journey Analysis",
      description:
        "Gain insights into how users interact with your business.",
      details:
        "Identify opportunities to improve engagement and conversions.",
    },

    {
      title: "Performance Reporting",
      description:
        "Receive actionable reports with strategic recommendations.",
      details:
        "Turn raw data into meaningful business insights and growth opportunities.",
    },
  ],

  steps: [
    {
      title: "Data Assessment",
      description:
        "Review existing analytics systems, tracking setup, and business goals.",
    },

    {
      title: "Tracking Implementation",
      description:
        "Configure analytics tools, events, conversions, and reporting frameworks.",
    },

    {
      title: "Data Collection",
      description:
        "Capture meaningful user, website, and campaign performance data.",
    },

    {
      title: "Analysis & Insights",
      description:
        "Identify trends, opportunities, and performance bottlenecks.",
    },

    {
      title: "Reporting",
      description:
        "Deliver clear reports with actionable business recommendations.",
    },

    {
      title: "Optimization",
      description:
        "Continuously refine marketing and business strategies using data insights.",
    },
  ],

  benefits: [
    {
      title: "Make Smarter Decisions",
      description:
        "Use accurate data to guide marketing, sales, and business strategies.",
    },

    {
      title: "Improve Marketing ROI",
      description:
        "Identify high-performing channels and optimize budget allocation.",
    },

    {
      title: "Track Business Growth",
      description:
        "Monitor performance trends and measure progress against goals.",
    },

    {
      title: "Understand Customer Behavior",
      description:
        "Learn how users interact with your website and marketing campaigns.",
    },

    {
      title: "Increase Conversions",
      description:
        "Identify opportunities to improve customer journeys and conversion rates.",
    },

    {
      title: "Gain Competitive Advantage",
      description:
        "Leverage insights to make faster and more informed business decisions.",
    },
  ],

  audience: [
    {
      icon: Rocket,
      title: "Startups",
      description:
        "Measure growth, validate strategies, and make data-driven decisions.",
    },

    {
      icon: Briefcase,
      title: "Small Businesses",
      description:
        "Track marketing effectiveness and improve business performance.",
    },

    {
      icon: ShoppingBag,
      title: "E-Commerce Brands",
      description:
        "Monitor sales funnels, customer journeys, and purchase behavior.",
    },

    {
      icon: Building2,
      title: "Corporate Organizations",
      description:
        "Manage large-scale reporting and performance monitoring across departments.",
    },

    {
      icon: Users,
      title: "Marketing Teams",
      description:
        "Evaluate campaign performance and uncover growth opportunities.",
    },
  ],

  solutions: [
    {
      title: "Website Analytics",
      description:
        "Track website traffic, engagement, and user behavior to improve performance.",

      tags: [
        "Traffic Analysis",
        "User Behavior",
        "Performance Tracking",
      ],

      tagIcons: [
        Globe,
        Activity,
        BarChart3,
      ],
    },

    {
      title: "Conversion Tracking",
      description:
        "Measure leads, purchases, and critical business actions accurately.",

      tags: [
        "Conversions",
        "Goal Tracking",
        "Optimization",
      ],

      tagIcons: [
        Target,
        TrendingUp,
        DollarSign,
      ],
    },

    {
      title: "Custom Dashboards",
      description:
        "Centralize key metrics into easy-to-understand reporting dashboards.",

      tags: [
        "Reporting",
        "Visualization",
        "Insights",
      ],

      tagIcons: [
        PieChart,
        Monitor,
        Database,
      ],
    },

    {
      title: "Marketing Performance Analytics",
      description:
        "Analyze campaign effectiveness across digital marketing channels.",

      tags: [
        "Campaign Data",
        "ROI Tracking",
        "Growth Insights",
      ],

      tagIcons: [
        Search,
        DollarSign,
        TrendingUp,
      ],
    },

    {
      title: "Customer Journey Analysis",
      description:
        "Understand user interactions and optimize customer experiences.",

      tags: [
        "Customer Insights",
        "Journey Mapping",
        "Engagement",
      ],

      tagIcons: [
        Users,
        Activity,
        Target,
      ],
    },

    {
      title: "Business Intelligence Reporting",
      description:
        "Convert complex data into strategic recommendations for business growth.",

      tags: [
        "Data Intelligence",
        "Strategic Insights",
        "Decision Making",
      ],

      tagIcons: [
        Database,
        LineChart,
        TrendingUp,
      ],
    },
  ],

  deliverables: [
    "Analytics Audit",
    "Google Analytics Setup",
    "Conversion Tracking Setup",
    "Event Tracking Configuration",
    "Custom Dashboards",
    "Campaign Performance Reports",
    "Customer Journey Analysis",
    "Traffic Reports",
    "ROI Tracking",
    "Monthly Analytics Reports",
    "Business Insights",
    "Growth Recommendations",
  ],

  faqs: [
    {
      question: "What analytics platforms do you work with?",
      answer:
        "We work with Google Analytics, Google Tag Manager, Looker Studio, Search Console, and other analytics platforms based on business requirements.",
    },

    {
      question: "Why is conversion tracking important?",
      answer:
        "Conversion tracking helps identify which marketing activities generate valuable business outcomes such as leads, sales, and inquiries.",
    },

    {
      question: "Can you integrate analytics with my website?",
      answer:
        "Yes. We configure analytics tracking across websites, landing pages, e-commerce stores, and digital campaigns.",
    },

    {
      question: "How often will I receive reports?",
      answer:
        "Reporting frequency can be customized, but most clients receive detailed monthly performance reports.",
    },

    {
      question: "Do you provide custom dashboards?",
      answer:
        "Yes. We build customized dashboards that display the metrics most relevant to your business goals.",
    },

    {
      question: "How does analytics improve marketing performance?",
      answer:
        "Analytics reveals what is working, what is underperforming, and where optimization opportunities exist to improve results.",
    },
  ],

  cta: {
    title: "Ready To Turn Data Into Growth?",
    description:
      "Let's build a powerful analytics and reporting system that delivers actionable insights, smarter decisions, and measurable business growth.",
  },
};

export default analyticsData;