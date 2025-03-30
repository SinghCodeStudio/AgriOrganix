import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "../../CSS/Analytics/AnalyticsChart.css";

Chart.register(...registerables);

const YearlyTrendChart = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  // Define test data for different years
  const yearlyData = {
    "2025": {
      soil: [320, 340, 410, 200, 180, 220, 350, 400, 500, 300, 520, 640],
      water: [310, 330, 400, 190, 160, 210, 340, 390, 540, 100, 500, 450],
    },
    "2024": {
      soil: [300, 320, 380, 210, 190, 230, 340, 410, 490, 310, 530, 620],
      water: [290, 310, 370, 180, 170, 220, 330, 380, 510, 120, 470, 430],
    },
    "2023": {
      soil: [280, 300, 350, 190, 170, 210, 320, 390, 480, 280, 500, 600],
      water: [270, 290, 340, 170, 150, 200, 310, 370, 470, 110, 450, 410],
    },
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const chartData = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "Soil Testing",
        data: yearlyData[selectedYear].soil,
        borderColor: "green",
        backgroundColor: "green",
        fill: false,
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: "Water Testing",
        data: yearlyData[selectedYear].water,
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  return (
    <div className="GraphBox shadow">
      <div className="header">
        <h3>YEARLY TREND OF TESTING</h3>
        <div className="year-dropdown">
          <strong>YEAR:</strong>
          <select className="form-select" value={selectedYear} onChange={handleYearChange}>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </div>
      <div className="chart-box">
        <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      <div className="legend">
        <div className="legend-item">
          <span className="dot soil-dot"></span> <strong>Soil Testing</strong>
        </div>
        <div className="legend-item">
          <span className="dot water-dot"></span> <strong>Water Testing</strong>
        </div>
      </div>
    </div>
  );
};

export default YearlyTrendChart;
