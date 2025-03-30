import React, { useState } from "react";
import "../../CSS/Inquiries/TableInquiry.css";
import Search from "../../Images/SearchIcon.png";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import Papa from "papaparse";

const inquiriesData = [
  { farmerId: "INQ-1010", testId: "BHO2A", testDate: "29-Jan-2025 10:30 AM", testName: "SOIL Ph Testing", report: "Download Report" },
  { farmerId: "INQ-1009", testId: "BHO2A", testDate: "28-Jan-2025 02:15 PM", testName: "WATER TDS Testing", report: "Download Report" },
  { farmerId: "INQ-1008", testId: "BHO2A", testDate: "27-Jan-2025 11:00 AM", testName: "SOIL & WATER Ph Testing", report: "Download Report" },
  { farmerId: "INQ-1007", testId: "BHO2A", testDate: "26-Jan-2025 03:45 PM", testName: "SOIL & WATER Ph Testing", report: "Download Report" },
  { farmerId: "INQ-1006", testId: "BHO2A", testDate: "25-Jan-2025 09:20 AM", testName: "SOIL Conductivity Testing", report: "Download Report" },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTestType, setSelectedTestType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const testTypes = [...new Set(inquiriesData.map((inquiry) => inquiry.testName))];

  const filteredInquiries = inquiriesData.filter((inquiry) => {
    return (
      (searchQuery === "" || inquiry.farmerId.toLowerCase().includes(searchQuery.toLowerCase()) || inquiry.testName.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedTestType === "" || inquiry.testName === selectedTestType) &&
      (selectedDate === "" || inquiry.testDate.includes(selectedDate))
    );
  });

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
        <h3 className="text-success fw-bold UserIn">FARMER INQUIRIES</h3>
      </div>
      <hr className="HRM" />

      {/* Search and Filters */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="search-boxI">
          <input
            type="text"
            className="form-control"
            placeholder="Search by ID or Test Name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">
            <img src={Search} alt="Search" className="SearchI" />
          </span>
        </div>
        <div className="filters">
          {/* Test Type Filter */}
          <select className="btn ButtonDM" onChange={(e) => setSelectedTestType(e.target.value)}>
            <option value="">All Test Types</option>
            {testTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          
          {/* Date Filter */}
          <input
            type="date"
            className="btn ButtonDM"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      {/* Inquiry Table */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Farmer ID</th>
            <th>Test ID</th>
            <th>Test Date</th>
            <th>Test Name</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          {filteredInquiries.length > 0 ? (
            filteredInquiries.map((inquiry, index) => (
              <tr key={index}>
                <td>{inquiry.farmerId}</td>
                <td>{inquiry.testId}</td>
                <td>{inquiry.testDate}</td>
                <td>{inquiry.testName}</td>
                <td>
                  <a href="#" className="text-primary">{inquiry.report}</a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">No records found.</td>
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
