import React from 'react';
import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { assets } from '@/assets/assets'; // assumes logo or email icon is in assets

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 mt-20 pb-4 px-[12%]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-2">
        {/* Logo */}
        <Image src={assets.logo} alt="logo" width={150} height={150} />

        {/* Email */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
            <MdEmail className='text-rose-600'/>
          <a href="mailto:tanzim.ikram@gmail.com" className="hover:underline">greatstackdev@gmail.com</a>
        </div>

        {/* Divider */}
        <hr className="w-full border-t border-gray-200 my-6" />

        {/* Bottom links */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs font-Ovo text-gray-500 mb-2">
          <p>© Tanzim Ikram Sheikh | All Rights Reserved</p>
          <div className="flex gap-6 justify-center mt-2 sm:mt-0">
            <a href="#" className="hover:underline">Terms of Services</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#contact" className="hover:underline">Connect with me</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
