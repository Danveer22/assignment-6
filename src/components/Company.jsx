import styled from "styled-components";

const comapany = ["History", "Our Team", "Blog"];

const StyledUlNav = styled.ul`
  background-color: var(--color-white);
  width: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 2rem 2rem;
  list-style: none;
  color: var(--color-grey);
  position: absolute;
  z-index: 999;
  left: 17.4rem;
  top: 5rem;
  border-radius: 10px;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.1);

  li {
    display: flex;
    align-items: center;
    font-weight: 500;
    gap: 1rem;
    cursor: pointer;
    &:hover {
      color: var(--color-black);
    }
  }
`;

const StyledUlSidebar = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1.2rem;
  color: var(--color-grey);
  margin-left: 2rem;

  li {
    display: flex;
    gap: 0.8rem;

    &:hover {
      color: var(--color-black);
    }
  }
`;

function Company({ type }) {
  const UlComponent = type === "nav" ? StyledUlNav : StyledUlSidebar;
  return (
    <UlComponent>
      {comapany.map((item) => (
        <CompanyItem key={item} name={item} />
      ))}
    </UlComponent>
  );
}

function CompanyItem({ name }) {
  return <li>{name}</li>;
}

export default Company;
