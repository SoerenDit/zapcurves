import React, { useState, useEffect } from "react";
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

  const handleAnswerChange = (event) => {
    if (event.charCode === 55) {
      setTop(top == 780 ? 0 : top + 20)
    }
    else if (event.charCode === 56) {
      setRight(left == 780 ? 0 : left + 20)
    }
  };

  const move = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(0)
      return
    }

    const newIntervalId = setInterval(() => {      
      setTop(top => top === 780 ? 0 : top + 1)
      setRight(right => right === 780 ? 0 : right + 1)
    },5);
    setIntervalId(newIntervalId)
  };


  const [top, setTop] = useState(0);
  const [left, setRight] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  return (
    <div className="App">
      <StyledButton onClick={move}>{intervalId? "Stop" : "Start"}</StyledButton>
      <div id="inner" tabindex="0" onKeyPress={handleAnswerChange}>
        <Canvas >
          <Snake top={top} left={left}></Snake>
        </Canvas>
      </div>

    </div>
  );
}

export default App;
