import React from "react";
import Image from "next/image";
import { experiences } from "@/assets/assets";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-[12%] bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-lg mb-2 font-Ovo">Experience</h4>
        <h2 className="text-4xl font-Ovo mb-4">My Experience</h2>
        <p className="font-Ovo text-gray-500 mb-10">
          Here is a quick summary of my most recent experiences
        </p>

        <div className="space-y-6 text-left">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-400 rounded-xl shadow-sm p-6 space-y-2 hover:shadow-md cursor-pointer hover:bg-pink-50 hover:scale-[1.02] duration-500 ease-in-out"
            >
              {/* Row 1: Logo + Title + Duration */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="flex items-center gap-4">
                  <Image
                    src={exp.icon}
                    alt={exp.company}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <h3 className="text-lg font-semibold font-Ovo">
                    {exp.role} at{" "}
                    <span className="italic text-gray-700">{exp.company}</span>
                  </h3>
                </div>

                <span className="text-sm font-Ovo text-gray-500 sm:text-right">
                  {exp.duration}
                </span>
              </div>

              {/* Row 2: Description */}
              <p className="font-Ovo text-base text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
