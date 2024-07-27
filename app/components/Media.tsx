import React from "react";
import { BiLogoInstagram, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { TbMail } from "react-icons/tb";

const Media = () => {
  return (
    <>
      <a href="mailto:randyren278@gmail.com">
        <TbMail
          className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-blue-600"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/randyren278/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoLinkedin className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-blue-600" />
      </a>
      <a
        href="https://github.com/randyren278"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoGithub className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-blue-600" />
      </a>
    </>
  );
};

export default Media;
