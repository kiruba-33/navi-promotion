import { digitalMarketingServices } from "../../../../data/digitalMarketingData";
import DigitalMarketingCard from "./DigitalMarketingCard";

export default function DigitalMarketingServices() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="absolute top-0 left-0 w-full flex justify-center overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <h2 className="text-[15vw] font-black tracking-tighter">
          SERVICES
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {digitalMarketingServices.map((service) => (
            <DigitalMarketingCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}