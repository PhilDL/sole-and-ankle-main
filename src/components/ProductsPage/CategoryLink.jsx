import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

const CategoryLink = ({ id, name, href, currentlySelected }) => {
  return (
    <CategoryLinkWrapper>
      <Link href={href} id={id} currentlySelected={currentlySelected}>
        {name}
      </Link>
    </CategoryLinkWrapper>
  );
};

const CategoryLinkWrapper = styled.li`
  line-height: 32px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) =>
    props.currentlySelected === props.id ? COLORS.primary : "inherit"};
  font-weight: ${WEIGHTS.medium};
  &:hover {
    color: ${COLORS.primary};
  }
`;

export default CategoryLink;
