"use client";
import React from "react";
import { Carousel, Card } from "./apple-cards-carousel"; // Adjust the import path if necessary
import Media from "./Media";
import Image from "next/image";
import Skill from "./Skill";
import { delay, easeOut, motion } from "framer-motion";
import { ReactNode } from "react";


interface DummyContentProps {
  children: ReactNode;
}

const DummyContent: React.FC<DummyContentProps> = ({ children }) => {
  return (
    <div className="bg-neutral-800 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      {children}
    </div>
  );
};

const data = [
  {
    category: "Introduction",
    title: "Media",
    src: "/images/carousel1.png", // Path to your image
    content: (
      <div className="text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/images/myself.png"
            alt="Image of myself"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div className="flex mt-5">
            <Media />
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "Introduction",
    title: "About Me",
    src: "/images/carousel2.png", // Placeholder image, replace with your desired image
    content: (
      <DummyContent>
        <p className="text-neutral-400 dark:text-neutral-400 text-base md:text-xl font-sans">
        Hi! My name is Randy, and I'm currently a second-year student at the University of British Columbia pursuing a Bachelor's degree in Electrical Engineering. I have a passion for developing innovative coding projects that solve real-world problems. I have experience working with various programming languages and frameworks, including Java, Python, C++, JavaScript, and React. Beyond coding, I am involved in track and field and love the outdoors.
        </p>
      </DummyContent>
    ),
  },
  {
    category: "Skills",
    title: "Languages",
    src: "/images/carousel3.png", // Placeholder image, replace with your desired image
    content: (
      <DummyContent>
        <div className="flex flex-wrap justify-center">
          <Skill imageURL="/images/java.png" text="Java" />
          <Skill imageURL="/images/python.png" text="Python" />
          <Skill imageURL="/images/cpp.png" text="C++" />
          <Skill imageURL="/images/js.png" text="JavaScript" />
          <Skill imageURL="/images/ts.png" text="TypeScript" />
          <Skill imageURL="/images/SQL.png" text="SQL" />
          <Skill imageURL="/images/html.png" text="HTML5" />
          <Skill imageURL="/images/css.png" text="CSS3" />
        </div>
      </DummyContent>
    ),
  },
  {
    category: "Skills",
    title: "Frameworks and Tools",
    src: "/images/carousel4.png", // Placeholder image, replace with your desired image
    content: (
      <DummyContent>
        <div className="flex flex-wrap justify-center">
          <Skill imageURL="/images/react.png" text="React" />
          <Skill imageURL="/images/node.png" text="Node" />
          <Skill imageURL="/images/next.png" text="Next.js" />
          <Skill imageURL="/images/tailwind.png" text="Tailwind CSS" />
          <Skill imageURL="/images/git.png" text="Git" />
          <Skill imageURL="/images/github.png" text="GitHub" />
          <Skill imageURL="/images/aws.png" text="AWS" />
          <Skill imageURL="/images/mongoDB.png" text="MongoDB" />
          <Skill imageURL="/images/figma.png" text="Figma" />
          <Skill imageURL="/images/blender.png" text="Blender" />
          <Skill imageURL="/images/web3.png" text="Web3" />
          <Skill imageURL="/images/Fusion360.png" text="Fusion360" />
        </div>
      </DummyContent>
    ),
  },
  {
    category: "Background",
    title: "Education",
    src: "/images/carousel7.png", // Placeholder image, replace with your desired image
    content: (
      <DummyContent>
        <div className="text-left">
          <p className="text-neutral-50 dark:text-neutral-50 md:text-xl font-bold font-sans">
            University of British Columbia
          </p>
          <p className="text-neutral-400 dark:text-neutral-400 md:text-xl font-sans">
            Bachelor&apos;s of Applied Science in Electrical Engineering
          </p>
          <p className="text-neutral-400 dark:text-neutral-400 md:text-xl font-sans">
            Vancouver, BC, Canada · Sept 2023 - Apr 2027 (Expected)
          </p>
        </div>
      </DummyContent>
    ),
  },
];

const About: React.FC = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="about" className="w-full h-full py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut",delay:1 }}
        className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-neutral-200 font-sans"
      >
        Get to know me.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease:"easeOut" }}
      >
        <Carousel items={cards} />
      </motion.div>
    </div>
  );
};

export default About;
