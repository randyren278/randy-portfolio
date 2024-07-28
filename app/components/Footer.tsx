import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-screen mt-10 pb-3 font-sans">
      <div className="flex text-[white] h-fit w-fit mx-auto mt-10">
        <BiCopyright className="mr-2 my-auto w-3 h-3" />
        <div className="w-fit text-s">Randy Ren All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
