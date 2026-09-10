import React from "react";
import {
  Code2,
  Rocket,
  Briefcase,
  Building2,
  Factory,
  Users,
  Layers3,
} from "lucide-react";

import softwareDevelopmentData from "../../../data/services/development/softwareData";

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
  building: Building2,
  factory: Factory,
  users: Users,
};

export default function SoftwareDevelopmentPage() {
  const audienceData = softwareDevelopmentData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<Code2 className="w-4 h-4" />}
        label={softwareDevelopmentData.intro.label}
        title={softwareDevelopmentData.intro.title}
        description={softwareDevelopmentData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={softwareDevelopmentData.deliver}
      />

      <HowItIs
        steps={softwareDevelopmentData.steps}
      />

      <WhyItIs
        benefits={softwareDevelopmentData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={softwareDevelopmentData.solutions}
      />

      <Deliverables
        items={softwareDevelopmentData.deliverables}
      />

      <ServiceFAQ
        faqs={softwareDevelopmentData.faqs}
      />

      <ServiceCTA
        title={softwareDevelopmentData.cta.title}
        description={softwareDevelopmentData.cta.description}
      />
    </main>
  );
}