"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SparklesCore } from "./sparkles";

const NameType = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2000); // After 2 seconds, change isFirstLoad to false

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    }; // Cleanup the timer and event listener on unmount
  }, []);

  const maskImageStyle = isSmallScreen
    ? { WebkitMaskImage: "radial-gradient(175px 100px at top, transparent 20%, white)" }
    : { WebkitMaskImage: "radial-gradient(350px 200px at top, transparent 20%, white)" };

  return (
    <section className="lg:py-16 flex flex-col items-center justify-center font-sans">
      <div className="grid grid-cols-1 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0, filter: "brightness(1.8) contrast(1.5)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(1.8) contrast(1.5)" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="place-self-center"
        >
          <div className="h-48 flex items-center justify-center relative">
            <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold z-10">
              <span className="text-white">I'm </span>
              <span
                className="text-transparent bg-clip-text bg-image-text"
                style={{ filter: "brightness(1.8) contrast(1.5)" }}
              >
                Randy Ren
              </span>
            </h1>
          </div>
          <div className={`relative w-full ${isSmallScreen ? 'max-w-xs' : 'max-w-[40rem]'} h-40 mt-[-4.55rem] mb-10`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="w-full h-full z-0"
            >
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </motion.div>

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black" style={maskImageStyle}></div>
          </div>
          <p className="text-neutral-300 text-base sm:text-lg mb-6 lg:text-0xl">
            <span className="block">UBC Engineering 27'</span>
          </p>
          <div className="flex flex-row items-center justify-center">
            <Link
              href="mailto:randyren278@gmail.com"
              className="inline-block py-0.5 px-0.5 rounded-full bg-gradient-to-br bg-neutral-400 hover:bg-neutral-200 hover:scale-105 transition-transform duration-200 text-white"
              style={{ width: "100px" }}
            >
              <span className="block bg-[black] hover:bg-neutral-900 rounded-full px-5 py-2 text-center">
                Hire Me
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NameType;
