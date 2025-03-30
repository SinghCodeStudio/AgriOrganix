import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../../CSS/Employees/EmployeesChart.css";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

class HiringTrends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: 2025, // Default Year
      years: [2025,2024, 2023], // Added 2024 and 2023
    };
  }

  handleYearChange = (year) => {
    this.setState({ selectedYear: year });
  };

  render() {
    const { selectedYear, years } = this.state;

    // Data for the Chart
    const data = {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          label: "Hiring",
          data: [10, 8, 6, 12, 3, 2, 5, 9, 6, 7, 8, 6],
          borderColor: "green",
          backgroundColor: "green",
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "green",
        },
        {
          label: "Retention",
          data: [5, 1, 3, 6, 8, 7, 4, 6, 9, 6, 1, 3],
          borderColor: "blue",
          backgroundColor: "blue",
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "blue",
        },
      ],
    };

    // Chart options
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false, // Hide default legend
        },
      },
    };

    return (
      <div className="container-fluid GraphBox shadow hiring-trends-container">
        <div className="hiring-trends-card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-success fw-bold GraphIn">MONTHLY HIRING TREND</h3>
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
                        <button className="dropdown-item" onClick={() => this.handleYearChange(year)}>
                          {year}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Line data={data} options={options} />
            </div>
            <div className="legend-container">
              <div className="legend-item">
                <span className="legend-dot green-dot"></span> Hiring
              </div>
              <div className="legend-item">
                <span className="legend-dot blue-dot"></span> Retention
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HiringTrends;
