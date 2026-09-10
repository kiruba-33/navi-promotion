import React from "react";
import {
  Users,
  Rocket,
  Briefcase,
  ShoppingBag,
  Building2,
  Layers3,
} from "lucide-react";

import influencerMarketingData from "../../../data/services/brandingKit/influencerData";

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
};

export default function InfluencerMarketingPage() {
  const audienceData = influencerMarketingData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<Users className="w-4 h-4" />}
        label={influencerMarketingData.intro.label}
        title={influencerMarketingData.intro.title}
        description={influencerMarketingData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={influencerMarketingData.deliver}
      />

      <HowItIs
        steps={influencerMarketingData.steps}
      />

      <WhyItIs
        benefits={influencerMarketingData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={influencerMarketingData.solutions}
      />

      <Deliverables
        items={influencerMarketingData.deliverables}
      />

      <ServiceFAQ
        faqs={influencerMarketingData.faqs}
      />

      <ServiceCTA
        title={influencerMarketingData.cta.title}
        description={influencerMarketingData.cta.description}
      />
    </main>
  );
}