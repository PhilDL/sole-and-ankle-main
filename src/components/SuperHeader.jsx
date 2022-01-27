import styled from "styled-components/macro";
import { COLORS } from "../constants";
import Icon from "./Icon";
import SearchInput from "./SearchInput";

const SuperHeader = (props) => {
  return (
    <SuperHeaderWrapper>
      Free shipping on domestic orders over $75!
      <RightNav>
        <SearchInput type="search" />
        <HelpLink href="/help">Help</HelpLink>
        <ShoppingCartLink href="/shop/cart">
          <Icon id="shopping-bag" size={24} color={COLORS.gray["300"]} />
        </ShoppingCartLink>
      </RightNav>
    </SuperHeaderWrapper>
  );
};

const SuperHeaderWrapper = styled.div`
  background-color: ${COLORS.gray["900"]};
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 32px;
`;

const RightNav = styled.nav`
  color: ${COLORS.gray["300"]};
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const HelpLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: white;
  }
`;

export const ShoppingCartLink = styled.a`
  &:hover {
    svg {
      stroke: white;
    }
  }
`;
export default SuperHeader;
