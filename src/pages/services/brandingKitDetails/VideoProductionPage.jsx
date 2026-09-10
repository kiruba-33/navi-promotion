import React from "react";
import {
  Video,
  Rocket,
  Briefcase,
  ShoppingBag,
  Building2,
  Users,
  Layers3,
} from "lucide-react";

import videoProductionData from "../../../data/services/brandingKit/videoProductionData";

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

export default function VideoProductionPage() {
  const audienceData = videoProductionData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<Video className="w-4 h-4" />}
        label={videoProductionData.intro.label}
        title={videoProductionData.intro.title}
        description={videoProductionData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={videoProductionData.deliver}
      />

      <HowItIs
        steps={videoProductionData.steps}
      />

      <WhyItIs
        benefits={videoProductionData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={videoProductionData.solutions}
      />

      <Deliverables
        items={videoProductionData.deliverables}
      />

      <ServiceFAQ
        faqs={videoProductionData.faqs}
      />

      <ServiceCTA
        title={videoProductionData.cta.title}
        description={videoProductionData.cta.description}
      />
    </main>
  );
}