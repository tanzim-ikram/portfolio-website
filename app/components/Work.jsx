import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { IoIosArrowRoundForward } from 'react-icons/io';

const workData = [
  {
    title: 'Frontend Project',
    subtitle: 'web design',
    image: '/work-1.png',
  },
  {
    title: 'Photography Site',
    subtitle: 'web design',
    image: '/work-3.png',
  },
  {
    title: 'Frontend Project',
    subtitle: 'web design',
    image: '/work-1.png',
  },
  {
    title: 'Photography Site',
    subtitle: 'web design',
    image: '/work-3.png',
  },
  {
    title: 'UI/UX Designing',
    subtitle: 'ui/ux design',
    image: '/work-4.png',
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20 px-4 text-center bg-white">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-lg mb-2 font-Ovo">My portfolio</h4>
        <h2 className="text-4xl md:text-5xl font-Ovo mb-4">My latest work</h2>
        <p className="font-Ovo text-gray-500 max-w-2xl mx-auto mb-12">
          Welcome to my web development portfolio! Explore a collection of projects showcasing
          my expertise in front-end development.
        </p>

        {/* Work Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {workData.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[280px] md:w-[240px] lg:w-[220px] xl:w-[250px] rounded-xl overflow-hidden shadow-sm relative group hover:shadow-md cursor-pointer duration-500 ease-in-out hover:scale-[1.02]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-md flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-sm font-semibold font-Ovo text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-500 font-Ovo">{item.subtitle}</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-lime-300 flex items-center justify-center hover:rotate-45 transition duration-300">
                  <Image src={assets.arrow_icon} alt="arrow" width={10} height={10} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        <div className="mt-12">
          <button className="text-lg px-10 py-3 rounded-full border border-gray-400 font-Ovo text-gray-400 hover:bg-lime-300 hover:text-gray-800 hover:border-gray-800 flex items-center gap-2 mx-auto">
            Show more
            <IoIosArrowRoundForward size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
