import React from "react";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

import { teamData } from "../../../data/about";

export default function OurTeam() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] border-y border-[#0F172A]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#102A56]/10 bg-[#F1F5F9] text-[#102A56] text-[12px] sm:text-[13px] font-medium mb-4 shadow-xs select-none"
          >
            <Users className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
            <span>Our Team</span>
          </div>

          <h2
            className="heading-section text-[#0F172A] mb-4"
          >
            The Minds Behind the Magic
          </h2>

          <p
            className="body-large text-[#0F172A]/80 max-w-2xl mx-auto"
          >
            A collective of passionate experts dedicated to pushing the boundaries of what's possible in the digital world.
          </p>
        </div>

        {/* Team Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            lg:gap-7
          "
        >
          {teamData.map((member) => {
            const isFounder =
              member.name === "Naga Vishnu N.";

            const Wrapper = isFounder
              ? Link
              : "div";

            const wrapperProps = isFounder
              ? {
                  to: "/about/ceo",
                  "aria-label": `Read full biography of ${member.name}`,
                }
              : {};

            return (
              <div
                key={member.name}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`
                    group
                    relative
                    block
                    w-full
                    text-left
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#0F172A]/10
                    bg-[#FFFFFF]
                    aspect-[3/4]
                    min-h-[400px]
                    transition-all
                    duration-300
                    ease-out
                    shadow-xs hover:shadow-md
                    ${isFounder ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]" : ""}
                  `}
                >
                  {/* Image with optimized portrait framing for CEO */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      ${isFounder ? "object-[center_12%]" : "object-cover"}
                    `}
                  />

                  {/* Deep Navy Overlay */}
                  <div
                    className={`
                      absolute
                      inset-0
                      pointer-events-none
                      ${
                        isFounder
                          ? "bg-gradient-to-t from-[#102A56]/95 via-[#102A56]/45 via-35% to-transparent to-70%"
                          : "bg-gradient-to-t from-[#102A56]/95 via-[#102A56]/55 to-transparent"
                      }
                    `}
                  />

                  {/* Hover Accent Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      ease-out
                      pointer-events-none
                    "
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(16, 42, 86, 0.85), rgba(37, 99, 235, 0.75))",
                    }}
                  />

                  {/* Content */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-10
                      p-5
                      sm:p-6
                      flex
                      flex-col
                      justify-end
                    "
                  >
                    <div>
                      <h3
                        className="
                          heading-card
                          text-[#FFFFFF]
                          mb-1
                        "
                      >
                        {member.name}
                      </h3>

                      <p
                        className="
                          text-[#F97316]
                          font-medium
                          text-[12px]
                          sm:text-[13px]
                          mb-2
                        "
                      >
                        {member.role}
                      </p>

                      <p
                        className="
                          text-[#F1F5F9]/85
                          text-[13px]
                          leading-[1.5]
                        "
                      >
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 mt-4 pt-0.5">
                      {isFounder ? (
                        <span
                          className="
                            text-[12px]
                            font-medium
                            uppercase
                            tracking-[0.04em]
                            text-[#F97316]
                          "
                        >
                          Read Full Bio →
                        </span>
                      ) : (
                        <>
                          {member.socials?.linkedin && member.socials.linkedin.trim() !== "" && (
                            <a
                              href={member.socials.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name}'s LinkedIn profile`}
                              onClick={(e) =>
                                e.stopPropagation()
                              }
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                bg-white/15
                                border
                                border-white/25
                                backdrop-blur-md
                                text-[#FFFFFF]
                                hover:bg-[#2563EB]
                                hover:border-[#2563EB]
                                transition-colors
                                duration-200
                              "
                            >
                              {/* Direct LinkedIn SVG Icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                              </svg>
                            </a>
                          )}

                          {member.socials?.github && member.socials.github.trim() !== "" && (
                            <a
                              href={member.socials.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name}'s GitHub profile`}
                              onClick={(e) =>
                                e.stopPropagation()
                              }
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                bg-white/15
                                border
                                border-white/25
                                backdrop-blur-md
                                text-[#FFFFFF]
                                hover:bg-[#2563EB]
                                hover:border-[#2563EB]
                                transition-colors
                                duration-200
                              "
                            >
                              {/* Direct GitHub SVG Icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                              </svg>
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Wrapper>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}