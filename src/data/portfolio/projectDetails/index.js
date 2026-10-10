import { digitalMarketingDetails } from "./digitalMarketingDetails";
import { brandingKitDetails } from "./brandingKitDetails";
import { developmentDetails } from "./developmentDetails";

export { digitalMarketingDetails } from "./digitalMarketingDetails";
export { brandingKitDetails } from "./brandingKitDetails";
export { developmentDetails } from "./developmentDetails";

export function getProjectDetails(projectId, category) {
  if (category === "Digital Marketing") {
    return digitalMarketingDetails[projectId] || null;
  }
  if (category === "Branding Kit") {
    return brandingKitDetails[projectId] || null;
  }
  if (category === "Development") {
    return developmentDetails[projectId] || null;
  }
  return null;
}
