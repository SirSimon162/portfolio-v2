import React from "react";
import Heading from "../components/shared/Heading";
import {
  DesignsContainer,
  HalfContainer,
  BiggerContainer,
  SmallerContainer,
  UIContainer,
  BannerContainer,
  PosterContainer,
  Image,
} from "../styles/pagesStyles/designs.styles";

import { motion } from "framer-motion";

function Designs() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Heading>Designs</Heading>
      <DesignsContainer>
        <HalfContainer>
          <BiggerContainer>
            <UIContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1701583689/Portfolio/Designs/badam-ui_ltzuzb_hzvgcw.jpg"
                alt="img-Badam-UI"
              />
            </UIContainer>
            <BannerContainer>
              <Image
                isCover
                src="https://res.cloudinary.com/darx97f61/image/upload/v1701583717/Portfolio/Designs/HockeyWC_bw4xvb_z8qgck.jpg"
                alt="img"
              />
            </BannerContainer>
          </BiggerContainer>
          <SmallerContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705058099/Portfolio/Designs/HappyNewYear_noqz0z.png"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705058063/Portfolio/Designs/10_days_to_go_mypzgh.png"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705058056/Portfolio/Designs/HumanRightsDay-01_xl0dbg.png"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705058011/Portfolio/Designs/Mental_Health_Day-02_qnfh6v.png"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705058052/Portfolio/Designs/Independence_Day_CodeHub-01_mx35h5.png"
                alt="img"
              />
            </PosterContainer>
          </SmallerContainer>
        </HalfContainer>
        <HalfContainer isInverted>
          <BiggerContainer>
            <UIContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1701583674/Portfolio/Designs/cest-ui_wvimcu_ho7pll.jpg"
                alt="img-CEST-UI"
              />
            </UIContainer>
            <BannerContainer>
              <Image
                isCover
                src="https://res.cloudinary.com/darx97f61/image/upload/v1701583773/Portfolio/Designs/Sahibzade-01_yyh8bd_jox6aa.jpg"
                alt="img"
              />
            </BannerContainer>
          </BiggerContainer>
          <SmallerContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705058058/Portfolio/Designs/C4GT_poster_GitHub-04_sseld4.png"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705057995/Portfolio/Designs/world_theatre_day-01_ck167k.png"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705057990/Portfolio/Designs/Yoga_Day-01_fhpeuh.png"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705057983/Portfolio/Designs/world_suicide_prevention_day-02_montti.png"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/darx97f61/image/upload/v1705058040/Portfolio/Designs/INTER-NIT_banner-03_keazr4.png"
                alt="img"
              />
            </PosterContainer>
          </SmallerContainer>
        </HalfContainer>
      </DesignsContainer>
    </motion.div>
  );
}

export default Designs;
