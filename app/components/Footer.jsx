import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets'; // assumes logo or email icon is in assets

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-12 pb-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-Ovo flex items-center gap-1">
          Tanzim<span className="text-pink-500 text-3xl font-bold">.</span>
        </h1>

        {/* Email */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Image src={assets.email_icon} alt="email" width={16} height={16} />
          <a href="mailto:greatstackdev@gmail.com" className="hover:underline">greatstackdev@gmail.com</a>
        </div>

        {/* Divider */}
        <hr className="w-full border-t border-gray-200 my-6" />

        {/* Bottom links */}
        <div className="w-full flex flex-col sm:flex-row justify-between text-xs font-Ovo text-gray-500">
          <p>© 2025 William Mark. All rights reserved.</p>
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
