import React from "react";
import Heading from "../components/shared/Heading";
import Tech from "../components/TechStack/Tech";

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
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-9 py-8 w-screen ml-[30px] pr-[70px]">
        {techStackIcons.map((icon, index) => (
          <Tech key={index} icon={icon} />
        ))}
      </div>
    </>
  );
}

export default TechStack;
