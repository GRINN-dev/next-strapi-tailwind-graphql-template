import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaLinkedinIn,
  FaYoutube,
  FaVimeo,
  FaPinterest,
  FaGooglePlus,
} from "react-icons/fa";

export const getSocialIcon = (name: string) => {
  if (name === "Facebook") {
    return <FaFacebook className="w-6 h-6" aria-hidden="true" />;
  }
  if (name === "Instagram") {
    return <FaInstagram className="w-6 h-6" aria-hidden="true" />;
  }
  if (name === "Twitter") {
    return <FaTwitter className="w-6 h-6" aria-hidden="true" />;
  }
  if (name === "GitHub") {
    return <FaGithub className="w-6 h-6" aria-hidden="true" />;
  }
  if (name === "Dribbble") {
    return <FaDribbble className="w-6 h-6" aria-hidden="true" />;
  }
  if (name === "LinkedIn") {
    return <FaLinkedinIn className="w-6 h-6" aria-hidden="true" />;
  }
  if (name === "Youtube") {
    return <FaYoutube className="w-6 h-6" aria-hidden="true" />;
  }
  if (name === "Vimeo") {
    return <FaVimeo className="w-6 h-6" aria-hidden="true" />;
  }
  if (name === "Pinterest") {
    return <FaPinterest className="w-6 h-6" aria-hidden="true" />;
  }
  if (name === "Google+") {
    return <FaGooglePlus className="w-6 h-6" aria-hidden="true" />;
  }
  return "";
};
