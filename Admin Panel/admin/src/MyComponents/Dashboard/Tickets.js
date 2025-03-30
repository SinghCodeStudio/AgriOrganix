import React, { Component } from "react";
import "../../CSS/Dashboard/Tickets.css";
import Icon from "../../Images/PeopleIcon.png"

class ManageTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [
        {
          id: "#23047",
          customer: "Jayesh Chauhan",
          issue: "Product Test Results Not Received",
          description: "I submitted a sample for soil testing last week and haven't received the results yet.",
          lastResponded: "2 hours ago",
          priority: "High",
          status: "Pending",
          dueIn: "1 Day",
        },
        {
          id: "#23048",
          customer: "Jayesh Chauhan",
          issue: "Product Test Results Not Received",
          description: "I submitted a sample for soil testing last week and haven't received the results yet.",
          lastResponded: "2 hours ago",
          priority: "High",
          status: "Pending",
          dueIn: "1 Day",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container TicketBox bg-white shadow">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="TicketTitle">Manage Recent Tickets</h2>
          <div className="FilterBox">
            <span className="FilterTitle">Filters:</span>
            <button className="btn FilterButton">Status</button>
            <button className="btn FilterButton">Priority</button>
            <button className="btn FilterButton">Due Date</button>
          </div>
        </div>

        <hr className="ManageHRT"/>

        
        {this.state.tickets.map((ticket, index) => (
          <div key={index} className="ticket-card p-3 rounded ">
            <div className="d-flex align-items-start">
              <div className="ticket-avatar me-3"><img src={Icon} alt="People" className="PeopleIcon"/></div>
              <div className="ticket-details w-100">
                <div className="ThreeData">
                <p><strong>Customer:</strong> {ticket.customer} <span className="ticket-id text-danger">[ Ticket ID: {ticket.id} ]</span></p>
                <p><strong>Issue:</strong> "{ticket.issue}"</p>
                <p><strong>Description:</strong> "{ticket.description}"</p>
                </div>
                <div className="ThreeData">
                <p><strong>Last Responded:</strong> {ticket.lastResponded}</p>
                <p><strong>Priority:</strong> {ticket.priority}</p>
                <p><strong>Status:</strong> {ticket.status}</p>
                <p><strong>Due In:</strong> {ticket.dueIn}</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end ButtonManage">
              <button className="btn btn-success manage-btn">Manage</button>
            </div>
            <hr className="ManageHR"/>
          </div>
        ))}
      </div>
    );
  }
}

export default ManageTickets;
