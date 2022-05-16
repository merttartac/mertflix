import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 30px;
  width: 60px;
  border: 2px solid black;
  border-radius: 8px;
  float: ${(props) => (props.position === "left" ? "left" : "right")};
  background: silver;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const Title = styled.h6`
  margin: 0;
  padding: 0;
  font-size: 0.8em;
  width: 100%;
`;

function LightSwitch({ switchState, position, handleSwitch }) {
  return (
    <Wrapper position={position} onClick={handleSwitch}>
      <Title>{switchState === false ? "OFF" : "ON"}</Title>
    </Wrapper>
  );
}

export default LightSwitch;
