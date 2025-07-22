import React from "react";

const InlineStyle = () => {
  return (
    <nav
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        fontSize: 25,
        justifyContent: "space-between",
        paddingInline: 20,
      }}
    >
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

export default InlineStyle;
