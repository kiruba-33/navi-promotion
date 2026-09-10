import { digitalMarketingData, digitalMarketingItems } from "./digitalMarketingData";
import { developmentData, developmentItems } from "./developmentData";
import { brandingKitData, brandingKitItems } from "./brandingKitData";

export { digitalMarketingData, digitalMarketingItems } from "./digitalMarketingData";
export { developmentData, developmentItems } from "./developmentData";
export { brandingKitData, brandingKitItems } from "./brandingKitData";
export * from "./portfolioCategories";
export * from "./projectDetails";

const dmList = digitalMarketingData || digitalMarketingItems;
const devList = developmentData || developmentItems;
const brandList = brandingKitData || brandingKitItems;

export const portfolioItems = [
  ...dmList,
  ...devList,
  ...brandList,
];
