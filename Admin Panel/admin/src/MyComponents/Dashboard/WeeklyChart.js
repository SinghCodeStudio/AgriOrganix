import React, { useState, useEffect, useRef } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import "../../CSS/Dashboard/WeeklyChart.css";

export default function WeeklyChart() {
  const intervalRef = useRef(null);

  // State for weekly revenue data
  const [barData, setBarData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Products",
        data: [10, 23, 14, 53, 14, 16, 87],
        backgroundColor: "rgba(2, 68, 40, 0.6)",
      },
      {
        label: "Packages",
        data: [23, 12, 34, 65, 32, 43, 12],
        backgroundColor: "rgba(0, 191, 99, 0.6)",
      },
      {
        label: "PLUS Membership",
        data: [21, 34, 12, 43, 55, 34, 23],
        backgroundColor: "rgba(193, 255, 114, 0.6)",
      },
      {
        label: "Analysis",
        data: [1, 23, 21, 43, 12, 32, 2],
        backgroundColor: "rgba(126, 217, 87, 0.6)",
      },
    ],
  });

  // State for weekly inquiries data
  const [doughnutData, setDoughnutData] = useState({
    labels: ["Pending", "Answered", "Processing", "Solved"],
    datasets: [
      {
        label: "Inquiries",
        data: [12, 23, 2, 1],
        backgroundColor: [
          "rgba(2, 68, 40, 0.6)",
          "rgba(0, 191, 99, 0.6)",
          "rgba(193, 255, 114, 0.6)",
          "rgba(126, 217, 87, 0.6)",
        ],
      },
    ],
  });

  // Function to update data dynamically
  const updateData = () => {
    setBarData((prevData) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset) => ({
        ...dataset,
        data: dataset.data.map((value) => Math.max(0, value + Math.floor(Math.random() * 6 - 3))), // Small fluctuations
      })),
    }));

    setDoughnutData((prevData) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset) => ({
        ...dataset,
        data: dataset.data.map((value) => Math.max(1, value + Math.floor(Math.random() * 3 - 1))), // Keep values >= 1
      })),
    }));
  };

  // UseEffect for real-time updates
  useEffect(() => {
    intervalRef.current = setInterval(updateData, 1000);

    return () => clearInterval(intervalRef.current); // Cleanup
  }, []);

  return (
    <>
      <div className="container BoxMain shadow">
        <h3 className="text-center text-success fw-bold WeeklyA">
          WEEKLY REVENUE CHART
        </h3>
        <hr />
        <div className="chart-bar">
          <Bar className="BarGraphO" data={barData} />
        </div>
      </div>

      <div className="container WeeklyI">
        <div className="row g-4">
          {/* Weekly Inquiries Section */}
          <div className="col-md-6">
            <div className="card p-4 text-center shadow Inquiries">
              <h4>Weekly Inquiries</h4>
              <hr />
              <div className="BoxPie">
                <Doughnut data={doughnutData} />
              </div>
            </div>
          </div>

          {/* Weekly Orders Section */}
          <div className="col-md-6">
            <div className="card shadow Orders">
              <h4 className="text-center WeeklyO">Weekly Orders</h4>
              <hr />
              <div className="BoxPie">
                <Bar data={barData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
