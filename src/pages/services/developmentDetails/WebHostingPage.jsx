import React from "react";
import {
  Server,
  Rocket,
  Briefcase,
  ShoppingBag,
  Building2,
  Users,
  Layers3,
} from "lucide-react";

import webHostingMaintenanceData from "../../../data/services/development/hostingData";

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

export default function WebHostingPage() {
  const audienceData = webHostingMaintenanceData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<Server className="w-4 h-4" />}
        label={webHostingMaintenanceData.intro.label}
        title={webHostingMaintenanceData.intro.title}
        description={webHostingMaintenanceData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={webHostingMaintenanceData.deliver}
      />

      <HowItIs
        steps={webHostingMaintenanceData.steps}
      />

      <WhyItIs
        benefits={webHostingMaintenanceData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={webHostingMaintenanceData.solutions}
      />

      <Deliverables
        items={webHostingMaintenanceData.deliverables}
      />

      <ServiceFAQ
        faqs={webHostingMaintenanceData.faqs}
      />

      <ServiceCTA
        title={webHostingMaintenanceData.cta.title}
        description={webHostingMaintenanceData.cta.description}
      />
    </main>
  );
}