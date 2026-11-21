import { LinkedIn, GitHub, Behance, Dribbble } from "@/assets/assets";
import {
  FaLinkedin,
  FaGithubSquare,
  FaBehanceSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const socials = [
  { label: "LinkedIn", href: LinkedIn, Icon: FaLinkedin },
  { label: "GitHub", href: GitHub, Icon: FaGithubSquare },
  { label: "Behance", href: Behance, Icon: FaBehanceSquare },
  { label: "Dribbble", href: Dribbble, Icon: FaDribbbleSquare },
];

const SocialLinks = ({ size = 24, className = "" }) => (
  <div className={`flex flex-row items-center gap-4 ${className}`}>
    {socials.map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon
          size={size}
          className="hover:scale-[1.2] duration-100 hover:text-rose-500"
        />
      </a>
    ))}
  </div>
);

export default SocialLinks;
