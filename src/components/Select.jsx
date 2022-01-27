import styled from "styled-components";

import { COLORS, WEIGHTS } from "../constants";
import Icon from "./Icon";

const Select = ({ label, value, onChange, children }) => {
  return (
    <Wrapper>
      {label}
      <SelectIcon id="chevron-down" />
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  font-weight: ${WEIGHTS.normal};
  color: ${COLORS.gray["700"]};
`;

const SelectWrapper = styled.select`
  appearance: none;
  height: 43px;
  width: fit-content;
  padding: 12px 52px 12px 16px;
  margin-left: 16px;
  background-color: ${COLORS.gray["100"]};
  border: none;
  border-radius: 8px;
  color: ${COLORS.gray["900"]};
  font-weight: ${WEIGHTS.medium};
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 8px;
  top: 10px;
  // So we can click through the Icon, into the select and
  // focus the select.
  pointer-events: none;
`;
export default Select;
