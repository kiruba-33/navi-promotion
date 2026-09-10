import React from "react";
import {
  Megaphone,
  Rocket,
  Store,
  ShoppingBag,
  UtensilsCrossed,
  Building,
  Briefcase,
  Layers3,
} from "lucide-react";

import socialMediaMarketingData from "../../../data/services/digitalMarketing/socialMediaData";

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
  store: Store,
  shopping: ShoppingBag,
  restaurant: UtensilsCrossed,
  building: Building,
  briefcase: Briefcase,
};

export default function SocialMediaMarketingPage() {
  const audienceData = socialMediaMarketingData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<Megaphone className="w-4 h-4" />}
        label={socialMediaMarketingData.intro.label}
        title={socialMediaMarketingData.intro.title}
        description={socialMediaMarketingData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={socialMediaMarketingData.deliver}
      />

      <HowItIs
        steps={socialMediaMarketingData.steps}
      />

      <WhyItIs
        benefits={socialMediaMarketingData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={socialMediaMarketingData.solutions}
      />

      <Deliverables
        items={socialMediaMarketingData.deliverables}
      />

      <ServiceFAQ
        faqs={socialMediaMarketingData.faqs}
      />

      <ServiceCTA
        title={socialMediaMarketingData.cta.title}
        description={socialMediaMarketingData.cta.description}
      />
    </main>
  );
}