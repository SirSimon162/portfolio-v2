import React from "react";
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"

function Hero() {
  return (
    <div>
      <div className="absolute z-[-1]">
        <h3 className="text-[25vw] sm:text-[15vw] font-Kanit font-bold text-[#f5eee61e] leading-[21vw] sm:leading-[13vw] select-none	">
          DEVE
        </h3>
        <h3 className="text-[25vw] sm:text-[15vw] font-Kanit font-bold text-[#f5eee61e] leading-[21vw] sm:leading-[13vw] select-none">
          LOPER
        </h3>
      </div>
      <div className="absolute right-0 bottom-0 text-end z-[-1]">
        <h3 className="text-[25vw] sm:text-[15vw] font-Kanit font-bold text-[#f5eee61e] leading-[21vw] sm:leading-[13vw] select-none">
          DESI
        </h3>
        <h3 className="text-[25vw] sm:text-[15vw] font-Kanit font-bold text-[#f5eee61e] leading-[21vw] sm:leading-[13vw] select-none	">
          GNER
        </h3>
      </div>

    {/* Main content starts */}

      <div className="flex flex-col md:flex-row w-screen pt-[11vw] p-[3vw] md:pl-[5vw] md:pr-[10vw] sm:py-[5vw] gap-y-[35px] md:gap-y-[20px] md:justify-between h-screen">
        <div className="flex flex-col items-start md:items-end self-start">
          <h3 className="text-5xl sm:text-7xl font-Kanit font-bold text-[#f5eee6]">
            Welcome.
          </h3>
          <h4 className="text-[25px] sm:text-[48px] font-Kanit font-medium text-[#f5eee6] tracking-wide leading-[40px] sm:leading-[50px]">
            This is Anmol
          </h4>
          <h5 className="text-[15px] sm:text-[19px] font-Kanit font-regular text-[#f5eee6] tracking-[7px] leading-[13px] sm:leading-[26px] ">
            Pattnayak
          </h5>
          <p className="text-[15px] sm:text-[17px] font-Kanit font-regular text-[#f5eee6] w-[300px] mt-[10px] sm:mt-[5px] text-start md:text-end">
            I am a Web Developer and Graphic Designer from Bhubaneswar, Odisha, India
            majoring in civil engineering at National Institute of Technology,
            Rourkela. I use my design and development skills to create visually
            appealing websites.
          </p>
        </div>
        <div className="flex flex-col justify-end w-[20vw] min-w-[200px] sm:h-[20vw] min-h-[190px] border-2 border-[#f5eee6] self-end items-end md:items-start justify-self-end mb-[5vw] p-[20px] mt-[5px] md:mt-[0px]">
          <ul className="text-[#f5eee6] font-Kanit font-normal text-[15px] sm:text-[20px] text-end md:text-start">
            <li>About Me</li>
            <li>Tech Stack</li>
            <li>Projects</li>
            <li>Designs</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[-75px] md:right-[15px] md:top-[28px] flex flex-row md:flex-col text-[#f5eee6] w-screen md:w-auto md:h-screen items-center justify-center text-3xl gap-y-5 pt-6 sm:px-0 px-5 gap-x-2">
        <div className="md:h-[30%] h-[5px] rounded-lg bg-[#f5eee6] md:w-[5px] w-[20%]"></div>
        <AiFillGithub className="cursor-pointer"/>
        <AiFillLinkedin className="cursor-pointer"/>
        <AiFillTwitterCircle className="cursor-pointer"/>
        <div className="md:h-[30%] h-[5px] rounded-lg bg-[#f5eee6] md:w-[5px] w-[20%]"></div>
      </div>
    </div>
  );
}

export default Hero;
