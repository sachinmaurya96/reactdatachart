import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
  const data = {
    labels: ['Quality', 'Price', 'Durability', 'Performance', 'Design'],
    datasets: [
      {
        label: 'Product A',
        data: [85, 90, 75, 80, 70],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
      {
        label: 'Product B',
        data: [80, 85, 70, 85, 75],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>Product Comparison (Radar Chart)</h2>
      <Radar data={data} />
    </div>
  );
};

export default RadarChart;