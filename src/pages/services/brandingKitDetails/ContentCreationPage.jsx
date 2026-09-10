import React from "react";
import {
  FileText,
  Rocket,
  Briefcase,
  ShoppingBag,
  Building2,
  Users,
  Layers3,
} from "lucide-react";

import contentCreationData from "../../../data/services/brandingKit/contentCreationData";

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

export default function ContentCreationPage() {
  const audienceData = contentCreationData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<FileText className="w-4 h-4" />}
        label={contentCreationData.intro.label}
        title={contentCreationData.intro.title}
        description={contentCreationData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={contentCreationData.deliver}
      />

      <HowItIs
        steps={contentCreationData.steps}
      />

      <WhyItIs
        benefits={contentCreationData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={contentCreationData.solutions}
      />

      <Deliverables
        items={contentCreationData.deliverables}
      />

      <ServiceFAQ
        faqs={contentCreationData.faqs}
      />

      <ServiceCTA
        title={contentCreationData.cta.title}
        description={contentCreationData.cta.description}
      />
    </main>
  );
}