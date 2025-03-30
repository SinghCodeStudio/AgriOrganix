import React, { useState } from "react";
import "../../CSS/Inquiries/TableInquiry.css";
import Search from "../../Images/SearchIcon.png";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import Papa from "papaparse";

const inquiriesData = [
  { id: "INQ-1010", date: "29-Jan-2025 10:30 AM", product: "Isabion Biostimulant", status: "Order ready", transaction: "TTCNI022000800502", category: "Organic Farming" },
  { id: "INQ-1009", date: "28-Jan-2025 02:15 PM", product: "Isabion Biostimulant", status: "Order ready", transaction: "TTCNI022000800591", category: "Organic Farming" },
  { id: "INQ-1008", date: "27-Jan-2025 11:00 AM", product: "No Virus Bio Viricide", status: "Order ready", transaction: "PTCNI022000800594", category: "Pest Control" },
  { id: "INQ-1007", date: "26-Jan-2025 03:45 PM", product: "EBS Bacillus Subtilis", status: "Shipped", transaction: "TTCNI022000800500", category: "Crop Health" },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(""); 

  const categories = ["Soil Testing", "Crop Health", "Organic Farming", "Fertilizer Advice", "Pest Control"];

  const filteredInquiries = inquiriesData.filter(
    (inquiry) =>
      (statusFilter === "" || inquiry.status === statusFilter) &&
      (categoryFilter === "" || inquiry.category === categoryFilter) &&
      inquiry.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadCSV = () => {
    const csv = Papa.unparse(filteredInquiries.length > 0 ? filteredInquiries : inquiriesData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "inquiries.csv");
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredInquiries.length > 0 ? filteredInquiries : inquiriesData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inquiries");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "inquiries.xlsx");
  };

  return (
    <div className="container TableInquiry shadow">
      <div className="d-flex justify-content-between align-items-center p-3 UserDash">
        <h3 className="text-success fw-bold UserIn">ORDER TRACKER</h3>
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
          {/* Status Filter */}
          <select className="btn ButtonDM" onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="Order ready">Order ready</option>
            <option value="Shipped">Shipped</option>
            <option value="Out of delivery">Out of delivery</option>
            <option value="Delivered">Delivered</option>
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
            <th>Order ID</th>
            <th>Date & Time</th>
            <th>Product Name</th>
            <th>Status</th>  
            <th>Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredInquiries.length > 0 ? (
            filteredInquiries.map((inquiry) => (
              <tr key={inquiry.id}>
                <td>{inquiry.id}</td>
                <td>{inquiry.date}</td>
                <td>{inquiry.product}</td>
                <td>{inquiry.status}</td>
                <td>{inquiry.transaction}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">No orders found.</td>
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
