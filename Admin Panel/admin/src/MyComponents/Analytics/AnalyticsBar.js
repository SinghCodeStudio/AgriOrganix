import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "../../CSS/Analytics/AnalyticsBar.css";
import {
  Chart as ChartJS,
  registerables
} from "chart.js";

ChartJS.register(...registerables);

const MostDemandedTest = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const data = {
    labels: ["Soil PH", "Water PH", "Soil TDS", "Water TDS", "Soil Conductivity", "Water Conductivity"],
    datasets: [
      {
        label: "Conducted",
        data: [2566, 2420, 1860, 1653, 2826, 2820],
        backgroundColor: "#1db954",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true, max: 3000 },
    },
    plugins: { legend: { position: "top" } },
  };

  return (
    <div className="GraphBox shadow mt-4">
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
      <div className="mt-4" style={{ height: "400px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default MostDemandedTest;
