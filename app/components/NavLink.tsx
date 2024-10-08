import Link from "next/link";
import { FC } from "react";

// Define the type for the props
interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white font-sans"
    >
      {title}
    </Link>
  );
};

export default NavLink;
