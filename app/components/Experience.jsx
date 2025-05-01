import React from "react";
import Image from "next/image";

const experiences = [
    {
      company: "Google",
      role: "Lead Software Engineer",
      duration: "Nov 2019 - Present",
      description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      icon: "/company/AERD.jpg"
    },
    {
      company: "Youtube",
      role: "Software Engineer",
      duration: "Jan 2017 - Oct 2019",
      description: "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      icon: "/company/AERD.jpg"
    },
    {
      company: "Apple",
      role: "Junior Software Engineer",
      duration: "Jan 2016 - Dec 2017",
      description: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
      icon: "/company/TechTopia.png"
    }
  ];
  
  const Experience = () => {
    return (
      <div id="experience" className="py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-lg mb-2 font-Ovo text-gray-600">Experience</h4>
          <h2 className="text-4xl font-Ovo mb-4">My Experience</h2>
          <p className="font-Ovo text-gray-600 mb-10">
            Here is a quick summary of my most recent experiences
          </p>
          <div className="space-y-6 text-left">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <Image src={exp.icon} alt={exp.company} width={24} height={24} />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {exp.role} at {exp.company}
                    </h3>
                    <p className="font-Ovo text-sm mt-2 text-gray-700">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-Ovo text-gray-500 mt-4 md:mt-0 md:text-right">
                  {exp.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
