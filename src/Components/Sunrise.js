import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import riseSet from './riseSet.json' ;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sun Rise Set Chart',
    },
  },
};
const sunDate = riseSet.map(
    function(index){
        return index["YYYY-MM-DD"]
    }
);
const sunRiseTime = riseSet.map(
    function(index){
        return index.RISE
    }
);

const sunSetTime = riseSet.map(
    function(index){
        return index.SET
    }
);

function parseTime(times){
  let parsedTime = []
  for (let x = 0; x < times.length; x++) {
    let words = times[x].split(':')
    parsedTime.push(parseInt(words[0])*60 + parseInt(words[1]))
  }
  return parsedTime
}
let chartData = {}
chartData.RiseTime=parseTime(sunRiseTime)
chartData.SetTime=parseTime(sunSetTime)


const labels = sunDate;



export const data = {
  labels,
  datasets: [
    {
      label: 'Rise',
      data: chartData.RiseTime,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Set',
      data: chartData.SetTime,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Sunrise() {
  return <Line options={options} data={data} />;
}


export default Sunrise;
