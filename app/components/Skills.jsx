import React from "react";
import Image from "next/image";

const skills = [
    { name: "HTML", icon: "/icons/HTML5.svg" },
    { name: "CSS", icon: "/icons/CSS3.svg" },
    { name: "Javascript", icon: "/icons/JavaScript.svg" },
    { name: "Typescript", icon: "/icons/TypeScript.svg" },
    { name: "React", icon: "/icons/React.svg" },
    { name: "Figma", icon: "/icons/Figma.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: "Nest.js", icon: "/icons/Nest.js.svg" },
    { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    { name: "PHP", icon: "/icons/PHP.svg" },
    { name: "MySQL", icon: "/icons/MySQL.svg" },
    { name: "XML", icon: "/icons/XML.svg" },
    { name: "JSON", icon: "/icons/JSON.svg" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
    { name: "Bootstrap", icon: "/icons/Bootstrap.svg" },
    { name: "Python", icon: "/icons/Python.svg" },
    { name: "Flask", icon: "/icons/Flask.svg" },
    { name: "Pandas", icon: "/icons/Pandas.svg" },
    { name: "Matplotlib", icon: "/icons/Matplotlib.svg" },
    { name: "NumPy", icon: "/icons/NumPy.svg" },
    { name: "Anaconda", icon: "/icons/Anaconda.svg" },
    { name: "NPM", icon: "/icons/NPM.svg" },
    { name: "VS Code", icon: "/icons/VS Code.svg" },
    { name: "Postman", icon: "/icons/Postman.svg" },
    { name: "GitHub", icon: "/icons/GitHub.svg" },
    { name: "Git", icon: "/icons/Git.svg" },
    { name: "Arduino", icon: "/icons/Arduino.svg" },
    { name: "C", icon: "/icons/C.svg" },
    { name: "C++", icon: "/icons/CPP.svg" },
    { name: "WordPress", icon: "/icons/WordPress.svg" },
    { name: "WooCommerce", icon: "/icons/WooCommerce.svg" }
];

const Skills = () => {
    return (
        <div id="skills" className="py-20 px-4 mb-10 text-center bg-white">
            <div className="max-w-5xl mx-auto">
                <h4 className="text-center mb-2 text-lg font-Ovo">Skills</h4>
                <h2 className="text-center mb-4 text-5xl font-Ovo">Tools I Use</h2>
                <p className="font-Ovo text-gray-500 mb-10">
                    The skills, tools and technologies I am really good at
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 place-items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 mb-2">
                            <Image src={skill.icon} alt={skill.name} width={40} height={40} />
                            <span className="font-Ovo text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;