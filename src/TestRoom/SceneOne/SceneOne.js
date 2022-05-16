import React, { useState } from "react";
import styled from "styled-components";
import LightBulb from "./Components/LightBulb";
import LightSwitch from "./Components/LightSwitch";

const Room = styled.div`
  background: #ffefd5;
  height: 500px;
  width: 50%;
  padding: 40px 60px 40px 60px;
  border: 2px solid silver;
  border-radius: 8px;
`;

const PairContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  justify-content: space-between;
`;

const SceneContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function SceneOne() {
  const [switchStateOne, setSwitchStateOne] = useState(false);
  const [switchStateTwo, setSwitchStateTwo] = useState(false);

  const handleSwitchOne = () => setSwitchStateOne(prev => !prev);
  const handleSwitchTwo = () => setSwitchStateTwo(prev => !prev);

  return (
    <Room>
      <SceneContainer>
        <PairContainer>
          <LightBulb position="left" isActive={switchStateOne}/>
          <LightSwitch position="left" switchState={switchStateOne} handleSwitch={handleSwitchOne}/>
        </PairContainer>

        <PairContainer>
          <LightBulb position="right" isActive={switchStateTwo}/>
          <LightSwitch position="right" switchState={switchStateTwo} handleSwitch={handleSwitchTwo}/>
        </PairContainer>
      </SceneContainer>
    </Room>
  );
}

export default SceneOne;
