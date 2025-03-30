import React from "react";
import "../../CSS/Sales/SalesData.css";

const DashboardCards = () => (
  <div className="SalesC mt-4">
    <div className="row g-3">
      {[
        { title: "Orders", value: "120" },
        { title: "Live order", value: "45" },
        { title: "Sales growth", value: "70" },
        { title: "Visitors", value: "120" },
        { title: "Today revenue", value: "45" },
        { title: "Target achieved", value: "62%" },
        { title: "Add to cart", value: "120" },
        { title: "Order placed", value: "45" },
        { title: "Order delivered", value: "70" },
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
