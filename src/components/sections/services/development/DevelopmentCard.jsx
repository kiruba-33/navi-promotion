import { Link } from "react-router-dom";
import {
  iconWrapperAnimation,
  iconRingAnimation,
  iconAnimation,
} from "../../../utils/iconAnimations";

export default function DevelopmentCard({
  service,
}) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/development/${service.id}`}
      className="
        group
        relative
        block
        h-[440px]
        md:h-[480px]
        rounded-[2rem]
        overflow-hidden
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
        "
      />



      {/* Default Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/65
          via-black/40
          to-black/20
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/30
          via-transparent
          to-black/10
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
        <div className="min-h-[170px]">
          <h3
            className="
              heading-card

              text-2xl
              md:text-3xl

              text-white

              mb-4
            "
          >
            {service.title}
          </h3>

          {/* Description & Tags - Permanently Visible */}
          <div className="opacity-100 translate-y-0 transition-none">
            <p
              className="
                text-sm
                md:text-base

                text-white/90

                leading-relaxed

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
                    font-semibold

                    rounded-full

                    bg-white/70
                    backdrop-blur-md
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