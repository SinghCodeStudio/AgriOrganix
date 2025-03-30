import React from 'react'
import WeeklyInsights from './WeeklyInsights'
import AnalyticsData from "./Analytics/AnalyticsData"
import AnalyticsChart from "./Analytics/AnalyticsChart"
import AnalyticsBar from "./Analytics/AnalyticsBar"
import AnalyticsTable from "./Analytics/AnalyticsTable"

export default function Analytics() {
  return (
    <div>
      <WeeklyInsights title={"WEEKLY INSIGHTS"} />
      <AnalyticsData />
      <AnalyticsChart />
      <AnalyticsBar />
      <AnalyticsTable />
    </div>
  )
}
