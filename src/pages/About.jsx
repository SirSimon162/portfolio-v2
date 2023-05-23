import React from "react";
import Heading from "../components/shared/Heading";
import { FaSchool } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";

function About() {
  return (
    <div>
      <Heading>About Me</Heading>
      <div className="flex flex-col gap-[30px] py-8 w-screen md:justify-between ml-[30px] pr-[30px]">
        <p className="text-[#f5eee6] text-lg font-Kanit w-[90%]">
          Hey there!
          This is Anmol Pattnayak, a web developer studying at NIT Rourkela, majoring in civil engineering. While my academic background may seem unconventional for a web developer, I've found my true passion lies in the world of web development and graphic design. Blending my engineering knowledge with my artistic instincts, I have honed my skills to create captivating websites. With this philosophy in mind, I strive to craft websites that seamlessly merge aesthetics with functionality. Apart from my development prowess, I am also an enthusiastic tech blogger. Through my blogs, I share my insights on the latest technological trends and advancements, aiming to simplify complex concepts for my readers. Also, I love participating in hackathons. With my unquenchable thirst for knowledge, I strive to make a lasting impact in the digital world through my web development and graphic design skills.        </p>
        <ol className="items-center sm:flex">
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#f5eee6] rounded-full ring-8 sm:ring-8 shrink-0 ring-[#1a1a1a]">
                <FaSchool />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-[#f5eee6] w-[90%] sm:w-auto">
                Vivekananda Shiksha Kendra
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                -2018
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All India Secondary School Examination, Bhubaneswar
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#f5eee6] rounded-full ring-8 sm:ring-8 shrink-0 ring-[#1a1a1a]">
                <FaSchool />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-[#f5eee6] w-[90%] sm:w-auto">
                Venkateswar English Medium School, Bhubaneswar
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2018-2020
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All India Senior Secondary School Examination
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#f5eee6] rounded-full ring-8 sm:ring-8 shrink-0 ring-[#1a1a1a]">
                <IoIosSchool />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-[#f5eee6] w-[90%] sm:w-auto">
                National Institute of Technology, Rourkela
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2021-2025 (expected)
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Major in Civil Engineering
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
