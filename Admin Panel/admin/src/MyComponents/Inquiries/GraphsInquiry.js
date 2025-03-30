import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "../../CSS/Inquiries/GraphsInquiry.css";

export default function GraphsInquiry() {
  // State for dynamic monthly data
  const [barData, setBarData] = useState({
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "New Inquiries",
        data: Array(12).fill().map(() => Math.floor(Math.random() * 100 + 10)), // Random initial values
        backgroundColor: "rgba(2, 68, 40, 0.6)",
      },
      {
        label: "Resolved Inquiries",
        data: Array(12).fill().map(() => Math.floor(Math.random() * 80 + 5)), // Random initial values
        backgroundColor: "rgba(0, 191, 99, 0.6)",
      },
    ],
  });

  // Function to generate random data based on the selected year
  const generateRandomDataForYear = (year) => {
    // You can use the year to affect the randomness if needed
    const newInquiries = Array(12).fill().map(() => Math.floor(Math.random() * 100 + 10));
    const resolvedInquiries = Array(12).fill().map(() => Math.floor(Math.random() * 80 + 5));
    
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "New Inquiries",
          data: newInquiries,
          backgroundColor: "rgba(2, 68, 40, 0.6)",
        },
        {
          label: "Resolved Inquiries",
          data: resolvedInquiries,
          backgroundColor: "rgba(0, 191, 99, 0.6)",
        },
      ],
    };
  };

  // Handle year change
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setBarData(generateRandomDataForYear(year)); // Update data when year changes
  };

  // Auto-update every 1 second for dynamic data (keep the random updates)
  const updateData = () => {
    setBarData((prevData) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset) => ({
        ...dataset,
        data: dataset.data.map((value) =>
          Math.max(5, value + Math.floor(Math.random() * 20 - 10)) // Smooth updates
        ),
      })),
    }));
  };

  // Auto-update every 1 second
  useEffect(() => {
    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const [selectedYear, setSelectedYear] = useState("2025");
  const years = ["2021", "2022", "2023", "2024", "2025"];

  return (
    <div className="container GraphBox shadow">
      <h3 className="text-success fw-bold GraphIn">INQUIRY OVERVIEW</h3>

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
                  <button
                    className="dropdown-item"
                    onClick={() => handleYearChange(year)}
                  >
                    {year}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className="chart-bar">
        <Bar className="BarGraphO" data={barData} />
      </div>
    </div>
  );
}
