import React from 'react';
import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { assets, LinkedIn, GitHub, X, Facebook, Instagram, YouTube } from '@/assets/assets'
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 mt-20 pb-4 px-[12%]">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-2">
                {/* Logo */}
                <Image src={assets.logo} alt="logo" width={150} height={150} />

                {/* Email */}
                <div className="flex flex-col items-center gap-2 text-lg text-gray-600">
                    <div className="flex flex-row items-center gap-2 mb-2">
                        <MdEmail className='text-rose-600' />
                        <a href="mailto:tanzim.ikram@gmail.com" className="hover:underline">greatstackdev@gmail.com</a>
                    </div>

                    <div className='flex flex-row lg:flex-row items-center gap-4 mb-10'>
                        <a href={LinkedIn} target='_blank'>
                            <FaLinkedin size={24} className='hover:scale-[1.2] duration-100 hover:text-neutral-700' />
                            </a>
                        <a href={GitHub} target='_blank'>
                            <FaGithubSquare size={24} className='hover:scale-[1.2] duration-100 hover:text-neutral-700' />
                            </a>
                        <a href={X} target='_blank'>
                            <FaSquareXTwitter size={24} className='hover:scale-[1.2] duration-100 hover:text-neutral-700' />
                        </a>
                        <a href={Facebook} target='_blank'>
                            <FaFacebookSquare size={24} className='hover:scale-[1.2] duration-100 hover:text-neutral-700' />
                        </a>
                        <a href={Instagram} target='_blank'>
                            <FaInstagramSquare size={24} className='hover:scale-[1.2] duration-100 hover:text-neutral-700' />
                        </a>
                        <a href={YouTube} target='_blank'>
                            <FaYoutubeSquare size={24} className='hover:scale-[1.2] duration-100 hover:text-neutral-700' />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <hr className="w-full border-t border-gray-200 my-6" />

                {/* Bottom links */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-between text-sm font-Ovo mb-2">
                    <p>© Tanzim Ikram Sheikh | All Rights Reserved</p>
                    <div className="flex gap-6 justify-center mt-2 sm:mt-0">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#contact" className="hover:underline">Connect with me</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
