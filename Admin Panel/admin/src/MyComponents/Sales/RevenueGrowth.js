import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function RevenueGrowth() {
  // Manually defining months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const [selectedYear, setSelectedYear] = useState("2025");
  const years = ["2021", "2022", "2023", "2024", "2025"];

  // Function to handle year change
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  // State to store dynamic data
  const [chartData, setChartData] = useState(
    Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
  );

  // Update chart data every second
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)));
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container GraphBox shadow">
      <h3 className="text-success fw-bold GraphIn">REVENUE GROWTH TREND</h3>
      
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
                label: "Products",
                data: chartData,
                backgroundColor: "rgb(0, 191, 99)",
                borderColor: "rgb(0, 191, 99)",
                borderWidth: 2,
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
                text: `Monthly Product Inquiries (${selectedYear})`,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
