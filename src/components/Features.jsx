import styled from "styled-components";
import {
  iconCalendar,
  iconReminders,
  iconPlanning,
  iconTodo,
} from "../assets/icons";

const featureList = [
  { featureName: "Todo List", url: iconTodo },
  { featureName: "Calenders", url: iconCalendar },
  { featureName: "Reminders", url: iconReminders },
  { featureName: "Planning", url: iconPlanning },
];

const StyledUlNav = styled.ul`
  background-color: var(--color-white);
  width: 7.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 2rem 2.4rem;
  list-style: none;
  color: var(--color-grey);
  position: absolute;
  z-index: 999;
  left: 6rem;
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

function Features({ type }) {
  const UlComponent = type === "nav" ? StyledUlNav : StyledUlSidebar;
  return (
    <UlComponent>
      {featureList.map((list) => (
        <FeatureItem
          key={list.featureName}
          name={list.featureName}
          url={list.url}
        />
      ))}
    </UlComponent>
  );
}

function FeatureItem({ name, url }) {
  console.log("url", url);
  return (
    <li>
      <img src={url} alt={name} />
      <span>{name}</span>
    </li>
  );
}

export default Features;
