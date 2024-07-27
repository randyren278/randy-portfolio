"use client";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const NameType = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFirstLoad(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="lg:py-16 flex justify-center items-center">
      <div className="grid grid-cols-1 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-white">I'm{" "}</span>
            <TypeAnimation
              sequence={[
                "Randy",
                isFirstLoad ? 1800 : 1000, // Stay on "Randy" for 3 seconds on first load
                "an engineering student",
                1000,
                "a full stack developer",
                1000,
                "a track athlete",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            <span className="block">UBC Engineering 27'</span>
            Hi, I'm Randy! I am an electrical engineering student at UBC and a
            software developer that loves to innovate!
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 to-purple-600 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-purple-600 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NameType;
