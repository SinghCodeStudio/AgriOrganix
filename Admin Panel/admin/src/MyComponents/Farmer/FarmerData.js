import React, { Component } from "react";
import "../../CSS/Farmer/FarmerData.css";

class NewFarmersPlusMembers extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center datarow">
          <div className="col-md-5 LeftData">
            <div className="info-card">
              <p className="title">New Farmers</p>
              <p className="value">45</p>
            </div>
          </div>
          <div className="col-md-5 RightData">
            <div className="info-card">
              <p className="title">Plus Members</p>
              <p className="value">70</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewFarmersPlusMembers;
