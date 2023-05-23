import React, { useContext, useState } from "react";
import navbar from "../../../config/navbar";
import MenuContext from "./MenuContext";
import Drawer from "../drawer/Drawer";

import {
  NavContainer,
  NavLink,
  Nav,
  LogoContainer,
  Logo,
  NavLinks,
  NavLinksContainer,
  StyledHamburger,
  LogoDuplicate,
  Btn,
  BtnDuplicate,
  BtnContainer,
} from "../../../styles/componentStyles/navbar.styles";

const NavBar = () => {
  // using menuContext to control nav opening

  const menuContext = useContext(MenuContext);
  const { toggleMenuOpen, menuOpen } = menuContext;

  const handleClick = () => {
    toggleMenuOpen(false);
  };

  //handling Contact Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleDrawerOpen() {
    setIsDrawerOpen(true);
  }

  function handleDrawerClose() {
    setIsDrawerOpen(false);
  }

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <Logo>Anmol</Logo>
          <LogoDuplicate>Anmol</LogoDuplicate>
        </LogoContainer>

        <StyledHamburger menuOpen={menuOpen} onClick={toggleMenuOpen} />

        <NavLinks className={` ${menuOpen ? "open-nav" : "closed-nav"}`}>
          {navbar.Links.map((link) => (
            <NavLinksContainer key={link.name}>
              <NavLink href={link.link} onClick={handleClick}>
                <h2>{link.name}</h2>
              </NavLink>
            </NavLinksContainer>
          ))}
          <BtnContainer onClick={handleDrawerOpen}>
            <Btn>Contact Me</Btn>
            <BtnDuplicate>Contact Me</BtnDuplicate>
          </BtnContainer>
        </NavLinks>
        <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
