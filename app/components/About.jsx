import { assets } from "@/assets/assets";
import Image from "next/image";
import { IoBriefcaseOutline } from "react-icons/io5";
import SocialLinks from "./SocialLinks";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20">
      {/* Section Header */}
      <p className="text-center mb-2 text-lg font-Ovo">Introduction</p>
      <h2 className="text-center text-4xl md:text-5xl font-Ovo mb-4">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* User Image */}
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image} // Dynamically loading user image
            alt="Portrait of Tanzim Ikram Sheikh"
            className="w-full rounded-3xl shadow-lg shadow-neutral-500/50"
          />
        </div>

        {/* About Me Text Section */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            {/* Brief introduction about the user */}
            I&apos;m a passionate Web Developer and UI/UX Designer skilled in both
            front-end and back-end development. With expertise in React,
            Next.js, HTML, CSS, and JavaScript, I create user-centered,
            responsive websites and interactive applications. I&apos;m also dedicated
            to designing intuitive, functional interfaces.
            <br />
            Driven by my curiosity, I explore new technologies, including robotics and IoT,
            to push the limits of digital design. My goal is to use technology
            to solve real-world problems while continuously learning and growing
            as a developer and designer.
          </p>

          {/* Follow Me Section */}
          <p className="text-center mb-4 text-lg font-Ovo font-bold lg:text-left">
            Follow me:
          </p>

          <SocialLinks size={32} className="mb-10 justify-center lg:justify-start" />

          {/* Hire Me Button */}
          <div className="flex items-start mt-6 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 hover:bg-rose-500"
            >
              Hire me <IoBriefcaseOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
