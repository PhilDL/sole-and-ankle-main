import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";

import SuperHeader from "../SuperHeader";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <HeaderWrapper>
      <SuperHeader></SuperHeader>
      <Navigation />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;

export default Header;
