"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SparklesCore } from "./sparkles";

const NameType = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2000); // After 2 seconds, change isFirstLoad to false

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <section className="lg:py-16 flex flex-col items-center justify-center font-sans">
      <div className="grid grid-cols-1 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center"
        >
          <div className="h-48 flex items-center justify-center relative">
            <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold z-10">
              <span className="text-white">I'm </span>
              <span className="text-transparent bg-clip-text bg-image-text">
                Randy Ren
              </span>
            </h1>
          </div>
          <div className="relative w-full max-w-[40rem] h-40 mt-[-4.25rem] mb-10">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent h-[2px] w-3/4 blur-sm z-0" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent h-px w-3/4 z-0" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[5px] w-1/4 blur-sm z-0" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-px w-1/4 z-0" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full z-0"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] z-0"></div>
          </div>
          <p className="text-neutral-300 text-base sm:text-lg mb-6 lg:text-0xl">
            <span className="block">UBC Engineering 27'</span>
          </p>
          <div className="flex flex-row items-center justify-center gap-4">
            <Link
              href="mailto:randyren278@gmail.com"
              className="inline-block py-0.5 px-0.5 rounded-full bg-gradient-to-br bg-neutral-400 hover:bg-neutral-200 hover:scale-105 transition-transform duration-200 text-white"
              style={{ width: "100px" }}
            >
              <span className="block bg-[#121212] hover:bg-neutral-900 rounded-full px-5 py-2 text-center">
                Hire Me
              </span>
            </Link>
            <Link
              href="/randyresume.pdf" // Update this with your resume link
              className="inline-block py-0.5 px-0.5 rounded-full bg-gradient-to-br bg-neutral-400 hover:bg-neutral-200 hover:scale-105 transition-transform duration-200 text-white"
              style={{ width: "100px" }}
            >
              <span className="block bg-[#121212] hover:bg-neutral-900 rounded-full px-5 py-2 text-center">
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
