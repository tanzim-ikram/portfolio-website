import { assets, serviceData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

function Services() {
  return (
    <div id='services' className='w-full px-[12%] py-20 scroll-mt-20'>
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center mb-4 text-4xl md:text-5xl font-Ovo">My Services</h2>
      <p className="font-Ovo text-gray-500 mb-10 text-center max-w-2xl mx-auto">
        I am a frontend developer from California, USA with 10 years of experience in multiple 
        companies like Microsoft, Tesla and Apple.
      </p>

      {/* Grid for service cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className='border border-gray-300 rounded-lg shadow-sm px-8 py-12 bg-white hover:shadow-md hover:bg-pink-50 hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col items-center text-center'
          >
            <Image src={icon} alt={title} width={40} height={40} className='w-10 h-10' />
            <h3 className='text-lg my-4 text-gray-700 font-semibold'>{title}</h3>
            <p className='text-gray-600 text-sm leading-5'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm text-gray-500 mt-4 hover:underline'>
              Read more <Image src={assets.right_arrow} alt='' className='w-4' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
