"use client";

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { experiences } from "@/assets/assets"; // Importing experiences data from assets

const INITIAL_COUNT = 3;

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll
    ? experiences
    : experiences.slice(0, INITIAL_COUNT);

  return (
    <section id="experience" className="py-20 px-[12%] bg-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <p className="text-lg mb-2 font-Ovo">Experience</p>
        <h2 className="text-4xl md:text-5xl font-Ovo mb-4">My Experience</h2>
        <p className="font-Ovo text-gray-600 mb-10">
          Here is a quick summary of my most recent experiences
        </p>

        {/* Experience Cards */}
        <div className="space-y-6 text-left">
          {visibleExperiences.map((exp, index) => (
            <div
              key={index} // Unique key for each experience card
              className="bg-white border border-gray-300 rounded-xl shadow-sm p-6 space-y-2 hover:shadow-md hover:bg-rose-50 hover:scale-[1.02] duration-500 ease-in-out"
            >
              {/* Row 1: Logo + Title + Duration */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="flex items-center gap-4">
                  {/* Company Logo */}
                  <Image
                    src={exp.icon} // Company logo
                    alt=""
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  {/* Role and Company Name */}
                  <h3 className="text-lg font-semibold font-Ovo">
                    {exp.role} at{" "}
                    <span className="italic text-gray-700">{exp.company}</span>
                  </h3>
                </div>

                {/* Duration of the Experience */}
                <span className="text-sm font-Ovo text-gray-600 sm:text-right">
                  {exp.duration}
                </span>
              </div>

              {/* Row 2: Description */}
              <p className="font-Ovo text-base text-gray-700 leading-relaxed">
                {exp.description} {/* Brief description of the experience */}
              </p>
            </div>
          ))}
        </div>

        {/* View all / show less toggle */}
        {experiences.length > INITIAL_COUNT && (
          <div className="mt-12">
            <button
              type="button"
              aria-expanded={showAll}
              onClick={() => setShowAll((v) => !v)}
              className="text-lg px-10 py-3 rounded-full border border-gray-500 font-Ovo text-gray-600 hover:bg-rose-500 hover:text-white hover:border-rose-500 flex items-center gap-2 mx-auto transition"
            >
              {showAll ? "Show less" : "View all"}
              <IoIosArrowRoundForward size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
