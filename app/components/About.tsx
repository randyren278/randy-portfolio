"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Skill from "./Skill"; // Import the Skill component
import Media from "./Media"; // Import Media component

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
        <Skill imageURL="/images/SQL.png" text="SQL" />
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
        <Skill imageURL="/images/mongoDB.png" text="MongoDB" />
        <Skill imageURL="/images/figma.png" text="Figma" />
        <Skill imageURL="/images/blender.png" text="Blender" />
        <Skill imageURL="/images/web3.png" text="Web3" />
        <Skill imageURL="/images/Fusion360.png" text="Fusion360" />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="text-left">
        <p className="text-[white] text-xl font-bold">
          University of British Columbia
        </p>
        <p className="text-[white] text-base">
          Bachelor&apos;s of Applied Science in Electrical Engineering
        </p>
        <p className="text-[white] text-base">
          Vancouver, BC, Canada · Sept 2023 - Apr 2027 (Expected)
        </p>
      </div>
    )
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
        <div className="flex flex-col min-w-[300px] mx-auto">
          <img
            src="/images/myself.png"
            alt="image of myself"
            className="rounded-full w-[300px] h-[300px]"
          />
          <div className="flex mx-auto mt-5">
            <Media />
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi! My name is Randy and I'm currently a second-year student at the University of British Columbia pursuing a Bachelor's degree in Engineering. I also enjoy hackathons and run track and field.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("frameworks-tools")} active={tab === "frameworks-tools"}>
              Frameworks and Tools
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
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
