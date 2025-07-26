import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicaldata }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    let chartData = [["Date", "Price"]];
    if (historicaldata.prices) {
      historicaldata.prices.forEach((item) => {
        chartData.push([
          new Date(item[0]).toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
          }),
          item[1],
        ]);
      });
      setData(chartData);
    }
  }, [historicaldata]);

  const options = {
    title: '',
    curveType: 'function',
    legend: {
      position: 'top',
      alignment: 'end',
      textStyle: { color: '#ffffff' },
    },
    backgroundColor: 'transparent',
    colors: ['#3b82f6'],
    hAxis: {
      textStyle: { color: '#ffffff' },
      gridlines: { color: '#444' },
      slantedText: true,
      slantedTextAngle: 45,
    },
    vAxis: {
      textStyle: { color: '#ffffff' },
      gridlines: { color: '#444' },
      format: 'currency', // Show currency format
    },
    lineWidth: 3,
    pointSize: 5,
    chartArea: {
      left: 60,
      top: 40,
      width: '80%',
      height: '70%',
    },
    tooltip: {
      textStyle: { color: '#000' },
      showColorCode: true,
    },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
};

export default LineChart;



