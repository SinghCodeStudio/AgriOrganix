import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../../CSS/Feedback/FeedbackLine.css";

class AvgRatingChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: 2025,
      years: [2020, 2021, 2022, 2023, 2024, 2025],
      ratingsData: Array.from({ length: 12 }, () => (Math.random() * 4 + 1).toFixed(1)),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateChartData();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateChartData() {
    this.setState({
      ratingsData: Array.from({ length: 12 }, () => (Math.random() * 4 + 1).toFixed(1)),
    });
  }

  handleYearChange = (event) => {
    this.setState({ selectedYear: event.target.value });
  };

  render() {
    const { selectedYear, years, ratingsData } = this.state;

    const data = {
      labels: [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
      ],
      datasets: [
        {
          label: "Average Rating",
          data: ratingsData,
          borderColor: "#00c853",
          backgroundColor: "transparent",
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: "#00c853",
          tension: 0.4,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#003d24",
            font: { size: 14, weight: "bold" },
          },
        },
      },
      scales: {
        x: {
          ticks: { color: "#000", font: { size: 12, weight: "bold" } },
        },
        y: {
          min: 0,
          max: 5,
          ticks: { color: "#000", font: { size: 12, weight: "bold" } },
        },
      },
    };

    return (
      <div className="rating-container shadow">
        <div className="rating-header">
          <h4>AVG. RATING OVER TIME</h4>
          <div className="year-selector">
            <label htmlFor="yearDropdown">YEAR: </label>
            <select
              id="yearDropdown"
              value={selectedYear}
              onChange={this.handleYearChange}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="rating-box">
          <Line data={data} options={options} />
        </div>
      </div>
    );
  }
}

export default AvgRatingChart;
