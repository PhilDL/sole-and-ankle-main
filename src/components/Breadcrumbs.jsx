import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../constants";

export const Breadcrumbs = (props) => {
  return (
    <BreadcrumbsNav aria-label="Breadcrumb">
      <BreadcrumbsList>{props.children}</BreadcrumbsList>
    </BreadcrumbsNav>
  );
};
const BreadcrumbsNav = styled.nav`
  width: fit-content;
  margin: 0;
`;
const BreadcrumbsList = styled.ol`
  margin: 0;
  list-style-type: none;
`;

export const Crumb = (props) => {
  return (
    <CrumbLi>
      <CrumbLink href={props.href} aria-current={props.current && "page"}>
        {props.children}
      </CrumbLink>
    </CrumbLi>
  );
};

const CrumbLi = styled.li`
  --spacing: 8px;
  display: inline;
  ::after {
    content: "/";
    margin-left: var(--spacing);
    margin-right: var(--spacing);
    color: hsl(0deg, 0%, 60%);
  }
  :last-of-type {
    ::after {
      content: "";
    }
    margin-right: 0px;
  }
`;

const CrumbLink = styled.a`
  color: ${COLORS.gray["700"]};
  text-decoration: none;
  &&:hover {
    text-decoration: underline;
  }
`;
