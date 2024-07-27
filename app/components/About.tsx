"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Skill from "./Skill"; // Import the Skill component

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap justify-center">
        <Skill imageURL="/images/java.png" text="Java" />
        <Skill imageURL="/images/python.png" text="Python" />
        <Skill imageURL="/images/cpp.png" text="C++" />
        <Skill imageURL="/images/js.png" text="JavaScript" />
        <Skill imageURL="/images/ts.png" text="TypeScript" />
        <Skill imageURL="/images/sql.png" text="SQL" />
        <Skill imageURL="/images/html.png" text="HTML5" />
        <Skill imageURL="/images/css.png" text="CSS3" />
      </div>
    ),
  },
  {
    title: "Frameworks and Tools",
    id: "frameworks-tools",
    content: (
      <div className="flex flex-wrap justify-center">
        <Skill imageURL="/images/react.png" text="React" />
        <Skill imageURL="/images/node.png" text="Node" />
        <Skill imageURL="/images/next.png" text="Next.js" />
        <Skill imageURL="/images/tailwind.png" text="Tailwind CSS" />
        <Skill imageURL="/images/git.png" text="Git" />
        <Skill imageURL="/images/github.png" text="GitHub" />
        <Skill imageURL="/images/aws.png" text="AWS" />
        <Skill imageURL="/images/mongodb.png" text="MongoDB" />
        <Skill imageURL="/images/figma.png" text="Figma" />
        <Skill imageURL="/images/blender.png" text="Blender" />
        <Skill imageURL="/images/web3.png" text="Web3" />
        <Skill imageURL="/images/fusion360.png" text="Fusion360" />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="text-left">
        <p className="text-[white] text-2xl">
          University of British Columbia
        </p>
        <p className="text-[#ededfd] text-base">
          Bachelor&apos;s of Applied Science in Electrical Engineering
        </p>
        <p className="text-[#8b94c1]">
          Vancouver, BC, Canada · Sept 2023 - Apr 2027 (Expected)
        </p>
      </div>
    ),
  },
];

const About: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center items-center w-full h-full bg-gray-800 rounded-lg p-4">
          <span className="text-8xl">😊</span>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-1lg">
            Hi! I&apos;m Randy Ren, a second-year student at the University of British Columbia pursuing a Bachelor&apos;s degree in Engineering. I am passionate about software development and machine learning. I also enjoy participating in hackathons and running track and field. I am always eager to learn new technologies and collaborate with others to create innovative solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks-tools")}
              active={tab === "frameworks-tools"}
            >
              Frameworks and Tools
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
