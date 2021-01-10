import React, { useEffect, useState } from 'react';
import Keypad from './Keypad';
import Scorecard from './Scorecard';

const App = () => {
  const [shot, setShot] = useState(0);
  const [frame, setFrame] = useState(0);

  const [shotScores, setShotScores] = useState([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0, 0],
  ]);
  const [frameScores, setFrameScores] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);

  const enterShot = (score) => {
    while (frame < 10) {
      shotScores[frame][0] === 0
        ? setShotScores[frame][0](score)
        : setShotScores[frame][1](score);
      setFrame(frame + 0.5);
    }
  };

  const calcFrameScore = () => {};
  // calculate frame score function

  return (
    <div>
      <h1 align='center'>Let's Bowl!</h1>
      <Keypad enterShot={enterShot} />
      <Scorecard shotScores={shotScores} frameScores={frameScores} />
    </div>
  );
};

export default App;
