import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../constants";
import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU = ["Sale", "New Releases", "Men", "Women", "Kids", "Collections"];

const Navigation = (props) => {
  return (
    <NavigationWrapper>
      <NavLogo>
        <Logo style={{ position: "sticky", alignSelf: "flex-start" }} />
      </NavLogo>
      <NavList>
        {MENU.map((item, index) => (
          <NavItem key={index} active={index === 0 ? true : false}>
            {item}
          </NavItem>
        ))}
      </NavList>
    </NavigationWrapper>
  );
};

export const NavigationWrapper = styled.nav`
  height: 72px;
  color: ${COLORS.gray["900"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray["300"]};
`;
const NavLogo = styled.div`
  position: absolute;
  left: 32px;
`;
const NavList = styled.ul`
  display: flex;
  gap: 48px;
`;

export default Navigation;
