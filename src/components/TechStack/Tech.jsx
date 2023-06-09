import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaMarkdown, FaBootstrap, FaPython, FaNodeJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss, SiDaisyui, SiNextdotjs, SiFirebase, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiMongodb, SiExpress } from "react-icons/si";

function Tech({ icon }) {
  let IconComponent = null;

  switch (icon) {
    case "html":
      IconComponent = FaHtml5;
      break;
    case "css":
      IconComponent = FaCss3Alt;
      break;
    case "js":
      IconComponent = DiJavascript;
      break;
    case "tailwind":
      IconComponent = SiTailwindcss;
      break;
    case "daisyui":
      IconComponent = SiDaisyui;
      break;
    case "react":
      IconComponent = FaReact;
      break;
    case "next":
      IconComponent = SiNextdotjs;
      break;
    case "git":
      IconComponent = FaGitAlt;
      break;
    case "github":
      IconComponent = FaGithub;
      break;
    case "markdown":
      IconComponent = FaMarkdown;
      break;
    case "firebase":
      IconComponent = SiFirebase;
      break;
    case "bootstrap":
      IconComponent = FaBootstrap;
      break;
    case "python":
      IconComponent = FaPython;
      break;
    case "illustrator":
      IconComponent = SiAdobeillustrator;
      break;
    case "photoshop":
      IconComponent = SiAdobephotoshop;
      break;
    case "figma":
      IconComponent = SiFigma;
      break;
    case "node":
      IconComponent = FaNodeJs;
      break;
    case "mongo":
      IconComponent = SiMongodb;
      break;
    case "express":
      IconComponent = SiExpress;
      break;
    default:
      break;
  }

  if (IconComponent) {
    return (
      <div className="text-white border-white border-[2px] text-3xl p-3 rounded-xl">
        <IconComponent />
      </div>
    );
  }
  
  return null;
}

export default Tech;
