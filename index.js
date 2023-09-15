import React, { useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import React, { useState } from 'react';

function StopWatch() {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(null)


  const handleRunClick = () => {
    if (running) {
      clearInterval(timer);
    } else {
      const startTime = Date.now() - lapse;
     const timerValue = setInterval(() => {
        setLapse(Date.now() - startTime);
      });
      setTimer(timerValue)
    }
    setRunning(!running);
  };

  const handleClearClick = () => {
    clearInterval(timer);
    setLapse(0);
    setRunning(false);
  };


  const buttonStyles = {
    border: '1px solid #ccc',
    background: '#fff',
    fontSize: '2em',
    padding: 25,
    margin: 15,
    width: 200,
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <label style={{ fontSize: '5em', display: 'block' }}>{lapse}ms</label>
      <button style={buttonStyles} onClick={handleRunClick}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button style={buttonStyles} onClick={handleClearClick}>
        Clear
      </button>
    </div>
  );



}


function App() {
  const [display1, setDisplay1] = useState(true);

  const handleDisplay = () => {
    setDisplay1(!display1)
  }
  return (
    <div>
    Click here to hide
    <input onChange={handleDisplay} type='checkbox' />
     {display1 ?  <StopWatch /> : " "}
    </div>
  )
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
