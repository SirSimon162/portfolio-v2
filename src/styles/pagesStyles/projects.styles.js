import styled from "styled-components";
import tw from "twin.macro";

export const Flex = styled.div`
  display: flex;
`;
export const CarouselContainer = styled.section`
  margin-top: -10px;
  position: relative;
  overflow: hidden;
  padding-right: 24px;
  padding-left: 24px;
`;

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  margin-left: 1rem;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 640px) {
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const CarouserContainerInner = styled(Flex)`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 50%;
  z-index: 10;
  border-radius: 50%;
  border: none;
  padding: 0.5rem;
`;

export const LeftCarouselButton = styled(CarouselButton)`
  left: 5px;
  display: ${({ hasItemsOnLeft }) => (hasItemsOnLeft ? `block` : `none`)};
  color: white;
  font-size: 50px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export const RightCarouselButton = styled(CarouselButton)`
  right: 5px;
  visibility: ${({ hasItemsOnRight }) => (hasItemsOnRight ? `all` : `hidden`)};
  color: white;
  font-size: 50px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 0px;
  height: 100%;
  width: 100%;
`;

export const Item = styled.div`
  border-color: black;
  width: 400px;
  height: 450px;
  border-radius: 14px;
  border-width: 2px;
  border-color: #f5eee6;
  transition: all 0.6s;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 2px #f5eee6;
  }
  @media (max-width: 640px) {
    width: 200px;
    height: 300px;
  }
`;
export const Img = styled.img`
  margin: auto;
  height: 180px;
  width: 100%;
  object-fit: cover;
  border-width: 0px 0px 2px 0px;
  border-color: #f5eee6;
  @media (max-width: 640px) {
    object-fit: cover;
    width: 100%;
    height: 100px;
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`${tw`
  text-[#f5eee6]
  text-center
  sm:text-[30px]
  text-[20px]
  font-Kanit
  sm:font-semibold
  font-medium
  m-[0.5rem]
`}`

export const Description = styled.div`
  color: #f5eee6;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 640px) {
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 8px;
    font-size: 10px;
  }
`;
