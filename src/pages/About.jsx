import React from "react";
import Heading from "../components/shared/Heading";
import { FaSchool } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import {
  AboutContainer,
  Description,
  EducationList,
  Education,
  Line,
  Logo,
  LogoContainer,
  EducationDetails,
  Institute,
  Timeline,
  EducationDetail,
} from "../styles/pagesStyles/about.styles";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Heading>About Me</Heading>
      <AboutContainer>
        <Description>
          Hey there! This is Anmol Pattnayak, a web developer studying at NIT
          Rourkela, majoring in civil engineering. While my academic background
          may seem unconventional for a web developer, I've found my true
          passion lies in the world of web development and graphic design.
          Blending my engineering knowledge with my artistic instincts, I have
          honed my skills to create captivating websites. With this philosophy
          in mind, I strive to craft websites that seamlessly merge aesthetics
          with functionality. Apart from my development prowess, I am also an
          enthusiastic tech blogger. Through my blogs, I share my insights on
          the latest technological trends and advancements, aiming to simplify
          complex concepts for my readers. Also, I love participating in
          hackathons. With my unquenchable thirst for knowledge, I strive to
          make a lasting impact in the digital world through my web development
          and graphic design skills.
        </Description>
        <EducationList>
          <Education>
            <LogoContainer>
              <Logo>
                <FaSchool />
              </Logo>
              <Line></Line>
            </LogoContainer>
            <EducationDetails>
              <Institute>Vivekananda Shiksha Kendra</Institute>
              <Timeline>-2018</Timeline>
              <EducationDetail>
                All India Secondary School Examination, Bhubaneswar
              </EducationDetail>
            </EducationDetails>
          </Education>
          <Education>
            <LogoContainer>
              <Logo>
                <FaSchool />
              </Logo>
              <Line></Line>
            </LogoContainer>
            <EducationDetails>
              <Institute>
                Venkateswar English Medium School, Bhubaneswar
              </Institute>
              <Timeline>2018-2020</Timeline>
              <EducationDetail>
                All India Senior Secondary School Examination
              </EducationDetail>
            </EducationDetails>
          </Education>
          <Education>
            <LogoContainer>
              <Logo>
                <IoIosSchool />
              </Logo>
              <Line></Line>
            </LogoContainer>
            <EducationDetails>
              <Institute>National Institute of Technology, Rourkela</Institute>
              <Timeline>2021-2025 (expected)</Timeline>
              <EducationDetail>Major in Civil Engineering</EducationDetail>
            </EducationDetails>
          </Education>
        </EducationList>
      </AboutContainer>
    </motion.div>
  );
}

export default About;
