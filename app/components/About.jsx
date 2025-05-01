import { assets } from '@/assets/assets'
import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";

function About() {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='' className='w-full rounded-3xl' />
                </div>

                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>

                    <h4 className="text-left mb-4 text-lg font-Ovo font-bold">Follow me: </h4>

                    <div className='flex flex-row lg:flex-row items-center gap-4 mb-10'>
                        <a href=""><FaLinkedin size={32} className='hover:-translate-y-1 duration-300 hover:text-neutral-700' /></a>
                        <a href=""><FaGithubSquare size={32} className='hover:-translate-y-1 duration-300 hover:text-neutral-700' /></a>
                        <a href=""><FaSquareXTwitter size={32} className='hover:-translate-y-1 duration-300 hover:text-neutral-700' /></a>
                        <a href=""><FaFacebookSquare size={32} className='hover:-translate-y-1 duration-300 hover:text-neutral-700' /></a>
                        <a href=""><FaInstagramSquare size={32} className='hover:-translate-y-1 duration-300 hover:text-neutral-700' /></a>
                        <a href=""><FaYoutubeSquare size={32} className='hover:-translate-y-1 duration-300 hover:text-neutral-700' /></a>
                    </div>

                    <div className="flex sm:flex-row items-left mt-6">
                        <a href="#hire" className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 hover:bg-neutral-700"> hire me <IoBriefcaseOutline />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
