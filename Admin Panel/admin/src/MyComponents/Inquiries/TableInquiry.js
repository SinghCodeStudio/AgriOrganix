import React, { useState } from "react";
import "../../CSS/Inquiries/TableInquiry.css";
import Search from "../../Images/SearchIcon.png";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import Papa from "papaparse";

const inquiriesData = [
  { id: "INQ-1010", date: "29-Jan-2025 10:30 AM", category: "Soil Testing", status: "Pending", staff: "Rajesh M" },
  { id: "INQ-1009", date: "28-Jan-2025 02:15 PM", category: "Soil Testing", status: "Pending", staff: "Ravi K" },
  { id: "INQ-1008", date: "27-Jan-2025 11:00 AM", category: "Crop Health", status: "Pending", staff: "Jignesh R" },
  { id: "INQ-1007", date: "26-Jan-2025 03:45 PM", category: "Crop Health", status: "Pending", staff: "Jignesh R" },
  { id: "INQ-1006", date: "25-Jan-2025 09:20 AM", category: "Organic Farming", status: "Pending", staff: "Harish L" },
  { id: "INQ-1005", date: "25-Jan-2025 09:20 AM", category: "Organic Farming", status: "In Progress", staff: "Harish L" },
  { id: "INQ-1004", date: "25-Jan-2025 09:20 AM", category: "Fertilizer Advice", status: "In Progress", staff: "Ravi K" },
  { id: "INQ-1003", date: "24-Jan-2025 09:20 AM", category: "Fertilizer Advice", status: "Completed", staff: "Ravi K" },
  { id: "INQ-1002", date: "23-Jan-2025 09:20 AM", category: "Pest Control", status: "Completed", staff: "Rajesh M" },
  { id: "INQ-1001", date: "22-Jan-2025 09:20 AM", category: "Pest Control", status: "Completed", staff: "Rita N" },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");  // Added state for category filter

  const categories = ["Soil Testing", "Crop Health", "Organic Farming", "Fertilizer Advice", "Pest Control"];

  const filteredInquiries = inquiriesData.filter(
    (inquiry) =>
      (statusFilter === "" || inquiry.status === statusFilter) &&
      (categoryFilter === "" || inquiry.category === categoryFilter) &&
      inquiry.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadCSV = () => {
    const csv = Papa.unparse(filteredInquiries);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "inquiries.csv");
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredInquiries);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inquiries");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "inquiries.xlsx");
  };

  return (
    <div className="container TableInquiry shadow">
      <div className="d-flex justify-content-between align-items-center p-3 UserDash">
        <h3 className="text-success fw-bold UserIn">USER INQUIRIES DASHBOARD</h3>
      </div>
      <hr className="HRM" />

      {/* Search & Filters */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="search-boxI">
          <input
            type="text"
            className="form-control"
            placeholder="Search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">
            <img src={Search} alt="Search" className="SearchI" />
          </span>
        </div>
        <div className="filters">
          <select className="btn ButtonDM" onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Category Dropdown */}
          <select className="btn ButtonDM" onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Inquiry Table */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Inquiry ID</th>
            <th>Date & Time</th>
            <th>Category</th>
            <th>Status</th>  
            <th>Assigned Staff</th>
          </tr>
        </thead>
        <tbody>
          {filteredInquiries.length > 0 ? (
            filteredInquiries.map((inquiry) => (
              <tr key={inquiry.id}>
                <td>{inquiry.id}</td>
                <td>{inquiry.date}</td>
                <td>{inquiry.category}</td>
                <td>{inquiry.status}</td>
                <td>{inquiry.staff}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">No inquiries found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Download Options */}
      <div className="text-center mt-3">
        <strong>Click to: </strong>
        <button onClick={downloadCSV} className="download-link btn">Get CSV Sheet</button> |
        <button onClick={downloadExcel} className="download-link btn">Get Excel Sheet</button>
      </div>
    </div>
  );
};

export default App;
