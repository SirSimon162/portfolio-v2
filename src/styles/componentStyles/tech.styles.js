import styled from "styled-components";
import tw from "twin.macro";

export const TechContainer = styled.div`
  ${tw`
    flex
    items-center
    gap-x-3
    text-[#f5eee6]
    border-white
    border-[2px]
    text-sm
    sm:text-3xl
    p-3
    rounded-xl
`}
`;

export const TechName = styled.p`
  ${tw`
    text-sm
    sm:text-lg
`}
`;
