import React from 'react'
import "../../CSS/Analytics/AnalyticsData.css"

export default function AnalyticsData() {
  return (
    <div>
      <div className="dashboard-container">
        <div className="row">
          {/* Soil Test Conducted */}
          <div className="col-md-3">
            <div className="dashboard-card">
              <p>Soil test conducted</p>
              <h2>45</h2>
            </div>
          </div>

          {/* Water Test Conducted */}
          <div className="col-md-3">
            <div className="dashboard-card">
              <p>Water test conducted</p>
              <h2>70</h2>
            </div>
          </div>

          {/* New Reports */}
          <div className="col-md-3">
            <div className="dashboard-card">
              <p>New reports</p>
              <h2>45</h2>
            </div>
          </div>

          {/* Pending Reports */}
          <div className="col-md-3">
            <div className="dashboard-card">
              <p>Pending reports</p>
              <h2>70</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
