import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

// Matches the `label` of each link in profile.links
export const socialIcons: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
};