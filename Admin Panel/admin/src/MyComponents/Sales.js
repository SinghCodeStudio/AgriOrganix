import React from 'react'
import WeeklyInsight from "./WeeklyInsights"
import SalesData from "./Sales/SalesData"
import RevenueGrowth from './Sales/RevenueGrowth'
import PaymentMethod from './Sales/PaymentMethod'
import OrderTracker from './Sales/OrderTracker'
import YearlySalesData from './Sales/YearlySalesData'

export default function Sales() {
  return (
    <div>
        <WeeklyInsight title={"WEEKLY INSIGHTS"}/>
        <SalesData/>
        <WeeklyInsight title={"YEARLY INSIGHTS"}/>
        <YearlySalesData />
        <RevenueGrowth/>
        <PaymentMethod/>
        <OrderTracker/>
    </div>
  )
}
