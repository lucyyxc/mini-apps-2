import React, { useEffect, useState } from 'react';
import Keypad from './Keypad';
import Scorecard from './Scorecard';

const App = () => {
  // conditionally render score states
  // const [shot, setShot] = useState(0);
  // const [shot1, setShot1] = useState('');

  // const enterShot = (score) => {
  //   setShot(shot + 1);
  //   // 22 total potential shots
  //   while (shot < 22) {
  //     setShot1(score);
  //   }
  //   console.log(shot1);
  // };

  // calculate frame score function

  return (
    <div>
      <h1 align='center'>Let's Bowl!</h1>
      <Keypad />
      <Scorecard />
    </div>
  );
};

export default App;
