import React from "react";
import { educations } from "@/assets/assets";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-[12%] bg-white text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h4 className="text-lg font-Ovo mb-2">Education</h4>
        <h2 className="text-4xl font-Ovo mb-4">My Education</h2>
        <p className="font-Ovo text-gray-500 mb-10">
          Here is a quick summary of my educational background
        </p>

        {/* Mobile layout: Cards without timeline */}
        <div className="block md:hidden space-y-8">
          {educations.map((edu, i) => (
            <div key={i} className="flex flex-col justify-center items-center">
              <div className="w-full max-w-md px-4">
                <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-[1.02] duration-500 ease-in-out">
                  <span className="text-lg font-semibold font-Ovo text-center block mb-4">
                    {edu.year}
                  </span>

                  <h3 className="font-Ovo text-base font-semibold text-gray-800">
                    {edu.title}
                  </h3>
                  <p className="text-base font-Ovo text-gray-700 mt-2">
                    Department: {edu.department}
                  </p>
                  <p className="text-base font-Ovo text-gray-700 mt-2">
                    {edu.institute}
                  </p>
                  <p className="text-base font-Ovo text-gray-700 mt-2">
                    {edu.gpa.startsWith("CGPA") ? edu.gpa : `GPA: ${edu.gpa}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout: Vertical timeline */}
        <div className="hidden md:block relative">
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

                  {/* Left side */}
                  <div className="hidden md:block md:w-1/2 px-4">
                    {isLeft && (
                      <div className="md:pr-10 text-right">
                        <span className="text-lg font-semibold font-Ovo text-gray-900 block mt-2 mb-4">
                          {edu.year}
                        </span>
                        <div className="bg-white border border-gray-400 rounded-md p-4 shadow-sm transition-transform transform hover:scale-[1.02] hover:shadow-md cursor-pointer hover:bg-pink-50 duration-500 ease-in-out">
                          <h3 className="font-Ovo text-base font-semibold">
                            {edu.title}
                          </h3>
                          <p className="text-base font-Ovo text-gray-700">
                            Department: {edu.department}
                          </p>
                          <p className="text-base font-Ovo text-gray-700">
                            {edu.institute}
                          </p>
                          <p className="text-base font-Ovo text-gray-700">
                            {edu.gpa.startsWith("CGPA")
                              ? edu.gpa
                              : `GPA: ${edu.gpa}`}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right side */}
                  <div className="w-full md:w-1/2 px-4 md:pl-10 text-right md:text-left">
                    {!isLeft && (
                      <>
                        <span className="text-lg font-semibold font-Ovo text-gray-900 block mt-2 mb-4">
                          {edu.year}
                        </span>
                        <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm transition-transform transform hover:scale-[1.02] hover:shadow-md hover:bg-pink-50 duration-500 ease-in-out">
                          <h3 className="font-Ovo text-base font-semibold">
                            {edu.title}
                          </h3>
                          <p className="text-base font-Ovo text-gray-700">
                            {edu.institute}
                          </p>
                          <p className="text-base font-Ovo text-gray-700">
                            Department: {edu.department}
                          </p>
                          <p className="text-base font-Ovo text-gray-700">
                            {edu.gpa.startsWith("CGPA")
                              ? edu.gpa
                              : `GPA: ${edu.gpa}`}
                          </p>
                        </div>
                      </>
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
