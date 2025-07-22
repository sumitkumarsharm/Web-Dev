import React from "react";
import "./ExternalStyle.css";

const ExternalStyle = () => {
  return (
    <nav id = "Navigationbar">
      <h1>Metrial UI</h1>
      <ul style={{ display: "flex", gap: 40 }}>
        <li style={{ cursor: "pointer" }}>Home</li>
        <li style={{ cursor: "pointer" }}>Contact</li>
        <li style={{ cursor: "pointer" }}>About</li>
        <li style={{ cursor: "pointer" }}>Service</li>
      </ul>
    </nav>
  );
};

export default ExternalStyle;
