import React from "react";
import Image from "next/image";

interface SkillProps {
  imageURL: string;
  text: string;
}

const Skill: React.FC<SkillProps> = ({ imageURL, text }) => {
  const needsWhiteBackground = text === "Next.js" || text === "GitHub";

  return (
    <div className="flex flex-col items-center m-2 transition-transform duration-300 hover:scale-110">
      <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-opacity-50 bg-transparent">
        {needsWhiteBackground && (
          <div className="absolute inset-0 m-auto w-9 h-9 bg-white rounded-full"></div>
        )}
        <Image src={imageURL} alt={text} width={40} height={40} className="relative" />
      </div>
      <span className="text-white mt-2">{text}</span>
    </div>
  );
};

export default Skill;
