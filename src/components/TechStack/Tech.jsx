import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaMarkdown,
  FaBootstrap,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  SiTailwindcss,
  SiDaisyui,
  SiNextdotjs,
  SiFirebase,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import {
  TechContainer,
  TechName,
} from "../../styles/componentStyles/tech.styles";

function Tech({ icon }) {
  let IconComponent = null;
  let iconText = "";

  switch (icon) {
    case "html":
      IconComponent = FaHtml5;
      iconText = "HTML";
      break;
    case "css":
      IconComponent = FaCss3Alt;
      iconText = "CSS";
      break;
    case "js":
      IconComponent = DiJavascript;
      iconText = "JavaScript";
      break;
    case "tailwind":
      IconComponent = SiTailwindcss;
      iconText = "Tailwind CSS";
      break;
    case "daisyui":
      IconComponent = SiDaisyui;
      iconText = "DaisyUI";
      break;
    case "react":
      IconComponent = FaReact;
      iconText = "React";
      break;
    case "next":
      IconComponent = SiNextdotjs;
      iconText = "Next.js";
      break;
    case "git":
      IconComponent = FaGitAlt;
      iconText = "Git";
      break;
    case "github":
      IconComponent = FaGithub;
      iconText = "GitHub";
      break;
    case "markdown":
      IconComponent = FaMarkdown;
      iconText = "Markdown";
      break;
    case "firebase":
      IconComponent = SiFirebase;
      iconText = "Firebase";
      break;
    case "bootstrap":
      IconComponent = FaBootstrap;
      iconText = "Bootstrap";
      break;
    case "python":
      IconComponent = FaPython;
      iconText = "Python";
      break;
    case "illustrator":
      IconComponent = SiAdobeillustrator;
      iconText = "Adobe Illustrator";
      break;
    case "photoshop":
      IconComponent = SiAdobephotoshop;
      iconText = "Adobe Photoshop";
      break;
    case "figma":
      IconComponent = SiFigma;
      iconText = "Figma";
      break;
    case "node":
      IconComponent = FaNodeJs;
      iconText = "Node.js";
      break;
    case "mongo":
      IconComponent = SiMongodb;
      iconText = "MongoDB";
      break;
    case "express":
      IconComponent = SiExpress;
      iconText = "Express.js";
      break;
    default:
      break;
  }

  if (IconComponent) {
    return (
      <TechContainer>
        <IconComponent />
        <TechName>{iconText}</TechName>
      </TechContainer>
    );
  }

  return null;
}

export default Tech;
