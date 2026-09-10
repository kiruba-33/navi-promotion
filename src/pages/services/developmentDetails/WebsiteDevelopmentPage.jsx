import React from "react";
import {
  Globe,
  Rocket,
  Briefcase,
  Building2,
  ShoppingBag,
  Layers3,
} from "lucide-react";


import websiteData from "../../../data/services/development/websiteData";

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
  globe: Globe,
  rocket: Rocket,
  briefcase: Briefcase,
  building: Building2,
  shopping: ShoppingBag,
};

const audienceData = websiteData.audience.map((item) => ({
  ...item,
  icon: iconMap[item.icon],
}));

export default function WebsiteDevelopmentPage() {
  const audienceData = websiteData.audience.map((item) => ({
    ...item,
    icon: iconMap[item.icon],
  }));

  return (
    <main className=" overflow-hidden">
      <ServiceIntro
  icon={<Globe className="w-4 h-4" />}
  label={websiteData.intro.label}
  title={websiteData.intro.title}
  description={websiteData.intro.description}
/>

<WhatWeDeliver
  icon={<Layers3 className="w-4 h-4" />}
  items={websiteData.deliver}
/>

      <HowItIs
        steps={websiteData.steps}
      />

      <WhyItIs
        benefits={websiteData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={websiteData.solutions}
      />

      <Deliverables
        items={websiteData.deliverables}
      />

      <ServiceFAQ
        faqs={websiteData.faqs}
      />

      <ServiceCTA
        title={websiteData.cta.title}
        description={websiteData.cta.description}
      />
    </main>
  );
}