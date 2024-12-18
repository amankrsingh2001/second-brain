import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { SlDocs } from "react-icons/sl";
import { CiLink } from "react-icons/ci";
import { CiShoppingTag } from "react-icons/ci";

export const Sidebar = [
  { 
    li: "Tweets", 
    icon: <CiTwitter /> },
  {
    li: "Youtube",
    icon: <AiOutlineYoutube />,
  },
  { 
    li: "Documents",
    icon: <SlDocs /> },
  { 
    li: "Links",
    icon: <CiLink /> },
  { 
    li: "Tags",
    icon: <CiShoppingTag /> },
];
