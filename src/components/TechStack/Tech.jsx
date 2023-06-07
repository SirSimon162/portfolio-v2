import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaMarkdown, FaBootstrap, FaPython,  } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss, SiDaisyui, SiNextdotjs, SiFirebase, SiAdobeillustrator, SiAdobephotoshop, SiFigma } from "react-icons/si";

function Tech({ icon }) {
  return (
    <div className="text-white">
      {icon === "html" ? (
        <FaHtml5 />
      ) : icon === "css" ? (
        <FaCss3Alt />
      ) : icon === "js" ? (
        <DiJavascript />
      ) : icon === "tailwind" ? (
        <SiTailwindcss />
      ) : icon === "daisyui" ? (
        <SiDaisyui />
      ) : icon === "react" ? (
        <FaReact />
      ) : icon === "next" ? (
        <SiNextdotjs />
      ) : icon === "git" ? (
        <FaGitAlt />
      ) : icon === "github" ? (
        <FaGithub/>
      ) : icon === 'markdown' ? (
        <FaMarkdown/>
      ) : icon === 'firebase' ? (
        <SiFirebase/>
      ) : icon === 'bootstrap' ? (
        <FaBootstrap/>
      ) : icon === 'python' ? (
        <FaPython/>
      ) : icon === 'illustrator' ? (
        <SiAdobeillustrator/>
      ) : icon === 'photoshop' ? (
        <SiAdobephotoshop/>
      ) : icon === 'figma' ? (
        <SiFigma/>
      ): null}
    </div>
  );
}

export default Tech;
