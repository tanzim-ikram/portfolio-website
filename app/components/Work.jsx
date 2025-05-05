import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdOutlineArrowOutward } from "react-icons/md";
import { works } from "@/assets/assets";

// Sample work data (update as needed with real data)
// Example structure of workData

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter works based on selected category
  const filteredWorks = selectedCategory === 'All' 
    ? works
    : works.filter(work => work.subtitle === selectedCategory);

  // Only display the most recent 8 works
  const recentWorks = filteredWorks.slice(0, 8);

  return (
    <section id="work" className="py-20 mb-10 text-center bg-white px-[12%]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h4 className="text-lg mb-2 font-Ovo">My portfolio</h4>
        <h2 className="text-4xl md:text-5xl font-Ovo mb-4">My latest work</h2>
        <p className="font-Ovo text-gray-600 max-w-2xl mx-auto mb-12">
          Welcome to my web development portfolio! Explore a collection of projects showcasing
          my expertise in front-end development.
        </p>

        {/* Sorting Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => handleCategoryClick('All')}
            className={`px-6 py-2 rounded-full text-md font-Ovo ${selectedCategory === 'All' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-rose-500 hover:text-white transition-all duration-200`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryClick('Web Application')}
            className={`px-6 py-2 rounded-full text-md font-Ovo ${selectedCategory === 'Web Application' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-rose-500 hover:text-white transition-all duration-200`}
          >
            Web App
          </button>
          <button
            onClick={() => handleCategoryClick('Web Site')}
            className={`px-6 py-2 rounded-full text-md font-Ovo ${selectedCategory === 'Web Site' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-rose-500 hover:text-white transition-all duration-200`}
          >
            Web Site
          </button>
          {/* <button
            onClick={() => handleCategoryClick('mobile app')}
            className={`px-4 py-2 rounded-lg text-lg font-Ovo ${selectedCategory === 'mobile app' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-rose-500 hover:text-white transition-all duration-200`}
          >
            Mobile App
          </button> */}
        </div>

        {/* Work Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {recentWorks.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[280px] md:w-[240px] lg:w-[220px] xl:w-[250px] rounded-xl overflow-hidden shadow-sm relative group hover:shadow-md cursor-pointer duration-300 ease-in-out hover:scale-[1.02]"
            >
              {/* Project image */}
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />

              {/* Project details */}
              <div className="bottom-4 left-4 right-4 bg-white backdrop-blur-sm p-3 rounded-md flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-sm font-semibold font-Ovo text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-500 font-Ovo">{item.subtitle}</p>
                </div>
                {/* Icon with hover effect */}
                <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center hover:rotate-45 transition duration-300"> 
                  <a href="#">
                    <MdOutlineArrowOutward className='text-white'/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        <div className="mt-12">
          <button className="text-lg px-10 py-3 rounded-full border border-gray-400 font-Ovo text-gray-400 hover:bg-rose-500 hover:text-white hover:border-rose-500 flex items-center gap-2 mx-auto">
            Show more
            <IoIosArrowRoundForward size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
