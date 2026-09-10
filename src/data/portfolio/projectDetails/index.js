import { digitalMarketingDetails } from "./digitalMarketingDetails";
import { brandingKitDetails } from "./brandingKitDetails";

export { digitalMarketingDetails } from "./digitalMarketingDetails";
export { brandingKitDetails } from "./brandingKitDetails";

export function getProjectDetails(projectId, category) {
  if (category === "Digital Marketing") {
    return digitalMarketingDetails[projectId] || null;
  }
  if (category === "Branding Kit") {
    return brandingKitDetails[projectId] || null;
  }
  return null;
}
