import styled from "styled-components/macro";
import { COLORS } from "../constants";
import Icon from "./Icon";

const SearchInput = (props) => {
  return (
    <SearchInputWrapper>
      <SearchIcon id="search" size={16} color={COLORS.gray["300"]} />
      <Input type="search" placeholder="Search..." />
    </SearchInputWrapper>
  );
};

const SearchInputWrapper = styled.label`
  background-color: ${COLORS.gray["900"]};
  /* background-color: yellow; */
  position: relative;
  color: ${COLORS.gray["300"]};
  &:hover {
    color: white;
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 3px;
  line-height: 22px;
`;
const Input = styled.input`
  border: none;
  background-color: inherit;
  padding-left: 24px;
  line-height: 22px;
  border-bottom: 1px solid ${COLORS.gray["300"]};
  outline-offset: 4px;
  color: inherit;
`;
export default SearchInput;
