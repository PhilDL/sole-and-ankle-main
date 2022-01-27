import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

const ProductItem = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  return (
    <ProductItemWrapper>
      <ProductImg src={imageSrc} alt={name} />
      <ProductDetails>
        <InfoContainer>
          <ProductName>{name}</ProductName>
          <ProductVariants>{numOfColors} Color</ProductVariants>
        </InfoContainer>
        <PriceContainer>
          <ProductPrice onSale={salePrice ? true : false}>
            ${price / 100}
          </ProductPrice>
          {salePrice && <ProductSalePrice>${salePrice / 100}</ProductSalePrice>}
        </PriceContainer>
      </ProductDetails>
    </ProductItemWrapper>
  );
};

const ProductItemWrapper = styled.article`
  flex: 1;
  flex-basis: 340px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const ProductImg = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;
const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.gray["900"]};
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  font-weight: ${WEIGHTS.medium};
  font-size: 1.125rem;
  margin: 0;
`;
const ProductVariants = styled.p`
  font-weight: ${WEIGHTS.normal};
`;

const ProductPrice = styled.span`
  text-decoration: ${(props) => (props.onSale ? "line-through" : "none")};
`;
const ProductSalePrice = styled.span`
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.medium};
`;
export default ProductItem;
