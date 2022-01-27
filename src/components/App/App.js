import React from "react";
import styled from "styled-components/macro";

import Header from "../Header";
import ProductsPage from "../ProductsPage/ProductsPage";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ProductsPage />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
