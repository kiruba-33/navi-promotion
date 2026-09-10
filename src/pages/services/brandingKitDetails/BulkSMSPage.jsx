import React from "react";
import {
  MessageSquare,
  Rocket,
  Briefcase,
  ShoppingBag,
  Store,
  Building2,
  Users,
  Layers3,
} from "lucide-react";

import bulkSmsWhatsappMarketingData from "../../../data/services/brandingKit/bulkSMSData";

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
  store: Store,
  building: Building2,
  users: Users,
};

export default function BulkSMSPage() {
  const audienceData = bulkSmsWhatsappMarketingData.audience.map((item) => ({
    ...item,
    icon:
      typeof item.icon === "string"
        ? iconMap[item.icon]
        : item.icon,
  }));

  return (
    <main className="overflow-hidden">
      <ServiceIntro
        icon={<MessageSquare className="w-4 h-4" />}
        label={bulkSmsWhatsappMarketingData.intro.label}
        title={bulkSmsWhatsappMarketingData.intro.title}
        description={bulkSmsWhatsappMarketingData.intro.description}
      />

      <WhatWeDeliver
        icon={<Layers3 className="w-4 h-4" />}
        items={bulkSmsWhatsappMarketingData.deliver}
      />

      <HowItIs
        steps={bulkSmsWhatsappMarketingData.steps}
      />

      <WhyItIs
        benefits={bulkSmsWhatsappMarketingData.benefits}
      />

      <WhoIsItFor
        audience={audienceData}
      />

      <FeaturedSolutions
        solutions={bulkSmsWhatsappMarketingData.solutions}
      />

      <Deliverables
        items={bulkSmsWhatsappMarketingData.deliverables}
      />

      <ServiceFAQ
        faqs={bulkSmsWhatsappMarketingData.faqs}
      />

      <ServiceCTA
        title={bulkSmsWhatsappMarketingData.cta.title}
        description={bulkSmsWhatsappMarketingData.cta.description}
      />
    </main>
  );
}