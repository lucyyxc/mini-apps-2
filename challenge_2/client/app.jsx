import React, { useEffect, useState } from 'react';
import BTCChart from './BTCChart';

const App = () => {
  const API_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json';

  const [dates, setDates] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    fetch(API_URL)
      .then((response) => {
        // console.log(response.json());
        response.json().then((data) => {
          // console.log(data);
          setDates(Object.keys(data.bpi));
          setData(Object.values(data.bpi));
        });
      })
      .catch((error) => console.log('Fetch error:', error));
  };

  return (
    <div>
      <BTCChart dates={dates} data={data} />
      <a href='https://www.coindesk.com/price/bitcoin' target='_blank'>
        Powered by CoinDesk
      </a>
    </div>
  );
};

export default App;
