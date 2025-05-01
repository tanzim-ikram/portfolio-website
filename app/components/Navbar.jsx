import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            // Check if we've scrolled more than 50px
            const shouldShowBackground = window.scrollY > 50
            if (shouldShowBackground !== isScrolled) {
                setIsScrolled(shouldShowBackground)
            }
        }

        // Add event listener
        window.addEventListener('scroll', handleScroll)

        // Call handler right away so state updates with initial scroll position
        handleScroll()

        // Remove event listener on cleanup
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isScrolled]) // Only re-run if isScrolled changes

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    <Image src={assets.logo} alt="" className='w-28 cursor-pointer mr-14' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${isScrolled ? "" : "shadow-sm bg-white/50"}`}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About Me</a></li>
                    <li><a className='font-Ovo' href="#skills">Skills</a></li>
                    <li><a className='font-Ovo' href="#experience">Experience</a></li>
                    <li><a className='font-Ovo' href="#education">Education</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
                </ul>

                <div className='flex items-center gap-2'>
                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt='' className='w-3' /></a>

                    <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#skills">Skills</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#experience">Experience</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#education">Education</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar