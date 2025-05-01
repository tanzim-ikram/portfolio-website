import React from "react";
import Image from "next/image";

import AERDIcon from "../../public/company/AERD.jpg";
import TechTopiaIcon from "../../public/company/TechTopia.png";

const experiences = [
  {
    company: "Google",
    role: "Lead Software Engineer",
    duration: "Nov 2019 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    icon: AERDIcon,
  },
  {
    company: "Youtube",
    role: "Software Engineer",
    duration: "Jan 2017 - Oct 2019",
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    icon: AERDIcon,
  },
  {
    company: "Apple",
    role: "Junior Software Engineer",
    duration: "Jan 2016 - Dec 2017",
    description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
    icon: TechTopiaIcon,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white text-center">
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
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-2"
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
