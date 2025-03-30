import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../../CSS/Feedback/FeedbackChart.css";

class MonthlyFeedbackChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: 2025,
      years: [2020, 2021, 2022, 2023, 2024, 2025], // Dropdown years
      feedbackData: [15, 18, 19, 22, 25, 5, 25, 11, 44, 11, 12, 6],
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
      feedbackData: this.state.feedbackData.map(() =>
        Math.floor(Math.random() * 50)
      ),
    });
  }

  handleYearChange = (event) => {
    this.setState({ selectedYear: event.target.value });
  };

  render() {
    const { selectedYear, years, feedbackData } = this.state;

    const data = {
      labels: [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
      ],
      datasets: [
        {
          label: "Feedback",
          data: feedbackData,
          backgroundColor: "#003d24",
          borderRadius: 5,
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
            font: { size: 14 },
          },
        },
      },
      scales: {
        x: { ticks: { color: "#000" } },
        y: { ticks: { color: "#000" } },
      },
    };

    return (
      <div className="feedback-container shadow">
        <div className="feedback-header">
          <h4>MONTHLY FEEDBACK COUNT</h4>
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
        <div className="feedback-box">
          <Bar data={data} options={options} />
        </div>
      </div>
    );
  }
}

export default MonthlyFeedbackChart;
