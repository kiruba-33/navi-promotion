import React from "react";
import {
  BarChart3,
  Rocket,
  Briefcase,
  ShoppingBag,
  Building2,
  Users,
  Layers3,
} from "lucide-react";

import analyticsData from "../../../data/services/digitalMarketing/analyticsData";

import ServiceIntro from "../../../components/sections/services/serviceDetails/ServiceIntro";
import WhatWeDeliver from "../../../components/sections/services/serviceDetails/WhatWeDeliver";
import HowItIs from "../../../components/sections/services/serviceDetails/HowItIs";
import WhyItIs from "../../../components/sections/services/serviceDetails/WhyItIs";
import WhoIsItFor from "../../../components/sections/services/serviceDetails/WhoIsItFor";
import FeaturedSolutions from "../../../components/sections/services/serviceDetails/FeaturedSolutions";
import Deliverables from "../../../components/sections/services/serviceDetails/Deliverables";
import ServiceFAQ from "../../../components/sections/services/serviceDetails/ServiceFAQ";
import ServiceCTA from "../../../components/sections/services/serviceDetails/ServiceCTA";

const iconMap = {
  rocket: Rocket,
  briefcase: Briefcase,
  shopping: ShoppingBag,
  building: Building2,
  users: Users,
};

export default function AnalyticsPage() {
  const audienceData = analyticsData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<BarChart3 className="w-4 h-4" />}
        label={analyticsData.intro.label}
        title={analyticsData.intro.title}
        description={analyticsData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={analyticsData.deliver}
      />

      <HowItIs
        steps={analyticsData.steps}
      />

      <WhyItIs
        benefits={analyticsData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={analyticsData.solutions}
      />

      <Deliverables
        items={analyticsData.deliverables}
      />

      <ServiceFAQ
        faqs={analyticsData.faqs}
      />

      <ServiceCTA
        title={analyticsData.cta.title}
        description={analyticsData.cta.description}
      />
    </main>
  );
}