import { useState } from "react";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";
import { TbMail } from "react-icons/tb";

const Media = () => {
  const [openEmail, setOpenEmail] = useState<boolean>(false);
  const [openDiscord, setOpenDiscordModal] = useState<boolean>(false);

  return (
    <>
      <TbMail
        className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-blue-600"
        onClick={() => setOpenEmail(true)}
      />
      <a
        href="https://www.linkedin.com/in/randyren278/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoLinkedin className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-blue-600" />
      </a>
      <a href="https://github.com/randyren278" target="_blank" rel="noopener noreferrer">
        <BiLogoGithub className="text-white w-10 h-10 mx-1 hover:cursor-pointer hover:text-blue-600" />
      </a>
      {/* Implement PopupModal for email a*/}
    </>
  );
};

export default Media;
