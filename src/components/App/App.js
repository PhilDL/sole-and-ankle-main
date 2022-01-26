import React from "react";
import styled from "styled-components/macro";

import Header from "../Header";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <Header />
      <Main>Main content</Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
