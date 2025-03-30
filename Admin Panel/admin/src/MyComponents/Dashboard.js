import React from "react";
import { Routes, Route } from "react-router-dom";
import SidePanel from "./Dashboard/SidePanel";
import Navbar from "./Dashboard/Navbar";
import WeeklyData from "./Dashboard/Weekly";
import WeeklyChart from "./Dashboard/WeeklyChart";
import Tickets from "./Dashboard/Tickets";
import Inquiries from "./Inquiries";
import WeeklyInsights from "./WeeklyInsights";
import Sales from "./Sales";
import Farmer from "./Farmer";
import Analytics from "./Analytics";
import Employees from "./Employees";
import Feedback from "./Feedback";

export default function Dashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <SidePanel />

      {/* Main Content */}
      <div className="content" style={{ marginLeft: "275px", width: "calc(100% - 275px)" }}>
        <Navbar />

        {/* Routing Setup */}
        <Routes>
          {/* Default Dashboard View */}
          <Route
            path="/"
            element={
              <>
                <WeeklyInsights title="WEEKLY INSIGHTS" />
                <WeeklyData 
                data={{
                  visitors: 625,
                  feedbacks: 48,
                  employees: 26,
                  sales: 26000,
                  farmers: 412,
                  orders: 589,
                  reports: 74,
                  enquiries: 18,
                }}/>
                <WeeklyChart />
                <Tickets />
              </>
            }
          />
          {/* Other Pages */}
          <Route path="/inquiries" element={<Inquiries />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/farmers" element={<Farmer />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
}
