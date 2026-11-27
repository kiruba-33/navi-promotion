import { Link } from "react-router-dom";
import {
  iconWrapperAnimation,
  iconRingAnimation,
  iconAnimation,
} from "../../../utils/iconAnimations";

export default function BrandingKitCard({
  service,
}) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/branding-kit/${service.id}`}
      className="
        group
        relative
        block
        h-[420px]
        md:h-[460px]
        rounded-2xl
        overflow-hidden
        border
        border-slate-200/80
        shadow-md
        hover:shadow-xl
        transition-shadow
        duration-300
      ">
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-[1.03]
        "
      />



      {/* Default Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#102A56]/90
          via-[#102A56]/70
          to-[#102A56]/35
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#102A56]/80
          via-transparent
          to-[#102A56]/20
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-0
          p-6
          md:p-8
          flex
          flex-col
          justify-end
        "
      >
        {/* Icon */}
       <div className={iconWrapperAnimation}>
  <span className={iconRingAnimation} />

  <Icon className={iconAnimation} />
</div>

        {/* Fixed Content Area */}
        <div className="min-h-[160px]">
          <h3
            className="
              heading-card

              text-[22px]
              md:text-[26px]
              font-semibold
              leading-[1.2]

              text-white

              mb-3
            "
          >
            {service.title}
          </h3>

          {/* Description & Tags - Permanently Visible */}
          <div className="opacity-100 translate-y-0 transition-none">
            <p
              className="
                text-sm
                md:text-[15px]

                text-[#F1F5F9]/90

                leading-[1.6]

                mb-4
              "
            >
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="
                    px-3
                    py-1

                    text-xs
                    font-medium

                    rounded-lg

                    bg-white/95
                    text-[#102A56]
                  "
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}