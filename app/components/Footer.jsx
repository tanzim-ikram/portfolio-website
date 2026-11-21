import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { assets } from '@/assets/assets';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 mt-20 pb-4 px-[12%]">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-2">
                {/* Logo Section */}
                <Image src={assets.logo} alt="Tanzim Ikram Sheikh" width={150} height={150} />

                {/* Email Section */}
                <div className="flex flex-col items-center gap-2 text-lg text-gray-600">
                    {/* Email Address */}
                    <div className="flex flex-row items-center gap-2 mb-2">
                        <MdEmail className='text-rose-500' />
                        <a href="mailto:tanzim.ikram@protonmail.com" className="hover:underline">
                            tanzim.ikram@protonmail.com
                        </a>
                    </div>

                    <SocialLinks size={24} className="mb-10" />
                </div>

                {/* Divider Line */}
                <hr className="w-full border-t border-gray-200 my-6" />

                {/* Footer Bottom Links */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-between text-sm font-Ovo mb-2">
                    {/* Copyright Text */}
                    <p>© {new Date().getFullYear()} Tanzim Ikram Sheikh | All Rights Reserved</p>
                    {/* Privacy Policy and Contact Links */}
                    <div className="flex gap-6 justify-center mt-2 sm:mt-0">
                        <a href="#contact" className="hover:underline">Contact me</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
