import React from 'react'
import EmployeesData from "./Employees/EmployeesData"
import EmployeesChart from "./Employees/EmployeesChart"
import EmployeesTable from "./Employees/EmployeesTable"

export default function Employees() {
  return (
    <div>
      <EmployeesData />
      <EmployeesChart />
      <EmployeesTable />
    </div>
  )
}
