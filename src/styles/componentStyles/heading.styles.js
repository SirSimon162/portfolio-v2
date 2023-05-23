import styled from "styled-components";
import tw from "twin.macro";

export const HeadingParent = styled.div`
  ${tw`
    flex
    flex-col
    mt-[50px]
    ml-[30px]
`}
`;

export const HeadingContainer = styled.h2`
  ${tw`
    text-[#f5eee6]
    font-Kanit
    font-bold
    text-5xl
    inline
`}
`;

export const HeadingUnderline = styled.div`
  ${tw`
    w-[280px]
    h-[3px]
    rounded-lg
    bg-[#f5eee6]
`}
`;
