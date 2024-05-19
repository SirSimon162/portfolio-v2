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
  SiNotion,
  SiNextui,
} from "react-icons/si";

const techStack = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <DiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "DaisyUI", icon: <SiDaisyui /> },
  { name: "Next UI", icon: <SiNextui /> },
  { name: "Markdown", icon: <FaMarkdown /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Illustrator", icon: <SiAdobeillustrator /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Notion", icon: <SiNotion /> },
];

function TechStack() {
  return (
    <div className="pb-5 flex flex-col gap-4 px-2">
      <div>
        <p className="text-2xl md:text-3xl font-bold text-start">
          My Tech Toolbox 🔨
        </p>
        <p className="text-sm md:text-lg font-light">
          No Cap, My Stack is Busted
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 border-[1px] border-neutral px-3 py-2 rounded-md"
          >
            <div className="text-xl">{tech.icon}</div>
            <div className="text-lg">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
