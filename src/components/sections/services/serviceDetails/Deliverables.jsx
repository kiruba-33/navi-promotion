import React from "react";
import {
  PackageCheck,
  MonitorSmartphone,
  Search,
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  Settings,
  LayoutDashboard,
} from "lucide-react";

const iconMap = {
  "Responsive Design": MonitorSmartphone,
  "SEO-Friendly Structure": Search,
  "Performance Optimization": Zap,
  "CMS Integration": Settings,
  "Analytics Setup": BarChart3,
  "Security Enhancements": ShieldCheck,
  "Cross-Browser Support": Globe,
  "Maintenance Ready": LayoutDashboard,
};

export default function Deliverables({
  items = [],
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-orange-50
              border
              border-orange-100
            "
          >
            <PackageCheck className="w-4 h-4 text-orange-500" />

            <span
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-orange-500
              "
            >
              Deliverables
            </span>
          </div>

          <h2
            className="
              heading-display
              text-4xl
              sm:text-5xl
              lg:text-6xl
              heading-primary
              mt-6
            "
          >
            Everything Included
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
              leading-relaxed
              max-w-2xl
            "
          >
            Everything delivered as part of your
            complete service package.
          </p>
        </div>

        {/* Deliverables List */}

        <div
          className="
            grid
            md:grid-cols-2
            gap-x-16
            gap-y-8
          "
        >
          {items.map((item, index) => {
            const Icon = iconMap[item] || PackageCheck;

            return (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                  pb-6
                  border-b
                  border-slate-200
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-xl
                    bg-orange-50
                    shrink-0
                  "
                >
                  <Icon
                    className="
                      w-5
                      h-5
                      text-orange-500
                    "
                  />
                </div>

                <h3
                  className="
                    text-lg
                    font-semibold
                    heading-primary
                  "
                >
                  {item}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}