import React from 'react';
import LazyLoad from 'react-lazyload';

const designs = [
  "https://res.cloudinary.com/darx97f61/image/upload/v1705058099/Portfolio/Designs/HappyNewYear_noqz0z.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1705058063/Portfolio/Designs/10_days_to_go_mypzgh.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1705058058/Portfolio/Designs/C4GT_poster_GitHub-04_sseld4.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1705058056/Portfolio/Designs/HumanRightsDay-01_xl0dbg.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1705058052/Portfolio/Designs/Independence_Day_CodeHub-01_mx35h5.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1705058040/Portfolio/Designs/INTER-NIT_banner-03_keazr4.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1705058011/Portfolio/Designs/Mental_Health_Day-02_qnfh6v.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1705057995/Portfolio/Designs/world_theatre_day-01_ck167k.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1705057990/Portfolio/Designs/Yoga_Day-01_fhpeuh.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1705057983/Portfolio/Designs/world_suicide_prevention_day-02_montti.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1701583689/Portfolio/Designs/badam-ui_ltzuzb_hzvgcw.jpg",
  "https://res.cloudinary.com/darx97f61/image/upload/v1701583674/Portfolio/Designs/cest-ui_wvimcu_ho7pll.jpg",
  "https://res.cloudinary.com/darx97f61/image/upload/v1701583773/Portfolio/Designs/Sahibzade-01_yyh8bd_jox6aa.jpg",
  "https://res.cloudinary.com/darx97f61/image/upload/v1716138614/Portfolio/Designs/HappyNewYear-01_povnvf.png",
  "https://res.cloudinary.com/darx97f61/image/upload/v1701583717/Portfolio/Designs/HockeyWC_bw4xvb_z8qgck.jpg",
];

function Designs() {
  return (
    <div className="px-4 py-5">
      <p className="text-2xl md:text-3xl font-bold">My Design Flex Zone🎨</p>
      <p className="text-sm md:text-lg font-light mb-4">The "I Made This" Files</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {designs.map((src, index) => (
          <LazyLoad
            key={index}
            height={200}
            offset={100}
            placeholder={<div className="skeleton"></div>}
          >
            <img src={src} alt="design" className="w-full h-auto object-cover" loading="lazy" />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default Designs;
