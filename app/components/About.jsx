import {
  assets,
  LinkedIn,
  GitHub,
  X,
  Facebook,
  Instagram,
  YouTube,
} from "@/assets/assets";
import Image from "next/image";
import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";

function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
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

          <h4 className="text-left mb-4 text-lg font-Ovo font-bold">
            Follow me:{" "}
          </h4>

          <div className="flex flex-row lg:flex-row items-center gap-4 mb-10">
            <a href={LinkedIn} target="_blank">
              <FaLinkedin
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-neutral-700"
              />
            </a>
            <a href={GitHub} target="_blank">
              <FaGithubSquare
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-neutral-700"
              />
            </a>
            <a href={X} target="_blank">
              <FaSquareXTwitter
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-neutral-700"
              />
            </a>
            <a href={Facebook} target="_blank">
              <FaFacebookSquare
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-neutral-700"
              />
            </a>
            <a href={Instagram} target="_blank">
              <FaInstagramSquare
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-neutral-700"
              />
            </a>
            <a href={YouTube} target="_blank">
              <FaYoutubeSquare
                size={32}
                className="hover:scale-[1.2] duration-100 hover:text-neutral-700"
              />
            </a>
          </div>

          <div className="flex sm:flex-row items-left mt-6">
            <a
              href="#hire"
              className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 hover:bg-neutral-700"
            >
              {" "}
              hire me <IoBriefcaseOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
