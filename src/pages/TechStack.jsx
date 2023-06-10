import React from "react";
import Heading from "../components/shared/Heading";
import Tech from "../components/TechStack/Tech";
import { TechStackContainer } from "../styles/pagesStyles/techstack.styles";

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
  ];

  return (
    <>
      <Heading>Tech Stack</Heading>
      <TechStackContainer>
        {techStackIcons.map((icon, index) => (
          <Tech key={index} icon={icon} />
        ))}
      </TechStackContainer>
    </>
  );
}

export default TechStack;
