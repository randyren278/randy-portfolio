// src/components/ProjectCard.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"; // Updated globe icon
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

type ProjectCardProps = {
  title: string;
  description: string;
  gitUrl: string;
  previewUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex flex-col justify-between dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 rounded-xl relative h-[30rem]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 rounded-xl overflow-hidden"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black rounded-xl"
              colors={[
                [84, 160, 255],

                [72,219, 251], 
              ]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex-grow text-white rounded-b-xl mt-3 py-6 px-4 font-sans">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      <div className="relative z-20 mt-4 flex justify-center gap-4">
        <Link
          href={gitUrl}
          className="text-[#ADB7BE] hover:text-white"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        {previewUrl && (
          <Link
            href={previewUrl}
            className="text-[#ADB7BE] hover:text-white"
          >
            <FontAwesomeIcon icon={faGlobeAmericas} size="2x" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
