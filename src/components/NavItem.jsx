import styled from "styled-components/macro";
import { COLORS } from "../constants";

const NavItem = ({ active, children }) => {
  return (
    <NavItemWrapper>
      <NavLink active={active} href="#">
        {children}
      </NavLink>
    </NavItemWrapper>
  );
};

const NavItemWrapper = styled.li`
  color: inherit;
  text-transform: uppercase;
  /* color: ${COLORS.gray["900"]}; */
`;
const NavLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.active ? COLORS.secondary : "inherit")};
  font-size: 1.125rem;
  &:hover {
    color: ${COLORS.secondary};
  }
`;

export default NavItem;
