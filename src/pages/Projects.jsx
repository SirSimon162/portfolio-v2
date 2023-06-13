import Heading from "../components/shared/Heading";
import React, { useState, useEffect, useCallback } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsGithub,
} from "react-icons/bs";

import { BiLinkExternal } from "react-icons/bi";

import Speakers from "../config/projects";

import {
  CarouselContainer,
  CarouserContainerInner,
  LeftCarouselButton,
  RightCarouselButton,
  CarouselItem,
  Img,
  Title,
  TextBox,
  Description,
  Container,
  Item,
} from "../styles/pagesStyles/projects.styles";

// ArrowLeft
const ArrowLeft = () => (
  <p className="text-[#f5eee6]">
    <BsFillArrowLeftCircleFill />
  </p>
);

// ArrowRight
const ArrowRight = () => (
  <p className="text-[#f5eee6]">
    <BsFillArrowRightCircleFill />
  </p>
);

const getPrevElement = (list) => {
  const sibling = list[0].previousElementSibling;

  if (sibling instanceof HTMLElement) {
    return sibling;
  }

  // return list[0].parentElement.lastElementChild;
  return sibling;
};

const getNextElement = (list) => {
  const sibling = list[list.length - 1].nextElementSibling;

  if (sibling instanceof HTMLElement) {
    return sibling;
  }

  // return list[0].parentElement.firstElementChild;
  return sibling;
};

export function usePosition(ref) {
  const [prevElement, setPrevElement] = useState(null);
  const [nextElement, setNextElement] = useState(null);

  useEffect(() => {
    const element = ref.current;

    const update = () => {
      const rect = element.getBoundingClientRect();

      const visibleElements = Array.from(element.children).filter((child) => {
        const childRect = child.getBoundingClientRect();

        return rect.left <= childRect.left && rect.right >= childRect.right;
      });

      if (visibleElements.length > 0) {
        setPrevElement(getPrevElement(visibleElements));
        setNextElement(getNextElement(visibleElements));
      }
    };

    update();
    element.addEventListener("scroll", update, { passive: true });

    return () => {
      element.removeEventListener("scroll", update, { passive: true });
    };
  }, [ref]);

  const scrollToElement = useCallback(
    (element) => {
      const currentNode = ref.current;

      if (!currentNode || !element) return;

      let newScrollPosition;

      newScrollPosition =
        element.offsetLeft +
        element.getBoundingClientRect().width / 2 -
        currentNode.getBoundingClientRect().width / 2;

      console.log("newScrollPosition: ", newScrollPosition);

      currentNode.scroll({
        left: newScrollPosition,
        behavior: "smooth",
      });
    },
    [ref]
  );

  const scrollRight = useCallback(
    () => scrollToElement(nextElement),
    [scrollToElement, nextElement]
  );

  const scrollLeft = useCallback(
    () => scrollToElement(prevElement),
    [scrollToElement, prevElement]
  );

  return {
    hasItemsOnLeft: prevElement !== null,
    hasItemsOnRight: nextElement !== null,
    scrollRight,
    scrollLeft,
  };
}

const Carousel = ({ children }) => {
  const ref = React.useRef();

  const { hasItemsOnLeft, hasItemsOnRight, scrollRight, scrollLeft } =
    usePosition(ref);

  return (
    <CarouselContainer>
      <CarouserContainerInner ref={ref}>
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </CarouserContainerInner>
      <LeftCarouselButton hasItemsOnLeft={hasItemsOnLeft} onClick={scrollLeft}>
        <ArrowLeft />
      </LeftCarouselButton>

      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        onClick={scrollRight}
      >
        <ArrowRight />
      </RightCarouselButton>
    </CarouselContainer>
  );
};

function ItemContainer({ title, desc, img, demo, github }) {
  return (
    <Item>
      <Img src={img} alt="Past-Speaker-Image" />
      <Title>{title}</Title>
      <TextBox>
        <Description>{desc}</Description>
        <div className="text-[#f5eee6] text-lg sm:text-2xl flex items-center justify-center gap-3 sm:mt-3 mt-1">
          <a href={demo}>
            <BiLinkExternal />
          </a>
          <a href={github}>
            <BsGithub />
          </a>
        </div>
      </TextBox>
    </Item>
  );
}

const Projects = () => {
  return (
    <>
      <Heading>Projects</Heading>
      <Container>
        <Carousel>
          {Speakers.values.map((value) => (
            <ItemContainer
              title={value.title}
              desc={value.desc}
              img={value.img}
              demo={value.demo}
              github={value.github}
            />
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Projects;
