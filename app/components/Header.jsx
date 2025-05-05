import { assets } from "@/assets/assets"; // Importing assets such as images from the assets folder
import Image from "next/image"; // Importing the Next.js Image component for optimized image rendering
import React from "react"; // Importing React to create the component

function Header() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-[12%] mb-10">
      {/* Main container for the header section with full width and height */}
      <div className="w-full max-w-3xl text-center flex flex-col items-center justify-center gap-6 mt-20">
        {/* Inner container for content, centered and responsive */}
        <Image
          src={assets.profile_img} // Profile image source
          alt="Profile" // Alt text for accessibility
          className="rounded-full" // Styling to make the image circular
          width={150} // Image width
          height={150} // Image height
        />

        <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-Ovo">
          {/* Greeting text with a waving hand icon */}
          Hi! I'm Tanzim Ikram Sheikh
          <Image src={assets.hand_icon} alt="Wave" width={24} height={24} />
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight">
          {/* Main title describing the role */}
          Web Developer & UI/UX Designer
        </h1>

        <p className="max-w-2xl mx-auto font-Ovo">
          {/* Short description about the individual */}
          Creating innovative and efficient digital solutions with a focus on
          front-end development and user experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          {/* Buttons for contact and resume download */}
          <a
            href="#contact" // Link to the contact section
            className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
          >
            contact me
            <Image
              src={assets.right_arrow_white} // Icon for the button
              alt="" // Empty alt text as it's decorative
              width={16}
              height={16}
            />
          </a>
          <a
            href="/RESUME - TANZIM IKRAM SHEIKH.pdf" // Link to download the resume
            download // Enables file download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            my resume
            <Image
              src={assets.download_icon} // Icon for the button
              alt="" // Empty alt text as it's decorative
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header; // Exporting the Header component for use in other parts of the application
