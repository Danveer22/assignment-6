import styled from "styled-components";
import { iconArrowDown, iconArrowUp } from "../assets/icons";
import Features from "./Features";
import Company from "./Company";

const StyledHeader = styled.header`
  position: fixed;
  height: 100vh;
  background-color: #fff;
  top: 0;
  right: 0;
  width: 12rem;
  z-index: 10;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 1.2rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  li {
    cursor: pointer;
    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 0.4rem;
    }
  }
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  a:last-child {
    border: 2px solid var(--color-black);
    border-radius: 1rem;
    padding: 0.8rem 1.6rem;
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Sidbar({ openMenu, onHandle }) {
  return (
    <>
      <StyledHeader>
        <nav>
          <Ul>
            <li onClick={() => onHandle("featuresSidebar")}>
              <a href="#">
                <span>Features</span>
                {openMenu === "featuresSidebar" ? (
                  <img src={iconArrowUp} alt="icon-arrow-up" />
                ) : (
                  <img src={iconArrowDown} alt="icon-arrow-down" />
                )}
              </a>
            </li>

            {openMenu === "featuresSidebar" && <Features type="sidebar" />}

            <li onClick={() => onHandle("companySidebar")}>
              <a href="#">
                <span>Company</span>
                {openMenu === "companySidebar" ? (
                  <img src={iconArrowUp} alt="icon-arrow-up" />
                ) : (
                  <img src={iconArrowDown} alt="icon-arrow-down" />
                )}
              </a>
            </li>
            {openMenu === "companySidebar" && <Company type="sidebar" />}
            <li>
              <a href="#">Carrer</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </Ul>
        </nav>
        <Btns>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </Btns>
      </StyledHeader>
    </>
  );
}

export default Sidbar;
