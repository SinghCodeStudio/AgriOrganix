import React from "react";
import "../CSS/Inquiries/WeeklyIn.css";

export default function WeeklyInsights({ title }) {
  return (
    <div className="container WeeklyIn shadow">
      <h1 className="WeeklyName">{title}</h1>
    </div>
  );
}
