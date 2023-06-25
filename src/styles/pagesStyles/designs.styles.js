import styled from "@emotion/styled";
import tw from "twin.macro";

export const DesignsContainer = styled.div`
  ${tw`
flex flex-col lg:flex-row gap-[10px] py-8 w-screen ml-[30px] pr-[30px]
`}
`;
export const HalfContainer = styled.div`
  ${tw`
flex flex-col gap-[4px]`}
  ${({ isInverted }) => isInverted && tw`flex-col-reverse`}
`;

export const BiggerContainer = styled.div`
${tw`
flex gap-[4px]
`}`

export const SmallerContainer = styled.div`
${tw`
flex gap-[1px]
`}`

export const UIContainer = styled.div`
${tw`
sm:w-[400px] sm:h-[400px] w-[200px] h-[200px]
`}`

export const BannerContainer = styled.div`
${tw`
sm:w-[200px] w-[100px]
`}`

export const PosterContainer = styled.div`
${tw`
sm:w-[120px] w-[60px]
`}`

export const Image = styled.img`
${tw`
    object-contain h-full w-full border-[1px] border-[#f5eee6] rounded-md
`}
${({ isCover }) => isCover && tw`object-cover`}`