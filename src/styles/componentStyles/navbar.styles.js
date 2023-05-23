import styled from "styled-components";
import tw from "twin.macro";

/* Vanilla CSS properties */

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a1a;
  padding: 0 32px;
  @media (max-width: 1024px) {
    padding: 0 25px 0 24px;
  }
  height: 80px;
  box-shadow: 2px 2px 6px rgba(255, 255, 255, 0.6);
  .open-nav {
    top: 80px;
    padding-top: 0px;
    @media (max-width: 1023px) {
      padding-top: 70px;
      height: 100vh;
      position: fixed;
    }
  }
  .closed-nav {
    top: -2080px;
    @media (max-width: 1023px) {
      height: 100vh;
    }
  }
`;
export const NavLink = styled.a`
  color: #f5eee6;
  transition-duration: 500ms;
  font-family: kanit;
  font-size: 16px;
  transition: 0.5s;
  display: inline-block;
  position: relative;
  padding-bottom: 5px;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 0%;
    position: absolute;
    background: #f5eee6;
    box-shadow: 0px 0px 6px rgba(245, 238, 230, 1);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 120%;
    left: 0%;
  }
`;

export const StyledHamburger = styled.button`
  height: 2em;
  width: 2em;
  background: inherit;
  display: block;
  padding: 0.5em;
  border: 1px solid #f5eee6;
  position: relative;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background: #f5eee6;
    height: 2px;
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    transition: all 0.7s;
  }
  &:active,
  &:focus {
    outline-color: #f5eee6;
  }
  &::before {
    top: ${({ menuOpen }) => (menuOpen ? "12px" : "8px")};
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(40deg)" : null)};
  }
  &::after {
    width: ${({ menuOpen }) => (menuOpen ? "100%" : "80%")};
    bottom: ${({ menuOpen }) => (menuOpen ? "12px" : "8px")};
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(-40deg)" : null)};
  }
  @media all and (min-width: 1023px) {
    display: none;
  }
`;

/* Tailwind CSS */

export const Nav = styled.nav`
  ${tw`
    w-full
    fixed
    top-0
    left-0
    z-[100]
`}
`;

export const LogoContainer = styled.div`
  ${tw`
    cursor-pointer
    flex
    items-center
    flex-col
`}
`;

export const Logo = styled.h1`
  ${tw`
    text-[#f5eee6]
    text-[25px]
    font-Kanit
    font-bold
    cursor-pointer
    absolute
    translate-x-[4px]
    translate-y-[-3px]
    transition-all
    hover:translate-x-[0px]
    hover:translate-y-[0px]
`}
`;
export const LogoDuplicate = styled.h1`
  ${tw`
    text-[rgba(245, 238, 230, 0.5)]
    text-[25px]
    font-Kanit
    font-bold
    cursor-pointer
`}
`;

export const NavLinks = styled.ul`
  ${tw`
    flex
    flex-col
    lg:flex-row
    items-center
    justify-start
    lg:pb-0
    absolute
    bg-[#1a1a1a]
    lg:static
    lg:z-auto
    z-[-1]
    left-0
    w-full
    lg:w-auto
    lg:pl-0
    transition-all
    duration-[450ms]
    ease-in
`}
`;

export const NavLinksContainer = styled.li`
  ${tw`
    list-none
    lg:ml-[8px]
    ml-0
    py-[16px]
    px-[32px]
    mb-[18px]
    lg:mb-[0]
`}
`;

export const BtnContainer = styled.div`${tw`
cursor-pointer
flex
items-center
flex-col
`}`

export const Btn = styled.button`
  ${tw`
    font-Kanit
    font-medium
    text-[#f5eee6]
    bg-[#1a1a1a]
    border-[3px]
    border-[#f5eee6]
    rounded-[16px]
    cursor-pointer
    py-[5px]
    px-[10px]
    lg:ml-[40px]
    ml-0
    mb-[23px]
    lg:mb-[0]
    absolute
    translate-x-[4px]
    translate-y-[-3px]
    transition-all
    hover:translate-x-[0px]
    hover:translate-y-[0px]
`}
`;

export const BtnDuplicate = styled.button`${tw`
    font-Kanit
    font-medium
    bg-[#f5eee6]
    rounded-[16px]
    py-[7px]
    px-[12px]
    lg:ml-[40px]
    ml-0
    mb-[23px]
    lg:mb-[0]
`}`