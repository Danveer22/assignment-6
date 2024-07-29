import styled from "styled-components";
import { logo } from "../assets/icons";
import Features from "./Features";
import Company from "./Company";
import {
  iconArrowDown,
  iconArrowUp,
  iconMenu,
  iconCloseMenu,
} from "../assets/icons";
import { useEffect, useRef } from "react";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1.2rem 3rem;
  position: relative;
`;

const StyledNav = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 4rem;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  a:link,
  a:visited {
    display: flex;
    gap: 0.4rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImgMenu = styled.img`
  display: none;
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  cursor: pointer;
  z-index: 20;

  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Btns = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  a:last-child {
    border: 2px solid var(--color-black);
    border-radius: 1rem;
    padding: 0.8rem 1.6rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

function Nav({ openMenu, onHandle, onHandleMenu, isMenuOpen }) {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>

          <Links>
            <li onClick={() => onHandle("featuresNav")}>
              <a href="#">
                <span>Features</span>
                {openMenu === "featuresNav" ? (
                  <img src={iconArrowUp} alt="icon-arrow-up" />
                ) : (
                  <img src={iconArrowDown} alt="icon-arrow-down" />
                )}
              </a>
            </li>
            <li onClick={() => onHandle("companyNav")}>
              <a href="#">
                <span>Company</span>
                {openMenu === "companyNav" ? (
                  <img src={iconArrowUp} alt="icon-arrow-up" />
                ) : (
                  <img src={iconArrowDown} alt="icon-arrow-down" />
                )}
              </a>
            </li>
            <li>
              <a href="#">Carrer</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </Links>
        </StyledNav>
        <Btns>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </Btns>
        <div onClick={() => onHandleMenu()}>
          <ImgMenu src={isMenuOpen ? iconCloseMenu : iconMenu} alt={iconMenu} />
        </div>
      </StyledHeader>
      {openMenu === "featuresNav" && <Features type="nav" />}
      {openMenu === "companyNav" && <Company type="nav" />}
    </>
  );
}

export default Nav;
