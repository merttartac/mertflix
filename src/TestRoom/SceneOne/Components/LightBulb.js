import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid black;
  border-radius: 75px;
  float: ${(props) => (props.position === "right" ? "right" : "left")};
  background: ${props => (props.isActive ? 'green' : 'red')};
`;

const LightBulb = ({ position , isActive}) => {
  return (
    <Wrapper position={position} isActive={isActive}>
      <div />
    </Wrapper>
  );
};

export default LightBulb;
