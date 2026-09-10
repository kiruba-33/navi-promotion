import React from "react";
import {
  Smartphone,
  Rocket,
  Briefcase,
  ShoppingBag,
  Building2,
  Users,
  Layers3,
} from "lucide-react";

import mobileAppDevelopmentData from "../../../data/services/development/mobileAppData";

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

export default function MobileAppDevelopmentPage() {
  const audienceData = mobileAppDevelopmentData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<Smartphone className="w-4 h-4" />}
        label={mobileAppDevelopmentData.intro.label}
        title={mobileAppDevelopmentData.intro.title}
        description={mobileAppDevelopmentData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={mobileAppDevelopmentData.deliver}
      />

      <HowItIs
        steps={mobileAppDevelopmentData.steps}
      />

      <WhyItIs
        benefits={mobileAppDevelopmentData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={mobileAppDevelopmentData.solutions}
      />

      <Deliverables
        items={mobileAppDevelopmentData.deliverables}
      />

      <ServiceFAQ
        faqs={mobileAppDevelopmentData.faqs}
      />

      <ServiceCTA
        title={mobileAppDevelopmentData.cta.title}
        description={mobileAppDevelopmentData.cta.description}
      />
    </main>
  );
}