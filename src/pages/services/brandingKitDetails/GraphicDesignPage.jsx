import React from "react";
import {
  PenTool,
  Rocket,
  Briefcase,
  ShoppingBag,
  Building2,
  Users,
  Layers3,
} from "lucide-react";

import graphicDesignData from "../../../data/services/brandingKit/graphicDesignData";

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

export default function GraphicDesignPage() {
  const audienceData = graphicDesignData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<PenTool className="w-4 h-4" />}
        label={graphicDesignData.intro.label}
        title={graphicDesignData.intro.title}
        description={graphicDesignData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={graphicDesignData.deliver}
      />

      <HowItIs
        steps={graphicDesignData.steps}
      />

      <WhyItIs
        benefits={graphicDesignData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={graphicDesignData.solutions}
      />

      <Deliverables
        items={graphicDesignData.deliverables}
      />

      <ServiceFAQ
        faqs={graphicDesignData.faqs}
      />

      <ServiceCTA
        title={graphicDesignData.cta.title}
        description={graphicDesignData.cta.description}
      />
    </main>
  );
}