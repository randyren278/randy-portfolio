import React from "react";
import { BiLogoInstagram, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { TbMail } from "react-icons/tb";

const Media = () => {
  return (
    <div className="flex space-x-2">
      <a href="mailto:randyren278@gmail.com">
        <TbMail className="text-white w-10 h-10 mx-1 cursor-pointer transition-transform duration-200 transform hover:scale-110 hover:text-white hover:bg-clip-text " />
      </a>
      <a
        href="https://www.linkedin.com/in/randyren278/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoLinkedin className="text-white w-10 h-10 mx-1 cursor-pointer transition-transform duration-200 transform hover:scale-110 hover:text-white hover:bg-clip-text "/>
      </a>
      <a
        href="https://github.com/randyren278"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoGithub className="text-white w-10 h-10 mx-1 cursor-pointer transition-transform duration-200 transform hover:scale-110 hover:text-white hover:bg-clip-text " />
      </a>
    </div>
  );
};

export default Media;
