import React from "react";
import Heading from "../components/shared/Heading";
import { DesignsContainer, HalfContainer, BiggerContainer, SmallerContainer, UIContainer, BannerContainer, PosterContainer, Image } from "../styles/pagesStyles/designs.styles";

function Designs() {
  return (
    <>
      <Heading>Designs</Heading>
      <DesignsContainer>
        <HalfContainer>
          <BiggerContainer>
            <UIContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687555259/Portfolio/Designs/badam-ui_ltzuzb.jpg"
                alt="img-Badam-UI"
              />
            </UIContainer>
            <BannerContainer>
              <Image isCover
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687552986/Portfolio/Designs/HockeyWC_bw4xvb.jpg"
                alt="img"
              />
            </BannerContainer>
          </BiggerContainer>
          <SmallerContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553038/Portfolio/Designs/world_theatre_day-01_sqfjmo.jpg"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553027/Portfolio/Designs/vector_night_scene-01_sgv9pj.jpg"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553027/Portfolio/Designs/Yoga_Day-01_lbzcyj.jpg"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553025/Portfolio/Designs/world_suicide_prevention_day-02_yrradq.jpg"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553018/Portfolio/Designs/Inter_NIT_g9iwwb.jpg"
                alt="img"
              />
            </PosterContainer>
          </SmallerContainer>
        </HalfContainer>
        <HalfContainer isInverted>
          <BiggerContainer>
            <UIContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687555259/Portfolio/Designs/cest-ui_wvimcu.jpg"
                alt="img-CEST-UI"
              />
            </UIContainer>
            <BannerContainer>
              <Image isCover
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553038/Portfolio/Designs/Sahibzade-01_yyh8bd.jpg"
                alt="img"
              />
            </BannerContainer>
          </BiggerContainer>
          <SmallerContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553017/Portfolio/Designs/Independence_Day_CodeHub-01_rfrnsn.jpg"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553008/Portfolio/Designs/Mental_Health_Day-02_odi9kb.jpg"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687552999/Portfolio/Designs/HumanRightsDay-01_dg2dvy.jpg"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687552990/Portfolio/Designs/vriddhi-01_q89wjx.jpg"
                alt="img"
              />
            </PosterContainer>
            <PosterContainer>
              <Image
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687552988/Portfolio/Designs/AutoCad_Workshop-01_hjhlam.jpg"
                alt="img"
              />
            </PosterContainer>
          </SmallerContainer>
        </HalfContainer>
      </DesignsContainer>
    </>
  );
}

export default Designs;
