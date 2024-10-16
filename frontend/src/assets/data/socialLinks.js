import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";

export const socialLink = [
  {
    id: "01",
    path: "https://www.youtube.com/mnaofficialbd",
    icon: <AiFillYoutube className="group-hover: text-black w-4 h-5" />,
  },
  {
    id: "02",
    path: "https://github.com/mnaofficialbd",
    icon: <AiFillGithub className="group-hover: text-black w-4 h-5" />,
  },
  {
    id: "03",
    path: "https://www.instagram.com/mnaofficialbd",
    icon: <AiOutlineInstagram className="group-hover: text-black w-4 h-5" />,
  },
  {
    id: "04",
    path: "https://www.linkedin.com/in/mnaofficialbd",
    icon: <RiLinkedinBoxFill className="group-hover: text-black w-4 h-5" />,
  },
];
