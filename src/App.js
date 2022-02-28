import React, { useState } from "react";
import styled from 'styled-components';
import './App.css';
import Snake from './components/Snake/Snake';
import StyledButton from './components/Button/Button';

const Canvas = styled.div`
  background-color: black;
  height: 800px;
  width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -400px 0 0 -400px;
`

function App() {
  const [top, setTop] = useState(0)
  const [left, setRight] = useState(0)

  return (
    <div className="App">
      <Canvas>
        <StyledButton onClick={() => setTop(top == 800? 0 : top+40)}>Down</StyledButton>
        <StyledButton onClick={() => setRight(left == 800? 0 : left+40)}>Right</StyledButton>

        <Snake top={top} left={left}></Snake>
      </Canvas>

    </div>
  );
}

export default App;
