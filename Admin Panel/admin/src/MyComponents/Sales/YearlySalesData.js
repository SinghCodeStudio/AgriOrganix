import React from "react";
import "../../CSS/Sales/SalesData.css";

const DashboardCards = () => (
  <div className="SalesC mt-4">
    <div className="row g-3">
      {[
        { title: "Orders", value: "12.6K" },
        { title: "Live order", value: "45K" },
        { title: "Sales growth", value: "7M" },
      ].map((item, index) => (
        <div className="col-md-4 cardmain" key={index}>
          <div className="card text-center shadow">
            <div className="card-body">
              <h6 className="card-title">{item.title}</h6>
              <h3 className="card-value">{item.value}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DashboardCards;
