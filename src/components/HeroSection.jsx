import styled from "styled-components";
import Features from "./Features";
import Company from "./Company";
import { imageHeroDesktop, imageHeroMobile } from "../assets/imgs";
import {
  clientAudiophile,
  clientDatabiz,
  clientMaker,
  clientMeet,
} from "../assets/icons";

const StyledSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 7rem;
  margin-top: 3rem;
  gap: 8rem;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
    width: 100%;
    gap: 4rem;
  }
`;

const StyledImg = styled.div`
  width: 38rem;
  height: 36rem;

  background-image: url(${imageHeroDesktop});
  background-size: contain;
  background-repeat: no-repeat;
  aspect-ratio: 1;
  padding: 2rem;

  @media (max-width: 768px) {
    background-image: url(${imageHeroMobile});
    height: auto;
    grid-row: 1 / 2;
    justify-self: center;
    width: 65%;
    margin-top: 1rem;
    justify-self: center;
  }
`;

const ContentDiv = styled.div`
  margin-left: 3rem;

  h1 {
    font-size: 4.8rem;
    margin-bottom: 2rem;

    span {
      display: block;
      @media (max-width: 768px) {
        display: inline;
      }
    }
    @media (max-width: 768px) {
      font-size: 3.2rem;
    }
  }
  p {
    font-family: var(--font-family);
    font-size: 1.2rem;
    width: 80%;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: var(--color-grey);
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  button {
    background-color: var(--color-black);
    padding: 0.8rem 1.6rem;
    border: 2px solid var(--color-black);
    border-radius: 1rem;
    color: var(--color-white);
    font-size: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: var(--color-white);
      color: var(--color-black);
    }
  }
`;

const StyledIcons = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 1.8rem;
  margin-left: 3rem;

  background-color: orange;
  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

function HeroSection({ openMenu }) {
  return (
    <StyledSection>
      <HeaderContent>
        <ContentDiv>
          <h1>
            <span>Make</span> Remote work
          </h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
        </ContentDiv>
        <StyledIcons>
          <img src={clientDatabiz} alt="Databiz logo" />
          <img src={clientAudiophile} alt="audiophile logo" />
          <img src={clientMaker} alt="maker logo" />
          <img src={clientMeet} alt="meet logo" />
        </StyledIcons>
      </HeaderContent>

      <StyledImg></StyledImg>
    </StyledSection>
  );
}

export default HeroSection;
