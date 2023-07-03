import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import {
  BgContainerTop,
  BgText,
  BgContainerBottom,
  ContentContainer,
  IntroContainer,
  WelcomeText,
  Name,
  Surname,
  IntroText,
  Box,
  PagesList,
  SmLinks,
  Line,
} from "../../styles/componentStyles/hero.styles";
import SmLink from "../../config/sm_link";

function Hero() {
  return (
    <div>
      <BgContainerTop>
        <BgText>DEVE</BgText>
        <BgText>LOPER</BgText>
      </BgContainerTop>
      <BgContainerBottom>
        <BgText>DESI</BgText>
        <BgText>GNER</BgText>
      </BgContainerBottom>

      {/* Main content starts */}

      <ContentContainer>
        <IntroContainer>
          <WelcomeText>Welcome.</WelcomeText>
          <Name>This is Anmol</Name>
          <Surname>Pattnayak</Surname>
          <IntroText>
            I am a Web Developer and Graphic Designer from Bhubaneswar, Odisha,
            India majoring in civil engineering at National Institute of
            Technology, Rourkela. I use my design and development skills to
            create visually appealing websites.
          </IntroText>
        </IntroContainer>
        <Box>
          <PagesList>
            <li>
              <a href="/about">About Me</a>
            </li>
            <li>
              <a href="/techstack">Tech Stack</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/designs">Designs</a>
            </li>
          </PagesList>
        </Box>
      </ContentContainer>
      <SmLinks>
        <Line></Line>
        <a href={SmLink.GitHub} target="__blank">
          <AiFillGithub className="cursor-pointer" />
        </a>
        <a href={SmLink.LinkedIn} target="__blank">
          <AiFillLinkedin className="cursor-pointer" />
        </a>
        <a href={SmLink.Twitter} target="__blank">
          <AiFillTwitterCircle className="cursor-pointer" />
        </a>
        <a href={SmLink.HashNode} target="__blank">
          <SiHashnode className="cursor-pointer" />
        </a>
        <Line></Line>
      </SmLinks>
    </div>
  );
}

export default Hero;
