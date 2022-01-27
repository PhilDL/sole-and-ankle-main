import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";
import CategoryLink from "./CategoryLink";

const MENUS = [
  { id: 1, name: "Lifestyle", href: "#" },
  { id: 2, name: "Jordan", href: "#" },
  { id: 3, name: "Running", href: "#" },
  { id: 4, name: "Basketball", href: "#" },
  { id: 5, name: "Training & Gym", href: "#" },
  { id: 6, name: "Football", href: "#" },
  { id: 7, name: "Skateboarding", href: "#" },
  { id: 8, name: "American Football", href: "#" },
  { id: 9, name: "Baseball", href: "#" },
  { id: 10, name: "Golf", href: "#" },
  { id: 11, name: "Tennis", href: "#" },
  { id: 12, name: "Athletics", href: "#" },
  { id: 13, name: "Walking", href: "#" },
];
const CategoriesNavigation = (props) => {
  return (
    <CategoriesNavigationWrapper>
      <CategoriesList>
        {MENUS.map((menu) => (
          <CategoryLink key={menu.id} {...menu}></CategoryLink>
        ))}
      </CategoriesList>
    </CategoriesNavigationWrapper>
  );
};

const CategoriesNavigationWrapper = styled.nav``;

const CategoriesList = styled.ul`
  list-style: none;
`;

export default CategoriesNavigation;
