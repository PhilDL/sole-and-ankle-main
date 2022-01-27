import styled from "styled-components/macro";
import differenceInDays from "date-fns/differenceInDays";

import { COLORS, WEIGHTS } from "../../constants";

export function newProduct(releaseDate) {
  return differenceInDays(new Date(), releaseDate) < 30;
}

const PRODUCT_TAGS = {
  sale: {
    text: "Sale",
    style: {
      "--bg-color": COLORS.primary,
      "--text-color": "#fff",
    },
  },
  new: {
    text: "Just Released!",
    style: {
      "--bg-color": COLORS.secondary,
      "--text-color": "#fff",
    },
  },
};
const ProductItem = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  let tag = null;
  if (salePrice && salePrice > 0) {
    tag = PRODUCT_TAGS["sale"];
  } else if (newProduct(releaseDate)) {
    tag = PRODUCT_TAGS["new"];
  }
  return (
    <ProductItemWrapper>
      {tag && <Tag style={tag.style}>{tag.text}</Tag>}
      <ProductImg src={imageSrc} alt={name} />
      <ProductDetails>
        <InfoContainer>
          <ProductName href={`/product/${slug}`}>{name}</ProductName>
          <ProductVariants>{numOfColors} Color</ProductVariants>
        </InfoContainer>
        <PriceContainer>
          <ProductPrice salePrice={salePrice ? true : false}>
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
  position: relative;
`;

const Tag = styled.span`
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 2px 8px;
  position: absolute;
  top: 10px;
  right: -8px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 32px;
  border-radius: 4px;
`;
const ProductImg = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;
const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.gray["900"]};
  align-items: baseline;
}
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.a`
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  color: inherit;
  font-size: 1.125rem;
  margin: 0;
  &:hover {
    color: ${COLORS.primary};
  }
`;
const ProductVariants = styled.p`
  font-weight: ${WEIGHTS.normal};
`;

const ProductPrice = styled.span`
  text-decoration: ${(props) => (props.salePrice ? "line-through" : "none")};
`;
const ProductSalePrice = styled.span`
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.medium};
`;
export default ProductItem;
