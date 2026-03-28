import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    id: 1,
    name: "Rahim",
    physics: 85,
    chemistry: 78,
    math: 92
  },
  {
    id: 2,
    name: "Karim",
    physics: 75,
    chemistry: 82,
    math: 88
  },
  {
    id: 3,
    name: "Ayesha",
    physics: 90,
    chemistry: 85,
    math: 95
  },
  {
    id: 4,
    name: "Nusrat",
    physics: 70,
    chemistry: 68,
    math: 80
  },
  {
    id: 5,
    name: "Sakib",
    physics: 88,
    chemistry: 91,
    math: 84
  }
];

const ResultsCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"}></Line>
                <Line dataKey="physics" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsCharts;