import React from 'react';
import Chart from 'chart.js';

const BTCChart = ({ dates, data }) => {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'BTC Price Index (past 31 days)',
          data: data,
          borderColor: '#955A8E',
          borderWidth: 1,
          lineTension: 0,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  return <div></div>;
};
export default BTCChart;
