import Image from "next/image";
import { FaPalette, FaServer, FaChartBar, FaMicrochip, FaTools } from "react-icons/fa";
import { skillCategories } from "@/assets/assets";

// Icon for each category, keyed by category name
const categoryIcons = {
  "Design & Frontend": FaPalette,
  "Backend & Databases": FaServer,
  "Python & Data": FaChartBar,
  "Embedded & Low-level": FaMicrochip,
  "Tools & Workflow": FaTools,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-[12%] text-center bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <p className="text-center mb-2 text-lg font-Ovo">Skills</p>
        <h2 className="text-center mb-4 text-4xl md:text-5xl font-Ovo">Tools I use</h2>
        <p className="font-Ovo text-gray-600 mb-10">
          The skills, tools and technologies I am good at
        </p>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {skillCategories.map(({ name, items }, index) => {
            const Icon = categoryIcons[name];
            const isLastOdd =
              index === skillCategories.length - 1 && skillCategories.length % 2 === 1;

            return (
              <div
                key={name}
                className={`bg-white border border-gray-300 rounded-xl shadow-sm p-6 hover:shadow-md hover:bg-rose-50 transition-all duration-300 ease-in-out ${
                  isLastOdd ? "md:col-span-2" : ""
                }`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="text-rose-500" size={20} aria-hidden="true" />}
                  <h3 className="text-lg font-semibold font-Ovo text-gray-800">{name}</h3>
                  <span className="ml-auto text-sm font-Ovo text-gray-600">
                    {items.length}
                  </span>
                </div>

                {/* Skills in this category */}
                <ul className="flex flex-wrap gap-3 mt-4">
                  {items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1.5"
                    >
                      <Image src={skill.icon} alt="" width={20} height={20} />
                      <span className="font-Ovo text-sm text-gray-700">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
