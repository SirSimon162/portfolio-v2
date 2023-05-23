import styled from "@emotion/styled";
import tw from "twin.macro";

export const AboutContainer = styled.div`
  ${tw`
  flex
  flex-col
  sm:gap-[90px]
  gap-[30px]
  py-8
  w-screen
  md:justify-between
  ml-[30px]
  pr-[30px]
  `}
`;

export const Description = styled.p`${tw`
    text-[#f5eee6]
    text-lg
    font-Kanit
    w-[90%]
`}`

export const EducationList = styled.ol`${tw`
    items-center
    sm:flex
`}`

export const Education = styled.li`${tw`
    relative
    mb-6
    sm:mb-0
`}`

export const Line = styled.div`${tw`
    hidden
    sm:flex
    w-full
    bg-gray-200
    h-0.5
    dark:bg-gray-700
`}`

export const LogoContainer = styled.div`${tw`
    flex
    items-center
`}`

export const Logo = styled.div`${tw`
    z-10
    flex
    items-center
    justify-center
    w-6
    h-6
    bg-[#f5eee6]
    rounded-full
    ring-8
    sm:ring-8
    shrink-0
    ring-[#1a1a1a]
`}`

export const EducationDetails = styled.div`${tw`
    mt-3
    sm:pr-8
`}`

export const Institute = styled.h4`${tw`
    text-lg
    font-semibold
    text-[#f5eee6]
    w-[90%]
    sm:w-auto
`}`

export const Timeline = styled.time`${tw`
    block
    mb-2
    text-sm
    font-normal
    leading-none
    text-gray-400
    dark:text-gray-500
`}`

export const EducationDetail = styled.p`${tw`
    text-base
    font-normal
    text-gray-500
    dark:text-gray-400
`}`