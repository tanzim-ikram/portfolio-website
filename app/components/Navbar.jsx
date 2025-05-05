import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false) // State to track if the user has scrolled past a certain point
    const sideMenuRef = useRef() // Ref to control the mobile side menu

    // Function to open the mobile side menu
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    // Function to close the mobile side menu
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled more than 50px
            const shouldShowBackground = window.scrollY > 50
            if (shouldShowBackground !== isScrolled) {
                setIsScrolled(shouldShowBackground) // Update state if scroll position changes
            }
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        // Call the handler immediately to set the initial state
        handleScroll()

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isScrolled]) // Re-run effect only if isScrolled changes

    return (
        <>
            {/* Background image for the header */}
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>

            {/* Main navigation bar */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
                {/* Logo */}
                <a href="#top">
                    <Image src={assets.logo} alt="Tanzim Logo" className='w-30 cursor-pointer mr-14' />
                </a>

                {/* Desktop navigation links */}
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

                {/* Right-side buttons */}
                <div className='flex items-center gap-2'>
                    {/* Theme toggle button */}
                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6' />
                    </button>

                    {/* Contact button for larger screens */}
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt='' className='w-3' /></a>

                    {/* Mobile menu button */}
                    <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* Mobile side menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    {/* Close button for the side menu */}
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    {/* Mobile navigation links */}
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