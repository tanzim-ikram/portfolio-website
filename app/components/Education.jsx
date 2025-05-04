import React from "react";

const educations = [
  {
    year: "2016–2017",
    title: "Secondary School Certificate (SSC)",
    institute: "Rani Bilasmoni Govt. Boys' High School",
    department: "Science",
    gpa: "5.00",
  },
  {
    year: "2018–2019",
    title: "Higher Secondary School Certificate (HSC)",
    institute: "Gazipur Cantonment College",
    department: "Science",
    gpa: "5.00",
  },
  {
    year: "2021–Present",
    title: "Bachelor of Science (BSc)",
    institute: "American International University–Bangladesh",
    department: "Computer Science and Engineering",
    gpa: "3.84",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-[12%] mb-10 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-lg font-Ovo mb-2">Education</h4>
        <h2 className="text-4xl font-Ovo mb-4">My Education</h2>
        <p className="font-Ovo text-gray-500 mb-10">
          Here is a quick summary of my educational background
        </p>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 w-1 h-full -translate-x-1/2 bg-gray-300" />

          <div className="space-y-14">
            {educations.map((edu, i) => {
              const isLeft = i % 2 !== 0;

              return (
                <div
                  key={i}
                  className="relative flex flex-col md:flex-row md:items-start"
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border-4 border-white z-10 top-2" />

                  {/* Left side (if isLeft), empty on even */}
                  <div className="hidden md:block md:w-1/2 px-4 ">
                    {isLeft && (
                      <div className="md:pr-10 text-right ">
                        <span className="text-lg font-semibold font-Ovo text-gray-900 block mt-2 mb-4">
                          {edu.year}
                        </span>
                        <div className="bg-white border border-gray-400 rounded-md p-4 shadow-sm transition-transform transform hover:scale-[1.02] hover:shadow-md cursor-pointer hover:bg-pink-50 duration-500 ease-in-out">
                          <h3 className="font-Ovo text-base font-semibold">{edu.title}</h3>
                          <p className="text-base font-Ovo text-gray-700">Department: {edu.department}</p>
                          <p className="text-base font-Ovo text-gray-700">{edu.institute}</p>
                          <p className="text-base font-Ovo text-gray-700">
                            {edu.gpa.startsWith("CGPA") ? edu.gpa : `GPA: ${edu.gpa}`}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right side (if !isLeft), full width on mobile */}
                  <div className="w-full md:w-1/2 px-4 md:pl-10 text-right md:text-left">
                    {!isLeft && (
                      <>
                        <span className="text-lg font-semibold font-Ovo text-gray-900 block mt-2 mb-4">
                          {edu.year}
                        </span>
                        <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm transition-transform transform hover:scale-[1.02] hover:shadow-md">
                          <h3 className="font-Ovo text-base font-semibold">{edu.title}</h3>
                          <p className="text-base font-Ovo text-gray-700">{edu.institute}</p>
                          <p className="text-base font-Ovo text-gray-700">Department: {edu.department}</p>
                          <p className="text-base font-Ovo text-gray-700">
                            {edu.gpa.startsWith("CGPA") ? edu.gpa : `GPA: ${edu.gpa}`}
                          </p>
                        </div>
                      </>
                    )}

                    {/* Mobile layout: always show on mobile here */}
                    {isLeft && (
                      <div className="md:hidden">
                        <span className="text-sm font-semibold font-Ovo text-gray-900 block mb-2">
                          {edu.year}
                        </span>
                        <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm transition-transform transform hover:scale-[1.02] hover:shadow-md">
                          <h3 className="font-Ovo font-semibold">{edu.title}</h3>
                          <p className="text-sm font-Ovo text-gray-700">{edu.institute}</p>
                          <p className="text-sm font-Ovo text-gray-700">Department: {edu.department}</p>
                          <p className="text-sm font-Ovo text-gray-700">
                            {edu.gpa.startsWith("CGPA") ? edu.gpa : `GPA: ${edu.gpa}`}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
