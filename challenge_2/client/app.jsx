import React, { useEffect, useState } from 'react';
import BTCChart from './BTCChart';

const App = () => {
  // historical data API: https://api.coindesk.com/v1/bpi/historical/close.json

  return (
    <div>
      <BTCChart />
      <a href='https://www.coindesk.com/price/bitcoin' target='_blank'>
        Powered by CoinDesk
      </a>
    </div>
  );
};

export default App;
