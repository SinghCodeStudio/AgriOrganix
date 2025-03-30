import React, { useState, useEffect } from "react";
import Data from "./Inquiries/Data";
import GraphsInquiry from "./Inquiries/GraphsInquiry";
import WeeklyInsights from "./WeeklyInsights";
import TableInquiry from "./Inquiries/TableInquiry";

export default function Inquiries() {
  // State for dynamically updating weekly and yearly insights based on table data
  const [weeklyData, setWeeklyData] = useState({
    inquiries: 30,
    resolved: 20,
    inProgress: 10,
  });

  const [yearlyData, setYearlyData] = useState({
    inquiries: 120,
    resolved: 90,
    inProgress: 30,
  });

  const [filteredInquiries, setFilteredInquiries] = useState([]);

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

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");  // Added state for category filter

  const categories = ["Soil Testing", "Crop Health", "Organic Farming", "Fertilizer Advice", "Pest Control"];

  useEffect(() => {
    // Filtering logic
    const filtered = inquiriesData.filter(
      (inquiry) =>
        (statusFilter === "" || inquiry.status === statusFilter) &&
        (categoryFilter === "" || inquiry.category === categoryFilter) &&
        inquiry.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredInquiries(filtered);
  }, [searchQuery, statusFilter, categoryFilter]);

  // Calculate weekly and yearly insights based on filtered data
  useEffect(() => {
    const weeklyResolved = filteredInquiries.filter(inquiry => inquiry.status === "Completed").length;
    const weeklyInProgress = filteredInquiries.filter(inquiry => inquiry.status === "In Progress").length;
    const weeklyTotal = filteredInquiries.length;

    const yearlyResolved = inquiriesData.filter(inquiry => inquiry.status === "Completed").length;
    const yearlyInProgress = inquiriesData.filter(inquiry => inquiry.status === "In Progress").length;
    const yearlyTotal = inquiriesData.length;

    // Update the data dynamically
    setWeeklyData({
      inquiries: weeklyTotal,
      resolved: weeklyResolved,
      inProgress: weeklyInProgress,
    });

    setYearlyData({
      inquiries: yearlyTotal,
      resolved: yearlyResolved,
      inProgress: yearlyInProgress,
    });
  }, [filteredInquiries]);

  return (
    <div>
      {/* Weekly Insights Section (Dynamic) */}
      <WeeklyInsights title={"WEEKLY INSIGHTS"} />
      <Data inquiries={weeklyData.inquiries} resolved={weeklyData.resolved} inProgress={weeklyData.inProgress} />

      {/* Yearly Insights Section (Dynamic) */}
      <WeeklyInsights title={"YEARLY INSIGHTS"} />
      <Data inquiries={yearlyData.inquiries} resolved={yearlyData.resolved} inProgress={yearlyData.inProgress} />

      {/* Additional Components */}
      <GraphsInquiry />
      <TableInquiry
        inquiriesData={filteredInquiries}
        setSearchQuery={setSearchQuery}
        setStatusFilter={setStatusFilter}
        setCategoryFilter={setCategoryFilter}
      />
    </div>
  );
}
