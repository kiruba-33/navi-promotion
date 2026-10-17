import React from "react";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

import { teamData } from "../../../data/about";

export default function OurTeam() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-semibold mb-5 shadow-sm select-none"
          >
            <Users className="w-4 h-4 text-orange-500" />
            <span>Our Team</span>
          </div>

          <h2
            className="heading-section text-3xl sm:text-4xl lg:text-5xl heading-primary mb-4"
          >
            The Minds Behind{" "}
            <span className="heading-highlight">
              the Magic
            </span>
          </h2>

          <p
            className="body-large text-slate-600 max-w-2xl mx-auto"
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
            lg:gap-8
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
                    rounded-[2rem]
                    border
                    border-slate-200
                    bg-white
                    aspect-[3/4]
                    min-h-[410px]
                    transition-all
                    duration-350
                    ease-out
                    ${isFounder ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange" : ""}
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

                  {/* Overlay — tailored bottom-weighted gradient for CEO to keep face 100% visible */}
                  <div
                    className={`
                      absolute
                      inset-0
                      pointer-events-none
                      ${
                        isFounder
                          ? "bg-gradient-to-t from-black/95 via-black/40 via-35% to-transparent to-70%"
                          : "bg-gradient-to-t from-black/90 via-black/55 to-transparent"
                      }
                    `}
                  />

                  {/* Premium Navi Promotions brand gradient overlay on hover */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-350
                      ease-out
                      pointer-events-none
                    "
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(11, 61, 145, 0.88), rgba(245, 124, 0, 0.82))",
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
                          text-xl
                          sm:text-2xl
                          text-white
                          mb-1
                        "
                      >
                        {member.name}
                      </h3>

                      <p
                        className="
                          text-brand-orange
                          font-medium
                          text-xs
                          sm:text-sm
                          mb-2.5
                        "
                      >
                        {member.role}
                      </p>

                      <p
                        className="
                          body-small
                          text-white/85
                          text-xs
                          sm:text-sm
                          leading-relaxed
                        "
                      >
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-4 pt-0.5">
                      {isFounder ? (
                        <span
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-brand-orange
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
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-white/15
                                border
                                border-white/25
                                backdrop-blur-md
                                text-white
                                shadow-sm
                                hover:bg-white
                                hover:text-[#0b3d91]
                                hover:border-white
                                hover:shadow-md
                                hover:scale-105
                                active:scale-95
                                transition-all
                                duration-300
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
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-white/15
                                border
                                border-white/25
                                backdrop-blur-md
                                text-white
                                shadow-sm
                                hover:bg-white
                                hover:text-[#0b3d91]
                                hover:border-white
                                hover:shadow-md
                                hover:scale-105
                                active:scale-95
                                transition-all
                                duration-300
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