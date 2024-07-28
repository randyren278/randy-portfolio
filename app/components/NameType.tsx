"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NameType = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2000); // After 2 seconds, change isFirstLoad to false

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <section className="lg:py-16 flex justify-center items-center font-sans">
      <div className="grid grid-cols-1 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center"
        >
          <div className="h-48 flex items-center justify-center">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-white">I'm{" "}</span>
              <span className="text-transparent bg-clip-text bg-image-text">
                Randy Ren
              </span>
            </h1>
          </div>
          <p className="text-neutral-100 text-base sm:text-lg mb-6 lg:text-xl">
            <span className="block">UBC Engineering 27'</span>
          </p>
          <div>
            <Link
              href="mailto:randyren278@gmail.com"
              className="px-0.5 inline-block py-0.5 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br bg-neutral-50 hover:bg-neutral-200 hover:scale-105 transition-transform duration-200 text-white"
            >
              <span className="block bg-[#121212] hover:bg-neutral-900 rounded-full px-5 py-2">
                Hire Me
              </span>
            </Link>
            <Link
              href="/randyresume.pdf" // Update this with your resume link
              className="px-0.5 inline-block py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br bg-neutral-50 via-blue-500  hover:bg-neutral-200 hover:scale-105 transition-transform duration-200 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-neutral-900 rounded-full px-5 py-2">
                Resume
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NameType;
