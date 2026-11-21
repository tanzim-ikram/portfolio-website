import { assets, skills, experiences, works } from "@/assets/assets";
import Image from "next/image";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import SocialLinks from "./SocialLinks";

// Counts are derived from the data so they stay in sync automatically
const highlights = [
  { label: "Skills & tools", value: skills.length, Icon: FaCode },
  { label: "Roles", value: experiences.length, Icon: IoBriefcaseOutline },
  {
    label: "Projects",
    value: new Set(works.map((work) => work.title)).size,
    Icon: FaLaptopCode,
  },
];

const About = () => {
  return (
    <section id="about" className="w-full px-[12%] py-20 scroll-mt-20">
      {/* Section heading */}
      <p className="text-center mb-2 text-lg font-Ovo">Introduction</p>
      <h2 className="text-center text-4xl md:text-5xl font-Ovo mb-4">
        About Me
      </h2>
      <p className="font-Ovo text-gray-600 text-center max-w-2xl mx-auto">
        A little about who I am and what I do
      </p>

      <div className="grid lg:grid-cols-[auto_1fr] gap-x-20 gap-y-10 mt-12">
        {/* Portrait: stretches to match the bio-to-socials block on desktop */}
        <div className="relative w-64 sm:w-80 mx-auto lg:mx-0">
          <Image
            src={assets.user_image}
            alt="Portrait of Tanzim Ikram Sheikh"
            className="w-full h-auto lg:absolute lg:inset-0 lg:h-full object-cover rounded-3xl shadow-lg shadow-neutral-500/50"
          />
        </div>

        {/* Bio, highlights, socials and actions */}
        <div className="text-center lg:text-left">
          <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
            <p className="font-Ovo text-gray-700 leading-relaxed">
              I&apos;m a passionate UI/UX Designer and Web Developer skilled in
              both front-end and back-end development. With expertise in React,
              Next.js, HTML, CSS, and JavaScript, I create user-centered,
              responsive websites and interactive applications. I&apos;m also
              dedicated to designing intuitive, functional interfaces.
            </p>
            <p className="font-Ovo text-gray-700 leading-relaxed">
              Driven by my curiosity, I explore new technologies, including
              robotics and IoT, to push the limits of digital design. My goal
              is to use technology to solve real-world problems while
              continuously learning and growing as a developer and designer.
            </p>
          </div>

          {/* Highlight cards */}
          <ul className="grid grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0 mt-10">
            {highlights.map(({ label, value, Icon }) => (
              <li
                key={label}
                className="flex flex-col items-center lg:items-start gap-1 bg-white border border-gray-300 rounded-xl shadow-sm p-3 sm:p-4 hover:shadow-md hover:bg-rose-50 hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <Icon className="text-rose-500" size={20} aria-hidden="true" />
                <span className="text-2xl font-Ovo font-semibold text-gray-800">
                  {value}
                </span>
                <span className="text-sm font-Ovo text-gray-600 leading-5">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <p className="mt-10 mb-4 text-lg font-Ovo font-bold">Follow me:</p>
          <SocialLinks size={28} className="justify-center lg:justify-start" />
        </div>

        {/* Actions */}
        <div className="lg:col-span-2 flex justify-center">
          <a
            href="#contact"
            className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 hover:bg-rose-500 transition"
          >
            Hire me <IoBriefcaseOutline aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
