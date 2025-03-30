import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function RevenueGrowth() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const years = ["2021", "2022", "2023", "2024", "2025"];

  const [selectedYear, setSelectedYear] = useState("2025");

  // Generate random data for chart
  const generateRandomData = () => {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 500) + 50);
  };

  const [farmersData, setFarmersData] = useState(generateRandomData());
  const [plusMembersData, setPlusMembersData] = useState(generateRandomData());

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  // Auto-update chart data every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFarmersData(generateRandomData());
      setPlusMembersData(generateRandomData());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container GraphBox shadow">
      <h3 className="text-success fw-bold GraphIn">YEARLY TREND OF FARMERS AND PLUS MEMBERS</h3>

      {/* Year Dropdown */}
      <div className="DropdownYear">
        <div className="year-selector d-flex align-items-center">
          <strong className="year-label">YEAR:</strong>
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle year-dropdown"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedYear}
            </button>
            <ul className="dropdown-menu">
              {years.map((year) => (
                <li key={year}>
                  <button className="dropdown-item" onClick={() => handleYearChange(year)}>
                    {year}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />

      {/* Line Chart */}
      <div className="chart-bar">
        <Line
          className="BarGraphO"
          data={{
            labels: months,
            datasets: [
              {
                label: "Farmers",
                data: farmersData,
                backgroundColor: "transparent",
                borderColor: "green",
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: "green",
              },
              {
                label: "PLUS Members",
                data: plusMembersData,
                backgroundColor: "transparent",
                borderColor: "blue",
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: "blue",
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
              title: {
                display: true,
                text: `Monthly Farmers & PLUS Members Data (${selectedYear})`,
              },
            },
          }}
        />
      </div>

      {/* Chart Legend */}
      <div className="chart-legend d-flex justify-content-center mt-3">
        <div className="legend-item me-3">
          <span
            className="legend-circle"
            style={{ backgroundColor: "green", width: "10px", height: "10px", display: "inline-block", marginRight: "5px" }}
          ></span>{" "}
          Farmers
        </div>
        <div className="legend-item">
          <span
            className="legend-circle"
            style={{ backgroundColor: "blue", width: "10px", height: "10px", display: "inline-block", marginRight: "5px" }}
          ></span>{" "}
          PLUS Members
        </div>
      </div>
    </div>
  );
}
