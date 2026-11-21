import user_image from './Tanzim Image.png';
// import code_icon from './code-icon.png';
// import code_icon_dark from './code-icon-dark.png';
// import edu_icon from './edu-icon.png';
// import edu_icon_dark from './edu-icon-dark.png';
// import project_icon from './project-icon.png';
// import project_icon_dark from './project-icon-dark.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './tanzim-logo.svg';
// import logo_dark from './logo_dark.png';
// import mail_icon from './mail_icon.png';
// import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './tanzim.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import AERDIcon from "../public/company/AERD.jpg";
import EOIcon from "../public/company/English-Olympiad-Global.jpg";
import SBIcon from "../public/company/SB-Site-Icon.png";
import TechTopiaIcon from "../public/company/TechTopia.png";
import AbroadIcon from "../public/company/abroad-company.png";
import EnvoleadIcon from "../public/company/Envolead-Logo.png";
import CYCIcon from "../public/company/cyc-logo.png";
import AIUBEnvIcon from "../public/company/aiub-environment-club.png";
import RoboIcon from "../public/company/roboment.jpg";

export const assets = {
    user_image,
    right_arrow_white,
    logo,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    AERDIcon,
    TechTopiaIcon
};

export const LinkedIn = 'https://www.linkedin.com/in/tanzim-ikram-sheikh/'
export const GitHub = 'https://github.com/tanzim-ikram'
export const Behance = 'https://www.behance.net/tanzimikram'
export const Dribbble = 'https://dribbble.com/tanzim-ikram-sheikh'

export const skillCategories = [
    {
        name: "Design & Frontend",
        items: [
            { name: "Figma", icon: "/icons/Figma.svg" },
            { name: "HTML", icon: "/icons/HTML5.svg" },
            { name: "CSS", icon: "/icons/CSS3.svg" },
            { name: "JavaScript", icon: "/icons/JavaScript.svg" },
            { name: "TypeScript", icon: "/icons/TypeScript.svg" },
            { name: "React", icon: "/icons/React.svg" },
            { name: "Next.js", icon: "/icons/Next.js.svg" },
            { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
            { name: "Bootstrap", icon: "/icons/Bootstrap.svg" }
        ]
    },
    {
        name: "Backend & Databases",
        items: [
            { name: "Node.js", icon: "/icons/Node.js.svg" },
            { name: "Nest.js", icon: "/icons/Nest.js.svg" },
            { name: "PHP", icon: "/icons/PHP.svg" },
            { name: "Flask", icon: "/icons/Flask.svg" },
            { name: "PostgreSQL", icon: "/icons/PostgreSQL.svg" },
            { name: "MySQL", icon: "/icons/MySQL.svg" },
            { name: "JSON", icon: "/icons/JSON.svg" },
            { name: "XML", icon: "/icons/XML.svg" },
            { name: "WordPress", icon: "/icons/WordPress.svg" },
            { name: "WooCommerce", icon: "/icons/WooCommerce.svg" }
        ]
    },
    {
        name: "Python & Data",
        items: [
            { name: "Python", icon: "/icons/Python.svg" },
            { name: "Pandas", icon: "/icons/Pandas.svg" },
            { name: "NumPy", icon: "/icons/NumPy.svg" },
            { name: "Matplotlib", icon: "/icons/Matplotlib.svg" },
            { name: "Anaconda", icon: "/icons/Anaconda.svg" }
        ]
    },
    {
        name: "Embedded & Low-level",
        items: [
            { name: "Arduino", icon: "/icons/Arduino.svg" },
            { name: "C", icon: "/icons/C.svg" },
            { name: "C++", icon: "/icons/CPP.svg" }
        ]
    },
    {
        name: "Tools & Workflow",
        items: [
            { name: "VS Code", icon: "/icons/VS Code.svg" },
            { name: "Git", icon: "/icons/Git.svg" },
            { name: "GitHub", icon: "/icons/GitHub.svg" },
            { name: "NPM", icon: "/icons/NPM.svg" },
            { name: "Postman", icon: "/icons/Postman.svg" }
        ]
    }
]

// Flat list of all skills (used for counts)
export const skills = skillCategories.flatMap((category) => category.items)

export const experiences = [
    {
        company: "The Abroad Company",
        role: "Product Experience Engineer",
        duration: "Dec 2025 - Sep 2026",
        description:
            "Built a mentor recommendation engine and multi-mentor booking system with bundle discounts, plus a unified design system for ApplicationMate.",
        icon: AbroadIcon,
    },
    {
        company: "Envolead Ltd.",
        role: "Digital Innovation & Impact Intern",
        duration: "May 2025 - Oct 2025",
        description:
            "Built a full-stack organizational website with admin dashboard and CMS (Laravel, Vue.js, MySQL) and designed EnvoYouth's mobile app.",
        icon: EnvoleadIcon,
    },
    {
        company: "Connecting Youth for Change (CYC)",
        role: "Senior Member",
        duration: "May 2019 - Dec 2024",
        description:
            "Organized student competitions across Gazipur, ran flood and COVID-19 fundraising, and helped coordinate the USA-Bangladesh Online Exchange Program.",
        icon: CYCIcon,
    },
    {
        company: "Amateur Experimental Rocketry Dhaka (AERD)",
        role: "GUI Coordinator",
        duration: "Mar 2024 - Sep 2024",
        description:
            "Led development of the GUI for CanSat and flight computer systems, supporting the team's rocketry projects.",
        icon: AERDIcon,
    },
    {
        company: "Amateur Experimental Rocketry Dhaka (AERD)",
        role: "A & GNC Sub-Team Member",
        duration: "Feb 2024 - Sep 2024",
        description:
            "Developed an ESP8266 web server for the AERD Launch Box, improving communication and control for rocketry operations.",
        icon: AERDIcon,
    },
    {
        company: "AIUB Environment Club",
        role: "General Member",
        duration: "Oct 2023 - Jul 2024",
        description:
            "As an early member, supported environmental awareness campaigns on social media and helped organize World Environment Day 2024 at AIUB.",
        icon: AIUBEnvIcon,
    },
    {
        company: "Tech Topia",
        role: "Tech Envoy",
        duration: "Nov 2023 - Mar 2024",
        description:
            "Promoted Projukti Bijoy, the organization's first online event, and produced a year-in-review video of its achievements.",
        icon: TechTopiaIcon,
    },
    {
        company: "Roboment R&D Lab",
        role: "Member",
        duration: "Oct 2018 - Apr 2022",
        description:
            "Helped run free robotics camps for students, tested robotics kits, and supported product development, social media and order coordination.",
        icon: RoboIcon,
    },
    {
        company: "Sensor Bazar",
        role: "Co-founder & Website Manager",
        duration: "Oct 2021 - Mar 2022",
        description:
            "Co-founded the company, grew revenue past 65k BDT in 2.5 months, and managed the website, customer support and client relations.",
        icon: SBIcon,
    },
    {
        company: "English Olympiad",
        role: "Campus Ambassador",
        duration: "Jul 2018 - Jan 2022",
        description:
            "Led the Gazipur team, recruiting 250+ participants for Season 2 and helping organize the Gazipur District Round.",
        icon: EOIcon,
    },
]

export const educations = [
    {
        year: "2016 - 2017",
        title: "Secondary School Certificate (SSC)",
        institute: "Rani Bilasmoni Govt. Boys' High School",
        department: "Science",
        gpa: "5.00",
    },
    {
        year: "2018 - 2019",
        title: "Higher Secondary School Certificate (HSC)",
        institute: "Gazipur Cantonment College",
        department: "Science",
        gpa: "5.00",
    },
    {
        year: "2021 - 2025",
        title: "Bachelor of Science (BSc)",
        institute: "American International University-Bangladesh",
        department: "Computer Science and Engineering",
        gpa: "CGPA: 3.82",
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web Development', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX Design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics Design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const works = [
    {
        title: 'Culinary Odyssey',
        subtitle: 'Web Application',
        image: '/Projects/Culinary Odyssey.png',
        link: '#',
    },
    {
        title: 'Virtual Bookshelf',
        subtitle: 'Web Application',
        image: '/Projects/Virtual Bookshelf.png',
        link: '#',
    },
    {
        title: 'Portfolio Website',
        subtitle: 'Web Site',
        image: '/Projects/Portfolio Website.png',
        link: '#',
    },
    {
        title: 'Casa Di Pasta',
        subtitle: 'Web Site',
        image: '/Projects/Casa Di Pasta.png',
        link: '#',
    },
    {
        title: 'FundMe',
        subtitle: 'Web Application',
        image: '/Projects/FundMe.png',
        link: '#',
    },
    {
        title: 'Dhaka Metro Rail',
        subtitle: 'Web Application',
        image: '/Projects/Dhaka Metro Rail.png',
        link: '#',
    },
    {
        title: 'Culinary Odyssey',
        subtitle: 'UI/UX Design',
        image: '/Projects/Culinary Odyssey.png',
        link: 'https://www.figma.com/design/RDsNezKEd4aAjBf8EUWeAQ/Culinary-Odyssey?node-id=0-1&t=EelkiiOyyxCaBID7-1',
    },
    {
        title: 'Dhaka Metro Rail',
        subtitle: 'UI/UX Design',
        image: '/Projects/Dhaka Metro Rail.png',
        link: 'https://www.figma.com/design/BP8lBTqTDgmqjTvr4fvms1/Dhaka-Metro?node-id=0-1&t=EelkiiOyyxCaBID7-1',
    },
    {
        title: 'Messenger App',
        subtitle: 'UI/UX Design',
        image: '/Projects/Messenger App.png',
        link: 'https://www.figma.com/design/DcbuFoUEfXjH1Lnl9ebMf0/Messenger-App?node-id=14-186&t=Wq85HwUEpAWZJvS8-1',
    },
    {
        title: 'Coffee App',
        subtitle: 'UI/UX Design',
        image: '/Projects/Coffee App.png',
        link: 'https://www.figma.com/design/dXWtQQWkbwjZZuQhCa0RT4/Coffee-App?node-id=0-1&t=6GdSdMvLCtUrLNzK-1',
    },
    {
        title: 'Music App',
        subtitle: 'UI/UX Design',
        image: '/Projects/Music App.png',
        link: 'https://www.figma.com/design/4FO8yzqIPQzwK5SHPqlXs6/Neumorphism?node-id=0-1&t=zxp57D2cmfJLh6Ud-1',
    },
]
