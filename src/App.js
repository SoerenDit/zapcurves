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
function calcCoordinatesFromDirection(direction) {    
  return  [Math.sin(direction), Math.cos(direction)]
}

function App() {

  const handleAnswerChange = (event) => {
    //  8 on numpad
    if (event.charCode === 56) { 
      setDirection(direction => direction === 0? 359 : direction - 1)
    } // 7  on numpad
    else if (event.charCode === 55) {
      setDirection(direction => direction === 359? 0 : direction + 1)
    }
  };

  const move = () => {
  
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(0)
      return
    }

 

    const newIntervalId = setInterval(() => {      
      const [deltaX, deltaY] = calcCoordinatesFromDirection(direction)
      console.log(direction)
      setX(x => x === 780 ? 0 : x + deltaX)
      setY(y => y === 780 ? 0 : y + deltaY)
    },1);
    setIntervalId(newIntervalId)
  };

  const [x, setX] = useState(395);
  const [y, setY] = useState(395);

  const [intervalId, setIntervalId] = useState(0);
  const [direction, setDirection] = useState(0);

  return (
    <div className="App">
      <StyledButton onClick={move}>{intervalId? "Stop" : "Start"}</StyledButton>
      <div id="inner" tabindex="0" onKeyPress={handleAnswerChange}>
        <Canvas >
          <Snake top={y} left={x}></Snake>
        </Canvas>
      </div>

    </div>
  );
}

export default App;
