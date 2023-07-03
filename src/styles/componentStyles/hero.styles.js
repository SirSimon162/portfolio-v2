import tw from "twin.macro";
import styled from "styled-components";

export const BgContainerTop = styled.div`
  ${tw`
    absolute
    z-[-1]
`}
`;

export const BgText = styled.h3`
  ${tw`
    text-[25vw]
    sm:text-[15vw]
    font-Kanit
    font-bold
    text-[#f5eee61e]
    leading-[21vw]
    sm:leading-[13vw]
    select-none
`}
`;

export const BgContainerBottom = styled.div`
  ${tw`
    absolute
    right-0
    bottom-0
    text-end
    z-[-1]
`}
`;

export const ContentContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    w-screen
    pt-[11vw]
    p-[3vw]
    md:pl-[5vw]
    md:pr-[10vw]
    sm:py-[5vw]
    gap-y-[35px]
    md:gap-y-[20px]
    md:justify-between
    h-screen
`}
`;

export const IntroContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    md:items-end
    self-start
`}
`;

export const WelcomeText = styled.h3`
  ${tw`
    text-5xl
    sm:text-7xl
    font-Kanit
    font-bold
    text-[#f5eee6]
`}
`;

export const Name = styled.h4`
  ${tw`
    text-[25px]
    sm:text-[48px]
    font-Kanit
    font-medium
    text-[#f5eee6]
    tracking-wide
    leading-[40px]
    sm:leading-[50px]
`}
`;

export const Surname = styled.h4`
  ${tw`
    text-[15px]
    sm:text-[19px]
    font-Kanit
    text-[#f5eee6]
    tracking-[7px]
    leading-[13px]
    sm:leading-[26px] 
`}
`;

export const IntroText = styled.p`
  ${tw`
    text-[15px]
    sm:text-[17px]
    font-Kanit
    text-[#f5eee6]
    w-[300px]
    mt-[10px]
    sm:mt-[5px]
    text-start
    md:text-end
`}
`;

export const Box = styled.div`
  ${tw`
    flex
    flex-col
    justify-end
    w-[20vw]
    min-w-[200px]
    sm:h-[20vw]
    min-h-[190px]
    border-2
    border-[#f5eee6]
    self-end
    items-end
    md:items-start
    justify-self-end
    mb-[5vw]
    p-[20px]
    mt-[5px]
    md:mt-[0px]
`}
`;

export const PagesList = styled.ul`
  ${tw`
  text-[#f5eee6]
  font-Kanit
  font-normal
  text-[15px]
  sm:text-[20px]
  text-end
  md:text-start
`}
`;

export const SmLinks = styled.div`
  ${tw`
  absolute
  bottom-[-75px]
  md:right-[15px]
  md:top-[28px]
  flex
  flex-row
  md:flex-col
  text-[#f5eee6]
  w-screen
  md:w-auto
  md:h-screen
  items-center
  justify-center
  text-xl
  sm:text-3xl
  gap-y-5
  pt-6
  sm:px-0
  px-5
  gap-x-2
`}
`;

export const Line = styled.div`
  ${tw`
  md:h-[25%]
  h-[5px]
  rounded-lg
  bg-[#f5eee6]
  md:w-[5px]
  w-[25%]
`}
`;
