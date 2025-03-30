import React from "react";
import "../../CSS/Inquiries/Data.css";

const Data = ({ inquiries = 0, resolved = 0, inProgress = 0 }) => {
  return (
    <div className="BoxInq">
      <div className="row justify-content-end">
        {/* Inquiry Card */}
        <div className="col-md-3">
          <div className="card summary-card">
            <div className="card-body text-center">
              <p className="card-title">Inquiries</p>
              <h3 className="card-number">{inquiries}</h3>
            </div>
          </div>
        </div>

        {/* Resolved Card */}
        <div className="col-md-3">
          <div className="card summary-card">
            <div className="card-body text-center">
              <p className="card-title">Resolved</p>
              <h3 className="card-number">{resolved}</h3>
            </div>
          </div>
        </div>

        {/* In Progress Card */}
        <div className="col-md-3">
          <div className="card summary-card">
            <div className="card-body text-center">
              <p className="card-title">In Progress</p>
              <h3 className="card-number">{inProgress}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
