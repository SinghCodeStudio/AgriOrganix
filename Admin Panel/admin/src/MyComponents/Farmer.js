import React from "react";
import WeeklyInsights from "./WeeklyInsights";
import FarmerData from "./Farmer/FarmerData";
import FarmerChart from "./Farmer/FarmerChart";
import FarmerTable from "./Farmer/FarmerTable"

export default function Farmer() {
  return (
    <div>
      <WeeklyInsights title={"WEEKLY INSIGHTS"} />
      <FarmerData />
      <WeeklyInsights title={"YEARLY INSIGHTS"} />
      <FarmerData />
      <FarmerChart />
      <FarmerTable />
    </div>
  );
}
