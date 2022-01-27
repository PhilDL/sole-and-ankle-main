import styled from "styled-components/macro";
import ProductItem from "./ProductItem";
import SHOES from "../../data";

const ProductsGrid = (props) => {
  return (
    <ProductsGridWrapper>
      {SHOES.map((product) => (
        <ProductItem key={product.slug} {...product} />
      ))}
    </ProductsGridWrapper>
  );
};

const ProductsGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export default ProductsGrid;
