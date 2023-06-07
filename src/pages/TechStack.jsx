import React from "react";
import Heading from "../components/shared/Heading";
import Tech from "../components/TechStack/Tech";

function TechStack() {
  return (
    <div>
      <Heading>Tech Stack</Heading>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-9 py-8 w-screen ml-[30px] pr-[30px]">
        <Tech icon={"html"}/>
        <Tech icon={"css"}/>
        <Tech icon={"js"}/>
        <Tech icon={"tailwind"}/>
        <Tech icon={"daisyui"}/>
        <Tech icon={"react"}/>
        <Tech icon={"next"}/>
        <Tech icon={"git"}/>
        <Tech icon={"github"}/>
        <Tech icon={"markdown"}/>
        <Tech icon={"firebase"}/>
        <Tech icon={"bootstrap"}/>
        <Tech icon={"python"}/>
        <Tech icon={"illustrator"}/>
        <Tech icon={"photoshop"}/>
        <Tech icon={"figma"}/>
      </div>
    </div>
  );
}

export default TechStack;
