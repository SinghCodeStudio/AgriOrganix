import React, { Component } from "react";
import "../../CSS/Feedback/FeedbackTable.css";

class FeedbackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [
        { id: "INQ-110", user: "Rahul Patel", category: "Soil Test", rating: 4.5, date: "01-09-2023" },
        { id: "INQ-109", user: "Priya Sharma", category: "Product", rating: 4, date: "01-09-2023" },
        { id: "INQ-108", user: "Alok Mehta", category: "Product", rating: 3, date: "22-04-2023" },
        { id: "INQ-107", user: "Neha Verma", category: "Soil Test", rating: 1, date: "22-04-2023" },
        { id: "INQ-106", user: "Suresh Yadav", category: "Soil Test", rating: 3, date: "20-11-2023" },
        { id: "INQ-105", user: "Pooja Singh", category: "Product", rating: 5, date: "20-11-2023" },
        { id: "INQ-104", user: "Rohit Desai", category: "General", rating: 3, date: "05-12-2023" },
        { id: "INQ-103", user: "Anjali Nair", category: "General", rating: 2, date: "05-12-2023" },
        { id: "INQ-102", user: "Manish Dubey", category: "Product", rating: 5, date: "10-01-2024" },
        { id: "INQ-101", user: "Kavita Joshi", category: "General", rating: 1, date: "10-01-2024" },
      ],
    };
  }

  render() {
    return (
      <div className="container feedback-container">
        <h2 className="feedback-title">FEEDBACK LIST</h2>
        <div className="search-box">
          <input type="text" placeholder="Search.." className="form-control" />
        </div>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.user}</td>
                <td>{feedback.category}</td>
                <td>{feedback.rating}</td>
                <td>{feedback.date}</td>
                <td>
                  <a href="#">View</a> | <a href="#">Reply</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="export-links">
          <span>Click to: </span>
          <a href="#">Get CSV Sheet</a> | <a href="#">Get Excel Sheet</a>
        </div>
      </div>
    );
  }
}

export default FeedbackList;
