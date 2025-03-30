import React, { useState, useEffect } from "react";
import "../../CSS/Dashboard/Weekly.css";

// Importing Icons
import VisitorIcon from "../../Images/user.png";
import FeedbackIcon from "../../Images/feedback (1).png";
import EmployeeIcon from "../../Images/employee (1).png";
import SalesIcon from "../../Images/wallet.png";
import FarmerIcon from "../../Images/growth.png";
import ReportIcon from "../../Images/report.png";
import OrderIcon from "../../Images/shopping-bag (2).png";
import EnquiryIcon from "../../Images/ask.png";

// Reusable Card Component
const StatCard = ({ icon, title, value }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="stat-card">
        <div className="stat-card-header">
          <img src={icon} alt={title} className="stat-icon" />
        </div>
        <div className="stat-card-body">
          <h6 className="stat-title">{title}</h6>
          <p className="stat-value">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default function Weekly() {
  // State for weekly insights data
  const [data, setData] = useState({
    visitors: 625,
    feedbacks: 48,
    employees: 26,
    sales: 26000,
    farmers: 412,
    orders: 589,
    reports: 74,
    enquiries: 18,
  });

  // Function to update stats dynamically and keep values above 0
  const updateData = () => {
    setData((prevData) => ({
      ...prevData,
      visitors: Math.max(1, prevData.visitors + Math.floor(Math.random() * 10 - 5)),
      feedbacks: Math.max(1, prevData.feedbacks + Math.floor(Math.random() * 4 - 2)),
      employees: prevData.employees, // Employees remain constant
      sales: Math.max(1, prevData.sales + Math.floor(Math.random() * 500 - 250)),
      farmers: Math.max(1, prevData.farmers + Math.floor(Math.random() * 10 - 5)),
      orders: Math.max(1, prevData.orders + Math.floor(Math.random() * 15 - 7)),
      reports: Math.max(1, prevData.reports + Math.floor(Math.random() * 5 - 2)),
      enquiries: Math.max(1, prevData.enquiries + Math.floor(Math.random() * 3 - 1)),
    }));
  };

  // Auto-update every 1 second
  useEffect(() => {
    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval); // Cleanup to avoid memory leaks
  }, []);

  return (
    <div className="dashboard-stats">
      <div className="row">
        <StatCard icon={VisitorIcon} title="New Visitors" value={data.visitors} />
        <StatCard icon={FeedbackIcon} title="New Feedbacks" value={data.feedbacks} />
        <StatCard icon={EmployeeIcon} title="Employees" value={data.employees} />
        <StatCard icon={SalesIcon} title="New Sales" value={`₹${data.sales}`} />
        <StatCard icon={FarmerIcon} title="New Farmers" value={data.farmers} />
        <StatCard icon={OrderIcon} title="New Orders" value={data.orders} />
        <StatCard icon={ReportIcon} title="New Reports" value={data.reports} />
        <StatCard icon={EnquiryIcon} title="New Enquiries" value={data.enquiries} />
      </div>
    </div>
  );
}
