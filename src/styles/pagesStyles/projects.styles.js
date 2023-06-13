import styled from "styled-components";
import tw from "twin.macro";

export const Flex = styled.div`
  ${tw`
  flex
  `}
`;

export const CarouselContainer = styled.section`
  ${tw`
  -mt-[10px]
  relative
  overflow-hidden
  pr-[24px]
  pl-[24px]
  `}
`;

export const CarouselItem = styled.div`
  ${tw`
  flex-shrink-0 
  sm:ml-[1rem]
  mr-0
  mt-[20px]
  mb-[20px]
  ml-[6px]
  mr-[6px]
  `}
`;

export const CarouserContainerInner = styled(Flex)`
  ${tw`overflow-x-scroll`}
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselButton = styled.button`
  ${tw`
  absolute
  cursor-pointer
  top-1/2
  z-10
  rounded-full
  border-none
  p-[0.5rem]
  `}
`;

export const LeftCarouselButton = styled(CarouselButton)`
  ${tw`
  left-[5px]
  `}
  display: ${({ hasItemsOnLeft }) => (hasItemsOnLeft ? "block" : "none")};
  ${tw`
  text-white
  text-[50px]`}
  @media (max-width: 640px) {
    ${tw`text-[20px]`}
  }
`;

export const RightCarouselButton = styled(CarouselButton)`
  ${tw`right-[5px]`}
  visibility: ${({ hasItemsOnRight }) =>
    hasItemsOnRight ? "visible" : "hidden"};
  ${tw`text-white text-[50px]`}
  @media (max-width: 640px) {
    ${tw`text-[20px]`}
  }
`;

export const Container = styled.div`
  ${tw`
  flex
  justify-center
  mx-auto
  py-[25px]
  h-full
  w-full
  `}
`;

export const Item = styled.div`
  ${tw`
  border-black
  w-[400px]
  h-[450px]
  rounded-[14px]
  border-[2px]
  border-[#f5eee6]
  transition-all
  duration-[0.6s]
  overflow-hidden`}
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 2px #f5eee6;
  }
  @media (max-width: 640px) {
    ${tw`
    w-[200px]
    h-[300px]`}
  }
`;

export const Img = styled.img`
  ${tw`
  m-auto
  sm:h-[180px]
  h-[100px]
  w-full
  object-cover
  border-b-2
  border-[#f5eee6]`}
`;

export const TextBox = styled.div`
  ${tw`
  flex
  flex-col
  justify-center
  items-center`}
`;

export const Title = styled.div`
  ${tw`
  text-[#f5eee6]
  text-center
  sm:text-[30px]
  text-[20px]
  font-Kanit
  sm:font-semibold
  font-medium
  sm:m-[0.5rem]
  m-[0.3rem]
`}
`;

export const Description = styled.div`
  ${tw`
  text-[#f5eee6]
  text-center
  sm:px-[10px]
  px-[7px]
  sm:pb-0
  pb-[8px]
  `}
  @media (max-width: 640px) {
    ${tw`text-[10px]`}
  }
`;
