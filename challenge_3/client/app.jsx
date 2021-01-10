import React, { useEffect, useState } from 'react';
import Keypad from './Keypad';
import Scorecard from './Scorecard';

const App = () => {
  // conditionally render score states

  return (
    <div>
      <h1 align='center'>Let's Bowl!</h1>
      <Keypad />
      <Scorecard />
    </div>
  );
};

export default App;
