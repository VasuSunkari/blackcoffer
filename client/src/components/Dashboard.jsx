import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = ({ data }) => {
  const chartData = {
    labels: data.map((d, i) => d.topic || `Topic ${i}`),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(d => d.intensity),
        backgroundColor: 'rgba(0, 255, 255, 0.84)',
      }
    ]
  };

  const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: '#ffffff',
        font: {
          size: 14,
          weight: 'bold'
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: '#ffffff',
        font: {
          size: 13,
          weight: 'bold'
        }
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)',     // Light visible grid lines
        lineWidth: 1,
        drawBorder: true,
        borderColor: 'rgba(255, 255, 255, 0.4)', // Visible X-axis line
        borderWidth: 2
      }
    },
    y: {
      ticks: {
        color: '#ffffff',
        font: {
          size: 13,
          weight: 'bold'
        }
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)',
        lineWidth: 1,
        drawBorder: true,
        borderColor: 'rgba(255, 255, 255, 0.4)', // Visible Y-axis line
        borderWidth: 2
      }
    }
  }
};


  return (
    <div className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Dashboard;
