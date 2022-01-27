import styled from "styled-components/macro";

const Spacer = ({ size }) => {
  return <SpacerWrapper size={size}></SpacerWrapper>;
};

const SpacerWrapper = styled.div`
  height: ${(props) => props.size}px;
`;

export default Spacer;
