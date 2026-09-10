import React from "react";
import {
  MousePointerClick,
  Layers3,
} from "lucide-react";

import ServiceIntro from "../../../components/sections/services/serviceDetails/ServiceIntro";
import WhatWeDeliver from "../../../components/sections/services/serviceDetails/WhatWeDeliver";
import HowItIs from "../../../components/sections/services/serviceDetails/HowItIs";
import WhyItIs from "../../../components/sections/services/serviceDetails/WhyItIs";
import WhoIsItFor from "../../../components/sections/services/serviceDetails/WhoIsItFor";
import FeaturedSolutions from "../../../components/sections/services/serviceDetails/FeaturedSolutions";
import Deliverables from "../../../components/sections/services/serviceDetails/Deliverables";
import ServiceFAQ from "../../../components/sections/services/serviceDetails/ServiceFAQ";
import ServiceCTA from "../../../components/sections/services/serviceDetails/ServiceCTA";

import ppcData from "../../../data/services/digitalMarketing/ppcData";

export default function PPCPage() {
  return (
    <>
      <ServiceIntro
        {...ppcData.intro}
        icon={
          <MousePointerClick className="w-4 h-4" />
        }
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        label="Solutions"
        items={ppcData.deliver}
      />

      <HowItIs
        steps={ppcData.steps}
      />

      <WhyItIs
        benefits={ppcData.benefits}
      />

      <WhoIsItFor
        audience={ppcData.audience}
      />

      <FeaturedSolutions
        solutions={ppcData.solutions}
      />

      <Deliverables
        items={ppcData.deliverables}
      />

      <ServiceFAQ
        faqs={ppcData.faqs}
      />

      <ServiceCTA
        title={ppcData.cta.title}
        description={ppcData.cta.description}
      />
    </>
  );
}