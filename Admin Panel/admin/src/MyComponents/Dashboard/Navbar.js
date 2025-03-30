import React, { useState, useEffect } from "react";
import "../../CSS/Dashboard/Navbar.css";
import Bell from "../../Images/BellAdmin.png";
import Mail from "../../Images/MailA.png";
import DateIcon from "../../Images/DateIcon.png";

export default function Navbar() {
  // State to store date & time
  const [dateTime, setDateTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="NavA">
      <div className="container-fluid d-flex justify-content-end align-items-center h-100">
        <img src={DateIcon} alt="Date" className="DateTime" />
        <p className="DateTimeUpdate">
          {dateTime.toLocaleDateString()} - {dateTime.toLocaleTimeString()}
        </p>
        <img src={Bell} alt="Bell" className="BellIconA" />
        <img src={Mail} alt="Mail" className="MailIconA" />
      </div>
    </div>
  );
}
