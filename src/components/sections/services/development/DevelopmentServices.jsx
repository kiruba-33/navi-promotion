import { developmentServices } from "../../../../data/developmentData";
import DevelopmentCard from "./DevelopmentCard";

export default function DevelopmentServices() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developmentServices.map((service) => (
            <DevelopmentCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}