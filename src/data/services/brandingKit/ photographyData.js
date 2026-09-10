import {
  Camera,
  Image,
  ShoppingBag,
  Sparkles,
  Eye,
  ScanSearch,
  Crop,
  Wand2,
  Rocket,
  Briefcase,
  Store,
  Factory,
  Users,
  Building2,
  TrendingUp,
  Monitor,
  Palette,
  BadgeCheck,
  Globe,
} from "lucide-react";

const productPhotographyData = {
  intro: {
    label: "Creative Service",
    title: "Product Photography",
    description:
      "Showcase your products with professional photography that captures attention, builds trust, and increases conversions across e-commerce, marketing, advertising, and social media platforms.",
  },

  deliver: [
    {
      title: "E-Commerce Product Photography",
      description:
        "Create high-quality product images optimized for online stores.",
      details:
        "Present products professionally to improve customer confidence and purchasing decisions.",
    },

    {
      title: "Lifestyle Product Photography",
      description:
        "Showcase products in real-world environments and use cases.",
      details:
        "Create engaging visuals that help customers connect with your brand.",
    },

    {
      title: "Catalog Photography",
      description:
        "Produce consistent product imagery for catalogs and marketplaces.",
      details:
        "Maintain visual consistency across large product collections.",
    },

    {
      title: "Commercial Product Shoots",
      description:
        "Develop creative visuals for advertising and promotional campaigns.",
      details:
        "Highlight product value through impactful visual storytelling.",
    },

    {
      title: "Product Retouching",
      description:
        "Enhance images through professional editing and refinement.",
      details:
        "Ensure every image meets high-quality commercial standards.",
    },

    {
      title: "Marketplace Optimization",
      description:
        "Prepare product images for Amazon, Flipkart, Shopify, and more.",
      details:
        "Optimize visuals to meet marketplace requirements and improve performance.",
    },
  ],

  steps: [
    {
      title: "Planning & Preparation",
      description:
        "Understand product requirements, objectives, and visual direction.",
    },

    {
      title: "Product Setup",
      description:
        "Prepare products, props, and shooting environments.",
    },

    {
      title: "Photography Session",
      description:
        "Capture high-quality images using professional equipment and techniques.",
    },

    {
      title: "Image Selection",
      description:
        "Review and select the best images for editing and delivery.",
    },

    {
      title: "Retouching & Enhancement",
      description:
        "Apply color correction, cleanup, and professional refinements.",
    },

    {
      title: "Final Delivery",
      description:
        "Provide optimized files for web, marketing, and print usage.",
    },
  ],

  benefits: [
    {
      title: "Increase Product Appeal",
      description:
        "Present products professionally to attract more customer attention.",
    },

    {
      title: "Boost Online Sales",
      description:
        "Improve conversion rates with high-quality product imagery.",
    },

    {
      title: "Build Brand Trust",
      description:
        "Create credibility through polished and professional visuals.",
    },

    {
      title: "Strengthen Marketing Campaigns",
      description:
        "Support advertising and promotional efforts with impactful content.",
    },

    {
      title: "Improve Marketplace Performance",
      description:
        "Optimize product listings with marketplace-ready imagery.",
    },

    {
      title: "Enhance Brand Perception",
      description:
        "Position products as premium and desirable through quality photography.",
    },
  ],

  audience: [
    {
      icon: ShoppingBag,
      title: "E-Commerce Brands",
      description:
        "Improve product presentation and increase online sales.",
    },

    {
      icon: Store,
      title: "Retail Businesses",
      description:
        "Create attractive visuals for catalogs and promotional campaigns.",
    },

    {
      icon: Factory,
      title: "Manufacturers",
      description:
        "Showcase product quality and specifications professionally.",
    },

    {
      icon: Rocket,
      title: "Startups",
      description:
        "Launch products with impactful visual branding and marketing assets.",
    },

    {
      icon: Users,
      title: "Marketing Teams",
      description:
        "Access professional visuals for campaigns and content creation.",
    },

    {
      icon: Building2,
      title: "Corporate Brands",
      description:
        "Maintain consistent visual standards across product portfolios.",
    },
  ],

  solutions: [
    {
      title: "E-Commerce Photography",
      description:
        "Create conversion-focused product images optimized for online stores.",

      tags: [
        "Online Stores",
        "Product Listings",
        "Sales Growth",
      ],

      tagIcons: [
        ShoppingBag,
        Monitor,
        TrendingUp,
      ],
    },

    {
      title: "Lifestyle Product Shoots",
      description:
        "Showcase products in real-life scenarios to increase engagement.",

      tags: [
        "Lifestyle",
        "Brand Storytelling",
        "Engagement",
      ],

      tagIcons: [
        Sparkles,
        Eye,
        Users,
      ],
    },

    {
      title: "Commercial Photography",
      description:
        "Develop premium visuals for advertising and marketing campaigns.",

      tags: [
        "Advertising",
        "Campaign Assets",
        "Brand Promotion",
      ],

      tagIcons: [
        Camera,
        BadgeCheck,
        Globe,
      ],
    },

    {
      title: "Catalog Photography",
      description:
        "Maintain consistent product imagery across large inventories.",

      tags: [
        "Catalogs",
        "Consistency",
        "Professional Display",
      ],

      tagIcons: [
        Image,
        Crop,
        Palette,
      ],
    },

    {
      title: "Image Retouching & Editing",
      description:
        "Enhance product images through professional post-production.",

      tags: [
        "Retouching",
        "Color Correction",
        "Optimization",
      ],

      tagIcons: [
        Wand2,
        Palette,
        ScanSearch,
      ],
    },

    {
      title: "Marketplace Optimization",
      description:
        "Prepare images for e-commerce marketplaces and digital platforms.",

      tags: [
        "Amazon Ready",
        "Marketplace Standards",
        "Product Visibility",
      ],

      tagIcons: [
        ShoppingBag,
        Globe,
        TrendingUp,
      ],
    },
  ],

  deliverables: [
    "Product Shoot Planning",
    "Studio Photography",
    "Lifestyle Photography",
    "Catalog Photography",
    "Commercial Product Shoots",
    "Image Retouching",
    "Background Removal",
    "Color Correction",
    "Web Optimized Images",
    "Marketplace Ready Images",
    "High Resolution Files",
    "Final Asset Delivery",
  ],

  faqs: [
    {
      question: "What products can you photograph?",
      answer:
        "We photograph consumer products, electronics, fashion items, accessories, industrial products, food products, and more.",
    },

    {
      question: "Do you provide editing and retouching?",
      answer:
        "Yes. All selected images undergo professional editing, retouching, and quality enhancement.",
    },

    {
      question: "Can images be optimized for e-commerce platforms?",
      answer:
        "Absolutely. We prepare images according to marketplace and online store requirements.",
    },

    {
      question: "Do you provide lifestyle product photography?",
      answer:
        "Yes. We create lifestyle-focused imagery that showcases products in real-world scenarios.",
    },

    {
      question: "How many edited images are included?",
      answer:
        "The number depends on project scope, product quantity, and agreed deliverables.",
    },

    {
      question: "Can you shoot products at our location?",
      answer:
        "Yes. We can conduct photography sessions at your location or in controlled studio environments.",
    },
  ],

  cta: {
    title: "Ready To Showcase Your Products With Stunning Photography?",
    description:
      "Let's create professional product visuals that strengthen your brand, increase customer trust, and drive more sales.",
  },
};

export default productPhotographyData;