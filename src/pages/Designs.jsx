import React from "react";
import Heading from "../components/shared/Heading";

function Designs() {
  return (
    <>
      <Heading>Designs</Heading>
      <div className="flex flex-col lg:flex-row gap-[10px] py-8 w-screen ml-[30px] pr-[30px]">
        <div className="flex flex-col gap-[4px]">
          <div className="flex gap-[4px]">
            <div className="sm:w-[400px] sm:h-[400px] w-[200px] h-[200px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687555259/Portfolio/Designs/badam-ui_ltzuzb.jpg"
                alt="img-Badam-UI"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[200px] w-[100px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687552986/Portfolio/Designs/HockeyWC_bw4xvb.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-[1px]">
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553038/Portfolio/Designs/world_theatre_day-01_sqfjmo.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553027/Portfolio/Designs/vector_night_scene-01_sgv9pj.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553027/Portfolio/Designs/Yoga_Day-01_lbzcyj.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553025/Portfolio/Designs/world_suicide_prevention_day-02_yrradq.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553018/Portfolio/Designs/Inter_NIT_g9iwwb.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-[4px]">
          <div className="flex gap-[4px]">
            <div className="sm:w-[400px] sm:h-[400px] w-[200px] h-[200px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687555259/Portfolio/Designs/cest-ui_wvimcu.jpg"
                alt="img-CEST-UI"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[200px] w-[100px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553038/Portfolio/Designs/Sahibzade-01_yyh8bd.jpg"
                alt="img"
                className="object-cover h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-[1px]">
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553017/Portfolio/Designs/Independence_Day_CodeHub-01_rfrnsn.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687553008/Portfolio/Designs/Mental_Health_Day-02_odi9kb.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687552999/Portfolio/Designs/HumanRightsDay-01_dg2dvy.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687552990/Portfolio/Designs/vriddhi-01_q89wjx.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
            <div className="sm:w-[120px] w-[60px]">
              <img
                src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1687552988/Portfolio/Designs/AutoCad_Workshop-01_hjhlam.jpg"
                alt="img"
                className="object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Designs;
