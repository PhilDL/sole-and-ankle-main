import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";
import CategoriesNavigation from "./CategoriesNavigation";
import { Breadcrumbs, Crumb } from "../Breadcrumbs";
import Spacer from "../Spacer";
import ProductsGrid from "./ProductsGrid";
import Select from "../Select";

const ProductsPage = (props) => {
  return (
    <ProductsPageWrapper>
      <LeftColumn>
        <Breadcrumbs>
          <Crumb href="/">Home</Crumb>
          <Crumb href="/sales">Sales</Crumb>
          <Crumb href="/sales/shoes">Shoes</Crumb>
        </Breadcrumbs>
        <Spacer size={32} />
        <CategoriesNavigation />
      </LeftColumn>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select label="Sort">
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ProductsGrid />
      </MainColumn>
    </ProductsPageWrapper>
  );
};

const ProductsPageWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: baseline;
`;

const LeftColumn = styled.aside`
  flex-basis: 248px;
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h2`
  font-weight: ${WEIGHTS.medium};
  font-size: 1.5rem;
  margin: 0;
  margin-right: auto;
`;

export default ProductsPage;
