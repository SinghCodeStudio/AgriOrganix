import React from 'react'
import WeeklyInsights from './WeeklyInsights'
import FeedbackData from './Feedback/FeedbackData'
import FeedbackChart from './Feedback/FeedbackChart'
import FeedbackLine from './Feedback/FeedbackLine'
import FeedbackTable from './Feedback/FeedbackTable'

export default function Feedback() {
  return (
    <div>
      <WeeklyInsights title={"WEEKLY INSIGHTS"}/>
      <FeedbackData />
      <FeedbackChart />
      <FeedbackLine />
      <FeedbackTable />
    </div>
  )
}
