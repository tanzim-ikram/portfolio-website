import {
  assets,
  LinkedIn,
  GitHub,
  X,
  Facebook,
  Instagram,
  YouTube,
} from "@/assets/assets"; // Importing assets and social media links
import Image from "next/image"; // Importing Next.js Image component for optimized image rendering
import React from "react"; // Importing React
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa"; // Importing social media icons from react-icons
import { FaSquareXTwitter } from "react-icons/fa6"; // Importing Twitter icon from react-icons/fa6
import { IoBriefcaseOutline } from "react-icons/io5"; // Importing briefcase icon for the "hire me" button

function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 mt-20">
      {/* Section Header */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo mb-4">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* User Image */}
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image} // Dynamically loading user image
            alt=""
            className="w-full rounded-3xl shadow-lg shadow-neutral-500/50"
          />
        </div>

        {/* About Me Text Section */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            {/* Brief introduction about the user */}
            I'm a passionate Web Developer and UI/UX Designer skilled in both
            front-end and back-end development. With expertise in React,
            Next.js, HTML, CSS, and JavaScript, I create user-centered,
            responsive websites and interactive applications. I'm also dedicated
            to designing intuitive, functional interfaces. 
            <br />
            Driven by my curiosity, I explore new technologies, including robotics and IoT,
            to push the limits of digital design. My goal is to use technology
            to solve real-world problems while continuously learning and growing
            as a developer and designer.
          </p>

          {/* Follow Me Section */}
          <h4 className="text-center mb-4 text-lg font-Ovo font-bold lg:text-left">
            Follow me:{" "}
          </h4>

          <div className="flex flex-row lg:flex-row items-center gap-4 mb-10 justify-center lg:justify-start">
            {/* Social Media Links */}
            <a href={LinkedIn} target="_blank">
              <FaLinkedin
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-rose-500" // Hover effect for LinkedIn icon
              />
            </a>
            <a href={GitHub} target="_blank">
              <FaGithubSquare
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-rose-500" // Hover effect for GitHub icon
              />
            </a>
            <a href={X} target="_blank">
              <FaSquareXTwitter
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-rose-500" // Hover effect for Twitter icon
              />
            </a>
            <a href={Facebook} target="_blank">
              <FaFacebookSquare
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-rose-500" // Hover effect for Facebook icon
              />
            </a>
            <a href={Instagram} target="_blank">
              <FaInstagramSquare
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-rose-500" // Hover effect for Instagram icon
              />
            </a>
            <a href={YouTube} target="_blank">
              <FaYoutubeSquare
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-rose-500" // Hover effect for YouTube icon
              />
            </a>
          </div>

          {/* Hire Me Button */}
          <div className="flex sm:flex-row items-left mt-6 justify-center lg:justify-start">
            <a
              href="#hire"
              className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 hover:bg-rose-500"
            >
              hire me <IoBriefcaseOutline /> {/* Briefcase icon for the button */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; // Exporting the About component for use in other parts of the application
