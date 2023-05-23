import styled from "styled-components";
import tw from "twin.macro";
import { TfiClose } from "react-icons/tfi";

export const MainContainer = styled.div`
  ${tw`
    fixed
    inset-0
    overflow-hidden
`}
`;

export const ChildContainer = styled.div`
  ${tw`
    absolute
    inset-0
    overflow-hidden
    `}
`;

export const TranslucentDiv = styled.div`
  ${tw`
    absolute
    inset-0
    bg-[#1a1a1a]
    bg-opacity-50
    transition-opacity
`}
`;

export const ContentSection = styled.section`
  ${tw`
    absolute
    inset-y-0
    left-0
    max-w-full
    flex
`}
`;

export const ContentSectionDiv = styled.div`
  ${tw`
    w-screen
    max-w-md
`}
`;

export const ContentSectionDivTwo = styled.div`
  ${tw`
    h-full
    divide-y
    divide-gray-200
    flex
    flex-col
    bg-[#1a1a1a]
    shadow-xl
    rounded-[16px]
    border-r-[2px]
    border-[#f5eee6]
  `}
`;

export const Close = styled(TfiClose)`
  ${tw`
  text-[#f5eee6]
  absolute
  right-0
  m-[20px]
  cursor-pointer
`}
`;

export const Content = styled.div`
  ${tw`
    flex-1
    h-0
    overflow-y-auto
`}
`;