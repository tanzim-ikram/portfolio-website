import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl text-center flex flex-col items-center justify-center gap-6 mt-20">
        <Image
          src="/tanzim.jpg"
          alt="Profile"
          className="rounded-full"
          width={150}
          height={150}
        />

        <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-Ovo">
          Hi! I'm Tanzim Ikram Sheikh
          <Image src={assets.hand_icon} alt="Wave" width={24} height={24} />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight">
          Frontend-Focused UI/UX Designer
        </h1>

        <p className="max-w-2xl mx-auto font-Ovo">
          I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="#contact"
            className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
          >
            contact me
            <Image src={assets.right_arrow_white} alt="" width={16} height={16} />
          </a>
          <a
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            my resume
            <Image src={assets.download_icon} alt="" width={16} height={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
