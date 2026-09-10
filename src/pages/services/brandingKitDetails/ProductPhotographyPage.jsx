import React from "react";
import {
  Camera,
  Rocket,
  Store,
  Factory,
  ShoppingBag,
  Building2,
  Users,
  Layers3,
} from "lucide-react";

import productPhotographyData from "../../../data/services/brandingKit/ photographyData";

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
  factory: Factory,
  shopping: ShoppingBag,
  building: Building2,
  users: Users,
};

export default function ProductPhotographyPage() {
  const audienceData = productPhotographyData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<Camera className="w-4 h-4" />}
        label={productPhotographyData.intro.label}
        title={productPhotographyData.intro.title}
        description={productPhotographyData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={productPhotographyData.deliver}
      />

      <HowItIs
        steps={productPhotographyData.steps}
      />

      <WhyItIs
        benefits={productPhotographyData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={productPhotographyData.solutions}
      />

      <Deliverables
        items={productPhotographyData.deliverables}
      />

      <ServiceFAQ
        faqs={productPhotographyData.faqs}
      />

      <ServiceCTA
        title={productPhotographyData.cta.title}
        description={productPhotographyData.cta.description}
      />
    </main>
  );
}