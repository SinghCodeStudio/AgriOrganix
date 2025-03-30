import React, { Component } from "react";
import "../../CSS/Employees/EmployeesTable.css";

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: "INQ-1010", name: "Rahul Patel", number: "9876543210", role: "Field Executive", department: "Sales", location: "Ahmedabad", date: "01-09-2023" },
        { id: "INQ-1009", name: "Priya Sharma", number: "9988776655", role: "Supervisor", department: "Operations", location: "Gandhinagar", date: "01-09-2023" },
        { id: "INQ-1008", name: "Alok Mehta", number: "9123456789", role: "Sales Manager", department: "Sales", location: "Surat", date: "22-04-2023" },
        { id: "INQ-1007", name: "Neha Verma", number: "9564123789", role: "HR Executive", department: "HR", location: "Ahmedabad", date: "22-04-2023" },
        { id: "INQ-1006", name: "Suresh Yadav", number: "9987412365", role: "IT Support", department: "IT", location: "Gandhinagar", date: "20-11-2023" },
        { id: "INQ-1005", name: "Pooja Singh", number: "9678541236", role: "Accountant", department: "Finance", location: "Anand", date: "20-11-2023" },
        { id: "INQ-1004", name: "Rohit Desai", number: "9321456789", role: "Customer Support", department: "Customer Care", location: "Surat", date: "05-12-2023" },
        { id: "INQ-1003", name: "Anjali Nair", number: "9456123789", role: "Operations Lead", department: "Operations", location: "Mehsana", date: "05-12-2023" },
        { id: "INQ-1002", name: "Manish Dubey", number: "9785463210", role: "Software Dev", department: "IT", location: "Ahmedabad", date: "10-01-2024" },
        { id: "INQ-1001", name: "Kavita Joshi", number: "9874123654", role: "Data Analyst", department: "Analytics", location: "Ahmedabad", date: "10-01-2024" },
      ],
      search: "",
      currentPage: 1,
      employeesPerPage: 5,
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { employees, search, currentPage, employeesPerPage } = this.state;

    // Filtered employees based on search
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.role.toLowerCase().includes(search.toLowerCase()) ||
        employee.department.toLowerCase().includes(search.toLowerCase()) ||
        employee.location.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    return (
      <div className="container-fluid employee-details-container">
        <h3 className="title">EMPLOYEE DETAILS</h3>
        <div className="search-bar">
          <input type="text" className="form-control search-input" placeholder="Search.." onChange={this.handleSearchChange} />
          <button className="search-button">🔍</button>
        </div>

        <div className="filter-section">
          <span className="filter-label">Filters:</span>
          <button className="filter-button">Role</button>
          <button className="filter-button">Department</button>
          <button className="filter-button">Location</button>
        </div>

        <table className="table employee-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Number</th>
              <th>Role</th>
              <th>Department</th>
              <th>Location</th>
              <th>Joining Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.number}</td>
                <td>{employee.role}</td>
                <td>{employee.department}</td>
                <td>{employee.location}</td>
                <td>{employee.date}</td>
                <td>
                  <button className="edit-button">EDIT</button> | <button className="remove-button">REMOVE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          {[...Array(Math.ceil(filteredEmployees.length / employeesPerPage)).keys()].map((number) => (
            <button
              key={number + 1}
              className={`page-button ${currentPage === number + 1 ? "active" : ""}`}
              onClick={() => this.handlePageChange(number + 1)}
            >
              {number + 1}
            </button>
          ))}
        </div>

        <div className="export-section">
          <span className="export-label">Click to:</span>
          <a href="#" className="export-link">Get CSV Sheet</a> | <a href="#" className="export-link">Get Excel Sheet</a>
        </div>
      </div>
    );
  }
}

export default EmployeeDetails;
