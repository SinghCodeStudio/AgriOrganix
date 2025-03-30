import React, { useState } from "react";
import "../../CSS/Inquiries/TableInquiry.css";
import Search from "../../Images/SearchIcon.png";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import Papa from "papaparse";

const inquiriesData = [
  { id: "INQ-1010", name: "Jitu Singh", date: "29-Jan-2025 10:30 AM", phone: "9852124556", location: "Ahmedabad", type: "Member" },
  { id: "INQ-1009", name: "Ramanlal Solanki", date: "28-Jan-2025 02:15 PM", phone: "8145234158", location: "Gandhinagar", type: "Plus" },
  { id: "INQ-1008", name: "Kiran Dube", date: "27-Jan-2025 11:00 AM", phone: "7412365489", location: "Gandhinagar", type: "Member" },
  { id: "INQ-1007", name: "Lalu Singh", date: "26-Jan-2025 03:45 PM", phone: "6123548596", location: "Vavol", type: "Member" },
  { id: "INQ-1006", name: "Hiten Thakor", date: "25-Jan-2025 09:20 AM", phone: "9645210236", location: "Chandkheda", type: "Plus" },
  { id: "INQ-1005", name: "Naveen Chahan", date: "25-Jan-2025 09:20 AM", phone: "9662151840", location: "Deh Gam", type: "Member" },
  { id: "INQ-1004", name: "Brijesh Chudasama", date: "25-Jan-2025 09:20 AM", phone: "7383485279", location: "Nana Chiloda", type: "Member" },
  { id: "INQ-1003", name: "Dinesh Patel", date: "24-Jan-2025 09:20 AM", phone: "9601145081", location: "Vijapur", type: "Member" },
  { id: "INQ-1002", name: "Kishan Mujpara", date: "23-Jan-2025 09:20 AM", phone: "9552121420", location: "Surendranagar", type: "Plus" },
  { id: "INQ-1001", name: "Raju Parmar", date: "22-Jan-2025 09:20 AM", phone: "7201876889", location: "Naroda Patiya", type: "Member" },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const types = ["Member", "Plus"];
  const locations = [...new Set(inquiriesData.map((inquiry) => inquiry.location))];

  const filteredInquiries = inquiriesData.filter(
    (inquiry) =>
      (typeFilter === "" || inquiry.type === typeFilter) &&
      (locationFilter === "" || inquiry.location === locationFilter) &&
      inquiry.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadCSV = () => {
    const csv = Papa.unparse(filteredInquiries.length > 0 ? filteredInquiries : inquiriesData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "farmers_data.csv");
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredInquiries.length > 0 ? filteredInquiries : inquiriesData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Farmers");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "farmers_data.xlsx");
  };

  return (
    <div className="container TableInquiry shadow">
      <div className="d-flex justify-content-between align-items-center p-3 UserDash">
        <h3 className="text-success fw-bold UserIn">FARMER DETAILS</h3>
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
          {/* Type Filter */}
          <select className="btn ButtonDM" onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">All Types</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          {/* Location Dropdown */}
          <select className="btn ButtonDM" onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Inquiry Table */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Farmer ID</th>
            <th>Name</th>
            <th>Registration Date</th>
            <th>Phone Number</th>  
            <th>Location</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredInquiries.length > 0 ? (
            filteredInquiries.map((inquiry) => (
              <tr key={inquiry.id}>
                <td>{inquiry.id}</td>
                <td>{inquiry.name}</td>
                <td>{inquiry.date}</td>
                <td>{inquiry.phone}</td>
                <td>{inquiry.location}</td>
                <td>{inquiry.type}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">No records found.</td>
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
