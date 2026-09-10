import React from "react";
import {
  Layers3,
  Search,
  Rocket,
  Briefcase,
  ShoppingBag,
  Building2,
} from "lucide-react";

import ServiceIntro from "../../../components/sections/services/serviceDetails/ServiceIntro";
import WhatWeDeliver from "../../../components/sections/services/serviceDetails/WhatWeDeliver";
import HowItWorks from "../../../components/sections/services/serviceDetails/HowItIs";
import WhyItMatters from "../../../components/sections/services/serviceDetails/WhyItIs";
import WhoWeHelp from "../../../components/sections/services/serviceDetails/WhoIsItFor";
import FeaturedSolutions from "../../../components/sections/services/serviceDetails/FeaturedSolutions";
import Deliverables from "../../../components/sections/services/serviceDetails/Deliverables";
import ServiceFAQ from "../../../components/sections/services/serviceDetails/ServiceFAQ";
import ServiceCTA from "../../../components/sections/services/serviceDetails/ServiceCTA";

import seoData from "../../../data/services/digitalMarketing/seoData";

const iconMap = {
  rocket: Rocket,
  briefcase: Briefcase,
  shopping: ShoppingBag,
  building: Building2,
};

export default function SEOPage() {
  const audienceData = seoData.audience.map((item) => ({
    ...item,
    icon: iconMap[item.icon],
  }));

  return (
    <>
      <ServiceIntro
        {...seoData.intro}
        icon={<Search className="w-4 h-4" />}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        label="Solutions"
        items={seoData.deliver}
      />

      <HowItWorks
        steps={seoData.steps}
      />

      <WhyItMatters
        benefits={seoData.benefits}
      />

      <WhoWeHelp
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={seoData.solutions}
      />

      <Deliverables
        items={seoData.deliverables}
      />

      <ServiceFAQ
        faqs={seoData.faqs}
      />

      <ServiceCTA
        title={seoData.cta.title}
        description={seoData.cta.description}
      />
    </>
  );
}