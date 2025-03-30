import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../CSS/Dashboard/SidePanel.css";
import LogoTop from "../../Images/Logo Black.png";
import AdminPic from "../../Images/AdminPic.jpeg";
import Dash from "../../Images/menu.png";
import Inquiry from "../../Images/Inquiry.png";
import Sales from "../../Images/sales.png";
import Farmer from "../../Images/farmer.png";
import Distributer from "../../Images/Distributer.png";
import Employee from "../../Images/employee.png";
import Feedback from "../../Images/feedback.png";

class SidePanel extends Component { 
  render() {
    return (
      <div
        className="d-flex flex-column vh-100 fixedA"
        style={{ backgroundColor: "white", width: "275px", overflowY: "hidden" }}
      >
        {/* Logo */}
        <div className="text-center py-4">
          <img src={LogoTop} alt="Logo" className="LogoTop" />
        </div>

        {/* Profile Section */}
        <div className="text-center ImageDiv">
          <img src={AdminPic} alt="Admin" className="rounded-circle AdminPic" />
          <h6 className="mt-2 mb-0 fw-bold">Sahil Purani</h6>
          <p className="text-muted small">Admin</p>
        </div>

        {/* Menu */}
        <nav className="ListDiv">
          <ul className="nav flex-column ListA">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "LinkAdmin active-link" : "LinkAdmin"}
              >
                <img src={Dash} alt="Dashboard" className="Dashboard" />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/inquiries" 
                className={({ isActive }) => isActive ? "LinkAdmin active-link" : "LinkAdmin"}
              >
                <img src={Inquiry} alt="Inquiries" className="InqA" />
                Inquiries
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/sales" 
                className={({ isActive }) => isActive ? "LinkAdmin active-link" : "LinkAdmin"}
              >
                <img src={Sales} alt="Sales" className="SalesA" />
                Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/farmers" 
                className={({ isActive }) => isActive ? "LinkAdmin active-link" : "LinkAdmin"}
              >
                <img src={Farmer} alt="Farmer" className="FarmerA" />
                Farmers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/analytics" 
                className={({ isActive }) => isActive ? "LinkAdmin active-link" : "LinkAdmin"}
              >
                <img src={Distributer} alt="Analytics" className="DisA" />
                Analytics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/employees" 
                className={({ isActive }) => isActive ? "LinkAdmin active-link" : "LinkAdmin"}
              >
                <img src={Employee} alt="Employees" className="EmpA" />
                Employees
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/feedback" 
                className={({ isActive }) => isActive ? "LinkAdmin active-link" : "LinkAdmin"}
              >
                <img src={Feedback} alt="Employees" className="EmpA" />
                Feedback
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SidePanel;
