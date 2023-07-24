import React from "react";
import Heading from "../components/shared/Heading";
import Tech from "../components/TechStack/Tech";
import { TechStackContainer } from "../styles/pagesStyles/techstack.styles";

import { motion } from "framer-motion";

function TechStack() {
  const techStackIcons = [
    "html",
    "css",
    "js",
    "tailwind",
    "daisyui",
    "react",
    "next",
    "node",
    "express",
    "mongo",
    "git",
    "github",
    "markdown",
    "firebase",
    "bootstrap",
    "python",
    "illustrator",
    "photoshop",
    "figma",
    "notion",
  ];

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Heading>Tech Stack</Heading>
      <TechStackContainer>
        {techStackIcons.map((icon, index) => (
          <Tech key={index} icon={icon} />
        ))}
      </TechStackContainer>
    </motion.div>
  );
}

export default TechStack;
