"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Weather App",
    description: "A weather app with an intuitive and modern design, featuring real tile updates, 5-day forecast, and much more.",
    image: "/images/1.png",
    gitUrl: "https://github.com/randyren278/weather-app.git",
    previewUrl: "https://randy-weather-app.vercel.app/",
  },
  {
    id: 2,
    title: "Wordle App",
    description: "A popular word guessing game with a built in solving algorithim",
    image: "/images/2.png",
    gitUrl: "https://github.com/randyren278/Wordle.git",
    previewUrl: "https://randy-eldrow.vercel.app/",
  },
  {
    id: 3,
    title: "ComputerVision-App",
    description: "The application captures images from a webcam, detects faces, and recognizes them from a database.",
    image: "/images/3.png",
    gitUrl: "https://github.com/randyren278/computervision.git",
  },
  {
    id: 4,
    title: "3D-Modeller",
    description: "This 3D modeller program allows you to create, manipulate, and view 3D objects in a virtual environment.",
    image: "/images/4.png",
    gitUrl: "https://github.com/randyren278/3D-Modeller.git",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "This application is a personal portfolio website, showcasing skills, projects, and background. This full-stack application features an interative and visually appealing design.",
    image: "/images/5.png",
    gitUrl: "https://github.com/randyren278/randy-portfolio.git",
    previewUrl: "https://randyren.vercel.app/",
  },
  {
    id: 6,
    title: "Credit Risk Analysis System",
    description: "This application is designed to analyze the credit risk of customers. This system leverages a database to store customer data, credit histories, and analysis results.",
    image: "/images/6.png",
    gitUrl: "https://github.com/randyren278/CreditRiskAnalysis.git",
  },
];

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-left text-4xl font-bold text-white mt-4 mb-8 md:mb-12 font-sans">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
