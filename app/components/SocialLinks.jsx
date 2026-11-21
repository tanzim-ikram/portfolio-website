import {
  LinkedIn,
  GitHub,
  X,
  Facebook,
  Instagram,
  YouTube,
} from "@/assets/assets";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socials = [
  { label: "LinkedIn", href: LinkedIn, Icon: FaLinkedin },
  { label: "GitHub", href: GitHub, Icon: FaGithubSquare },
  { label: "X", href: X, Icon: FaSquareXTwitter },
  { label: "Facebook", href: Facebook, Icon: FaFacebookSquare },
  { label: "Instagram", href: Instagram, Icon: FaInstagramSquare },
  { label: "YouTube", href: YouTube, Icon: FaYoutubeSquare },
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
